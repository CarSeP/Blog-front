import type { Account } from "@/interfaces/account.interface";
import type { Author } from "@/interfaces/author.interface";
import { registerSchema } from "@/schemes/register.schema";
import { prisma } from "@/services/prisma";

export const createUser = async (user: Author & Account) => {
  try {
    const errors: string[] = [];

    const schemaErrors = validateUser(user);
    if (schemaErrors) {
      return { errors: schemaErrors, user: null };
    }

    if (await findUserByUsername(user.username)) {
      errors.push("That username already exists");
    }

    if (await findUserByEmail(user.email)) {
      errors.push("That email already exists");
    }

    if (errors.length) {
      return { errors, user: null };
    }

    const userCreated = await prisma.user.create({
      data: {
        name: user.name,
        username: user.username,
        account: {
          create: {
            email: user.email,
            role: "USER",
            password: user.password,
          },
        },
      },
    });

    return { errors, user: userCreated };
  } catch (error) {
    throw new Error();
  }
};

const findUserByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) return false;

  return true;
};

const findUserByEmail = async (email: string) => {
  const user = await prisma.userAccount.findUnique({ where: { email } });

  if (!user) return false;

  return true;
};

const validateUser = (user: Author & Account) => {
  const isValid = registerSchema.safeParse(user);
  if (!isValid.success) {
    const fieldErrors = isValid.error.flatten().fieldErrors;
    const errors = Object.entries(fieldErrors).map(([field, messages]) => {
      return `${field}: ${messages?.[0]}`;
    });

    return errors;
  }

  return false;
};
