const express = require("express");
const router = express.Router();

const productController = require("../controller/product.controller");

router.post("/addproduct",productController.addProduct)
router.get("/allproduct",productController.getAllProduct)
router.get("/allproduct/:_id",productController.getSingleProduct)
router.delete("/allproduct/:_id",productController.deleteProduct)
router.put("/allproduct/:_id",productController.updateproduct)


module.exports  = router;