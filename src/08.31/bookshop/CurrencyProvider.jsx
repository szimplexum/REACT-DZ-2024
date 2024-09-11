import { useState } from "react";
import { CURRENCIES } from "./consts.js";
import CurrencyContext from "./CurrencyContext.js";

function CurrencyProvider({ children }) {
    const [currency, setCurrency] = useState(CURRENCIES.euro);

    const currencyContextValue = {
        currency: currency,
        changeCurrency: setCurrency,
    };

    return (
        <CurrencyContext.Provider value={currencyContextValue}>
            {children}
        </CurrencyContext.Provider>
    );
}

export default CurrencyProvider;
