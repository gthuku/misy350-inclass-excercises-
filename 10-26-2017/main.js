console.log("Hello");

//arrays
let bucket_list = ["Skydiving","go to Mount Everest", "go to NBA finals" ];
console.log(bucket_list[2]);

//for loop
for (let i =0; i<bucket_list.length; i++){
  console.log(bucket_list[i]);
}

//nested loop
let imdb = ["The Shawshank Redmption","The Godfather", "The Godfather: Part 2", "The Dark Knight", "12 Angry Men"]
let ranker = ["The Godfather", "The Shawshank Redememtion", "The Dark Knight", "Fight Club", "8 Mile"]

/*for (let i = 0; i < imdb.length; i++) {
  for (let j = 0; i < ranker.length; j++) {
    if(imdb[i] == ranker[j]){
      console.log(imdb[i]);
    }
  }
}*/

  //while loop
  let balance = 1000;
  let years = 0;

  while (balance<1000000) {
    balance += balance * .07;
    years ++;
  }
  console.log(years);

imdb.forEach(movie => console.log("-" + movie));

let new_list = imdb.filter(movie => movie.slice(0,3)=="The");
new_list.forEach(movie => console.log("- "+ movie));
