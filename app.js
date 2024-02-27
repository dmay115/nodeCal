const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const { mode, mean, median } = require("./middle");

app.get("/mean", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Include query with list of numbers", 400);
    }
    let nums = req.query.nums.split(",");

    let result = { operation: "mean", answer: mean(nums) };

    return res.send(result);
});

app.get("/median", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Include query with list of numbers", 400);
    }
    let nums = req.query.nums.split(",");

    let result = { operation: "median", answer: median(nums) };

    return res.send(result);
});

app.get("/mode", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Include query with list of numbers", 400);
    }
    let nums = req.query.nums.split(",");

    let result = { operation: "mode", answer: mode(nums) };

    return res.send(result);
});

app.listen(3000, function () {
    console.log("Server starting on port 3000");
});
