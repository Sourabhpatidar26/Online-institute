// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   );
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     console.log('Using existing database connection');
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     console.log('Creating new database connection');

//     const options = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       ssl: true,
//       sslValidate: false, // Set this to true if you have a valid certificate
//       // sslCA: '/path/to/ca-cert.pem', // Uncomment and set the path to your CA certificate
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
//       console.log('Database connected');
//       return mongoose;
//     }).catch((error) => {
//       console.error('Database connection error:', error);
//       throw error;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// mongoose.connection.on('disconnected', () => {
//   console.log('Database disconnected');
// });

// export default connectToDatabase;

import mongoose from "mongoose";

export default async function connectToDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((db) => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error.message);
    });
}
