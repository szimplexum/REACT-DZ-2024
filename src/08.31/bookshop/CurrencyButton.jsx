function CurrencyButton({ onCurrencyChange, children }) {
    return <button onClick={onCurrencyChange}>{children}</button>;
}

export default CurrencyButton;
