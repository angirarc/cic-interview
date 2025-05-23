import { Building, Health, Icon, MagicStar } from "iconsax-react-native";

export interface MiniAppConfig {
    name: string;
    Icon: Icon;
    path: string;
}

// mini app config
const miniAppConfig: MiniAppConfig[]  = [
    {
        name: "General Insurance",
        Icon: MagicStar,
        path: "general-insurance"
    },
    {
        name: "Life Insurance Unit",
        Icon: Health,
        path: "life-insurance"
    },
    {
        name: "Assets Insurance Unit",
        Icon: Building,
        path: "assets-insurance"
    }
]

export default miniAppConfig;