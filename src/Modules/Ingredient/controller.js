import asyncCatch from '../../utils/AsyncCatch.js';
import { getIngredientsForCheckboxes } from './repository.js';

const getData = asyncCatch(async (req, res) => {
  const data = await getIngredientsForCheckboxes();
  res.send(data);
});

// eslint-disable-next-line import/prefer-default-export
export { getData };
