const axios = require("axios");

const express = require("express");
const router = express.Router();

router.get("/comics", async (req, res) => {
  const title = req.query.title || "";
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 100;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
