'use strict';

var countSentences = function(sentences){
  var statements = sentences.split(".").length - 1;
  var exclaimations = sentences.split("!").length - 1;
  var questions = sentences.split("?").length - 1;
  return statements + exclaimations + questions;
};