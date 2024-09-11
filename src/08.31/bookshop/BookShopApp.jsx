import BookList from "./BookList.jsx";
import CurrencyProvider from "./CurrencyProvider.jsx";
import CurrencySwitcher from "./CurrencySwitcher.jsx";

function BookShopApp() {
    return (
        <CurrencyProvider>
            <CurrencySwitcher />
            <BookList />
        </CurrencyProvider>
    );
}

export default BookShopApp;
