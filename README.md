# nodetask
Node.js task - chat backend

List of supported routes:

*/api/user/_id
All CRUD operations for the route are supported. The route /api/user supports GET verb and returns the list of all users.
The data is returned in the following format:

EXAMPLE:

    {
        "_id": "5b48bb87480c1836dc6b9f9f",
        "name": "Cat",
        "email": "cat@gmail.com",
        "age": 2,
        "__v": 0
    }


*/api/message/_id
All CRUD operations for the route are supported.The data is returned in the following format:

EXAMPLE:

    {
        "_id": "5b48bb87480c1836dc6b9f9f",
        "name": "Cat",
        "email": "cat@gmail.com",
        "age": 2,
        "__v": 0
    } 
*/api/communicators/_id
The route supports GET verb and returns the list of all communicators of the user with given _id.
 
