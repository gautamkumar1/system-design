import { prisma } from "./prisma.js";
prisma.$connect().then(() => {
  console.log("Connected to the database");
}).catch((error) => {
  console.error("Error connecting to the database", error);
});

// it is using transaction to create user and profile in one transaction.(in longer way)
const createUserWithProfile = async () => {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Create User
      const user = await tx.user.create({
        data: {
          username: "gautam",
          email: "gautam@example.com",
          password: "hashedPassword"
        }
      });
  
      // Create Profile
      const profile = await tx.profile.create({
        data: {
          bio: "Software Engineer",
          userId: user.id  // Associate with created user
        }
      });
      
      return { user, profile };
    });
    console.log("✔ User & Profile Created:", result);
  } catch (error) {
    console.error("Error creating user with profile", error);
    throw error;
  }
}

// createUserWithProfile()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());

// simplified way to create user and profile in one transaction. (Nested create (Simpler))
// Prisma internally uses one transaction automatically.
const createUserWithProfileSimplified = async () => {
  try {
    const user = await prisma.user.create({
      data: {
        username: "gautam123",
        email: "gautam123@example.com",
        password: "hashedPasswordv2",
        profile: {
          create: {
            bio: "Software Engineerv2"
          }
        }
      },
      include: {
        profile: true
      }
    });
    console.log("✔ User Created:", user);
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
}

createUserWithProfileSimplified()
  .catch(console.error)
  .finally(() => prisma.$disconnect());