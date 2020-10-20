import {body} from 'express-validator';

const validations = [
    body('name').exists().withMessage('Name is required'),
    body('name').if(body('name').exists()).isLength({min: 8}).withMessage('Min length of name 8 characters'),
    body('numeroPacientesActivos').exists().withMessage('numeroPacientesActivos is required'),
    body('cantidadMaximaPacientes').exists().withMessage('cantidadMaximaPacientes is required'),
    body('cantidadPersonal').exists().withMessage('cantidadPersonal is required'),
];

export default validations;