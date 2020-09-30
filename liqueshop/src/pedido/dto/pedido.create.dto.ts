import {IsAlpha, IsDateString, IsEmpty, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class PedidoCreateDto{
    @IsEmpty()
    idPedido?:number;

    @IsOptional()
    @IsDateString()
    fechaPedido?:string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    detallePedido?: string;
}