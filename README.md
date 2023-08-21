# Admin Dashboard

A simple admin dashboard where you can login with username and password retrieving a bearer token from the API.

Books are fetched from API. You need to authenticate first. Username and password is admin admin. Crud operations and searching book by a name are available.
Features like date & time and dark mode are included too.

Backend/API Setup
1. Download the mock server [JSON definition file](https://s3.eu-central-1.amazonaws.com/careers.anevis.solutions/application.json)
2. Setup Mockoon mock server
a) Using Docker
docker run -d --rm \
--mount type=bind,source=$PWD/application.json,target=/data,readonly -p 8080:8080 \
--name mockoon mockoon/cli:latest -d data -p 8080
b) Download a Mockoon executable and open the file
3. The server should now be running on localhost on port 8080

You should start the app with `npm start` command after you have initially installed the npm packages with `npm install`

# Technologies used
- React and TypeScript
- Vite
- Zustand (state management)
- Zod (form validator)
- React Hook form
- TailwindCSS
- React Icons
- React router dom v6.12
