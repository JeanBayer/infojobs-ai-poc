import { type User } from "./user";

export interface Offer {
  id: string;
  puesto: string;
  descripcion: string;
  idioma: string;
  localidad: string;
  modalidad: string;
  postulados: User[]
}
