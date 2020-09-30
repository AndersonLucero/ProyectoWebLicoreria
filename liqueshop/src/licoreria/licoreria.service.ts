import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {LicoreriaEntity} from "./licoreria.entity";

export class LicoreriaService{
    constructor(
        @InjectRepository(LicoreriaEntity)
        private repositorio: Repository<LicoreriaEntity>
    ) {
    }

    crearLicoreria(licoreria: LicoreriaEntity){

    }


    editarLicoreria(licoreria: LicoreriaEntity){

    }

    eliminarLicoreria(id: number){

    }
}