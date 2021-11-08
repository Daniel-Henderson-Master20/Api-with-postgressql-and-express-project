# Api-with-postgressql-and-express-project
 Creating a storefront backend

ENV
Values for Postgresql connection in .env

DB_NAME 
DB_NAME_TEST 
DB_HOST 
DB_PORT 
DB_USER 
DB_PASS
ENV
Other values in .env

SALT_ROUND for bcrypt
TOKEN_SECRET for JWT
Port is 5432 if you don't specify in options in database.ts

Create Databases
We shall create the dev and test database.

connect to the default postgres database as the server's root user psql -U postgres
In psql run the following to create a user
CREATE USER shopping_user WITH PASSWORD 'password123';
In psql run the following to create the dev and test database
CREATE DATABASE shopping;
CREATE DATABASE shopping_test;
Connect to the databases and grant all privileges
Grant for dev database
\c shopping
GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;
Grant for test database
\c shopping_test
GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_user;

Run migration db-migrate up

Install packages
npm install

Test
Change ENV to test in .env file first.
Then run npm run test

Lint
npm run lint

watch
npm run watch