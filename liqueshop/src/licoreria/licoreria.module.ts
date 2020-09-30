import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LicoreriaController} from "./licoreria.controller";
import {LicoreriaService} from "./licoreria.service";
import {LicoreriaEntity} from "./licoreria.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                LicoreriaEntity
            ],
            'default'
        )
    ],
    controllers: [
        LicoreriaController
    ],
    providers: [
        LicoreriaService
    ],
})
export class LicoreriaModule{

}