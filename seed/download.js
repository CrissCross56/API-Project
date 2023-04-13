
import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';


fetch('https://rickandmortyapi.com/api/location/1')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./data.json", JSON.stringify(data)))
  .catch(error=> console.error(error))