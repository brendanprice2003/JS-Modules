import {insertSeperators} from './src/InsertSeperators.js';
import {parseDate} from './src/ParseDate.js';

const log = console.log.bind();

var datetime = new Date();

log(parseDate(datetime, 'commonjs', 'D M Y'));
// log(new Date().toISOString().slice(0, 19).replace('T', ' '))