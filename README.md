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
                time:2023-11-13T14:00:00
                state:Rajasthan
                city:Jaipur
                interests:[Cricket, Football, Badminton]
                skillLevels: Intermediate
            response : 
                 {
                    "data": {
                        "time": "2023-11-13T08:30:00.000Z",
                        "state": "Rajasthan",
                        "city": "Jaipur",
                        "interests": [
                            "[Cricket, Football, Badminton]"
                        ],
                        "skillLevels": "Intermediate",
                        "createdBy": "6550c3428caab57739826338",
                        "_id": "6550c8fe46fdb89d0860e737",
                        "createdAt": "2023-11-12T12:45:50.812Z",
                        "updatedAt": "2023-11-12T12:45:50.812Z",
                        "__v": 0
                    }
                }
        ```
    4. 



## Models   

#### User 

#### Academy

#### Event