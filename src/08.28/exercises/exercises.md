# 08.28

## 1. Feladat

Cél: Hozz létre egy komponenst, amely a useRef hook segítségével automatikusan fókuszál egy beviteli mezőre, amikor a komponens betöltődik.

Lépések:

1. Hozz létre egy AutoFocusInput nevű komponenst.
2. Használj egy useRef hookot, hogy létrehozz egy ref-et, amely az `<input>` mezőre mutat.
3. Használj egy useEffect hookot, amely a komponens betöltésekor fókuszál az input mezőre.
4. Helyezd el az AutoFocusInput komponenst az App.jsx fájlban.

## 2. Feladat

Cél: Hozz létre egy komponenst, amely a useRef hook segítségével egy gomb megnyomására egy adott elemhez görget.

Lépések:

1. Hozz létre egy ScrollToElement nevű komponenst.
2. Használj egy useRef hookot, hogy létrehozz egy ref-et, amely egy `<div>` elemre mutat.
3. Készíts egy gombot, amelyre kattintva a program a `<div>` elemhez görget.
4. A gombra kattintáskor használd a ref-et az elem görgetéséhez.
5. Helyezd el a ScrollToElement komponenst az App.jsx fájlban.

## 3. Feladat

Cél: Hozz létre egy komponenst, amely egy időzített feladatot végez el. A useRef hook segítségével tárolj egy időzítőt, amely egy bizonyos idő elteltével egy üzenetet jelenít meg. A felhasználó képes legyen leállítani az időzítőt a ref használatával, mielőtt az üzenet megjelenik.

Lépések:

1. Hozz létre egy TimerControl nevű komponenst.
2. Használj egy useRef hookot, hogy létrehozz egy ref-et, amely az időzítő ID-ját tárolja.
3. Hozz létre egy gombot, amely indít egy időzítőt (5 másodperc), amely után megjelenik egy üzenet: “Időzítő lejárt!”.
4. Hozz létre egy másik gombot, amely leállítja az időzítőt a useRef használatával, mielőtt az üzenet megjelenik.
5. Helyezd el a TimerControl komponenst az App.jsx fájlban.

## 4. Feladat

Készíts egy VideoPlayer nevű react komponenst!

-   A komponens rendereljen ki egy videót (video tag-et), ami
-   ha fölé visszük az egeret elkezdi lejátszani a videót
-   ha levisszük az egeret a videóról akkor a videó megáll
-   tesztelhettek ezzel a videóval: http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
