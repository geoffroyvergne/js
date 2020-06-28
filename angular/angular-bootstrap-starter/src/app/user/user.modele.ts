export class UsersContainer {
  users: Users;
}

export class Users {
  rows: User[];
  pagination: Pagination;
}

export class Pagination {
  size: number;
}

export class User {
  id: number;
  login: string;
  password: string;
  role: string;
  enabled: boolean;
  profile?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    birthDate?: string;
  };
}

export const roles = {
  rows: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_OPERATOR', 'ROLE_GUEST']
};
