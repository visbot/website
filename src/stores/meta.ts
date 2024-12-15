import { writable } from 'svelte/store';
import metaData from '$data/meta.jsonc';

const meta = writable(metaData);

export { meta };
