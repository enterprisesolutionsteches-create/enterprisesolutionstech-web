export type ProgramaNosotros = {
  id: string;
  icono: string;
  titulo: string;
  detalle: string;
  url: string;
};

export type RedNosotros = {
  id: string;
  imagen: string;
};

export type NosotrosLists = {
  programaNosotros: ProgramaNosotros[];
  redNosotros: RedNosotros[];
};

export type InformationLegal = {
  nombre?: string;
  contenido?: string;
  tipo?: string;
};

export type ItemParametros = {
  columna: string;
  codigo: string;
  descripcion: string;
  abreviatura: string;
  observacion: string;
};

export type LandingContenido = {
  id: string;
  tituloContenido: string;
  contenido: string;
  resumenBanner: string;
  tituloBanner: string;
  foto: string;
  fotoMobile: string;
  altFoto: string;
  indicadorBoton: string;
  textoBoton: string;
  urlBoton: string;
  colorBoton: string;
  colorLetraBoton: string;
  accionBoton: string;
  indicadorNuevaVentana: string;
};

export type LandingDetalle = {
  id: string;
  seccion: string;
  contenido: string;
  indicadorBoton: string;
  urlBoton: string;
  textoBoton: string;
  colorBoton: string;
  urlPersonalizada: string;
  accionBoton: string;
  indicadorNuevaVentana: string;
};

export type LandingDetalleLists = {
  landingContenido: LandingContenido[];
  landingDetalle: LandingDetalle[];
};

export type TermsConditions = {
  titulo: string;
  contenido: string;
  resumenBanner: string;
  tituloBanner: string;
  foto: string;
  fotoMobile: string;
  altFoto: string;
  indicadorBoton: string;
  textoBoton: string;
  urlBoton: string;
  colorBoton: string;
  colorLetraBoton: string;
  accionBoton: string;
  indicadorNuevaVentana: string;
  urlPersonalizada: string;
};

export type EmailRequest = {
  to: string;
  from: string;
  fromName: string;
  subject: string;
  templateName: string;
  metadata: Record<string, string>;
};
