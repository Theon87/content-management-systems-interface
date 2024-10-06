"use strict";
// // DEPENDENCIES
// import express from 'express';
// import { QueryResult } from 'pg';
// // INTERFACES
// // DATA
// import { pool, connectToDb } from './connections.js';
// await connectToDb();
// // APP/PORTS
// const PORT = process.env.PORT || 3001;
// const app = express();
// // MIDDLEWARE
// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// // ROUTES
// // Query database
// // WHEN I choose to view all roles
// // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// // GET /index
// app.get("/index", (_req, res) => {
//     console.log("test");
//     pool.query("SELECT * FROM roles", (err: Error, result: QueryResult) => {
//         if(err){
//             console.log(err);
//             res.status(500).json("something went wrong");
//         }
//         res.json(result.rows);
//     })    
// });
// // WHEN I choose to view all employees
// // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// // WHEN I choose to add a department
// // THEN I am prompted to enter the name of the department and that department is added to the database
// // WHEN I choose to add a role
// // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// // WHEN I choose to add an employee
// // THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database
// // WHEN I choose to update an employee role
// // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
// // Default response for any other request (Not Found)
// app.use("*",(_req, res) => {
//     res.status(404).send("Nothing found here.");
//     console.log("Working!");
// });
// // START THE SERVER
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
