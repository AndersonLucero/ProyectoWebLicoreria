import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioModule} from "./usuario/usuario.module";
import {PedidoModule} from "./pedido/pedido.module";
import {LicorModule} from "./licor/licor.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {PedidoEntity} from "./pedido/pedido.entity";
import {LicorEntity} from "./licor/licor.entity";
import {DetallepedidoEntity} from "./detallePedido/detallepedido.entity";
import {DetallepedidoModule} from "./detallePedido/detallepedido.module";
import {LicorController} from "./licor/licor.controller";


@Module({
  imports: [
      UsuarioModule,
      PedidoModule,
      LicorModule,
      DetallepedidoModule,

    TypeOrmModule

        .forRoot({
          name: 'default', //nombre de conexion
          type: 'mysql',  //mysql postgres
          host: 'localhost', //id
          port: 3306, //puerto
          username: 'root', //usuario
          password: 'anderson', //password
          database: 'proyecto', //base de datos
          entities: [ //todas las entidades
              UsuarioEntity,
              PedidoEntity,
              LicorEntity,
              DetallepedidoEntity
          ],
          synchronize: true, //actualiza el esquema de la base de datos
          dropSchema: false //elimina datos y el esquema de base de datos
        }),



  ],
  controllers: [
      AppController
  ],
  providers: [AppService],
})
export class AppModule {}
