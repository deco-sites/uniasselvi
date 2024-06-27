import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import { invoke } from "site/runtime.ts";
import Image from "apps/website/components/Image.tsx";

interface FormProps {
    active_index: number;
    image
}

const Form = ({ active_index, image }: FormProps) => {
const etapaForm = useSignal<number>(active_index)

  const data = useSignal({
    email: "",
    telefone: "",
    cpf: "",
    nacionalidade: "",    
    nome: "",
    data_nasc: "",
    cep: "",
    endereco: "",
    sem_numero: false,
    numero: "",
    bairro: "",
    complemento: "",
    cidade:"",
    estado: "",
    sexo: "",
    possui_medio: "",
      ano_encerramento: "",
    whatsapp: "N"
  });

  const errors = useSignal({
    email: false,
    telefone: false,
    cpf: false,
    nacionalidade: false,    
    nome: false,
    data_nasc: false,
    cep: false,
    endereco: false,
    numero: false,
    bairro: false,
    cidade:false,
    estado: false,
    sexo: false,
    possui_medio: false,
    ano_encerramento: false
  });

  const submit = async (e: Event) => {
    
    e.preventDefault();

    if(!formIsValid()){
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);

    // Exemplo de como pegar os parâmetros da query
    const ecur_codi = urlParams.get('ecur_codi'); // Valor de param1
      const epol_codi = urlParams.get('epol_codi'); // Valor de param2
      
      const dataToSend = {
        person: {
            origin: "1",
            name: data.value.nome,
            email: data.value.email,
            document: data.value.cpf,
            mobileNumber: data.value.telefone,
            birthDate: data.value.data_nasc,
            gender: data.value.sexo,
            postalCode: data.value.cep,
            address: data.value.endereco,
            addressNumber: data.value.numero,
            neighborhood: data.value.bairro,
            addressComplement: data.value.complemento,
            cityName: data.value.cidade,
            cityState: data.value.estado,
            highSchoolFinishYear: data.value.ano_encerramento
        },
        company: 1,
        branchCode: epol_codi,
        modality: "2",
        entranceType: "V",
        mainCourse: ecur_codi,
        allowWhatsAppContact: data.value.whatsapp,
        highSchoolComplete: data.value.possui_medio,
        placeOfRegistration: "2",
        originServer: "CENTRAL-CAPTACAO",
        userIp: '',
      }


    try {
        const response = await invoke.site.actions.CreateSelectionExam({ dataToSend });
        const result = response.data.CreateSelectionExam;
        if (result && result.studentId) {
            etapaForm.value = 3
            if(data.value.cpf && data.value.data_nasc){
                setTimeout(async ()=>{
                    const token = await invoke.site.actions.getTokenAva({cpf: data.value.cpf, data_nasc:data.value.data_nasc});

                    const domain = 'uniasselvi.com.br'
                    if(token){
                        document.cookie = `uniToken=${token}; path=/; domain=.${domain}; secure=true; sameSite=None`;
                        window.location.href = `https://ava2.${domain}`
                    }
                }, 5000)
            }

        }
    } catch (error) {
            console.error('Erro ao invocar CreateSelectionExam:', error);
            // Trate o erro conforme necessário
    }

  }

  const handleChange = (event: JSX.TargetedInputEvent<HTMLInputElement>, value: string) => {
    const key = event.currentTarget.name;
    data.value = {
      ...data.value,
      [key]: value,
    };
  };

  const formIsValid = () => {
    Object.keys(errors.value).forEach(function(key){
        if(!data.value[key as keyof typeof data.value]){
            errors.value = {
                ...errors.value,
                [key]: true
            }
        }else{
            errors.value = {
                ...errors.value,
                [key]: false
            }
        }
    })
    const keys_length = {
        'cpf' : 11,
        'cep' : 8,
        'data_nasc' : 8
    };

    Object.keys(keys_length).forEach(function(key,length){
        if(!data.value[key as keyof typeof data.value] || (data.value[key as keyof typeof data.value].length < length)){
            errors.value = {
                ...errors.value,
                [key]: true
            }
        }else{
            errors.value = {
                ...errors.value,
                [key]: false
            }
        }
    })

    if(data.value.possui_medio == 'N'){
        errors.value.ano_encerramento = false;
    }

    let is_valid=true;
    Object.values(errors.value).forEach(function(value){
        if(value == true){
            is_valid = false;
        }
    })
    return is_valid;
    }
  

  const handleCpfBlur = async () => {
    const response = await invoke.site.actions.cpfBlur({ cpf: data.value.cpf });
    const updates = {
      nacionalidade: response.pessoa.pess_naci_desc ? response.pessoa.pess_naci_desc : data.value.nacionalidade,
      data_nasc: response.pessoa.pess_dnas ? response.pessoa.pess_dnas : data.value.data_nasc,
      sexo: response.pessoa.pess_sexo ? response.pessoa.pess_sexo : data.value.sexo,
      ano_encerramento: response.pessoa.pess_ance ? response.pessoa.pess_ance : data.value.ano_encerramento,
      cep: response.pessoa.pess_cep ? response.pessoa.pess_cep : data.value.cep,
      numero: response.pessoa.pess_nume ? response.pessoa.pess_nume : data.value.numero,
      complemento: response.pessoa.pess_comp ? response.pessoa.pess_comp : data.value.complemento,
      possui_medio: response.pessoa.pess_ance ? 'S' : 'N'
    };
    
    data.value = {
      ...data.value,
      ...updates,
    };

    if(data.value.cep){
        let element = document.querySelector('input[name="cep"]');
        const event = new Event('input', { bubbles: true });
        if(element && Object){
            const setValue = Object?.getOwnPropertyDescriptor(element.__proto__, 'value').set;
            setValue?.call(element, data.value.cep);
            element.dispatchEvent(event);
        }
      }
      
  }

    const formatCpf = (value: string) => {
      
        if (value) {
            const numericValue = value.replace(/\D/g, "").slice(0, 11);
            const cpfMasked = numericValue.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                (_, p1, p2, p3, p4) => `${p1}.${p2}.${p3}-${p4}`
            );
            return cpfMasked
        }    
  };

    const formatDate = (value: string) => {
      
        if (value) {
            
            const numericValue = value.replace(/\D/g, "").slice(0, 8);
            
            // Apply date mask: DD/MM/YYYY
            const dateMasked = numericValue.replace(
              /(\d{2})(\d{2})(\d{4})/,
              (_, p1, p2, p3) => `${p1}/${p2}/${p3}`
            );
        
            return dateMasked;

        }

  };

    const formatCep = (value: string) => {
      
        if (value) {
            // Remove non-numeric characters
            const numericValue = value.replace(/\D/g, "").slice(0, 8);
            
            // Apply CEP mask: XXXXX-XXX
            const cepMasked = numericValue.replace(
                /(\d{5})(\d{3})/,
                (_, p1, p2) => `${p1}-${p2}`
            );
        
            return cepMasked;
        }
  };

  const handleCepBlur = async () => {
    const response = await invoke.site.actions.cepBlur({cep:data.value.cep})
    const updates = {
      endereco: response.end,
      bairro: response.bairro,
      cidade: response.cidade_nome,
      estado: response.uf,
    };
    data.value = {
      ...data.value,
      ...updates,
      };
      
  }

  const years = [];
  for (let year = 1980; year <= 2024; year++) {
    years.push(year);
  }

  const css = `
  .required{
    color: #de2424;
  }

  .radio-container {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
    margin-right:12px;
  }
  
  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  .radio-container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .radio-container input:checked ~ .checkmark {
    background-color: #000;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .radio-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .radio-container .checkmark:after {
    top: 7px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
  }

  .btn-yellow{
    background:#ffdb1a;
  }
  .btn-yellow:hover{
    background:#ffdb1a;
  }
  `
    
    const mostrarForm = useSignal<boolean>(false);
    
  return (
      <div>
          
          <style>{css}</style>
          
          {etapaForm.value == 1 && (
            <div class="text-center">
                <p class="text-3xl font-base text-black">Agora falta pouco para concluir sua inscrição em <span class="text-[#00a59a] font-bold">[Administração]</span> na UNIASSELVI.</p>
                <p class="text-xl font-base text-black mt-[40px]">Selecione sua <strong>forma de ingresso</strong> e preencha as informações abaixo para dar o próximo grande passo na sua carreira:</p>
                <div class="flex flex-col md:flex-row justify-center flex-wrap gap-[15px] my-10">
                    <a href="#form" onClick={() => { mostrarForm.value = true }} class="md:flex-[0_0_190px] bg-[#ededed] grid md:grid-rows-[auto_1fr_auto] justify-center p-4">
                        <div class="hidden md:flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42"><path fill="#3b3c3a" fill-rule="evenodd" d="M1097.18,6298.38a1.655,1.655,0,1,0,0-3.31h-4.72a1.655,1.655,0,1,0,0,3.31h4.72Zm-4.72,7.74h4.72a1.66,1.66,0,1,0,0-3.32h-4.72A1.66,1.66,0,0,0,1092.46,6306.12Zm-4.05-12.05-0.82-.82a0.726,0.726,0,0,0-.99-0.03l-3.39,3-1.57-1.24a0.729,0.729,0,0,0-.95.05l-0.82.81a0.739,0.739,0,0,0-.04,1l2.86,3.32a0.717,0.717,0,0,0,1.02.06,0.17,0.17,0,0,0,.06-0.06l4.66-5.09h0A0.728,0.728,0,0,0,1088.41,6294.07Zm0,8.05-0.82-.81a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.72,0.72,0,0,0-.96.06l-0.82.82a0.735,0.735,0,0,0-.03.98l2.87,3.32a0.729,0.729,0,0,0,1.03.06l0.06-.06,4.64-5.09h0A0.741,0.741,0,0,0,1088.41,6302.12Zm-0.82,7.25a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.729,0.729,0,0,0-.95.05l-0.82.82a0.737,0.737,0,0,0-.04.99l2.87,3.32a0.738,0.738,0,0,0,1.03.06l0.06-.06,4.64-5.1h0a0.729,0.729,0,0,0-.02-1Zm-9.86,13.55h13.7v-2.27a4.488,4.488,0,0,1,.31-1.58h-14.01a0.881,0.881,0,0,1-.89-0.87h0v-27.45a0.89,0.89,0,0,1,.87-0.9h23.06a0.88,0.88,0,0,1,.85.9v11.4l2.04-3.47a4.514,4.514,0,0,1,1.81-1.71v-6.22a4.737,4.737,0,0,0-4.7-4.75h-23.04a4.733,4.733,0,0,0-4.73,4.73v27.48A4.722,4.722,0,0,0,1077.73,6322.92Zm14.73-9.07h2.28l1.95-3.32h-4.23A1.66,1.66,0,1,0,1092.46,6313.85Zm16.23-14.14a5.136,5.136,0,0,0-1.4.19l-0.14.04a1.058,1.058,0,0,0-.52.46l-11.62,19.73a1.222,1.222,0,0,0-.14.56l-0.05,6.24a1.1,1.1,0,0,0,1.12,1.07,1.068,1.068,0,0,0,.25-0.03l0.14-.05,0.12-.06,5.39-3.13a1.025,1.025,0,0,0,.4-0.4l11.61-19.72a1.1,1.1,0,0,0,.12-0.83A5.474,5.474,0,0,0,1108.69,6299.71Z" transform="translate(-1073 -6286)"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">Vestibular</h3>
                            <p class="hidden md:block text-sm leading-5">Ingresse na graduação realizando uma <b>prova simples</b> (Vestibular On-line).</p>
                        </div>
                        <button type="button" class="hidden md:block mt-4 bg-[#ffef98] rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </a>
                    <div class="md:flex-[0_0_190px] bg-[#ededed] grid md:grid-rows-[auto_1fr_auto] justify-center p-4">
                        <div class="hidden md:flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42"><path fill="#3b3c3a" fill-rule="evenodd" d="M1097.18,6298.38a1.655,1.655,0,1,0,0-3.31h-4.72a1.655,1.655,0,1,0,0,3.31h4.72Zm-4.72,7.74h4.72a1.66,1.66,0,1,0,0-3.32h-4.72A1.66,1.66,0,0,0,1092.46,6306.12Zm-4.05-12.05-0.82-.82a0.726,0.726,0,0,0-.99-0.03l-3.39,3-1.57-1.24a0.729,0.729,0,0,0-.95.05l-0.82.81a0.739,0.739,0,0,0-.04,1l2.86,3.32a0.717,0.717,0,0,0,1.02.06,0.17,0.17,0,0,0,.06-0.06l4.66-5.09h0A0.728,0.728,0,0,0,1088.41,6294.07Zm0,8.05-0.82-.81a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.72,0.72,0,0,0-.96.06l-0.82.82a0.735,0.735,0,0,0-.03.98l2.87,3.32a0.729,0.729,0,0,0,1.03.06l0.06-.06,4.64-5.09h0A0.741,0.741,0,0,0,1088.41,6302.12Zm-0.82,7.25a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.729,0.729,0,0,0-.95.05l-0.82.82a0.737,0.737,0,0,0-.04.99l2.87,3.32a0.738,0.738,0,0,0,1.03.06l0.06-.06,4.64-5.1h0a0.729,0.729,0,0,0-.02-1Zm-9.86,13.55h13.7v-2.27a4.488,4.488,0,0,1,.31-1.58h-14.01a0.881,0.881,0,0,1-.89-0.87h0v-27.45a0.89,0.89,0,0,1,.87-0.9h23.06a0.88,0.88,0,0,1,.85.9v11.4l2.04-3.47a4.514,4.514,0,0,1,1.81-1.71v-6.22a4.737,4.737,0,0,0-4.7-4.75h-23.04a4.733,4.733,0,0,0-4.73,4.73v27.48A4.722,4.722,0,0,0,1077.73,6322.92Zm14.73-9.07h2.28l1.95-3.32h-4.23A1.66,1.66,0,1,0,1092.46,6313.85Zm16.23-14.14a5.136,5.136,0,0,0-1.4.19l-0.14.04a1.058,1.058,0,0,0-.52.46l-11.62,19.73a1.222,1.222,0,0,0-.14.56l-0.05,6.24a1.1,1.1,0,0,0,1.12,1.07,1.068,1.068,0,0,0,.25-0.03l0.14-.05,0.12-.06,5.39-3.13a1.025,1.025,0,0,0,.4-0.4l11.61-19.72a1.1,1.1,0,0,0,.12-0.83A5.474,5.474,0,0,0,1108.69,6299.71Z" transform="translate(-1073 -6286)"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">ENEM</h3>
                            <p class="hidden md:block text-sm leading-5">Se você fez o ENEM, <strong>utilize sua nota</strong> e ingresse sem realizar a prova.</p>
                        </div>
                        <button class="hidden md:block bg-[#ffef98] mt-4 rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="md:flex-[0_0_190px] bg-[#ededed] grid md:grid-rows-[auto_1fr_auto] justify-center p-4">
                        <div class="hidden md:flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42"><path fill="#3b3c3a" fill-rule="evenodd" d="M1097.18,6298.38a1.655,1.655,0,1,0,0-3.31h-4.72a1.655,1.655,0,1,0,0,3.31h4.72Zm-4.72,7.74h4.72a1.66,1.66,0,1,0,0-3.32h-4.72A1.66,1.66,0,0,0,1092.46,6306.12Zm-4.05-12.05-0.82-.82a0.726,0.726,0,0,0-.99-0.03l-3.39,3-1.57-1.24a0.729,0.729,0,0,0-.95.05l-0.82.81a0.739,0.739,0,0,0-.04,1l2.86,3.32a0.717,0.717,0,0,0,1.02.06,0.17,0.17,0,0,0,.06-0.06l4.66-5.09h0A0.728,0.728,0,0,0,1088.41,6294.07Zm0,8.05-0.82-.81a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.72,0.72,0,0,0-.96.06l-0.82.82a0.735,0.735,0,0,0-.03.98l2.87,3.32a0.729,0.729,0,0,0,1.03.06l0.06-.06,4.64-5.09h0A0.741,0.741,0,0,0,1088.41,6302.12Zm-0.82,7.25a0.716,0.716,0,0,0-.99-0.03l-3.39,2.99-1.57-1.23a0.729,0.729,0,0,0-.95.05l-0.82.82a0.737,0.737,0,0,0-.04.99l2.87,3.32a0.738,0.738,0,0,0,1.03.06l0.06-.06,4.64-5.1h0a0.729,0.729,0,0,0-.02-1Zm-9.86,13.55h13.7v-2.27a4.488,4.488,0,0,1,.31-1.58h-14.01a0.881,0.881,0,0,1-.89-0.87h0v-27.45a0.89,0.89,0,0,1,.87-0.9h23.06a0.88,0.88,0,0,1,.85.9v11.4l2.04-3.47a4.514,4.514,0,0,1,1.81-1.71v-6.22a4.737,4.737,0,0,0-4.7-4.75h-23.04a4.733,4.733,0,0,0-4.73,4.73v27.48A4.722,4.722,0,0,0,1077.73,6322.92Zm14.73-9.07h2.28l1.95-3.32h-4.23A1.66,1.66,0,1,0,1092.46,6313.85Zm16.23-14.14a5.136,5.136,0,0,0-1.4.19l-0.14.04a1.058,1.058,0,0,0-.52.46l-11.62,19.73a1.222,1.222,0,0,0-.14.56l-0.05,6.24a1.1,1.1,0,0,0,1.12,1.07,1.068,1.068,0,0,0,.25-0.03l0.14-.05,0.12-.06,5.39-3.13a1.025,1.025,0,0,0,.4-0.4l11.61-19.72a1.1,1.1,0,0,0,.12-0.83A5.474,5.474,0,0,0,1108.69,6299.71Z" transform="translate(-1073 -6286)"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">ENCCEJA</h3>
                            <p class="hidden md:block text-sm leading-5">Se você fez o ENCCEJA, <strong>utilize sua nota</strong> e ingresse realizando uma <b>prova simples</b> (Vestibular On-line).</p>
                        </div>
                        <button class="hidden md:block bg-[#ffef98] mt-4 rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="md:flex-[0_0_190px] bg-[#ededed] grid md:grid-rows-[auto_1fr_auto] justify-center p-4">
                        <div class="hidden md:flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#3b3c3a" fill-rule="evenodd" d="M1303,6298.01a8,8,0,0,0-8,7.99,7.885,7.885,0,0,0,2.01,5.24V6324l6.01-4,5.99,4v-12.76A7.955,7.955,0,0,0,1303,6298.01Zm2.01,17.99h-4v-2.28a7.726,7.726,0,0,0,2,.28,7.927,7.927,0,0,0,2.01-.28V6316h-0.01Zm-2.01-6a4,4,0,1,1,4-4A4,4,0,0,1,1303,6310Zm0-26v12h0a9.96,9.96,0,0,1,8,15.96V6318h24v-34h-32Zm28,24h-13.99v-4H1331v4Zm0-8h-13.99v-4H1331v4Zm0-8h-24v-4h24v4Z" transform="translate(-1295 -6284)"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">2° Graduação</h3>
                            <p class="hidden md:block text-sm leading-5">Se você <strong>já possui</strong> uma graduação, ingresse sem realizar a prova.</p>
                        </div>
                        <button class="hidden md:block bg-[#ffef98] mt-4 rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                    <div class="md:flex-[0_0_190px] bg-[#ededed] grid md:grid-rows-[auto_1fr_auto] justify-center p-4">
                        <div class="hidden md:flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="49" viewBox="0 0 35 49"><path fill="#3b3c3a" fill-rule="evenodd" d="M1548.05,6327.54c-0.8-.81-1.82-1.83-2.25-2.28l-0.78-.83,2.27-2.22c1.25-1.23,2.25-2.25,2.23-2.27s-5.11-.05-11.29-0.05H1527v-6.3h11.23c6.18,0,11.26-.02,11.29-0.04s-0.98-1.05-2.23-2.28l-2.27-2.22,1.17-1.2c0.65-.65,1.67-1.67,2.27-2.26l1.1-1.07,6.19,6.06c4.08,4,6.18,6.11,6.18,6.19s-2.09,2.19-6.17,6.18c-3.39,3.33-6.18,6.05-6.2,6.05s-0.7-.66-1.51-1.46h0Zm-14.81-29.1c-4.07-3.99-6.17-6.09-6.17-6.18s2.11-2.2,6.18-6.2l6.19-6.06,1.1,1.07c0.6,0.59,1.62,1.61,2.27,2.27l1.17,1.19-2.27,2.23c-1.25,1.22-2.25,2.24-2.23,2.27s5.11,0.05,11.29.05H1562v6.29h-11.23c-6.18,0-11.26.02-11.29,0.05s0.98,1.05,2.23,2.27l2.27,2.23-0.78.82c-0.93.98-3.7,3.74-3.76,3.74-0.02,0-2.81-2.72-6.2-6.04h0Z" transform="translate(-1527 -6280)"/></svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">Transferência</h3>
                            <p class="hidden md:block text-sm leading-5">Faça a sua transferência e convalide disciplinas de outra instituição.</p>
                        </div>
                        <button class="hidden md:block bg-[#ffef98] mt-4 rounded-md shadow-[0_6px_8px_0_rgba(73,73,73,.36)] text-lg font-semibold w-full py-3 px-5">Continuar</button>
                    </div>
                </div>
            </div>
          )}

          {mostrarForm.value && (
              <div id="form" class="pt-14">
                  
                <div class="grid grid-cols-3 mb-8">
                    <div class={`bar ${etapaForm.value > 1 ? 'bar-completed' : ''} ${etapaForm.value == 1 ? 'bar-active' : ''}`}>
                        <strong>
                            1
                        </strong>
                        <span class="hidden md:block">Dados do candidato {etapaForm.value}</span>
                    </div>
                    <div class={`bar ${etapaForm.value > 2 ? 'bar-completed' : ''} ${etapaForm.value == 2 ? 'bar-active' : ''}`}>
                        <strong>
                            2
                        </strong>
                        <span class="hidden md:block">Dados complementares</span>
                    </div>
                    <div class={`bar ${etapaForm.value == 3 ? 'bar-active' : ''}`}>
                        <strong>
                            3
                        </strong>
                        <span class="hidden md:block">Confirmação de inscrição</span>
                    </div>
                </div>              
                <form onSubmit={submit}>
                    {etapaForm.value === 1 && (
                        <div className="container">
                            <div class="flex justify-between ">
                                <div class="flex">
                                    <span class="text-lg lg:text-3xl step-bullet">1</span>
                                    <div class="ml-4">
                                        <span class="text-xl lg:text-4xl font-base">Preencha seus dados</span><br></br>
                                        <span>Para começar, precisamos de algumas informações básicas.</span>
                                    </div>
                                </div>
                                <div class="safe-badge hidden md:flex">
                                    <i class="icon mr-4"></i>
                                    <div>
                                        <b>Site Seguro</b><br></br>
                                        <i>Suas informações estão protegidas</i>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div class="grid grid-cols-12 gap-[20px] my-[50px]">
                                <div class="order-1 md:order-1 col-span-12">
                                    <label for="nome" class="text-base font-bold block">
                                        Nome Completo
                                        <span class="required">*</span>
                                    </label>  
                                    <input 
                                    type="text" 
                                    name="nome" 
                                    placeholder="Digite seu nome completo"
                                    value={data.value.nome} 
                                    onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                    class="border p-2 rounded w-full" 
                                    />
                                    {errors.value.nome && <p class="text-red-500">nome é obrigatório</p>}
                                </div>
                                <div class="order-2 md:order-2 col-span-12">
                                    <label for="email" class="text-base font-bold block">
                                        Email
                                        <span class="required">*</span>
                                    </label>  
                                    <input 
                                    type="text" 
                                    name="email"
                                    placeholder="Digite seu email principal"
                                    value={data.value.email} 
                                    onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                    class="border p-2 rounded w-full" 
                                    />
                                    {errors.value.email && <p class="text-red-500">email é obrigatório</p>}
                                </div>
                                <div class="order-3 md:order-3 col-span-12 md:col-span-6">
                                    <label for="telefone" class="text-base font-bold block">
                                        Telefone
                                        <span class="required">*</span>
                                    </label>  
                                    <input 
                                    type="text" 
                                    name="telefone" 
                                    placeholder="( )_____-____"
                                    value={data.value.telefone} 
                                    onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                    class="border p-2 rounded w-full" 
                                    maxLength={11}
                                    />
                                    {errors.value.telefone && <p class="text-red-500">telefone é obrigatório</p>}
                                </div>
                                <div class="order-4 md:order-4 col-span-12 md:col-span-6 p-3 border border-black rounded-lg">
                                    <div className="flex justify-between items-center gap-[15px]">
                                        <p class="text-xl font-bold">Podemos usar o WhatsApp para falar sobre sua inscrição e matrícula?</p>
                                        <img src="/whatsapp.png" width="35px" height="35px" alt="" />
                                    </div>
                                    <div className="flex items-center gap-[15px]">
                                        <input type="checkbox" name="whatsapp" id="whatsapp" onChange={(e) => handleChange(e, e.currentTarget.value)} value="S"  />
                                        <label htmlFor="whatsapp">Autorizo o uso do WhatsApp no telefone informado</label>
                                    </div>
                                </div>
                                <div class="order-4 md:order-4 col-span-12 p-3 border border-black rounded-lg flex gap-[15px]">
                                    <input type="checkbox" name="politica" id="politica" onChange={(e) => handleChange(e, e.currentTarget.value)}  />
                                    <label htmlFor="politica">Li e aceito a <a href="" class="underline color-blue">Política de Privacidade.</a> Autorizo a coleta e o tratamento de meus dados pessoais pela UNIASSELVI, seu grupo econômico, instituições de ensino e parceiros.</label>
                                </div>
                                <div class="order-6 md:order-5 col-span-12 md:col-span-5 flex justify-center md:block">
                                    <button type="button" class="w-fit md:w-full bg-[#f0f0f0] py-3 px-5 rounded-lg shadow-[0_6px_8px_0_rgba(73,73,73,.36)]">Voltar aos cursos</button>
                                </div>
                                <div class="order-5 md:order-6 col-span-12 md:col-span-7">
                                    <button type="button" onClick={() => {etapaForm.value = 2}} class="w-full bg-[#ffdb1a] py-3 px-5 rounded-lg shadow-[0_6px_8px_0_rgba(73,73,73,.36)]">Ir para a próxima etapa</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {etapaForm.value === 2 && (
                        <div class="container">
                            
                            <div className="flex justify-between">
                                <div className="flex">
                                    <span className="text-lg lg:text-3xl step-bullet">2</span>
                                    <div className="ml-4">
                                        <span className="text-lg lg:text-3xl">Estamos quase lá!</span><br></br>
                                        <span>Digite seus dados no formulário abaixo e garanta sua <strong>inscrição gratuita.</strong></span>
                                    </div>
                                </div>
                                <div className="safe-badge hidden md:flex">
                                    <i className="icon mr-4"></i>
                                    <div>
                                        <b>Site Seguro</b><br></br>
                                        <i>Suas informações estão protegidas</i>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 my-[50px]">
                                <div class="col-span-12 md:col-span-4">
                                    <label for="cpf" class="text-base font-bold block">
                                    CPF
                                    <span class="required">*</span>
                                    <small class="font-extralight"> (Somente números)</small>
                                    </label>  
                                    <input
                                    type="text"
                                    name="cpf"
                                    value={formatCpf(data.value.cpf)}
                                    onInput={(e) => {
                                    const cpf = e.currentTarget.value;
                                    handleChange(e, cpf.replaceAll(".", "").replaceAll("-", ""));
                                    if (cpf.replaceAll(".", "").replaceAll("-", "").length === 11) {
                                        handleCpfBlur();
                                    }
                                    }}
                                    class="border p-2 rounded w-full"
                                    placeholder="000.000.000-00"
                                    maxLength={14}
                                    />
                                    {errors.value.cpf && <p class="text-red-500">Cpf Inválido</p>}
                                </div>
                            </div>
                        
                        <div class="grid grid-cols-12 gap-4 mt-5 md:mt-10">
                            <div class="col-span-12 md:col-span-4">
                                <label for="cpf" class="text-base font-bold block mb-2">
                                    Sexo
                                    <span class="required">*</span>
                                </label> 
                                <label class="radio-container">
                                Masculino
                                <input type="radio" name="sexo" value="M" checked={data.value.sexo === 'M'} onClick={(e) => data.value.sexo = 'M'} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="radio-container">
                                Feminino
                                <input type="radio" name="sexo" value="F" checked={data.value.sexo === 'F'} onClick={(e) => data.value.sexo = 'F'}/>
                                <span class="checkmark"></span>
                                </label>
                                {errors.value.sexo && <p class="text-red-500">Sexo é obrigatório</p>}
                            </div>
                            <div class="col-span-12 md:col-span-4">
                                <label for="cpf" class="text-base font-bold block">
                                    Nacionalidade
                                    <span class="required">*</span>
                                </label>  
                                <input 
                                type="text" 
                                name="nacionalidade" 
                                value={data.value.nacionalidade} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full" 
                                />
                                {errors.value.nacionalidade && <p class="text-red-500">Nacionalidade é obrigatório</p>}
                            </div>
                            <div class="col-span-12 md:col-span-4">
                                <label for="cpf" class="text-base font-bold block">
                                    Data de Nascimento
                                    <span class="required">*</span>
                                </label>  
                                <input 
                                type="text" 
                                name="data_nasc" 
                                value={formatDate(data.value.data_nasc)} 
                                onInput={(e) => handleChange(e, formatDate(e.currentTarget.value) as string)} 
                                class="border p-2 rounded w-full"
                                placeholder="__/__/____"
                                maxLength={10}
                                />
                                {errors.value.data_nasc && <p class="text-red-500">Data de nascimento inválida</p>}

                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4 mt-5 md:mt-10">
                            <div class="col-span-12 md:col-span-5">
                                <label for="cep" class="text-base font-bold block">
                                    CEP
                                    <span class="required">*</span>
                                </label> 
                                <input 
                                type="text" 
                                name="cep" 
                                value={formatCep(data.value.cep)} 
                                onInput={(e) => {
                                    const cep = e.currentTarget.value
                                    handleChange(e, cep.replaceAll(".", "").replaceAll("-", ""));

                                    if(cep.replaceAll("-", "").length == 8){
                                        handleCepBlur();
                                    }
                                }} 
                                class="border p-2 rounded w-full"
                                placeholder="______.___"
                                maxLength={9}
                                />
                                {errors.value.cep && <p class="text-red-500">CEP inválido</p>}
                                <small>Digite seu CEP para preencher automaticamente o endereço</small>
                            </div>
                            <div class="col-span-6 flex justify-end items-center underline">
                                <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCep.cfm" target="_blank" rel="external" class="link-cep">Não sabe seu CEP? <b>Consulte Aqui</b></a>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4 mt-10">
                            <div class="col-span-12 md:col-span-5">
                                <label for="endereco" class="text-base font-bold block">
                                    Endereço
                                    <span class="required">*</span>
                                </label> 
                                <input 
                                type="text" 
                                name="endereco" 
                                value={data.value.endereco} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full"
                                />
                            {errors.value.endereco && <p class="text-red-500">Endereço é obrigatório</p>}
                            </div>
                            <div class="col-span-12 md:col-span-2">
                                <label for="cpf" class="text-base font-bold block">
                                    Número
                                    <span class="required">*</span>
                                    <div class="float-right">
                                        <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onClick={()=>{
                                            data.value = {
                                                ...data.value,
                                                sem_numero : !data.value.sem_numero,
                                                numero: !data.value.sem_numero ? 'S/N'  : ''
                                            };
                                            if(data.value.sem_numero){
                                                (document.querySelector('input[name="numero"]') as HTMLInputElement).disabled = true;
                                            }else{
                                                (document.querySelector('input[name="numero"]') as HTMLInputElement).disabled = false;
                                            }
                                        }}/>
                                        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 " >S/N</label>
                                    </div>
                                    
                                </label>  
                                <input 
                                type="text" 
                                name="numero" 
                                value={data.value.numero} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full" 
                                />
                            {errors.value.numero && <p class="text-red-500">Número é obrigatório</p>}
                            </div>

                            <div class="col-span-12 md:col-span-5">
                                <label for="cpf" class="text-base font-bold block">
                                    Bairro
                                    <span class="required">*</span>
                                </label>  
                                <input 
                                type="text" 
                                name="bairro" 
                                value={data.value.bairro} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full" 
                                />
                            {errors.value.bairro && <p class="text-red-500">Bairro é obrigatório</p>}
                            </div>

                        </div>
                        <div class="grid grid-cols-12 gap-4 mt-5 md:mt-10">
                            <div class="col-span-12 md:col-span-4">
                                <label for="cpf" class="text-base font-bold block">
                                    Complemento
                                </label>  
                                <input 
                                type="text" 
                                name="complemento" 
                                value={data.value.complemento} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full" 
                                />
                            </div>
                            <div class="col-span-12 md:col-span-4">
                                <label for="cpf" class="text-base font-bold block">
                                    Cidade
                                    <span class="required">*</span>
                                </label>  
                                <input 
                                type="text" 
                                name="cidade" 
                                value={data.value.cidade} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full" 
                                />
                                {errors.value.cidade && <p class="text-red-500">Cidade é obrigatória</p>}

                            </div>
                            <div class="col-span-12 md:col-span-4">
                                <label for="cpf" class="text-base font-bold block">
                                    Estado
                                    <span class="required">*</span>
                                </label>  
                                <input 
                                type="text" 
                                name="estado" 
                                value={data.value.estado} 
                                onInput={(e) => handleChange(e, e.currentTarget.value)} 
                                class="border p-2 rounded w-full" 
                                />
                                {errors.value.estado && <p class="text-red-500">Estado é obrigatório</p>}

                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4 mt-10">
                            <div class="col-span-12 md:col-span-3">
                                <label for="cpf" class="text-base font-bold block mb-3">
                                    Modalidade de Ensino
                                    <span class="required">*</span>
                                </label>  
                                <label class="radio-container ">
                                EAD SemiPresencial
                                <input type="radio" name="modalidade" value="F" checked />
                                <span class="checkmark"></span>
                                </label>
                                <small class="font-extralight block mt-3">Encontros presenciais 1 vez por semana com um tutor para acompanhamento dos estudos.</small>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4 mt-10 mb-10">
                            <div class="col-span-12 md:col-span-3">
                                <label for="cpf" class="text-base font-bold block mb-3">
                                    Já possui Ensino Médio Completo?
                                    <span class="required">*</span>
                                </label>  
                                <label class="radio-container">
                                Sim
                                <input type="radio" name="possui_medio" value="S" checked={data.value.possui_medio === 'S'} 
                                onClick={(e) => {
                                    data.value = {
                                        ...data.value,
                                        possui_medio : 'S'
                                    };
                                }} />
                                <span class="checkmark"></span>
                                </label>
                                <label class="radio-container">
                                Não
                                <input type="radio" name="possui_medio" value="N" checked={data.value.possui_medio === 'N'} 
                                onClick={(e) => {
                                    data.value = {
                                        ...data.value,
                                            possui_medio : 'N'
                                        };
                                }} />
                                <span class="checkmark"></span>
                                </label>
                                {errors.value.possui_medio && <p class="text-red-500">Campo obrigatório</p>}

                            </div>
                            {data.value.possui_medio == 'S' && (
                            <div class="col-span-12 md:col-span-3">
                                <label for="cpf" class="text-base font-bold block mb-3">
                                    Ano de Conclusão do ensino medio
                                </label>  
                                <select onChange={(e) => {
                                    data.value = {
                                        ...data.value,
                                            ano_encerramento : e.currentTarget.value
                                        };
                                }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" selected title="Selecione o ano desejado">Selecione o ano desejado</option>
                                    {years.map((year) => (
                                        <option key={year} value={year} selected={year.toString() == data.value.ano_encerramento}>
                                        {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            )}
                        </div>
                        <div class="grid grid-cols-12 gap-4 mt-10 mb-10 flex justify-end">
                            <div class="col-span-3"></div>
                            <div class="col-span-12 md:col-span-4">
                                <button onClick={() => { etapaForm.value = 1}} class="btn btn-blue w-full">
                                    Retornar
                                </button>
                            </div>
                            <div class="col-span-12 md:col-span-5">
                            <button class="btn btn-yellow w-full" type="submit">
                                Finalizar Inscrição 
                            </button>
                            </div>
                        </div>
                        
                        
                    </div>
                )}
                </form>
              </div>
          )}

          {etapaForm.value === 3 && (
                <section class="relative overflow-hidden px-[1rem]">
                    <div class="min-h-full min-w-full aspect-video absolute top-0 left-[50%] translate-x-[-50%] bg-[#1b1c1d]">
                        {image && (
                            <Image
                                class="block min-w-full h-full opacity-30 bg-center"
                                src={image || ""}
                            />
                        )}
                    </div>
                    <div class="absolute top-0 w-full h-full h-full flex container gap-[24px] relative px-10 py-[60px] md:py-[150px] md:px-[200px]">
                        <div class="text-center">
                            <p class="text-[#ffdd00] uppercase text-[27px]"><strong>Inscrição Realizada com Sucesso!</strong></p>
                            <p class="text-white text-lg my-6"><strong>Parabéns!</strong> Agora, a sua matrícula pode ser feita diretamente pelo nosso aplicativo Leo App:</p>
                            <div class="flex flex-col md:flex-row gap-8 justify-center">
                                <a href="" class="flex items-center gap-7 bg-black py-2 px-5 w-fit">
                                    <svg class="block" width="21px" height="21px" viewBox="0 0 0.84 0.84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.788 0.428c0 -0.03 -0.002 -0.052 -0.008 -0.075H0.428v0.136h0.207c-0.004 0.034 -0.027 0.085 -0.077 0.119l-0.001 0.005 0.111 0.085 0.008 0.001c0.071 -0.064 0.112 -0.158 0.112 -0.27" fill="#4285F4"></path><path d="M0.428 0.787c0.101 0 0.186 -0.033 0.248 -0.089l-0.118 -0.09c-0.032 0.022 -0.074 0.037 -0.13 0.037A0.225 0.225 0 0 1 0.214 0.493l-0.004 0 -0.116 0.088 -0.002 0.004C0.154 0.705 0.281 0.787 0.428 0.787" fill="#34A853"></path><path d="M0.214 0.493A0.223 0.223 0 0 1 0.202 0.42c0 -0.025 0.005 -0.05 0.012 -0.073l0 -0.005L0.096 0.253l-0.004 0.002A0.362 0.362 0 0 0 0.052 0.42c0 0.059 0.015 0.115 0.04 0.165z" fill="#FBBC05"></path><path d="M0.428 0.195c0.07 0 0.118 0.03 0.145 0.055l0.106 -0.101C0.613 0.089 0.529 0.052 0.428 0.052 0.281 0.052 0.154 0.135 0.093 0.255l0.121 0.092c0.03 -0.089 0.115 -0.153 0.214 -0.153" fill="#EB4335"></path></svg>
                                    <span class="block w-[1px] h-full bg-[#505050]"></span>
                                    <div>
                                        <p class="text-xs text-white">Acesse:</p>
                                        <p class="text-md text-white">Google Play</p>
                                    </div>
                                </a>
                                <a href="" class="flex items-center gap-7 bg-black py-2 px-5 w-fit">
                                    <svg class="block" fill="#fff" width="24px" height="24px" viewBox="-0.105 -0.06 0.72 0.72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-apple"><path d="M0.409 0.319c-0.001 -0.076 0.062 -0.112 0.065 -0.114 -0.035 -0.052 -0.09 -0.059 -0.11 -0.059 -0.047 -0.005 -0.091 0.028 -0.115 0.028 -0.024 0 -0.06 -0.027 -0.099 -0.026C0.099 0.147 0.052 0.176 0.026 0.222c-0.053 0.092 -0.014 0.228 0.038 0.302 0.025 0.036 0.055 0.077 0.095 0.076 0.038 -0.002 0.052 -0.025 0.098 -0.025s0.059 0.025 0.099 0.024c0.041 -0.001 0.067 -0.037 0.092 -0.074 0.029 -0.042 0.041 -0.083 0.042 -0.085 -0.001 0 -0.08 -0.031 -0.081 -0.121zm-0.076 -0.223c0.021 -0.025 0.035 -0.061 0.031 -0.096C0.334 0.001 0.298 0.02 0.276 0.045c-0.019 0.022 -0.036 0.058 -0.032 0.093 0.034 0.003 0.068 -0.017 0.089 -0.042"></path></svg>
                                    <span class="block w-[1px] h-full bg-[#505050]"></span>
                                    <div>
                                        <p class="text-xs text-white">Acesse:</p>
                                        <p class="text-md text-white">Apple Store</p>
                                    </div>
                                </a>
                            </div>
                            <p class="text-white text-lg my-6">Assim que você instalar o nosso aplicativo, você não gasta mais seu pacote de dados para utilizar o Leo App. Além de realizar sua matricula, este é o aplicativo que você vai utilizar em seus estudos.</p>
                            <p class="text-white text-lg my-6">Caso você tenha alguma dificuldade, ou precise tirar alguma dúvida sobre a sua matrícula não hesite em entrar em contato conosco através do WhatsApp, <a href='#'>clicando aqui</a>.</p>
                        </div>
                    </div>
                </section>
            )}
          
    </div>
  );
};

export default Form;