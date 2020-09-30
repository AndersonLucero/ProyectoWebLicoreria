import {Column, PrimaryGeneratedColumn} from "typeorm";

export class AtencionEntity{

    @PrimaryGeneratedColumn({
        name: 'idAtencion'
    })
    idAtencion: number

    @Column({
        name: 'detalleAtencion',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    detalleAtencion: string

    @Column({
        nullable: true,
        type: 'date',
        name: 'fechaAtencion'
    })
    fechaAtencion?: string;

    @Column({
        nullable: true,
        type: 'datetime',
        name: 'fechaHoraAtencion'
    })
    fechaHoraAtencion?: string;



}