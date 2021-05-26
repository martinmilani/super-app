import React from "react";
import { getTeamStats } from "../reducer";
import { useStateValue } from "../StateProvider";

function Table() {
  const [{ team }] = useStateValue();

  const sortStats = (obj) => {
    let arr = [];
    /* Transforma el objeto a un array */
    arr = Object.entries(obj);

    /* Se copia Peso y Altura en un array separado */
    let average = arr.slice(-2);

    /* Se quita peso y altura del array a ordenar */
    let stats = arr.splice(0, 6);

    /* Se ordena el arrayy */
    let sortable = stats.sort((a, b) => b[1] - a[1]);

    /* Se unen los 2 arrays */
    let statsArr = sortable.concat(average);

    return statsArr;
  };

  return (
    <div>
      <table className="table mt-2">
        <tbody>
          {sortStats(getTeamStats(team)).map((item, id) => (
            <tr key={id}>
              <th scope="row">#</th>
              <td className="text-capitalize">{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
