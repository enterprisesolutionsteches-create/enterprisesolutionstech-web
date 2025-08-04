import { useEffect, useMemo, useState } from "react";
import { Banner } from "../../components/Banner";
import { useBannerData } from "../../hooks/useBannerData";

import { About } from "components/About";
import { Contact } from "components/Contact";
import { FloatButton } from "components/FloatButton";
import { Services } from "components/Services";
import { logEvent } from "firebase/analytics";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useAnalytics } from "hooks/useAnalitycs";
import { useInView } from "react-intersection-observer";
import { db } from "../../../firebaseConfig";
import {
  BoxAcction,
  Container,
  HomeRoot,
  Section,
  SectionBanner,
  Title,
  TitleAcction,
} from "./Home.styles";

export const Home = () => {
  //hooks
  const analytics = useAnalytics();

  const [bannerData, setBannerData] = useState<{ data: DocumentData }[]>([]);

  const { ref: refServices, inView: inViewServices } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: refPortfolio, inView: inViewPortfolio } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: refNosotros, inView: inViewNosotros } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: refContactos, inView: inViewContactos } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [showButton, setShowButton] = useState(false);

  //GOOGLE ANALYTICS
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "pagina_visitada");
    }
  }, [analytics]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const newData = querySnapshot.docs.map((doc) => ({ data: doc.data() }));
        setBannerData(newData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
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

  const memoizedBannerData = useMemo(
    () => bannerData.map((item) => item.data),
    [bannerData]
  );
  const { BannerData } = useBannerData(memoizedBannerData, "Home", true);
  
  return (
    <HomeRoot>
      {BannerData.length > 0 && (
        <Banner
          size={1}
          isCarousel
          data={BannerData[0]}
          className="home"
        />
      )}
      <SectionBanner>
        <Container className="nav">
          <BoxAcction>
            <TitleAcction>Crea, Conecta e Innova</TitleAcction>
          </BoxAcction>
        </Container>
      </SectionBanner>
      <Section id="servicios" ref={refServices}>
        <Title>Nuestros Servicios</Title>
        <Services></Services>
      </Section>
      <Section id="nosotros" ref={refNosotros}>
        <Title>Nosotros</Title>
        <About></About>
      </Section>
      <Section id="contactos" ref={refContactos}>
        <Title>Contáctanos</Title>
        <Contact></Contact>
      </Section>
      {showButton && <FloatButton />}
    </HomeRoot>
  );
};
