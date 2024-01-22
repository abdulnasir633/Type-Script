// Define a class named House
class House {
   // Properties or attributes of the house
    numberOfRooms: number;
    color: string;
  
   // Constructor to initialize the properties when creating an instance
    constructor(numberOfRooms: number, color: string) {
      this.numberOfRooms = numberOfRooms;
      this.color = color;
    }
  
    // Method to describe what the house can do
    openDoor(): void {
      console.log('Door is open.');
    }
  }
  
  // Creating objects (instances) of the House class
  const myHouse = new House(3, 'Blue');
  const neighborHouse = new House(4, 'Red');
  
  // Using the describeHouse method to get information about each house
  console.log(`My house has ${myHouse.numberOfRooms} rooms and is ${myHouse.color}.`);
  myHouse.openDoor();
  
  console.log(`Neighbor's house has ${neighborHouse.numberOfRooms} rooms and is ${neighborHouse.color}.`);
  neighborHouse.openDoor();
  