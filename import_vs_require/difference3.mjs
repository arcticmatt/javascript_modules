// Difference #3
// require allows you to omit .js extensions
//
// import does not

// ===============================
// ========== COMMONJS ==========
// ===============================
// Make sure file extension is .js, not .mjs
// This works!

// const obj = require("./commonjs_module");
// console.log(`obj = ${JSON.stringify(obj)}`);

// =========================
// ========== ESM ==========
// =========================
// Make sure file extension is .mjs, not .js
// This does not work. It won't work if es_module has a .js extension and
// "type": "module" either.

import { a } from "./es_module";
console.log(`a = ${a}`);
