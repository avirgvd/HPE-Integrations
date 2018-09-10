import express from 'express';
import { addSession, getTasks, getTask } from './data';
import settings from './settings';

const router = express.Router();

router.post('/settings', (req, res) => {

  console.log("API POST /rest/settings: body: ", req.body);
  let result = settings.getallsettings();
  console.log("API POST /rest/settings: result: ", result);

  res.json({result: result});

});

router.get('/task', (req, res) => {
  getTasks(req.query).then(tasks => res.json(tasks));
});

router.get('/task/:id', (req, res) => {
  getTask(req.params.id).then((result) => {
    if (!result.task) {
      res.status(404).end();
    } else {
      res.json(result);
    }
  });
});

router.delete('/sessions/*', (req, res) => {
  res.json(undefined);
});

module.exports = router;
