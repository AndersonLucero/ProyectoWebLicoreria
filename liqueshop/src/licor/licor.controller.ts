
import {LicorService} from "./licor.service";

export class LicorController{
    constructor(
        private readonly _LicorService: LicorService
    ) {
    }
}