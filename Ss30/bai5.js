function capitalizeLastLetter(inputString) {
    const words = inputString.split(' ');

    const capitalizedWords = words.map(word => {
        const lastCharIndex = word.length - 1;
        return word.slice(0, lastCharIndex) + word.charAt(lastCharIndex).toUpperCase();
    });

    const resultString = capitalizedWords.join(' ');

    return resultString;
}

const userInput = 'Hello world';

const result = capitalizeLastLetter(userInput);
console.log(result);
