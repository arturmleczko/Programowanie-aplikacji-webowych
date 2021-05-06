import Role from './role.enum';
import User from './users/User';
import { forAdmin, forModerator } from './decorators/decorators';

class Resource {
	private resourceValue: string;
	constructor() {
		this.resourceValue = 'resource value';
	}

	@forAdmin
	// @forModerator
	public read(user: User): void {
		console.log(
			`${user.name} ${user.surname} reads the value of resources`
		);
	}

	@forAdmin
	// @forModerator
	public change(user: User): void {
		console.log(
			`${user.name} ${user.surname} is changing the value of resources`
		);
		this.resourceValue = 'changed resource value';
	}
}

export default Resource;
