import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
    _id: ObjectId,
    title: String,
    slug: String,
    servings: Number,
    cookTime: Number,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    ingredients: String,
    directions: String,
    bookmark: Boolean
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;