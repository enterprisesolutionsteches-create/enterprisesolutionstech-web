import { SlArrowUp } from "react-icons/sl";
import { Container, Content } from "./FloatButton.styles";

export const FloatButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container onClick={scrollToTop}>
      <Content>
        <SlArrowUp size={24}/>
      </Content>
    </Container>
  );
};
