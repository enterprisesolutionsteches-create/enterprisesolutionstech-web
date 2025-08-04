import { doc, getDoc } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  ContactLinks,
  CVButton,
  CVButtons,
  CVCard,
  CVDescription,
  CVImage,
  CVName,
  CVRole,
  CVRoot,
  ExpansionPanel,
  ExperienceItem,
  ExperienceLogo,
  FlexWrapper,
  PortfolioLink,
  SectionTitle,
  SocialIcon,
  TechItem,
  TechList,
} from "./Profiles.styles";

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
}

interface Portfolio {
  nombre_proyecto: string;
  descripcion_proyecto: string;
  url_proyecto: string;
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
}

export const Profiles: FC<ModalCalculateProps> = ({ idProfile }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [accordionActive, setAccordionActive] = useState<string | null>(null);

  const handleAccordionActive = (section: string) => {
    setAccordionActive(accordionActive === section ? null : section);
  };

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

  if (!profile) return null;

  return (
    <CVRoot>
      <CVCard>
        <CVImage src={profile?.foto} alt={profile?.nombre} />
        <CVName>{profile?.nombre}</CVName>
        <ContactLinks>
          {profile?.telefono && (
            <SocialIcon href={`tel:${profile.telefono}`}>
              <FaPhone size={22} />
            </SocialIcon>
          )}
          {profile?.whatsapp && (
            <SocialIcon href={profile.whatsapp} target="_blank">
              <FaWhatsapp size={22} />
            </SocialIcon>
          )}
          {profile?.linkedin && (
            <SocialIcon href={profile.linkedin} target="_blank">
              <FaLinkedin size={22} />
            </SocialIcon>
          )}
          {profile?.contacto && (
            <SocialIcon href={`mailto:${profile.contacto}`} target="_blank">
              <FaEnvelope size={22} />
            </SocialIcon>
          )}
        </ContactLinks>
        <CVRole>{profile?.rol}</CVRole>
        <CVDescription>{profile?.descripcion}</CVDescription>

        <SectionTitle>Tecnologías</SectionTitle>
        <TechList>
          {profile?.tecnologias?.map((tech, index: number) => (
            <TechItem key={index}>
              <img src={tech.imagen} alt={tech.nombre} width="20" height="20" />
              <span>{tech.nombre}</span>
            </TechItem>
          ))}
        </TechList>

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
                <ExperienceItem key={index}>
                  <FlexWrapper>
                    <ExperienceLogo src={exp.logo_empresa} alt={exp.empresa} />
                    <div>
                      <strong>{exp.puesto}</strong> en {exp.empresa} (
                      {exp.duracion})<p>{exp.descripcion}</p>
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
                  href={project.url_proyecto}
                  target="_blank"
                >
                  <strong>{project.nombre_proyecto}</strong>:{" "}
                  {project.descripcion_proyecto}
                </PortfolioLink>
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
    </CVRoot>
  );
};
