const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Holidays = require("../models/Holidays");
const router = express.Router();

//index
router.get("/", async (req, res) => {

  if (!req.session.user) {
    res.status(401).send({ "message" : "user unauthorized"})
  } else {
     try {
      const holiday = await Holidays.find()
      if (holiday == null) {
        res.status(404).send({"message" : "No Items Yet"})
      } else {
        res.send({status: "success", data: holiday}) 
      }
  } catch (error) {
    res.send(error)
  }}
 });

router.post("/", async (req, res) => {
  // if (req.body.likes < 0){
  //     res.status(404).send("Like can't be Negative");
  // }
  try {
    const holiday = await Holidays.create(req.body);
    res.status(201).send(holiday);
  } catch (error) {
    res.status(400).send(error);
  }
});

//? Request + Cookie -> Session -> req.session
router.get("/:id", async (req, res) => {
  if (!req.session.user) {
    res.status(401).send({ status: "fail", data: "No access" });
  } else {
    const id = req.params.id;
    try {
      const holiday = await Holidays.findById(id);
      if (holiday === null) {
        res.status(404).send({ status: "fail", data: "Holiday Not Found" });
      } else {
        res.status(200).send(holiday);
      }
    } catch (error) {
      res.send(error);
    }
  }
});

module.exports = router;
