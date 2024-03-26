import { SetMetadata } from "@nestjs/common";
import { Role } from "./registeruserdto";

export const ROLES_KEYS = 'roles';
export const Roles = (...roles:Role[])=>SetMetadata(ROLES_KEYS,roles)