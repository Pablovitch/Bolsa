"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var DatosDeContacto_component_1 = require("./Components/FormulariosIniciales/DatosDeContacto.component");
var not_found_component_1 = require("./Components/not-found.component");
var appRoutes = [
    //{ path: '', component: DatosDeContactoComponent,  pathMatch: 'full' },
    { path: 'DatosContacto/:userId', component: DatosDeContacto_component_1.DatosDeContactoComponent },
    //{ path: 'FormulariosIniciales', component: DatosDeContactoComponent },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map