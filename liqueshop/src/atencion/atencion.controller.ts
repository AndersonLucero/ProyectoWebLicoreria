import {AtencionService} from "./atencion.service";


export class AtencionController{
    constructor(
        private readonly _AtencionService: AtencionService
    ) {
    }
}