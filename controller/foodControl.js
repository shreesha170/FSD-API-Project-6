import Food from "../model/foodModel.js";

export const create = async (req, res) => {
    try {
        const foodData = new Food(req.body);
        const { name } = foodData;

        const foodExist = await Food.findOne({ name });
        if (foodExist) {
            return res.status(400).json({ message: "Food item already exists." });
        }
        const savedFood = await foodData.save();
        res.status(200).json(savedFood);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error."});
    }
};

export const fetch = async (req, res) => {
    try {
        // Replace this with actual fetching logic
        const foods = await Food.find(); // Example of fetching data from the database
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params; // ID parameter is the MongoDB _id
        const updateData = req.body;

        // Find food item by MongoDB _id and update it
        const updatedFood = await Food.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedFood) {
            return res.status(404).json({ message: "Food item not found." });
        }

        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params; // ID parameter should be the MongoDB _id

        // Find food item by MongoDB _id and delete it
        const deletedFood = await Food.findByIdAndDelete(id);

        if (!deletedFood) {
            return res.status(404).json({ message: "Food item not found." });
        }

        res.status(200).json({ message: "Food item deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};