/**
 * @id js/examples/fn-call
 * @name Calls to _result function
 * @description Finds function calls of the form `_result(...)`
 * @tags call
 *       function
 */

import javascript

// find func result() call 2nd arg global
from CallExpr ce
where ce.getCalleeName().matches("_result")
select ce, ce.getArgument(0), ce.getArgument(1), ce.getFile()