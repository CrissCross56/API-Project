# API-Project

## The Smith Family API
The Rick and Morty API is an API that returns information from the hit show Rick and Morty. The information can be anything ranging from locations in the show, to characters and their associated information, all the way to the episodes of the show, and what appeared in them. The API I made from this takes info from the Rick and Morty API, and gives out info about the first 5 characters from the Rick and Morty API, The Smith family. The link to my API will looki like this https://api-project-production-279d.up.railway.app/residents. This will return my API and all its information, which looks like:


## More CRUD Functionality
To use more of this API's functionality, use an API platform (i.e. Postman) to update, create, and delete Residents in this API.
### Get a Specific Resident from the API
You can use a residents generated id to make a GET request for a corresponding member from the Smith Family. The path to request that would look like this: https://api-project-production-279d.up.railway.app/residents/643c54741388e2f354bae0be

Which returns this

### Update a Specific Resident from the API
Using an API platform you can update a resident by using a PUT request to the residents API like so
### How to Add My Own Resident
You can add your own addition to the Residents API with a POST request to https://api-project-production-279d.up.railway.app/residents and it would look like this with


### Delete a Resident
You can delete a Resident with a DELETE request which requires a path to the specific Resident you wish to delete using their Object ID, which looks like this