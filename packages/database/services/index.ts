import { prisma } from "../src/index";
import { generateId } from "@repo/crypto";

export async function createTurtle(name: string) {
  try {
    const turtle = await prisma.turtle.create({
      data: {
        name,
        id: generateId(),
      },
    });
    return turtle;
  } catch (err) {
    return err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteTurtle(id: string) {
  try {
    const turtle = await prisma.turtle.delete({
      where: {
        id,
      },
    });
    return turtle;
  } catch (err) {
    return err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getTurtles() {
  try {
    const turtle = await prisma.turtle.findMany();
    return turtle;
  } catch (err) {
    return err;
  } finally {
    await prisma.$disconnect();
  }
}
