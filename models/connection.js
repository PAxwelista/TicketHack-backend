const mongoose= require('mongoose');
const connectionString='mongodb+srv://Marina:LqwomNRorl4ZIqvL@cluster0.0pwnr.mongodb.net/tickethack';
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
  .catch(error => console.error(error));