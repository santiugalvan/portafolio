import { createBrowserRouter } from 'react-router-dom';
import { PageMain } from '../pages/PageMain';
import { PageEducation } from '../pages/PageEducation';
import { PageProjects } from '../pages/PageProjects';
import { PageExperience } from '../pages/PageExperience';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageMain />,
    },
    {
        path: '/education',
        element: <PageEducation />,
    },
    {
        path: '/experience',
        element: <PageExperience />,
    },
    {
        path: '/projects',
        element: <PageProjects />,
    },
]);