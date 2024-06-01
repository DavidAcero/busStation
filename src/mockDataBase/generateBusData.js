var moment = require("moment");

const CitiesData = require("./availableCities.json");

function generateRandomBusData() {
  let city = JSON.parse(JSON.stringify(CitiesData));

  let cities = city.map((each) => each.city);

  let busesName = [
    "Earth Travels",
    "Fire Travels",
    "Water Travels",
    "Wind Travels"
  ];

  let boardingPoint = [
    {
      add_time: 15,
      placename: "Central Bus Terminal",
      address: "Oak Avenue, near Art Museum",
    },
    {
      add_time: 30,
      placename: "City Park Facility",
      address: "Main City Park, Great Road",
    },
    {
      add_time: 45,
      placename: "Airport Terminal",
      address: "Fake Blvd, Johnson Av.",
    },
  ];

  let droppingPoint = [
    {
      remove_time: 30,
      placename: "Central Bus Terminal",
      address: "Oak Avenue, near Art Museum",
    },
    {
      remove_time: 15,
      placename: "City Park Facility",
      address: "Main City Park, Great Road",
    },
    {
      remove_time: 0,
      placename: "Airport Terminal",
      address: "Fake Blvd, Johnson Av.",
    },
  ];

  function getRandomPrice(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomTrue() {
    let value = Math.floor(Math.random() * 2);
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  function getBusData() {
    let data = [];
    for (let cityFrom of cities) {
      for (let cityTo of cities) {
        boardingPoint.map((each) => {
          let value = {
            add_time: each.add_time,
            placename: each.placename,
            address: each.address + ", " + cityFrom,
          };
          return value;
        });

        droppingPoint.map((each) => {
          let value = {
            remove_time: each.remove_time,
            placename: each.placename,
            address: each.address + ", " + cityTo,
          };
          return value;
        });
        for (let travelName of busesName) {
          if (getRandomTrue() && cityFrom !== cityTo) {
            let value = {
              name: travelName,
              to: cityTo,
              from: cityFrom,
              ac: getRandomTrue(),
              type: "Sleeper(2T)",
              timing: {
                departure: moment().toISOString(),
                arrival: moment()
                  .add(getRandomPrice(12, 7), "h")
                  .toISOString(),
              },

              boarding_point: [
                {
                  add_time: 15,
                  placename: "Central Bus Terminal",
                  address: "Oak Avenue, near Art Museum",
                },
                {
                  add_time: 30,
                  placename: "City Park Facility",
                  address: "Main City Park, Great Road",
                },
                {
                  add_time: 45,
                  placename: "Airport Terminal",
                  address: "Fake Blvd, Johnson Av.",
                },
              ],
              dropping_point: [
                {
                  remove_time: 30,
                  placename: "Central Bus Terminal",
                  address: "Oak Avenue, near Art Museum",
                },
                {
                  remove_time: 15,
                  placename: "City Park Facility",
                  address: "Main City Park, Great Road",
                },
                {
                  remove_time: 0,
                  placename: "Airport Terminal",
                  address: "Fake Blvd, Johnson Av.",
                },
              ],
              single_seat_price: getRandomPrice(100, 150),
              share_seat_price: getRandomPrice(30, 75),
              booked_seat: [],
              amenities: {
                charging_point: getRandomTrue(),
                reading_light: getRandomTrue(),
                track_my_bus: getRandomTrue(),
                mobile_ticket: getRandomTrue(),
                newspaper: getRandomTrue(),
                emergency_contact_number: getRandomTrue(),
                blankets: getRandomTrue(),
                pillow: getRandomTrue(),
                movie: getRandomTrue(),
                personaltv: getRandomTrue(),
                wifi: getRandomTrue(),
                water_bottle: getRandomTrue(),
                staff_with_mask: getRandomTrue(),
                hand_sanitiser_provided: getRandomTrue(),
                regular_temperature_check: getRandomTrue(),
                deep_cleaned_bus: getRandomTrue(),
              },
            };
            if (getRandomTrue()) {
              data.push(value);
            }
          }
        }
      }
    }

    return data;
  }
  return getBusData();
}

const data = generateRandomBusData();
console.log(JSON.stringify(data));