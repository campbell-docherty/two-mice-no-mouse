// run this file by typing `node fridge.js` in the terminal
import { getCheeseFromFridge, fridgeContents } from "./getCheeseFromFridge.js";

const checkFridgeForEvidenceOfMice = () => {
  // head into the function implementation to check out the code
  const cheeseDescription = getCheeseFromFridge(fridgeContents);
  console.log(`The cheese is ${cheeseDescription}`);
};

checkFridgeForEvidenceOfMice();
