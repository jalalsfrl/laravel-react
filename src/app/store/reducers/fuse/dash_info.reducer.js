import * as Actions from '../../actions/fuse/index';

const initialState =
    [
        {id: "total_users", english: "total_users", chinese: "\"total_users12"},
        {id: "total_attcks", english: "total_attcks", chinese: "\"total_attcks"},
        {id: "running_attacks", english: "running_attacks", chinese: "\"running_attacks"},
        {id: "recent_updates", english: "recent_updates", chinese: "\"recent_updates"},
        {id: "update", english: "update", chinese: "\"update"},
        {id: "update_content", english: "update_content", chinese: "\"update_content"},
        {id: "important", english: "important", chinese: "\"important"},
        {id: "important_content", english: "important_content", chinese: "\"important_content"},
        {id: "updates!", english: "updates!", chinese: "\"updates!"}, {
        id: "announce",
        english: "announce",
        chinese: "\"announce"
    }, {
        id: "layer7_attack_method",
        english: "layer7_attack_method",
        chinese: "\"layer7_attack_method"
    }, {id: "description", english: "description", chinese: "\"description"}, {
        id: "HTTP-SPAM[GET]",
        english: "HTTP-SPAM[GET]",
        chinese: "\"HTTP-SPAM[GET]"
    }, {
        id: "HTTP-SPAM[GET]_Y",
        english: "HTTP-SPAM[GET]_Y",
        chinese: "HTTP-SPAM[GET]_Y"
    }, {
        id: "HTTP-SPAM[POST]",
        english: "HTTP-SPAM[POST]",
        chinese: "\"HTTP-SPAM[POST]"
    }, {
        id: "HTTP-SPAM[POST]_Y",
        english: "HTTP-SPAM[POST]_Y",
        chinese: "HTTP-SPAM[POST]_Y"
    }, {
        id: "[PREMIUM]MULTI-BYPASS",
        english: "[PREMIUM]MULTI-BYPASS",
        chinese: "\"[PREMIUM]MULTI-BYPASS"
    }, {
        id: "[PREMIUM]MULTI-BYPASS_Y",
        english: "[PREMIUM]MULTI-BYPASS_Y",
        chinese: "[PREMIUM]MULTI-BYPASS_Y"
    }, {
        id: "[PREMIUM]HTTP-CAPTHA\r",
        english: "[PREMIUM]HTTP-CAPTHA\r",
        chinese: "[PREMIUM]HTTP-CAPTHA\r"
    }, {
        id: "[PREMIUM]HTTP-CAPTCHA_Y",
        english: "[PREMIUM]HTTP-CAPTCHA_Y",
        chinese: "[PREMIUM]HTTP-CAPTCHA_Y"
    }, {
        id: "LAYER4_ATTACK_METHOD",
        english: "LAYER4_ATTACK_METHOD",
        chinese: "\"LAYER4_ATTACK_METHOD"
    }, {id: "UDP-NTP", english: "UDP-NTP", chinese: "\"UDP-NTP"}, {
        id: "UDP-NTP_y",
        english: "UDP-NTP_y",
        chinese: "UDP-NTP_y"
    }, {id: "UDP-SSDP", english: "UDP-SSDP", chinese: "\"UDP-SSDP"}, {
        id: "UDP-SSDP_Y",
        english: "UDP-SSDP_Y",
        chinese: "UDP-SSDP_Y"
    }, {id: "UDP_SNMP", english: "UDP_SNMP", chinese: "\"UDP_SNMP"}, {
        id: "UDP_SNMP_Y",
        english: "UDP_SNMP_Y",
        chinese: "UDP_SNMP_Y"
    }, {id: "UDP_MSSQL", english: "UDP_MSSQL", chinese: "\"UDP_MSSQL"}, {
        id: "UDP_MSSQL_Y",
        english: "UDP_MSSQL_Y",
        chinese: "UDP_MSSQL_Y"
    }, {
        id: "[PREMIUM] UDP-CLDAP",
        english: "[PREMIUM] UDP-CLDAP",
        chinese: "\"[PREMIUM] UDP-CLDAP"
    }, {
        id: "[PREMIUM] UDP-CLDAP_Y",
        english: "[PREMIUM] UDP-CLDAP_Y",
        chinese: "[PREMIUM] UDP-CLDAP_Y"
    }, {
        id: "[PREMIUM] UDP-SENTINEL",
        english: "[PREMIUM] UDP-SENTINEL",
        chinese: "\"[PREMIUM] UDP-SENTINEL"
    }, {
        id: "[PREMIUM] UDP-SENTINEL_Y",
        english: "[PREMIUM] UDP-SENTINEL_Y",
        chinese: "[PREMIUM] UDP-SENTINEL_Y"
    }, {
        id: "[PREMUM] TCP-VOX",
        english: "[PREMUM] TCP-VOX",
        chinese: "\"[PREMUM] TCP-VOX"
    }, {
        id: "[PREMUM] TCP-VOX_Y",
        english: "[PREMUM] TCP-VOX_Y",
        chinese: "[PREMUM] TCP-VOX_Y"
    }, {
        id: "[PREMIUM]TCP-KYS",
        english: "[PREMIUM]TCP-KYS",
        chinese: "\"[PREMIUM]TCP-KYS"
    }, {
        id: "[PREMIUM]TCP-KYS_Y",
        english: "[PREMIUM]TCP-KYS_Y",
        chinese: "[PREMIUM]TCP-KYS_Y"
    }, {
        id: "[PREMIUM]TCP-BYPASS",
        english: "[PREMIUM]TCP-BYPASS",
        chinese: "\"[PREMIUM]TCP-BYPASS"
    }, {
        id: "[PREMIUM]TCP-BYPASS_Y",
        english: "[PREMIUM]TCP-BYPASS_Y",
        chinese: "[PREMIUM]TCP-BYPASS_Y"
    }, {
        id: "[PREMIUM]UDP-BYPASS",
        english: "[PREMIUM]UDP-BYPASS",
        chinese: "\"[PREMIUM]UDP-BYPASS"
    }, {id: "[PREMIUM]UDP-BYPASS_Y", english: "[PREMIUM]UDP-BYPASS_Y", chinese: "[PREMIUM]UDP-BYPASS_Y"}];


const dash_info = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_DASH_INFO: {
            return [
                ...state
            ];
        }
        case Actions.SET_DASH_INFO: {
            return [
                ...action.value
            ];
        }
        default: {
            return state;
        }
    }
};

export default dash_info;

