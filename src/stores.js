import { writable } from "svelte/store";

export const userStore = writable(undefined);

export const companyStore = writable([])

export const documentStore = writable([])

export const contractStore = writable([])

export const signataireStore = writable([])

export const notificationStore = writable([])