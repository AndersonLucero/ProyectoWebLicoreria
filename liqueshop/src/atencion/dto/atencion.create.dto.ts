import {IsAlpha, IsDateString, IsEmpty, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class AtencionCreateDto{

    @IsEmpty()
    idAtencion?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    detalleAtencion?: string;

    @IsOptional()
    @IsDateString()
    fechaAtencion?:string;

    @IsOptional()
    @IsDateString()
    fechaHoraAtencion?:string;

}