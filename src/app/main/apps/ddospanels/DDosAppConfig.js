import React from 'react';

export const DDosAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/ddospanel/layer4',
            component: React.lazy(() => import('./Layer4App'))
        },
        {
            path     : '/apps/ddospanel/layer7',
            component: React.lazy(() => import('./Layer7App'))
        },
        {
            path     : '/apps/ddospanel/custom',
            component: React.lazy(() => import('./LayerCustomApp'))
        }
    ]
};
