function wordLadder(beginWord, endWord, wordList) {
    var shortestSequence = Infinity;
    
    if (wordList.includes(endWord) === -1) return 0;
    
    Array.prototype.sliceOut = function (index) {
        return this.slice(0,index).concat(this.slice(index+1));
    }
    
    String.prototype.oneAway = function (word) {
        var mismatchFound = false;
        for (var i=0; i<this.length; i++) {
            if (this[i] !== word[i]) {
                if (mismatchFound) return false;
                mismatchFound = true;
            }
        }
        return mismatchFound;
    }
    
    function shortest (word, list, count) {
        if (word === endWord) {
            shortestSequence = Math.min(count, shortestSequence);
        } else if (list.length) {
            for (var i=0; i<list.length; i++) {
                if (word.oneAway(list[i])) {
                        shortest(list[i], list.sliceOut(i), count+1);
                }
            }
        }
    }
    
    shortest(beginWord, wordList, 1);
    return shortestSequence < Infinity ? shortestSequence : 0;
}
