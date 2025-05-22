# School Management API

## Overview
This API allows you to manage school data, including adding new schools and retrieving schools sorted by proximity to a specified location. It is built using **Node.js**, **Express.js**, and **MySQL**.

## Features
- **Add School**: Allows adding a new school with name, address, and geographical location (latitude & longitude).
- **List Schools**: Retrieves a list of schools sorted by proximity to a specified latitude and longitude.

## API Endpoints

### 1. **POST /addSchool**
This endpoint is used to add a new school to the database.

#### Request
- **URL**: `/addSchool`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
  
#### Request Body
```json
{
  "name": "Greenwood High",
  "address": "456 School Lane",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```

### 2. **GET /listSchools**
This endpoint is used to retrieve schools sorted by proximity to a specified location

#### Request
- **URL**: `/listSchools`
- **Method**: `GET`
- **Query Parameters**:
  -`latitude (required): Your current latitude (float)`
  -`longitude (required): Your current longitude (float)`