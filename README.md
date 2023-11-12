# SportyConnect Website
A Website to connect sports enthusiasts with each other and with sports facilities.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```bash
    git clone https://github.com/alpha951/sports-connect-website-btp.git
    cd sports-connect-website-btp
```
1. Create a .env file same as the .env.example file and fill in the required details.
2. Run the following commands to start the server.
```bash
    npm install
    npm start
```

## API Endpoints
- [x] [POSTMAN Workspace Link](https://www.postman.com/avionics-astronomer-93868069/workspace/hobby-projects/collection/27853841-fda7f482-bc0c-4839-86d5-258af4fa2e53?action=share&creator=27853841) 

### /auth

#### 1.  <b>[POST] /auth/register </b>

```bash
    example : req.body 
    {
        "name": "player1",  #required
        "email": "p1@mail.com", #required
        "password": "player1@123", #required
        "gender": "Male", #required , enum = [Male, Female, Other]
        "state": "Rajasthan",
        "city": "Jaipur",
        "interests": ["Cricket", "Football"],
        "age": 21,
        "contactNo": "12345",
        "skillLevels": "Advanced"
    }
    response : jwt-token

```


#### 2. <b>[POST] /auth/login</b>
    
```bash
    example : req.body 
        email:p1@mail.com
        password:player1@123
    response : jwt-token
```

### /play

#### 1. <b>[POST] /play/create-event</b>

```bash
    req.headers[authorization] = jwt-token
    example : req.body
            {
            "time": "2023-11-13T12:30:00.000Z",
            "state": "Rajasthan",
            "city": "Jaipur",
            "interests": ["Cricket", "Football", "Badminton"],
            "skillLevels": "Advanced"
            }
    response : 
                {
                    "data": {
                        "time": "2023-11-13T12:30:00.000Z",
                        "state": "Rajasthan",
                        "city": "Jaipur",
                        "interests": [
                            "Cricket",
                            "Football",
                            "Badminton"
                        ],
                        "skillLevels": "Advanced",
                        "createdBy": "6550dd8ee54934227240a93c",
                        "_id": "6550dddce54934227240a942",
                        "createdAt": "2023-11-12T14:14:52.748Z",
                        "updatedAt": "2023-11-12T14:14:52.748Z",
                        "__v": 0
                    }
                }
```
#### 2. <b>[GET] /play/getplayers</b>
```bash
    req.headers[authorization] = jwt-token
    example : req.body
         {
            "city": "Jaipur",
            "state": "Rajasthan",
            "time": "2023-11-13T09:30:00.000Z"
        }
    response :
    {
        "data": [
            {
                "_id": "6550ddcbe54934227240a93e",
                "time": "2023-11-13T09:30:00.000Z",
                "state": "Rajasthan",
                "city": "Jaipur",
                "interests": [
                    "Cricket",
                    "Football",
                    "Badminton"
                ],
                "skillLevels": "Advanced",
                "createdBy": "6550dd8ee54934227240a93c",
                "createdAt": "2023-11-12T14:14:35.744Z",
                "updatedAt": "2023-11-12T14:14:35.744Z",
                "__v": 0
            },
            {
                "_id": "6550ddd5e54934227240a940",
                "time": "2023-11-13T10:30:00.000Z",
                "state": "Rajasthan",
                "city": "Jaipur",
                "interests": [
                    "Cricket",
                    "Football",
                    "Badminton"
                ],
                "skillLevels": "Advanced",
                "createdBy": "6550dd8ee54934227240a93c",
                "createdAt": "2023-11-12T14:14:45.756Z",
                "updatedAt": "2023-11-12T14:14:45.756Z",
                "__v": 0
            }
        ]
    }
```
#### 3.  <b>[PATCH]/play/editprofile</b>
```bash
    req.headers[authorization] = jwt-token
    example : req.body
        {
            "name": "player1",
            "email": "p1_new@mail.com",
        }
    response :
        {
            "data": {
                "_id": "6550c3428caab57739826338",
                "name": "player1_new",
                "email": "p1_new@mail.com",
                "password": "$2a$10$gT8zNTJWeBgf1wzMZrhSWOWfTmxMKrwOkNNYtkBIukvHbHj7DAXn6",
                "gender": "Male",
                "state": "Rajasthan",
                "city": "Jaipur",
                "interests": [
                    "[Cricket, Football]"
                ],
                "contactNo": "12345",
                "skillLevels": "Advanced",
                "createdAt": "2023-11-12T12:21:22.423Z",
                "updatedAt": "2023-11-12T16:26:12.067Z",
                "__v": 0
        }
}
```
### /academy
#### 1. <b>[POST]/academy/add-academy</b>
```bash
    req.headers[authorization] = jwt-token
    example : req.body
        {
            "name": "academy1", #required
            "sports": ["Cricket", "Football"], #required
            "city" : "Jaipur", #required
            "state" : "Rajasthan", #required
            "address": "Area 51",
        }
    response :
        {
            "data": {
                "name": "academy1",
                "sports": [
                    "Cricket",
                    "Football"
                ],
                "state": "Rajasthan",
                "city": "Jaipur",
                "address": "Area 51",
                "createdBy": "6550c3428caab57739826338",
                "_id": "6550fdedde22f6f2fe679e8b",
                "createdAt": "2023-11-12T16:31:41.969Z",
                "updatedAt": "2023-11-12T16:31:41.969Z",
                "__v": 0
        }
}
```
#### 2. <b>[POST]/academy/get-academy</b>
```bash
    req.headers[authorization] = jwt-token
    example : req.body
        {
            "city" : "Jaipur", #required
            "state" : "Rajasthan", #required
            "sports" : "Cricket", #required
        }
    response:
        {
            "data": [
                {
                    "_id": "6550fdedde22f6f2fe679e8b",
                    "name": "academy1",
                    "sports": [
                        "Cricket",
                        "Football"
                    ],
                    "state": "Rajasthan",
                    "city": "Jaipur",
                    "address": "Area 51",
                    "createdBy": "6550c3428caab57739826338",
                    "createdAt": "2023-11-12T16:31:41.969Z",
                    "updatedAt": "2023-11-12T16:31:41.969Z",
                    "__v": 0
                }
            ]
        }

```
#### 3. <b>[PATCH]/academy/update-academy/:id</b>
```bash
    req.headers[authorization] = jwt-token
    example : req.body
        {
            "name": "academy-new", #optional
            "sports": ["Cricket", "Football", "Tennis"], #optional
            "city" : "Jaipur", #optional
            "state" : "Rajasthan", #optional
            "address": "Area 51", #optional
        }
    response:
        {
            "data": {
                "_id": "6550fdedde22f6f2fe679e8b",
                "name": "academy-new",
                "sports": [
                    "Cricket",
                    "Football",
                    "Tennis"
                ],
                "state": "Rajasthan",
                "city": "Jaipur",
                "address": "Area 51",
                "createdBy": "6550c3428caab57739826338",
                "createdAt": "2023-11-12T16:31:41.969Z",
                "updatedAt": "2023-11-12T16:40:14.091Z",
                "__v": 0
            }
        }
```

## Models   
We have the following models in the database:
[x] User
[x] Event
[x] Academy

```sql
user {
  id string pk
  name string
  email string
  password string
  age number
  gender string
  state string
  city string
  contactNo string
  interests string[]
  skillLevel string
}

event {
  id string pk
  time timestamp
  state string
  city string
  interests string[]
  skillLevels string
  createdBy string fk
}

academy {
  id string pk
  name string
  sports string[]
  state string
  city string
  address string
  createdBy string fk
}

event.createdBy < user.id
academy.createdBy < user.id
```
### DB Diagram
[View on Eraser![](https://app.eraser.io/workspace/6MJrIkUNion5y0PEcsXL/preview?elements=sufHpUTo59e4Y1nD_jNnCw&type=embed)](https://app.eraser.io/workspace/6MJrIkUNion5y0PEcsXL?elements=sufHpUTo59e4Y1nD_jNnCw)
