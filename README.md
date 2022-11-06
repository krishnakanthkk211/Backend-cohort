# TOPIC: Authentication

## Authentication with JWT
- Token generation
- Token verification

*Note:* Remember that authentication means validating the identity of a user. Both token generation and verification together implement authentication. 
Think of this like getting an ID card the first day of your college and then showing that to a guard seated outside your college's campus gate in future. By showing them this token you are confirming your identity to them. Only a legitimate(valid) student who has taken the admission can own an official ID card.

## Assignment
- For this assignment you have to create a new branch - assignment/auth-1
- Your user document should look like this
```
 	{
    "_id" : ObjectId("6226e3d2b98f22b349ca58be"),
    "firstName" : "Sabiha",
    "lastName" : "Khan",
    "mobile" : "9898909087",
    "emailId" : "sk@gmail.com",
    "password" : "password123",
    "gender" : "female",
	"isDeleted": false, //default value is false 
    "age" : 12,
    "createdAt" : ISODate("2022-03-08T05:04:18.737Z"),
    "updatedAt" : ISODate("2022-03-08T05:04:18.737Z"),
    "__v" : 0
}
```


- Write a **POST api /users** to register a user from the user details in request body. 
- Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
On successful login, generate a JWT token and return it in response body. Example 
```
{
    status: true,
    data: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    }
 }
```
- Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
If present, check that the token is valid.
- Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
- Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
- Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
- Add this middleware at route level in the routes where applicable.



//You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
    // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
  // The same secret will be used to decode tokens 
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself

  // Decoding requires the secret again. 
  // A token can only be decoded successfully if the same secret was used to create(sign) that token.
  // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.