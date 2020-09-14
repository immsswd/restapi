### Tested on:
- Windows 7 Ultimate
- Visual Studio Code v 1.49.*
- MongoDB Compass & MongoDB Shell v 4.2.9
- Postman

### Installation
```
git clone https://github.com/immsswd/restapi.git
```
point out the package.json and see the **dependencies**, to install all the dependencies:
```
npm install --save
```

to run the application:
```bash
npm run dev
```

use json collections data from `collections/*.json`

### REST API
rest api using nodejs (expressJS), MongoDB, Postman

### Endpoint and Verbs

| Endpoint  |Verbs   |Desc   |
|---|---|---|
| http://127.0.0.1:3000/api/emp  |GET   | get datas of all employees  |
| http://127.0.0.1:3000/api/emp/:id  |GET   | get employee's data based on id|
| http://127.0.0.1:3000/api/emp  |POST   | Create a new employee data (fullname, nik, email) in postman  |
| http://127.0.0.1:3000/api/emp/:id  |DELETE   | Delete employee's data according to pointed id  |
| http://127.0.0.1:3000/api/emp/:id |PATCH   | Update employee's data  |

#### TESTING:

##### Employees
1. Testing
![npm run dev](assets/img/run.JPG "run")

2. `/api/emp` GET all data
![npm run dev](assets/img/02_get-api-emp.JPG "get api/emp")

3. `/api/emp/:id` GET data based on id
![npm run dev](assets/img/03_get-api-emp-id.JPG "get api/emp/:id")

4. `/api/emp` POST create new data
![npm run dev](assets/img/04_post-api-emp.JPG "post api/emp")

5. `/api/emp/:id` DELETE remove a data
![npm run dev](assets/img/05_delete-api-emp-id.JPG "delete api/emp")

6. `/api/emp/:id` PATCH updating a data
![npm run dev](assets/img/06_patch-api-emp-id.JPG "patch api/emp")


##### Absensi
***In:***
1. `/api/in` GET all data
![npm run dev](assets/img/07_get-api-absensi.JPG "get api/in")

2. `/api/in` POST create new data
![npm run dev](assets/img/08_post-api-absensi-nik.JPG "post api/in")

***Out:***
1. `/api/out` GET all data (pulang) BEFORE
![npm run dev](assets/img/10_api-out-date_out_before.JPG "post api/out")

2. `/api/out` PATCH update a data (pulang)
![npm run dev](assets/img/09_patch-api-out-date_out.JPG "post api/out")

3. `/api/out` GET all data (pulang) AFTER
![npm run dev](assets/img/11_api-out-date_out_after.JPG "post api/out")