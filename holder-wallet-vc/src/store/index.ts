import { atom } from 'jotai';

export const serchField = atom('');
export const vcList = atom<any[]>([]);
export const vcListFiltered = atom<any[]>([]);
export const selectedVc = atom<any>(null);
