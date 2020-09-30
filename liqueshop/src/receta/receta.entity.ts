import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('receta')

export class RecetaEntity{

    @PrimaryGeneratedColumn({
        name: 'idReceta'
    })
    idReceta: number

    @Column({
        name: 'nombreReceta',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreReceta: string

    @Column({
        name: 'detalleReceta',
        type: 'varchar',
        length: '200',
        nullable: false
    })
    detalleReceta: string

}