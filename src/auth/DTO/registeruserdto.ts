export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
export class registerUserDTO {
  
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly password: string;
  readonly role?:Role
}
