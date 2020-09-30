import {UsuarioService} from "./usuario.service";

export class UsuarioController{


    constructor(
        private readonly _UsuarioService: UsuarioService
    ) {
    }


}