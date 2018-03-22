using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using BolsaDeTrabajo.Dtos.DatosGenerales;

namespace BolsaDeTrabajo.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<EstadoCivil, EstadoCivilDto>();
            Mapper.CreateMap<EstadoCivilDto, EstadoCivil>();
            Mapper.CreateMap<Genero, GeneroDto>();
            Mapper.CreateMap<GeneroDto, Genero>();
            Mapper.CreateMap<Pais, PaisDto>();
            Mapper.CreateMap<PaisDto, Pais>();
            Mapper.CreateMap<Estado, EstadoDto>();
            Mapper.CreateMap<EstadoDto, Estado>();
            Mapper.CreateMap<Municipio, MunicipioDto>();
            Mapper.CreateMap<MunicipioDto, Municipio>();
            Mapper.CreateMap<Colonia, ColoniaDto>();
            Mapper.CreateMap<ColoniaDto, Colonia>();
            Mapper.CreateMap<Candidato, CandidatoDto>();
            Mapper.CreateMap<CandidatoDto, Candidato>();
            Mapper.CreateMap<Candidato, DatosPersonales>();
            Mapper.CreateMap<DatosPersonales, Candidato>();
            Mapper.CreateMap<DireccionDto, Direccion>();
            Mapper.CreateMap<Direccion, DireccionDto>();
            Mapper.CreateMap<Candidato, IdentificacionesDto>();
            Mapper.CreateMap<Candidato, DatosContactoDto>();
            Mapper.CreateMap<DatosContactoDto, Candidato>();
            Mapper.CreateMap<AboutMe, AboutMeDto>();
            Mapper.CreateMap<AboutMeDto, AboutMe>();
            Mapper.CreateMap<Direccion, DireccionDto>();
            Mapper.CreateMap<DireccionDto, Direccion>();
            Mapper.CreateMap<Candidato, InformacionGeneralDto>();
            Mapper.CreateMap<InformacionGeneralDto, Candidato>();
            Mapper.CreateMap<Candidato, DataValidationDto>();
            Mapper.CreateMap<DataValidationDto, Candidato>();
            Mapper.CreateMap<Requisicion, VacanteDto>();
            Mapper.CreateMap<VacanteDto, Requisicion>();
            Mapper.CreateMap<UserDto, AspNetUsers>();
            Mapper.CreateMap<AspNetUsers, UserDto>();
            Mapper.CreateMap<Requisicion, VacantesDto>();
            Mapper.CreateMap<VacantesDto, Requisicion>();
            //Mapper.CreateMap<PerfilCandidato, PerfilCandidatoDto>();
            //Mapper.CreateMap<PerfilCandidatoDto> DatosContactoDto


        }
    }


}