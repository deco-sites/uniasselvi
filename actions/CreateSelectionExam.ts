import { AppContext } from "site/apps/site.ts";

interface Props {
    dataToSend: object; // Supondo que dataToSend é o objeto que você deseja enviar na requisição
}

export default async function CreateSelectionExam(props: Props, _req: Request, _ctx: AppContext) {

    const url = "https://api-applicant.uniasselvi.com.br/api/graphql/protected";
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTg4ODM2MjQsImV4cCI6MTcxOTQ4ODQyNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiMjM2MDY4MDY4NDEiLCJzaW11bGF0ZSI6ZmFsc2UsInNwZWNpYWxpemF0aW9ucyI6WyI2NTMyOTczIiwiNzIyNTE1MiIsIjc3NzUwOTciLCIxMDAwMDUwMTEiXSwicm9sZSI6IkFMVU4ifQ.HrlY2rH7lNvqCtv7x5n-ZREZ3RQBBDa2jUWlJFo98yNY_23fpgXGBFZmZ1kkA7PECLFP8no2mACmlzK8LygX0iOu0JX17zroCLXn-UvuPs-_yAZKkc-arwvN6trdeVHLKphUlQw0yktZ-D0JXft3HFWYqjU2KArH9pjozJPprBkFADsuoHtHrWKDytsU5AjhlUrKjakBTXUisvKpmrzD6-1gmfaehZth1OVlh89mrV0deQXdxfN2EahO22nTloSDQC1J8puQ7KxX07EDPnfQKZVvfCUBrsZXfkKiLGB3BsR2o4LU3o_in_YckSzCqbTW7AchsEXpQB3DszROxOLCRYWXauWTap23VV-9jbTzv1CN6BM5BM4eXGyZxtZvkO5tOal2jWbCccLTMAL9VeozGKiyg39h-OBFYk05ycHEyrg9KePEvyfqmqS4_R-lwKQo76MrnpmC52WS5FTuKYmS_74UbOy1jAnXLaVI2Rx1yHQ8ABWepYwrGXMpbRNJ0rCg8WrwESPAiECC5Tj7S5grmvBApTCkrwGggDo-xKuIotbxF-S9Xlbxj4Hb2kMJnMfah6pxGUgi-fYkHYPFBEZ_WQhv83_QAguQh3904pnjytgEavIam0BHp1gdEyknPnqMeP9-rO4MP6HfMSZwRFEvtPpbB2LrbbBmEcq9GnFOHvE'; 
    
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

        return responseData; // Retorna dados conforme a interface PropsExam
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
        throw error; // Rejeita a promessa com o erro
    }
}