import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export default function WelcomeEmail({
  empresa,
  postulante,
  oferta,
}: {
  empresa: any;
  postulante: any;
  oferta: any;
}) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hola {postulante?.info?.name}!</Text>
          <Text style={heading2}>Te escribimos desde InfoJobs AI 2.0</Text>
          <Text style={paragraph}>
            Gracias a nuestro nuevo sistema de contratación que utiliza
            inteligencia artificial para encontrar a los mejores candidatos,{" "}
            {empresa?.nombre} te ha encontrado como uno de sus mejores
            candidatos para el puesto de {oferta?.puesto}.
          </Text>
        </Container>
        <Container style={container}>
          <Text style={span}>Descripcion: </Text>
          <Text style={paragraph}>{oferta?.descripcion}</Text>
          <Text style={span}>Modalidad: </Text>
          <Text style={paragraph}>{oferta?.modalidad}</Text>
          <Text style={span}>Localidad: </Text>
          <Text style={paragraph}>{oferta?.localidad}</Text>
          <Text style={paragraph}>
            si estás interesado en la oferta, escríbeles al correo{" "}
            {empresa?.correo} mencionando el id de la oferta que es {oferta.id}.
          </Text>
          <Text style={warning}>
            Este correo es de prueba y hace parte de la Hackathon de InfoJobs y
            MiduDev.
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#212121",
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#ffff",
};

const heading2 = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "500",
  color: "#ffff",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#D3D3D3",
};

const span = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#D3D3D3",
  fontWeight: "700",
};

const warning = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#f28c18",
};
