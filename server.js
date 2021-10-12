// Word count challenge

const countWords = (phrase) => {
    let wordObj = {}
    let words = phrase.toLowerCase().match(/\w+('\w+)?/g)
    words.forEach((w) => {
        wordObj.hasOwnProperty(w) ? wordObj[w]++ : wordObj[w] = 1;
    })
    console.log(wordObj)
    return wordObj
};
countWords("That's the password: 'PASSWORD 123'!")


// Minnesweeper
const annotate = (input) => {
    const answer = input.map((i, idx, square) => [...i].map((j, jdx) => {
      if (j === '*') return '*'
      let count = 0
      for (let i=idx-1; i<idx+2; i++) {
        for (let ii=jdx-1; ii<jdx+2; ii++) {
          if (!(i===idx && ii===jdx) && square[i] && square[i][ii]==='*') count++
        }
      }
      return count ? count : ' '
    }).join(''))

    console.log(answer)
    return answer
};
annotate([' * * ', '  *  ', '  *  ', '     '])
