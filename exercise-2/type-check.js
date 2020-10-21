function type_check_v1(val, type) {
    switch (typeof val) {
        case 'object':
            if (Array.isArray(val)) return type === "array";
            if (val === null) return type === "null";
            return type === "object";
        default:
            return typeof val === type;
    }
}

function type_check_v2(val, config) {
    if (typeof(config) != "object" || config instanceof Array || config == null) {
        console.log("false 0");
        return false;
    }

    for(let key in config) {
        switch(key) {
            case 'type':
                if(!type_check_v1(val, config[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(config[key]) !== JSON.stringify(val)) return false;
                break;
            case 'enum':
                if (typeof (config[key]) != "object" || !(config[key] instanceof Array)) return false;
                let found = false;
                for (let word of config[key]) {
                    if (JSON.stringify(word) === JSON.stringify(val)) {
                        found = true;
                        break;
                    }
                }
                if (!found) return false;
        }
    }
    return true;
}

console.log(type_check_v2(2, {type: "number", enum: [1,2,3]}))