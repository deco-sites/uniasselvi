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
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTk1OTg5MDcsImV4cCI6MTcyMDIwMzcwNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiNTMyNzIwNDgwNDkiLCJzaW11bGF0ZSI6ZmFsc2UsInNwZWNpYWxpemF0aW9ucyI6WyI3ODUxNzc5Il0sInJvbGUiOiJBTFVOIn0.jTHzUFheS7bGWRrCuO_itv6d9ZC03QsWhZKhP8uWsVhBiJ_ZJQUMaSO9g3dEMeAroGeeia23YLuO-D_RkC9h9TF0h7JTIliN1rlMYHd3rr0GN7zdeUyRlseDReHgL4VePBW9v1Kg5SvZcO_z-_iRl8gzGsW60cpg01qcfEQXBELVHwZ1RWmwCpOw_VNwu8MU-nbTKVT_qWEsjZNUE9iznwOeIVihayAmxSnKs6nP6BKOqtDOSYTt09Q3XGotJErvI8P__wwr5hVHJp5_nNUptQcH896i11P-T8bvUwyA-d5WW6y_eWsK9xDPbzkRrf7A_SiNf4pYSSZTJM8LltYq4o2Vs8StSm81gAjCvIopqXX-ZW1IneqoxKvWAMxBmSm1lX1VPkPuKJRv-QnibhK4OVHUfWByQY_aqW4FZgYnRwKCsYm7Zs9_1HmRS812jELGDzJuxNq7vF8k-3ys1BtfoMUPJG7ngmg_BkfB0oxmlQpb_L3G5jWe4zZ6RdZyxUhZZ6d7uJVpb--eHLl0D10kpKv0fBRa7MMTQHa1677-QE96ZNtiKTelxHwsrT_iqn2ZTrPAfODbq1gl7uXKfsJaMT8kcV_6_yyqCtyGlS8JMipumiIWOnmMERBNukYnjPgDr7eL7PhUAXOrBDBE-xagR9ngu1V-Ad55b8qdFIsyVRA";

  const { dataToSend } = props; // Extrai dataToSend dos props

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "vitru-espe": "100005011",
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
