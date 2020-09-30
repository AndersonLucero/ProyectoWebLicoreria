import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('ingrediente')

export class IngredienteEntity{
    @PrimaryGeneratedColumn({
        name: 'idIngrediente'
    })
    idIngrediente: number

    @Column({
        name: 'nombreIngrediente',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreIngrediente: string

}