-- -- Bonus
-- -- Try to add some additional functionality to your application, such as the ability to do the following:

-- Update employee managers.
-- UPDATE employee
-- SET id = new_id, first_name = new_first_name, last_name = new_last_name, role_id = new_role_id, manager_id = new_manager_id
-- WHERE id = target_id;


-- -- View employees by manager.
-- SELECT m.id AS manager_id, m.first_name AS manager_first_name, m.last_name AS manager_last_name, e.id AS employee_id, e.first_name AS employee_first_name, e.last_name AS employee_last_name
-- FROM employee e
-- JOIN employee m ON e.manager_id = m.id
-- ORDER BY m.id, e.id;

-- -- View employees by department.
-- SELECT e.id AS id, e.first_name AS first_name, e.last_name AS last_name, e.role_id AS role_id, e.manager_id AS manager_id, r.title AS title, r.salary AS salary, r.department_id AS department_id, d.name AS department_name 
-- FROM employee e
-- JOIN role r ON e.role_id = r.id
-- JOIN department d ON r.department_id = d.id
-- WHERE d.id = target_id;


-- -- Delete departments.
-- DELETE FROM department
-- WHERE id = target_id;


-- -- Delete roles.
-- DELETE FROM role
-- WHERE id = target_id;


-- -- Delete employees.
-- DELETE FROM employee
-- WHERE id = target_id;


-- -- View...the combined salaries of all employees in that department.
-- SELECT d.name, SUM(r.salary) AS total_salary
-- FROM employee e
-- JOIN role r ON e.role_id = r.id
-- JOIN department d ON r.department_id = d.id
-- GROUP BY d.name;

-- -- Show all tables --
-- SELECT * FROM department;

-- SELECT * FROM role;

-- SELECT * FROM employee; 