import {IngredienteService} from "./ingrediente.service";


export class IngredienteController{
    constructor(
        private readonly _IngredienteService: IngredienteService
    ) {
    }
}