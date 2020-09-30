import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {LicorEntity} from "./licor.entity";

export class LicorService{
    constructor(
        @InjectRepository(LicorEntity)
        private repositorio: Repository<LicorEntity>
    ) {
    }

    crearUsuario(usuario: LicorEntity){

    }


    editarUsuario(usuario: LicorEntity){

    }

    eliminarUsuario(id: number){

    }
}