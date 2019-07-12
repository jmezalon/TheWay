const { db } = require("./connections.js");

const getAllChurches = (req, res, next) => {
  db.any("SELECT * FROM churches")
    .then(churches => {
      res.status(200).json({
        status: "success",
        churches: churches,
        message: "received all churches"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleChurch = (req, res, next) => {
  let churchId = parseInt(req.params.id);
  db.one(
    `SELECT churches.*, members.members AS members FROM churches FULL JOIN
            (SELECT ARRAY_AGG(DISTINCT members.name) AS members, church_id
               FROM members
                GROUP BY members.church_id) AS members
                ON
                members.church_id = churches.id
WHERE churches.id=$1`,
    churchId
  )
    .then(church => {
      res.status(200).json({
        status: "success",
        church: church,
        message: "this is a single church"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const newChurch = (req, res, next) => {
  req.body.website = req.body.website ? req.body.website : null;

  db.none(
    "INSERT INTO churches (name, pastor, location, zip_code, website)",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "you created a new church"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editChurch = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");
  const churchId = parseInt(req.params.id);
  db.none(
    "UPDATE churches SET " + queryString + " WHERE id=" + churchId,
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a church!"
      });
    })
    .catch(err => {
      console.log("err in edit church", err);
      next(err);
    });
};

const deleteChurch = (req, res, next) => {
  let churchId = parseInt(req.params.id);
  db.result("DELETE FROM churches WHERE id=$1", churchId)
    .then(result => {
      res.status(200).json({
        status: "success",
        result: result,
        message: "you have deleted this user"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getChurchMembers = (req, res, next) => {
  let churchId = parseInt(req.params.id);
  db.any(
    "SELECT members.id, members.name AS member, members.profile_pic, members.links, churches.name AS local_Church, churches.pastor, members.bio, members.ministries FROM churches FULL JOIN members ON members.church_id = churches.id WHERE churches.id=$1",
    [churchId]
  )
    .then(members => {
      res.status(200).json({
        status: "success",
        members: members,
        message: "all the members from one church"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllChurches,
  getSingleChurch,
  newChurch,
  editChurch,
  deleteChurch,
  getChurchMembers
};
