import {IsAlpha, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength} from "class-validator";

export class LicorCreateDto{
    @IsEmpty()
    idLicor?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreLicor?: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    detallesLicor?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    cantidadLicor?: number;

}