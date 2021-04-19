import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import VenuesModel from './VenuesModel';
// import { BelongsTo } from '@ioc:Adonis/Lucid/Relations';

export default class FieldsModel extends BaseModel {
  public static table = "fields";

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public venue_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => VenuesModel, {
    foreignKey: 'venue_id'
  })
  public venues: BelongsTo<typeof VenuesModel>
}
