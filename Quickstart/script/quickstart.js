const namePrint = () => {
    const name = prompt('What is you Name');
    const message = `Hello ${name}`;
    alert(message)
}

const add = (a, b) => (a + b);

let movies = ["Movie1", "Movie2", "Movie3"];
movies.push("Movie4");
console.log(movies);
movies.pop();
console.log(movies);

//namePrint();
console.log(add(2, 4));
console.log(add(20, 40));

// movies.forEach(function(movie) {
//     console.log(movie);
// })

movies.forEach(movie => console.log(movie));

for (const movie of movies){
    console.log(movie);
}

const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
console.log(capitalizedFruits) // [ 'APPLE', 'PEAR', 'CHERRY' ]
console.log(fruits);

////////////////////////////////////////////////////////////////////////
///OBJECT PRACTISE/////////////////

var films = [
    {
        title: 'Avengers',
        time: '12pm',
        status: 'available'
      },
      {
        title: 'Wonder Woman',
        time: '2pm',
        status: 'unavailable'
      },
      {
        title: 'The Last Jedi',
        time: '4pm',
        status: 'available'
      },
      {
        title: 'Black Panther',
        time: '6pm',
        status: 'unavailable'
      },
      {
        title: 'Lady Bird',
        time: '8pm',
        status: 'available'
      }];

for (const film of films) {
    if (film.status === "available") {
        console.log(`The movie ${film.title} plays at ${film.time}`);
    } else {
        console.log(`Sorry the movie ${film.title} is not showing today`);
    }
};