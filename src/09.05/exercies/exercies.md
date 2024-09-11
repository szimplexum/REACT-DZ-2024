# Telepítés
Ha még nem tetted telepíts ezzel a kóddal `npm install react-router-dom`
## Navbar
1. Írj egy Navigation komponenst ami egy rendezetlen listát tartalmaz a lista elemei "Home", "Todos", "About"
2. Írj meg mindegyik elem megfelelőjének egy komonenst (A listán ne változtasd csak írd meg ezeket!) amik a  megfelelőjük nevét adják vissza és azon a néven futnak.
## App
1. írj egy app nevű komponenst ami 2 részből áljon a Navigation komponensből, és egy main tartalmi részből ami a többi komponens neve alatti linken elérhető. (ha az útvonal .../home akkor a home komponens, ha ../about akkor az about), helyezd rá ezeket a hivatkozásokat a Navigation lista elemeire.
## Todos
1. Módosísd a Todos komponenst úgy hogy több todo komponenst jelenít meg egy ilyen adatstruktúrából
```js
[
{id: 1, desription: "csináld meg", isCompleted: false},
{id: 2, desription: "csináld meg", isCompleted: false},
{id: 3, desription: "csináld meg", isCompleted: false},
{id: 4, desription: "csináld meg", isCompleted: false},
]
```
2. Módosísd a todo komponenseket hogy ha rákatintanak akkor csak az az egy todo foglalja be az oldalt (a navbar maradhat)

### Bónusz
Csinálj meg mindent hogy lehesen törölni és felvenni módosítani todokat.