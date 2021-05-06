import User from './User';
import { ModeratorAccess } from '../decorators/decorators';

@ModeratorAccess
class ModeratorUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;
	}
}

export default ModeratorUser;
