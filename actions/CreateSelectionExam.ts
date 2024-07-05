import { AppContext } from "site/apps/site.ts";
interface Props {
  dataToSend: object; // Supondo que dataToSend é o objeto que você deseja enviar na requisição
}

export default async function CreateSelectionExam(
  props: Props,
  _req: Request,
  _ctx: AppContext,
) {
  const url = "https://api-applicant.uniasselvi.com.br/api/graphql/protected";
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTk4MDUyNjksImV4cCI6MTcyMDQxMDA2OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiODAzMjk5NDAwOTAiLCJzaW11bGF0ZSI6ZmFsc2UsInNwZWNpYWxpemF0aW9ucyI6WyI2MjE4MzY0Il0sInJvbGUiOiJBTFVOIn0.UW8Al6oz7IcrftGiodiAS9VjOqJKf468RpngeAiNwkEtyZnjoh5jsZk8R2zOffBcs5e9SaRixQR_tKbplMprkDGL-cAvrBSpI6I2KUdp4AQBYId8Wph59PLxPU4h0IiMCrLGvBZbQPAQQZ7hpuVGirfZX1U348LbxY039hQhFBaqI8r7GCjh0Tn5rdA9yMH8bnt8NG9ytSKqSsJK6C5ha0Le65lXVo8blm0OrntvvuifFmRWGeFQScZkTTdJaTUzotMQ8HEMhFlS7iayC0wS8VTDBEJhvRdPuwtAqCUaF3bTrUPAxJfsb64kNUjl4OXSFzEkvWdkP5HfbqQUF0xCV3wTbODNv9293UkVo_9nUVjZ0X6iouw5SEnpdtGNxh5AgjeeZ4peduT9ZmC8wZY0yifxcW5oqb9NfBg_Hzfb2IHxleiNZN3dMTlgb_MVhSp74DuGrcGypsF7jSJqveUto0aay-rqVKc6LKT5IEvD3EYGLq5755WwUr8jXbh7R1e13t_YZBJF1BDMHENC8UE7ZJrbVs5uTPZfW-Dm9vRTNBiakCNoTSwO_8JGmewZZCLLqjTHiiT7VEMCRAFWg4djaoA7FJlDMgnQvAtkjPAjEb4vAdAyyI-GKhxuVGZ-k7xyDRJ069RrKiDPyK7plIQf9SS1JNcoCXeUtyHfEmAMchk";

  const { dataToSend } = props; // Extrai dataToSend dos props

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "vitru-espe": "6218364",
    "Cookie":
      "dtCookie=v_4_srv_10_sn_25C85AFDBBE78716C9169AAC5EB2182E_perc_100000_ol_0_mul_1_app-3Ade1e3bda8a67c4b3_0_app-3Aea7c4b59f27d43eb_0",
  };

  const highSchoolFinishYear = dataToSend.person.highSchoolComplete == "S"
    ? `highSchoolFinishYear: ${dataToSend.person.highSchoolFinishYear},`
    : "";

  const query = `
    mutation gerarContrato {
        CreateSelectionExam(
        person: {
            origin: "${dataToSend.person.origin}",
            name: "${dataToSend.person.name}",
            email: "${dataToSend.person.email}",
            document: "${dataToSend.person.document}",
            mobileNumber: "${dataToSend.person.mobileNumber}",
            birthDate: "${formatDate(dataToSend.person.birthDate)}",
            gender: "${dataToSend.person.gender}",
            ${highSchoolFinishYear}
            postalCode: "${dataToSend.person.postalCode}",
            address: "${dataToSend.person.address}",
            addressNumber: "${dataToSend.person.addressNumber}",
            neighborhood: "${dataToSend.person.neighborhood}",
            addressComplement: "${dataToSend.person.addressComplement}",
            cityName: "${dataToSend.person.cityName}",
            cityState: "${dataToSend.person.cityState}"
        },
        company: ${dataToSend.company},
        branchCode: "${dataToSend.branchCode}",
        modality: "${dataToSend.modality}",
        entranceType: "${dataToSend.entranceType}",
        mainCourse: ${dataToSend.mainCourse},
        allowWhatsAppContact: "${dataToSend.allowWhatsAppContact}",
        highSchoolComplete: "${dataToSend.highSchoolComplete}",
        placeOfRegistration: "${dataToSend.placeOfRegistration}",
        originServer: "${dataToSend.originServer}",
        userIp: "${dataToSend.userIp}"
        ) {
        enrollmentId,
        studentId,
        personId,
        success
        }
    }
    `;
  const requestBody = {
    query: query,
    operationName: "gerarContrato",
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Erro ao enviar requisição:", error);
    throw error;
  }
}

function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
}
