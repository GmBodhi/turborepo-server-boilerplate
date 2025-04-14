import { type Turtle, prisma } from "@repo/db";

export async function createTurtle(data: Omit<Turtle, "turtleId">) {
  try {
    const created = await prisma.turtle.create({
      data,
    });
    return created;
  } catch {
    return false;
  }
}

export async function deleteTurtle(turtleId: Turtle["turtleId"]) {
  try {
    const deleted = await prisma.turtle.delete({
      where: {
        turtleId,
      },
    });
    return deleted;
  } catch {
    return false;
  }
}

export async function getTurtles(): Promise<Turtle[]> {
  try {
    const turtles = await prisma.turtle.findMany();
    return turtles;
  } catch {
    return [];
  }
}
