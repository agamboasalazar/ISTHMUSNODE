import {Schema, model, Document} from 'mongoose';

const HospitalSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    numeroPacientesActivos:{
        type: Number,
        required: true
    } ,
    cantidadMaximaPacientes:{
        type: Number,
        required: true
    } ,
    cantidadPersonal:{
        type: Number,
        required: true
    } ,
    dateInsert: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {
        type: Date
    }
})

interface IHospitalSchema extends Document {
    name: string;
    numeroPacientesActivos:number;
    cantidadMaximaPacientes:number;
    cantidadPersonal:number;
    dateInsert: Date;
    dateUpdate: Date;
}

export default model<IHospitalSchema>('Hospital', HospitalSchema);