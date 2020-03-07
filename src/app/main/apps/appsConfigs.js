import {DashboardAppConfig} from './dashboard/DashboardAppConfig';
import {PackagesAppConfig} from './packages/PackagesAppConfig';
import {DDosAppConfig} from './ddospanels/DDosAppConfig';
import {APIManagerAppConfig} from './apimanager/APIManagerAppConfig';
import {SupportAppConfig} from './support/SupportAppConfig';
import {ShowoffAppConfig} from './showoff/ShowoffAppConfig';
import {menuAuthAppConfig} from "./Edit/menuLogin/menuAuthAppConfig";
import {EditDashAppConfig} from "./Edit/dashboard/EditDashConfigApp";
import {authAppConfig} from "./Edit/authLogin/AuthAppConfig";
import {PackageAppConfig} from "./Edit/package/PackageConfigApp";

export const appsConfigs = [
    DashboardAppConfig,
    PackagesAppConfig,
    DDosAppConfig,
    APIManagerAppConfig,
    SupportAppConfig,
    ShowoffAppConfig,
    menuAuthAppConfig,
    EditDashAppConfig,
    authAppConfig,
    PackageAppConfig
];
