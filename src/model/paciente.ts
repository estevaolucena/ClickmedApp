import { Usuario } from "./usuario";

export class Paciente{
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    telefone1: string;
    telefone2: string;
    cidade: string;
    estado: string;
    nomeRua: string;
    numero: string;
    bairro: string;
    cep: string;
    foto: string;
    usuario: Usuario;

}