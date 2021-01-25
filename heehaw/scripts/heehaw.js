/*
    Jessica Sestak
    1/13/2021
    Prints out one to a hundred with Hee Haw in it
 */

/* loops through 1 - number user enters to print out Hee with number divisible by 3,
    printing out Haw with numbers divisible by 5, and Hee Haw with numbers divisible
    by 3 and 5 and checks to see if the number is a postive number
 */


function heehaw(num) {
    let errNum = document.getElementById("error-number");

    if (isNaN(num) || num < 1) {
        errNum.className = "errors";

    }
    for (let number = 1; number <= num; number++) {

        if (number % 15 == 0) {
            document.write("Hee Haw!");
            document.write("<br>");
        } else if (number % 5 == 0) {
            document.write("Haw!");
            document.write("<br>");
        } else if (number % 3 == 0) {
            document.write("Hee!");
            document.write("<br>");
        } else {
            document.write(number.toString());
            document.write("<br>");
        }
    }
}