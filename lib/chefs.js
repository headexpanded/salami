import prisma from "./prisma";

// create a new chef
export async function createChef(user) {
  try {
    const chefFromDB = await prisma.chef.create({
      data: { user },
    });
    return { chef: chefFromDB };
  } catch (error) {
    return { error };
  }
}

// get an existing chef
export async function getChefById(id) {
  try {
    const chef = await prisma.chef.findUnique({
      where: { id },
    });
    return { chef };
  } catch (error) {
    return { error };
  }
}

// get all chefs
export async function getChefs() {
  try {
    const chefs = await prisma.chef.findMany();
    return { chefs };
  } catch (error) {
    return { error };
  }
}
