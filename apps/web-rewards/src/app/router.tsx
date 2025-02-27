import { lazy } from 'react';

export const HomePage = lazy(() => import('./page'));

export const RankingPage = lazy(() => import('./ranking/page'));

export const UserIdPage = lazy(() => import('./user/id/page'));
