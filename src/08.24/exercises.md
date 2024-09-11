# 08.24

## 1. Feladat

Készíts egy 'Card' react komponenst, ami megjelenít egy kártyát a kijelzőn. A használata a következő legyen:

```jsx
<Card
    imageUrl=""
    name="John Doe"
    age={28}
    profession="Junior Fullstack API Developer"
    description="A longer description about the persons profession and private life"
/>
```

## 2. Feladat

Készíts egy 'LongText' react komponenst, ami két szöveget vár paraméterül. Alap állapotban a rövidebb szöveg jelenik meg, de ha a szöveg végén látható 'read more' gombra kattintunk, megjelenik a hosszabb szöveg. Kinyitott állapotban a szöveg végén lévő 'show less' gombra kattintva csukhatjuk vissza a szöveget. Használata:

```jsx
<LongText shortText="" longText="" />
```

## 3. Feladat

Készítsd el a LongText komponens továbbfejlesztett verzióját, ahol paraméterként (prop) egy szöveget és egy számot várunk. Alap esetben a komponens megjelenít annyi szót a szövegből, amekkora számot megadtunk neki. Viszont, ha a 'read more' gombra kattintunk a rövid szöveg végén, a szöveg egésze megjelenik. Kinyitott állapotban a szöveg végén lévő 'show less' gombra kattintva csukhatjuk vissza a szöveget.

## 4. Feladat

Készíts egy 'RemovableList' react komponenst, ami megjeleníti egy props-ban átadott lista elemeit, és mindegyik listaelem mellé egy törlés gombot is. A feladat egyértelmű: a törlés gombok távolítsák el az adott listaelemet. A komponenst így kell használni:

```jsx
const list = [
    { id: 1, element: "apple" },
    { id: 2, element: "banana" },
    { id: 3, element: "pear" },
    { id: 4, element: "mango" },
    { id: 5, element: "peach" },
];

<RemovableList list={list} />;
```

## 5. Feladat

Készíts egy 'MyForm' nevű react komponenst, ami két input elemet (felhasználónév, jelszó) tartalmaz, illetve egy küldés gombot. A gombra kattintva megjelennek az inputokba beírt értékek a kijelzőn egy h1-es elemben.

## 6. Feladat

Készíts egy 'ValidateRegistration' nevű react komponenst, ami 3 inputot (felhasználónév, jelszó, jelszó megismétlése) tartalmaz, illetve egy küldés gombot. A küldés gombra kattintva jelenjen meg egy piros hibaüzenet, ha nem egyeznek a jelszavak, ha egyeznek, akkor pedig egy zöld a sikeres regisztrációról.

**Bónusz**: submit előtt ellenőrizze a komponens, hogy minden inputban legyen adat, és ha nincs, akkor arról írjon ki hibaüzenetet!

## 7. Feladat

Készíts egy 'ImageCatalog' nevű react komponenst. Props-on kersztül várj egy tömböt, amiben képek url-jei szerepelnek. A komponens megjeleníti az első képet, a további képeket pedig az előre és vissza gombokkal lehet megtekinteni.

**Bónuszfeladat**: A tovább és vissza gombok ne álljanak meg a lista elején/végén, hanem az utolsó elemről a tovább gomb segítségével lehessen átugrani az elsőre, a vissza gombbal az első elemről pedig az utolsóra.

## 8. Feladat

Készíts egy React alkalmazást, amely meg tudja jeleníteni a következő tömb által leírt bejegyzéseket:

```javascript
[
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
        userId: 1,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
        userId: 2,
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
        userId: 2,
        id: 14,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    },
    {
        userId: 2,
        id: 15,
        title: "eveniet quod temporibus",
        body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
    {
        userId: 2,
        id: 16,
        title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    },
    {
        userId: 2,
        id: 17,
        title: "fugit voluptas sed molestias voluptatem provident",
        body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    },
    {
        userId: 2,
        id: 18,
        title: "voluptate et itaque vero tempora molestiae",
        body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    },
    {
        userId: 2,
        id: 19,
        title: "adipisci placeat illum aut reiciendis qui",
        body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    },
];
```

## 9. Feladat

Az előző feladatot egészítsd ki úgy, hogy legyen a Betöltés feliratú gomb, amit ha megnyomunk akkor a tömb helyett letöltjük az adatokat a "https://jsonplaceholder.typicode.com/posts" URL-ről!
