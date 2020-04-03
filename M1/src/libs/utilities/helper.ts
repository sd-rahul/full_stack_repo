function createObject(keyCount, depth) {
    let generatedObj = {};

    for (let i = 0; i < keyCount; i++) {
        let generatedObjField;

        switch (randomInt(depth ? 6 : 5)) {

            case 0:
                generatedObjField = Number(randomNumber(randomInt(21)));
                break;

            case 1:
                generatedObjField = [];
                break;

            case 2:
                generatedObjField = Math.random() < 0.5 ? true : false;
                break;

            case 3:
                generatedObjField = randomString(randomInt(21));
                break;

            case 4:
                generatedObjField = {};
                break;

            case 5:
                generatedObjField = createObject(Math.floor(keyCount / 2), depth = depth - 1);
                break;
        }
        generatedObj[randomKey(randomInt(21))] = generatedObjField;
    }
    return generatedObj;
}

function randomInt(rightBound) {
    const randomNumber = Math.floor(Math.random() * rightBound)
    return randomNumber < 3 ? 3 : randomNumber;
}

function randomString(size) {
    let alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let generatedString = '';
    for (let i = 0; i < size; i++) {
        generatedString += alphaChars[randomInt(alphaChars.length)];
    }
    return generatedString;
}

function randomKey(size) {
    let alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let generatedString = '';
    for (let i = 0; i < size; i++) {
        generatedString += alphaChars[randomInt(alphaChars.length)];
    }
    return generatedString;
}

function randomNumber(size) {
    let numbers = "0123456789"
    let generatedNumber = '';
    for (let i = 0; i < size; i++) {
        generatedNumber += numbers[randomInt(numbers.length)];
    }
    return generatedNumber;
}

const mergeResult = (sortResult, objectResult) => {
    let merged = []
    for (let i = 0; i < sortResult.length; i++) {
        merged.push({
            ...sortResult[i],
            ...(objectResult.find((itmInner) => itmInner.id === sortResult[i].objectId))
        }
        );
    }
    return merged.map(({ sortDuration, _doc }) => { return ({ ..._doc, sortDuration, id: _doc._id }) })

}

export { createObject, mergeResult };