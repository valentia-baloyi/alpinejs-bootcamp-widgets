function longestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
      if ( longest.length <= words[i].length ) {
        longest = words[i];
      }
    }
    return longest;
  }
  function shortestWord(sentence) {
    const words = sentence.split(" ");
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length <= shortest.length) {
        shortest = words[i];
      }
    }
    return (shortest.toLowerCase());
  }function wordLengths(sentence) {
    const words = sentence.split(" ");
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
  }

  document.addEventListener('alpine:init', () => {
    Alpine.data('widget', () => ({
      sentence: '',
      longest: '',
      shortest: '',
      length: 0,
      calculate() {
        this.longest = longestWord(this.sentence);
        this.shortest = shortestWord(this.sentence);
        this.length = wordLengths(this.sentence);
      }
    }));
  });


  function widget() {
      return {
        sentence: '',
        result: null,
        calculate() {
          const words = this.sentence.split(" ");
          let longest = "";
          let shortest = words[0];
          let length = 0;

          for (let i = 0; i < words.length; i++) {
            if (longest.length <= words[i].length) {
              longest = words[i];
            }
            if (words[i].length <= shortest.length) {
              shortest = words[i];
            }
            length += words[i].length;
          }

          this.result = {
            longest: longest,
            shortest: shortest.toLowerCase(),
            length: length
          };
        }
      };
    }
