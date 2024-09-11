# 08.14.

## 1. Feladat

Cél: Hozz létre egy komponenst, amely különböző üzeneteket jelenít meg a felhasználónak attól függően, hogy egy adott feltétel igaz vagy hamis.

Lépések:

1. Hozz létre egy Greeting komponenst, amely egy isMorning propot fogad.
2. Ha isMorning igaz, jelenjen meg a “Good morning!” üzenet, ha hamis, akkor a “Good evening!” üzenet.
3. Helyezd el a Greeting komponenst az App.js fájlban, és adj át neki különböző értékeket a isMorning prop segítségével.

## 2. Feladat

Cél: Hozz létre egy komponenst, amely egy rendezetlen listát (`<ul>`) jelenít meg, a listaelemek (`<li>`) dinamikusan kerülnek létrehozásra egy tömb alapján.

Lépések:

1. Hozz létre egy ItemList komponenst, amely egy items nevű tömböt kap propként.
2. A ItemList komponens renderelje a tömb elemeit egy `<ul>` listában, ahol minden elem egy `<li>` lesz.
3. Helyezd el a ItemList komponenst az App.js fájlban, és adj át neki egy tömböt.

## 3. Feladat

Cél: Hozz létre egy komponenst, amely egy rendezetlen listát (`<ul>`) jelenít meg, de ha a lista üres, akkor egy `“No items available.”` üzenetet jelenít meg.

Lépések:

1. Hozz létre egy ItemListWithMessage komponenst, amely egy items nevű tömböt kap propként.
2. Ha a items tömb üres, jelenjen meg egy `“No items available.”` üzenet. Ha nem üres, renderelje a tömb elemeit egy `<ul>` listában.
3. Helyezd el a ItemListWithMessage komponenst az App.js fájlban, és adj át neki különböző tömböket, köztük egy üres tömböt is.

## 4. Feladat

Cél: Hozz létre egy komponenst, amely különböző üzeneteket jelenít meg attól függően, hogy a felhasználó milyen szerepkörben van (role prop).

Lépések:

1. Hozz létre egy RoleBasedMessage komponenst, amely egy role propot fogad.
2. Ha a role “admin”, jelenjen meg a “Welcome, Admin!” üzenet. Ha a role “user”, jelenjen meg a “Welcome, User!” üzenet. Ha a role bármi más, jelenjen meg a “Welcome, Guest!” üzenet.
3. Helyezd el a RoleBasedMessage komponenst az App.js fájlban, és adj át neki különböző szerepköröket.

## 5. Feladat

Cél: Hozz létre egy komponenst, amely egy dinamikus bevásárlólistát jelenít meg. Ha a lista üres, akkor egy “A lista üres.” üzenetet jelenít meg. Ha van olyan elem, ami megvásárlásra került (bought: true), azokat külön színezd meg.

Lépések:

1. Hozz létre egy ShoppingList komponenst, amely egy items nevű tömböt kap propként. Minden elem egy objektum, amely tartalmazza a termék nevét (name) és hogy megvásárolták-e (bought).
2. Ha a lista üres, jelenjen meg egy “A lista üres.” üzenet.
3. Ha a lista nem üres, jelenítsd meg az elemeket egy `<ul>` listában. Azok az elemek, amelyeket megvásároltak (bought: true), legyenek zöld színnel jelenítve meg.
4. Helyezd el a ShoppingList komponenst az App.js fájlban.

## 6. Feladat

Cél: Hozz létre egy Navigation komponenst, amely különböző menüpontokat jelenít meg a felhasználói jogosultságok alapján.

Lépések:

1. Hozz létre egy Navigation komponenst, amely egy role propot kap.
2. Ha a role “admin”, akkor jelenjen meg egy navigációs menü Dashboard, Users és Settings menüpontokkal.
3. Ha a role “user”, akkor jelenjen meg egy navigációs menü Home, Profile és Settings menüpontokkal.
4. Ha a role “guest”, akkor jelenjen meg egy navigációs menü Home és Login menüpontokkal.
5. Helyezd el a Navigation komponenst az App.js fájlban, és teszteld különböző szerepkörökkel.

## 7. Feladat

Cél: Hozz létre egy komponenst, amely különböző kategóriákba sorolt listákat jelenít meg. Minden kategóriának saját fejléce van, és ha a kategória üres, akkor egy “No items in this category.” üzenetet jelenít meg.

Lépések:

1. Hozz létre egy CategorizedList komponenst, amely egy categories nevű objektumot kap propként. Az objektum kulcsai a kategóriák nevei, az értékek pedig az adott kategóriába tartozó tételek tömbjei.
2. Minden kategóriának jeleníts meg egy fejléce (`<h2>`), majd a hozzá tartozó tételeket egy `<ul>` listában.
3. Ha egy kategória üres, jelenjen meg a “No items in this category.” üzenet.
4. Helyezd el a CategorizedList komponenst az App.js fájlban.

## 8. Feladat

Cél: Hozz létre egy ContentBlock komponenst, amely különböző típusú tartalmakat (szöveg, kép, link) jelenít meg attól függően, hogy milyen type propot kap.

Lépések:

1. Hozz létre egy ContentBlock komponenst, amely egy type és egy content propot kap.
2. Ha a type “text”, jelenjen meg egy `<p>` elem a szöveggel.
3. Ha a type “image”, jelenjen meg egy `<img>` elem a megadott képpel.
4. Ha a type “link”, jelenjen meg egy `<a>` elem a megadott URL-lel és szöveggel.
5. Helyezd el a ContentBlock komponenst az App.js fájlban, és adj át neki különböző típusú tartalmakat.

## 9. Feladat

Cél: Hozz létre egy MessageList komponenst, amely egy üzenettömböt kap propként. Az üzenetek típusa alapján különböző színekkel jeleníti meg azokat.

Lépések:

1. Hozz létre egy MessageList komponenst, amely egy messages nevű tömböt kap propként. Minden üzenet egy objektum, amely tartalmazza a szöveget (text) és a típust (type).
2. Ha a type “error”, piros színnel jelenjen meg az üzenet. Ha “warning”, sárgával, ha “info”, kékkel.
3. Helyezd el a MessageList komponenst az App.js fájlban, és adj át neki különböző üzeneteket.
