import { IFullUser, IUser } from "@/types/user.interface";
import { instance } from "@/api/api.interceptor";

const USER = "user";

type TypeData = {
	email: string;
	password?: string;
	name?: string;
	avatarPath?: string;
	phone?: string;
};

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `/${USER}/profile`,
			method: "GET",
		});
	},

	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `/${USER}/profile`,
			method: "PUT",
			data,
		});
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `/${USER}/profile/favorites/${productId}`,
			method: "PATCH",
		});
	},
};

export default UserService;
