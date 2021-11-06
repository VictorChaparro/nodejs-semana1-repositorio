const mongoose = require('mongoose');

let POLaboralSchema = new mongoose.Schema({
    idPersona: Number,
    tipodocumentoPersona: String,
    documentoPersona: String,
    nombresPersona: String,
    apellidosPersona: String,
    direccionPersona: String,
    correoPersona: String,
    tfijoPersona: String,
    tcelularPersona: String,
    enlacewebPersona: String,
    descripcionPersona: String
});

module.exports = mongoose.model('portalofertalaboral', POLaboralSchema, 'PartalOfertasLaborales');