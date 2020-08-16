import { myEsModuleExportedFunction } from "./es_module.js";

// None of this other stuff works
// import * as all from "./commonjs_module.js";
// const obj = require("./commonjs_module.js");
// const { myEsModuleExportedFunction } = require("./es_module.js");

function component() {
  const element = document.createElement("div");

  element.innerHTML = myEsModuleExportedFunction();

  return element;
}

document.body.appendChild(component());
