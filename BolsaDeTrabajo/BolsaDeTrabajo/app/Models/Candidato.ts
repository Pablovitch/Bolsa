export class Pais
{
    id: number;
    pais: string;
}
export class Estado
{
    Id: number;
    estado: string;
    clave: string;
}

export class Municipio
{
    id: number;
    municipio: string;
}

export class Colonia
{
    id: number;
    colonia: string;
    CP: string;
    tipoColonia: string;
    municipioId: number;
    estadoId: number;
    paisId: number;
}
export class DatosPersonales
{
    telCasa: string;
    telCelular: string;
    telOficina: string;
    esDiscapacitado: boolean;
    puedeRehubicarse: boolean;
    puedeViajar: boolean;
    correoElectronico: boolean;
    codigoPostal:string;
    celular: boolean;
    whatsApp: boolean;
    telLocal: boolean;
    estadoCivilId: number;
    generoId: number;
    tipoDiscapacidadId: number;
    tieneLicenciaConducir: boolean;
    tipoLicenciaId: number;

    fechaNacimiento: Date;
    paisNacimiento: Pais;
    paisNacimientoId: number;
    estadoNacimiento: Estado;
    estadoNacimientoId: number;
    municipioNacimiento: Municipio;
    municipioNacimientoId: number;
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
export class Identificaciones
{
    tieneLicenciaConducir: boolean;
    tipoLicenciaId: number;
    tipoLicencia: string;
    tieneVehiculoPropio: boolean;
    curp: string;
    rfc: string;
    nss: string;
}

export class Candidato
{
    id: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    imgProfileUrl: string;
    datospersonales: DatosPersonales;
    direccion: Direccion;
    identificaciones: Identificaciones;
}

export class InformacionGeneral
{
    id: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    imgProfileUrl: string;
    curp: string;
}

export class RedSocial
{
    id: string;
    personaId: string;
    tipoRedSocialId: number;
    redSocial: string;
}

export class TipoRedSocial
{
    id: number;
    tipoRedSocial: string;
}