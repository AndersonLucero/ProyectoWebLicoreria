import {PedidoService} from "./pedido.service";
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
import {carrito} from "../detallePedido/detallepedido.controller";
import {DetallepedidoService} from "../detallePedido/detallepedido.service";
import {PedidoEntity} from "./pedido.entity";
import {DetallepedidoEntity} from "../detallePedido/detallepedido.entity";
@Controller('pedido')
export class PedidoController{
    constructor(
        private readonly _PedidoService: PedidoService,
        private readonly _DetallePedidoService: DetallepedidoService
    ) {
    }

    @Get('vista/pedido')
    async inicio(
        @Res() res,
        @Query() parametrosConsulta,
        @Session() session
    ) {
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._PedidoService.buscarPedido(parametrosConsulta.busqueda);
        }catch (error) {
            throw  new InternalServerErrorException('Error encontrando pedido')
        }
        if(resultadoEncontrado) {
            res.render(
                'pedido/crearPedido',
                {
                    arregloPedido: resultadoEncontrado,
                    parametrosConsulta: parametrosConsulta,
                    usuario: session.usuario,
                    carrito: carrito
                }
            )//Nombre de la vista (archivo)
        }else{
            throw new NotFoundException('No se encontraro pedido')
        }
    }


    @Post("/hacerPedido")
    async hacerPedido(
        @Body() parametrosCuerpo,
        @Res() res,
        @Session() session
    ) {
        let total = 0
        var today = new Date();
        var dd = String(today. getDate()). padStart(2, '0');
        var mm = String(today. getMonth() + 1). padStart(2, '0');
        var yyyy = today. getFullYear();
        let date = yyyy + '-'+ mm + '-' + dd ;

        carrito.forEach((objeto)=>{
            total += objeto.precioSubTotal
        })

        let pedido = new PedidoEntity()
        pedido.fechaPedido = date
        pedido.usuario = session.usuario
        pedido.precioTotal = total

        let pedidoCreado = await this._PedidoService.crearPedido(pedido)
        if(pedidoCreado){
            carrito.forEach((objeto)=>{
                objeto.pedido = pedidoCreado
                this._DetallePedidoService.crearDetallePedido(objeto)
            })
            carrito.length = 0//new Array<DetallepedidoEntity>();
            return res.redirect('../../licor/vista/inicio?pedido=creado')
        }

    }

    @Get('verPedidos')
    async vistaInicio(
        @Res() res,
        @Query() parametrosConsulta,
        @Session() session,
    ){

        res.render(
            'pedido/verPedidos',
            {
                pedidos:session.usuario.pedidos,
                usuario:session.usuario
            }
        )
    }
}