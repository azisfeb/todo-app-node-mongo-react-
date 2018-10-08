# TODO-LIST-APP
### (node, mongo, & react)

1. need install:
- mongodb

2. setting .env
3. npm install

4. run the apps http://localhost:4000


## API Endpoint
|  Method  | Endpoint              | Description                 | Data                            |
|----------|-----------------------|-----------------------------|---------------------------------|
| GET      | api/todos             | list of todos               | [{}, {}, {}]                    |
| GET      | api/todos/:id         | detail of todo              | {}                              |
| POST     | api/todos             | create new todo             | {"type": "POST", "status":""}   |
| PUT      | api/todos/:id         | Update a todo               | {"type": "PUT", "status":""}    |
| DELETE   | api/todos/:id         | Delete a todo               | {"type": "DELETE", "status":""} |