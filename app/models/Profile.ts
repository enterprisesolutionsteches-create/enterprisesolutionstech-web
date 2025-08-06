export interface Technology {
  nombre: string;
  imagen: string;
}

export interface Experience {
  empresa: string;
  puesto: string;
  duracion: string;
  descripcion: string;
  logo_empresa: string;
  link_empresa: string;
}

export interface Portfolio {
  nombre_proyecto: string;
  descripcion_proyecto: string;
  url_proyecto: string;
}

export interface Certificaciones {
  title: string;
  duracion: string;
  descripcion: string;
  image: string;
  link: string;
}

export interface FlyerProperties {
  showFlyer: number;
  quantity: number;
  background: string
  backgroundBase64: string
  textColor: string
}

export interface GeneralProperties {
  onlyImagesInTechnologies: boolean;
}

export interface ProfileData {
  nombre: string;
  rol: string;
  descripcion: string;
  foto: string;
  cv: string;
  contacto: string;
  telefono?: string;
  whatsapp?: string;
  linkedin?: string;
  tecnologias: Technology[];
  experiencia_laboral: Experience[];
  portafolio: Portfolio[];
  certificaciones: Certificaciones[];
  direccion: string;
  idiomas: string;
  fotoBase64: string;
  flyerProperties: FlyerProperties;
  generalProperties: GeneralProperties;
}