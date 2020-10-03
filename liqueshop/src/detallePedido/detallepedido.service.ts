import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DetallepedidoEntity} from "./detallepedido.entity";
import {Injectable} from "@nestjs/common";

@Injectable()

export class DetallepedidoService{
    constructor(
        @InjectRepository(DetallepedidoEntity)
        private repositorio: Repository<DetallepedidoEntity>
    ) {
    }

    crearDetallePedido(detallepedido: DetallepedidoEntity){
        return this.repositorio.save(detallepedido);
    }

    buscarDetallePedido(ID: number){

    }
}