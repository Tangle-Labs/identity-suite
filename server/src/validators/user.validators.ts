/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserDto:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          default: Jane Doe
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: foopass
 *
 *    CreateStaffDto:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *        - roleId
 *      properties:
 *        name:
 *          type: string
 *          default: Jane Doe
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: foopass
 *        roleId:
 *          type: string
 *
 *    LoginUserDto:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: foopass
 *
 *    UpdateUserDto:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          default: Janice Doe
 *        email:
 *          type: string
 *          default: janice.doe@example.com
 *        password:
 *          type: string
 *          default: barpass
 *
 *    UserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const CreateUserDto = {
	fields: {
		name: function (name: string) {
			return name;
		},
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		}
	},
	mandatory: ["name", "email", "password"]
};

export const LoginUserDto = {
	fields: {
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		}
	},
	mandatory: ["email", "password"]
};

export const UpdateUserDto = {
	fields: {
		name: function (name: string) {
			return name;
		},
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		}
	},
	mandatory: []
};

export const UpdateStaffDto = {
	fields: {
		name: function (name: string) {
			return name;
		},
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		},
		roleId: function (roleId: string) {
			return roleId;
		}
	},
	mandatory: []
};

export const CreateStaffDto = {
	fields: {
		name: function (name: string) {
			return name;
		},
		email: function (email: string) {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		},
		password: function (password: string) {
			return password;
		},
		roleId: function (id: string) {
			return id;
		}
	},
	mandatory: ["name", "email", "password", "roleId"]
};
