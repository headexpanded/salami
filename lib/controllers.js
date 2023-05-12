import prisma from './prisma.js';

const DEFAULT_RECIPE_ID = '1';

// create a new contoller
export async function createController(controller) {
  try {
    const newController = await prisma.controller.create({
      data: { controller },
    });
    return { controller: newController };
  } catch (error) {
    return { error };
  }
}

// get all of a user's controllers
export async function getControllerByUserId(userId) {
  try {
    const controllers = await prisma.controller.findMany({
      where: { userId },
      orderBy: [
        {
          isActive: 'desc',
        },
        { createdAt: 'desc' },
      ],
    });
    return { controllers };
  } catch (error) {
    return { error };
  }
}

// get a controller
export async function getControllerById(id) {
  try {
    const controller = await prisma.controller.findFirst({
      where: { id },
    });
    return { controller };
  } catch (error) {
    return { error };
  }
}

// update a controller: set the recipeId (the recipe the controller is using)
export async function setControllerRecipeId(
  controllerId,
  recipeId = DEFAULT_RECIPE_ID
) {
  try {
    const controller = await prisma.controller.update({
      where: { controllerId },
      data: { recipeId },
    });
    return { controller };
  } catch (error) {
    return { error };
  }
}

// set a controller to Active / Inactive
export async function setControllerActive(controllerId, isActive) {
  try {
    const controller = await prisma.controller.update({
      where: { controllerId },
      data: { isActive },
    });
    return { controller };
  } catch (error) {
    return { error };
  }
}
