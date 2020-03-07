import React from 'react';

export const APIManagerAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/apimanager',
            component: React.lazy(() => import('./APIManagerApp'))
        }
    ]
};
