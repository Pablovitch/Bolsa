import { Component } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router'

@Component({
    templateUrl: '/app/Components/Vacantes/app.LayoutVcts.html'
})
export class LayoutVacanteComponent {
    title = 'app';
    CandidatoId: string;
    constructor(private _Route: ActivatedRoute) {
        this._Route.params.subscribe(params => {
            this.CandidatoId = params['candidatoId'];
        });
    }
    
}
