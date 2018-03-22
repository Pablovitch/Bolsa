"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiConection = (function () {
    function ApiConection() {
    }
    return ApiConection;
}());
ApiConection.ServiceUrl = 'http://localhost:59984/api/vacantes';
//public static ServiceUrl = 'http://192.168.8.246:'
ApiConection.vacantes = '/api/vacante/';
ApiConection.vacantesdtl = '/api/vacantesdtl';
ApiConection.busqueda = 'vacantes/GetFind';
ApiConection.postulacion = 'vacantes/Postular';
ApiConection.filtrovacantes = 'api/FiltradoVcts';
exports.ApiConection = ApiConection;
//# sourceMappingURL=ApiConections.js.map