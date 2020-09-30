import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PedidoEntity} from "./pedido.entity";

export class PedidoService{
    constructor(
        @InjectRepository(PedidoEntity)
        private repositorio: Repository<PedidoEntity>
    ) {
    }

    crearPedido(usuario: PedidoEntity){

    }


    editarPedido(pedido: PedidoEntity){

    }

    eliminarPedido(id: number){

    }
}