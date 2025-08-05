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
  Section
} from "./ModalInformationLegal.styles";

type ModalCalculateCP = ComponentProps<typeof Section>;
type ModalCalculateProps = ModalCalculateCP & {
  open: boolean;
  data?: InformationLegal;
  handleCloseModal: () => void;
};

export const ModalInformationLegal: FC<ModalCalculateProps> = ({
  open,
  data,
  handleCloseModal,
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
              {data?.contenido && (
                <Description>
                  {parse(data?.contenido.split("\n").join(""))}
                </Description>
              )}
            </Body>
          </Box>
        </Container>
      </Section>
    )
  );
};
