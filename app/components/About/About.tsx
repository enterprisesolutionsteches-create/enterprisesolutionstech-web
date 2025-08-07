import {
  AboutRoot,
  BodyPrograma,
  BoxPrograma,
  Card,
  Container,
  ContainerCards,
  Description,
  GridCompanies,
  GridCompaniesTitle,
  GridPrograma,
  Image,
  Section,
  Slogan,
  SubTitle,
  TitlePrograma,
} from "./About.styles";

import { collection, getDocs } from "firebase/firestore";
import router from "next/router";
import { useEffect, useState } from "react";
import { routes } from "routes";
import { db } from "../../../firebaseConfig";

export const About = () => {
  const [dataNosotros, setDataNosotros] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "nosotros"));
      const data = querySnapshot.docs.map((doc) => ({
        nombre: doc.data().nombre,
        rol: doc.data().rol,
        avatar: doc.data().avatar,
        idProfile: doc.data().idProfile,
        isActive: doc.data().isActive,
      }));
      setDataNosotros(data);
    };
    fetchData();
  }, []);

  const goToProfile = (idProfile: string) => {
    if (idProfile) router.replace(`${routes.profile}/${idProfile}`);
  };

  return (
    <AboutRoot>
      <Section>
        <ContainerCards>
          <Card>
            <SubTitle>Misión</SubTitle>
            <Description style={{ textAlign: "justify", color: "#555555" }}>
              Nuestra misión es brindar soluciones tecnológicas innovadoras que
              optimicen los procesos, mejoren la productividad y permitan a
              nuestros clientes alcanzar sus objetivos estratégicos.
            </Description>
          </Card>

          <Card>
            <SubTitle>Visión</SubTitle>
            <Description style={{ textAlign: "justify", color: "#555555" }}>
              Ser reconocidos como líderes en la transformación digital,
              ofreciendo soluciones tecnológicas de vanguardia que anticipen las
              necesidades del mercado y empoderen a nuestros clientes.
            </Description>
          </Card>
        </ContainerCards>
      </Section>

      <Section>
        <Container>
          <SubTitle>Conoce Nuestro Equipo</SubTitle>
          <GridPrograma
            itemPerRow={dataNosotros?.length == 1 ? dataNosotros?.length : 0}
          >
            {dataNosotros.map((item) => {
              if (item.isActive)
                return (
                  <BoxPrograma
                    key={item.nombre}
                    onClick={() => goToProfile(item.idProfile)}
                  >
                    <BodyPrograma>
                      <TitlePrograma>{item.nombre}</TitlePrograma>
                      <TitlePrograma style={{ fontSize: "16px" }}>
                        {item.rol}
                      </TitlePrograma>

                      <Image
                        src={item.avatar}
                        width={"200px"}
                        alt={item.nombre}
                      />
                    </BodyPrograma>
                  </BoxPrograma>
                );
              else return null;
            })}
          </GridPrograma>
        </Container>
      </Section>
      <Section background="undefined03">
        <Container>
          <GridCompanies>
            <GridCompaniesTitle id="sobre-enterprisesolutionstech">
              Sobre Enterprise Solutions Tech
            </GridCompaniesTitle>
            <Description style={{ textAlign: "justify" }}>
              Enterprise Solutions Tech es una empresa comprometida con la
              innovación y la excelencia, dedicada a crear soluciones
              tecnológicas que conectan ideas, personas y negocios. Con un
              enfoque en la calidad, la eficiencia y el impacto positivo,
              Enterprise Solutions Tech se posiciona como un puente hacia el
              futuro, ofreciendo servicios que inspiran confianza y generan
              valor. Nos impulsa la visión de construir un mundo más conectado,
              colaborativo y sostenible, donde cada nodo se convierta en un
              punto clave para el progreso y la transformación.
            </Description>
            <Slogan>Crea, Conecta e Innova</Slogan>
          </GridCompanies>
        </Container>
      </Section>
    </AboutRoot>
  );
};
