import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Swal from "sweetalert2";

export const ProductDetailOption = ({ colors, storages, onId }) => {
  const { setUserCart } = useContext(UserContext);
  const { addedToCart, addedToCartCount, handleNewAdd } = useLocalStorage();
  const { register, handleSubmit } = useForm();

  const errorMsg = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Este elemento ya había sido añadido a tu carrito!",
    });
  };

  const successMsg = () => {
    Swal.fire({
      icon: "success",
      text: "Elemento añadido a tu carrito!",
    });
  };

  const onSubmit = (newAddToCart) => {
    const newAdd = {
      id: onId,
      color: newAddToCart.color,
      almacenamiento: newAddToCart.almacenamiento,
    };

    const elementAlreadyAdded = addedToCart.find(
      (element) =>
        element.color === newAdd.color &&
        element.almacenamiento === newAdd.almacenamiento &&
        element.id === newAdd.id
    );

    if (elementAlreadyAdded) {
      return errorMsg();
    }

    handleNewAdd(newAdd);
    setUserCart(addedToCartCount + 1);

    return successMsg();
  };

  return (
    <div className="card-detail">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Colores</label>
          <select {...register("color")}>
            {colors?.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Almacenamiento</label>
          <select {...register("almacenamiento")}>
            {storages?.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Añadir a carrito" />
      </form>
    </div>
  );
};
