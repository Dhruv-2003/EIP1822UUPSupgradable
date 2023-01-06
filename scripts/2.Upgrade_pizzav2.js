const { ethers, upgrades } = require("hardhat");

// const PROXY = <<REPLACE_WITH_YOUR_PROXY_ADDRESS>>;

async function main() {
  const PizzaV2 = await ethers.getContractFactory("PizzaV2");
  console.log("Upgrading Pizza...");
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log("Pizza upgraded successfully");
}

main();
