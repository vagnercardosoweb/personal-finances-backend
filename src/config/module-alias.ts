import { addAliases } from 'module-alias';
import { resolve } from 'path';

addAliases({
  '@src': resolve(__dirname, '..'),
});
