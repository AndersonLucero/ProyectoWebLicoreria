import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {AtencionEntity} from "./atencion.entity";

export class AtencionService{
    constructor(
        @InjectRepository(AtencionEntity)
        private repositorio: Repository<AtencionEntity>
    ) {
    }

    crearUsuario(usuario: AtencionEntity){

    }


    editarUsuario(usuario: AtencionEntity){

    }

    eliminarUsuario(id: number){

    }
}