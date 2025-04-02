import { model } from "mongoose";
import userSchema from "./UserSchema.js";

export let User = model("User", userSchema);