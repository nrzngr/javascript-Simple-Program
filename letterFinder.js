function letterFinder(word, match){
  for(var i = 0;i<=word.length;i++) {
    if(word[i] == match) {
      console.log(match, " found at ", i)
    } else {
      console.log(match, " not found in ", word)
    }
  }
}
