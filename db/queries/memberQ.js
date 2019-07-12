const { db } = require("./connections.js");

const getSingleMember = (req, res, next) => {
  let memberId = parseInt(req.params.id);
  db.one(
    "SELECT members.id, members.name AS member, members.profile_pic, members.links, churches.name AS local_Church, churches.pastor, members.bio, members.ministries, churches.id AS church_id FROM churches JOIN members ON members.church_id = churches.id WHERE members.id=$1",
    [memberId]
  )
    .then(member => {
      res.status(200).json({
        status: "success",
        member: member,
        message: "received one member"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllMembers = (req, res, next) => {
  db.any("SELECT * FROM members")
    .then(members => {
      res.status(200).json({
        status: "success",
        members: members,
        message: "received all members"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const newMember = (req, res, next) => {
  db.none(
    "INSERT INTO members (name, church_id) VALUES (${name}, ${church_id})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "created a new member"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editMember = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");
  db.none(
    "UPDATE members SET " + queryString + " WHERE id=" + req.params.id,
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a member!"
      });
    })
    .catch(err => {
      console.log(err, "err in edit member");
      next(err);
    });
};

const deleteMember = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM members WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "this user has been deleted",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getSingleMember,
  getAllMembers,
  newMember,
  editMember,
  deleteMember
};
