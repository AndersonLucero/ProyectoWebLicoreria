import {PedidoService} from "./pedido.service";

export class PedidoController{
    constructor(
        private readonly _PedidoService: PedidoService
    ) {
    }

}