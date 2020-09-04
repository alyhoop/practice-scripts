/*
SQL                                 - language
mySQL                               - database management system (dbms)
database management system (dbms)   - software app that helps users create & maintain db
CRUD - create, read, update, delete - main db ops
*/

/*
Databases (db)                      - collection of related info

relational db (SQL)                 - data into one or more tables
                                    *mySQL manages this

non-relational  db (noSQL)          - data as anything BUT a table.
                                    *mongoDB manages this
                                    ex. graphs, key-value, etc

query                                - request to the dbms for info

primary key                          - unique identifier for rows
                                    ex. #, string, email, anything you want...

surrogate key                        -has no value in the real world
                                    ex. employee id no. 100

natural key                          -key has mapping in the real world
                                    ex. SSN

foreign key                         -links row to another table

composite key                       -key w/ two attributes; only together do they
                                    uniquely identify each row

*/

SELECT * FROM Customers;

SELECT DISTINCT Country FROM Customers;
<></>
