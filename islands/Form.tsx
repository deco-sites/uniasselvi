import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import { invoke } from "site/runtime.ts";

interface FormProps {
}

const Form = ({  }: FormProps) => {
  const data = useSignal({
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
    ano_encerramento: ""
  });

  const errors = useSignal({
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

  const submit = (e: Event) => {
    e.preventDefault();
    formIsValid();
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


    }
  

  const handleCpfBlur = async () => {
    const response = await invoke.site.actions.cpfBlur({ cpf: data.value.cpf });
    const updates = {
      nacionalidade: response.pessoa.pess_naci_desc,
      nome: response.pessoa.pess_nome,
      data_nasc: response.pessoa.pess_dnas,
      sexo: response.pessoa.pess_sexo,
      ano_encerramento: response.pessoa.pess_ance,
      cep: response.pessoa.pess_cep,
      numero: response.pessoa.pess_nume,
      complemento: response.pessoa.pess_comp,
      possui_medio: response.pessoa.pess_ance ? 'S' : 'N'
    //   endereco: response.pessoa.pess_ende,
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
    const numericValue = value.replace(/\D/g, "").slice(0, 11);
    const cpfMasked = numericValue.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      (_, p1, p2, p3, p4) => `${p1}.${p2}.${p3}-${p4}`
    );
    return cpfMasked 
  };

  const formatDate = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 8);
    
    // Apply date mask: DD/MM/YYYY
    const dateMasked = numericValue.replace(
      /(\d{2})(\d{2})(\d{4})/,
      (_, p1, p2, p3) => `${p1}/${p2}/${p3}`
    );

    return dateMasked;
  };

  const formatCep = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "").slice(0, 8);
    
    // Apply CEP mask: XXXXX-XXX
    const cepMasked = numericValue.replace(
      /(\d{5})(\d{3})/,
      (_, p1, p2) => `${p1}-${p2}`
    );
  
    return cepMasked;
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
  return (
    <div>
        <style>{css}</style>
        <form onSubmit={submit}>
            <div class="grid grid-cols-12 gap-4">
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
                    onInput={(e) => handleChange(e, e.currentTarget.value)} 
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
                    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                    <a class="btn btn-blue w-full">
                    Retornar
                    </a>
                </div>
                <div class="col-span-12 md:col-span-5">
                <button class="btn btn-yellow w-full" type="submit">
                    Finalizar Inscrição 
                </button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default Form;