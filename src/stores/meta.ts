import { writable } from 'svelte/store';
import metaData from '../meta.json';

const meta = writable(metaData);

export {
  meta
};
