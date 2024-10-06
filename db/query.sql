-- -- Bonus
-- -- Try to add some additional functionality to your application, such as the ability to do the following:

-- Show all tables --
-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;

-- Full Table (READY!)
-- SELECT employee.first_name AS employee_first_name, employee.last_name AS employee_last_name, role.title AS role, role.salary AS salary, department.name AS department
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON role.department_id = department.id;
-- ORDER BY employee.id;

-- -- View employees by department. (READY!)
-- SELECT employee.first_name AS employee_first_name, employee.last_name AS employee_last_name, department.name AS department
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON role.department_id = department.id
-- ORDER BY employee.id;

-- -- View employees by manager (Ready!).
-- SELECT employee.first_name AS manager_first_name, employee.last_name AS manager_last_name, m.first_name AS employee_first_name, m.last_name AS employee_last_name
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN employee m ON role.id = m.manager_id  


-- View...the combined salaries of all employees in that department (READY!).
-- SELECT department.name AS department, SUM(role.salary) AS combined_salary
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON role.department_id = department.id
-- GROUP BY department.name
-- ORDER BY combined_salary DESC;

-- -- Add departments
-- INSERT INTO department (name) VALUES ($1);

-- Update employee managers.
-- UPDATE employee
-- SET id = $1, first_name = new_first_name, last_name = new_last_name, role_id = new_role_id, manager_id = new_manager_id
-- WHERE id = target_id;


-- -- Delete departments (READY!).
-- DELETE FROM department
-- WHERE id = target_id;


-- -- Delete roles (READY!).
-- DELETE FROM role
-- WHERE id = target_id;


-- -- Delete employees (READY!).
-- DELETE FROM employee
-- WHERE id = target_id;


-- -- Show all tables --
-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee; 