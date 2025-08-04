import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { ComponentProps, FC, useEffect, useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { db } from "../../../../firebaseConfig";

import { FACEBOOK, INSTAGRAM, WHATSAPP } from "constants/general";
import { Informacion } from "models/Informacion";
import { Menu } from "models/Menu";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import {
  Block,
  BlockContact,
  BlockHeader,
  Contact,
  ContactText,
  Container,
  ContainerPhone,
  HeaderBar,
  HeaderContent,
  IconMenu,
  ImageLogo,
  Logo,
  NavContent,
  NavPrimary,
  NavPrimaryItem,
  Networks,
  networkStyles,
  Selected,
} from "./Header.styles";

type HeaderCP = ComponentProps<typeof Block>;
type HeaderProps = HeaderCP & {};
export const Header: FC<HeaderProps> = () => {
  let urlPage = "";
  if (typeof window !== "undefined") {
    urlPage = window.location.href ?? "";
  }

  const [data, setData] = useState<Informacion[]>([]);
  const [dataMenu, setDataMenu] = useState<Menu[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [url, setUrl] = useState("");
  const [classActive, setClassActive] = useState("");
  const [active, setActive] = useState(false);
  const [storedPhone, setStoredPhone] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "informacion"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        telefono: doc.data().telefono,
      }));
      localStorage.setItem("phone", JSON.stringify(data[0]?.telefono));

      setData(data);
    };

    const fetchDataMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "menu"));
      const dataMenu = querySnapshot.docs.map((doc) => ({
        menu: doc.data().menu,
        url: doc.data().url,
        estado: doc.data().estado,
        id: doc.id,
        orden: doc.data().orden,
      }));
      setDataMenu(dataMenu);
    };

    const fetchDataConcurrent = async () => {
      await Promise.all([fetchData(), fetchDataMenu()]);
    };

    fetchDataConcurrent();

    const savedPhone = localStorage.getItem("phone");

    if (savedPhone) {
      try {
        const parsedPhone = JSON.parse(savedPhone);
        const cleanedPhone = parsedPhone.replace(/[()\s]/g, "");
        setStoredPhone(cleanedPhone || "");
      } catch (error) {
        console.error("Error al leer el teléfono:", error);
      }
    }
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Block className={active ? "fixed" : ""}>
      <BlockContact>
        <Container>
          <Contact>
            <ContainerPhone>
              <FaPhone size={24} />
              {data?.map((item: Informacion) => {
                return (
                  <ContactText
                    key={item.id}
                    style={{ color: "$primary", fontWeight: "bold" }}
                    href={`tel:+${item.telefono}`}
                  >
                    +{item.telefono}
                  </ContactText>
                );
              })}
            </ContainerPhone>

            <Networks>
              <Link
                href={INSTAGRAM}
                target="_blank"
                style={{
                  ...networkStyles.link,
                  ...(isHovered ? networkStyles.hover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaInstagram size="24" />
              </Link>
              <Link
                href={`${WHATSAPP}${storedPhone}`}
                target="_blank"
                style={{
                  ...networkStyles.link,
                  ...(isHovered ? networkStyles.hover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaWhatsapp size="24" />
              </Link>
              <Link
                href={FACEBOOK}
                target="_blank"
                style={{
                  ...networkStyles.link,
                  ...(isHovered ? networkStyles.hover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FaFacebook size="24" />
              </Link>
            </Networks>
          </Contact>
        </Container>
      </BlockContact>

      <BlockHeader>
        <Container>
          <HeaderContent>
            <HeaderBar>
              <Logo>
                <Link href={"/"} onClick={(e) => setActive(false)}>
                  <ImageLogo
                    src={`/assets/images/imagotipo.png`}
                    alt="logo-img"
                  />
                </Link>
              </Logo>
              <IconMenu onClick={handleClick}>
                {!active ? <FaBars size={24} /> : <GrClose size={24} />}
              </IconMenu>
            </HeaderBar>
            <NavContent>
              <NavPrimary className={classActive}>
                {dataMenu &&
                  dataMenu?.map((item, index) => (
                    <NavPrimaryItem
                      key={index}
                      className={url.includes(item.url) ? "selected" : ""}
                    >
                      <Link
                        href={`#${item.url}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.url)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          setActive(false);
                        }}
                      >
                        {item.menu}
                        <Selected
                          className={url.includes(item.url) ? "active" : ""}
                        >
                          .
                        </Selected>
                        <FaChevronRight size={24} />
                      </Link>
                    </NavPrimaryItem>
                  ))}
              </NavPrimary>
            </NavContent>
          </HeaderContent>
        </Container>
      </BlockHeader>
    </Block>
  );
};
