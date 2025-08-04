import { ModalInformationLegal } from "components/ModalInformationLegal";
import {
  ENTERPRISE_EMAIL,
  FACEBOOK,
  INSTAGRAM,
  WHATSAPP,
} from "constants/general";
import { collection, getDocs } from "firebase/firestore";
import useIsMobile from "hooks/useIsMobile";
import { FooterServicios } from "models/Footer";
import { InformationLegal } from "models/Home";
import Link from "next/link";
import { ComponentProps, FC, useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { db } from "../../../../firebaseConfig";
import { routes } from "../../../routes";
import {
  AdditionalOption,
  Block,
  Column2,
  Column3,
  Column4,
  CompanyInfo,
  ContactInfo,
  Container,
  FooterBottom,
  FooterBottomRow,
  FooterTop,
  Grid,
  Image,
  LinkLogo,
  Logo,
} from "./Footer.style";
import { Content, Nav, NavItem, NavList, Networks, Title } from "./Menu.style";

type FooterCP = ComponentProps<typeof Block>;
type FooterProps = FooterCP & {};
export const Footer: FC<FooterProps> = () => {
  const isMobileApp = useIsMobile();
  const [accordionActive, setAccordionActive] = useState<string>("");
  const [storedPhone, setStoredPhone] = useState("");
  const [modalIsOpenPolicy, setModalIsOpenPolicy] = useState(false);
  const [dataFooter, setDataFooter] = useState<FooterServicios[]>([]);
  const [dataInformationLegal, setDataInformationLegal] = useState<
    InformationLegal[]
  >([]);

  const handleOpenModal = () => {
    setModalIsOpenPolicy(true);
  };

  const handleCloseModal = () => {
    setModalIsOpenPolicy(false);
  };

  const handleAccordionActive = (name: string) => {
    if (accordionActive !== name) {
      return setAccordionActive(name);
    }
    return setAccordionActive("");
  };

  useEffect(() => {
    const savedPhone = localStorage.getItem("phone");

    if (savedPhone) {
      try {
        const parsedPhone = JSON.parse(savedPhone);
        setStoredPhone(parsedPhone || "");
      } catch (error) {
        console.error("Error al leer el teléfono:", error);
      }
    }
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "footerservicios"));
      setDataFooter(
        querySnapshot.docs.map((doc) => ({
          descripcion: doc.data().descripcion,
        }))
      );
    };
    fetchData();

    const fetchDataPolitics = async () => {
      const querySnapshot = await getDocs(collection(db, "politicas"));
      setDataInformationLegal(
        querySnapshot.docs.map((doc) => ({
          titulo: doc.data().titulo,
          contenido: doc.data().contenido,
          tipo: doc.data().tipo,
        }))
      );
    };
    fetchDataPolitics();
  }, []);

  return (
    <>
      <Block>
        <Container isMobile={isMobileApp}>
          <Grid>
            <FooterTop>
              <Logo>
                <LinkLogo href={routes.home}>
                  <Image
                    src={`/assets/images/logo-orizontal-negativo.png`}
                    alt="logo-footer"
                  />
                </LinkLogo>
                <CompanyInfo style={{ marginLeft: "0px" }}>
                  Somos una agencia de desarrollo de software dedicada a la
                  creación de soluciones tecnológicas.
                </CompanyInfo>
              </Logo>
              <Column2>
                <Nav>
                  <Content style={{ marginTop: "38px" }}>
                    <Title onClick={(e) => handleAccordionActive("services")}>
                      Servicios
                      <BsChevronDown size={10} />
                    </Title>
                    <NavList
                      className={accordionActive === "services" ? "active" : ""}
                    >
                      <NavItem>
                        <NavList>
                          {dataFooter &&
                            dataFooter.map((item, index) => (
                              <NavItem key={index}>{item.descripcion}</NavItem>
                            ))}
                        </NavList>
                      </NavItem>
                    </NavList>
                  </Content>
                </Nav>
              </Column2>
              <Column3 style={{ marginTop: "35px" }}>
                <Title onClick={(e) => handleAccordionActive("contact")}>
                  Contáctanos
                  <BsChevronDown size={10} />
                </Title>
                <NavList
                  className={accordionActive === "contact" ? "active" : ""}
                >
                  <ContactInfo>
                    <strong>Teléfono:</strong>
                    <a href={`tel:+${storedPhone}`}>+{storedPhone}</a>
                    <br />
                    <strong>Email:</strong>
                    <a href={`mailto:${ENTERPRISE_EMAIL}`} target="_blank">
                      {ENTERPRISE_EMAIL}
                    </a>
                  </ContactInfo>
                </NavList>
              </Column3>
              <Column4>
                <Content style={{ marginTop: "38px" }}>
                  <Title onClick={(e) => handleAccordionActive("redes")}>
                    Nuestras Redes
                    <BsChevronDown size={10} />
                  </Title>
                  <NavList
                    className={accordionActive === "redes" ? "active" : ""}
                  >
                    <Nav>
                      <Networks>
                        <Link href={INSTAGRAM} target="_blank">
                          <FaInstagram size="24" />
                        </Link>

                        <Link
                          href={`${WHATSAPP}${storedPhone}`}
                          target="_blank"
                        >
                          <FaWhatsapp size="24" />
                        </Link>
                        <Link href={FACEBOOK} target="_blank">
                          <FaFacebook size="24" />
                        </Link>
                      </Networks>
                    </Nav>
                  </NavList>
                </Content>
              </Column4>
            </FooterTop>
            <FooterBottom noMobile={!isMobileApp}>
              {!isMobileApp ? (
                <FooterBottomRow
                  alignItems="center"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    width: "100%",
                  }}
                >
                  <AdditionalOption isMobile={isMobileApp}>
                    &copy; Enterprise Solutions Tech {new Date().getFullYear()}{" "}
                    Todos los Derechos Reservados
                  </AdditionalOption>
                  <AdditionalOption
                    isMobile={isMobileApp}
                    style={{ marginLeft: "65px", cursor: "pointer" }}
                    onClick={() => handleOpenModal()}
                  >
                    Políticas de Privacidad
                  </AdditionalOption>
                  <AdditionalOption
                    isMobile={isMobileApp}
                    style={{ marginLeft: "25px" }}
                  >
                    <Link href="#sobre-enterprisesolutionstech">
                      {" "}
                      Sobre Enterprise Solutions Tech
                    </Link>
                  </AdditionalOption>
                </FooterBottomRow>
              ) : (
                <FooterBottomRow
                  style={{
                    display: "grid",
                    width: "100%",
                    gap: 20,
                  }}
                >
                  <AdditionalOption isMobile={isMobileApp}>
                    <Link href="#sobre-enterprisesolutionstech">
                      {" "}
                      Sobre Enterprise Solutions Tech
                    </Link>
                  </AdditionalOption>
                  <AdditionalOption
                    isMobile={isMobileApp}
                    onClick={() => handleOpenModal()}
                  >
                    Políticas de Privacidad
                  </AdditionalOption>
                  <AdditionalOption isMobile={isMobileApp}>
                    &copy; Enterprise Solutions Tech {new Date().getFullYear()}{" "}
                    Todos los Derechos Reservados
                  </AdditionalOption>
                </FooterBottomRow>
              )}
            </FooterBottom>
          </Grid>
        </Container>
      </Block>

      <ModalInformationLegal
        open={modalIsOpenPolicy}
        data={dataInformationLegal[0]}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
