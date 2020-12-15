const process = require('process');

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function timeoutAwait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const getStudents = async function () {
    const timeout = randomIntFromInterval(1000, 2000);
    await timeoutAwait(timeout);

    console.log(`getStudents:${timeout}`);
    return [
        { name: "Dupont", cours: [1, 3, 5] },
        { name: "Lea", cours: [2, 4] },
        { name: "Charles", cours: [1] },
    ];
};

const getCourses = async function () {
    const timeout = randomIntFromInterval(1000, 2000);
    await timeoutAwait(timeout);

    console.log(`getStudents:${timeout}`);
    return [
        { id: 1, name: "JS" },
        { id: 2, name: "PHP" },
        { id: 3, name: "C#" },
        { id: 4, name: "F#" },
        { id: 5, name: "CSS" },
    ];
};

const mapping = async function () {
    const timeout = randomIntFromInterval(1, 4);
    await timeoutAwait(timeout);
    const results = await Promise.all([getStudents(), getCourses()]);
    const students = results[0];
    const courses = results[1];
    console.log(`mapping:${timeout}`);
    return students.map((student) => {
        student.cours = student.cours.map((id) =>
            courses.find((cours) => cours.id === id)
        );
        return student;
    });
};

const timer = async function () {
    await timeoutAwait(20000);
    throw new Error("timeout");
};

(async () => {
    const results = await Promise.race([mapping(), timer()]);
    console.log(results);
    console.log("Merge OK")
    process.exit();
})();