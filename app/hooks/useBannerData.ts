import { useEffect, useState } from "react";
import { Gallery, TypeBanner } from "../models/Banner";

export const useBannerData = (
  listBanner: any[] | undefined,
  titleDescripcion?: string,
  carousel?: boolean
) => {
  const [BannerData, setBannerData] = useState<TypeBanner[]>([]);

  useEffect(() => {
    if (listBanner && listBanner.length > 0) {
      let transformedData: TypeBanner[] = [];
      transformedData.push({
        title:
          titleDescripcion != "" ? titleDescripcion : listBanner[0].resumen,
        gallery: listBanner.map((item) => {
          const galleryItem: Gallery = {
            title: item.titulo || "",
            description: item.detalle,
            image: { alt: item.altFoto || "", url: item.foto || "" },
            image_mobile: {
              alt: item.altFoto || "",
              url: item.fotoMobile || "",
            },
          };
          galleryItem.link = {
            text: item.textoBoton || "",
            url: item.urlBoton || "",
            colortitulo: item.colortitulo || "",
            colortitulodetalle: item.colortitulodetalle || "",
            fondo: item.colorBoton || "",
            colorLetra: item.colorLetraBoton || "",
            indicadorBoton: (item.indicadorBoton ?? 0).toString(),
            accionBoton: (item.accionBoton ?? 0).toString(),
            indicadorBotonMobile: (item.indicadorBotonMobile ?? 0).toString(),
          };
          return galleryItem;
        }),
        carousel: carousel,
      });
      setBannerData(transformedData);
    }
  }, [listBanner]);

  return { BannerData };
};
