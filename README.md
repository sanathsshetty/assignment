# SL-1stAssign

//Registration
Method: POST
URL: http://localhost:3737/auth/register
Body: raw (JSON)
{
  "username": "roshi",
  "password": "roshi37"
}
Response: 
{
    "message": "Registration successful"
}

======================================================================================

//Login
Method: POST
URL: http://localhost:3737/auth/login
Body: raw (JSON)
{
  "username": "roshi",
  "password": "roshi37"
}
Response:
{
    "token": "417ghv"
}
*If wrong username or password is written then :*
Body: raw (JSON)
{
  "username": "roshi",
  "password": "roshi7"
}
Response: 
{
    "message": "Invalid username or password"
}

================================================================================

//Creating a Blog
Method: POST
URL: http://localhost:3737/blogs
Body: raw (JSON)
{
  "title": "API",
  "content": "This is a new blog post about API!",
  "authorId": 1
}
Response: 
{
    "id": 1,
    "title": "API",
    "content": "This is a new blog post about API!",
    "authorId": 1
}

*Creating another blog with authorid 2*
Body: raw (JSON)
{
  "title": "NodeJS",
  "content": "This is a new blog post about NodeJS!",
  "authorId": 2
}
Response: 
{
    "id": 2,
    "title": "NodeJS",
    "content": "This is a new blog post about NodeJS!",
    "authorId": 2
}


===============================================================================

//Retrive blog using Authorid
Method: GET
URL: http://localhost:3737/blogs/2
Response:
{
    "id": 2,
    "title": "NodeJS",
    "content": "This is a new blog post about NodeJS!",
    "authorId": 2
}
*if we have created more blogs with same authorid, then all the blogs of that author will be displayed *
[
    {
        "id": 2,
        "title": "API",
        "content": "This is a new blog post about API!",
        "authorId": 2
    },
    {
        "id": 3,
        "title": "NodeJS",
        "content": "This is a new blog post about NodeJS!",
        "authorId": 2
    },
    {
        "id": 5,
        "title": "NodeJS",
        "content": "This is a new blog post about NodeJS!",
        "authorId": 2
    }
]

=========================================================================================

//Retrieving all blogs
Method: GET
URL: http://localhost:3737/blogs
Response:
[
    {
        "id": 1,
        "title": "API",
        "content": "This is a new blog post about API!",
        "authorId": 1
    },
    {
        "id": 2,
        "title": "API",
        "content": "This is a new blog post about API!",
        "authorId": 2
    },
    {
        "id": 3,
        "title": "NodeJS",
        "content": "This is a new blog post about NodeJS!",
        "authorId": 2
    },
    {
        "id": 4,
        "title": "API",
        "content": "This is a new blog post about API!",
        "authorId": 1
    },
    {
        "id": 5,
        "title": "NodeJS",
        "content": "This is a new blog post about NodeJS!",
        "authorId": 2
    }
]
*********************************************************************************************
