import React from 'react';

export const PackagesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/packages',
            component: React.lazy(() => import('./PackagesApp'))
        }
    ]
};
