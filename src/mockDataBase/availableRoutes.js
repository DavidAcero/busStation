export const AVAILABLE_ROUTES = {
    data: [
        {
            name:"VRL Travels",
            to:"Mumbai",
            from:"Delhi",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.369Z",
                arrival:"2024-05-31T07:36:20.370Z"
            },
            boarding_point:[
                {
                    add_time:15,
                    _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:985,
            share_seat_price:829,
            booked_seat:[],
            amenities:{
                charging_point:true,
                reading_light:false,
                track_my_bus:true,
                mobile_ticket:false,
                newspaper:true,
                emergency_contact_number:true,
                blankets:false,
                pillow:false,
                movie:false,
                personaltv:true,
                wifi:true,
                water_bottle:true,
                staff_with_mask:false,
                hand_sanitiser_provided:false,
                regular_temperature_check:true,
                deep_cleaned_bus:true
            }
        },
        {
            name:"Parveen Travels",
            to:"Chennai",
            from:"Delhi",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.370Z",
                arrival:"2024-05-31T06:36:20.370Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:997,
            share_seat_price:825,
            booked_seat:[],
            amenities:{
                charging_point:true,
                reading_light:true,
                track_my_bus:true,
                mobile_ticket:true,
                newspaper:false,
                emergency_contact_number:true,
                blankets:true,
                pillow:true,
                movie:false,
                personaltv:true,
                wifi:true,
                water_bottle:true,
                staff_with_mask:true,
                hand_sanitiser_provided:false,
                regular_temperature_check:true,
                deep_cleaned_bus:false
            }
        },
        {
            name:"Parveen Travels",
            to:"Bangalore",
            from:"Mumbai",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.370Z",
                arrival:"2024-05-31T05:36:20.370Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:998,
            share_seat_price:811,
            booked_seat:[],
            amenities:{
                charging_point:false,
                reading_light:false,
                track_my_bus:true,
                mobile_ticket:true,
                newspaper:true,
                emergency_contact_number:true,
                blankets:true,
                pillow:true,
                movie:true,
                personaltv:false,
                wifi:true,
                water_bottle:true,
                staff_with_mask:false,
                hand_sanitiser_provided:true,
                regular_temperature_check:true,
                deep_cleaned_bus:true
            }
        },
        {
            name:"Parveen Travels",
            to:"Mumbai",
            from:"Kolkata",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.370Z",
                arrival:"2024-05-31T07:36:20.370Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:968,
            share_seat_price:811,
            booked_seat:[],
            amenities:{
                charging_point:false,
                reading_light:true,
                track_my_bus:false,
                mobile_ticket:true,
                newspaper:true,
                emergency_contact_number:false,
                blankets:false,
                pillow:true,
                movie:true,
                personaltv:true,
                wifi:true,
                water_bottle:true,
                staff_with_mask:true,
                hand_sanitiser_provided:true,
                regular_temperature_check:true,
                deep_cleaned_bus:false
            }
        },
        {
            name:"VRL Travels",
            to:"Bangalore",
            from:"Kolkata",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.371Z",
                arrival:"2024-05-31T06:36:20.371Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:954,
            share_seat_price:833,
            booked_seat:[],
            amenities:{
                charging_point:false,
                reading_light:false,
                track_my_bus:false,
                mobile_ticket:true,
                newspaper:false,
                emergency_contact_number:false,
                blankets:false,
                pillow:false,
                movie:true,
                personaltv:true,
                wifi:false,
                water_bottle:false,
                staff_with_mask:false,
                hand_sanitiser_provided:true,
                regular_temperature_check:false,
                deep_cleaned_bus:true
            }
        },
        {
            name:"Parveen Travels",
            to:"Mumbai",
            from:"Bangalore",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.371Z",
                arrival:"2024-05-31T08:36:20.371Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:978,
            share_seat_price:827,
            booked_seat:[],
            amenities:{
                charging_point:false,
                reading_light:true,
                track_my_bus:false,
                mobile_ticket:true,
                newspaper:false,
                emergency_contact_number:false,
                blankets:false,
                pillow:false,
                movie:false,
                personaltv:true,
                wifi:false,
                water_bottle:true,
                staff_with_mask:false,
                hand_sanitiser_provided:false,
                regular_temperature_check:false,
                deep_cleaned_bus:true
            }
        },
        {
            name:"Parveen Travels",
            to:"Kolkata",
            from:"Bangalore",
            ac:true,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.371Z",
                arrival:"2024-05-31T04:36:20.371Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:987,
            share_seat_price:765,
            booked_seat:[],
            amenities:{
                charging_point:false,
                reading_light:true,
                track_my_bus:false,
                mobile_ticket:false,
                newspaper:true,
                emergency_contact_number:false,
                blankets:false,
                pillow:true,
                movie:true,
                personaltv:true,
                wifi:false,
                water_bottle:false,
                staff_with_mask:true,
                hand_sanitiser_provided:true,
                regular_temperature_check:false,
                deep_cleaned_bus:true
            }
        },
        {
            name:"VRL Travels",
            to:"Kolkata",
            from:"Bangalore",
            ac:false,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.371Z",
                arrival:"2024-05-31T07:36:20.371Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45,
                    _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:984,
            share_seat_price:763,
            booked_seat:[],
            amenities:{
                charging_point:false,
                reading_light:false,
                track_my_bus:true,
                mobile_ticket:true,
                newspaper:false,
                emergency_contact_number:false,
                blankets:false,
                pillow:false,
                movie:true,
                personaltv:false,
                wifi:false,
                water_bottle:true,
                staff_with_mask:false,
                hand_sanitiser_provided:true,
                regular_temperature_check:true,
                deep_cleaned_bus:true
            }
        },
        {
            name:"VRL Travels",
            to:"Chennai",
            from:"Bangalore",
            ac:false,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.371Z",
                arrival:"2024-05-31T06:36:20.371Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:968,
            share_seat_price:829,
            booked_seat:[],
            amenities:{
                charging_point:true,
                reading_light:false,
                track_my_bus:true,
                mobile_ticket:false,
                newspaper:true,
                emergency_contact_number:false,
                blankets:true,
                pillow:false,
                movie:true,
                personaltv:false,
                wifi:true,
                water_bottle:false,
                staff_with_mask:false,
                hand_sanitiser_provided:true,
                regular_temperature_check:true,
                deep_cleaned_bus:true
            }
        },
        {
            name:"VRL Travels",
            to:"Delhi",
            from:"Chennai",
            ac:false,
            type:"Sleeper(2T)",
            timing:{
                departure:"2024-05-30T21:36:20.371Z",
                arrival:"2024-05-31T06:36:20.371Z"
            },
            boarding_point:[
                {
                    add_time:15, _id: 1,
                    placename:"N.I.T. Parking, Jagnade Square",
                    address:"N.I.T.Parking, Jagnade Square, near 7star Hospital"
                },
                {
                    add_time:30, _id: 2,
                    placename:"Ashirwad Talkies",
                    address:"Ashirwad Talkies, near Karbala Dargah, Great Road"
                },
                {
                    add_time:45, _id: 3,
                    placename:"Loha pool near City Bus Stand",
                    address:"Near City Bus Stand-Loha pool"
                }
            ],
            dropping_point:[
                {
                    remove_time:30, _id: 4,
                    placename:"Namaskar Chowk",
                    address:"Namaskar Chowk"
                },
                {
                    remove_time:15, _id: 5,
                    placename:"Near Laxmi Nagar",
                    address:"Near Laxmi Nagar"
                },
                {
                    remove_time:0, _id: 6,
                    placename:"Shivaji Gate Office",
                    address:"Shivaji Gate"
                }
            ],
            single_seat_price:971,
            share_seat_price:805,
            booked_seat:[],
            amenities:{
                charging_point:true,
                reading_light:false,
                track_my_bus:true,
                mobile_ticket:true,
                newspaper:true,
                emergency_contact_number:false,
                blankets:true,
                pillow:true,
                movie:true,
                personaltv:false,
                wifi:false,
                water_bottle:false,
                staff_with_mask:false,
                hand_sanitiser_provided:false,
                regular_temperature_check:false,
                deep_cleaned_bus:false
            }
        }
    ]
};

