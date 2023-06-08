import Image from "next/image";
import { FC } from "react";
import { IProduct } from "@/types/product.interface";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div>
				<FavoriteButton productId={product.id} />
				<AddToCartButton productId={product.id} />
				<Image
					src={product.images[0]}
					width={300}
					height={300}
					alt={product.name}
				/>
			</div>
			<h3>{product.name}</h3>
			<div>{product.category.name}</div>
			<ProductRating rating={product.rating} />
			<div>{product.price}</div>
		</div>
	);
};

export default ProductItem;
