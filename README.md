# StudentDabaseServer

REST API for accessing Student database

## Entry Points

### Get Students

`GET /Student/:id?name=??`

Paramaters:
- id: if present, returns the student with the corresponding id
- name: if present and id is missing, returns all the students with a name that contains the given string
- If no parameters are present, return all the students

### Add Student

`POST /Student/`

Inserts a student according to the body of the request.

Request Body (may be null):
- fullName (string): Full name of student
- course (string): Course that student is taking
- year (number): Students current year in the school

### Edit Student

`PUT /Student/:id`

Edits an already existing student according to the body of the request

Parameters:
- id: ID of the student to edit

Request Body (may be null):
- fullName (string): Full name of student
- course (string): Course that student is taking
- year (number): Students current year in the school

### Delete Student

`DELETE /Student/:id`

Deletes a student from the database

Parameters:
- id: ID of the student to delete

## Main Classes

### Student Model

`/models/Student.js`

Executes the queries corresponding to the given requests

### Student Routes

`/routes/Student.js`

Sets the routes for the REST API