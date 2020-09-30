import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario')

export class UsuarioEntity{

    @PrimaryGeneratedColumn({
        name: 'idUsuario'
    })
    idUsuario: number

    @Column({
        name: 'nombreUsuario',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    nombreUsuario: string

    @Column({
        name: 'correoUsuario',
        type: 'varchar',
        length: '50',
        nullable: false
    })
    correoUsuario: string

    @Column({
        name: 'telefonoUsuario',
        type: 'varchar',
        length: '50',
        nullable: true
    })
    telefonoUsuario?: string

}