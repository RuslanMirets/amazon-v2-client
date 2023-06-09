import { FC } from "react";
import Meta from "@/components/ui/Meta";
import Catalog from "@/components/ui/catalog/Catalog";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { TypePaginationProducts } from "@/types/product.interface";

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth();
	const { logout } = useActions();

	return (
		<Meta title="Home">
			{!!user && <button onClick={() => logout()}>Logout</button>}
			<Catalog
				title="Freshed products"
				products={products || []}
				length={length}
			/>
		</Meta>
	);
};

export default Home;
