function evenOddChar (arr) {
  let evens = []
  let odds = []
  let chars = []

  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      chars.push(arr[i])
    }
    else if (typeof arr[i] == 'number' && arr[i] % 2 == 0) {
      evens.push(arr[i])
    }
    else if (typeof arr[i] == 'number' && arr[i] % 2 != 0) {
      odds.push(arr[i])
    }
  }

  function insertionSort (arr) {
    for (i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j] > arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j - 1], arr[j]]
        j--
      }
    }

    return arr

  }

  let finalEvens = insertionSort(evens)
  let finalOdds = insertionSort(odds)
  let finalChars = insertionSort(chars)

  return {'evens': finalEvens , 'odds': finalOdds, 'chars': finalChars}

}

let y = [3, 0, 2, 9, 'p', 7, 6, 't']

let p = evenOddChar(y)
console.log(p);

