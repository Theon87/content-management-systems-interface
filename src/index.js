// DEPENDENCIES
import inquirer from "inquirer";

// DATA


// FUNCTIONS


// USER INTERACTIONS

inquirer
  .prompt([
    {
      // WHEN I start the application
      // THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
      type: 'list',
      message:('What would you like to do?'),
      name: 'purpose',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
  ])
  .then((response) => {
    // WHEN I choose to view all departments
    // THEN I am presented with a formatted table showing department names and department ids
    if (response.purpose === "View all departments") {
        console.log("a table of formatted ids here")
    } else if (response.purpose === "View all roles") {
        console.log("job title, role id, the department that role belongs to, and the salary for that role.")
    } else if (response.purpose === "View all employees") {
        console.log("a formatted table showing employee data")
    }
    // WHEN I choose to view all roles
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

    // WHEN I choose to view all employees
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

    // WHEN I choose to add a department
    // THEN I am prompted to enter the name of the department and that department is added to the database

    // WHEN I choose to add a role
    // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

    // WHEN I choose to add an employee
    // THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database

    // WHEN I choose to update an employee role
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database


    // fs.writeFile('log.txt', response.yourName, (err) => 
    //     err ? console.error(err) : console.log("Name logged!"));

    // fs.appendFile('log.txt', response.language, (err) => 
    //     err ? console.error(err) : console.log("Language logged!"));

    // fs.appendFile('log.txt', response.moc, (err) => 
    //     err ? console.error(err) : console.log("Method of Communication logged!"));
    
  })
  .catch (err => {
    console.log(err)
  });





// INITIALIZATIONS