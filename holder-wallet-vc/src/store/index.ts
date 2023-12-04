import { atom } from 'jotai';

import { VCType } from '@/domain';
import { InitVCList } from '@/fixtures';

export const serchFieldAtom = atom('');
// TODO: Remove this fixture
export const vcListAtom = atom<
  {
    uid: string;
    encrypted_uid: string;
    vc: VCType;
  }[]
>(InitVCList);
export const vcListFilteredAtom = atom<
  {
    uid: string;
    encrypted_uid: string;
    vc: VCType;
  }[]
>(InitVCList);
export const selectedVcAtom = atom<{
  uid: string;
  encrypted_uid: string;
  vc: VCType;
} | null>(null);
