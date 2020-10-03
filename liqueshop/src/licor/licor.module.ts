import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LicorController} from "./licor.controller";
import {LicorEntity} from "./licor.entity";
import {LicorService} from "./licor.service";

@Module({
    exports:[LicorService],
    imports: [

        TypeOrmModule.forFeature(
            [
                LicorEntity
            ],
            'default'
        )
    ],
    controllers: [
        LicorController
    ],
    providers: [
        LicorService
    ],
})

export class LicorModule{

}