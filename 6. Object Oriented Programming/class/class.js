// Define a class named House
var House = /** @class */ (function () {
    // Constructor to initialize the properties when creating an instance
    function House(numberOfRooms, color) {
        this.numberOfRooms = numberOfRooms;
        this.color = color;
    }
    // Method to describe what the house can do
    House.prototype.openDoor = function () {
        console.log('Door is open.');
    };
    return House;
}());
// Creating objects (instances) of the House class
var myHouse = new House(3, 'Blue');
var neighborHouse = new House(4, 'Red');
// Using the describeHouse method to get information about each house
console.log("My house has ".concat(myHouse.numberOfRooms, " rooms and is ").concat(myHouse.color, "."));
myHouse.openDoor();
console.log("Neighbor's house has ".concat(neighborHouse.numberOfRooms, " rooms and is ").concat(neighborHouse.color, "."));
neighborHouse.openDoor();
