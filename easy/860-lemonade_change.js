/*
  At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

  Note that you do not have any change in hand at first.

  Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

  Example 1:
    Input: bills = [5,5,5,10,20]
    Output: true
    Explanation: 
    From the first 3 customers, we collect three $5 bills in order.
    From the fourth customer, we collect a $10 bill and give back a $5.
    From the fifth customer, we give a $10 bill and a $5 bill.
    Since all customers got correct change, we output true.

    Example 2:
      Input: bills = [5,5,10,10,20]
      Output: false
      Explanation: 
      From the first two customers in order, we collect two $5 bills.
      For the next two customers in order, we collect a $10 bill and give back a $5 bill.
      For the last customer, we can not give the change of $15 back because we only have two $10 bills.
      Since not every customer received the correct change, the answer is false.

  Constraints:
    1 <= bills.length <= 105
    bills[i] is either 5, 10, or 20.

  PSEUDOCODE:
    Customers will buy one lemonate for $5 and pay with either a 5, 10 or 20 dollar bill. Confirm if you can provide the correct change
    Date: numbers in an array
    object to keep track of bills
    iterate through the transactions

    try to get rid of big bills first - if customer provides a 20 check to make sure I have 10's first
*/

const lemonadeChange = function(bills) {
const change = {
        5: 0,
        10: 0,
        20: 0
    };

    for (let bill of bills) {
        change[bill] += 1;

        if (bill === 20) {
            if (change[10] > 0) {
                change[10] -= 1;
                change[5] -= 1;
            } else {
                change[5] -= 3;
            }
        } else if (bill === 10) {
            if (change[5] > 0) {
                change[5] -= 1;
            } else {
                return false;
            }
        }

        if (change[5] < 0) {
            return false;
        }
    }
    
    return true;
};

/*
  Example 1:
    Input: bills = [5,5,5,10,20]
    Output: true
*/
    
console.log('Example 1: ', lemonadeChange([5,5,5,10,20]));

/*
  Example 2:
    Input: bills = [5,5,10,10,20]
    Output: false
*/

console.log('Example 2: ', lemonadeChange([5,5,10,10,20]));