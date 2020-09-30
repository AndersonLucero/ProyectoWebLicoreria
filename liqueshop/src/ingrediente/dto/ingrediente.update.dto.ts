import {IsAlpha, IsEmpty, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class IngredienteUpdateDto{
    @IsNotEmpty()
    idIngrediente?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreIngrediente?: string;
}