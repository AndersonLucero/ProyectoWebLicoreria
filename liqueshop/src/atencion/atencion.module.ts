import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AtencionService} from "./atencion.service";
import {AtencionController} from "./atencion.controller";
import {AtencionEntity} from "./atencion.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                AtencionEntity
            ],
            'default'
        )
    ],
    controllers: [
        AtencionController
    ],
    providers: [
        AtencionService
    ],
})

export class AtencionModule{

}