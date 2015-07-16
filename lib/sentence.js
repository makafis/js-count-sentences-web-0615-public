'use strict';

var countSentences = function(sentences){
  // code your solution here

  var x = sentences.split(".").length - 1;
  x = x + sentences.split("?").length - 1;
  x = x + sentences.split("!").length - 1;
  return x;
};