// Difference #2
// require is evaluated inline
//
// import is evaluated before the rest of the script

// ===============================
// ========== COMMONJS ==========
// ===============================
// Make sure file extension is .js, not .mjs
// ===== Expected output =====
// $ node difference2
// difference2
// commonjs_module
// obj = {"a":5}
// ===========================

// console.log("difference2");

// const obj = require("./commonjs_module");
// console.log(`obj = ${JSON.stringify(obj)}`);

// =========================
// ========== ESM ==========
// =========================
// Make sure file extension is .mjs, not .js
// ===== Expected output =====
// $ node difference2.mjs
// es_module
// difference2
// a = 5
// ===========================
console.log("difference2");

import { a } from "./es_module.mjs";
console.log(`a = ${a}`);
