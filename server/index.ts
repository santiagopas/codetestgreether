import Server from './classes/server';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import userRoutes from './routes/usuario';
import postRoutes from './routes/post';
import Cors from 'cors';

//console.log('comandos tsc -w y nodemon dist/ ')


const server = new Server();

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// FileUpload
server.app.use( fileUpload({ useTempFiles: true }) );

//Configurar CORS
server.app.use( Cors({origin: true, credentials:true}))

// Rutas de la app
server.app.use('/user', userRoutes);
server.app.use('/posts', postRoutes );

// Conectar DB

mongoose.connect('mongodb://localhost:27017/greether'),
  { useNewUrlParser: true, useCreateIndex: true }, (err: any) => {

    if (err) throw err;

    console.log('Base de datos ONLINe');
  }




//Levantar express
server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
})