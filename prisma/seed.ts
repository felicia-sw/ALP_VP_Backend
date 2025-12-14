import { PrismaClient } from "../generated/prisma";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional, for development)
  console.log('Clearing existing data...');
  await prisma.exchangeInformation.deleteMany({});
  await prisma.helpRequest.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});

  // Create Categories
  const things = await prisma.category.create({ 
    data: { categoriesName: 'Barang' } 
  });
  const services = await prisma.category.create({ 
    data: { categoriesName: 'Jasa' } 
  });

  console.log('Created Categories...');

  // Hash password for security (you can use plain text for testing)
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create Users (matching actual schema: username, email, password)
  const userSiti = await prisma.user.create({
    data: {
      username: 'ibu_siti',
      email: 'siti@example.com',
      password: hashedPassword,
    },
  });

  const userAhmad = await prisma.user.create({
    data: {
      username: 'pak_ahmad',
      email: 'ahmad@example.com',
      password: hashedPassword,
    },
  });

  const userBudi = await prisma.user.create({
    data: {
      username: 'budi_santoso',
      email: 'budi@example.com',
      password: hashedPassword,
    },
  });

  const userDewi = await prisma.user.create({
    data: {
      username: 'dewi_lestari',
      email: 'dewi@example.com',
      password: hashedPassword,
    },
  });

  const userRizki = await prisma.user.create({
    data: {
      username: 'rizki_pratama',
      email: 'rizki@example.com',
      password: hashedPassword,
    },
  });

  console.log('Created Users...');

  // Create Help Requests (10 items for testing)
  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Sayuran Organik Segar',
      description: 'Sayuran segar langsung dari kebun sendiri. Bebas pestisida. Tersedia bayam, kangkung, dan sawi.',
      exchangeProductName: 'Telur ayam kampung atau buah-buahan lokal',
      location: 'Banjarbaru, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/orange/white?text=Sayuran',
      isCheckout: false,
      userId: userSiti.id,
      categoryId: things.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Alat Pertukangan Lengkap',
      description: 'Satu set alat pertukangan (palu, obeng, gergaji). Kondisi masih sangat bagus, jarang dipakai.',
      exchangeProductName: 'Alat berkebun atau tanaman hias',
      location: 'Banjarbaru, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/gray/white?text=Alat+Tukang',
      isCheckout: false,
      userId: userAhmad.id,
      categoryId: things.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Jasa Servis Elektronik',
      description: 'Bisa memperbaiki kipas angin, blender, rice cooker, dan elektronik rumah tangga lainnya.',
      exchangeProductName: 'Beras 5kg atau Minyak Goreng 2L',
      location: 'Banjarmasin, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/blue/white?text=Servis',
      isCheckout: false,
      userId: userBudi.id,
      categoryId: services.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Buku Pelajaran SD & SMP',
      description: 'Koleksi buku pelajaran bekas anak, kondisi masih bagus. Cocok untuk adik-adik yang membutuhkan.',
      exchangeProductName: 'Buku cerita anak atau mainan edukatif',
      location: 'Martapura, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/green/white?text=Buku',
      isCheckout: false,
      userId: userDewi.id,
      categoryId: things.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Jasa Les Privat Matematika',
      description: 'Guru berpengalaman 5 tahun, bisa les matematika SD hingga SMA. Bisa datang ke rumah.',
      exchangeProductName: 'Sembako atau produk makanan',
      location: 'Banjarbaru, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/purple/white?text=Les',
      isCheckout: false,
      userId: userRizki.id,
      categoryId: services.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Pakaian Anak Bekas',
      description: 'Pakaian anak umur 3-7 tahun, kondisi layak pakai. Sudah kekecilan untuk anak saya.',
      exchangeProductName: 'Pakaian anak umur 8-12 tahun',
      location: 'Banjarmasin, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/pink/white?text=Baju+Anak',
      isCheckout: false,
      userId: userSiti.id,
      categoryId: things.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Peralatan Masak Bekas',
      description: 'Wajan, panci, dan spatula. Kondisi masih bagus, cuma mau ganti yang baru.',
      exchangeProductName: 'Tupperware atau wadah penyimpanan makanan',
      location: 'Banjarbaru, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/red/white?text=Alat+Masak',
      isCheckout: false,
      userId: userAhmad.id,
      categoryId: things.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Jasa Potong Rambut Gratis',
      description: 'Sedang belajar potong rambut, butuh model untuk latihan. Gratis!',
      exchangeProductName: 'Tidak ada, hanya butuh model',
      location: 'Banjarmasin, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/cyan/white?text=Potong+Rambut',
      isCheckout: false,
      userId: userBudi.id,
      categoryId: services.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Tanaman Hias Kaktus',
      description: 'Beberapa pot kaktus mini, cocok untuk dekorasi meja atau kamar.',
      exchangeProductName: 'Tanaman bunga atau tanaman buah',
      location: 'Martapura, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/lime/white?text=Kaktus',
      isCheckout: false,
      userId: userDewi.id,
      categoryId: things.id,
    },
  });

  await prisma.helpRequest.create({
    data: {
      nameOfProduct: 'Jasa Desain Grafis Sederhana',
      description: 'Bisa bantu desain poster, banner, atau kartu nama. Masih pemula tapi serius.',
      exchangeProductName: 'Pulsa atau kopi',
      location: 'Banjarbaru, Kalimantan Selatan',
      imageUrl: 'https://placehold.co/600x400/yellow/black?text=Desain',
      isCheckout: false,
      userId: userRizki.id,
      categoryId: services.id,
    },
  });

  console.log('Seeding finished. Created 10 Help Requests.');
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
