import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PedidoEntity} from "../pedido/pedido.entity";

@Entity('usuario')

export class UsuarioEntity{

    @PrimaryGeneratedColumn({
        name: 'idUsuario'
    })
    idUsuario: number

    @Column({
        name: 'nombreUsuario',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreUsuario: string

    @Column({
        name: 'correoUsuario',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    correoUsuario: string

    @Column({
        name: 'telefonoUsuario',
        type: 'varchar',
        length: '50',
        nullable: true
    })
    telefonoUsuario?: string


    @Column({
        name: 'passwordUsuario',
        type: 'varchar',
        length: '50',
        nullable: true
    })
    passwordUsuario?: string


    @OneToMany(
        type => PedidoEntity,
        pedido=>pedido.usuario
    )
    pedidos:PedidoEntity[]

}