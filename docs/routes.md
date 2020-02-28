<a name="top"></a>
# startup-grant-database-be v1.7.0

The backend for our Founder Grants app

- [/home/don/Desktop/Labs/startup-grant-database-be/controllers/suggestions.controller.js](#/home/don/desktop/labs/startup-grant-database-be/controllers/suggestions.controller.js)
	- [](#)
	
- [Moderator](#moderator)
	- [Sends a newsletter to all registered users](#sends-a-newsletter-to-all-registered-users)
	
- [Registered_User](#registered_user)
	- [Retrieves all the suggestion with the provided Grant Id](#retrieves-all-the-suggestion-with-the-provided-grant-id)
	- [Sends an email to a user in plain text](#sends-an-email-to-a-user-in-plain-text)
	- [Sends an email to a user HTML Markup](#sends-an-email-to-a-user-html-markup)
	


# <a name='/home/don/desktop/labs/startup-grant-database-be/controllers/suggestions.controller.js'></a> /home/don/Desktop/Labs/startup-grant-database-be/controllers/suggestions.controller.js

## <a name=''></a> 
[Back to top](#top)



	GET /api/grants







# <a name='moderator'></a> Moderator

## <a name='sends-a-newsletter-to-all-registered-users'></a> Sends a newsletter to all registered users
[Back to top](#top)

<p>Sends a newsletter out to Registered Users</p>

	POST /api/moderator/newsletter





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  bcc | String[] | <p>Email addresses in an array format</p>|
|  subject | String | <p>Email subject</p>|
|  html | String | <p>Email Body using Markup</p>|

### Param Examples

(json)
Sample-Request:Registered User

```
{
  "bcc": ["test@gmail.com", "test2@gmail.com"],
  "subject": "Test Email",
  "html": "<h1>Hello Founder Grants</h1>"
}
```

### Success Response

Success-Response:

```
{
  "message": "Newsletter was sent successfully"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Success | json | <p>Message</p>|

# <a name='registered_user'></a> Registered_User

## <a name='retrieves-all-the-suggestion-with-the-provided-grant-id'></a> Retrieves all the suggestion with the provided Grant Id
[Back to top](#top)

<p>Retrieves all the suggestion with the provided Grant Id</p>

	GET /api/grants/:id/suggestions





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Integer | <p>The Grant Id</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Suggestions | json | <p>An Array of Suggestions based on the Grant Id</p>|

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

## <a name='sends-an-email-to-a-user-html-markup'></a> Sends an email to a user HTML Markup
[Back to top](#top)

<p>Sends an email to a specified user</p>

	POST /api/mail/individual/web





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  to | String | <p>Email address to the user</p>|
|  subject | String | <p>Email subject</p>|
|  html | String | <p>Email Body using Markup</p>|

### Param Examples

(json)
Sample-Request:

```
{
  "to": "test@gmail.com",
  "subject": "Test Email",
  "html": "<h1>Hello Founder Grants</h1>"
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

