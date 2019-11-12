import { Paciente } from "./paciente";
import { Medico } from "./medico";

export interface Avaliacao {
  avaliacao?: string, // tags
  respostamed?: string, // status da avaliacao
  pergunta1?: string, // valor da avaliacao de 0 a 5
  comentario?: string, // comentario sobre a consulta
  descricao?: string, // data da consulta
  paciente?: Paciente,
  medico?: Medico,
}