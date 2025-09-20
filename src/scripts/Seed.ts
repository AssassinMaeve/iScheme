import { connectDB } from "../lib/mongodb";
import Scheme from "../models/Scheme";
import fs from "fs";
import path from "path";

async function seed() {
  try {
    await connectDB();

    const filePath = path.join(process.cwd(), "data", "schemes.json");
    const data = fs.readFileSync(filePath, "utf-8");
    let schemes = JSON.parse(data);

    if (!Array.isArray(schemes)) {
      schemes = [schemes];
    }

    await Scheme.deleteMany({});
    await Scheme.insertMany(schemes);

    console.log(`✅ Seeded ${schemes.length} schemes`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
}

seed();
