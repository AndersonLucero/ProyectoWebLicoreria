import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import {LicorEntity} from "./licor.entity";
import {Injectable} from "@nestjs/common";

@Injectable()

export class LicorService{
    constructor(
        @InjectRepository(LicorEntity)
        private repositorio: Repository<LicorEntity>
    ) {
    }


    editarLicor(licor: LicorEntity){

    }

    eliminarLicor(id: number){

    }

    buscarUnLicor(id: number){
        return this.repositorio.findOne(id)
    }

    buscarTodosLicores(textoConsulta?: String){
        if (textoConsulta !== undefined) {
            const consulta: FindManyOptions<LicorEntity> = {
                where: [
                    {
                        nombreLicor: Like(`%${textoConsulta}%`)
                    },
                    {
                        detalleLicor: Like(`%${textoConsulta}%`)
                    },
                    {
                        precioLicor: Like(`%${textoConsulta}%`)
                    }
                ]
            }
            return this.repositorio.find(consulta);
        } else{
            return this.repositorio.find();
        }
    }
}