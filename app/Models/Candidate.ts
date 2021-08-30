import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Candidate extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ isPrimary: false })
  public cpf: string

  @column({ isPrimary: false })
  public name: string

  @column({ isPrimary: false })
  public register: string

  @column({ isPrimary: false })
  public intended_position: string

  @column({ isPrimary: false })
  public maritial_status: string

  @column({ isPrimary: false })
  public birthday: string

  @column({ isPrimary: false })
  public gender: string

  @column({ isPrimary: false })
  public cep: string

  @column({ isPrimary: false })
  public public_place: string

  @column({ isPrimary: false })
  public number: number

  @column({ isPrimary: false })
  public district: string

  @column({ isPrimary: false })
  public city: string

  @column({ isPrimary: false })
  public state: string

  @column({ isPrimary: false })
  public landline_one: string

  @column({ isPrimary: false })
  public landline_two: string

  @column({ isPrimary: false })
  public cellphone: string
  
  @column({ isPrimary: false })
  public contact: string

  @column({ isPrimary: false })
  public email: string

  @column({ isPrimary: false })
  public occupation: string

  @column({ isPrimary: false })
  public has_vehicle: boolean

  @column({ isPrimary: false })
  public has_license: boolean
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
