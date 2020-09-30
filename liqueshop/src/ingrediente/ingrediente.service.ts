import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {IngredienteEntity} from "./ingrediente.entity";

export class IngredienteService{
    constructor(
        @InjectRepository(IngredienteEntity)
        private repositorio: Repository<IngredienteEntity>
    ) {
    }

    crearIngrediente(ingrediente: IngredienteEntity){

    }


    editarIngrediente(ingrediente: IngredienteEntity){

    }

    eliminarIngrediente(id: number){

    }
}