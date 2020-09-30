import {UsuarioEntity} from "./usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

export class UsuarioService{

    constructor(
        @InjectRepository(UsuarioEntity)
        private repositorio: Repository<UsuarioEntity>
    ) {
    }

    crearUsuario(usuario: UsuarioEntity){

    }


    editarUsuario(usuario: UsuarioEntity){

    }

    eliminarUsuario(id: number){

    }

}