# CRUD-api

## Setup and Running
- Use `node 18.x` or higher.
- Clone this repo: `$ git clone https://github.com/strei-foxflashbacks/CRUD-api`.
- Go to downloaded folder: `$ cd CRUD-api`.
- Install dependencies: `$ npm install`.
- Start server in development mode: `$ npm start:dev`.
- Start server in production mode: `$ npm start:prod`.
- Now you can send requests to the address: `http://127.0.0.1:3000` or `http://localhost:3000`.

## Usage

**GET Root**
----
Returns plain text data from root path.

* **URL**

    `/`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'text/plain`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:** <br />
    `What are you waiting for? Choose a route!`

* **Error Response**

    None

**GET Users**
----
Returns json data of users database.

* **URL**

    `/api/users`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    [
      {
        "id": "string",
        "username": "string",
        "age": "number",
        "hobbies": ["string"]
      }
    ]
    ```

* **Error Response**

    **Code:** 500 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `Something went wrong from the server 🤔`

**GET User**
----
Returns json data of specified user by id.

* **URL**

    `/api/users/:id`

* **Method**

    `GET`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string",
      "username": "string",
      "age": "number",
      "hobbies": ["string"]
    }
    ```

* **Error Response**

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `No such user! 😠`

    **Code:** 500 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `Something went wrong from the server 🤔`

**POST User**
----
Adds a new user to database and returns json data of it.

* **URL**

    `/api/users`

* **Method**

    `POST`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    None

* **Data Params**

    ```JSON
    {
      "username": "string",
      "age": "number",
      "hobbies": ["string"]
    }
    ```

* **Sucess Response**

    **Code:** 201 <br />
    **Content:**
    ```JSON
    {
      "id": "string",
      "username": "string",
      "age": "number",
      "hobbies": ["string"]
    }
    ```

* **Error Response**

    **Code:** 500 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `Something went wrong from the server 🤔`

**Update User**
----
Updates a user specified by id and returns data of it.

* **URL**

    `/api/users/:id`

* **Method**

    `PUT`

* **Headers**

    `Content-Type': 'application/json`

* **URL Params**

    `:id`

* **Data Params**

    ```JSON
    {
      "username": "string",
      "age": "number",
      "hobbies": ["string"]
    }
    ```

* **Sucess Response**

    **Code:** 200 OK <br />
    **Content:**
    ```JSON
    {
      "id": "string",
      "username": "string",
      "age": "number",
      "hobbies": ["string"]
    }
    ```

* **Error Response**

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `No such user! 😠`

    **Code:** 500 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `Something went wrong from the server 🤔`

**DELETE User**
----
Deletes a user specified by id and returns success confirmation.

* **URL**

    `/api/users/:id`

* **Method**

    `DELETE`

* **Headers**

    `Content-Type': 'plain/text`

* **URL Params**

    `:id`

* **Data Params**

    None

* **Sucess Response**

    **Code:** 200 OK <br />
    **Headers**

    `Content-Type': 'text/plain`
    **Content:**

    `User #{id} deleted`

* **Error Response**

    **Code:** 404 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `No such user! 😠`

    **Code:** 500 <br />
    **Headers**

    `Content-Type': 'text/plain`

    **Content:** <br />
    `Something went wrong from the server 🤔`
