// Declare an interface called Mountain that contains the following properties:
// o name - string
// o height - number


export interface Mountain {
    name: string;
    height: number;
}

// Declare an array called mountains which is an array of type Mountain.
let mountains: Mountain[] = [{
    name: "Killimanjaro",
    height: 19341,
},
{
    name: "Everest",
    height: 29029,
},
{
    name: "Denali",
    height: 20310,
}];


export const findNameOfTallestMountain = (anArrayOfMountainObjects: Mountain[]): string => {
    let tallestMountain: number = 0;
    let tallestMountainName: string = "";

    for (let i = 0; i < anArrayOfMountainObjects.length; i++) {
        if (anArrayOfMountainObjects[i].height > tallestMountain) {
            tallestMountainName = anArrayOfMountainObjects[i].name;
            tallestMountain = anArrayOfMountainObjects[i].height;
        };
    };
    return tallestMountainName; // name of the tallest mountain
};

let findNameofTallestMountainResult: string = findNameOfTallestMountain(mountains);
console.log("find name of tallest mountain: ", findNameofTallestMountainResult); // Everest

