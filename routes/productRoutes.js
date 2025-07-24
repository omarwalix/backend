import express from "express";
import {
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
