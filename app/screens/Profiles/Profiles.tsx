import { doc, getDoc } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  ContactLinks,
  ContainerExperienceTitle,
  ContainerVerMas,
  CVAddress,
  CVButton,
  CVButtons,
  CVCard,
  CVDescription,
  CVImage,
  CVLanguage,
  CVName,
  CVRole,
  CVRoot,
  DateText,
  ExpansionPanel,
  ExperienceDescription,
  ExperienceItem,
  ExperienceLogo,
  ExperienceTitle,
  FlexWrapper,
  PortfolioLink,
  SectionTitle,
  SectionTitleVerMas,
  SocialIcon,
  TechItem,
  TechList,
} from "./Profiles.styles";

import { FloatButton } from "components/FloatButton";
import { ModalInformation } from "components/ModalInformation";
import {
  FaChevronDown,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

type ModalCalculateProps = {
  idProfile: string;
};

interface Technology {
  nombre: string;
  imagen: string;
}

interface Experience {
  empresa: string;
  puesto: string;
  duracion: string;
  descripcion: string;
  logo_empresa: string;
  link_empresa: string;
}

interface Portfolio {
  nombre_proyecto: string;
  descripcion_proyecto: string;
  url_proyecto: string;
}

interface Certificaciones {
  title: string;
  duracion: string;
  descripcion: string;
  image: string;
  link: string;
}

interface ProfileData {
  nombre: string;
  rol: string;
  descripcion: string;
  foto: string;
  cv: string;
  contacto: string;
  telefono?: string;
  whatsapp?: string;
  linkedin?: string;
  tecnologias: Technology[];
  experiencia_laboral: Experience[];
  portafolio: Portfolio[];
  certificaciones: Certificaciones[];
  direccion: string;
  idiomas: string;
}

export const Profiles: FC<ModalCalculateProps> = ({ idProfile }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [accordionActive, setAccordionActive] = useState<string | null>(null);
  const [verMas, setVerMas] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentImageData, setCurrentImageData] = useState<string | null>(null);
  const SIZE_ICON = 28;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const docRef = doc(db, "profiles", idProfile);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile({
            id: docSnap.id,
            ...docSnap.data(),
          } as unknown as ProfileData);
        } else {
          console.error("No existe el documento con ID:", idProfile);
          setProfile(null);
        }
      } catch (error) {
        console.error("Error obteniendo el profile:", error);
        setProfile(null);
      }
    };
    if (idProfile) {
      fetchPerfil();
    }
  }, [idProfile]);

  const handleAccordionActive = (section: string) => {
    setAccordionActive(accordionActive === section ? null : section);
  };

  const handleClickVerMas = () => {
    setVerMas(!verMas);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSetImageData = (image: string) => {
    setCurrentImageData(image);
    setModalIsOpen(true);
  };

  if (!profile) return null;

  const getTecnologias = () => {
    let tecnologiasFirstPart: Technology[] = [];
    let tecnologiasSecondPart: Technology[] = [];

    if (profile?.tecnologias.length > 3) {
      tecnologiasFirstPart = profile?.tecnologias?.slice(0, 3);
      tecnologiasSecondPart = profile?.tecnologias?.slice(3);

      return (
        <TechList>
          {tecnologiasFirstPart?.map((tech, index: number) => (
            <TechItem key={index}>
              <img src={tech.imagen} alt={tech.nombre} width="20" height="20" />
              <span>{tech.nombre}</span>
            </TechItem>
          ))}
          <ContainerVerMas>
            <SectionTitleVerMas onClick={() => handleClickVerMas()}>
              Ver más
              <FaChevronDown size={14} className={verMas ? "active" : ""} />
            </SectionTitleVerMas>
            <ExpansionPanel className={verMas ? "active" : ""}>
              <TechList>
                {tecnologiasSecondPart?.map((tech, index) => (
                  <TechItem key={index}>
                    <img
                      src={tech.imagen}
                      alt={tech.nombre}
                      width="20"
                      height="20"
                    />
                    <span>{tech.nombre}</span>
                  </TechItem>
                ))}
              </TechList>
            </ExpansionPanel>
          </ContainerVerMas>
        </TechList>
      );
    } else
      return (
        <TechList>
          {profile?.tecnologias?.map((tech, index: number) => (
            <TechItem key={index}>
              <img src={tech.imagen} alt={tech.nombre} width="20" height="20" />
              <span>{tech.nombre}</span>
            </TechItem>
          ))}{" "}
        </TechList>
      );
  };

  return (
    <CVRoot>
      <CVCard>
        <CVImage src={profile?.foto} alt={profile?.nombre} />
        <CVName>{profile?.nombre}</CVName>
        <ContactLinks>
          {profile?.telefono && (
            <SocialIcon href={`tel:${profile.telefono}`}>
              <FaPhone size={SIZE_ICON} />
            </SocialIcon>
          )}
          {profile?.whatsapp && (
            <SocialIcon href={profile.whatsapp} target="_blank">
              <FaWhatsapp size={SIZE_ICON} />
            </SocialIcon>
          )}
          {profile?.linkedin && (
            <SocialIcon href={profile.linkedin} target="_blank">
              <FaLinkedin size={SIZE_ICON} />
            </SocialIcon>
          )}
          {profile?.contacto && (
            <SocialIcon href={`mailto:${profile.contacto}`} target="_blank">
              <FaEnvelope size={SIZE_ICON} />
            </SocialIcon>
          )}
        </ContactLinks>
        {profile?.direccion && <CVAddress>{profile?.direccion}</CVAddress>}
        {profile?.rol && <CVRole>{profile?.rol}</CVRole>}
        {profile?.idiomas && <CVLanguage>{profile?.idiomas}</CVLanguage>}
        {profile?.descripcion && (
          <CVDescription>{profile?.descripcion}</CVDescription>
        )}

        <SectionTitle>Tecnologías</SectionTitle>
        {getTecnologias()}

        {profile?.experiencia_laboral && (
          <>
            <SectionTitle onClick={() => handleAccordionActive("experience")}>
              Experiencia Laboral
              <FaChevronDown
                size={14}
                className={accordionActive === "experience" ? "active" : ""}
              />
            </SectionTitle>
            <ExpansionPanel
              className={accordionActive === "experience" ? "active" : ""}
            >
              {profile?.experiencia_laboral?.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  href={exp.link_empresa}
                  target="_blank"
                >
                  <FlexWrapper>
                    <ExperienceLogo src={exp.logo_empresa} alt={exp.empresa} />
                    <div>
                      <ExperienceTitle>{exp.puesto}</ExperienceTitle>
                      <DateText>
                        {exp.empresa} ({exp.duracion})
                      </DateText>
                      <ExperienceDescription>
                        {exp.descripcion}
                      </ExperienceDescription>
                    </div>
                  </FlexWrapper>
                </ExperienceItem>
              ))}
            </ExpansionPanel>
          </>
        )}

        {profile?.portafolio && (
          <>
            <SectionTitle onClick={() => handleAccordionActive("portfolio")}>
              Portafolio
              <FaChevronDown
                size={14}
                className={accordionActive === "portfolio" ? "active" : ""}
              />
            </SectionTitle>
            <ExpansionPanel
              className={accordionActive === "portfolio" ? "active" : ""}
            >
              {profile?.portafolio?.map((project, index) => (
                <PortfolioLink
                  key={index}
                  onClick={() => handleSetImageData(project.url_proyecto)}
                >
                  <ExperienceTitle>{project.nombre_proyecto}</ExperienceTitle>
                  <ExperienceDescription>
                    {project.descripcion_proyecto}
                  </ExperienceDescription>
                </PortfolioLink>
              ))}
            </ExpansionPanel>
          </>
        )}

        {profile?.certificaciones && (
          <>
            <SectionTitle onClick={() => handleAccordionActive("certificados")}>
              Titulos / Certificados
              <FaChevronDown
                size={14}
                className={accordionActive === "certificados" ? "active" : ""}
              />
            </SectionTitle>
            <ExpansionPanel
              className={accordionActive === "certificados" ? "active" : ""}
            >
              {profile?.certificaciones?.map((cert, index) => (
                <ExperienceItem
                  key={index}
                  onClick={() => handleSetImageData(cert.link)}
                >
                  <FlexWrapper>
                    <ExperienceLogo src={cert.image} alt={cert.title} />
                    <div>
                      <ContainerExperienceTitle>
                        <ExperienceTitle>{cert.title}</ExperienceTitle>
                        <DateText>({cert.duracion})</DateText>
                      </ContainerExperienceTitle>
                      <ExperienceDescription>
                        {cert.descripcion}
                      </ExperienceDescription>
                    </div>
                  </FlexWrapper>
                </ExperienceItem>
              ))}
            </ExpansionPanel>
          </>
        )}

        <CVButtons>
          <CVButton href={profile?.cv} target="_blank">
            Descargar CV
          </CVButton>
          <CVButton href={`mailto:${profile.contacto}`}>Contactar</CVButton>
        </CVButtons>
      </CVCard>
      {showButton && <FloatButton />}

      <ModalInformation
        open={modalIsOpen}
        handleCloseModal={handleCloseModal}
        image={currentImageData}
      />
    </CVRoot>
  );
};
