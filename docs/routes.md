<a name="top"></a>
# startup-grant-database-be v1.7.0

The backend for our Founder Grants app

- [Mail](#mail)
	- [Sends an email to a user in plain text](#sends-an-email-to-a-user-in-plain-text)
	
- [Suggestion](#suggestion)
	- [Adds a new Suggestion](#adds-a-new-suggestion)
	- [Retrieves all the suggestion with the provided Grant Id](#retrieves-all-the-suggestion-with-the-provided-grant-id)
	- [Gets a suggestion by Suggestion Id](#gets-a-suggestion-by-suggestion-id)
	
- [Users](#users)
	- [Demotes an User with Provided User Id](#demotes-an-user-with-provided-user-id)
	- [Retrieves all Roles form Auth0](#retrieves-all-roles-form-auth0)
	- [Gets All Users from Auth0](#gets-all-users-from-auth0)
	- [Gets current Logged in User](#gets-current-logged-in-user)
	- [Promotes an User to Moderator with Provided User ID](#promotes-an-user-to-moderator-with-provided-user-id)
	- [Updates the User Information](#updates-the-user-information)
	


# <a name='mail'></a> Mail

## <a name='sends-an-email-to-a-user-in-plain-text'></a> Sends an email to a user in plain text
[Back to top](#top)

<p>Sends an email to a specified user</p>

	POST /api/mail/individual





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  to | String | <p>Email address to the user</p>|
|  subject | String | <p>Email subject</p>|
|  text | String | <p>Email Body</p>|

### Param Examples

(json)
Sample-Request:

```
{
  "to": "test@gmail.com",
  "subject": "Test Email",
  "text": "This is a test of the Founder Grants Email System.  This is only a test"
}
```

### Success Response

Success-Response:

```
{
  "message": "Mail has been sent successfully"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  message | json | <p>Success message</p>|

### Error Response

Error-Response:

```
{
  "message": "grant_id, subject, and suggestion is required."
}
```
# <a name='suggestion'></a> Suggestion

## <a name='adds-a-new-suggestion'></a> Adds a new Suggestion
[Back to top](#top)

<p>Requires Token</p>

	POST /api/grants/suggestion





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  grant_id | Integer | <p>The Grant Id your adding the suggestion for</p>|
|  subject | String | <p>The subject of the suggestion</p>|
|  suggestion | String | <p>The content of the suggestion</p>|

### Param Examples

(json)
Sample-Request:

```
{
  "grant_id": 20,
  "subject": "ApiDocs",
  "suggestion": "Write more documentation"
}
```

### Success Response

Success-Response:

```
{
  "id": 1,
  "grant_id": 20,
  "subject": "ApiDocs",
  "suggestion": "Write more documentation"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Suggestion | json | <p>Success Message</p>|

### Error Response

Error-Response:

```
{
  "message": "The Grant with id:999 was not found."
}
```
Error-Response:

```
{
  "message": "grant_id, subject, and suggestion is required."
}
```
## <a name='retrieves-all-the-suggestion-with-the-provided-grant-id'></a> Retrieves all the suggestion with the provided Grant Id
[Back to top](#top)

<p>Requires Token</p>

	GET /api/grants/:id/suggestions





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Integer | <p>The Grant Id</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Suggestions | json | <p>An Array of Suggestions based on the Grant Id</p>|

## <a name='gets-a-suggestion-by-suggestion-id'></a> Gets a suggestion by Suggestion Id
[Back to top](#top)

<p>Requires Token</p>

	GET /api/grants/suggestion/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Integer | <p>The Suggestion Id</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Suggestion | json | <p>Suggestion</p>|

### Error Response

Error-Response:

```
{
  "message": "Suggestion with id:1 was not found."
}
```
# <a name='users'></a> Users

## <a name='demotes-an-user-with-provided-user-id'></a> Demotes an User with Provided User Id
[Back to top](#top)

<p>Requires token, admin</p>

	DELETE /api/admin/moderator/:userId





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  userId | String | <p>The userId you want to promote</p>|
|  roleId | String | <p>The roleId you want to give the user</p>|

### Param Examples

(json)
Sample-Request

```
{
  "roleId": "Auth0 Role Id"
}
```



### Error Response

Error-Response:

```
{
  "message": "roleId is required"
}
```
## <a name='retrieves-all-roles-form-auth0'></a> Retrieves all Roles form Auth0
[Back to top](#top)

<p>Requires token, moderator</p>

	GET /api/moderator/roles






### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  roles | json | <p>Roles data from Auth0</p>|

## <a name='gets-all-users-from-auth0'></a> Gets All Users from Auth0
[Back to top](#top)

<p>requires token, moderator</p>

	GET /api/moderator/users






### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  users | json | <p>All Users in Auth0</p>|

## <a name='gets-current-logged-in-user'></a> Gets current Logged in User
[Back to top](#top)

<p>requires token</p>

	GET /api/users/user






### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  user | json | <p>Current logged in user</p>|

## <a name='promotes-an-user-to-moderator-with-provided-user-id'></a> Promotes an User to Moderator with Provided User ID
[Back to top](#top)

<p>Requires token, admin</p>

	POST /api/admin/moderator/:userId





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  userId | String | <p>The userId you want to promote</p>|
|  roleId | String | <p>The roleId you want to give the user</p>|

### Param Examples

(json)
Sample-Request

```
{
  "roleId": "Auth0 Role Id"
}
```



### Error Response

Error-Response:

```
{
  "message": "roleId is required"
}
```
## <a name='updates-the-user-information'></a> Updates the User Information
[Back to top](#top)

<p>requires token</p>

	PATCH /api/users/user





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  first_name | String | <p>User's First Name</p>|
|  last_name | String | <p>User's Last Name</p>|
|  about | String | <p>User's About Information</p>|
|  company | String | <p>User's Company</p>|
|  company_url | String | <p>User's Company URL</p>|
|  phone | String | <p>User's Phone Number</p>|
|  role | String | <p>User's Role</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  user_metadata | json | <p>User's MetaData update from Auth 0</p>|

