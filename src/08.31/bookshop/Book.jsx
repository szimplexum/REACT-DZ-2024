import { useContext } from "react";
import CurrencyContext from "./CurrencyContext.js";

function Book({ title, price, read, onReadClicked }) {
    const { currency } = useContext(CurrencyContext);

    const finalPrice = (price * currency.conversionRate).toFixed(2);

    return (
        <div style={{ border: "1px solid black" }}>
            <h3>{title}</h3>
            <h4>
                {currency.symbol === "Ft"
                    ? `${finalPrice} ${currency.symbol}`
                    : `${currency.symbol} ${finalPrice}`}
            </h4>
            <button onClick={onReadClicked}>
                {read ? "Read" : `Haven't read`}
            </button>
        </div>
    );
}

export default Book;
