import { useState } from "react";

export const SearchProduct = ({ onSearchProduct }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onSearchProduct(inputValue.trim());

    document
      .querySelectorAll("[name=brand]")
      .forEach((x) => (x.checked = false));
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <p>Filtra por marca:</p>
          <input
            type="radio"
            name="brand"
            id="alcatel"
            value="alcatel"
            onChange={onInputChange}
          />
          <label htmlFor="alcatel">Alcatel</label>

          <input
            type="radio"
            name="brand"
            id="acer"
            value="acer"
            onChange={onInputChange}
          />
          <label htmlFor="acer">Acer</label>
        </div>

        <div>
          <p>Filtra por modelo:</p>
          <input
            type="text"
            placeholder="Busca un modelo"
            value={inputValue}
            onChange={onInputChange}
          />
          <button>Buscar</button>
        </div>
      </form>
    </>
  );
};
