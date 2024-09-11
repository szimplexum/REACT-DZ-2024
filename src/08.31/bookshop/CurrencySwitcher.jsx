import { useContext } from "react";
import { CURRENCIES } from "./consts.js";
import CurrencyButton from "./CurrencyButton.jsx";
import CurrencyContext from "./CurrencyContext.js";

function CurrencySwitcher() {
    const { changeCurrency } = useContext(CurrencyContext);

    return (
        <div>
            {Object.values(CURRENCIES).map((item) => (
                <CurrencyButton
                    key={item.label}
                    onCurrencyChange={() => changeCurrency(item)}
                >
                    {item.label}
                </CurrencyButton>
            ))}
        </div>
    );
}

export default CurrencySwitcher;
