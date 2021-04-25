# openHRT Bacend Code sample
This project is basicaly we are designing for people who are getting the features of some serious illness but can't ask anyone or need daily tracking of their health.

* we set a good authentication system into our project backend so that every people can feel free to use this application.
* Till now we have developed some of api's for the sampleusing which docter's can provide the medical reports of their patients and can keep track and analysis of the health of patients.
* For more we also build a sample backend API for the patients using which they can keep track & analysis of their complete health reports.
* We have deployed the code over heroku, anyone can test the API's.

  

## Aplication Base URL: 

https://headaway.herokuapp.com/

## prerequisit to test these Api's
* **POSTMAN** only.

## Descriptions for different API's

* **Register** : `/api/auth/register`
  * method should be **POST**
* **verify** : `/api/auth/verify`
  * method should be **POST**
* **login** : `/api/auth/login`
  * method should be **POST**
* **who am i** : `/api/auth/who-am-i`
  * method should be **GET**
* **logout** : `/login/auth/logout`
  * method should be **DELETE**
* **reset password request** : `/api/auth/reset-password-request`
  * method should be **GET**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **reset password** : `/api/auth/reset-password`
  * method should be **PUT**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **change passwrd** : `/api/auth/change-password`
  * method should be **PUT**
* **Add report** : `/api/report/`
  * method should be **POST**
* **Doctors can have patients report** : `/api/report/`
  * method should be **GET**
  
* **fetch your sold products** : `/product/seller/sold?page=1&size=10`
  * method should be **GET**
* **fetch all products as a buyer** : `/product/buyer/?page=1&size=10`
  * method should be **GET**
* **fetch products of your choice of category** : `/product/buyer/cloths?page=1&size=10`
  * method should be **GET**
* **Buy any product** : `/product/buyer/605d402188de741fbe656e6d`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.
* **fetch Buy History** : `/product/buyer/history`
  * method should be **GET**
* **check your wallet balance** : `/product/wallet/`
  * method should be **GET**
* **Add Wallet balance** : `/product/wallet/`
  * method should be **POST**
  * it will require body, please have a look at POSTMAN Collection for the body data.

## How to start the server.

* fork & clone the project.
* `cd order-book`
* `sudo npm i -g pnpm`
* `pnpm i`
* `pnpm start`
