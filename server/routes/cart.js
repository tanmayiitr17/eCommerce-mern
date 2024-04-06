const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const { userId, product } = req.body;

  try {
    // Find the cart with the specified userId
    let cart = await Cart.findOne({ userId });

    // If cart doesn't exist, create a new one
    if (!cart) {
      cart = new Cart({ userId, products: [product] });
    } else {
      // Push the new product to the products array of the existing cart
      cart.products.push(product);
    }

    // Save the cart
    const savedCart = await cart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:userId/:productId", verifyToken, async (req, res) => {
  const { userId, productId } = req.params;

  try {
    // Find the cart with the specified userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for the given user ID." });
    }

    // Find the index of the product to delete from the products array
    const productIndex = cart.products.findIndex(product => product._id.toString() === productId);

    // Check if the product exists in the cart
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in the cart." });
    }

    // Remove the product from the products array
    cart.products.splice(productIndex, 1);

    // Save the updated cart
    const savedCart = await cart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET USER CART

router.get("/find/:userId", verifyToken, async (req, res) => {
  const userId = req.params.userId; // Updated variable name to userId
  try {
    const cart = await Cart.findOne({ userId }); // Using userId as the query parameter
    if (!cart) {
      return res.status(404).json({ message: "Cart not found for the given user ID." });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
