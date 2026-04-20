import type { Account } from "@/interfaces/account.interface";
import type { Author } from "@/interfaces/author.interface";
import { loginSchema } from "@/schemes/login.schema";
import { registerSchema } from "@/schemes/register.schema";
import { prisma } from "@/services/prisma";
import bcrypt from "bcrypt";
import type { ZodObject } from "zod";
import jwt from "jsonwebtoken";

export const createUser = async (user: Author & Account) => {
  try {
    const errors: string[] = [];

    const schemaErrors = validateUser(user, registerSchema);
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
    const hash = await bcrypt.hash(user.password, 10);

    const userCreated = await prisma.user.create({
      data: {
        name: user.name.trim(),
        username: user.username.toLowerCase().trim(),
        account: {
          create: {
            email: user.email.toLowerCase(),
            role: "USER",
            password: hash,
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

const validateUser = (user: Author & Account, schema: ZodObject) => {
  const isValid = schema.safeParse(user);
  if (!isValid.success) {
    const fieldErrors = isValid.error.flatten().fieldErrors;
    const errors = Object.entries(fieldErrors).map(([field, messages]) => {
      return `${field}: ${messages?.[0]}`;
    });

    return errors;
  }

  return false;
};

export const loginUser = async (user: Author & Account) => {
  const schemaErrors = validateUser(user, loginSchema);

  if (schemaErrors) {
    return { errors: schemaErrors, token: null, status: 409 };
  }

  const { email, password } = user;

  const account = await prisma.userAccount.findUnique({
    where: { email },
    include: {
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  if (!account) {
    return { errors: ["Invalid credentials"], token: null, status: 401 };
  }

  const hash = await bcrypt.compare(password, account.password);

  if (!hash) {
    return { errors: ["Invalid credentials"], token: null, status: 401 };
  }

  const token = jwt.sign(
    { email, id: account.user.id, slug: account.user.username },
    process.env.JWT_SECRET ?? "",
  );

  return { errors: null, token, status: 200 };
};

