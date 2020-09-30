import {Module} from "@nestjs/common";
import {RecetaService} from "./receta.service";
import {RecetaController} from "./receta.controller";
import {RecetaEntity} from "./receta.entity";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                RecetaEntity
            ],
            'default'
        )
    ],
    controllers: [
        RecetaController
    ],
    providers: [
        RecetaService
    ],
})
export class RecetaModule{

}