import {authRoles} from 'app/auth';
import axios from 'axios';
var  dashboard = 'ddd';

const navigationConfig = [
    {
        'id'      : 'userhub',
        'title'   : 'User Hub',
        'type'    : 'group',
        'icon'    : 'hubs',
        'children': [
            {
                'id'      : 'dashboard',
                'title'   : 'dashboard',
                'type'    : 'item',
                'icon'    : 'dashboard',
                'url'     : '/apps/dashboard'
            },

            {
                'id'   : 'packages',
                'title': 'Packages',
                'type' : 'item',
                'icon' : 'shopping_cart',
                'url'  : '/apps/packages'
            },
            {
                'id'   : 'ddos_panel',
                'title': 'DDOS Panel',
                'type' : 'collapse',
                'icon' : 'wifi',
                'children': [
                    {
                        'id'   : 'layer4',
                        'title': 'Layer 4 (IPv4)',
                        'type' : 'item',
                        'icon' : 'arrow_right_alt',
                        'url'  : '/apps/ddospanel/layer4'
                    },
                    {
                        'id'   : 'layer7',
                        'title': 'Layer 7 (Websites)',
                        'type' : 'item',
                        'icon' : 'arrow_right_alt',
                        'url'  : '/apps/ddospanel/layer7'
                    },
                    {
                        'id'   : 'custom',
                        'title': 'Layer 7 (Custom)',
                        'type' : 'item',
                        'icon' : 'arrow_right_alt',
                        'url'  : '/apps/ddospanel/custom'
                    }
                ]
            },
            {
                'id'   : 'api_manager',
                'title': 'API Manager',
                'type' : 'item',
                'icon' : 'code',
                'url'  : '/apps/apimanager'
            }
        ]
    },
    {
        'id'      : 'extra',
        'title'   : 'Extra',
        'type'    : 'group',
        'icon'    : 'extra',
        'children': [
            {
                'id'      : 'support',
                'title'   : 'Support',
                'type'    : 'item',
                'icon'    : 'email',
                'url'     : '/apps/support'
            },
            {
                'id'   : 'showoff',
                'title': 'Showoff',
                'type' : 'item',
                'icon' : 'flash_off',
                'url'  : '/apps/showoff'
            },
            {
                'id'   : 'telegram',
                'title': 'Telegram',
                'type' : 'item',
                'icon' : 'send',
                'url'  : '/apps/calendar'
            }
        ]
    },
    {
        'id'      : 'Edit',
        'title'   : 'Edit',
        'type'    : 'collapse',
        'icon'    : 'edit',
        'children': [
            {
                'id'      : 'auth',
                'title'   : 'Auth',
                'type'    : 'item',
                'icon'    : 'account_circle',
                'url'     : '/edit/auth'
            },
            {
                'id'      : 'menu',
                'title'   : 'menu',
                'type'    : 'item',
                'icon'    : 'menu',
                'url'     : '/edit/menu'
            },
            {
                'id'   : 'mainboard',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/edit/dashboard'
            },
            {
                'id'   : 'package',
                'title': 'package',
                'type' : 'item',
                'icon' : 'shopping_cart',
                'url'  : '/edit/package'
            },
            {
                'id'   : 'ddos_panel',
                'title': 'DDOS Panel',
                'type' : 'collapse',
                'icon' : 'wifi',
                'children': [
                    {
                        'id'   : 'layer4',
                        'title': 'Layer 4 (IPv4)',
                        'type' : 'item',
                        'icon' : 'arrow_right_alt',
                        'url'  : '/edit/ddospanel/layer4'
                    },
                    {
                        'id'   : 'layer7',
                        'title': 'Layer 7 (Websites)',
                        'type' : 'item',
                        'icon' : 'arrow_right_alt',
                        'url'  : '/edit/ddospanel/layer7'
                    },
                    {
                        'id'   : 'custom',
                        'title': 'Layer 7 (Custom)',
                        'type' : 'item',
                        'icon' : 'arrow_right_alt',
                        'url'  : '/edit/ddospanel/custom'
                    }
                ]
            },
            {
                'id'   : 'api_manager',
                'title': 'API Manager',
                'type' : 'item',
                'icon' : 'code',
                'url'  : '/apps/apimanager'
            },
            {
                'id'      : 'extra',
                'title'   : 'Extra',
                'type'    : 'collapse',
                'icon'    : 'extra',
                'children': [
                    {
                        'id'      : 'support',
                        'title'   : 'Support',
                        'type'    : 'item',
                        'icon'    : 'email',
                        'url'     : '/apps/support'
                    },
                    {
                        'id'   : 'showoff',
                        'title': 'Showoff',
                        'type' : 'item',
                        'icon' : 'flash_off',
                        'url'  : '/apps/showoff'
                    },
                    {
                        'id'   : 'telegram',
                        'title': 'Telegram',
                        'type' : 'item',
                        'icon' : 'send',
                        'url'  : '/apps/calendar'
                    }
                ]
            },

        ]
    },

];
export default navigationConfig;

