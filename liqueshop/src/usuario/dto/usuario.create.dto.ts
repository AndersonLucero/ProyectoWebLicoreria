import {IsAlpha, IsAlphanumeric, IsEmpty, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class UsuarioCreateDto{

    @IsEmpty()
    idUsuario?:number;

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    nombreUsuario: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    correoUsuario: string;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    @MaxLength(50)
    telefonoUsuario?: string;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    @MaxLength(50)
    passwordUsuario?: string;


}