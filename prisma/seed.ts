import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    // Optional: Clear existing data to avoid "Unique constraint" errors when re-running
    await prisma.exchangeInformation.deleteMany();
    await prisma.helpRequest.deleteMany();
    await prisma.user.deleteMany();
    await prisma.category.deleteMany();
    
    console.log("Deleted old data...");

    // 1. Create Categories
    // These are the types of help people can offer/request
    const grocery = await prisma.category.create({
        data: { categoriesName: "Groceries" }
    });
    const education = await prisma.category.create({
        data: { categoriesName: "Education & Tutoring" }
    });
    const repair = await prisma.category.create({
        data: { categoriesName: "Home Repair" }
    });
    const household = await prisma.category.create({
        data: { categoriesName: "Household Items" }
    });

    console.log("Created Categories: Groceries, Education, Repair, Household");

    // 2. Create Users
    // We hash the password so it mimics a real secure login
    const hashedPassword = await bcrypt.hash("password123", 10);

    const user1 = await prisma.user.create({
        data: {
            username: "felicia_sword",
            email: "felicia@example.com",
            password: hashedPassword,
        }
    });

    const user2 = await prisma.user.create({
        data: {
            username: "timothy_neighbor",
            email: "timothy@example.com",
            password: hashedPassword,
        }
    });

    const user3 = await prisma.user.create({
        data: {
            username: "budi_santoso",
            email: "budi@example.com",
            password: hashedPassword,
        }
    });

    console.log("Created 3 Users: felicia_sword, timothy_neighbor, budi_santoso");

    // 3. (Optional) Create one Help Request just to see data immediately
    await prisma.helpRequest.create({
        data: {
            nameOfProduct: "Algebra Textbook",
            description: "I have an old high school math book I don't need.",
            exchangeProductName: "Chocolate Bar", // Barter item
            location: "Cluster A, No. 12",
            imageUrl: "",
            isCheckout: false,
            userId: user1.id,       // Connected to Felicia
            categoryId: education.id // Connected to Education category
        }
    });

    console.log("Created 1 Initial Help Request");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });