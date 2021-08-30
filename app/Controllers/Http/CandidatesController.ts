import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Candidate from 'App/Models/Candidate'

export default class CandidatesController {

  public async index({ response }: HttpContextContract) {
    const candidates = await Candidate.query()
    return response.status(200).json({ candidates: candidates })
  }

  public async store({ response, request }: HttpContextContract) {
    const bodyRequest = request.only([
      'cpf',
      'name',
      'register',
      'intended_position',
      'maritial_status',
      'birthday',
      'gender',
      'cep',
      'public_place',
      'number',
      'district',
      'city',
      'state',
      'landline_one',
      'landline_two',
      'cellphone',
      'contact',
      'email',
      'occupation',
      'has_vehicle',
      'has_license'
    ])
    const candidate = await Candidate.create({ ...bodyRequest })
    return response.status(200).json({
      resposta: 'SUCCESS!',
      id: candidate.id ,
      cpf: candidate.cpf,
      name: candidate.name,
      register: candidate.register,
      intended_position: candidate.intended_position,
      maritial_status: candidate.maritial_status,
      birthday: candidate.birthday,
      gender: candidate.gender,
      cep: candidate.cep,
      public_place: candidate.public_place,
      number: candidate.number,
      district: candidate.district,
      city: candidate.city,
      state: candidate.state,
      landline_one: candidate.landline_one,
      landline_two: candidate.landline_two,
      cellphone: candidate.cellphone,
      contact: candidate.contact,
      email: candidate.email,
      occupation: candidate.occupation,
      has_vehicle: candidate.has_vehicle,
      has_license: candidate.has_license
    })
  }

  public async update({ response, request, params }: HttpContextContract) {
    const candidateData = request.only([
        'name',
        'birthday',
        'cpf',
        'cep',
        'public_place',
        'number',
        'district',
        'city',
        'state',
        'phone',
        'email',
        'occupation'
    ])
  
    await Candidate.query()
      .where('cpf', candidateData.cpf)
      .update({ ...candidateData })

    const newCandidate = await Candidate.query().where('id', params.id)

    return response.status(200).json({ resposta: 'sucess', newCandidate: newCandidate })
  }

  public async destroy({ response, params }: HttpContextContract) {
      console.log("--->", params.id)
    await Candidate.query().where('id', params.id).delete()

    return response.status(200).json({ code: 200, status: 'Success!' })
  }
}
