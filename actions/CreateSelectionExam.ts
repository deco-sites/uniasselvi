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
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjI1OTk4NDMsImV4cCI6MTcyMzIwNDY0Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiODAzMjk5NDAwOTAiLCJzaW11bGF0ZSI6ZmFsc2UsInNwZWNpYWxpemF0aW9ucyI6WyI2MjE4MzY0Il0sInJvbGUiOiJBTFVOIn0.Io1mu-GCre2gY40GhoE2ER3r92SGpVz4mjEJEFJET66uFmDZuY1KCdwtb3GCEAP8FwlpLUV5mtYtMedeN08vL2UOmraywYg7TpRLRW8QQyvc2vpe4H6lfR-2DDHu_-R3BD0NjmLSfcR_E9txnuzgeUzAeM4dz6u6D0j3zem2qggQuKeN1gr2NqB56upnMl8JwGq0k2mHwc3TaT06cZpyAUxrR3yD07r1HxZsgfIB6nyBmdSRGzWUrY-qpYA5lMAZn7toOwrr_C9lBcNh-cIHz0OW-VTnkDWh8bOPoeLi96oeZx3zeU6mbvFD77NAhOHOq47CHR8DlZZmUOSZPte5apvs8Y8xLIJ7OrMVSGhDoZKH_5MqHWzaRRj_OVoF5RGnpugjdF9Vz9j10RqrTuwhd4JCrce9MkA6vXN0s4H9yoMMZmtsWYrDRCN7kVcystqG1sTQkHcx6wut3kumjdAGPbMT4aeADzJdWuvZ6GalLv7HyluY-fvD0Cgs8uv8qCGY_HEMhng661LyJ8YvfA3nCdEJ9cL1BmdjVEymdYAxAzUQKUmVq6hwnRUwvDWKK9T4zcD_zmffutzLAaEd8VpYaZXufXDUqzLUyz1J81rvdz1p9CNzpcs3Cwsdiha_mrFM3ME5_p2-0w3ivatZtEsVhTETq6B27FTqoTd_XZ1qb88";

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
