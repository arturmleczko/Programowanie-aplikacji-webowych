import Role from '../role.enum';

import User from '../users/User';

export function StandardAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Standard;
}
export function ModeratorAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Moderator;
}
export function AdminAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Admin;
}

export function watch(
	target: object,
	propKey: string,
	descriptor: PropertyDescriptor
) {
	const originalFn = target[propKey];
	descriptor.value = function (param) {
		console.log(`User: ${param} wants ${propKey}`);
		return originalFn.call(this, param);
	};
}

export function forAdmin(
	target: object,
	propKey: string,
	descriptor: PropertyDescriptor
) {
	const originalFn = target[propKey];
	descriptor.value = function (user: User) {
		console.log(`${user.name} ${user.surname} wants ${propKey}`);
		if (user.role === Role.Admin) {
			return originalFn.call(this, user);
		}
	};
}

export function forModerator(
	target: object,
	propKey: string,
	descriptor: PropertyDescriptor
) {
	const originalFn = target[propKey];
	descriptor.value = function (user: User) {
		console.log(`${user.name} ${user.surname} wants ${propKey}`);
		if (user.role === Role.Moderator && propKey === 'read') {
			return originalFn.call(this, user);
		}
	};
}
