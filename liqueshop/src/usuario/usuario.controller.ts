import {UsuarioService} from "./usuario.service";
import {Body, Controller, Get, InternalServerErrorException, Post, Query, Req, Res, Session} from "@nestjs/common";
import {DetallepedidoEntity} from "../detallePedido/detallepedido.entity";
import {UsuarioUpdateDto} from "./dto/usuario.update.dto";
import {validate, ValidationError} from "class-validator";
import {UsuarioCreateDto} from "./dto/usuario.create.dto";
@Controller('usuario')

export class UsuarioController{


    constructor(
        private readonly _UsuarioService: UsuarioService
    ) {
    }



    @Get('/crearUsuario')
    vistaCrear(
        @Res() res,
        @Query() parametrosConsulta,
        @Session() session,
    ){
        res.render(
            'usuario/crearUsuario',
            {

                nombreUsuario: parametrosConsulta.nombreUsuario,
                correoUsuario: parametrosConsulta.correoUsuario,
                telefonoUsuario: parametrosConsulta.telefonoUsuario,
                passwordUsuario: parametrosConsulta.passwordUsuario,


            }
        )
    }

    @Post("/crearUsuarioDesdeVista")
    async crearDesdeVista(
        @Body() parametrosCuerpo,
        @Res() res
    ) {
        let usuario = new UsuarioCreateDto();


        usuario.nombreUsuario = parametrosCuerpo.nombreUsuario
        usuario.correoUsuario = parametrosCuerpo.correoUsuario
        usuario.telefonoUsuario = parametrosCuerpo.telefonoUsuario
        usuario.passwordUsuario = parametrosCuerpo.passwordUsuario


        let usuarioConsulta = `&nombreUsuario=${parametrosCuerpo.nombreUsuario}&correoUsuario=${parametrosCuerpo.correoUsuario}&telefonoUsuario=${parametrosCuerpo.telefonoUsuario}&passwordUsuario=${parametrosCuerpo.passwordUsuario}`
        let errores: ValidationError[]
        try{

            errores = await validate(usuario);

            const mensaje = '';
        }catch (e) {
            console.error(e)
            return res.redirect('crear?error=Error validadndo datos' + usuarioConsulta);
        }

        if (errores.length > 0) {
            console.error('Error', errores);
            return res.redirect('crear?error=Error en los datos' + usuarioConsulta);
        }else{
            let respuestaCreacionUsuario
            try{
                respuestaCreacionUsuario = await this._UsuarioService.crearUsuario(parametrosCuerpo)
            } catch (error) {
                console.log(error);
                return res.redirect('crear?mensaje=Error creando usuario' + usuarioConsulta);
            }
            if(respuestaCreacionUsuario){
                return res.redirect('../licor/vista/inicio')
            } else {
                return res.redirect('../usuario/crearUsuario');
            }
        }
    }



    @Get('vista/login')
    login(
        @Res() response,
        @Query() query
    ) {
        return response.render('login/login',{error:query.error})
    }

    @Post('login')
    async loginPost(
        @Body() parametrosConsulta,
        @Res() response,
        @Session() session
    ) {

        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._UsuarioService.buscarEmail(parametrosConsulta.usuario);
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException('Error encontrando usuario')
        }


        // validamos datos
        const usuario = parametrosConsulta.usuario;
        const password = parametrosConsulta.password;


        if(resultadoEncontrado){
            console.log(resultadoEncontrado[0].correoUsuario)
            if (usuario == resultadoEncontrado[0].correoUsuario && password == resultadoEncontrado[0].passwordUsuario) {
                console.log(resultadoEncontrado[0].correoUsuario)
                session.usuario = resultadoEncontrado[0]

                return response.redirect('/licor/vista/inicio');
            }
        }else{
            return response.redirect('usuario/vista/login?error=datos_incorrectos')
        }
    }


    @Post('logout')
    logout(
        @Session() session,
        @Res() response,
        @Req() request
    ) {
        session.usuario = undefined;
        request.session.destroy();
        return response.redirect('../licor/vista/inicio')
    }

}