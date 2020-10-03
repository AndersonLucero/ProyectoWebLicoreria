import {UsuarioEntity} from "./usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Repository} from "typeorm";
import {Injectable} from "@nestjs/common";

@Injectable()

export class UsuarioService{

    constructor(
        @InjectRepository(UsuarioEntity)
        private repositorio: Repository<UsuarioEntity>
    ) {
    }

    crearUsuario(usuario: UsuarioEntity){

        return this.repositorio.save(usuario)

    }


    editarUsuario(usuario: UsuarioEntity){

    }

    eliminarUsuario(id: number){

    }

    buscarEmail(email: string){
        const consulta: FindManyOptions<UsuarioEntity> = {
            relations:['pedidos'],
            where: [
                {
                    correoUsuario: email
                }
            ]
        }
        return this.repositorio.find(consulta);
    }

}