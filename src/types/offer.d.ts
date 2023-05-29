import { type User } from "./user";

export interface Offer {
  id: string;
  idCompany: string;
  puesto: string;
  descripcion: string;
  idiomas: string[];
  localidad: string;
  modalidad: string;
  postulados: User[]
}
