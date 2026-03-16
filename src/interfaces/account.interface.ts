export enum AccountRoles {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN",
}

export interface Account {
  id: number;
  email: string;
  password: string;
  role: AccountRoles;
}
