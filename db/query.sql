-- Bonus
-- Try to add some additional functionality to your application, such as the ability to do the following:

-- Update employee managers.
UPDATE employees
SET manager_id = new_manager_id
WHERE employee_id = target_employee_id;


-- View employees by manager.
SELECT e.employee_id, e.first_name, e.last_name, m.first_name AS manager_first_name, m.last_name AS manager_last_name
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
WHERE e.manager_id = target_manager_id;


-- View employees by department.
SELECT e.employee_id, e.first_name, e.last_name, d.department_name
FROM employee e
JOIN roles r ON e.role_id = r.role_id
JOIN departments d ON r.department_id = d.department_id
WHERE d.department_id = target_department_id;


-- Delete departments.
DELETE FROM departments
WHERE department_id = target_department_id;


-- Delete roles.
DELETE FROM roles
WHERE role_id = target_role_id;


-- Delete employees.
DELETE FROM employees
WHERE employee_id = target_employee_id;


-- View...the combined salaries of all employees in that department.
SELECT d.department_name, SUM(r.salary) AS total_salary
FROM employees e
JOIN roles r ON e.role_id = r.role_id
JOIN departments d ON r.department_id = d.department_id
GROUP BY d.department_name;