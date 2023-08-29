const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const add = document.getElementById("add");
const sort = document.getElementById("sort");


const random = () => {
    return Math.floor(Math.random()* 9 + 1 );

};

//"Array.from" funksjonen blir brukt til å konvertere htmlCollection til en ordentlig array.
//den tar "lis" som et argument som refererer til Collection av html elementene med klassen "lis"

//forEach((l) => (l.innerHTML = random())) Denne delen itterer gjennom hvert element i listen lagd fra html collection.
//(1) sier at funksjonen tar paramter 1, som representerer det nåværende elementet som bli itterert.
//(l.innerHTML = random()) endrer innholde av elementet med et tilfeldig tall generert ved bruk av random()
/*Når vi caller "addNumbers" funksjonen, velger vi alle HTML elementene med classen "lis", og for hvert element 
setter den innerHTML til et random tall mellom 1 og 9 som er generert av random().
*/
const addNumbers = () => {
    Array.from(lis).forEach((l) => (l.innerHTML = random()));
};

const sortNumbers = () => {
    const numbers = Array.from(lis).map((li) => li.innerHTML);
    return numbers.sort((a,b) => a - b);
}

const updateView = () => {
    const sortedNumbers = sortNumbers();
    const lisAsArray = Array.from(lis);
    sortedNumbers.forEach(
        (number, index) => (lisAsArray[index].innerHTML = number)
    );
};

add.addEventListener("click", addNumbers);
sort.addEventListener("click", updateView);
