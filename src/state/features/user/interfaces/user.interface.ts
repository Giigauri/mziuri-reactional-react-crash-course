import { UserRole } from '../enums/role.enum';

export interface IUser {
	name: string;
	username: string;
	email: string;
	photo?: string;
	role: UserRole;
	password: string;
	resetPasswordToken?: string;
	resetPasswordTokenExpire?: Date;
	phone: string;
	website: string;
}
