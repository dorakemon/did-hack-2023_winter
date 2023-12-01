import { createBrowserRouter } from 'react-router-dom';

import { CredentialDetail } from '@/features/credential-detail';
import { CredentialPresent } from '@/features/credential-present';
import { Credentials } from '@/features/credentials';
import { Dinger } from '@/features/dinger';
import { InfoForDemo } from '@/pages/InfoForDemo';
import { LandingPage } from '@/pages/LandingPage';
import { OpenerDemo } from '@/pages/OpenerDemo';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Credentials />,
  },
  {
    path: '/detail',
    element: <CredentialDetail />,
  },
  {
    path: '/present',
    element: <CredentialPresent />,
  },
  {
    path: '/dinger',
    element: <Dinger />,
  },
  {
    path: '/info',
    element: <InfoForDemo />,
  },
  {
    path: '/opener',
    element: <OpenerDemo />,
  },
]);
