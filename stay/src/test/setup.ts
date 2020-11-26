import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongo: any;

// runs before all tests
beforeAll(async () => {
  mongo = new MongoMemoryServer();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// runs before every test
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

// runs after all tests
afterAll(async () => {
  await mongo.stop();
});
