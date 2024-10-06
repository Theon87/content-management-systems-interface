// DEPENDENCIES
import inquirer from "inquirer";

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// DATA

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCTIONS

import { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, updateEmployeeManager, deleteDepartment, deleteRole, deleteEmployee, viewEmployeesByManager, viewEmployeesByDepartment, viewCombinedSalaryByDepartment } from './pool_queries.js';

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
