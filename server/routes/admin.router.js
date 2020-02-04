const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route for admin user information
router.get('/user-info', (req, res) => {
  let sqlQuery = `SELECT c.user_id as id, c.name, c.business_name as company, c.phone_number as phone, u.email, i.industry
                  FROM contact_info c
                  JOIN users u ON u.id = c.user_id
                  JOIN industry i ON i.id = c.industry_id
                  ORDER BY c.business_name`;
  pool.query(sqlQuery)
    .then(result => {
    res.send(result.rows);
  })
  .catch( error => {
    console.log('Error with GET admin user info', error);
    res.sendStatus(500);
  });
});

// POST route for admin to add new industry information
router.post('/industry-info', (req, res) => {
  let id = [req.body.industry, req.body.margin];
  let sqlQuery = `INSERT INTO industry (industry, margin)
                  VALUES ($1, $2);`;
  pool.query(sqlQuery, id)
    .then(result => {
    res.sendStatus(201);
  })
  .catch( error => {
    console.log('Error with POST admin industry info', error);
    res.sendStatus(500);
  });
});

// PUT route for admin to update industry information
router.put('/industry-info', (req, res) => {
  let id = [req.body.id, req.body.industry, req.body.margin];
  let sqlQuery = `UPDATE industry 
                  SET industry = $2, margin = $3
                  WHERE id = $1;`;
  pool.query(sqlQuery, id)
    .then(result => {
    res.send(result.rows);
  })
  .catch( error => {
    console.log('Error with PUT admin industry info', error);
    res.sendStatus(500);
  });
});

// PUT route for admin to update user information
router.put('/user-info', (req, res) => {
  let id = [req.body.id, req.body.name, req.body.company, req.body.phone, req.body.email, req.body.industry, req.body.password];
  let sqlQuery = `UPDATE ;`;
  pool.query(sqlQuery, id)
    .then(result => {
    res.send(result.rows);
  })
  .catch( error => {
    console.log('Error with PUT admin user info', error);
    res.sendStatus(500);
  });
});

module.exports = router;
