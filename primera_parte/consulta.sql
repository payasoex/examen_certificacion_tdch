-- script consulta uno

SELECT 
    E.businessentityid, 
    E.nationalidnumber, 
    EDH.departmentid, 
    D.name AS department_name,
    D.groupname, 
    EDH.startdate
FROM 
    employee E 
JOIN 
    employeedepartmenthistory EDH ON E.businessentityid = EDH.businessentityid
JOIN 
    department D ON EDH.departmentid = D.departmentid
WHERE 
    EXTRACT(YEAR FROM EDH.startdate) = 2009;


-- script consulta dos

SELECT *
FROM person
WHERE middlename = 'NULL';

-- script consulta tres

SELECT suffix, COUNT(*) AS count
FROM person
WHERE suffix != 'NULL'
GROUP BY suffix;

