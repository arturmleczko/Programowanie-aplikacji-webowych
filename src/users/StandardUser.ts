import User from './User';
import { StandardAccess } from '../decorators/decorators';

@StandardAccess
class StandardUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;
	}
}

export default StandardUser;
