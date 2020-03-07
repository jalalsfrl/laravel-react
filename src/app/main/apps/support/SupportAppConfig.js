import React from 'react';

export const SupportAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/support',
            component: React.lazy(() => import('./SupportApp'))
        }
    ]
};
