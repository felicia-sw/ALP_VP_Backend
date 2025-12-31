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

    // ============================================================
    // 1. Create Categories (UPDATED)
    // We create 'Barang' and 'Jasa' first. 
    // We explicitly set IDs 1 and 2 to match the Android App logic.
    // ============================================================
    
    const barang = await prisma.category.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            categoriesName: "Barang"
        }
    });

    const jasa = await prisma.category.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            categoriesName: "Jasa"
        }
    });

    console.log("Created Categories: Barang (ID 1), Jasa (ID 2)");

    // 2. Create Users
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

    // ============================================================
    // 3. Create Help Request (UPDATED)
    // Updated to use 'barang.id' since 'education' no longer exists
    // ============================================================
    await prisma.helpRequest.create({
        data: {
            nameOfProduct: "Algebra Textbook",
            description: "I have an old high school math book I don't need.",
            exchangeProductName: "Chocolate Bar", 
            location: "Cluster A, No. 12",
            imageUrl: "",
            isCheckout: false,
            userId: user1.id,       
            categoryId: barang.id // Linked to 'Barang'
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