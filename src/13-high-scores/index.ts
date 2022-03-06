/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling 
 * and addictive games of all time, and a classic of the arcade era. Your task is to write methods that 
 * return the highest score from the list, the last added score and the three highest scores.
 */

import { createNotEmittedStatement } from "typescript";

class HighScores {
  scores: number[];
  
  constructor(scores: number[]) {
    this.scores = scores;
  }

  // pop - treats array as a stack and retrieves the last element
  get latest() {
    return this.scores.pop();
  }

  // sort - originally sorts numbers like strings based in the first digit
  // therefore 80 comes before 9. For this reason we use sort(((a, b) => a - b))
  get personalBest() {
    return this.scores.sort(((a, b) => a - b))[this.scores.length-1];
  }

  // taking into account that there could be less than three results in the array
  get personalTopThree(): number[] {
    let topThree: number[]
    topThree = [] 
    if (this.scores.length >= 3) {
      topThree.push(this.scores.sort(((a, b) => a - b))[this.scores.length-1])
      topThree.push(this.scores.sort(((a, b) => a - b))[this.scores.length-2])
      topThree.push(this.scores.sort(((a, b) => a - b))[this.scores.length-3])
    } else if (this.scores.length == 2) {
      topThree.push(this.scores.sort(((a, b) => a - b))[this.scores.length-1])
      topThree.push(this.scores.sort(((a, b) => a - b))[this.scores.length-2])
    } else if (this.scores.length == 1) {
      topThree.push(this.scores.sort(((a, b) => a - b))[this.scores.length-1])
    }
    return topThree;
  }
}

export { HighScores };
