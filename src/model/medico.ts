import { Especialidade } from "./especialidade";
import { Clinica } from "./clinica";
import { Convenio } from "./convenio";
import { Usuario } from "./usuario";

export class Medico{
    id: number;
    crm: string;
    nome: string;
    sobrenome: string;
    experienciaProfissional: string;
    formacaoAcademica: string;
    planosConvenio: string;
    telefone1: string;
    telefone2: string;
    horaInicioAtendimento: string;
    horaFimAtendimento: string;
    diasAtendimento: string;
    sexo: string;
    usuario: Usuario;
    convenios: Convenio;
    clinicas: Clinica;
    especialidades: Especialidade;
}