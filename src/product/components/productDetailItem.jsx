export const ProductDetailItem = ({
  brand,
  id,
  imgUrl,
  price,
  model,
  cpu,
  ram,
  os,
  displayResolution,
  battery,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weight,
  options,
}) => {
  return (
    <div className="card-detail border">
      <div>
        <img src={imgUrl} alt={model} />
      </div>
      <div className="box2">
        <h2>
          {brand} {model}
        </h2>
        <p>
          <span>Precio:</span> {price} €
        </p>
        <p>
          <span>cpu: </span>
          {cpu}{" "}
        </p>
        <p>
          <span>ram: </span>
          {ram}{" "}
        </p>
        <p>
          <span>Sistema Operativo: </span>
          {os}{" "}
        </p>
        <p>
          <span>Resolucion de pantalla: </span>
          {displayResolution}{" "}
        </p>
        <p>
          <span>Bateria: </span>
          {battery}{" "}
        </p>
        <p>
          <span>Camara primaria: </span>
          {primaryCamera}{" "}
        </p>
        <p>
          <span>Camara secundaria: </span>
          {secondaryCmera}{" "}
        </p>
        <p>
          <span>Dimensiones: </span>
          {dimentions}{" "}
        </p>
        <p>
          <span>Peso: </span>
          {weight} g
        </p>
      </div>
    </div>
  );
};
