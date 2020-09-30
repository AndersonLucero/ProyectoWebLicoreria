import {IsAlpha, IsAlphanumeric, IsEmpty, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class ClienteUpdateDto{
    @IsNotEmpty()
    idCliente?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreCliente: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    correoCliente: string;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    @MaxLength(50)
    telefonoCliente?: string;
}