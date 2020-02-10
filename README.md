<!-- 🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements. -->

# API Documentation

[![Maintainability](https://api.codeclimate.com/v1/badges/b7f27605020c6b463059/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/startup-grant-database-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b7f27605020c6b463059/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/startup-grant-database-be/test_coverage)


#### 1️⃣ Backend delpoyed at [Heroku](https://dashboard.heroku.com/apps/labs16-grantly) <br>

## 1️⃣ Getting started

You will need:

- [Node.js](https://nodejs.org/en/download/)
- Package manager ([NPM](https://nodejs.org/en/download/) was used to build this project and will continued to be used for maintenance)
  - NPM is distributed with Node.js- which means that when you download Node.js, you automatically get NPM installed on your computer.

Once you have Node.js and NPM:

1. Fork and clone repo
2. Add an `.env` file at the root of folder. Add environment variables.
3. Run `npm install` to install the necessary node_modules.
4. Run `npm start` to start the application.

<!-- To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment -->

### Node.js

- Offers large number of free tools
- Exceptional speed and performance
- Works with JSON
- Maintains the same language throughout the project both on the client and server side

<!-- ### Backend framework goes here

🚫 Why did you choose this framework?

- Point One
- Point Two
- Point Three
- Point Four -->

## 2️⃣ Endpoints

#### Grant Routes

| Method | Endpoint                 | Access Control | Description                                    |
| ------ | ------------------------ | -------------- | ---------------------------------------------- |
| GET    | `/api/grants`            | all users      | Returns a list of all grants.                  |
| GET    | `/api/grants/:grantId`   | all users      | Returns information for a single grant.        |
| POST   | `/api/grants`            | all users      | Creates a new grant, for admin to approve      |
| POST   | `/api/grants/suggestion` | all users      | Posts a suggestion                             |
| GET    | `/api/admin`             | admin          | Returns all grants including their suggestions |
| PUT    | `/api/admin/:id`         | admin          | Edits an existing grant                        |
| DELETE | `/api/grants/:grantId`   | admin          | Deletes an existing grant.                     |
| GET    | `/api/admin`             | admin          | Returns all grants including their suggestions |

<!-- 🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

#### Organization Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/organizations/:orgId` | all users      | Returns the information for an organization. |
| PUT    | `/organizatoins/:orgId` | owners         | Modify an existing organization.             |
| DELETE | `/organizations/:orgId` | owners         | Delete an organization.                      |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/current`        | all users           | Returns info for the logged in user.               |
| GET    | `/users/org/:userId`    | owners, supervisors | Returns all users for an organization.             |
| GET    | `/users/:userId`        | owners, supervisors | Returns info for a single user.                    |
| POST   | `/users/register/owner` | none                | Creates a new user as owner of a new organization. |
| PUT    | `/users/:userId`        | owners, supervisors |                                                    |
| DELETE | `/users/:userId`        | owners, supervisors |                                                    | -->

# Data Model

<!-- 🚫This is just an example. Replace this with your data model -->

#### GRANTS

---

```
{
  id: UUID
  competition_name: STRING
  type: STRING
  area_focus: STRING
  sponsoring_entity: STRING
  website: STRING
  most_recent_application_due_date: DATE
  amount: INTEGER
  amount_notes: STRING
  geographic_region: STRING
  domain_areas: STRING [ 'Technology', 'Education', 'Finance' ]
  target_entrepreneur_demographic: STRING
  notes: STRING
  early_stage_funding: BOOLEAN
  is_reviewed: true,
          has_requests: false,
          details_last_updated: DATE
}
```

<!-- {
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
} -->
<!-- #### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
``` -->

## 2️⃣ Actions/Models

<!-- 🚫 This is an example, replace this with the actions that pertain to your backend -->

`getGrant()` -> Returns all grants

`getGrantById(id)` -> Returns a single grant by ID

`addGrant(grant)` -> Returns the created grant

`updateGrant(changes, id)` -> Update a grant by ID

`removeGrant(id)` -> Delete a grant by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

<!-- ### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426). -->

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/startup-grant-database-fe) for details on the frontend of our project.
