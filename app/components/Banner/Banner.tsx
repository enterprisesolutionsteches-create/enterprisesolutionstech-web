import Link from "next/link";
import { ComponentProps, FC } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { mapAccionBoton } from "../../constants/mapper";
import { TypeBanner } from "../../models/Banner";
import {
  Button,
  ButtonContent,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  ColumnText,
  Container,
  ControlContent,
  ControlNext,
  ControlPrev,
  Controls,
  Description,
  Grid,
  Image,
  Section,
  Title,
} from "./Banner.styles";

SwiperCore.use([Autoplay, Pagination, Navigation]);

type BannerOwn = ComponentProps<typeof Section>;
type BannerProps = BannerOwn & {
  size?: 0 | 1 | 2 | 3;
  isCarousel?: boolean;
  data?: TypeBanner;
  className?: "home" | "staff" | "services";
  onClick?: () => void;
};

export const Banner: FC<BannerProps> = ({
  size,
  isCarousel,
  data,
  className,
  onClick,
}) => {

  return (
    <Section>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000 }}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".controlNext",
          prevEl: ".controlPrev",
        }}
        pagination={{ clickable: true }}
      >
        {data?.gallery &&
          data?.gallery.map(
            ({ title, description, link, image, image_mobile }, i) => {
              return (
                <SwiperSlide key={i}>
                  <CarouselItem
                    className={
                      "tmp_v" +
                      size +
                      (image && image.url === "" ? " fondo" : "")
                    }
                  >
                    <>
                      {image && image.url != "" && (
                        <Image
                          src={`${image.url}`}
                          alt={image.alt}
                          className={"desktop " + (!image_mobile && "show")}
                        />
                      )}
                      {image_mobile && image_mobile.url != "" && (
                        <Image
                          src={`${image_mobile.url}`}
                          alt={image_mobile.alt}
                          className="mobile-carousel"
                        />
                      )}
                    </>

                    <CarouselContent>
                      <Container>
                        <Grid className={className}>
                          <ColumnText
                            showButtonMobile={
                              link?.indicadorBotonMobile === "1"
                            }
                          >
                            <>
                              <Container>
                                <Title style={{ color: link?.colortitulo }}>
                                  {title}
                                </Title>
                                <Description
                                  style={{ color: link?.colortitulodetalle }}
                                >
                                  {description}{" "}
                                </Description>
                              </Container>

                              {link &&
                                (link.fondo &&
                                link.colorLetra &&
                                link.indicadorBoton === "1" ? (
                                  <ButtonContent>
                                    {link?.accionBoton === "99" ? (
                                      <Button
                                        style={{
                                          backgroundColor: link?.fondo,
                                          color: link?.colorLetra,
                                        }}
                                        onClick={onClick}
                                      >
                                        {link.text}
                                      </Button>
                                    ) : (
                                      <Link
                                        href={`${
                                          mapAccionBoton[
                                            link?.accionBoton || "0"
                                          ]
                                        }#contactos`}
                                      ></Link>
                                    )}
                                  </ButtonContent>
                                ) : null)}
                            </>
                          </ColumnText>
                        </Grid>
                      </Container>
                    </CarouselContent>
                  </CarouselItem>
                </SwiperSlide>
              );
            }
          )}
        {isCarousel && (
          <CarouselControl>
            <Container>
              <Controls>
                <ControlPrev className="controlPrev">
                  <ControlContent>
                    <SlArrowLeft size={18} />
                  </ControlContent>
                </ControlPrev>
                <ControlNext className="controlNext">
                  <ControlContent>
                    <SlArrowRight size={18} />
                  </ControlContent>
                </ControlNext>
              </Controls>
            </Container>
          </CarouselControl>
        )}
      </Swiper>
      <Container></Container>
    </Section>
  );
};
