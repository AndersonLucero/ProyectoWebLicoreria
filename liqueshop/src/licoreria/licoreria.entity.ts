import {Column, PrimaryGeneratedColumn} from "typeorm";

export class LicoreriaEntity {
    @PrimaryGeneratedColumn({
        name: 'idLicoreria'
    })
    idLicoreria: number

    @Column({
        name: 'nombreLicoreria',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreLicoreria: string

    @Column({
        name: 'rucLicoreria',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    rucLicoreria: string

    @Column({
        name: 'direccionLicoreria',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    direccionLicoreria: string

    @Column({
        name: 'fotoLicoreria',
        type: 'varchar',
        length: '200',
        nullable: false
    })
    fotoLicoreria: string

    


}