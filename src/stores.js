import { get, writable } from "svelte/store";

export const userStore = writable({
  name: 'Guillaume'
});

export const companyStore = writable([
  {
    id: 1,
    name: 'Qualycloud'
  }, {
    id: 2,
    name: 'My Happy Agency'
  }
])

export const documentStore = writable({})

export const contractStore = writable({})

export const signataireStore = writable({})