import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import {PedidoEntity} from "./pedido.entity";
import {Injectable} from "@nestjs/common";
import {LicorEntity} from "../licor/licor.entity";

@Injectable()

export class PedidoService{
    constructor(
        @InjectRepository(PedidoEntity)
        private repositorio: Repository<PedidoEntity>
    ) {
    }

    crearPedido(pedido: PedidoEntity){
        return this.repositorio.save(pedido)
    }

    buscarPedido(textoConsulta: String){

        if (textoConsulta !== undefined) {
            const consulta: FindManyOptions<PedidoEntity> = {
                where: [
                    {
                        nombreLicor: Like(`%${textoConsulta}%`)
                    },
                    {
                        detalleLicor: Like(`%${textoConsulta}%`)
                    },
                    {
                        precioLicor: Like(`%${textoConsulta}%`)
                    }
                ]
            }
            return this.repositorio.find(consulta);
        } else{
            return this.repositorio.find();
        }
    }

    eliminarPedido(id: number){

    }
}