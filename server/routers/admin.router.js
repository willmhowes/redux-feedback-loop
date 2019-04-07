const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
   pool.query(`SELECT * FROM "feedback" ORDER BY "id" DESC`)
      .then((response) => {
         res.send(response.rows);
      }).catch((error) => {
         console.log(`Error getting feedback entries:`, error);
         res.sendStatus(500);
      })
}); // END GET Route

// DELETE ROUTE
router.delete('/delete/:id', (req, res) => {
   const id = req.params.id;
   const sqlText = `DELETE FROM "feedback" WHERE "id" = $1;`;

   pool.query(sqlText, [id])
      .then(() => {
         res.sendStatus(200);
      }).catch((error) => {
         console.log(`Error deleting feedback entry:`, error);
         res.sendStatus(500);
      })
}); // END PUT Route

module.exports = router;
