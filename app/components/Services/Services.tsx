import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  CarouselContainer,
  ContentGeneral,
  Description,
  GridContainer,
  GridItem,
  Image,
  Section,
  ServicestRoot,
  Title,
} from "./Services.styles";

export const Services = () => {
  const [dataServicios, setDataServicios] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "servicios"));
      const data = querySnapshot.docs.map((doc) => ({
        image: doc.data().image,
        title: doc.data().title,
        description: doc.data().description,
      }));
      setDataServicios(data);
    };
    fetchData();
  }, []);

  return (
    <ServicestRoot>
      <Section>
        <CarouselContainer>
          <ContentGeneral>
            <GridContainer>
              {dataServicios.map((item) => {
                return (
                  <GridItem>
                    <Title>
                      <Image src={item.image} alt={item.title} />
                      <Title>{item.title}</Title>
                      <Description>{item.description}</Description>
                    </Title>
                  </GridItem>
                );
              })}
            </GridContainer>
          </ContentGeneral>
        </CarouselContainer>
      </Section>
    </ServicestRoot>
  );
};
