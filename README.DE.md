# Hier wirst du lernen wie du eine Express App erstellst, wie du eine Route für die App erstellst und wie du einen Community Endpunkt erstellst.

Da das ganze system noch in der Beta ist brauchst du momentan eine eigene Entwicklungsumgebung, die erstellen wir nun zusammen. Du kannst dir aber auch eine fertige bei uns herunterladen.

# Wie erstelle ich eine Express App?
Als erstes erstellen wir einen Project Ordner den wir `express-app` nennen!


Dann müssen wir die App erstellen und danach noch express installieren
```sh
npm init -y
npm install express
```

Als nächstes erstellen wir eine Hauptdatei und benennen sie `app.js`

in der `app.js` definieren wir nun alle Imports

```js
const express = require('express');
```
Danach müssen wir die App für Express definieren und der App einen Port geben

```js
const app = express();

app.listen(3000, () => console.info(`Listening on port 3000`));
```

Nun können wir zwischen der App und dem Start der App unsere Route anlegen
```js
app.get('/', async (req, res) => {
    res.send('hello world')
});
```

Falls es dich mehr Interessiert gehe doch auf https://expressjs.com/de

# Wie erstelle ich einen API Endpunkt der funktioniert?

Hier schauen wir uns an wie du eine Route erstellst und einen zufälligen Output bekommst.

Als erstes erstellen wir eine Datei mit den Möglichen Output’s

```json
[
    {
        "output": "Hi"
    },
    {
        "output": "Bye"
    },
    {
        "output": "OwO"
    }
]
```
Nun definieren wir in der App über der Route die Datei

```js
const output = require('./path/to/output.json');
```

das sollte nun wie folgt aussehen:
```js
const express = require('express');

const app = express();

const output = require('./output.json');

app.get('/', async (req, res) => {
    res.send('hello world')
});

app.listen(3000, () => console.info(`Listening on port 3000`));
```
Nun holen wir uns mit der Länge des Arrays der Datei einen Random output in der Route
```js
app.get('/', async (req, res) => {
    let randomOutput = output[Math.floor(Math.random() * output.length)];
    res.send(randomOutput);
});
```

Als letztes verbessern wir noch den Output das der Browser auch weis das es JSON ist und setzen deswegen einen Header

```js
res.header("Content-Type", "application/json");
```

Nun sind wir fertig, ich zeige dir noch das Endergebnis
```js
const express = require('express');

const app = express();

const output = require('./output.json');

app.get('/', async (req, res) => {
    let randomOutput = output[Math.floor(Math.random() * output.length)];
    res.header("Content-Type", "application/json");
    res.send(randomOutput);
});

app.listen(3000, () => console.info(`Listening on port 3000`));
```

Nun kannst du entweder immer die Route bearbeiten die du nun erstellt hast oder du kannst neue erstellen um weiter zu testen!

# Wie erstelle ich einen Community Endpoint für Evergene
Wenn du schon fleißig getestet hast wirst du Express langsam aber gut verstehen.

Erstmal erstellst du einen Ordner in deinem Projekt und benennst ihn so wie dein Username, in diesem Beispiel heisst der Ordner `newt`

In diesem Ordner erstellst du eine JavaScript Datei und benennst sie so wie dein Endpunkt heisst, in diesem Beispiel nennen wir die Datei `random.js`. Dafür benutzt du am besten unser vorgefertigtes [Template](https://github.com/EvergeneIO/community-endpoints/blob/main/template/template.js) und fügst alles dort ein.

Die datei sollte nun wie folgt aussehen:
```js
module.exports = {
    execute: async (req, res, endpoint, tools) => {
        res.header("Content-Type", "application/json");
        res.send({hello: "world"});
    }
}
```
Das System von uns ermöglicht es dir einen Ordner zu erstellen mit deinen Funktionen/Dateien etc der nicht für die API sichtbar ist

Diesen Ordner erstellen wir nun, der Ordner muss `inv` heissen
Nachdem du den Ordner erstellt hast kannst du dort deine `output.json` reinlegen.
Nun müssen wir die `output.json` noch definieren, dies machen wir über dem `module.exports`
```js
const output = require('./path/to/output.json');
```
Nun kannst von deiner Route, die wir vorher erstellt haben, den Inhalt kopieren und in `random.js` unter Execute einfügen

Wenn du bis jetzt alles Richtig gemacht hast sieht der Code nun wie folgt aus:
```js
const output = require('./inv/output.json');
module.exports = {
    execute: async (req, res, endpoint, tools) => {
        let randomOutput = output[Math.floor(Math.random() * output.length)];
        res.header("Content-Type", "application/json");
        res.send(randomOutput);
    }
}
```

# Wie stelle ich meinen Endpoint Online?
Da das ganze System momentan in der Beta ist muss alles manuell gemacht werden (von uns wie auch von euch).
Als erstes gehst du auf Github und Forkst unser [Repository](https://github.com/EvergeneIO/community-endpoints)

Da Klonst du dann am besten das Repository auf deinen PC und kopierst deinen gerade erstellten Ordner in das Root verzeichniss, wenn du dann soweit bist Pusht du das ganze auf dein Geforktes Repository und erstellst einen Pull Request.
