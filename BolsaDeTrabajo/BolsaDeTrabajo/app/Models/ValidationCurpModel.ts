
import { Pais, Estado } from './Candidato';
export class DataValidation {
    id: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    generoId: number;
    fechaNacimiento: Date;
    paisNacimiento: Pais;
    paisNacimientoId: number;
    estadoNacimiento: Estado;
    estadoNacimientoId: number;
}