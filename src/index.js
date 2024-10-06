// DEPENDENCIES
import inquirer from "inquirer";
import { pool, connectToDb } from './connections.js';
await connectToDb();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// DATA

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

// This works!
const addDepartment = () => {
  inquirer
  .prompt([
      {
        type: 'input',
        message: 'Enter the department name',
        name: 'name'
      },
  ])
  .then((response) => {
    pool.query(`INSERT INTO department (name) VALUES ($1)`, [response.name], (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log(`Added ${response.name} to the database`);
      }  
      });
  })
  .catch(
    err => console.log(err)
  );
}

// This works!
const addRole = () => {
  inquirer
  .prompt([
      {
        type: 'input',
        message: 'Enter the role title', 
        name: 'title'
      },
      {
        type: 'input',
        message: 'Enter the role salary',
        name: 'salary'
      },
      {
        type: 'input',
        message: 'Enter the department id',
        name: 'department_id',
      }
  ])
  .then((response) => {
    pool.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, [response.title, response.salary, response.department_id], (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log(`Added ${response.title} to the database`);
      }  
      });
  })
  .catch(
    err => console.log(err)
  );
}

// This works!
const addEmployee = () => {
  inquirer
      .prompt([
          {
            type: 'input',
            message: 'Enter the employee first name', 
            name: 'first_name'
          },
          {
            type: 'input',
            message: 'Enter the employee last name',
            name: 'last_name'
          },
          {
            type: 'input',
            message: 'Enter the role id',
            name: 'role_id',
          },
          {
            type: 'input',
            message: 'Enter the manager id',
            name: 'manager_id',
          }
      ])
      .then((response) => {
        pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [response.first_name, response.last_name, response.role_id, response.manager_id], (err, _result) => {
          if(err){
              console.log(err);
          } else {
          console.log(`Added ${response.first_name} ${response.last_name} to the database`);
          }  
          });
      })
      .catch(
        err => console.log(err)
      );
}

// This works!
const updateEmployeeRole = () => {
  inquirer
        .prompt(
        [
            {
              type: 'input',
              message: 'Enter the employee id to update',
              name: 'employeeToUpdate'
            },
            {
              type: 'input',
              message: 'Enter the new role id',
              name: 'newRoleID'
            },
        ])
        .then((response) => {
          pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [response.newRoleID, response.employeeToUpdate], (err, _result) => {
            if(err){
                console.log(err);
            } else {
            console.log(`Updated employee ${response.employeeToUpdate} to role ${response.newRoleID}`);
            }  
            });
        })
        .catch(
          err => console.log(err)
        );
}

// This works!
const updateEmployeeManager = () => {
  inquirer
    .prompt([
        {
          type: 'input',
          message: 'Enter the employee id to update',
          name: 'employeeToUpdate'
        },
        {
          type: 'input',
          message: 'Enter the new manager id',
          name: 'newManagerID'
        },
    ])
    .then((response) => {
      pool.query(`UPDATE employee SET manager_id = $1 WHERE id = $2`, [response.newManagerID, response.employeeToUpdate], (err, _result) => {
        if(err){
            console.log(err);
        } else {
        console.log(`Updated employee ${response.employeeToUpdate} to new manager id: ${response.newManagerID}`);
        }  
        });
    })
    .catch(
      err => console.log(err)
    );
}

// This works!
const deleteDepartment = () => {
  inquirer
  .prompt([
      {
        type: 'input',
        message: 'Enter the department id to delete',
        name: 'departmentID'
      },
  ])
  .then((response) => {
    pool.query(`DELETE FROM department WHERE id = $1`, [response.departmentID], (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log(`Deleted department ${response.departmentID}`)
      viewDepartments();
      }  
      });
  })
  .catch(
    err => console.log(err)
  );
}

const deleteRole = () => {
  inquirer
        .prompt([
            {
              type: 'input',
              message: 'Enter the role id to delete', // enter as a number
              name: 'roleID'
            },
        ])
        .then((response) => {
          pool.query(`DELETE FROM role WHERE id = $1`, [response.roleID], (err, _result) => {
            if(err){
                console.log(err);
            } else {
            console.log(`Deleted role ${response.roleID}`)
            viewRoles();
            }  
            });
        })
        .catch(
          err => console.log(err)
        );
}

const deleteEmployee = () => {
  inquirer
  .prompt([
      {
        type: 'input',
        message: 'Enter the employee id to delete', // enter as a number
        name: 'employeeID'
      },
  ])
  .then((response) => {
    pool.query(`DELETE FROM employee WHERE id = $1`, [response.employeeID], (err, _result) => {
      if(err){
          console.log(err);
      } else {
      console.log(`Deleted employee ${response.employeeID}`)
      viewEmployees();
      }  
      });
  })
  .catch(
    err => console.log(err)
  );
}


// This works!
const viewEmployeesByManager = () => {
  pool.query(
    `SELECT employee.first_name AS manager_first_name, employee.last_name AS manager_last_name, e.first_name AS employee_first_name, e.last_name AS employee_last_name
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN employee e ON role.id = e.manager_id `, (err, result) => {
      if(err){
          console.log(err);
      } else if (result.rows.length === 0) {
          console.log("No employees found");
      } else {
      console.log(result.rows);
      }  
}); 
}

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

// This works!
const viewCombinedSalaryByDepartment = () => {
  pool.query(
    `SELECT department.name AS department, SUM(role.salary) AS combined_salary
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    GROUP BY department.name
    ORDER BY combined_salary DESC;`, (err, result) => {
      if(err){
          console.log(err);
      } else {
      console.log(result.rows);
      }  
}); 
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
      addDepartment();
  } else if (response.purpose === "Add a role") {
      // WHEN I choose to add a role
      // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
      // This works!
      addRole();
  } else if (response.purpose === "Add an employee") {
      // WHEN I choose to add an employee
      // THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database
      // This works!      
      addEmployee();
  } else if (response.purpose === "Update an employee role") {
      // WHEN I choose to update an employee role
      // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
      // This works!
      updateEmployeeRole();
  } else if (response.purpose === "Update employee manager") {
      // WHEN I choose to update an employee manager
      // THEN I am prompted to select an employee to update and their new manager and this information is updated in the database
      // This works!
      updateEmployeeManager(); 
  } else if (response.purpose === "View employees by manager") {
      // WHEN I choose to view employees by manager
      // THEN I am presented with a formatted table showing employee data, including manager names
      // This works!
      viewEmployeesByManager();
  } else if (response.purpose === "View employees by department") {
      // WHEN I choose to view employees by department
      // THEN I am presented with a formatted table showing employee data, including department names
      // This works!      
      viewEmployeesByDepartment();
  } else if (response.purpose === "Delete department") {
    // WHEN I choose to delete a department
    // THEN the department is deleted from the database
    // This works!
    if (response.purpose === "Delete department") {
      deleteDepartment();
    }
  } else if (response.purpose === "Delete role") {
    // WHEN I choose to delete a role
    // THEN the role is deleted from the database
    // This works!
    if (response.purpose === "Delete role") {
      deleteRole();
    }
  } else if (response.purpose === "Delete employee") {
    // WHEN I choose to delete an employee
    // THEN the employee is deleted from the database
    // This works!
    if (response.purpose === "Delete employee") {
      deleteEmployee();
    }
  } else if (response.purpose === "View combined salary of employees by department") {
    // WHEN I choose to view the combined salary of employees by department
    // THEN I am presented with a formatted table showing department names and combined salaries
    // This works!
    if (response.purpose === "View combined salary of employees by department") {
      viewCombinedSalaryByDepartment();
    }
  } else if (response.purpose === "Quit") {
      // WHEN I choose to quit the application
      // THEN I am presented with the option to exit the application
      // This works!
      console.log("You quit the application");
  }  
})
  .catch (err => {
    console.log(err)
  });
    
// INITIALIZATIONS
// run in terminal: enter "node index" to start the app
