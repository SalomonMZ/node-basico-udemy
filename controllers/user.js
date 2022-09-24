const { response } = require("express");

const getAnswer = (req, res = response) => {
  res.json({
    msg: "GET API - Controller",
  });
};

const putAnswer = (req, res = response) => {
  //   const id = req.params.id;
  const { id } = req.params;

  res.status(400).json({
    msg: "PUT API - Controller",
  });
};

const postAnswer = (req, res = response) => {
  const body = req.body;

  res.status(201).json({
    msg: "POST API - Controller",
    body,
  });
};

const deleteAnswer = (req, res = response) => {
  res.json({
    msg: "DELETE API - Controller",
  });
};

module.exports = {
  getAnswer,
  putAnswer,
  postAnswer,
  deleteAnswer,
};
