INSERT INTO departments (name) 
VALUES ('Human Resources'),
       ('Engineering'),
       ('Marketing'),
       ('Sales');

INSERT INTO roles (title, salary, department_id) 
VALUES ('HR Manager', 60000, 1),
       ('Software Engineer', 80000, 2),
       ('Marketing Specialist', 50000, 3),
       ('Sales Representative', 45000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Doe', 1, NULL),
       ('Jane', 'Smith', 2, 1),
       ('Emily', 'Jones', 3, 1),
       ('Michael', 'Brown', 4, 1);