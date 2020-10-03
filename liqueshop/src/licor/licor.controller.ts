
import {LicorService} from "./licor.service";
import {Controller, Get, InternalServerErrorException, NotFoundException, Query, Res, Session} from "@nestjs/common";


@Controller('licor')


export class LicorController{
    constructor(
        private readonly _LicorService: LicorService
    ) {
    }

    @Get()
    async vistaInicio(
        @Res() res,
        @Query() parametrosConsulta,
        @Session() session,
    ){
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._LicorService.buscarTodosLicores(parametrosConsulta.busqueda);
        } catch (error) {
            throw new InternalServerErrorException('Error encontrando licores')
        }
        if (resultadoEncontrado) {
            res.render(
                'home',
                {
                    //usuario: session.usuario,
                    arregloLicores: resultadoEncontrado,
                    mensaje: parametrosConsulta.mensaje
                });
        } else {
            throw new NotFoundException('No se encontraron Licores')
        }
    }



    @Get('vista/inicio')
    async inicio(
        @Res() res,
        @Query() parametrosConsulta,
        @Session() session
    ) {
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._LicorService.buscarTodosLicores(parametrosConsulta.busqueda);
        }catch (error) {
            throw  new InternalServerErrorException('Error encontrando licores')
        }
        if(resultadoEncontrado) {
            res.render(
                'licor/home',
                {
                    arregloLicores: resultadoEncontrado,
                    parametrosConsulta: parametrosConsulta,
                    usuario: session.usuario,
                }
            )//Nombre de la vista (archivo)
        }else{
            throw new NotFoundException('No se encontraron licores')
        }
    }


}