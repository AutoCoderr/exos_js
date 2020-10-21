function ucfirst(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase()+chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

function camelCase(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    chaine = chaine.replace(/_/g, " ");
    chaine = chaine.replace(/-/g, " ");
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

function snake_case(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        if (i > 0) {
            str += "_";
        }
        str += words[i].toLowerCase();
    }
    return str;
}

function leet(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return ""
    const toCrypt = {
        A: 4,
        E: 3,
        I: 1,
        O: "0",
        U: "(_)",
        Y: 7
    }

    for (let key in toCrypt) {
        chaine = chaine.replace(new RegExp(key, 'g'), toCrypt[key]);
        chaine = chaine.replace(new RegExp(key.toLowerCase(), 'g'), toCrypt[key]);
    }
    return chaine;
}

function verlan(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return ""
    let words = chaine.split(" ");

    let str = "";
    for (let i=0;i<words.length;i++) {
        if (i>0) {
            str += " ";
        }

        let verlanWord = "";
        for (let j=words[i].length-1;j>=0;j--) {
            verlanWord += words[i].charAt(j);
        }
        str += verlanWord;
    }

    return str;
}

function yoda(string) {
    if (typeof string !== "string" && string !== "") return ""

    return string.split(" ").reverse().join(" ")
}

function prop_access(obj, path) {
    if (typeof(obj) != "object" || obj == null) return path+" not exist";
    if (typeof(path) != "string" || path === "") return obj;
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path+" not exist";
        }
        obj = obj[elem]
    }
    return obj
}

function mod(a,b) {
    while (a < 0) {
        a += b
    }
    a %= b;
    return a;
}

function vig(chaine,code) {

    const numByAlpha = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
        A: 26,
        B: 27,
        C: 28,
        D: 29,
        E: 30,
        F: 31,
        G: 32,
        H: 33,
        I: 34,
        J: 35,
        K: 36,
        L: 37,
        M: 38,
        N: 39,
        O: 40,
        P: 41,
        Q: 42,
        R: 43,
        S: 44,
        T: 45,
        U: 46,
        V: 47,
        W: 48,
        X: 49,
        Y: 50,
        Z: 51
    }

    let alphaByNum = {}
    for (let alpha in numByAlpha) {
        alphaByNum[numByAlpha[alpha]] = alpha;
    }

    let res = "";
    for (let i=0;i<chaine.length;i++) {
        let char = chaine[i];
        let charNumber = numByAlpha[char];
        let charCode = code[i%code.length];
        let charCodeNumber = numByAlpha[charCode];

        charNumber += charCodeNumber;
        charNumber = mod(charNumber,Object.keys(numByAlpha).length);
        char = alphaByNum[charNumber];

        res += char
    }

    return res;
}
//console.log(mod(-15,26));
//console.log(vig("WIKIPEDIA", "crypto"));

//console.log(verlan({coucou: ""}));
//console.log(capitalize(" test"));


/*let prairie = {
    animal : {
        type: {
            name: "TOTO"
        }
    }
}

console.log(prop_access(null, ""));*/

//console.log(leet("anacOnda"))
//console.log(camelCase(""));