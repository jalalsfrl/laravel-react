import React from 'react';

export const authAppConfig = {
    settings: {
        layout: {
            config: {
            }
        }
    },
    routes  : [
        {
            path     : '/edit/auth',
            component: React.lazy(() => import('./AuthApp'))
        }
    ]
};
