import React, { useState } from "react";
import Modal from "components/Modal";

const OfferModal = ({ service }) => {
  const [offer, setOffer] = useState({
    fromUser: "",
    toUser: "",
    service: "",
    status: "pending",
    price: 0,
    duration: 0,
    note: ""
  });

  const handleChange = ({ target: { value, name } }) => {
    if (name === "duration") {
      const price = Math.round(value * service.price * 100) / 100;
      return setOffer({ ...offer, [name]: value, price });
    }

    return setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(offer));
  };

  return (
    <Modal onModalSubmit={handleSubmit} openButtonText="make an offer!">
      <div className="field">
        <input
          onChange={handleChange}
          name="note"
          className="input is-large"
          type="text"
          placeholder="Write some catchy note"
          max="5"
          min="0"
        />
        <p className="help">Note can increase chance of getting the service</p>
      </div>
      <div className="field">
        <input
          onChange={handleChange}
          name="duration"
          className="input is-large"
          type="number"
          placeholder="How long you need service for ?"
          max="5"
          min="0"
        />
        <p className="help">Enter time in hours</p>
      </div>
      <div className="service-price has-text-centered">
        <div className="service-price-title">
          {service.user &&
            `Upon acceptance "${service.user.fullName}" will charge you: `}
        </div>
        <div className="service-price-value">
          <h1 className="title">{offer.price}</h1>
        </div>
      </div>
    </Modal>
  );
};

export default OfferModal;
