import { atom } from 'jotai';

import { VCType } from '@/domain';
import { InitVCList } from '@/fixtures';

export const serchFieldAtom = atom('');
// TODO: Remove this fixture
export const vcListAtom = atom<VCType[]>(InitVCList);
export const vcListFilteredAtom = atom<VCType[]>(InitVCList);
export const selectedVcAtom = atom<VCType | null>(null);
