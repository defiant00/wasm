var memory = new WebAssembly.Memory({ initial: 1 });

var importObject = { console: { log: consoleLogString }, js: { memory: memory } };

function consoleLogString(offset, length) {
    var bytes = new Uint8Array(memory.buffer, offset, length);
    var string = new TextDecoder('utf8').decode(bytes);
    console.log(string);
}

WebAssembly.instantiateStreaming(fetch('test.wasm'), importObject)
    .then(obj => {
        obj.instance.exports.greet();
    });