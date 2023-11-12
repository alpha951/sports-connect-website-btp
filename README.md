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

### auth

1.  [POST] /auth/register

```bash
    example : req.body 

        name:player1  [required]
        email:p1@mail.com [required]
        password:player1@123 [required]
        gender:Male     [required, enums :{Male, Female, Other}]
        state:Rajasthan
        city:Jaipur
        interests:[Cricket, Football]
        age : 21
        contactNo:12345
        skillLevels:Advanced

    response : jwt-token

```


2. [POST] /auth/login
    
```bash
    example : req.body 
        email:p1@mail.com
        password:player1@123
    response : jwt-token
```
3. [POST] /play/create-event

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
4. [GET] /play/getplayers
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
5.  



## Models   

#### User 

#### Academy

#### Event
