import { AppContext } from "site/apps/site.ts";
interface Props {
  dataToSend: object; // Supondo que dataToSend é o objeto que você deseja enviar na requisição
}

export default async function CreateSelectionExam(
  props: Props,
  _req: Request,
  _ctx: AppContext,
) {
  const url = "https://api-applicant.asselvi.net.br/api/graphql/protected";
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjM2Njc0NTEsImV4cCI6MTcyNDI3MjI1MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiODAzMjk5NDAwOTAiLCJzaW11bGF0ZSI6ZmFsc2UsInNwZWNpYWxpemF0aW9ucyI6WyI2MjE4MzY0Il0sInJvbGUiOiJBTFVOIn0.bzb8r49Wy7ZGLzT1sLkNU78ENHKZ7de1DzLSyE7txBRzREIAb47Rba_hR43T-56j0VCEM78uMD8ZOZROhGz8aJvyr9IGltgFibZvdhEnzsZxN7e2FXOuq3nIGjfPO-02HL4uP3njtMa8OR8T0WZzM-NbH4XmefeehsbqyHok6YZokzwXC916RazxJk-1l4goLVQFX_yZ6zhP0EeiJBKqgkoI58Pt8sODsUocWCUxHu-HkOP_U8-nfIVXfHm_AEo0oR_Fn0qFCqmY3vhD-9qJtmF5wHkvS-sMRUt0-TRhhqqMIe5zzCeHXcvApwIkIl32uJPqkNNjH4fB1iuWi_mCqTtYkNnJmCG5sWjJtFcjSQIzK9vGbN8pMHWkCmYPALxBdkf4Xosw4fZ_zBPUD7hmYx2Cpcez2Z3xcDk8xyQ1CPiOtLMHibwY0fdX1vb8TH602lPq5_Q2MaEhEU4cpzo5y8K5ZQW9S9WxxKnU6ozBB5ygw6kzenMgcqouTE84-OSYiHB6aBKUvs14flttnOq25J6d_gGsg7qzRPcqPbMRBBmT9M2KE_M_OLLMPBvxxhduc9R5UKXEdPfFfyh4v6YSOymaZR8JPGqbO3mXp7BZZe-C5sXi-duTj9nibGhrgA0PQhr7r-LfrERIvPZpoYzuS-Igs8H0DaJfn3OgPjNYeS4";

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
