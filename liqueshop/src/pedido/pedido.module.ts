import {Module} from "@nestjs/common";
import {PedidoService} from "./pedido.service";
import {PedidoController} from "./pedido.controller";
import {PedidoEntity} from "./pedido.entity";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PedidoEntity
            ],
            'default'
        )
    ],
    controllers: [
        PedidoController
    ],
    providers: [
        PedidoService
    ],
})

export class PedidoModule{

}