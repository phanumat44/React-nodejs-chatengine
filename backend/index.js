const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const rest = await axios.put("https://api.chatengine.io/users/", {
            username: username, secret: username, first_name: username
        }, { headers: { "Private-Key": "6e1691a0-8a4e-4276-9130-af57d87add0b" } });

        return res.status(rest.status).json(rest.data);

    }
    catch (e) {
        console.log(e)
        return res.status(500).json(e.message);
    }

    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);