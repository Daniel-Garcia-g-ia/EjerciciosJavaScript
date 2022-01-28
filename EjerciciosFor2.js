let numeros = 20;
for (let i = 1; i <= numeros; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("TzStriker");
  } else if (i % 5 == 0) {
    console.log("Striker");
  } else if (i % 3 == 0) {
    console.log("Tz");
  } else {
    console.log(i);
  }
}
