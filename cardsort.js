// Task: Write a function which returns a list of incorrect pairs within the student response for the card sort activity

function findIncorrectPairsForStudent(answerKey, studentResponse) {
    // create an incorrect pair array to store the incorrect matches
    let incorrectPairs = [];

    // check if answer key and student responses are provided in input
    if (!answerKey.length) {
        return 'Please enter answer key';
    }

    if (!studentResponse.length) {
        return 'Please enter student responses';
    }

    // get all possible correct pairs from the answer key
    let correctPairs = findAllPairs(answerKey);

    // filter the student response to ignore any arrays of size 1
    studentResponse = studentResponse.filter(x => {
        if (x.length > 1) {
            return x;
        }
    });

    // get all possible pairs from the remaining student responses
    let studentPairs = findAllPairs(studentResponse);

    // check each item in the student pairs array for matches with the correct pairs array
    for (let i = 0; i < studentPairs.length; i++) {
        //if a match isn't found, add the student pair to the incorrect pairs array
        if (!checkMatch(studentPairs[i], correctPairs)) {
            incorrectPairs.push(studentPairs[i]);
        }
    }
    return incorrectPairs;
}

// this function finds all possible pairs within a set of arrays and sorts them in ascending order
function findAllPairs(input) {
    let pairs = [];
    for (let i = 0; i < input.length; i++) {
        let item = input[i].sort((a, b) => a - b);
        for (let m = 0; m < item.length - 1; m++) {
            for (let n = m + 1; n < item.length; n++) {
                pairs.push([item[m], item[n]]);
            }
        }
    }
    return pairs;
}

// this function compares a given pair with an array of pairs to check if there are any matches 
function checkMatch(response, correct) {
    for (let j = 0; j < correct.length; j++) {
        if (response[0] === correct[j][0] && response[1] === correct[j][1]) {
            return true;
        }
    }
    return false;
}

module.exports = findIncorrectPairsForStudent;