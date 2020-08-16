# Rule 1

```
javascript_modules/node $ node rule1                                                                                                        
(node:86374) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
/Users/mlim/Documents/software/javascript_modules/node/rule1.js:1
import * as all from "./rule2.mjs";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:1054:16)
    at Module._compile (internal/modules/cjs/loader.js:1102:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
```

# Rule 2

```
javascript_modules/node $ node rule2.mjs
(node:86408) ExperimentalWarning: The ESM module loader is experimental.
file:///Users/mlim/Documents/software/javascript_modules/node/rule2.mjs:1
const foo = require("./rule1.js");
            ^

ReferenceError: require is not defined
    at file:///Users/mlim/Documents/software/javascript_modules/node/rule2.mjs:1:13
    at ModuleJob.run (internal/modules/esm/module_job.js:137:37)
    at async Loader.import (internal/modules/esm/loader.js:179:24)
```

# Rule 3

```
javascript_modules/node $ node rule3
internal/modules/cjs/loader.js:984
    throw new ERR_REQUIRE_ESM(filename);
    ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/mlim/Documents/software/javascript_modules/node/es_module.mjs
    at Module.load (internal/modules/cjs/loader.js:984:11)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Module.require (internal/modules/cjs/loader.js:1026:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/Users/mlim/Documents/software/javascript_modules/node/rule3.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12) {
  code: 'ERR_REQUIRE_ESM'
}
```
