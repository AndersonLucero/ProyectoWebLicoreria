import {Column, PrimaryGeneratedColumn} from "typeorm";

export class ClienteEntity{
    @PrimaryGeneratedColumn({
        name: 'idCliente'
    })
    idCliente: number

    @Column({
        name: 'nombreCliente',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreCliente: string

    @Column({
        name: 'correoUsuario',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    correoUsuario: string

    @Column({
        name: 'telefonoCliente',
        type: 'varchar',
        length: '50',
        nullable: true
    })
    telefonoCliente?: string
}