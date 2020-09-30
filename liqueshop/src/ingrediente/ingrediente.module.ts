import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {IngredienteEntity} from "./ingrediente.entity";
import {IngredienteController} from "./ingrediente.controller";
import {IngredienteService} from "./ingrediente.service";


@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                IngredienteEntity
            ],
            'default'
        )
    ],
    controllers: [
        IngredienteController
    ],
    providers: [
        IngredienteService
    ],
})
export class IngredienteModule{

}