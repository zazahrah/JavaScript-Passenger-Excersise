var penumpang = 20;
var speed = 20;

if (penumpang == 0) {
  console.log(speed)
}
else if (penumpang < 2) {
  console.log(speed - 2)
}
else if (penumpang == 4) {
  console.log(speed - 7)
}
else if (penumpang >= 2 && penumpang < 4) {
  console.log(speed - 5)
}
else {
  console.log("Becak Tidak jalan")
}