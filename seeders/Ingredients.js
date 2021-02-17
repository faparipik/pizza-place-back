import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import config from '../src/config/config.js';
import Ingredients from '../src/Modules/Ingredient/model.js';

const dirname = path.resolve();
const importedIngredients = fs.readFileSync(`${dirname}/ingredients.json`);
const importedIngredientsParsed = JSON.parse(importedIngredients).map((i) => i);

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  Ingredients.deleteMany({}, () => {
    // eslint-disable-next-line no-console
    console.log('database cleared');
  });

  Ingredients.create(importedIngredientsParsed, () => {
    mongoose.connection.close();
    process.exit(1);
  });
});
