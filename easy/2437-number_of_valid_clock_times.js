/*
  You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

  In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

  Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.

  Example 1:
    Input: time = "?5:00"
    Output: 2
    Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.
    Input: time = "?5:00"
    Output: 2
    Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.

  Example 2:
    Input: time = "0?:0?"
    Output: 100
    Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.

  Example 3:
    Input: time = "??:??"
    Output: 1440
    Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.

  Constraints:
    time is a valid string of length 5 in the format "hh:mm".
    "00" <= hh <= "23"
    "00" <= mm <= "59"
    Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.

  PSEUDOCODE:
    hh:mm
    01:34 => index positions

    loop time to determine ? index postions and add conditionals to determine posibilities

    Hours
    first: 0, 1, 2
    second, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
    0 => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
    1 => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
    2 => 0, 1, 2, 3

    conditional depending on the first number (if both hh nums are ??)
    24

    if (?h)
    2 or 3

    if (h?)
    4 or 10

    minutes
    first => 0, 1, 2, 3, 4, 5
    second =>  0, 1, 2, 3, 4, 5, 6, 7, 8, 9  

    conditions 
    if (??)
    60

    if (?m)
    6

    if (m?)
    10
*/

const countTime = function(time) {
  let hours = 1;
  let minutes = 1;

  if (time[0] === '?' && time[1] === '?') {
    hours = 24;
  } else if (time[0] === '?' && time[1] >= '4' ) {
    hours = 2;
  } else if (time[0] === '?' && time[1] < '4' ) {
    hours = 3;
  } else if (time[0] !== '2' && time[1] === '?') {
    hours = 10;
  } else if (time[0] === '2' && time[1] === '?'){
    hours = 4
  }
  
  if (time[3] === '?' && time[4] === '?') {
    minutes = 60;
  } else if (time[3] === '?' && time[4] !== '?') {
    minutes = 6;
  } else if (time[3] !== '?' && time[4] === '?'){
    minutes = 10;
  }

  return hours * minutes
};

/*
  Example 1:
    Input: time = "?5:00"
    Output: 2
*/

console.log('Example 1: ', countTime("?5:00"));

/*
  Example 2:
    Input: time = "0?:0?"
    Output: 100
*/

console.log('Example 2: ', countTime("0?:0?"));

/*
  Example 3:
    Input: time = "??:??"
    Output: 1440
*/

console.log('Example 3: ', countTime("??:??"));