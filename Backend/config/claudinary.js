import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
   CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_NAME,
CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
