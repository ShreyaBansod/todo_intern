# Running the Application Locally

To run this application on your local machine, follow these steps:


## Installation

 Clone the repo and install the dependencies.

```bash
   git clone https://github.com/ShreyaBansod/todo_intern.git
``````
```bash   
   npm install 
``````
Create a .env file in TODO/server directory and add the appropriate env variables to use the application.            

***Essential Variables***

PORT=4000
DB_CONNECT=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE =
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=

_fill each filed with your info respectively_

## Run on local machine
```bash
   npm run dev
``````
## Testing on Postman

User can only acess the tasks after logging in.

### Register User

 Open http://localhost:4000/api/v1/register and take the fields 
 ```bash
   {
     "name":,
     "email":,
     "password":
    }
``````
as json ***post*** request 

###  Login User

 Open http://localhost:4000/api/v1/login and take the fields 
 
 ```bash
   {
     "email":,
     "password":
    }
``````
as json ***post*** request 


### Logout User

 Open http://localhost:4000/api/v1/logout as ***get*** request.


###  Forgot Password

 Open http://localhost:4000/api/v1/password/forgot and take the fields 
 
 ```bash
   {
     "email":
   } 
``````
as json ***post*** request 

###  Reset Password

 Open http://localhost:4000/api/v1/password/forgot and take the fields 
 
 ```bash
   {
     "password":,
     "confirmPassword":
   } 
``````
as json ***put*** request 

###  Get all Tasks

 Open  http://localhost:4000/api/v1/get-tasks as json ***get*** request 

###  Get a Task by id

 Open  http://localhost:4000/api/v1/get-task/:id  as json ***get*** request 

## Add Tasks

Open  http://localhost:4000/api/v1/add-tasks and take the fields 
 
 ```bash
   {
     "title":,
     "description":(optional)
   } 
``````
as json ***post*** request 

## Update Tasks

Open   http://localhost:4000/api/v1/update-tasks/:id and take the fields 
 
 ```bash
   {
     "title":,
     "status":,
     "description":
   } 
``````
as json ***put*** request 


## Delete Tasks

Open   http://localhost:4000/api/v1/delete-tasks/:id 
as json ***delete*** request 


## Analysis of Tasks

Open  http://localhost:4000/api/v1/get-analysis 
as json ***get*** request 

The expected response of this route is as follows


 ```bash
   {
       "Average_Time_To_Complete_1_task_in_days": ,
       "Completion_Time_For_Each_Task_indays": [],
       "Tasks_Completed_In_Last_7_days": 
   } 
``````