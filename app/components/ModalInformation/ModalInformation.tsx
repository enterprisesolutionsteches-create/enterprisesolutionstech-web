import parse from "html-react-parser";
import { ComponentProps, FC } from "react";
import { IoClose } from "react-icons/io5";
import { InformationLegal } from "../../models/Home";
import {
  Body,
  Box,
  Container,
  Description,
  Header,
  HeaderClose,
  Image,
  Section,
} from "./ModalInformation.styles";

type ModalCalculateCP = ComponentProps<typeof Section>;
type ModalCalculateProps = ModalCalculateCP & {
  open: boolean;
  data?: InformationLegal;
  handleCloseModal: () => void;
  image?: string | null;
};

export const ModalInformation: FC<ModalCalculateProps> = ({
  open,
  data,
  handleCloseModal,
  image,
}) => {
  return (
    open && (
      <Section>
        <Container>
          <Box>
            <Header>
              <div style={{ display: "flex" }}></div>
              <HeaderClose
                onClick={() => {
                  handleCloseModal();
                }}
              >
                <IoClose color="#36AD55" size={36} />
              </HeaderClose>
            </Header>
            <Body>
              {image ? (
                <Image
                  src={image}
                  alt="Descripción de la imagen"
                  style={{ width: "100%" }}
                />
              ) : (
                data?.contenido && (
                  <Description>
                    {parse(data?.contenido.split("\n").join(""))}
                  </Description>
                )
              )}
            </Body>
          </Box>
        </Container>
      </Section>
    )
  );
};
