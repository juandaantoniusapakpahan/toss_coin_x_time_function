function posibility(num) {
  let pb = 2 ** num;
  const arrResult = [];
  const characters = "HT";
  const randomValues = characters.length;
  while (arrResult.length <= pb) {
    let result = " ";
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * randomValues));
    }
    if (!arrResult.includes(result)) {
      arrResult.push(result);
      console.log(result);
    }
  }
}

posibility(2);
