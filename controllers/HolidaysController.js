const express = require("express");
const Holidays = require("../models/Holidays");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

router.get("/", async (req, res) => {
  const holidays = await Holidays.find();
  res.status(StatusCodes.OK).send({ status: "success", data: holidays})
});

router.post("/", async (req, res) => {
  try {
    const holiday = await Holidays.create(req.body);
    res.status(StatusCodes.CREATED).send({ status: "success", data:holiday});
  } catch (error) {
    res.send(error);
  }
});

//? Request + Cookie -> Session -> req.session
router.get("/:id", async (req, res) => {
  if (!req.session.user) {
    res.status(StatusCodes.UNAUTHORIZED).send({ status: "fail", data: "No access"});
  } else {
    const id = req.params.id;
    try {
      const holiday = await Holidays.findById(id);
      if (holiday === null) {
        res
          .status(StatusCodes.NOT_FOUND)
          .send({ status: "fail", data: "Holiday Not Found" });
      } else {
        res.status(StatusCodes.OK).send(holiday);
      }
    } catch (error) {
      res.send(error);
    }
  }
});

module.exports = router;