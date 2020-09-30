import {ClienteService} from "./cliente.service";

export class ClienteController{
    constructor(
        private readonly _ClienteService: ClienteService
    ) {
    }
}