# AGOTAPI

## Introduction

Welcome on agotapi, a Game of Thrones API.

## Installation

### Local

Make sure git and node.js are installed on your computer. Then you can clone this repository :

```bash
git clone https://github.com/marceaudavid/agotapi.git
cd agotapi
```

Install the dependencies :

```bash
npm install
```

And launch the project :

```bash
node app.js --port=3000 --prettify=1
```

This command take two flags, port and prettify, port is used to defined the port on which the app is launched and prettify is used to set the number of space to prettify json.

If the database is empty you can populate it with the command below :

```bash
npm run pop
```

### Docker

To lauch this project with Docker, make sure Docker is installed and clone this repository. Then replace the MongoDB connection string in `mongo/db.js` :

```javascript
mongoose.connect("mongodb://mongo:27017/api");
```

Next you have to build the docker images :

```bash
docker-compose build
```

Finally you can run the container :

```bash
docker-compose up
```

## Usage

### Methods

This API allow `GET`, `POST`, `PUT` and `DELETE` request.

### Example

Let's start by performing a `GET` request on one particular ressource :

`https://agotapi.herokuapp.com/api/place/1`

Here is the response :

```json
{
  "_id": 1,
  "name": "Winterfell",
  "type": "Castle",
  "location": "The North",
  "rulers": "House Stark"
}
```

### Filters

You can filter the set of ressources returned with query parameters :

`https://agotapi.herokuapp.com/api/place/?type=Castle`

Muliples paramaters are also supported :

`https://agotapi.herokuapp.com/api/place/?type=Castle&name=Highgarden`

## Ressources

### Characters

The character ressources is a set of the most important characters of the show.

**URL :** `https://agotapi.herokuapp.com/api/character`

| URI endpoints        | Methods allowed        | Description                                                        |
| -------------------- | ---------------------- | ------------------------------------------------------------------ |
| `/api/character`     | `GET`, `POST`          | Get all characters or the added character                          |
| `/api/character/:id` | `GET`, `PUT`, `DELETE` | Get the one specific character, the updated one or the deleted one |

**Attributes :**

| Name       | Type     | Required | Description                                                                                     |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------------------- |
| `_id`      | _Number_ | True     | The character's id                                                                              |
| `name`     | _Number_ | True     | The character's firstname and lastname                                                          |
| `gender`   | _String_ | True     | The character's gender (male or female)                                                         |
| `born`     | _String_ | False    | The character's date of birth (BC : Before the Conquest, AC : After the Conquest)               |
| `origin`   | _String_ | False    | The character's place of birth                                                                  |
| `death`    | _String_ | False    | The character's date of deatch (null if the character is still alive)                           |
| `status`   | _String_ | True     | The character's status (alive, deceased or ressurected)                                         |
| `culture`  | _String_ | True     | The character's culture                                                                         |
| `religion` | _String_ | False    | The character's religion (null if unknown)                                                      |
| `titles`   | _Array_  | False    | An array of the character's titles (null if the character does not own titles)                  |
| `house`    | _String_ | False    | The character's house (null if the character is not noble)                                      |
| `father`   | _String_ | False    | The character's father (null if unknown)                                                        |
| `mother`   | _String_ | False    | The character's mother (null if unknown)                                                        |
| `spouse`   | _Array_  | False    | The character's spouse(s) (null if the character never married)                                 |
| `children` | _Array_  | False    | The character's children (null if the character does not have children)                         |
| `siblings` | _Array_  | False    | The character's sibling(s) (null if the character is only child or if the siblings are unknown) |
| `lovers`   | _Array_  | False    | The character's lover(s) (null if the character does not have lovers)                           |
| `seasons`  | _Array_  | True     | An array of season's number in which the character appeared                                     |
| `actor`    | _String_ | True     | The actor who played this character                                                             |

### Houses

The house ressources is a set of the most well-known houses of the game of thrones universe.

**URL :** `https://agotapi.herokuapp.com/api/house`

| URI endpoints    | Methods allowed        | Description                                                    |
| ---------------- | ---------------------- | -------------------------------------------------------------- |
| `/api/house`     | `GET`, `POST`          | Get all houses or the added house                              |
| `/api/house/:id` | `GET`, `PUT`, `DELETE` | Get the one specific house, the updated one or the deleted one |

**Attributes :**

| Name      | Type     | Required | Description                                                                |
| --------- | -------- | -------- | -------------------------------------------------------------------------- |
| `_id`     | _Number_ | True     | The house's id                                                             |
| `name`    | _String_ | True     | The house's name                                                           |
| `sigil`   | _String_ | True     | The house's heraldry description                                           |
| `words`   | _String_ | True     | The house's words (e.g "Winter is Coming")                                 |
| `seat`    | _String_ | True     | The house's traditional seat                                               |
| `region`  | _String_ | True     | The house's native region                                                  |
| `vassals` | _Array_  | False    | The house's traditionnal vassals (null if the house does not have vassals) |
| `founder` | _String_ | False    | The house's founder (null if unknown)                                      |

### Places

The place ressources is a set of the most well-known places of the game of thrones world.

**URL :** `https://agotapi.herokuapp.com/api/place`

| URI endpoints    | Methods allowed        | Description                                                    |
| ---------------- | ---------------------- | -------------------------------------------------------------- |
| `/api/place`     | `GET`, `POST`          | Get all places or the added place                              |
| `/api/place/:id` | `GET`, `PUT`, `DELETE` | Get the one specific place, the updated one or the deleted one |

**Attributes :**

| Name       | Type     | Required | Description                                   |
| ---------- | -------- | -------- | --------------------------------------------- |
| `_id`      | _Number_ | True     | The place's id                                |
| `name`     | _String_ | True     | The place's name                              |
| `type`     | _String_ | True     | The place's type (Castle, City or City-State) |
| `location` | _String_ | True     | The place's region                            |
| `ruler`    | _String_ | False    | The place's ruler (null if unknown)           |

### Quotes

The quote ressources is a set of the best quotes of the show's character.

**URL :** `https://agotapi.herokuapp.com/api/quote`

| URI endpoints           | Methods allowed        | Description                                                    |
| ----------------------- | ---------------------- | -------------------------------------------------------------- |
| `api/quote`             | `GET`, `POST`          | Get all places or the added place                              |
| `api/quote/:id`         | `GET`, `PUT`, `DELETE` | Get the one specific place, the updated one or the deleted one |
| `api/quote/random`      | `GET`                  | Get a random quote                                             |
| `api/quote/random/view` | `GET`                  | Get a random quote with a nice UI                              |

**Attributes :**

| Name      | Type     | Required | Description                        |
| --------- | -------- | -------- | ---------------------------------- |
| `_id`     | _Number_ | True     | The quote's id                     |
| `quote`   | _String_ | True     | The quote itself                   |
| `from`    | _String_ | True     | The character who says the quote   |
| `to`      | _String_ | False    | His interlocutor (null if unknown) |
| `season`  | _Number_ | True     | The quote's season                 |
| `episode` | _Number_ | True     | The quote's episode                |

## Test

You can test the request with Insomnia. The `insomnia.json` file already contains all the preconfigured request

## About

Game of Thrones and all associated names are copyrights owned by HBO Inc.

This API is specifically based on the television show.

All the data has been freely collected from open sources such as [Game of Thrones Wiki](https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki).
