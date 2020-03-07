import React from 'react';

export const EditDashAppConfig = {
    settings: {
        layout: {
            config: {
            }
        }
    },
    routes  : [
        {
            path     : '/edit/dashboard',
            component: React.lazy(() => import('./EditDashApp'))
        }
    ]
};
