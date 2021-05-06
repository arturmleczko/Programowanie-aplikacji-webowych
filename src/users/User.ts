import Role from '../role.enum';

class User {
	name: string;
	surname: string;
	role: Role;

	toString(): string {
		return `${this.name} ${this.surname} ${this.role}`;
	}
}

export default User;
