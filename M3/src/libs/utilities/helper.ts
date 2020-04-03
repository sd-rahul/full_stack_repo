function createObject(keyCount, depth) {
    let generatedObj = {};
    console.log(depth)

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

// helper functions

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

function sortAlgorithm(objectData, algo) {
    let sortedObj = {};
    
    switch (algo) {
        case 'selectionSort':
            sortedObj = selectionSort(objectData);
            break;
        case 'bubbleSort':
            sortedObj = bubbleSort(objectData);
            break;
        case 'insertionSort':
            sortedObj = insertionSort(objectData);
            break
        case 'mergeSort':
            sortedObj = mergeSort(objectData);
            break

    }
    return sortedObj
}

function selectionSort(object) {

    const timeBeforeSort: any = new Date();
                                                                                                                                                          
    let sortedObj = {}
    let keys = Object.keys(object);

    let len = keys.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (keys[min] > keys[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = keys[i];
            keys[i] = keys[min];
            keys[min] = tmp;
        }
    }

    for (let index in keys) {
        let key = keys[index];
        if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
            sortedObj[key] = selectionSort(object[key]);
        } else {
            sortedObj[key] = object[key];
        }
    }

    const timeAfterSort: any = new Date()
    return [sortedObj, timeAfterSort - timeBeforeSort];
}


function bubbleSort(object) {
    console.log('::::::inside bubbleSort:::::::::')
    const timeBeforeSort: any = new Date();
                                                                                                                                                          
    let sortedObj = {}
    let keys = Object.keys(object);
    let len = keys.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (keys[j] > keys[j + 1]) {
                let tmp = keys[j];
                keys[j] = keys[j + 1];
                keys[j + 1] = tmp;
            }
        }
    }

    console.log('key After', keys)

    for (let index in keys) {
        let key = keys[index];
        if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
            sortedObj[key] = bubbleSort(object[key]);
        } else {
            sortedObj[key] = object[key];
        }
    }

    const timeAfterSort: any = new Date()
    return [sortedObj, timeAfterSort - timeBeforeSort];
}


function insertionSort(object) {
    console.log('::::::inside bubbleSort:::::::::')
    const timeBeforeSort: any = new Date();
                                                                                                                                                          
    let sortedObj = {}
    let keys = Object.keys(object);
    for (let i = 1; i < keys.length; i++) {
        let j = i - 1
        let temp = keys[i]
        while (j >= 0 && keys[j] > temp) {
          keys[j + 1] = keys[j]
          j--
        }
        keys[j+1] = temp
      }
    console.log('key After', keys)

    for (let index in keys) {
        let key = keys[index];
        if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
            sortedObj[key] = insertionSort(object[key]);
        } else {
            sortedObj[key] = object[key];
        }
    }

    const timeAfterSort: any = new Date()
    return [sortedObj, timeAfterSort - timeBeforeSort];

}


function mergeSort(object) {
    console.log('::::::inside bubbleSort:::::::::')
    const timeBeforeSort: any = new Date();
                                                                                                                                                          
    let sortedObj = {}
    let keys = Object.keys(object);
    
    keys = quickSort(keys);
    console.log('key After', keys)

    for (let index in keys) {
        let key = keys[index];
        if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
            sortedObj[key] = mergeSort(object[key]);
        } else {
            sortedObj[key] = object[key];
        }
    }

    const timeAfterSort: any = new Date()
    return [sortedObj, timeAfterSort - timeBeforeSort];

}

function quickSort(keys){
    if (keys.length <= 1) {
        return keys;
      }
    
      let pivot = keys[0];
      
      let left = []; 
      let right = [];
    
      for (let i = 1; i < keys.length; i++) {
        keys[i] < pivot ? left.push(keys[i]) : right.push(keys[i]);
      }
    
      return quickSort(left).concat(pivot, quickSort(right));
    
}


export { createObject, sortAlgorithm };