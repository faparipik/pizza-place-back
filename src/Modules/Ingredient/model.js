import mongoose from 'mongoose';

const { Schema } = mongoose;

const ingredients = new Schema({
  name: String,
  price: Number,
  time: Number,
});

const Ingredients = mongoose.model('Ingredients', ingredients);

export default Ingredients;
