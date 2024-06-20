import { AppContext } from "site/apps/site.ts";

interface Props {
    dataToSend: object; // Supondo que dataToSend é o objeto que você deseja enviar na requisição
}

export default async function CreateSelectionExam(props: Props, _req: Request, _ctx: AppContext) {

    const url = "https://api-applicant.uniasselvi.com.br/api/graphql/protected";
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTgxMDUxMDMsImV4cCI6MTcxODcwOTkwMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMDU0ODk0MjE5NjciLCJzaW11bGF0ZSI6ZmFsc2UsInNwZWNpYWxpemF0aW9ucyI6WyIxMDAwMDEzOTgiXSwicm9sZSI6IkFMVU4ifQ.cVqvlZJzZegqnYg4484ELIEtc8sKs6UQmQ1b9d6n9Rc526dZ-ShXDO_bHVDYMxvtbofoj7ljpxnX9J-Qu9FU4NOJwXy-YwbG1P8r_IdBH4BrXTq_siyxGbs7AOKXeqWA0zWsY059gLp1TZ9-BNZgCPmOfEQtaEHGz87prhpuvO0O-gODHw1-zPcdtFzpNqxQTbtmG2rXfWWHHCOaT7v2fCjzGQwbYg4C0ezgCmXZ13i2gu6RPS6TteU0cqjL8a7f4BIj7ggeWfXIlh8QgT9mloP8yJu52D0WvDIlZ3kkH3zAmKcpOoYbLrP2GqS5mEEEi7GV7ICivg6BusdhBXRb6rIvzrJIlP_J6JBVHSfdWmJbS3D5kicWUEOfS3_XvsGzI5JKKkf6CYvV6wpxu0yGDbuqKnRglj0FEKy71u38Pe0UhqwhLN_GIV8baeiybeL2OHgKlzNnvfjwdC5w0j11baiAPaXpovx3xZztX-GLJRi0cNqsoNxFaqEklbcwgAq3sBlr026r5CENJqdiaHcR6fQcJzUfKlWqyhaodeq6Ku1pEusRu-y-j0KETKDW3YBjkS9L9Jl85sOo8s1J49zw5eworWbo2hWX24QuqwJ6DiGTn83rMgsmyqQuq2Zpk3dWX0jsVQ76mM6TI6AOVROoOthaChURH27nB0xkxjwNXNE'; // Substitua pelo seu token JWT
    
    const { dataToSend } = props; // Extrai dataToSend dos props

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'vitru-espe': '100001398',
        'Cookie': 'dtCookie=v_4_srv_10_sn_25C85AFDBBE78716C9169AAC5EB2182E_perc_100000_ol_0_mul_1_app-3Ade1e3bda8a67c4b3_0_app-3Aea7c4b59f27d43eb_0'
    };

    const requestBody = {
        query: `mutation gerarContrato {
            CreateSelectionExam(${JSON.stringify(dataToSend)}) {
                enrollmentId,
                studentId,
                personId,
                success
            }
        }`,
        operationName: "gerarContrato"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(requestBody)
        });

        const responseData = await response.json();

        return true; // Retorna dados conforme a interface PropsExam
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
        throw error; // Rejeita a promessa com o erro
    }
}