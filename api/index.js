import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/api/foodData", async (req, res) => {
    try {
        let foodData = await FoodModel.find();
        let foodCategories = await CategoryModel.find();
        res.json([foodData, foodCategories]);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

export default app;
