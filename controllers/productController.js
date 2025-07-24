import Product from "../models/Product.js";

// ----- Get All Products ----- //

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ----- Get Single Product ----- //

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found!" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ----- Add Product ----- //

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = new Product({ name, price });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ----- Update Product ----- //

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );
    res.json({ message: "Updated Product", updateProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ----- Delete Product ----- //

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product Deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
