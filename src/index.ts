import AdminUser from './users/AdminUser';
import ModeratorUser from './users/ModeratorUser';
import StandardUser from './users/StandardUser';

import { watch } from './decorators/decorators';
import Resource from './Resource';

const adminUser = new AdminUser('Elon', 'Musk');
const moderatorUser = new ModeratorUser('Arnold', 'Schwarzenegger');
const standardUser = new StandardUser('Katy', 'Perry');

const resource = new Resource();

console.log('Admin user:');
resource.read(adminUser);
resource.change(adminUser);
console.log('Moderator user');
resource.read(moderatorUser);
resource.change(moderatorUser);
console.log('Standard user:');
resource.read(standardUser);
resource.change(standardUser);
