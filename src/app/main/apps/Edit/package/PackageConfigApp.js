import React from 'react';

export const PackageAppConfig = {
    settings: {
        layout: {
            config: {
            }
        }
    },
    routes  : [
        {
            path     : '/edit/package',
            component: React.lazy(() => import('./PackageApp'))
        }
    ]
};
