import {IsAlpha, IsEmpty, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class IngredienteCreateDto{
    @IsEmpty()
    idIngrediente?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreIngrediente?: string;
}