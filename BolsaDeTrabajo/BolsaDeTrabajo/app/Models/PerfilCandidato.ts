export class PerfilCandidato
{
    id: string;
    candidatoId: string;
    aboutMeId: string;
    aboutMe: AboutMe[];
    formaciones: Formacion[];
    cursos: Curso[];
    idiomas: PerfilIdioma[];
    conocimientos: ConocimientoOHabilidad[];
    experiencias: ExperienciaProfesional[];
    certificaciones: Certificacion[];
}
export class GradoEstudio
{
    Id: number;
    gradoEstudio: string;
}

export class EstadoEstudio
{
    Id: number;
    estadoEstudio: string;
}
export class DocumentoValidador
{
    id: number;
    documentoValidador: string;
}
export class Carrera {
    Id: string;
    carrera: string;
}

export class InstitucionEducativa
{
    Id: string;
    institucionEducativa: string
}
export class Formacion
{
    id: string;
    perfilCandidatoId: string;
    institucionEducativaId: string;
    institucionEducativa: InstitucionEducativa;
    gradoEstudioId: number;
    gradoEstudio: GradoEstudio;
    estadoEstudioId: number;
    estadoEstudio: EstadoEstudio;
    documentoValidadorId: number;
    documentoValidador: DocumentoValidador;
    carreraId: string;
    carrera: Carrera;
    yearInicioId: number;
    monthInicioId: number;
    yearTerminoId: number;
    monthTerminoId: number;
}

export class Idioma
{
    Id: number;
    idioma: string;
}

export class Nivel {
    Id: number;
    nivel: string;
}

export class PerfilIdioma {
    id: string;
    idiomaId: number;
    idioma: Idioma;
    nivelEscritoId: number;
    nivelEscrito: Nivel;
    nivelHabladoId: number;
    nivelHablado: Nivel;
    perfilCandidatoId: string;
    horas: number;
}

export class PerfilExperiencia {
    Id: string;
    perfilExperiencia: string;
}
export class AreaExperiencia {
    Id: string;
    areaExperiencia: string;
}

export class AreaInteres {
    Id: string;
    areaInteres: string;
}

export class AboutMe {
    id: string;
    perfilCandidatoId: string;
    acercaDeMi: string;
    puestoDeseado: string;
    salarioAceptable: number;
    salarioDeseado: number;
    perfilExperienciaId: string;
    perfilExperiencia: PerfilExperiencia;
    areaExperienciaId: string;
    areaExperiencia: AreaExperiencia;
    areaInteresId: string;
    areaInteres: AreaInteres;
    sitioWeb: string;
}

export class Curso {
    id: string;
    perfilCandidatoId: string;
    curso: string;
    institucionEducativaId: string;
    institucionEducativa: InstitucionEducativa;   
    yearInicioId: number;
    monthInicioId: number;
    yearTerminoId: number;
    monthTerminoId: number;
}

export class ConocimientoOHabilidad {
    id: string;
    conocimiento: string;
    herramienta: string;
    perfilCandidatoId: string;
    institucionEducativaId: string;
    institucionEducativa: InstitucionEducativa;
    nivelId: number;
    nivel: Nivel;    
}

export class ExperienciaProfesional {
    id: string;
    perfilCandidatoId: string;
    empresa: string;
    giroEmpresaId: number;
    cargoAsignado: string;
    areaId: number;
    area: Area;
    yearInicioId: number;
    monthInicioId: number;
    yearTerminoId: number;
    monthTerminoId: number;
    salario: number;
    descripcion: string;
    trabajoActual: boolean;
}

export class Area {
    id: number;
    nombre: string;
}

export class Certificacion {
    id: string;
    perfilCandidatoId: string;
    certificacion: string;
    autoridadEmisora: string;
    licencia: string;
    urlCertificacion: string;
    noVence: boolean;  
    yearInicioId: number;
    monthInicioId: number;
    yearTerminoId: number;
    monthTerminoId: number;
    
 
}