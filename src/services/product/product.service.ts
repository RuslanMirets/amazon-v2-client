import { IProduct, TypePaginationProducts } from "@/types/product.interface";
import { axiosClassic, instance } from "@/api/api.interceptor";
import {
	PRODUCT,
	TypeProductData,
	TypeProductDataFilters,
} from "./product.types";

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: `${PRODUCT}`,
			method: "GET",
			params: queryData,
		});

		return data;
	},

	async getSimilar(id: string | number) {
		return axiosClassic<IProduct[]>({
			url: `/${PRODUCT}/similar/${id}`,
			method: "GET",
		});
	},

	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `/${PRODUCT}/by-slug/${slug}`,
			method: "GET",
		});
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `/${PRODUCT}/by-category/${categorySlug}`,
			method: "GET",
		});
	},

	async getById(id: string | number) {
		return instance<IProduct>({
			url: `/${PRODUCT}/${id}`,
			method: "GET",
		});
	},

	async create() {
		return instance<IProduct>({
			url: `/${PRODUCT}`,
			method: "POST",
		});
	},

	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `/${PRODUCT}/${id}`,
			method: "PUT",
			data,
		});
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `/${PRODUCT}/${id}`,
			method: "DELETE",
		});
	},
};

export default ProductService;
