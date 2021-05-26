import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import ModalDetails from "./ModalDetails";

function MainCard({ item }) {
  const [, dispatch] = useStateValue();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_FROM_TEAM",
      id: item.id,
    });
  };

  const handleDetails = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <ModalDetails
        item={item}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <div className="card shadow-sm m-2 py-2" style={{ width: "18rem" }}>
        <img
          className="img-fluid m-3 rounded-lg overflow-hidden"
          style={{ height: "20rem", borderRadius: "12px !important" }}
          src={item.img}
          alt={item.name}
        />

        <div className="card-body px-2">
          <h5 className="card-title text-center mb-3">{item.name}</h5>

          <div className="d-flex flex-row mx-2">
            <ul className="list-group flex-column w-50">
              <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                Intelligence
                <span className="badge badge-pill badge-primary">
                  {item.intelligence}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                Strength
                <span className="badge badge-pill badge-primary">
                  {item.strength}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                Speed
                <span className="badge badge-pill badge-primary">
                  {item.speed}
                </span>
              </li>
            </ul>

            <ul className="list-group flex-column w-50">
              <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                Durability
                <span className="badge badge-pill badge-primary">
                  {item.durability}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                Power
                <span className="badge badge-pill badge-primary">
                  {item.power}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                Combat
                <span className="badge badge-pill badge-primary">
                  {item.combat}
                </span>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-center align-items-center my-3">
            <div className=" col-8 d-flex flex-row justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDetails}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
