import {Table, Column, Model, HasMany, DataType, CreatedAt, UpdatedAt} from "sequelize-typescript";
import {Optional} from "sequelize";
import {Truck} from "./Truck";

type CarrierAttributes = {
    id: number
    name: string
}

type CarrierCreationAttributes = Optional<CarrierAttributes, 'id'>

@Table({tableName: 'carrier'})
export class Carrier extends Model<CarrierAttributes, CarrierCreationAttributes> {
    @Column(DataType.STRING)
    name: string

    @HasMany(() => Truck)
    trucks: Truck[]

    @CreatedAt
    created_at: Date

    @UpdatedAt
    updated_at: Date
}