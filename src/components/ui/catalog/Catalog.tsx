import { FC } from "react";
import { IProduct } from "@/types/product.interface";
import Heading from "../Heading";
import Loader from "../Loader";
import ProductItem from "./product-item/ProductItem";

interface ICatalog {
	products: IProduct[];
	isLoading?: boolean;
	title?: string;
	length: number;
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />;

	return (
		<section>
			{title && <Heading>{title}</Heading>}
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</section>
	);
};

export default Catalog;
