import { LayoutDefault } from '../layouts';
import { Home, Profile } from '../pages';

export const privateRoutes = [
    { path: '/', page: Home, layout: LayoutDefault },
    { path: '/profile', page: Profile },
];
