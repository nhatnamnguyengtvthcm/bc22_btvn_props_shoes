import React from "react";

export default function Modal(props) {
  const { shoesChoiced } = props;
  return (
    <div>
      {/* The Modal */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{shoesChoiced.name}</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {/* <img className="card-img-top" src={shoesChoiced.image} alt={shoesChoiced.image} /> */}
              <img
                className="card-img-top"
                src="http://svcy3.myclass.vn/images/nike-air-max-97.png"
                alt={shoesChoiced.image}
              />
              <table className="table">
                <tbody>

                  <tr>
                    <th>Name</th>
                    <td>{shoesChoiced.name}</td>
                    
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>{shoesChoiced.price}</td>
                    
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{shoesChoiced.shortDescription}</td>
              
                  </tr>
                  <tr>
                    <th>Quantity</th>
                    <td>{shoesChoiced.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
