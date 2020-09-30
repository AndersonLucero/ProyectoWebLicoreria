import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
        name: 'detallePedido',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    detallePedido: string;

}