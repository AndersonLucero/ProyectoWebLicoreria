import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {PedidoEntity} from "../pedido/pedido.entity";
import {LicorEntity} from "../licor/licor.entity";

@Entity('detallepedido')

export class DetallepedidoEntity{


    @PrimaryGeneratedColumn({
        name: 'idDetallePedido'
    })
    idDetallePedido: number


    @Column({
        name: 'cantidadLicor',
        type: 'int',
        nullable: false
    })
    cantidadLicor: number;

    @Column({
        name: 'precioSubTotal',
        type: 'float',
        nullable: false
    })
    precioSubTotal: number;

    @ManyToOne(
        type => PedidoEntity,
        pedido=> pedido.detallepedido
    )
    @JoinColumn({name: 'idPedido'})
    pedido: PedidoEntity


    @ManyToOne(
        type => LicorEntity,
        licor=> licor.detallepedido
    )
    @JoinColumn({name: 'idLicor'})
    licor: LicorEntity

}