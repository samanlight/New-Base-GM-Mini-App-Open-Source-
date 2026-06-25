const hre = require("hardhat");

async function main() {

  const GM = await hre.ethers.deployContract(
    "BasedGM"
  );

  await GM.waitForDeployment();

  console.log(
    "BasedGM deployed:",
    await GM.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
