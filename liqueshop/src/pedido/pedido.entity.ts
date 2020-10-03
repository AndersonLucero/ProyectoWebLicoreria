import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {DetallepedidoEntity} from "../detallePedido/detallepedido.entity";

@Entity('pedido')

export class PedidoEntity{
    @PrimaryGeneratedColumn({
        name: 'idPedido'
    })
    idPedido: number

    @Column({
        type: 'date',
        name: 'fechaPedido',
        nullable: false
    })
    fechaPedido: string;

    @Column({
        name: 'observacionPedido',
        type: 'varchar',
        length: '50',
        nullable: true
    })
    observacionPedido?: string;

    @Column({
        name: 'precioTotal',
        type: 'float',
        nullable: false
    })
    precioTotal: number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario=> usuario.pedidos
    )
    @JoinColumn({name: 'idUsuario'})
    usuario: UsuarioEntity

    @OneToMany(
        type => DetallepedidoEntity,
        detallepedido=>detallepedido.pedido
    )
    detallepedido:DetallepedidoEntity[]

}