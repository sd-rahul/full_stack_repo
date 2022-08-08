
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
        case 'quickSort':
            sortedObj = quickSort(objectData);
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
        keys[j + 1] = temp
    }

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


function quickSort(object) {
    const timeBeforeSort: any = new Date();
    let sortedObj = {}
    let keys = Object.keys(object);

    keys = quickSortCall(keys);

    for (let index in keys) {
        let key = keys[index];
        if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
            sortedObj[key] = quickSort(object[key]);
        } else {
            sortedObj[key] = object[key];
        }
    }

    const timeAfterSort: any = new Date()
    return [sortedObj, timeAfterSort - timeBeforeSort];
}

function quickSortCall(keys) {
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

export { sortAlgorithm };