import { setRouterConfigurations } from "@mongez/react-router";
import { setAppConfigurations } from "@mongez/react";

import "./localization"
// export { default } from "./Config";

setRouterConfigurations({
    localization:{
        changeLanguageReloadMode:"hard",
        defaultLocaleCode:"en",
        localeCodes:["en","ar"]
    }
})


setAppConfigurations({
localization:{
    defaultLocaleCode:"en",
    locales:{
            en:{
            direction:"ltr",
            name:"English"
        },
        ar:{
            direction:"rtl",
            name:"Arabic"
        }
    },

}
})