// All of these work!

// import { myEsModuleExportedFunction } from "./es_module.js";
// const { myEsModuleExportedFunction } = require("./es_module.js");

// const { myCommonJsModuleExportedFunction } = require("./commonjs_module.js");
// import { myCommonJsModuleExportedFunction } from "./commonjs_module.js";

function component() {
  const element = document.createElement("div");

  // element.innerHTML = myEsModuleExportedFunction();
  // element.innerHTML = myCommonJsModuleExportedFunction();

  return element;
}

document.body.appendChild(component());
