import React, { useState, useEffect } from 'react';
import EachPassengerForm from './EachPassengerForm';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from "moment";
import axios from 'axios';

import {
  emptyAll,
  selectSeats,
  selectContactData,
  selectPassengerData,
  selectSelectedBusData,
  selectDate,
} from '../features/seats/seatsSlice';
import ContactForm from './ContactForm';
import letter from '../images/letter.svg';
import person from '../images/person.svg';
import checked from '../images/checked.svg';
import LoadingPayment from './LoadingPayment';

const PassengerDetail = ({
  handleCloseClick,
  total,
  boardingData,
  droppingData,
  timing,
}) => {
  const seats = useSelector(selectSeats);
  const contactData = useSelector(selectContactData);
  const passengerData = useSelector(selectPassengerData);
  const busData = useSelector(selectSelectedBusData);
  const date = useSelector(selectDate);

  const dispatch = useDispatch();
  const history = useHistory();

  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (seats.length === passengerData.length && contactData.length !== 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        bookTickets();
      }, 3000);
    }
    return () => {
      setIsSubmitForm(false);
    };
  }, [isSubmitForm]);

  const handleSubmitForm = () => {
    setIsSubmitForm(true);
  };

  const handleUnSubmitForm = () => {
    setIsSubmitForm(false);
  };

  async function bookTickets() {
    try {
      const requests = passengerData.map((each) => {
        let ticketToAdd = {
          data: {
            id: 2640, 
            name: each.name,
            gender: each.gender,
            age: parseInt(each.age),
            email: "nikhilthakare14@gmail.com",
            phone: 9405135957,
            boarding_point: each.boarding_point,
            dropping_point: each.dropping_point,
            boarding_time: moment(timing.arrival)
              .add(boardingData.add_time, "m")
              .format("HH:mm A"),
            dropping_time: moment(timing.departure)
              .add(droppingData.remove_time, "m")
              .format("HH:mm A"),
            price: total,
            date: moment(date).format("dddd, MMMM DD, YYYY"),
            seatno: each.seatno,
          }
        };
        return ticketToAdd;
      });

      const responses = await axios.all(requests);

      if (responses && responses.length !== 0) {
        dispatch(emptyAll());

        const ticketInfo = responses.map((each) => each.data);

        history.push({
          pathname: '/bookedtickets',
          state: {
            tickets: ticketInfo,
            total,
            data: busData,
          },
        });
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while booking tickets. Please try again.');
    }
  }

  if (isLoading) {
    return (
      <div className="passenger">
        <div className="payment-detail">
          <div className="payment-loading-half-circle"></div>
          <div className="payment-box">
            <img src={checked} className="payment-logo" />
            <h3 className="payment-title">Payment Successful</h3>
          </div>
          <div className="payment-amount-box">
            <span className="payment-amount-title">Amount Paid: </span>
            <span className="payment-amount-value">Rs. {total} </span>
          </div>
          <div className="payment-pdf">
            <LoadingPayment title={"Generating your PDF ticket"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="passenger">
      <div className="passenger-detail">
        <div className="passenger-row">
          <h3>Passenger Detail</h3>
          <button
            className="passenger-back-button"
            onClick={handleCloseClick}
          ></button>
        </div>
        <div className="passenger-scroll">
          <div>
            <div className="passenger-information-box">
              <img src={person} className="passenger-information-logo" />
              <h4>Passenger Information</h4>
            </div>
            {seats.map((id, index) => {
              return (
                <EachPassengerForm
                  key={id}
                  id={id}
                  index={index}
                  isSubmitForm={isSubmitForm}
                  UnSubmitForm={handleUnSubmitForm}
                  boardingData={boardingData}
                  droppingData={droppingData}
                />
              );
            })}
          </div>
          <div>
            <div className="passenger-information-box">
              <img src={letter} className="passenger-information-logo" />
              <h4>Contact Details</h4>
            </div>
            <ContactForm isSubmitForm={isSubmitForm} UnSubmitForm={handleUnSubmitForm} />
          </div>
        </div>
        <div className="passenger-bill">
          <div className="passenger-bill-amount">
            <span>Total Amount :</span>
            <span>
              <strong>INR {total}</strong>
            </span>
          </div>
          <button
            className="passenger-book-ticket-button"
            onClick={handleSubmitForm}
          >
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetail;