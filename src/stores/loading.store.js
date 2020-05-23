// Libraries
import { writable, derived } from 'svelte/store';

// Stores
import { username } from './user.store';

export const loadingUser = writable(null);
