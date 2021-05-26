import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalDetails({ item, showModal, handleCloseModal }) {
  return (
    <>
      <Modal
        show={showModal}
        animation={false}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul class="list-group">
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0 ">Weight</div>
                <div className="col-8 text-right p-0">{item.weight}</div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Height</div>
                <div className="col-8 text-right p-0">{item.height}</div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Name</div>
                <div className="col-8 text-right p-0">{item.name}</div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Aliases</div>
                <div className="col-8  p-0 overflow-auto text-right">
                  {item.aliases.map((item) => {
                    return item + ", ";
                  })}
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Eye color</div>
                <div className="col-8 text-right p-0">{item.eyeColor}</div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Hair color</div>
                <div className="col-8 text-right p-0">{item.hairColor}</div>
              </div>
            </li>
            <li class="list-group-item">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Base</div>
                <div className="col-8  p-0 overflow-auto text-right">
                  {item.base}
                </div>
              </div>
            </li>
          </ul>
          {/* <ul classname="list-group">
            <li classname="list-group-item">
              
            </li>
            <li classname="list-group-item">
              
            </li>
            <li classname="list-group-item ">
              
            </li>
            <li classname="list-group-item ">
              
            </li>
            <li classname="list-group-item ">
              
            </li>
            <li classname="list-group-item ">
              
            </li>
            <li classname="list-group-item ">
              <div className="d-flex flex-row justify-content-between m-1">
                <div className="col-2 p-0">Base</div>
                <div className="col-8  p-0 overflow-auto text-right">
                  {item.base}
                </div>
              </div>
            </li>
          </ul> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetails;
