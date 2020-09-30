import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ClienteEntity} from "./cliente.entity";

export class ClienteService{
    constructor(
        @InjectRepository(ClienteEntity)
        private repositorio: Repository<ClienteEntity>
    ) {
    }

    crearUsuario(usuario: ClienteEntity){

    }


    editarUsuario(usuario: ClienteEntity){

    }

    eliminarUsuario(id: number){

    }
}