import React from 'react';

export const DashboardAppConfig = {
    settings: {
        layout: {
            config: {
            }
        }
    },
    routes  : [
        {
            path     : '/apps/dashboard',
            component: React.lazy(() => import('./DashboardApp'))
        }
    ]
};
