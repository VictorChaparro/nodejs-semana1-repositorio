//console.log("Hola mundo desde nodejs")

const express = require('express');
const mongoose = require('mongoose');
const POLaboralSchema = require("./modelos/PortalOfertaLaboral.js");
const app = express();

//Conexión a base de datos
mongoose.connect("mongodb+srv://victorcluster:victormintic2022@clustervictor.f88oy.mongodb.net/NodeJSBD?retryWrites=true&w=majority");
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})
router.get('/portalofertalaboral', (req, res) => {
    POLaboralSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las Postulaciones Laborales");
        }else{
            res.send(datos);
        }
    })
});
router.post('/portalofertalaboral', (req, res) => {
    let nuevaPersona = new POLaboralSchema({
        idPersona: req.body.id,
        tipodocumentoPersona: req.body.tipodocumento,
        documentoPersona: req.body.documento,
        nombresPersona: req.body.nombres,
        apellidosPersona: req.body.apellidos,
        direccionPersona: req.body.direccion,
        correoPersona: req.body.correo,
        tfijoPersona: req.body.tfijo,
        tcelularPersona: req.body.tcelular,
        enlacewebPersona: req.body.enlaceweb,
        descripcionPersona: req.body.descripcion
    });

    nuevaPersona.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Postulación Laboral almacenada correctamente.")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});