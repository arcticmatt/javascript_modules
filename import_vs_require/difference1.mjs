// Difference #1
// require is just a function, so you can pass any expression that 
// evaluates to a string (e.g. a function call, a template string)
//
// import can only be used with a string literal

// ===============================
// ========== COMMONJS ==========
// ===============================
// Make sure file extension is .js, not .mjs
// This works!

// const name = "commonjs_module";
// const obj = require(`./${name}`);
// console.log(`obj = ${JSON.stringify(obj)}`);

// =========================
// ========== ESM ==========
// =========================
// Make sure file extension is .mjs, not .js
// This does not work

import { func } from `./${name}`;
