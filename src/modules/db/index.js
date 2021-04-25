const mongoose = require('mongoose');

// const URL = process.env.URL || 'mongodb://localhost/order_book';
const URL =
  'mongodb+srv://venus:otk3ovAPPatgl9MH@hrt.t5v6l.mongodb.net/hrt?retryWrites=true&w=majority';

(async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error');
  }
})();
