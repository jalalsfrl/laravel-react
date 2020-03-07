import React from 'react';

export const menuAuthAppConfig = {
    settings: {
        layout: {
            config: {
            }
        }
    },
    routes  : [
        {
            path     : '/edit/menu',
            component: React.lazy(() => import('./menuAuthApp'))
        }
    ]
};
