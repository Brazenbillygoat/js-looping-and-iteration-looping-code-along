
function writeCards(nameArray, eventName) {
  const thankYous = []

  for (i = 0; i < nameArray.length; i++) {
    thankYous.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
  }

  return thankYous
}

writeCards(["Turkey", "Gizzard"], "thanksgiving")


function countDown(start) {
  let count = start;

  while (count >= 0) {
    console.log(count)
    count -= 1;
  }

}

countDown(10)