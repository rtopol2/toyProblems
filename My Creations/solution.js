/* Oh noes! There is a bomb! It's in the Window! It's gonna do the bomb murder on us all unless you do something!

An anonymous tip has said that it's only 2 layers deep and has a name of "the savior" but they have no idea how deep the abort code is hidden. Build out your defuse function to find the bomb and then subsequently find (and return) the abort code.

Quick! I don't wanna die because of you!

I mean...

I believe in you! You got this! */

function defuse (node = this) {
  for (let key in node) {
    for (let innerKey in node[key]) {
      if (node[key] && node[key][innerKey] && node[key][innerKey].name && node[key][innerKey].name === "the savior") {
        dive(node[key][innerKey]);
      }
    }
  }
  function dive (node) {
    for (let key in node) {
          if (typeof node[key] === "number" && node[key].toString().length === 6 ) {
             this.code = node[key];
          } else if (typeof node[key] === "object") {
            dive (node[key]);
          }
       }
  }
  return this.code;
}