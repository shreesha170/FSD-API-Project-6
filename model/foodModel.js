import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  nutritionalInfo: {
    calories: {
        type: Number
    },
    macronutrients: {
        protein: {
            type: Number
        },
        fats: {
            total: {
                type: Number
            },
            saturated: {
                type: Number
            },
            unsaturated: {
                type: Number
            },
            trans: {
                type: Number
            }
        },
        carbohydrates: {
            total: {
                type: Number
            },
            sugar: {
                type: Number
            }
        }
    },
    micronutrients: {
        vitamins: {
            A: {
                type: Number
            },
            C: {
                type: Number
            },
            D: {
                type: Number
            }
            // Add other vitamins as needed
        },
        minerals: {
            iron: {
                type: Number
            },
            calcium: {
                type: Number
            },
            potassium: {
                type: Number
            }
            // Add other minerals as needed
        }
    },
    fiber: {
        type: Number
    },
    sodium: {
        type: Number
    },
    cholesterol: {
        type: Number
    }
},
servingSize: {
    type: String
},
allergens: {
    type: [String] // Array of allergens
},
ingredients: {
    type: [String] // Array of ingredients
},
preparationMethods: {
    type: String
},
certifications: {
    type: [String] // Array of certifications
},
countryOfOrigin: {
    type: String
},
brand: {
    type: String
},
dietaryRestrictions: {
    type: [String] // Array of dietary restrictions
},
healthBenefits: {
    type: String
},
bestPractices: {
    type: String
}
});

export default mongoose.model("foodItem", foodSchema);
