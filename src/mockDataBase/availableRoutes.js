export const AVAILABLE_ROUTES = {
    data: [
        // Tucson - Phoenix
        {
            name: "Earth Travels",
            to: "Phoenix",
            from: "Tucson",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.343Z",
                arrival: "2024-06-01T05:50:50.343Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 115,
            share_seat_price: 43,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: true,
                track_my_bus: false,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: false,
                blankets: true,
                pillow: false,
                movie: false,
                personaltv: true,
                wifi: true,
                water_bottle: true,
                staff_with_mask: false,
                hand_sanitiser_provided: true,
                regular_temperature_check: false,
                deep_cleaned_bus: true
            }
        },
        {
            name: "Fire Travels",
            to: "Tucson",
            from: "Phoenix",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.344Z",
                arrival: "2024-06-01T05:50:50.344Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 104,
            share_seat_price: 50,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: true,
                track_my_bus: true,
                mobile_ticket: true,
                newspaper: true,
                emergency_contact_number: true,
                blankets: true,
                pillow: false,
                movie: false,
                personaltv: false,
                wifi: false,
                water_bottle: false,
                staff_with_mask: false,
                hand_sanitiser_provided: true,
                regular_temperature_check: true,
                deep_cleaned_bus: true
            }
        },

        // Tucson - Las Vegas
        {
            name: "Wind Travels",
            to: "Las Vegas",
            from: "Tucson",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.344Z",
                arrival: "2024-06-01T09:50:50.344Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 141,
            share_seat_price: 52,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: true,
                track_my_bus: true,
                mobile_ticket: true,
                newspaper: false,
                emergency_contact_number: true,
                blankets: true,
                pillow: true,
                movie: false,
                personaltv: false,
                wifi: true,
                water_bottle: false,
                staff_with_mask: false,
                hand_sanitiser_provided: false,
                regular_temperature_check: false,
                deep_cleaned_bus: false
            }
        },
        {
            name: "Water Travels",
            to: "Tucson",
            from: "Las Vegas",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T07:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 117,
            share_seat_price: 52,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: true,
                track_my_bus: true,
                mobile_ticket: true,
                newspaper: false,
                emergency_contact_number: false,
                blankets: false,
                pillow: true,
                movie: true,
                personaltv: false,
                wifi: true,
                water_bottle: true,
                staff_with_mask: false,
                hand_sanitiser_provided: true,
                regular_temperature_check: true,
                deep_cleaned_bus: false
            }
        },

        // Tucson - San Francisco
        {
            name: "Water Travels",
            to: "Tucson",
            from: "San Francisco",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T08:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 137,
            share_seat_price: 37,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: false,
                track_my_bus: false,
                mobile_ticket: true,
                newspaper: false,
                emergency_contact_number: true,
                blankets: false,
                pillow: false,
                movie: true,
                personaltv: true,
                wifi: false,
                water_bottle: false,
                staff_with_mask: true,
                hand_sanitiser_provided: false,
                regular_temperature_check: true,
                deep_cleaned_bus: true
            }
        },

        // Phoenix - Tucson
        {
            name: "Fire Travels",
            to: "Phoenix",
            from: "Tucson",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.344Z",
                arrival: "2024-06-01T07:50:50.344Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 124,
            share_seat_price: 41,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: false,
                track_my_bus: true,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: true,
                blankets: true,
                pillow: true,
                movie: false,
                personaltv: false,
                wifi: false,
                water_bottle: true,
                staff_with_mask: false,
                hand_sanitiser_provided: false,
                regular_temperature_check: true,
                deep_cleaned_bus: true
            }
        },
        {
            name: "Earth Travels",
            to: "Tucson",
            from: "Phoenix",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.344Z",
                arrival: "2024-06-01T09:50:50.344Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 138,
            share_seat_price: 37,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: false,
                track_my_bus: false,
                mobile_ticket: true,
                newspaper: false,
                emergency_contact_number: true,
                blankets: true,
                pillow: false,
                movie: false,
                personaltv: false,
                wifi: false,
                water_bottle: false,
                staff_with_mask: false,
                hand_sanitiser_provided: false,
                regular_temperature_check: true,
                deep_cleaned_bus: true
            }
        },

        // Phoenix - San Francisco
        {
            name: "Earth Travels",
            to: "San Francisco",
            from: "Phoenix",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T05:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 139,
            share_seat_price: 72,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: false,
                track_my_bus: false,
                mobile_ticket: true,
                newspaper: true,
                emergency_contact_number: true,
                blankets: true,
                pillow: false,
                movie: true,
                personaltv: true,
                wifi: true,
                water_bottle: false,
                staff_with_mask: false,
                hand_sanitiser_provided: false,
                regular_temperature_check: false,
                deep_cleaned_bus: true
            }
        },

        // Phoenix - Las Vegas
        {
            name: "Water Travels",
            to: "Las Vegas",
            from: "Phoenix",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T05:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 118,
            share_seat_price: 31,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: true,
                track_my_bus: false,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: true,
                blankets: true,
                pillow: true,
                movie: true,
                personaltv: false,
                wifi: true,
                water_bottle: true,
                staff_with_mask: true,
                hand_sanitiser_provided: false,
                regular_temperature_check: false,
                deep_cleaned_bus: true
            }
        },


        // San Francisco - Los Angeles
        {
            name: "Water Travels",
            to: "Los Angeles",
            from: "San Francisco",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T09:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 120,
            share_seat_price: 70,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: true,
                track_my_bus: true,
                mobile_ticket: true,
                newspaper: true,
                emergency_contact_number: false,
                blankets: false,
                pillow: false,
                movie: false,
                personaltv: false,
                wifi: true,
                water_bottle: false,
                staff_with_mask: false,
                hand_sanitiser_provided: true,
                regular_temperature_check: true,
                deep_cleaned_bus: false
            }
        },

        // San Francisco - Las Vegas
        {
            name: "Fire Travels",
            to: "Las Vegas",
            from: "San Francisco",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T06:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 105,
            share_seat_price: 60,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: false,
                track_my_bus: false,
                mobile_ticket: true,
                newspaper: false,
                emergency_contact_number: false,
                blankets: true,
                pillow: false,
                movie: false,
                personaltv: false,
                wifi: false,
                water_bottle: true,
                staff_with_mask: true,
                hand_sanitiser_provided: false,
                regular_temperature_check: false,
                deep_cleaned_bus: false
            }
        },

        // Los Angeles - Tucson
        {
            name: "Fire Travels",
            to: "Tucson",
            from: "Los Angeles",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T05:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 148,
            share_seat_price: 72,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: true,
                track_my_bus: false,
                mobile_ticket: true,
                newspaper: false,
                emergency_contact_number: false,
                blankets: false,
                pillow: false,
                movie: false,
                personaltv: true,
                wifi: false,
                water_bottle: true,
                staff_with_mask: false,
                hand_sanitiser_provided: true,
                regular_temperature_check: true,
                deep_cleaned_bus: false
            }
        },

        // Los Angeles - San Francisco
        {
            name: "Water Travels",
            to: "San Francisco",
            from: "Los Angeles",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T09:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 144,
            share_seat_price: 45,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: false,
                track_my_bus: true,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: true,
                blankets: true,
                pillow: false,
                movie: false,
                personaltv: true,
                wifi: true,
                water_bottle: true,
                staff_with_mask: true,
                hand_sanitiser_provided: false,
                regular_temperature_check: false,
                deep_cleaned_bus: false
            }
        },
        {
            name: "Wind Travels",
            to: "San Francisco",
            from: "Los Angeles",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T07:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 116,
            share_seat_price: 55,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: false,
                track_my_bus: true,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: false,
                blankets: true,
                pillow: true,
                movie: true,
                personaltv: false,
                wifi: false,
                water_bottle: true,
                staff_with_mask: false,
                hand_sanitiser_provided: false,
                regular_temperature_check: true,
                deep_cleaned_bus: true
            }
        },
        
        // Los Angeles - Las Vegas
        {
            name: "Wind Travels",
            to: "Las Vegas",
            from: "Los Angeles",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T05:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 123,
            share_seat_price: 67,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: false,
                track_my_bus: false,
                mobile_ticket: false,
                newspaper: false,
                emergency_contact_number: false,
                blankets: false,
                pillow: false,
                movie: false,
                personaltv: false,
                wifi: true,
                water_bottle: true,
                staff_with_mask: false,
                hand_sanitiser_provided: false,
                regular_temperature_check: true,
                deep_cleaned_bus: false
            }
        },

        // Las Vegas - Tucson
        {
            name: "Fire Travels",
            to: "Tucson",
            from: "Las Vegas",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T05:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 142,
            share_seat_price: 55,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: false,
                track_my_bus: false,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: false,
                blankets: false,
                pillow: true,
                movie: true,
                personaltv: true,
                wifi: false,
                water_bottle: true,
                staff_with_mask: true,
                hand_sanitiser_provided: false,
                regular_temperature_check: false,
                deep_cleaned_bus: false
            }
        },

        // Las Vegas - Phoenix
        {
            name: "Earth Travels",
            to: "Phoenix",
            from: "Las Vegas",
            ac: false,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T08:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 143,
            share_seat_price: 51,
            booked_seat: [],
            amenities: {
                charging_point: true,
                reading_light: true,
                track_my_bus: true,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: false,
                blankets: false,
                pillow: false,
                movie: false,
                personaltv: false,
                wifi: true,
                water_bottle: true,
                staff_with_mask: true,
                hand_sanitiser_provided: false,
                regular_temperature_check: true,
                deep_cleaned_bus: true
            }
        },
        {
            name: "Water Travels",
            to: "Phoenix",
            from: "Las Vegas",
            ac: true,
            type: "Sleeper(2T)",
            timing: {
                departure: "2024-05-31T22:50:50.345Z",
                arrival: "2024-06-01T08:50:50.345Z"
            },
            boarding_point: [
                {
                    add_time: 15,
                    id: 1,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    add_time: 30,
                    id: 2,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    add_time: 45,
                    id: 3,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            dropping_point: [
                {
                    remove_time: 30,
                    id: 4,
                    placename: "Central Bus Terminal",
                    address: "Oak Avenue, near Art Museum"
                },
                {
                    id: 5,
                    remove_time: 15,
                    placename: "City Park Facility",
                    address: "Main City Park, Great Road"
                },
                {
                    id: 6,
                    remove_time: 0,
                    placename: "Airport Terminal",
                    address: "Fake Blvd, Johnson Av."
                }
            ],
            single_seat_price: 137,
            share_seat_price: 53,
            booked_seat: [],
            amenities: {
                charging_point: false,
                reading_light: false,
                track_my_bus: true,
                mobile_ticket: false,
                newspaper: true,
                emergency_contact_number: false,
                blankets: false,
                pillow: true,
                movie: false,
                personaltv: false,
                wifi: false,
                water_bottle: false,
                staff_with_mask: false,
                hand_sanitiser_provided: true,
                regular_temperature_check: false,
                deep_cleaned_bus: true
            }
        }
    ]
};