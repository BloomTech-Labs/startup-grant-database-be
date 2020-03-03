<a name="top"></a>
# startup-grant-database-be v1.7.0

The backend for our Founder Grants app

- [Grants](#grants)
	- [Add Grant](#add-grant)
	- [Get All Grants](#get-all-grants)
	- [Get Grant By Id](#get-grant-by-id)
	
- [Mail](#mail)
	- [Contact Form Endpoint](#contact-form-endpoint)
	- [Sends an email to a registered user](#sends-an-email-to-a-registered-user)
	
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
	


# <a name='grants'></a> Grants

## <a name='add-grant'></a> Add Grant
[Back to top](#top)

<p>Requires token</p>

	POST /api/grants

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  competition_name | String | <p>Competition Name</p>|
|  area_focus | String | <p>Area Focus</p>|
|  sponsoring_entity | String | <p>Sponsoring Entity</p>|
|  website | String | <p>Grant Website *Required</p>|
|  most_recent_application_due_date | Date | <p>Application Due Date</p>|
|  amount | Integer | <p>Grant Amount</p>|
|  amount_notes | String | <p>Grant Amount Notes</p>|
|  geographic_region | String | <p>Grant Geographic Region</p>|
|  target_entrepreneur_demographic | String | <p>Target Demographic</p>|
|  notes | String | <p>Grant Notes</p>|
|  early_stage_funding | Boolean | <p>Early Stage Funding</p>|
|  details_last_updated | Date | <p>Last Update of Grant</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  grant | json | <p>The newly created Grant</p>|

## <a name='get-all-grants'></a> Get All Grants
[Back to top](#top)

<p>Public</p>

	GET /api/grants






### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  grants | json | <p>An Array of all grants that have been reviewed</p>|

## <a name='get-grant-by-id'></a> Get Grant By Id
[Back to top](#top)

<p>Public</p>

	GET /api/grants/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | integer | <p>Grant Id</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  grant | json | <p>The grant with the provided id</p>|

### Error Response

Error-Response:

```
{
  "message": "The Grant with id:999 was not found."
}
```
# <a name='mail'></a> Mail

## <a name='contact-form-endpoint'></a> Contact Form Endpoint
[Back to top](#top)

<p>Contact From End Point</p>

	POST /api/mail/contact





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  from | String | <p>Email address to the user</p>|
|  subject | String | <p>Email subject</p>|
|  text | String | <p>Email Body</p>|

### Param Examples

(json)
Sample-Request:

```
{
  "from": "test@test.com"
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
## <a name='sends-an-email-to-a-registered-user'></a> Sends an email to a registered user
[Back to top](#top)

<p>Sends an email to a specified user</p>

	POST /api/mail/individual

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```




### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  roles | json | <p>Roles data from Auth0</p>|

## <a name='gets-all-users-from-auth0'></a> Gets All Users from Auth0
[Back to top](#top)

<p>requires token, moderator</p>

	GET /api/moderator/users

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```




### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  users | json | <p>All Users in Auth0</p>|

## <a name='gets-current-logged-in-user'></a> Gets current Logged in User
[Back to top](#top)

<p>requires token</p>

	GET /api/users/user

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```




### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  user | json | <p>Current logged in user</p>|

## <a name='promotes-an-user-to-moderator-with-provided-user-id'></a> Promotes an User to Moderator with Provided User ID
[Back to top](#top)

<p>Requires token, admin</p>

	POST /api/admin/moderator/:userId

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | String | <p>Users AccessToken from Auth0</p>|


### Header Examples

Sample-Header:

```
{
  "Content-Type": "application/json",
  "authorization": "Bearer token"
}
```



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

