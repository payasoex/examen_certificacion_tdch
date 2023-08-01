const db = require('../config/db');

const getDepartments = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT
        d.departmentid,
        d.name,
        d.groupname,
        edh.businessentityid,
        edh.startdate,
        edh.enddate,
        edh.modifieddate
        FROM
            department d
        LEFT JOIN
            employeedepartmenthistory edh
        ON
            d.departmentid = edh.departmentid
        ORDER BY
            d.departmentid ASC;    
        `
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getDepartments,
};