// controllers/productController.js

const Product = require("../models/Product"); 

exports.addProduct = async (req, res) => {
    try {
        const productData = req.body;

        if (!productData.name || !productData.price) {
            return res.status(400).json({ message: "Product name and price are required." });
        }

        const newProduct = new Product(productData);
        await newProduct.save();

        res.status(201).json({
            message: "Product added successfully",
            product: newProduct
        });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



exports.getProducts = async (req, res) => {
    try {
      
        const products = await Product.find({});
        
  
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching all products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



exports.getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category: category });

        if (products.length === 0) {
            return res.status(404).json({ message: `No products found in category: ${category}` });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


exports.getVariantDetails = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product.variants); 
    } catch (error) {
        console.error("Error fetching variant details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};