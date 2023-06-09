import { FC } from "react";
import Meta from "@/components/ui/Meta";
import Catalog from "@/components/ui/catalog/Catalog";
import { TypeProducts } from "@/types/product.interface";

const Home: FC<TypeProducts> = ({ products }) => {
	return (
		<Meta title="Home">
			<Catalog products={products} />
		</Meta>
	);
};

export default Home;
