import User from './User';
import { AdminAccess } from '../decorators/decorators';

@AdminAccess
class AdminUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;
	}
}

export default AdminUser;
