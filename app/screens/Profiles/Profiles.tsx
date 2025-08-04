import { FC, useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import {
  CVButton,
  CVButtons,
  CVCard,
  CVDescription,
  CVImage,
  CVName,
  CVRole,
  CVRoot,
  TechItem,
  TechList,
} from "./Profiles.styles";

type ModalCalculateProps = {
  idProfile: string;
};

export const Profiles: FC<ModalCalculateProps> = ({ idProfile }) => {
  console.log(idProfile);

  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const docRef = doc(db, "profiles", idProfile);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No existe el documento");
        }
      } catch (error) {
        console.error("Error obteniendo el profile:", error);
      }
    };
    if (idProfile) {
      fetchPerfil();
    }
  }, [idProfile]);

  if (!idProfile) return null;

  return (
    <CVRoot>
      <CVCard>
        <CVImage src={profile?.foto} alt={profile?.nombre} />
        <CVName>{profile?.nombre}</CVName>
        <CVRole>{profile?.rol}</CVRole>
        <CVDescription>{profile?.descripcion}</CVDescription>
        <TechList>
          {profile?.tecnologias.map((tech: string, index: number) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
        <CVButtons>
          <CVButton href={profile?.cv} target="_blank">
            Descargar CV
          </CVButton>
          <CVButton href={profile?.contacto}>Contactar</CVButton>
        </CVButtons>
      </CVCard>
    </CVRoot>
  );
};
