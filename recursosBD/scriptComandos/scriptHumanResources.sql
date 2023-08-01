CREATE TABLE person(
	businessentityid integer,
	persontype character(2),
	namestyle boolean,
	title character varying(8),
	firstname character varying(50),
	middlename character varying(50),
	lastname character varying(50),
	suffix character varying(10),
	emailpromotion integer,
	modifieddate timestamp without time zone,
	CONSTRAINT pk_person PRIMARY KEY (businessentityid)
);

CREATE TABLE department(
	departmentid INTEGER,
	name character varying (50),
	groupname character varying (50),
	modifieddate timestamp without time zone,
	CONSTRAINT pk_department PRIMARY KEY (departmentid)
);

CREATE TABLE employee(
	businessentityid INTEGER,
	nationalidnumber character varying (15),
	loginid character varying (256),
	jobtitle character varying (50),
	birthdate date,
	maritalstatus character (1),
	gender character (1),
	hiredate date,
	salariedflag boolean,
	vacationhours smallint,
	sickleavehours smallint,
	currentflag boolean,
	modifieddate timestamp without time zone,
	organizationnode character varying,
	CONSTRAINT pk_employee PRIMARY KEY (businessentityid),
	FOREIGN KEY (businessentityid) REFERENCES person(businessentityid)
);

CREATE TABLE shift(
	shiftid integer,
	name character varying(50),
	starttime time without time zone,
	endtime time without time zone,
	modifieddate timestamp without time zone,
	CONSTRAINT pk_shift PRIMARY KEY (shiftid)
);

CREATE TABLE employeedepartmenthistory(
	employeedepartmenthistoryid integer GENERATED ALWAYS AS IDENTITY,
	businessentityid integer,
	departmentid smallint,
	shiftid smallint,
	startdate date,
	enddate date,
	modifieddate timestamp without time zone,
	CONSTRAINT pk_employeedepartmenthistory PRIMARY KEY (employeedepartmenthistoryid),
	FOREIGN KEY (businessentityid) REFERENCES employee(businessentityid),
	FOREIGN KEY (departmentid) REFERENCES department(departmentid),
	FOREIGN KEY (shiftid) REFERENCES shift(shiftid)
);

CREATE TABLE employeepayhistory(
	employeepayhistoryid INTEGER GENERATED ALWAYS AS IDENTITY,
	businessentityid INTEGER,
	ratechangedate timestamp without time zone,
	rate numeric,
	payfrequency smallint,
	modifieddate timestamp without time zone,
	CONSTRAINT pk_employeepayhistory PRIMARY KEY (employeepayhistoryid),
	FOREIGN KEY (businessentityid) REFERENCES employee(businessentityid)
);