const fs = require('fs');
module.exports = class Tokenizer {
    constructor(vocabulary) {
        this.vocabulary = vocabulary;
        this.index = this.create(vocabulary);
    };

    create(list=Array()) {
        let out = {
            empty_slots: []
        };
        let c = 0;
        list.forEach((e, i) => {
            e.split(' ').forEach((e, i) => {
                if (!Object.keys(out).includes(e)) {
                    out[e] = ++c;    
                }; 
            });
        });
        return(out);
    };

    exists(key=String()) {
        return((Object.keys(this.index).includes(key)) ? true : false);
    };

    find(target) {
        switch(typeof(target)) {
            case 'number':
                return(Object.keys(this.index).find(key => this.index[key] === target));
            case 'string':
                return(this.index[target]);
            default:
                return(false);
        }
    };

    add(key) {
        if (!this.exists(key)) {
            if (this.index.empty_slots.length == 0) {
                return(this.index[key] = Object.keys(this.index).length);
            } else {
                return(this.index[key] = this.index.empty_slots.shift());
            }
        } else {
            return(false);
        }
    };

    remove(key) {
        if (this.exists(key)) {
            this.index.empty_slots.push(this.find(key));
            delete this.index[key];
            return(true);
        } else {
            return(false)
        };
    };

    sort() {
        let out = [];
        for (let key in this.index) {
            out.push([key, this.index[key]]);
        }
        out.sort((a, b) => {
            return(a[1] - b[1]);
        })
        return(out);
    };

    indexLength() {
        return(Object.keys(this.index).length)
    };

    encode(sentence) {
        return(sentence.split(' ').map((e) => {
            if (!this.exists(e)) {
                this.add(e)
            };
            return(this.find(e))
        }));
    }

    decode(sequence) {
        return(sequence.map((e) => {
            return(this.find(e))
        }).join(' '));
    }

    toJSON(path='./index.json') {
        return(fs.writeFileSync(path, JSON.stringify(this.index)));
    };
    fromJSON(path='./index.json') {
        this.index = JSON.parse(fs.readFileSync(path));
    };
};