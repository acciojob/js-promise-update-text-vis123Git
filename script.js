const output = document.getElementById("output");

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, world!");
    }, 1000);
});

async function updateText() {
    try {
        const data = await p1;
        output.innerText = data;
    } catch (error) {
        console.error(error);
    }
}

updateText();
