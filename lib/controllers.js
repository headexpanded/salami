import prisma from ".";

// create a new contoller
export async function createController(controller) {
  try {
    const controllerFromDB = await prisma.controller.create({
      data: { controller },
    });
    return { controller: controllerFromDB };
  } catch (error) {
    return { error };
  }
}

// get an existing controller
export async function getControllerById(id) {
  try {
    const controller = await prisma.controller.findUnique({
      where: { id },
    });
    return { controller };
  } catch (error) {
    return { error };
  }
}
