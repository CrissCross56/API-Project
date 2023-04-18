# API-Project

## The Smith Family API
The Rick and Morty API is an API that returns information from the hit show Rick and Morty. The information can be anything ranging from locations in the show, to characters and their associated information, all the way to the episodes of the show, and what appeared in them. The API I made from this takes info from the Rick and Morty API, and gives out info about the first 5 characters from the Rick and Morty API, The Smith family. The link to my API will looki like this https://api-project-production-279d.up.railway.app/residents. This will return my API and all its information, which looks like:
<img width="1005" alt="getRequestAllp1" src="https://user-images.githubusercontent.com/31426873/232691514-a27a8af8-8093-472f-9ab0-bdf04dcc8e87.png">
<img width="979" alt="getRequestAllp2" src="https://user-images.githubusercontent.com/31426873/232691581-265c8b61-1a7b-49ef-879e-f93ec5feeb3b.png">


## More CRUD Functionality
To use more of this API's functionality, use an API platform (i.e. Postman) to update, create, and delete Residents in this API.
### Get a Specific Resident from the API
You can use a residents generated id to make a GET request for a corresponding member from the Smith Family. The path to request that would look like this: https://api-project-production-279d.up.railway.app/residents/643c54741388e2f354bae0be

Which returns this
<img width="952" alt="Screenshot 2023-04-18 at 2 49 06 AM" src="https://user-images.githubusercontent.com/31426873/232697367-036abc08-b3ec-488e-a190-4ab0c1347a99.png">


### Update a Specific Resident from the API
Using an API platform you can update a resident by using a PUT request to the residents API like so
<img width="899" alt="putImage" src="https://user-images.githubusercontent.com/31426873/232699737-c0f35dec-8ad7-41d7-b173-d0aacf9c135e.png">

### How to Add My Own Resident
You can add your own addition to the Residents API with a POST request to https://api-project-production-279d.up.railway.app/residents and it would look like this with
<img width="873" alt="PostRequestPostman" src="https://user-images.githubusercontent.com/31426873/232699857-5a5e2ede-f8d6-4a5b-8ecf-98605032c1b3.png">
<img width="394" alt="PostRequestResult" src="https://user-images.githubusercontent.com/31426873/232699884-9c3c81af-0ad4-4c68-8a2d-462fa5a4816f.png">


### Delete a Resident
You can delete a Resident with a DELETE request which requires a path to the specific Resident you wish to delete using their Object ID, which looks like this
<img width="895" alt="deleteScreenshot" src="https://user-images.githubusercontent.com/31426873/232699935-f3fedca6-ab5a-4489-9ca5-81d626401d5f.png">
