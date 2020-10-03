import {Module} from "@nestjs/common";
import {PedidoService} from "./pedido.service";
import {PedidoController} from "./pedido.controller";
import {PedidoEntity} from "./pedido.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioModule} from "../usuario/usuario.module";
import {DetallepedidoModule} from "../detallePedido/detallepedido.module";


@Module({
    imports: [
        DetallepedidoModule,
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