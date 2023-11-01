// Run this file by typing `node firstEyeWitness.js` in the terminal the solve the issues and refactor the code

// Move this function to a new file
const createWitness = (name) => {
  // Remove {} from this function
  return {
    name,
    statement: "I saw the mice stealing cheese from the fridge",
  };
};

// the name of this function sucks! Rename it and all it's references
const getWitnesses = () => {
  const witness = createWitness("Phoenix"); // Extract the name here to a variable //
  // create a second witness with a different name

  return [witness];
};

const corroborateWitnesses = (witnesses) => {
  if (witnesses.length !== 2) {
    throw new Error("There should be two witnesses");
  }

  const [firstWitness, secondWitness] = witnesses;

  console.log(`${firstWitness.name} says ${firstWitness.statement}`); // print the second witness statement, try not to use copy paste
};

corroborateWitnesses(getWitnesses());
