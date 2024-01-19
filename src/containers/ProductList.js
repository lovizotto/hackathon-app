import { useFetchProducts } from "../hooks/useFetchProducts";
import Button from "../components/Button";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

export const ProductList = () => {
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useFetchProducts();

  const {
    deleteProduct,
    loading: deleteProductLoading,
    error: deleteProductError,
  } = useDeleteProduct();
  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };
  if (productsLoading && products.length === 0) return <div>Loading...</div>;
  if (productsError) return <div>Error: {productsError}</div>;
  return (
    <div className="table">
      <div className="table-header-group">
        <div className={`table-cell border p-1 font-bold`}>Name</div>
        <div className={`table-cell border p-1 font-bold`}>Description</div>
      </div>
      {products.map((product) => (
        <div className="table-row border" key={product.id}>
          <div className="table-cell border p-1">{product.name}</div>
          <div className="table-cell border p-1">{product.description}</div>
          <div className="table-cell border p-1">
            <Button
              className="bg-red-600"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
