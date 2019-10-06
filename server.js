const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());

// res is everything I want to send to the user
app.get("/api/get-list", (req, res) => {

    const availabilityData = [
        { id: 1, time: "9:00am - 10:00am", name: '', phone_number: '' },
        { id: 2, time: "10:00am - 11:00am", name: '', phone_number: '' },
        { id: 3, time: "11:00am - 12:00am", name: '', phone_number: '' },
        { id: 4, time: "12:00pm - 1:00pm", name: '', phone_number: '' },
        { id: 5, time: "1:00pm - 2:00pm", name: '', phone_number: '' },
        { id: 6, time: "2:00pm - 3:00pm", name: '', phone_number: '' },
        { id: 7, time: "3:00pm - 4:00pm", name: '', phone_number: '' },
        { id: 8, time: "4:00pm - 5:00pm", name: '', phone_number: '' }
    ]


    res.json(availabilityData);
});


app.listen(3500, () => console.log(`Example app listening on port!`))
