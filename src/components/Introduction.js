import React from "react";

import SearchForm from "./SearchForm";
import BookedTickets from "./BookedTickets";

export default function Introduction() {
  return (
    <div className="introduction">
      <h1 className="introduction-title">Online Bus Ticket Booking </h1>
      <SearchForm />
      {/* <BookedTickets /> */}
      <h2></h2>
    </div>
  );
}
