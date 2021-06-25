import { createMemory } from "../src/S7Memory/index.js"

console.log("================================\n")

let buff = Buffer.alloc(50);
let t;

t = createMemory({ type: "BOOL", name: "myBool" });
t.join(null, [0, 2]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = true;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "BYTE", name: "myByte" });
t.join(null, [1]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = 0xFE;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "USINT", name: "myUSInt" });
t.join(null, [2]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = 253;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "SINT", name: "mySInt" });
t.join(null, [3]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = -128;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "CHAR", name: "myChar" });
t.join(null, [4]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = 'A';
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "WORD", name: "myWord" });
t.join(null, [6]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = [0x11, 0xFE];
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "UINT", name: "myUInt" });
t.join(null, [8]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = 4605;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "INT", name: "myInt" });
t.join(null, [12]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = -378;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "DWORD", name: "myDWord" });
t.join(null, [16]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = [0xF8, 0xEE, 0x11, 0xFE];
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "UDINT", name: "myUDInt" });
t.join(null, [20]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = 0xF8FFFFFF;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "DINT", name: "myDInt" });
t.join(null, [24]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = -2147483647;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");

t = createMemory({ type: "REAL", name: "myReal" });
t.join(null, [28]);
t.mount(buff);
console.log(`Tag ${t.name} :`);
t.value = -366.55;
console.log(t.value);
console.log(t.buffer);
console.log(buff);
console.log("\n\n");
