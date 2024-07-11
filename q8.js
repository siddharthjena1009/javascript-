//Implement a simple HashMap class with put, get, and remove methods.
class HashMap {
    constructor() {
        this.map = {};
    }

    // Hash function to generate a key
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    // Put method to add a key-value pair
    put(key, value) {
        const hash = this._hash(key);
        this.map[hash] = value;
    }

    // Get method to retrieve the value for a given key
    get(key) {
        const hash = this._hash(key);
        return this.map[hash] !== undefined ? this.map[hash] : null;
    }

    // Remove method to delete the key-value pair
    remove(key) {
        const hash = this._hash(key);
        if (this.map[hash] !== undefined) {
            delete this.map[hash];
        }
    }
}

// Example usage
const hashMap = new HashMap();
hashMap.put('name', 'John Doe');
console.log(hashMap.get('name')); // Output: John Doe
hashMap.put('age', 30);
console.log(hashMap.get('age')); // Output: 30
hashMap.remove('name');
console.log(hashMap.get('name')); // Output: null
