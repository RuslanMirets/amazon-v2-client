import { IReview } from "@/types/review.interface";
import { axiosClassic, instance } from "@/api/api.interceptor";

const REVIEW = "review";

type TypeData = {
	rating: number;
	text: string;
};

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: `/${REVIEW}`,
			method: "GET",
		});
	},

	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `/${REVIEW}/average-by-product/${productId}`,
			method: "GET",
		});
	},

	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `/${REVIEW}/leave/${productId}`,
			method: "POST",
			data,
		});
	},
};

export default ReviewService;
