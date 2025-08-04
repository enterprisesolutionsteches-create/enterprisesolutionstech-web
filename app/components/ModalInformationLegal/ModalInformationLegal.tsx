import parse from "html-react-parser";
import { ComponentProps, FC, useState } from "react";
import { InformationLegal } from "../../models/Home";
import {
  Body,
  Box,
  Container,
  Description,
  Header,
  HeaderClose,
  Section,
  SeeMoreText,
  Title,
} from "./ModalInformationLegal.styles";
import { IoClose } from "react-icons/io5";

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
  const [showMore, setShowMore] = useState(false);
  return (
    open && (
      <Section>
        <Container>
          <Box>
            <Header>
              <div style={{ display: "flex" }}></div>
              <HeaderClose
                onClick={() => {
                  setShowMore(false);
                  handleCloseModal();
                }}
              >
                <IoClose color="#36AD55" size={26} />
              </HeaderClose>
            </Header>
            <Body>
              {/* <Title>{data?.nombre}</Title> */}
              {data?.contenido && (
                <Description showMore={showMore}>
                  {parse(data?.contenido.split("\n").join(""))}
                </Description>
              )}
              {!showMore && data?.contenido && data?.contenido.length > 500 && (
                <SeeMoreText onClick={() => setShowMore(true)}>
                  ver más
                </SeeMoreText>
              )}
            </Body>
          </Box>
        </Container>
      </Section>
    )
  );
};
