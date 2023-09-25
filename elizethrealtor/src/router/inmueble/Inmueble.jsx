import { Realtor } from "../../data";
import InmuebleID from "../../components/InmuebleID/InmuebleID";
import { useParams } from "react-router-dom";

const Inmueble = () => {
  const { id } = useParams();

  const productosFiltrados = Realtor.filter((item) => item.id === parseInt(id));

  console.log(id);

  return (
    <div>
      {productosFiltrados.map((item) => (
        <InmuebleID key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Inmueble;