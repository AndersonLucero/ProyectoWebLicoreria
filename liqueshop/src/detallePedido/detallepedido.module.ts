import {Module} from "@nestjs/common";

import {TypeOrmModule} from "@nestjs/typeorm";
import {DetallepedidoEntity} from "./detallepedido.entity";
import {PedidoController} from "../pedido/pedido.controller";
import {DetallepedidoService} from "./detallepedido.service";
import {DetallepedidoController} from "./detallepedido.controller";
import {LicorModule} from "../licor/licor.module";
import {LicorService} from "../licor/licor.service";
import {LicorEntity} from "../licor/licor.entity";


@Module({

    exports: [
      DetallepedidoService
    ],

    imports: [

        LicorModule,
        TypeOrmModule.forFeature(
            [
                DetallepedidoEntity
            ],
            'default'
        )
    ],
    controllers: [
        DetallepedidoController
    ],
    providers: [
        DetallepedidoService
    ],
})

export class DetallepedidoModule{

}