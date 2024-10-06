// DEPENDENCIES
import inquirer from "inquirer";
import { pool, connectToDb } from './connections.js';
await connectToDb();

// DATA

// FUNCTIONS

// This works!
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

// This works!
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

// This works!
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

// const updateEmployeeRole = () => {
//   pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, (err, _result) => {
//       if(err){
//           console.log(err);
//       } else {
//       console.log("Employee role updated");
//       }  
// });
// }

// This works!
const viewEmployeesByDepartment = () => {
  pool.query(
    `SELECT employee.first_name AS employee_first_name, employee.last_name AS employee_last_name, department.name AS department
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    ORDER BY employee.id;`, (err, result) => {
      if(err){
          console.log(err);
      } else if (result.rows.length === 0) {
          console.log("No employees found");
      } else {
      console.log(result.rows);
      }  
}); 
}

// USER INTERACTIONS

inquirer
  .prompt([
    {
      // WHEN I start the application
      // THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
      // This works!
      type: 'list',
      message:'What would you like to do?',
      name: 'purpose',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update employee manager", "View employees by manager", "View employees by department", "Delete department", "Delete role", "Delete employee", "View combined salary of employees by department", "Quit"]
    }
  ])
  .then((response) => {
    // WHEN I choose to view all departments
    // THEN I am presented with a formatted table showing department names and department ids
    // This works!
    if (response.purpose === "View all departments") {
      viewDepartments();
  } else if (response.purpose === "View all roles") {
      // WHEN I choose to view all roles
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
      // This works!
      viewRoles();
  } else if (response.purpose === "View all employees") {
      // WHEN I choose to view all employees
      // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
      // This works!
      viewEmployees();
  } else if (response.purpose === "Add a department") {
      // WHEN I choose to add a department
      // THEN I am prompted to enter the name of the department and that department is added to the database
      // This works!
      console.log("prompt to enter the name of the department and that department is added to the database")
      inquirer
        .prompt(
          [
            {
              type: 'input',
              message: 'Enter the department name', // enter as a string
              name: 'name'
            },
        ])
        .then((response) => {
          pool.query(`INSERT INTO department (name) VALUES ($1)`, [response.name], (err, _result) => {
            if(err){
                console.log(err);
            } else {
            console.log(viewDepartments());
            }  
            });
        })
        .catch(
          err => console.log(err)
        );
  } else if (response.purpose === "Add a role") {
      // WHEN I choose to add a role
      // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
      // This works!
      inquirer
        .prompt(
          [
            {
              type: 'input',
              message: 'Enter the role title', // enter as a string
              name: 'title'
            },
            {
              type: 'input',
              message: 'Enter the role salary', // enter as a number
              name: 'salary'
            },
            {
              type: 'input',
              message: 'Enter the department id', // enter as a number
              name: 'department_id',
            }
        ])
        .then((response) => {
          pool.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, [response.title, response.salary, response.department_id], (err, _result) => {
            if(err){
                console.log(err);
            } else {
            console.log(viewRoles());
            }  
            });
        })
        .catch(
          err => console.log(err)
        );
  } else if (response.purpose === "Add an employee") {
      // WHEN I choose to add an employee
      // THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database
      // This works!      
      inquirer
      .prompt(
        [
          {
            type: 'input',
            message: 'Enter the employee first name', // enter as a string
            name: 'first_name'
          },
          {
            type: 'input',
            message: 'Enter the employee last name', // enter as a string
            name: 'last_name'
          },
          {
            type: 'input',
            message: 'Enter the role id', // enter as a number
            name: 'role_id',
          },
          {
            type: 'input',
            message: 'Enter the manager id', // enter as a number
            name: 'manager_id',
          }
      ])
      .then((response) => {
        pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [response.first_name, response.last_name, response.role_id, response.manager_id], (err, _result) => {
          if(err){
              console.log(err);
          } else {
          console.log(viewEmployees());
          }  
          });
      })
      .catch(
        err => console.log(err)
      );
  } else if (response.purpose === "Update an employee role") {
      // WHEN I choose to update an employee role
      // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
      // This works!
      console.log("prompt to select an employee to update and their new role and this information is updated in the database")
      inquirer
        .prompt(
        [
            {
              type: 'input',
              message: 'Enter the employee id to update', // enter as a number
              name: 'employeeToUpdate'
            },
            {
              type: 'input',
              message: 'Enter the new role id', // enter as a number
              name: 'newRoleID'
            },
        ])
        .then((response) => {
          pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [response.newRoleID, response.employeeToUpdate], (err, _result) => {
            if(err){
                console.log(err);
            } else {
            console.log(viewEmployees());
            }  
            });
        })
        .catch(
          err => console.log(err)
        );
      // updateEmployeeRole();
  } else if (response.purpose === "View employees by department") {
      // WHEN I choose to view employees by department
      // THEN I am presented with a formatted table showing employee data, including department names
      // This works!      
      viewEmployeesByDepartment();
  }
})
  .catch (err => {
    console.log(err)
  });
    
// INITIALIZATIONS
// run in terminal: enter "node index" to start the app
