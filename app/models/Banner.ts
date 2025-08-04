export type Gallery = {
  title: string;
  description?: string;
  link?: {
    text: string;
    url: string;
    fondo?: string;
    colorLetra?: string;
    colortitulo?: string;
    colortitulodetalle?: string;
    indicadorBoton?: string;
    accionBoton?: string;
    indicadorBotonMobile?: string;
  };
  image?: { alt: string; url: string };
  image_mobile?: { alt: string; url: string };
  imageSelloCalidad?: { url: string };
  imageSelloCalidadMobile?: { url: string };
};

export type TypeBanner = {
  title?: string;
  carousel?: boolean;
  gallery: Gallery[];
};
