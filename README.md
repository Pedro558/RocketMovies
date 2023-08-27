# 🚀 RocketMovies API
This is a RESTful API built in Node.js that allows the user to store notes about movies they've watched and add tags to categorize those notes.
You can create a user account, log in and out, add, view, update, and delete notes, and add and view tags.

## 🛠 Technologies used
- Node.js
- express.js
- Knex.js (ORM for SQLite database)
- SQLite3 (database)
- Bcrypt (password encryption)
- JWT (authentication)

## 🕹 How to use
To use this API, you need to have Node.js installed on your machine.

1. Clone the repository:
```
git clone https://github.com/Pedro558/RocketMovies.git
```
2. Access the project folder:
```
cd RocketMovies
```
3. Install project dependencies:
```
npm install
```
4. Run the migrations to create the database tables:
```
npx knex migrate:latest
```
5. Start the server:
```
npm start
```
6. Access the API at http://localhost:3333.

## 🌐 Endpoints
- **/users**
   - GET /: Returns all registered users in the application.
   - POST /: Registers a new user in the application.
   - PUT /:id : Updates the data of an existing user in the application.

- **/notes**
   - GET /: Returns all notes registered in the application.
   - GET /:id : Returns a specific note from its ID.
   - POST /:user_id : Registers a new note for a specific user.
   - PUT /:id : Updates the data of an existing note in the application.
   - DELETE /:id : Deletes an existing note in the application.

- **/tags**
   - GET /:user_id : Returns all tags registered by a specific user.
  
## 👨‍🏫 Final thoughts
This is a simple application that can be used as the basis for larger and more complex projects.
The adopted architecture (MVC) allows easy scalability and code maintenance.
I hope this application is useful for you and that it can help you to develop your own projects.

## 🦸‍♂️ Author
<p>
  <sub><strong>🌟 Pedro Afonso🌟</strong></sub>
</p>

>This project was developed with ❤️ by **[Pedro Afonso]
(https://github.com/Pedro558)**
