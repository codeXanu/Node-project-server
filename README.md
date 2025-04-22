# Wild Horizons

A Node.js API server providing a dataset of the planet's most interesting places.

## Overview

Wild Horizons is a RESTful API that offers information about famous destinations around the world. The server provides endpoints to access location data filtered by various parameters including continent and country.

## Live Demo

The API is deployed and accessible at:
[https://node-project-server-7eps.onrender.com/api](https://node-project-server-7eps.onrender.com/api)

## API Endpoints

### Get All Destinations
```
GET /api
```
### Filter by Continent
```
GET /api?continent=europe
```

### Filter by Country
```
GET /api?country=france
```
## Installation

Follow these steps to set up the project locally:

1. Clone the repository: git clone [https://github.com/your-username/wild-horizons.git](https://github.com/your-username/wild-horizons.git)
2.  Navigate to the project directory:   cd wild-horizons
3. Install dependencies:
 ``` 
npm install
```
4. Start the server:
 ```
 npm start
```


## Technologies Used

- Node.js
- Native HTTP module
- JavaScript modules (ESM)

## Contributing

Contributions are most welcome.
## License 
This project is licensed under the ISC License - see the package.json file for details. 
## Author 
[codexAnuj](https://github.com/codexanu)