# 08.31

## 1. Feladat

Cél: készíts egy online könyváruházat szimuláló alkalmazást!

Az alkalmazás a következő formában kezeli a könyveket:

```js
[
    {
        id: 1,
        title: "The Road to React",
        price: 19.99,
    },
    {
        id: 2,
        title: "The Road to GraphQL",
        price: 29.99,
    },
];
```

Készíts egy alkalmazást, ami meg tudja jeleníteni ezeket a könyveket egy beégetett tömbből!

## 2. Feladat

A könyvek ára eredetileg euróban van eltárolva. Context segítségével készíts el egy olyan logikát, amivel a könyvek árát más pénznemre lehet állítani! Készíts hozzá egy pénzemváltó komponenst is! Használd hozzá a következő objektumot:

```js
const currencies = {
    euro: {
        symbol: "€",
        label: "EUR",
        conversionRate: 1,
    },
    usd: {
        symbol: "$",
        label: "USD",
        conversionRate: 1.19,
    },
    forint: {
        symbol: "Ft",
        label: "HUF",
        conversionRate: 380,
    },
};
```

## 3. Feladat

Egészítsd ki a beégetett könyveket tartalmazó tömbben lévő objektumokat egy `read` nevű kulccsal, ami vagy `true` vagy `false` értéket vesz fel. Ez jelöli azt, hogy az adott könyvet a felhasználó elolvasta-e már vagy nem. A könyvet megjelenítő komponensedre készíts egy gombot, amivel meg lehet változtatni a `read` értékét! A gombon lévő szöveg attól függ, hogy mi a `read` értéke!

## 4. Feladat

Készíts cím alapú szűrőt a könyvekhez!

1. Rajzolj ki egy szöveges inputot az oldal teltejére!
2. Amikor a felhasználó beleír az inputba az alkalmazás csak azokat a könyveket jelenítse meg, amelyeknek a címében megtalálható az inputban található érték!
3. A szűrés a gépelés hatására valósuljon meg!

## 5. Feladat

Készíts olvasottság alapú szűrőt a könyvekhez!

1. Rajzolj ki egy checkboxot a szöveges szűrő alá!
2. Amikor a felhasználó bepipálja a checkboxot az alkalmazás csak azokat a könyveket jelenítse meg, amelyeket a felhasználó már elolvasta!
3. A szűrés egyből valósuljon meg!

## 6. Feladat

Hozz létre egy db.json nevű fájlt a következő tartalommal:

```json
{
    "books": [
        {
            "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            "title": "The Lost Kingdom",
            "price": 12.99,
            "read": true
        },
        {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "title": "Shadow of the Moon",
            "price": 15.5,
            "read": false
        },
        {
            "id": "c9bf9e57-1685-4c89-bafb-ff5af830be8a",
            "title": "The Silent Whisper",
            "price": 8.75,
            "read": true
        },
        {
            "id": "ebba5b6e-e215-488c-8d74-7c7e22427b56",
            "title": "Echoes of Eternity",
            "price": 23.99,
            "read": false
        },
        {
            "id": "9b2e6d22-9a77-4205-9aaf-60346b2341d5",
            "title": "Journey to the Unknown",
            "price": 19.9,
            "read": true
        },
        {
            "id": "3f576184-590b-4e5b-bb9b-5a9e8cd16a27",
            "title": "Beyond the Horizon",
            "price": 14.3,
            "read": false
        },
        {
            "id": "d897b5e5-3c9b-4b1b-9a5a-f8b26f2e6e5d",
            "title": "Secrets of the Forest",
            "price": 21.45,
            "read": true
        },
        {
            "id": "4a1f7c4f-2f47-4d3e-8773-8b28e5e8b343",
            "title": "The Final Chapter",
            "price": 17.8,
            "read": false
        },
        {
            "id": "f8347a34-d275-4cfc-92c9-e9d1a99f5a88",
            "title": "Winds of Destiny",
            "price": 13.99,
            "read": true
        },
        {
            "id": "dd85d9d0-1b59-41c9-9a29-8b8bda4d09a2",
            "title": "Tales of the Forgotten",
            "price": 11.5,
            "read": false
        },
        {
            "id": "b4b147bc-6221-4eec-b3a5-98b1b252db38",
            "title": "The Enchanted Valley",
            "price": 22.75,
            "read": true
        },
        {
            "id": "b294921c-d1d2-4eab-85b6-612bba5c29c6",
            "title": "Chronicles of Time",
            "price": 18.6,
            "read": false
        },
        {
            "id": "5a9b8a0e-cb8d-4e79-b78f-1d8431b768c3",
            "title": "Realm of the Dragon",
            "price": 16.2,
            "read": true
        },
        {
            "id": "9a2f9f63-8463-4690-bded-c79ed66d6765",
            "title": "The Midnight Warrior",
            "price": 20.5,
            "read": false
        },
        {
            "id": "d47ac10b-58cc-4372-a567-0e02b2c3d471",
            "title": "Whispers in the Dark",
            "price": 9.99,
            "read": true
        }
    ]
}
```

Indíts el egy json-servert, ami ezt a db.json fájlt használja adatbázisként. Cseréld le a beégetett tömböt ezekre az adatokra úgy, hogy az alkalmazás indulásakor töltsd le az adatokat a lokális szerverről!

## 7. Feladat

Alakítsd át úgy az alkalmazást, hogy az "olvasott"-ra állítás az adatbázisban is történjen.
