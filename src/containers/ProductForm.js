import { useCallback, useRef } from "react";
import { useInsertProduct } from "../hooks/useInsertProduct";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export const ProductForm = () => {
  const formRef = useRef();
  const productNameRef = useRef();
  const productDescriptionRef = useRef();

  const {
    createProduct,
    loading: insertProductLoading,
    error: insertProductError,
  } = useInsertProduct();

  const handleInsertProduct = useCallback(
    (e) => {
      e.preventDefault();
      const name = productNameRef.current.value;
      const description = productDescriptionRef.current.value;
      createProduct({ name, description }).finally(() => {
        formRef.current.reset();
      });
    },
    [createProduct]
  );

  return (
    <form className="max-w-sm mx-auto" ref={formRef}>
      <TextInput inputName="name" label="Product Name" ref={productNameRef} />
      <TextInput
        inputName="description"
        label="Product Description"
        ref={productDescriptionRef}
      />
      <Button onClick={handleInsertProduct}>Save</Button>
      {insertProductLoading && <p>Loading...</p>}
      {insertProductError && <p>Error: {insertProductError.message}</p>}
    </form>
  );
};
