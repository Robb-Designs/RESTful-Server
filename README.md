# Movie Finder API

A RESTful backend API built with Node.js and Express.js that allows users to search for movies and retrieve detailed movie information using the OMDb API.

This project demonstrates core backend development concepts including routing, controllers, external API integration, environment variables, error handling, and RESTful API architecture.

---

## Features

- Search for movies by title
- Retrieve detailed movie information by IMDb ID
- RESTful API architecture
- Modular Express application structure
- External API integration with Axios
- Secure API key management using dotenv
- Input validation and error handling
- JSON API responses

---

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv
- OMDb API

---

## Project Structure

```text
RESTful-Server/
│
├── controllers/
│   └── movieController.js
│
├── routes/
│   └── movieRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---



## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3001
OMDB_API_KEY=your_api_key_here
```

Get a free API key from https://www.omdbapi.com/apikey.aspx

---



---

## API Endpoints

### Search Movies

**Endpoint**

```http
GET /api/search?title=Batman
```

**Example Request**

```text
http://localhost:3001/api/search?title=Batman
```

### Get Movie Details

**Endpoint**

```http
GET /api/movies/:id
```

**Example Request**

```text
http://localhost:3001/api/movies/tt0372784
```

---

## Error Handling

The API includes validation and error handling for:

- Missing query parameters
- Missing route parameters
- Invalid API requests
- External API failures
- Network/server issues

**Example Error Response**

```json
{
  "error": "Title query parameter is required"
}
```

---
