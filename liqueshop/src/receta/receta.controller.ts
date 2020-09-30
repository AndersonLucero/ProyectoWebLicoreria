import {RecetaService} from "./receta.service";

export class RecetaController{
    constructor(
        private readonly _RecetaService: RecetaService
    ) {
    }
}