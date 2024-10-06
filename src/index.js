// DEPENDENCIES
import inquirer from "inquirer";
import { pool, connectToDb } from './connections.js';
await connectToDb();

// DATA

// FUNCTIONS
const viewDepartments = () => {
  pool.query(`SELECT * FROM department`, (err, result) => {
      if(err){
          console.log(err);
      } else if (result.rows.length === 0) {
          console.log("No departments found");
      } else {
      console.log(result.rows);
      }  
});
}

const viewRoles = () => {
  pool.query(`SELECT * FROM role`, (err, result) => {
      if(err){
          console.log(err);
      } else if (result.rows.length === 0) {
          console.log("No roles found");
      } else {
      console.log(result.rows);
      }  
});
}

const viewEmployees = () => {
  pool.query(`SELECT * FROM employee`, (err, result) => {
      if(err){
          console.log(err);
      } else if (result.rows.length === 0) {
          console.log("No employees found");
      } else {
      console.log(result.rows);
      }  
});
}

const addDepartment = () => {
  pool.query(`INSERT INTO department (name) VALUES ($1)`, (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log("Department added");
      }  
});
}

const addRole = () => {
  pool.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log("Role added");
      }  
});
}

const addEmployee = () => {
  pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log("Employee added");
      }  
});
}

const updateEmployeeRole = () => {
  pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log("Employee role updated");
      }  
});
}

// USER INTERACTIONS

inquirer
  .prompt([
    {
      // WHEN I start the application
      // THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
      type: 'list',
      message:'What would you like to do?',
      name: 'purpose',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
  ])
  .then((response) => {
    // WHEN I choose to view all departments
    // THEN I am presented with a formatted table showing department names and department ids
    if (response.purpose === "View all departments") {
      console.log("a table of department names here")
      viewDepartments();
  } else if (response.purpose === "View all roles") {
      // WHEN I choose to view all roles
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
      console.log("job title, role id, the department that role belongs to, and the salary for that role.")
      viewRoles();
  } else if (response.purpose === "View all employees") {
      // WHEN I choose to view all employees
      // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
      console.log("a formatted table showing employee data")
      viewEmployees();
  } else if (response.purpose === "Add a department") {
      // WHEN I choose to add a department
      // THEN I am prompted to enter the name of the department and that department is added to the database
      console.log("prompt to enter the name of the department and that department is added to the database")
      addDepartment();
  } else if (response.purpose === "Add a role") {
      // WHEN I choose to add a role
      // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
      console.log("prompt to enter the name, salary, and department for the role and that role is added to the database")
      addRole();
  } else if (response.purpose === "Add an employee") {
      // WHEN I choose to add an employee
      // THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database
      console.log("prompt to enter the employee's first name, last name, role, and manager, and that employee is added to the database")
      addEmployee();
  } else if (response.purpose === "Update an employee role") {
      // WHEN I choose to update an employee role
      // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
      console.log("prompt to select an employee to update and their new role and this information is updated in the database")
      updateEmployeeRole();
  }})
  .catch (err => {
    console.log(err)
  });
    
// INITIALIZATIONS