import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    NotFoundException,
    Post,
    Query,
    Res,
    Session
} from "@nestjs/common";
import {LicorService} from "../licor/licor.service";
import {DetallepedidoService} from "./detallepedido.service";
import {LicorEntity} from "../licor/licor.entity";
import {DetallepedidoEntity} from "./detallepedido.entity";
import {PedidoCreateDto} from "../pedido/dto/pedido.create.dto";
import {validate, ValidationError} from "class-validator";
import {PedidoService} from "../pedido/pedido.service";

export let carrito = new Array<DetallepedidoEntity>();


@Controller('detallepedido')

export class DetallepedidoController{
    constructor(
        private readonly _DetallePedidoService: DetallepedidoService,
        private readonly _LicorService: LicorService,

    ) {

    }

    @Get('vista/carrito')
    async inicio(
        @Res() res,
        @Query() parametrosConsulta
    ) {
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._DetallePedidoService.buscarDetallePedido(parametrosConsulta.busqueda);
        }catch (error) {
            throw  new InternalServerErrorException('Error encontrando licores')
        }
        if(resultadoEncontrado) {
            res.render(
                'pedido/crearPedido',
                {
                    arregloPedido: resultadoEncontrado,
                    parametrosConsulta: parametrosConsulta
                }
            )//Nombre de la vista (archivo)
        }else{
            throw new NotFoundException('No se encontraron licores')
        }
    }


    @Post('agregarProducto')
    async agregarProducto(
        @Session() session,
        @Body() parametrosCuerpo,
        @Res() res
    ){
        let licor
        let detalle = new DetallepedidoEntity()

        try{
            licor = await this._LicorService.buscarUnLicor(Number(parametrosCuerpo.idLicor))
        }catch (e){
            throw  new InternalServerErrorException('Error encontrando licores')
        }

        if(licor){
            let cantidad = Number(parametrosCuerpo.cantidad)
            let subtotal = licor.precioLicor*cantidad
            detalle.licor = licor
            detalle.cantidadLicor = cantidad
            detalle.precioSubTotal = subtotal
            console.log(detalle.cantidadLicor)
            carrito.push(detalle)
            console.log(carrito)

            res.redirect('../licor/vista/inicio')
        }else{
            throw new NotFoundException('No se encontraron licores')
        }
    }
}