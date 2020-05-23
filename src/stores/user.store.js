// Libraries
import { writable } from 'svelte/store';

export const username = writable(null);
export const avatar = writable(null);
export const joinDate = writable(null);
export const authToken = writable(null);

export default {
  username,
  avatar,
  joinDate,
  authToken,
};
