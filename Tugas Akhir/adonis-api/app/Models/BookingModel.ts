import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User';

export default class BookingModel extends BaseModel {
  public static table = "bookings";

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public field_id: number

  @column.dateTime()
  public play_date_start: DateTime

  @column.dateTime()
  public play_date_end: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User, {
    foreignKey: "id"
  })
  public bookings: HasMany<typeof User>
}
