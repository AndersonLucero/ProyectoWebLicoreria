import {IsAlpha, IsEmpty, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class RecetaUpdateDto{

    @IsNotEmpty()
    idReceta?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreReceta?: string;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(200)
    detalleReceta?: string;
}