import asyncHandler from "express-async-handler";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler((req, res) => {
  res.json({ message: "Success" });
});

export { authUser };
