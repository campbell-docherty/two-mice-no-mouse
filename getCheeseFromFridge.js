// add tasty before all the keys e.g. tastymilk
export const fridgeContents = {
  milk: "semi skimmed",
  eggs: "free range",
  cheese:
    "full of mouse bites, there are crumbs of cheese leading from the fridge to the garden",
  butter: "salted",
  beer: "craft",
};

export const getCheeseFromFridge = (fridgeContents) => {
  const evidence = [];
  for (let key in fridgeContents) {
    if (key === "tastycheese") {
      const description = fridgeContents[key];
      evidence.push(description);
    }
  }
  if (evidence.length === 0) {
    throw new Error("No tasty cheese in fridge");
  }
  return evidence;
};
