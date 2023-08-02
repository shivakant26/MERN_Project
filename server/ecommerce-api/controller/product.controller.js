const product = require("../model/product.model");

// create a project ...
const addProduct = async (req, res) => {
  try {
    const { productName, description, price, category, brand, availability } =
      req.body;
    if (
      !productName ||
      !description ||
      !price ||
      !category ||
      !brand ||
      !availability
    ) {
      res.status(400).json({
        message: "please fill all field",
      });
    } else {
      const products = await product.create({
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brand,
        availability: req.body.availability,
      });
      res.send({
        status: "200",
        message: "add product succussfully",
        data: products,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// get all product ...
const getAllProduct = async (req, res) => {
  try {
    const products = await product.find();
    if (products && !products.length > 0) {
      return res.send({
        status: 400,
        message: "no Record found",
      });
    } else {
      return res.send({
        status: 200,
        message: "fetch all product succussfully",
        data: products,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// single product fetch...
const getSingleProduct = async (req, res) => {
  try {
    const products = await product.find({ _id: req.params._id });
    if (products && !products.length > 0) {
      return res.status(400).json({
        message: "something went wrong!",
      });
    } else {
      res.status(200).json({
        message: "fetch single record succussfully",
        data:products
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// delete product
const deleteProduct = async(req, res) =>{
  const products = await product.findByIdAndDelete(req.params._id);
  if(!products){
    return res.status(400).json({
      message:"currently no Item in product"
    })
  }else{
    res.status(200).json({
      message:"delete record succussfully"
    })
  }
}

// update product 
const updateproduct = async(req,res) =>{
  try {
    const products = await product.findByIdAndUpdate(req.params._id,req.body,{new:true});
    if(products === null){
      res.status(400).json({
        message:"product not Available"
      })
    }else{
      res.status(200).json({
        message:"product update succussfully",
        data:products
      })
    }
  } catch (error) {
    res.status(400).json({
      message:error.message
    })
  }
}

module.exports = { addProduct, getAllProduct, getSingleProduct , deleteProduct , updateproduct};
