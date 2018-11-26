# Basic NodeJS REST API test for Edge by Diego Ayala

##Overview

Test of a basic REST API made in NodeJS and SQLite for managing records of people ("collaborators").

## Requirements :

1. NodeJS [ https://nodejs.org/en/ ]: the runtime environment to run and test the API
2. NPM: comes installed with NodeJS
3. Postman [ https://www.getpostman.com/ ] for testing the API
4. (Optional) Git [ https://git-scm.com/ ] for cloning this repository

## Installation :

1. Download this repository and extract its files to a folder of your liking. Access that folder using the terminal/command prompt. 
   -- You can also clone it using Git : `git clone https://github.com/diegoplus/EdgeRESTTest.git`  
2. Install the required dependencies :  `npm install`
  The following dependencies will be installed:

	  - Body-parser
	  - Ejs
	  - Express
	  - SQLite
	  - Bluebird
	  - swagger-ui-express

Note: you don't need to set up any database, the API will take care of that the first time you run it.


## Testing the API :

1. Once the API is installed, start the server with `node server.js`

2. Launch Postman and connect to the API at: GET `http://localhost:3000/EdgeREST/collaborators` -- You will get a 404 error because there are no records yet.

3. To add a new record ("collaborator"): At the same URL, change the method to 'POST', then click in 'Body' and select 'x-www-form-urlencoded'. Create the following keys:

	firstName
	lastName
	phone

Give each one of them any appropriate values of your liking (e.g. firstName = Christian, lastName = Benitez, phone = 123456).

Finally, click 'Send'. You should get a '201 Created' response.

4. For listing, change the method to 'GET' and click 'Send'. You should get a '200 OK' status response

5. For editing: change the method to PUT then pass the id in the URL (e.g. http://localhost:3000/EdgeREST/collaborators/1) and pass the keys with their new values (firstName, lastName, phone). Click on 'Send' to execute. You should get a '201 created' response.

6. Deleting: pass the desired id in the url (e.g. http://localhost:3000/EdgeREST/collaborators/1), change the method to 'DELETE' then click on 'Send'. You should get a 201 response.

## Credits

- Diego Ayala [ https://github.com/diegoplus ] with help of various tutorials and examples around the web.

## License

This project uses the [LGPL v3 License](https://www.gnu.org/licenses/lgpl-3.0.en.html) (See the LICENSE file in this repository).