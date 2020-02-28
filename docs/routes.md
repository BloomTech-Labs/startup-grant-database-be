<a name="top"></a>
# startup-grant-database-be v1.7.0

The backend for our Founder Grants app

- [Mail](#mail)
	- [Sends an email to a user in plain text](#sends-an-email-to-a-user-in-plain-text)
	- [Sends an email to a user HTML Markup](#sends-an-email-to-a-user-html-markup)
	- [Sends a newsletter to all registered users](#sends-a-newsletter-to-all-registered-users)
	
- [Suggestion](#suggestion)
	- [Adds a new Suggestion](#adds-a-new-suggestion)
	- [Retrieves all the suggestion with the provided Grant Id](#retrieves-all-the-suggestion-with-the-provided-grant-id)
	- [Gets a suggestion by Suggestion Id](#gets-a-suggestion-by-suggestion-id)
	


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

### Error Response

Error-Response:

```
{
  "message": "grant_id, subject, and suggestion is required."
}
```
## <a name='sends-a-newsletter-to-all-registered-users'></a> Sends a newsletter to all registered users
[Back to top](#top)

<p>Token, Moderator</p>

	POST /api/moderator/newsletter





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  bcc | String[] | <p>Email addresses in an array format</p>|
|  subject | String | <p>Email subject</p>|
|  html | String | <p>Email Body using Markup</p>|

### Param Examples

(json)
Sample-Request

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
