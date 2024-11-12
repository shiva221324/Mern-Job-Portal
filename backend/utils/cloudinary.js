import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: "di4cyrn81",
  api_key: "785576551358891",
  api_secret: "b4XvgHlxhQcMFUPAEVMIdjHo27g",
});
export default cloudinary;
