function letterFinder(word, match) {
    for(var i=0;i<=word.length;i++){
        word[i] == match ? console.log(match, " found at ", i) : console.log(match, " not found at ", i)
    }
}
letterFinder("test", "t")
