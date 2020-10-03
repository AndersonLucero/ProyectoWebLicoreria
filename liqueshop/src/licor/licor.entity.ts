import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PedidoEntity} from "../pedido/pedido.entity";
import {DetallepedidoEntity} from "../detallePedido/detallepedido.entity";

@Entity('licor')

export class LicorEntity{
    @PrimaryGeneratedColumn({
        name: 'idLicor'
    })
    idlicor: number

    @Column({
        name: 'nombreLicor',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreLicor: string

    @Column({
        name: 'detalleLicor',
        type: 'varchar',
        length: '100',
        nullable: false
    })
    detalleLicor: string


    @Column({
        name: 'enlaceLicor',
        type: 'varchar',
        length: '200',
        nullable: false
    })
    enlaceLicor: string

    @Column({
        name: 'cantidadLicor',
        type: 'int',
        nullable: false
    })
    cantidadLicor: number

    @Column({
        name: 'precioLicor',
        type: 'float',
        nullable: false
    })
    precioLicor: number

    @OneToMany(
        type => DetallepedidoEntity,
        detallepedido=>detallepedido.licor
    )
    detallepedido:DetallepedidoEntity[]


}