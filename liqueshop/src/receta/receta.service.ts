import {InjectRepository} from "@nestjs/typeorm";
import {RecetaEntity} from "./receta.entity";
import {Repository} from "typeorm";


export class RecetaService{
    constructor(
        @InjectRepository(RecetaEntity)
        private repositorio: Repository<RecetaEntity>
    ) {
    }

    crearReceta(receta: RecetaEntity){

    }


    editarReceta(receta: RecetaEntity){

    }

    eliminarReceta(id: number){

    }
}