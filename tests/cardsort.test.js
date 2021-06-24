const findIncorrectPairsForStudent = require('../cardsort');

it('should return an empty array when no incorrect pairs are present', () => {
    const answerKey = [[9, 8, 6], [7, 5]];
    const studentResponse = [[5, 7], [8, 6], [9]];
    const expectedOutput = [];
    expect(findIncorrectPairsForStudent(answerKey, studentResponse)).toEqual(expectedOutput);
})

it('should return an array of incorrect pairs when incorrect pairs are present', () => {
    const answerKey = [[1, 2, 3], [4, 5]];
    const studentResponse = [[1, 4], [3, 5]];
    const expectedOutput = [[1, 4], [3, 5]];
    expect(findIncorrectPairsForStudent(answerKey, studentResponse)).toEqual(expectedOutput);
})

it('should return an array of only incorrect pairs when both incorrect pairs and correct pairs are present', () => {
    const answerKey = [[1, 2, 3], [4, 5]];
    const studentResponse = [[1, 2, 4], [3, 5]];
    const expectedOutput = [[1, 4], [2, 4], [3, 5]];
    expect(findIncorrectPairsForStudent(answerKey, studentResponse)).toEqual(expectedOutput);
})

it('should return an error message if no responses are inputted', () => {
    const answerKey = [[1, 2, 3], [4, 5]];
    const studentResponse = [];
    const expectedOutput = 'Please enter student responses';
    expect(findIncorrectPairsForStudent(answerKey, studentResponse)).toEqual(expectedOutput);
})

it('should return an error message if no answer key is given', () => {
    const answerKey = [];
    const studentResponse = [[1, 2, 4], [3, 5]];
    const expectedOutput = 'Please enter answer key';
    expect(findIncorrectPairsForStudent(answerKey, studentResponse)).toEqual(expectedOutput);
})