import * as Actions from '../../actions/fuse/index';

const initialState =
    [{id: "serico", english: "serico", chinese: "serico"}, {
        id: "serico_price",
        english: "serico_price",
        chinese: "serico_price"
    }, {id: "duration", english: "duration", chinese: "duration"}, {
        id: "serico_duration",
        english: "serico_duration",
        chinese: "serico_duration"
    }, {id: "attack second", english: "attack second", chinese: "attack second"}, {
        id: "serico_attack second",
        english: "serico_attack second",
        chinese: "serico_attack second"
    }, {
        id: "concurrent attack",
        english: "concurrent attack",
        chinese: "concurrent attack"
    }, {
        id: "serico concurrent attack",
        english: "serico concurrent attack",
        chinese: "serico concurrent attack"
    }, {id: "API access", english: "API access", chinese: "API access"}, {
        id: "serico_api",
        english: "serico_api",
        chinese: "serico_api"
    }, {id: "attack", english: "attack", chinese: "attack"}, {
        id: "serico_limit",
        english: "serico_limit",
        chinese: "serico_limit"
    }, {id: "method", english: "method", chinese: "method"}, {
        id: "serico_method",
        english: "serico_method",
        chinese: "serico_method"
    }, {id: "network", english: "network", chinese: "network"}, {
        id: "serico_network",
        english: "serico_network",
        chinese: "serico_network"
    }, {id: "karsper", english: "karsper", chinese: "karsper"}, {
        id: "karsper_price",
        english: "karsper_price",
        chinese: "karsper_price"
    }, {
        id: "karsper_duration",
        english: "karsper_duration",
        chinese: "karsper_duration"
    }, {
        id: "karsper_attack_second",
        english: "karsper_attack_second",
        chinese: "karsper_attack_second"
    }, {
        id: "karsper_concurrent attack",
        english: "karsper_concurrent attack",
        chinese: "karsper_concurrent attack"
    }, {id: "karsper_api", english: "karsper_api", chinese: "karsper_api"}, {
        id: "karsper_limit",
        english: "karsper_limit",
        chinese: "karsper_limit"
    }, {id: "karsper_method", english: "karsper_method", chinese: "karsper_method"}, {
        id: "karsper_network",
        english: "karsper_network",
        chinese: "karsper_network"
    }, {id: "kalarz", english: "kalarz", chinese: "kalarz"}, {
        id: "kalarz_price",
        english: "kalarz_price",
        chinese: "kalarz_price"
    }, {
        id: "kalarz_duration",
        english: "kalarz_duration",
        chinese: "kalarz_duration"
    }, {
        id: "kalarz_attack_Second",
        english: "kalarz_attack_Second",
        chinese: "kalarz_attack_Second"
    }, {
        id: "kalarz_concurrent_attack",
        english: "kalarz_concurrent_attack",
        chinese: "kalarz_concurrent_attack"
    }, {id: "kalarz_api", english: "kalarz_api", chinese: "kalarz_api"}, {
        id: "kalarz_limit",
        english: "kalarz_limit",
        chinese: "kalarz_limit"
    }, {id: "kalarz_method", english: "kalarz_method", chinese: "kalarz_method"}, {
        id: "kararz_network",
        english: "kararz_network",
        chinese: "kararz_network"
    }, {id: "andyquez", english: "andyquez", chinese: "andyquez"}, {
        id: "andyquez_price",
        english: "andyquez_price",
        chinese: "andyquez_price"
    }, {
        id: "andyquez_duration",
        english: "andyquez_duration",
        chinese: "andyquez_duration"
    }, {
        id: "andyquez_attack_second",
        english: "andyquez_attack_second",
        chinese: "andyquez_attack_second"
    }, {
        id: "andyquez_concurrent_attack",
        english: "andyquez_concurrent_attack",
        chinese: "andyquez_concurrent_attack"
    }, {
        id: "andyquez_api_access",
        english: "andyquez_api_access",
        chinese: "andyquez_api_access"
    }, {id: "andyquez_limit", english: "andyquez_limit", chinese: "andyquez_limit"}, {
        id: "andyquez_method",
        english: "andyquez_method",
        chinese: "andyquez_method"
    }, {id: "andyquez_network", english: "andyquez_network", chinese: "andyquez_network"}, {
        id: "V-DOS",
        english: "V-DOS",
        chinese: "V-DOS"
    }, {id: "V-DOS_price", english: "V-DOS_price", chinese: "V-DOS_price"}, {
        id: "V-DOS_duration",
        english: "V-DOS_duration",
        chinese: "V-DOS_duration"
    }, {
        id: "V-DOS_attack_second",
        english: "V-DOS_attack_second",
        chinese: "V-DOS_attack_second"
    }, {
        id: "V-DOS_concurrent_attack",
        english: "V-DOS_concurrent_attack",
        chinese: "V-DOS_concurrent_attack"
    }, {id: "V-DOS_api_access", english: "V-DOS_api_access", chinese: "V-DOS_api_access"}, {
        id: "V-DOS_limit",
        english: "V-DOS_limit",
        chinese: "V-DOS_limit"
    }, {id: "V-DOS_method", english: "V-DOS_method", chinese: "V-DOS_method"}, {
        id: "V-DOS_network",
        english: "V-DOS_network",
        chinese: "V-DOS_network"
    }, {id: "YUBINA", english: "YUBINA", chinese: "YUBINA"}, {
        id: "YUBINA_price",
        english: "YUBINA_price",
        chinese: "YUBINA_price"
    }, {
        id: "YUBINA_duration",
        english: "YUBINA_duration",
        chinese: "YUBINA_duration"
    }, {
        id: "YUBINA_attack_second",
        english: "YUBINA_attack_second",
        chinese: "YUBINA_attack_second"
    }, {
        id: "YUBINA_concurrent_attack",
        english: "YUBINA_concurrent_attack",
        chinese: "YUBINA_concurrent_attack"
    }, {
        id: "YUBINA_api_access",
        english: "YUBINA_api_access",
        chinese: "YUBINA_api_access"
    }, {id: "YUBINA_limit", english: "YUBINA_limit", chinese: "YUBINA_limit"}, {
        id: "YUBINA_method",
        english: "YUBINA_method",
        chinese: "YUBINA_method"
    }, {id: "YUBINA_network", english: "YUBINA_network", chinese: "YUBINA_network"}, {
        id: "PARASJHA",
        english: "PARASJHA",
        chinese: "PARASJHA"
    }, {id: "PARASJHA_price", english: "PARASJHA_price", chinese: "PARASJHA_price"}, {
        id: "PARASJHA_duration",
        english: "PARASJHA_duration",
        chinese: "PARASJHA_duration"
    }, {
        id: "PARASJHA_attack_second",
        english: "PARASJHA_attack_second",
        chinese: "PARASJHA_attack_second"
    }, {
        id: "PARASJHA_concurrent_attack",
        english: "PARASJHA_concurrent_attack",
        chinese: "PARASJHA_concurrent_attack"
    }, {
        id: "PARASJHA_api_access",
        english: "PARASJHA_api_access",
        chinese: "PARASJHA_api_access"
    }, {id: "PARASJHA_limit", english: "PARASJHA_limit", chinese: "PARASJHA_limit"}, {
        id: "PARASJHA_method",
        english: "PARASJHA_method",
        chinese: "PARASJHA_method"
    }, {id: "PARASJHA_network", english: "PARASJHA_network", chinese: "PARASJHA_network"}, {
        id: "APOPHIS",
        english: "APOPHIS",
        chinese: "APOPHIS"
    }, {id: "APOPHIS_price", english: "APOPHIS_price", chinese: "APOPHIS_price"}, {
        id: "APOPHIS_duration",
        english: "APOPHIS_duration",
        chinese: "APOPHIS_duration"
    }, {
        id: "APOPHIS_attack_second",
        english: "APOPHIS_attack_second",
        chinese: "APOPHIS_attack_second"
    }, {
        id: "APOPHIS_concurrent_attack",
        english: "APOPHIS_concurrent_attack",
        chinese: "APOPHIS_concurrent_attack"
    }, {
        id: "APOPHIS_api_access",
        english: "APOPHIS_api_access",
        chinese: "APOPHIS_api_access"
    }, {id: "APOPHIS_limit", english: "APOPHIS_limit", chinese: "APOPHIS_limit"}, {
        id: "APOPHIS_method",
        english: "APOPHIS_method",
        chinese: "APOPHIS_method"
    }, {id: "APOPHIS_network", english: "APOPHIS_network", chinese: "APOPHIS_network"}, {
        id: "SLAYKINGS",
        english: "SLAYKINGS",
        chinese: "SLAYKINGS"
    }, {
        id: "SLAYKINGS_price",
        english: "SLAYKINGS_price",
        chinese: "SLAYKINGS_price"
    }, {
        id: "SLAYKINGS_duration",
        english: "SLAYKINGS_duration",
        chinese: "SLAYKINGS_duration"
    }, {
        id: "SLAYKINGS_attack_second",
        english: "SLAYKINGS_attack_second",
        chinese: "SLAYKINGS_attack_second"
    }, {
        id: "SLAYKINGS_concurrent_attack",
        english: "SLAYKINGS_concurrent_attack",
        chinese: "SLAYKINGS_concurrent_attack"
    }, {
        id: "SLAYKINGS_api_access",
        english: "SLAYKINGS_api_access",
        chinese: "SLAYKINGS_api_access"
    }, {id: "SLAYKINGS_limit", english: "SLAYKINGS_limit", chinese: "SLAYKINGS_limit"}, {
        id: "SLAYKINGS_method",
        english: "SLAYKINGS_method",
        chinese: "SLAYKINGS_method"
    }, {id: "SLAYKINGS_network", english: "SLAYKINGS_network", chinese: "SLAYKINGS_network"}, {
        id: "BRIANKREBS",
        english: "BRIANKREBS",
        chinese: "BRIANKREBS"
    }, {
        id: "BRIANKREBS_price",
        english: "BRIANKREBS_price",
        chinese: "BRIANKREBS_price"
    }, {
        id: "BRIANKREBS_duration",
        english: "BRIANKREBS_duration",
        chinese: "BRIANKREBS_duration"
    }, {
        id: "BRIANKREBS_attack_second",
        english: "BRIANKREBS_attack_second",
        chinese: "BRIANKREBS_attack_second"
    }, {
        id: "BRIANKREBS_concurrent_attack",
        english: "BRIANKREBS_concurrent_attack",
        chinese: "BRIANKREBS_concurrent_attack"
    }, {
        id: "BRIANKREBS_api_access",
        english: "BRIANKREBS_api_access",
        chinese: "BRIANKREBS_api_access"
    }, {
        id: "BRIANKREBS_limit",
        english: "BRIANKREBS_limit",
        chinese: "BRIANKREBS_limit"
    }, {
        id: "BRIANKREBS_method",
        english: "BRIANKREBS_method",
        chinese: "BRIANKREBS_method"
    }, {id: "BRIANKREBS_network", english: "BRIANKREBS_network", chinese: "BRIANKREBS_network"}, {
        id: "RADWARE",
        english: "RADWARE",
        chinese: "RADWARE"
    }, {id: "RADWARE_price", english: "RADWARE_price", chinese: "RADWARE_price"}, {
        id: "RADWARE_duration",
        english: "RADWARE_duration",
        chinese: "RADWARE_duration"
    }, {
        id: "RADWARE_attack_second",
        english: "RADWARE_attack_second",
        chinese: "RADWARE_attack_second"
    }, {
        id: "RADWARE_concurrent_attack",
        english: "RADWARE_concurrent_attack",
        chinese: "RADWARE_concurrent_attack"
    }, {
        id: "RADWARE_api_access",
        english: "RADWARE_api_access",
        chinese: "RADWARE_api_access"
    }, {id: "RADWARE_limit", english: "RADWARE_limit", chinese: "RADWARE_limit"}, {
        id: "RADWARE_method",
        english: "RADWARE_method",
        chinese: "RADWARE_method"
    }, {id: "RADWARE_network", english: "RADWARE_network", chinese: "RADWARE_network"}, {
        id: "LIZARDSQUAD",
        english: "LIZARDSQUAD",
        chinese: "LIZARDSQUAD"
    }, {
        id: "LIZARDSQUAD_price",
        english: "LIZARDSQUAD_price",
        chinese: "LIZARDSQUAD_price"
    }, {
        id: "LIZARDSQUAD_duration",
        english: "LIZARDSQUAD_duration",
        chinese: "LIZARDSQUAD_duration"
    }, {
        id: "LIZARDSQUAD_attack_second",
        english: "LIZARDSQUAD_attack_second",
        chinese: "LIZARDSQUAD_attack_second"
    }, {
        id: "LIZARDSQUAD_concurrent_attack",
        english: "LIZARDSQUAD_concurrent_attack",
        chinese: "LIZARDSQUAD_concurrent_attack"
    }, {
        id: "LIZARDSQUAD_api_access",
        english: "LIZARDSQUAD_api_access",
        chinese: "LIZARDSQUAD_api_access"
    }, {
        id: "LIZARDSQUAD_limit",
        english: "LIZARDSQUAD_limit",
        chinese: "LIZARDSQUAD_limit"
    }, {
        id: "LIZARDSQUAD_method",
        english: "LIZARDSQUAD_method",
        chinese: "LIZARDSQUAD_method"
    }, {id: "LIZARDSQUAD_network", english: "LIZARDSQUAD_network", chinese: "LIZARDSQUAD_network"},
        {id: "buttonname", english: "primary", chinese: "확인"}];


const pack_info = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_PACK_INFO: {
            return [
                ...state
            ];
        }
        case Actions.SET_PACK_INFO: {
            return [
                ...action.value
            ];
        }
        default: {
            return state;
        }
    }
};

export default pack_info;

