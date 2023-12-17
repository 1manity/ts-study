export class Dictionary<K, V> {
    private keys: K[] = [];
    private values: V[] = [];

    set(key: K, value: V) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            this.keys.push(key);
            this.values.push(value);
        } else {
            this.values[index] = value;
        }
    }
    delete(key: K) {
        let flag = false;
        const index = this.keys.indexOf(key);
        if (index!== -1) {
            flag = true;
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
        }
        return flag
    }

    forEach(callback: (key: K, value: V) => void) {
        for (let i = 0; i < this.keys.length; i++) {
            callback(this.keys[i], this.values[i]);
        }
    }

    has(key: K) {
        return this.keys.indexOf(key)!== -1;
    }

    get size() {
        return this.keys.length;
    }
}
