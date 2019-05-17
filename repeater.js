repeater = chars => {
    return val => {
        return val == " " ? 2 : chars.indexOf(val.toLowerCase()) + 1
    }
}

printer = (sequence, string) => {
    if (!sequence || !string || sequence.length == 0 || string.length == 0) throw new Error("Invalid Parameters");

    var getIters = repeater(sequence);
    string.split("").forEach(curr => {
        var iters = getIters(curr);
        console.log( iters > 0  ? curr.repeat(iters) : curr + " does not occur in the Sequence" );
        })
    }

try {
    printer("abcdefghijklmnopqrstuvwxyz", "Foundry Spatial");
} catch (error) {
    console.log(error.toString());
}
