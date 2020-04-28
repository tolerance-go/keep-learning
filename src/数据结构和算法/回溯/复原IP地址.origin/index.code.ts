/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
  const segments = [];
  const output = [];
  let n = s.length;

  const valid = (segment) => {
    /*
        Check if the current segment is valid :
        1. less or equal to 255      
        2. the first character could be '0' 
        only if the segment is equal to '0'
        */
    const m = segment.length;
    if (m > 3) return false;
    return segment.charAt(0) != '0' ? segment - '0' <= 255 : m == 1;
  };

  const updateOutput = (currPos) => {
    /*
        Append the current list of segments 
        to the list of solutions
        */
    const segment = s.substring(currPos + 1, n);
    if (valid(segment)) {
      segments.push(segment);
      output.push(segments.join('.'));
      segments.pop();
    }
  };

  const backtrack = (prevPos, dots) => {
    /*
        prevPos : the position of the previously placed dot
        dots : number of dots to place
        */
    // The current dot currPos could be placed
    // in a range from prevPos + 1 to prevPos + 4.
    // The dot couldn't be placed
    // after the last character in the string.
    const maxPos = Math.min(n - 1, prevPos + 4);
    for (let currPos = prevPos + 1; currPos < maxPos; currPos++) {
      const segment = s.substring(prevPos + 1, currPos + 1);
      if (valid(segment)) {
        segments.push(segment); // place dot
        if (dots - 1 == 0)
          // if all 3 dots are placed
          updateOutput(currPos);
        // add the solution to output
        else backtrack(currPos, dots - 1); // continue to place dots
        segments.pop(); // remove the last placed dot
      }
    }
  };

  backtrack(-1, 3);
  return output;
};

export default restoreIpAddresses;
