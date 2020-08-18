console.log("index");

// ===== All of these work! =====
import { myEsModuleExportedFunction } from "./es_module.js";
// const { myEsModuleExportedFunction } = require("./es_module.js");

// const { myCommonJsModuleExportedFunction } = require("./commonjs_module.js");
// import { myCommonJsModuleExportedFunction } from "./commonjs_module.js";
// ==============================

// ===== Can only use one of these =====
// import { exportBothEs } from "./export_both";
import { exportBothCommonJs } from "./export_both";
// =====================================

function component() {
  const element = document.createElement("div");

  element.innerHTML = "";
  // element.innerHTML += myEsModuleExportedFunction();
  // element.innerHTML += myCommonJsModuleExportedFunction();

  // element.innerHTML += exportBothEs();
  element.innerHTML += exportBothCommonJs();

  return element;
}

document.body.appendChild(component());
