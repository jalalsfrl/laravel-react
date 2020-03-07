import React from 'react';

export const ShowoffAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/showoff',
            component: React.lazy(() => import('./ShowoffApp'))
        }
    ]
};
