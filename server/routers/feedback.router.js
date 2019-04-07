const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST Route
router.post('/', (req, res) => {
   const newFeedback = req.body;
   const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES ($1, $2, $3, $4);`;

   pool.query(sqlText, [newFeedback.feelingRating, newFeedback.understandingRating,
         newFeedback.supportRating, newFeedback.comment])
      .then(() => {
         res.sendStatus(201);
      }).catch((error) => {
         console.log(`Error adding feedback to database:`, error);
         res.sendStatus(500);
      });

}); // END POST Route

module.exports = router;
