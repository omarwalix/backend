import User from "../models/User.js";

// ----- Get All Users ----- //

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ----- Get Single User ----- //

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ----- Add User ----- //

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ----- Update User ----- //

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    res.json({ message: "Updated User", updateUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ----- Delete User ----- //

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.json({ message: "User Deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
