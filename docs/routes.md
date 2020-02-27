<a name="top"></a>
# startup-grant-database-be v1.0.0

The Backend for the Founder Grants app

- [Mail](#mail)
	- [Sends an email to a user in plain text](#sends-an-email-to-a-user-in-plain-text)
	- [Sends an email to a user HTML Markup](#sends-an-email-to-a-user-html-markup)
	- [Sends a newsletter to all registered users](#sends-a-newsletter-to-all-registered-users)
	


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
Sample-Request:

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

