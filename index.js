const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(driversArray, driver) {
  return driversArray.filter((name) => {
    return name.toLowerCase() === driver.toLowerCase();
  });
}
// console.log(findMatching(drivers, "sally"));

function fuzzyMatch(driversArray, driverString) {
  return driversArray.filter((name) => {
    return name.toLowerCase().startsWith(driverString.toLowerCase());
  });
}
// console.log(fuzzyMatch(drivers, "y"));

const driversHometowns = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(driversObjectsInArray, driverString) {
  return driversObjectsInArray.filter((driver) => {
    return driver.name.toLowerCase() === driverString.toLowerCase();
  });
}
// console.log(matchName(driversHometowns, "Bobby"));
