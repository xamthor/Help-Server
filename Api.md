# Help Server API Docs

**Auth**

Post: /auth/login

`{
    "email": "email | username",
    "password": ""
}`

Post: /auth/signup

`{
    "email": "",
    "userName": "",
    "password": ""
}`

return data 

`{
    "status": "success",
    "token": "tokendata",
    "data": {
        "user": {
            "phoneNumber": "test",
            "firstName": "sss",
            "lastName": "",
            "_id": "5ff775300e93ac0793f5f3fc",
            "email": "ssadddn1@google.com",
            "userName": "yoyo",
            "__v": 0
        }
    }
}`

**Profile**

Get: /profile/

Post: /profile/update

`{
    "email": "test@test.com",
    "userName": "miguel",
    "firstName": "Joe",
    "lastName": "Smith",
    "phoneNumber": "479 111 2223"
}`

**Status**

Get: /status/all  "limit 30 newest status"

`{
   {
        "_id": "",
        "user_id": "",
        "content": "",
        "timestamp": "2021-01-07T21:01:29.306Z",
        "__v": 0
    },
   {....},
   {....},
}`

Post: /status/create

`{
    "content": ""
}`

Get: /status/latest

`{
	"id": "5ff54ce21a7b19271bf6c944",
    "user_id": ""
    "content": ""
    timestamp: ""
}`

**Connections**

Get: /connection/all

return all auth user connections

`[
    {
        "connection_user": {
            "phoneNumber": "test",
            "firstName": "sss",
            "lastName": "",
            "_id": "5ff775300e93ac0793f5f3fc",
            "email": "ssadddn1@google.com",
            "userName": "yoyo",
            "__v": 0
        },
        "star": false,
        "_id": "5ff92d265b0e341bca4cb457",
        "user_id": "5ff7751f0e93ac0793f5f3fb",
        "timestamp": "2021-01-09T04:12:22.138Z",
        "__v": 0
    },
    {....},
    {....},
]`

Post: /connection/create

`{
    "connection_user": "5ff775300e93ac0793f5f3fc"
}`

Get: /connection/topfive

return the top five connections

`[
    {
        "connection_user": {
            "phoneNumber": "test",
            "firstName": "sss",
            "lastName": "",
            "_id": "5ff775300e93ac0793f5f3fc",
            "email": "ssadddn1@google.com",
            "userName": "yoyo",
            "__v": 0
        },
        "star": true,
        "_id": "5ff92d265b0e341bca4cb457",
        "user_id": "5ff7751f0e93ac0793f5f3fb",
        "timestamp": "2021-01-09T04:12:22.138Z",
        "__v": 0
    },
    {....},
    {....},
]`

Post: /connection/topfive/add

return success or  greator > 5 return message limit reach

`{
    "connection_user" : "5ff93791afc9e37089b38e54"
}`

Post: /connection/topfive/remove

remove a star to the connnection selected

`{
    "connection_user" : "5ff93791afc9e37089b38e54"
}`

**Search**

/search?s=search-term "limit 10 users"

returns array of user objects

`[
    {
        "phoneNumber": "",
        "firstName": "",
        "lastName": "",
        "_id": "",
        "email": "",
        "userName": "",
        "__v": 0
    },
    {....},
    {....},
]`

**Feed**

GET: /feed/all

`[
    {
        "_id": "",
        "user_id": {
            "phoneNumber": "",
            "firstName": "",
            "lastName": "",
            "_id": "",
            "email": "",
            "userName": "",
            "__v": 0
        },
        "content": "status message",
        "timestamp": "2021-01-10T05:23:26.505Z",
        "__v": 0
    }
]`

**Message**

/message/

/message/send
