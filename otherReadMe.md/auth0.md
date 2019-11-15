## RABC

All users will be authenticated with auth0.  

When a route is open to all users that log in, place the middleware.js in front of it. 
When a route is protected by a higer user role (e.g. Moderator, Admin) you must add the permissions to the route in auth0 and then use the jwtAuthz function to add the permission
see this link on how to format parameters etc> https://github.com/auth0/express-jwt-authz

Other links:

https://auth0.com/docs/architecture-scenarios/server-api/api-implementation-nodejs

https://auth0.com/docs/api/management/v2

https://auth0.com/docs/videos/get-started/01-architecture-your-tenant
