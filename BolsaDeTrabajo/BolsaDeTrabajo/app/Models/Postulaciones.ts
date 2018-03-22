export class EstadoEstudio {
    id: number;
    estadoEstudio: string;
}

export class TipoDireccion {
    id: number;
    tipoDireccion: string;
}

export class Area {
    id: number;
    nombre: string;
}

export class GiroEmpresa {
    id: number;
    giroEmpresa: string;
}

export class ActividadEmpresa {
    id :number;
    giroEmpresaId: number;
    actividadEmpresa: string;
}

export class TamanoEmpresa {
    id: number;
    tamnoEmpresa: string;
}

export class TipoEmpresa {
    id: number;
    tipoEmpresa: string;
}

export class TipoBase {
    id: number;
    tipoBase: string;
}

export class Cliente {
    id: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: Date;

    razonSocial: string;
    nombrecomercial: string;
    rfc: string;
    giroEmpresaId: number;
    actividadEmpresaId: number;
    tamanoEmpresaId: number;
    tipoEmpresaId: number;
    tipoBaseId: number;
    otraAgencia: boolean;
    esCliente: boolean;
    clasificacion: string;
    numeroEmpleados: number;

    giroEmpresas: GiroEmpresa;
    actividadEmpresas: ActividadEmpresa;
    tamanoEmpresas: TamanoEmpresa;
    tipoBases: TipoBase;
}

export class Nivel {
    id: number;
    Nivel: string;
}

export class Aptitud {
    id: number;
    aptitud: string;
}

    
export class AptitudesPerfil {
    id: string;
    AptitudesPerfil: string;
    DAMFO290Id: string;
}

export class HorarioPerfil {
    id: string;
    nombre: string;
    deDia: string;
    aDia: string;
    deHora: string;
    aHora: string;
    numeroVacantes: number;
    especificaciones: string;
    activo: boolean;
    damfo290: string;
}

export class BeneficiosPerfil {
    id: string;
    tipoBeneficioId: string;
    DAMFO290Id: string;
    cantidad: number;
    observaciones: string;
}

export class TipoContrato {
    id: number;
    tipoContrato: string;
}

export class PrestacionLey {
    id: number;
    PrestacionLey: string;
}

export class PrestacionesClientePerfil {
    id: string;
    prestamo: string;
    DAMFO290Id: string;
}

export class Pais {
    id: number;
    pais: string;
}
export class Estado {
    Id: number;
    estado: string;
    clave: string;
}

export class Municipio {
    id: number;
    municipio: string;
}

export class Colonia {
    id: number;
    colonia: string;
    CP: string;
    tipoColonia: string;
    municipioId: number;
    estadoId: number;
    paisId: number;
}
export class Direccion {
    id: string;
    calle: string;
    numeroInterior: string;
    numeroExterior: string;
    paisId: number;
    pais: Pais;
    estadoId: number;
    estado: Estado;
    municipioId: number;
    municipio: Municipio;
    coloniaId: number;
    colonia: Colonia;
    codigoPostal: string;
}

export class Vacante {
    id: string;
    vTra: string;
    escolaridaId: number;
    experiencia: string;
    direccionId: number;
    categoriaId: number;
    clienteId: string;
    fechaCreacion: Date;
    nivelId: number;
    horarioId: number;
    actividades: string;
    tipoContratoId: number;

    DAMFO290Id: string;

    escolaridad: EstadoEstudio;
    direccion: Direccion;
    categoria: Area;
    cliente: Cliente;
    Nivel: Nivel;
    horario: HorarioPerfil;
    contrato: TipoContrato;
    beneficios: BeneficiosPerfil[];       
}

export class StatusPostulacion {
    id: Number;
    status: string;
}

export class Postulacion {
    id: string;
    candidatoId: string;
    vacanteId: string;
    statusId: number;
    status: StatusPostulacion;
    vacante: Vacante;
}

export class FiltroPostulaciones {
    candidatoId: string;
    palabraClave: string;
    filtroStatus: number[];
    filtroCategoria: number[];
}