 // 1: House object
        let house = {
            owner: "Mr. Ahmed",
            location: "Hodan, Mogadishu",
            rooms: 5
        };

        console.log("HOUSE OBJECT:");
        console.log(house.owner);
        console.log(house.location);
        console.log(house.rooms);

        let employee = {
            fullName: "Amina Mohamed",
            position: "Software Developer",
            salary: 1200
        };

        console.log("EMPLOYEE OBJECT:");
        console.log(employee.fullName);
        console.log(employee.position);
        console.log(employee.salary);

        // 3: Constructor Function
        function Car(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }

        let car3 = new Car("Toyota", "Land Cruiser V8", 2020);

        console.log("CAR OBJECT (Constructor):");
        console.log(car3.brand);
        console.log(car3.model);
        console.log(car3.year);

        // 4: Laptop object
        let laptop = {
            name: "HP Pavilion",
            processor: "Core i7",
            year: 2022
        };

        console.log("LAPTOP OBJECT:");
        console.log(laptop.name);
        console.log(laptop.processor);
        console.log(laptop.year);

        // 5: Countries array
        let countries = [
            { name: "Somalia", capital: "Mogadishu", population: 17000000 },
            { name: "Kenya", capital: "Nairobi", population: 54000000 },
            { name: "Turkey", capital: "Ankara", population: 85000000 },
            { name: "Qatar", capital: "Doha", population: 2900000 }
        ];

        console.log("COUNTRIES LIST:");
        for (let i = 0; i < countries.length; i++) {
            console.log(countries[i].name);
            console.log(countries[i].capital);
            console.log(countries[i].population);
        }

        //QEEBTA LABAD

        // 1. Bedel property-ga object
let houseE = { owner: "Mr. Ahmed", location: "Hodan", rooms: 5 };
houseE.rooms = 6; // rooms ka bedelay
console.log("1. House Object:");
console.log(houseE);

// 2. Ku dar property cusub
let employeeE = { fullName: "Amina Mohamed", position: "Developer", salary: 1200 };
employeeE.department = "IT"; // department ku daray
console.log("2. Employee Object:");
console.log(employeeE);

// 3. Method-ka object
let person = {
    name: "Ali",
    greet: function() {
        return "Hello " + this.name;
    }
};
console.log("3. Person Method:");
console.log(person.greet());

// 4. Loop examples
console.log("4.1 for...in Loop (House):");
for (let key in house) {
    console.log(key + ": " + house[key]);
}

console.log("4.2 Object.entries (Employee):");
let entries = Object.entries(employee);
for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0] + ": " + entries[i][1]);
}

console.log("4.3 Object.keys (Person):");
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

console.log("4.4 Object.values (Person):");
let values = Object.values(person);
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// 5. JSON creation
let student = { name: "Zahra", age: 22, major: "CS" };
let studentJSON = JSON.stringify(student);
console.log("5. JSON String (Student):");
console.log(studentJSON);

// 6. JSON to object
let studentObj = JSON.parse(studentJSON);
console.log("6. Object from JSON:");
console.log(studentObj);

// 7. Object to JSON again
let newJSON = JSON.stringify(studentObj);
console.log("7. Object to JSON:");
console.log(newJSON);
