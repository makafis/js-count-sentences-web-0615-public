'use strict';

describe('countSentences', function() {
  
  describe( "#countSentences", function() {
    it("should return the number of sentences in a string", function() {
      expect(countSentences("This is one. Here's two. This is three.")).toBe(3);
    });      

    it("should account for question marks", function() {
      expect(countSentences("This is one. Is this two? This is three.")).toBe(3);
    });   

    it("should account for exclamation points", function() {
      expect(countSentences("This is one! Is this two? This is three.")).toBe(3);
    });   

    it("should return zero if there are no sentences in a string", function() {
      expect(countSentences("")).toBe(0);
    });
  });
});
