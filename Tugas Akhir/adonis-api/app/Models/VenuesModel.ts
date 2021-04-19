import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import FieldsModel from './FieldsModel';

export default class VenuesModel extends BaseModel {
  public static table = "venues";

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column()
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => FieldsModel, {
    foreignKey: "venue_id"
  })
  public fields: HasMany<typeof FieldsModel>
}
