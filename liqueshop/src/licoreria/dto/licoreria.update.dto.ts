import {IsAlpha, IsAlphanumeric, IsEmpty, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class LicoreriaUpdateDto{
    @IsEmpty()
    idLicoreria?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreLicoreria?: string;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    @MaxLength(50)
    rucLicoreria?: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    direccionLicoreria?: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(200)
    fotoLicoreria?: string;

}