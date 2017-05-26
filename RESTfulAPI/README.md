This is a RESTful API example

GET api/v1/people
  return all people records

GET api/v1/people/:id
  return person with certain id

POST api/v1/people
  add person information to records

### How to run it

```bash
node server.js
```

get All people information: http://localhost:3000/api/v1/people


get certain person's information: http://localhost:3000/api/v1/people/1


add a new person: http://localhost:3000/, then submit relative information.
