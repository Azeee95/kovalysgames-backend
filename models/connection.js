require ('dotenv').config();

const mongoose = require('mongoose');

// const connectionString = process.env.connectionString;


const connectionString = 'mongodb+srv://kodzo:testtest@kodzo.u7u0jcl.mongodb.net/kovalysgames'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));