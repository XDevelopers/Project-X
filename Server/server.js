import { app } from "./app.js";
import connectDb from "./src/db/user.db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server runing on ${process.env.PORT} port`);
    });
  })
  .catch((error) => {
    console.log(` mongodb connection failed ${error}`);
    app.on((err) => {
      console.log(err);
      throw err;
    });
  });

git init
git add .
git commit -m "Let's Begain"
git branch -M main
git remote add origin https://github.com/XDevelopers/Project-X.git
git push -u origin main