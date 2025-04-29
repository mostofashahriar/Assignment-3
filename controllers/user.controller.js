export const createUser = (req, res) => res.json({ message: "User created successfully" });
export const readUser = (req, res) => res.json({ message: "User read successfully" });
export const updateUser = (req, res) => res.json({ message: "User updated successfully" });
export const deleteUser = (req, res) => res.json({ message: "User deleted successfully" });

export const getAllUsers = (req, res) => res.json({ message: "All users fetched successfully" });
export const getUserById = (req, res) => res.json({ message: "User fetched by ID" });

export const loginUser = (req, res) => res.json({ message: "User login successful" });
export const logoutUser = (req, res) => res.json({ message: "User logout successful" });

export const changePassword = (req, res) => res.json({ message: "Password changed successfully" });
export const updateProfile = (req, res) => res.json({ message: "User profile updated successfully" });

export const makeAdmin = (req, res) => res.json({ message: "User made admin successfully" });
export const removeAdmin = (req, res) => res.json({ message: "Admin role removed successfully" });

export const searchUsers = (req, res) => res.json({ message: "User search completed successfully" });
export const filterUsers = (req, res) => res.json({ message: "User filter completed successfully" });

export const blockUser = (req, res) => res.json({ message: "User blocked successfully" });
export const unblockUser = (req, res) => res.json({ message: "User unblocked successfully" });

export const verifyEmail = (req, res) => res.json({ message: "Email verified successfully" });
export const resendVerification = (req, res) => res.json({ message: "Verification email resent" });

export const uploadProfilePicture = (req, res) => res.json({ message: "Profile picture uploaded successfully" });
export const deleteAccount = (req, res) => res.json({ message: "Account deleted successfully" });
