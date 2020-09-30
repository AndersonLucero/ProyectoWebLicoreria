import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
        name: 'detallesLicor',
        type: 'varchar',
        length: '100',
        nullable: false
    })
    detallesLicor: string

    @Column({
        name: 'cantidadLicor',
        type: 'varchar',
        nullable: false
    })
    cantidadLicor: number

}