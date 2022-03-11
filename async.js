let bar;

function a(callback) {
    //callback()  bar undefiend
    process.nextTick(callback) // bar 1
}

a(() => {
    console.log("bar", bar);
})

bar = 1;