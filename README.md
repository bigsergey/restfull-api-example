# restfull-api-example


```json
{
  "swagger": "2.0",
  "info": {
    "description": "This is a simple Rental Service server.",
    "version": "0.0.1",
    "title": "Swagger Rental Service",
    "contact": {
      "name": "bolszow@gmail.com"
    },
    "license": {
      "name": "MIT",
      "url": "http://opensource.org/licenses/MIT"
    }
  },
  "basePath": "/api",
  "schemes": [
    "http"
  ],
  "paths": {
    "/movies": {
      "post": {
        "tags": [
          "movie"
        ],
        "summary": "Add a new movie to the Rental Service",
        "description": "",
        "operationId": "addMovie",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Movie object to add to the Rental Service",
            "required": true,
            "schema": {
              "$ref": "#/definitions/movie"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Movie response",
            "schema": {
              "$ref": "#/definitions/movie"
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      },
      "put": {
        "tags": [
          "movie"
        ],
        "summary": "Update existing movie",
        "description": "",
        "operationId": "updateMovie",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Movie object to update existing movie",
            "required": true,
            "schema": {
              "$ref": "#/definitions/movie"
            }
          }
        ],
        "responses": {
          "404": {
            "description": "Movie not found"
          },
          "405": {
            "description": "Validation exception"
          }
        }
      },
      "get": {
        "description": "Returns all movies from the Rental Service",
        "operationId": "findMovies",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "tags",
            "in": "query",
            "description": "tags to filter by",
            "required": false,
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "csv"
          },
          {
            "name": "limit",
            "in": "query",
            "description": "maximum number of results to return",
            "required": false,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "movie response",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/movie"
              }
            }
          }
        }
      }
    },
    "/movies/{movieId}": {
      "get": {
        "tags": [
          "movie"
        ],
        "summary": "Find movie by ID",
        "description": "",
        "operationId": "getMovieById",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "movieId",
            "description": "ID of movie that needs to be fetched",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/movie"
            }
          },
          "404": {
            "description": "Movie not found"
          }
        }
      },
      "put": {
        "tags": [
          "movie"
        ],
        "summary": "Updates a movie in the store with form data",
        "description": "",
        "operationId": "updateMovieWithForm",
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "movieId",
            "description": "Id of movie what needs to be updated",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "formData",
            "name": "title",
            "description": "Updated title of the movie",
            "required": true,
            "type": "string"
          },
          {
            "in": "formData",
            "name": "status",
            "description": "Updated status of the movie",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/movie"
            }
          },
          "405": {
            "description": "Invalid input"
          }
        }
      },
      "delete": {
        "summary": "Delete a movie",
        "description": "",
        "operationId": "deleteMovie",
        "parameters": [
          {
            "name": "movieId",
            "in": "path",
            "description": "Id of movie to delete",
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Invalid movie value"
          }
        }
      }
    },
    "/users": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Create user",
        "description": "",
        "operationId": "createUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Create user object",
            "required": false,
            "schema": {
              "$ref": "#/definitions/user"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    },
    "/users/{username}": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Get user by name",
        "description": "",
        "operationId": "getUserByName",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "username",
            "description": "The name that to be fetchd",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "$ref": "#/definitions/user"
            }
          },
          "400": {
            "description": "Invalid username suppleid"
          },
          "404": {
            "description": "User not found"
          }
        }
      },
      "put": {
        "tags": [
          "user"
        ],
        "summary": "Update user",
        "description": "",
        "operationId": "updateUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "username",
            "description": "name that need to be updated",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "body",
            "description": "Updated user object",
            "required": false,
            "schema": {
              "$ref": "#/definitions/user"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User updated"
          },
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        }
      },
      "delete": {
        "tags": [
          "user"
        ],
        "summary": "Delete user",
        "operationId": "deleteUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "username",
            "description": "The name that needs to be deleted",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "User deleted"
          },
          "400": {
            "description": "Invalid username supplied"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "title": {
          "type": "string"
        }
      }
    },
    "movie": {
      "type": "object",
      "required": [
        "title"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "categories": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Category"
          }
        },
        "title": {
          "type": "string"
        },
        "posterUrls": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "user": {
      "type": "object",
      "required": [
        "username",
        "firstName",
        "lastName"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "username": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "movies": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/movie"
          }
        }
      }
    }
  }
}
```
