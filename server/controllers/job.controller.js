const Jobs = require('../models').Jobs;
const JobController = {
  create: (req, res) => {
    const body = req.body;
    Jobs
      .create(body)
      .then(() => res.send('record created successfully'))
      .catch((err) => res.send(err));
  },
  fetch: (req, res) => {
    Jobs
      .findAll()
      .then((result) => res.send(result))
      .catch(() => res.send({ error: 'fetching records fails' }));
  },
  update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Jobs
      .update(body, {
        where: {
          id
        }
      })
      .then(() => res.send('record update successfully'))
      .catch(() => res.send('record updated fails'));
  },
  del: (req, res) => {
    const id = req.params.id;
    Jobs
      .destroy({
        where: {
          id
        }
      })
      .then(() => res.send("record deleted successfully"))
      .catch(() => res.send('record deleted fails'));
  }
}
module.exports = JobController;