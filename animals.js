let input = prompt("Name a favorite type of animal");
const animals = [""];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("~~~~~~~")
        for (let i = 0; i < animals.length; i++) {
            console.log(`${i}: ${animals[i]}`);
        }
        console.log("~~~~~~~")
    } else if (input === "new") {
        const newAnimal = prompt("Enter a new animal");
        animals.push(newAnimal);
        console.log(`${newAnimal} added to the list!`)
    } else if (input === "delete") {
        const index = parseInt(prompt("Sure, enter an index (number) that you wish to delete"));
        if (!Number.isNaN(index)) {
            const deleted = animals.splice(index, 1);
            console.log(`Ok, ${deleted[0]} has been deleted`);
        } else {
            console.log("Unknown index")
        }
    }
    input = prompt("Name a favorite animal")
}
console.log("You have quit the app!")