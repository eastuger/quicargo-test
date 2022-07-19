import {Optional} from "sequelize";
import {BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table, UpdatedAt} from "sequelize-typescript";
import {Carrier} from "./Carrier";

type TruckAttributes = {
    id: number
    lng: number
    lat: number
    licensePlate: string
    maxWeight: number
    currentWeight: number
    maxPallets: number
    currentPallets: number
}

type TruckCreationAttributes = Optional<TruckAttributes, 'id'>;

@Table({tableName: 'truck'})
export class Truck extends Model<TruckAttributes, TruckCreationAttributes> {
    @Column(DataType.DOUBLE)
    lng: number

    @Column(DataType.DOUBLE)
    lat: number

    @Column(DataType.STRING)
    license_plate: string

    @Column(DataType.DOUBLE)
    max_weight: number

    @Column(DataType.DOUBLE)
    current_weight: number

    @Column(DataType.INTEGER)
    max_pallets: number

    @Column(DataType.INTEGER)
    current_pallets: number

    @CreatedAt
    created_at: Date

    @UpdatedAt
    updated_at: Date

    @ForeignKey(() => Carrier)
    @Column(DataType.INTEGER)
    carrier_id: number

    @BelongsTo(() => Carrier)
    carrier: Carrier
}