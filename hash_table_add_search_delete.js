class HashTable {
    constructor(size = 10) {
        // initialize table size of 10
        this.keyMap = new Array(10);
    }

    hash(key) {
        // calculate and return an integer value based key
        // use Prime number 
        let total = 0;
        let primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];

            //Only works with string
            let value = char.charCodeAt(0) - 96
            total = (total * primeNumber + value) % this.keyMap.length
        }

    }

    insert(key, value) {
        // hash the key to get an integer index
        let index = this.hash(key);

        //if keyMap in the index is empty
        if (!this.keyMap[index]) {
            //then return 
            this.keyMap[index] = [];
        }

        //push [key, value] to the index
        this.keyMap[index].push([key, value]);
    }

    delete(key) {
        // lookup the key (i.e. hash it to get an index)
        // if the key is, in fact, in the linked list, delete that Node and return it
        let index = this.hash(key);

        if (this.keyMap[index]) {
            this.keyMap = this.keyMap.filter((value) => value !== this.keyMap[index])
        } else {
            // if the key wasn't found return this
            console.log("can't delete. Key is not found")
        }
    }

    search(key) {
        // hash key to get index
        // search the linked list at the index
        // if the key is found, return the value 
        let index = this.hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
        return "value not found is not found";

    }
}

let exampleTable = new HashTable();

exampleTable.insert("first key", "first value");
exampleTable.insert("second key", "second value");

console.log("find the first key")
console.log(exampleTable.search("first key"));

console.log("delete the first key")
exampleTable.delete("first key")
console.log(exampleTable.search("first key"));;
exampleTable.delete("first key")


//traditionally
// const traditionalArray = [null, null, ["first key", "first value"], null, null];

// function findKey(key) {
//     for (let i = 0; i < traditionalArray.length; i++) {
//         if (traditionalArray[i][0] == key) {
//             return traditionalArray[i]
//         } else {
//             return "not found"
//         }
//     }
// }

// console.log(traditionalArray[2][0])

// console.log(findKey("first key"));