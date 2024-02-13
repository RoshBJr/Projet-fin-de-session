"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit";
exports.ids = ["vendor-chunks/unist-util-visit"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-visit/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-visit/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.CONTINUE),\n/* harmony export */   EXIT: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.EXIT),\n/* harmony export */   SKIP: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.SKIP),\n/* harmony export */   visit: () => (/* binding */ visit)\n/* harmony export */ });\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit-parents */ \"(rsc)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */ /**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */ // To do: use types from `unist-util-visit-parents` when it’s released.\n/**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */ /**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */ /**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */ /**\n * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint\n *   Number; capped reasonably.\n */ /**\n * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment\n *   Increment a number in the type system.\n * @template {Uint} [I=0]\n *   Index.\n */ /**\n * @typedef {(\n *   Node extends UnistParent\n *   ? Node extends {children: Array<infer Children>}\n *     ? Child extends Children ? Node : never\n *     : never\n *   : never\n * )} InternalParent\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */ /**\n * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent\n *   Collect nodes in `Tree` that can be parents of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */ /**\n * @typedef {(\n *   Depth extends Max\n *   ? never\n *   :\n *     | InternalParent<Node, Child>\n *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>\n * )} InternalAncestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */ /**\n * @typedef {(\n *   Tree extends UnistParent\n *     ? Depth extends Max\n *       ? Tree\n *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>\n *     : Tree\n * )} InclusiveDescendant\n *   Collect all (inclusive) descendants of `Tree`.\n *\n *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to\n *   > recurse without actually running into an infinite loop, which the\n *   > previous version did.\n *   >\n *   > Practically, a max of `2` is typically enough assuming a `Root` is\n *   > passed, but it doesn’t improve performance.\n *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.\n *   > Using up to `10` doesn’t hurt or help either.\n * @template {UnistNode} Tree\n *   Tree type.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */ /**\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform `parent`.\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of `parent` still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Visited extends UnistNode ? number | undefined : never} index\n *   Index of `node` in `parent`.\n * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent\n *   Parent of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n * @template {UnistNode} [Visited=UnistNode]\n *   Visited node type.\n * @template {UnistParent} [Ancestor=UnistParent]\n *   Ancestor type.\n */ /**\n * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch\n *   Build a typed `Visitor` function from a node and all possible parents.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} Visited\n *   Node type.\n * @template {UnistParent} Ancestor\n *   Parent type.\n */ /**\n * @typedef {(\n *   BuildVisitorFromMatch<\n *     Matches<Descendant, Check>,\n *     Extract<Descendant, UnistParent>\n *   >\n * )} BuildVisitorFromDescendants\n *   Build a typed `Visitor` function from a list of descendants and a test.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} Descendant\n *   Node type.\n * @template {Test} Check\n *   Test type.\n */ /**\n * @typedef {(\n *   BuildVisitorFromDescendants<\n *     InclusiveDescendant<Tree>,\n *     Check\n *   >\n * )} BuildVisitor\n *   Build a typed `Visitor` function from a tree and a test.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} [Tree=UnistNode]\n *   Node type.\n * @template {Test} [Check=Test]\n *   Test type.\n */ \n\n/**\n * Visit nodes.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @overload\n * @param {Tree} tree\n * @param {Check} check\n * @param {BuildVisitor<Tree, Check>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @overload\n * @param {Tree} tree\n * @param {BuildVisitor<Tree>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @param {UnistNode} tree\n *   Tree to traverse.\n * @param {Visitor | Test} testOrVisitor\n *   `unist-util-is`-compatible test (optional, omit to pass a visitor).\n * @param {Visitor | boolean | null | undefined} [visitorOrReverse]\n *   Handle each node (when test is omitted, pass `reverse`).\n * @param {boolean | null | undefined} [maybeReverse=false]\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns {undefined}\n *   Nothing.\n *\n * @template {UnistNode} Tree\n *   Node type.\n * @template {Test} Check\n *   `unist-util-is`-compatible test.\n */ function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {\n    /** @type {boolean | null | undefined} */ let reverse;\n    /** @type {Test} */ let test;\n    /** @type {Visitor} */ let visitor;\n    if (typeof testOrVisitor === \"function\" && typeof visitorOrReverse !== \"function\") {\n        test = undefined;\n        visitor = testOrVisitor;\n        reverse = visitorOrReverse;\n    } else {\n        // @ts-expect-error: assume the overload with test was given.\n        test = testOrVisitor;\n        // @ts-expect-error: assume the overload with test was given.\n        visitor = visitorOrReverse;\n        reverse = maybeReverse;\n    }\n    (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.visitParents)(tree, test, overload, reverse);\n    /**\n   * @param {UnistNode} node\n   * @param {Array<UnistParent>} parents\n   */ function overload(node, parents) {\n        const parent = parents[parents.length - 1];\n        const index = parent ? parent.children.indexOf(node) : undefined;\n        return visitor(node, index, parent);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztDQUlDLEdBRUQ7Ozs7Ozs7Q0FPQyxHQUVELHVFQUF1RTtBQUV2RTs7Ozs7Ozs7Ozs7Q0FXQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJDLEdBRUQ7Ozs7Ozs7Ozs7O0NBV0MsR0FFRDs7O0NBR0MsR0FFRDs7Ozs7Q0FLQyxHQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FFRDs7Ozs7OztDQU9DLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdCQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUNDLEdBRUQ7Ozs7Ozs7OztDQVNDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7O0NBY0MsR0FFRDs7Ozs7Ozs7Ozs7Ozs7Q0FjQyxHQUVvRDtBQUVRO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOENDLEdBQ00sU0FBU0ksTUFBTUMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxZQUFZO0lBQ3ZFLHVDQUF1QyxHQUN2QyxJQUFJQztJQUNKLGlCQUFpQixHQUNqQixJQUFJQztJQUNKLG9CQUFvQixHQUNwQixJQUFJQztJQUVKLElBQ0UsT0FBT0wsa0JBQWtCLGNBQ3pCLE9BQU9DLHFCQUFxQixZQUM1QjtRQUNBRyxPQUFPRTtRQUNQRCxVQUFVTDtRQUNWRyxVQUFVRjtJQUNaLE9BQU87UUFDTCw2REFBNkQ7UUFDN0RHLE9BQU9KO1FBQ1AsNkRBQTZEO1FBQzdESyxVQUFVSjtRQUNWRSxVQUFVRDtJQUNaO0lBRUFSLHNFQUFZQSxDQUFDSyxNQUFNSyxNQUFNRyxVQUFVSjtJQUVuQzs7O0dBR0MsR0FDRCxTQUFTSSxTQUFTQyxJQUFJLEVBQUVDLE9BQU87UUFDN0IsTUFBTUMsU0FBU0QsT0FBTyxDQUFDQSxRQUFRRSxNQUFNLEdBQUcsRUFBRTtRQUMxQyxNQUFNQyxRQUFRRixTQUFTQSxPQUFPRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ04sUUFBUUY7UUFDdkQsT0FBT0QsUUFBUUcsTUFBTUksT0FBT0Y7SUFDOUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvbGliL2luZGV4LmpzPzhiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IFVuaXN0Tm9kZVxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFVuaXN0UGFyZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKS5WaXNpdG9yUmVzdWx0fSBWaXNpdG9yUmVzdWx0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7RXhjbHVkZTxpbXBvcnQoJ3VuaXN0LXV0aWwtaXMnKS5UZXN0LCB1bmRlZmluZWQ+IHwgdW5kZWZpbmVkfSBUZXN0XG4gKiAgIFRlc3QgZnJvbSBgdW5pc3QtdXRpbC1pc2AuXG4gKlxuICogICBOb3RlOiB3ZSBoYXZlIHJlbW92ZSBhbmQgYWRkIGB1bmRlZmluZWRgLCBiZWNhdXNlIG90aGVyd2lzZSB3aGVuIGdlbmVyYXRpbmdcbiAqICAgYXV0b21hdGljIGAuZC50c2AgZmlsZXMsIFRTIHRyaWVzIHRvIGZsYXR0ZW4gcGF0aHMgZnJvbSBhIGxvY2FsIHBlcnNwZWN0aXZlLFxuICogICB3aGljaCBkb2VzbuKAmXQgd29yayB3aGVuIHB1Ymxpc2hpbmcgb24gbnBtLlxuICovXG5cbi8vIFRvIGRvOiB1c2UgdHlwZXMgZnJvbSBgdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzYCB3aGVuIGl04oCZcyByZWxlYXNlZC5cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBGbiBleHRlbmRzICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBpbmZlciBUaGluZ1xuICogICA/IFRoaW5nXG4gKiAgIDogRmFsbGJhY2tcbiAqICl9IFByZWRpY2F0ZVxuICogICBHZXQgdGhlIHZhbHVlIG9mIGEgdHlwZSBndWFyZCBgRm5gLlxuICogQHRlbXBsYXRlIEZuXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgZnVuY3Rpb24gdGhhdCBpcyBhIHR5cGUgZ3VhcmQgKHN1Y2ggYXMgYCh4KTogeCBpcyBZYCkuXG4gKiBAdGVtcGxhdGUgRmFsbGJhY2tcbiAqICAgVmFsdWUgdG8geWllbGQgaWYgYEZuYCBpcyBub3QgYSB0eXBlIGd1YXJkLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgQ2hlY2sgZXh0ZW5kcyBudWxsIHwgdW5kZWZpbmVkIC8vIE5vIHRlc3QuXG4gKiAgID8gVmFsdWVcbiAqICAgOiBWYWx1ZSBleHRlbmRzIHt0eXBlOiBDaGVja30gLy8gU3RyaW5nICh0eXBlKSB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogVmFsdWUgZXh0ZW5kcyBDaGVjayAvLyBQYXJ0aWFsIHRlc3QuXG4gKiAgID8gVmFsdWVcbiAqICAgOiBDaGVjayBleHRlbmRzIEZ1bmN0aW9uIC8vIEZ1bmN0aW9uIHRlc3QuXG4gKiAgID8gUHJlZGljYXRlPENoZWNrLCBWYWx1ZT4gZXh0ZW5kcyBWYWx1ZVxuICogICAgID8gUHJlZGljYXRlPENoZWNrLCBWYWx1ZT5cbiAqICAgICA6IG5ldmVyXG4gKiAgIDogbmV2ZXIgLy8gU29tZSBvdGhlciB0ZXN0P1xuICogKX0gTWF0Y2hlc09uZVxuICogICBDaGVjayB3aGV0aGVyIGEgbm9kZSBtYXRjaGVzIGEgcHJpbWl0aXZlIGNoZWNrIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSBWYWx1ZVxuICogICBWYWx1ZTsgdHlwaWNhbGx5IHVuaXN0IGBOb2RlYC5cbiAqIEB0ZW1wbGF0ZSBDaGVja1xuICogICBWYWx1ZTsgdHlwaWNhbGx5IGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QsIGJ1dCBub3QgYXJyYXlzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgQ2hlY2sgZXh0ZW5kcyBBcnJheTxhbnk+XG4gKiAgID8gTWF0Y2hlc09uZTxWYWx1ZSwgQ2hlY2tba2V5b2YgQ2hlY2tdPlxuICogICA6IE1hdGNoZXNPbmU8VmFsdWUsIENoZWNrPlxuICogKX0gTWF0Y2hlc1xuICogICBDaGVjayB3aGV0aGVyIGEgbm9kZSBtYXRjaGVzIGEgY2hlY2sgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICogQHRlbXBsYXRlIFZhbHVlXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgdW5pc3QgYE5vZGVgLlxuICogQHRlbXBsYXRlIENoZWNrXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHswIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTB9IFVpbnRcbiAqICAgTnVtYmVyOyBjYXBwZWQgcmVhc29uYWJseS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJIGV4dGVuZHMgMCA/IDEgOiBJIGV4dGVuZHMgMSA/IDIgOiBJIGV4dGVuZHMgMiA/IDMgOiBJIGV4dGVuZHMgMyA/IDQgOiBJIGV4dGVuZHMgNCA/IDUgOiBJIGV4dGVuZHMgNSA/IDYgOiBJIGV4dGVuZHMgNiA/IDcgOiBJIGV4dGVuZHMgNyA/IDggOiBJIGV4dGVuZHMgOCA/IDkgOiAxMH0gSW5jcmVtZW50XG4gKiAgIEluY3JlbWVudCBhIG51bWJlciBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtJPTBdXG4gKiAgIEluZGV4LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgTm9kZSBleHRlbmRzIFVuaXN0UGFyZW50XG4gKiAgID8gTm9kZSBleHRlbmRzIHtjaGlsZHJlbjogQXJyYXk8aW5mZXIgQ2hpbGRyZW4+fVxuICogICAgID8gQ2hpbGQgZXh0ZW5kcyBDaGlsZHJlbiA/IE5vZGUgOiBuZXZlclxuICogICAgIDogbmV2ZXJcbiAqICAgOiBuZXZlclxuICogKX0gSW50ZXJuYWxQYXJlbnRcbiAqICAgQ29sbGVjdCBub2RlcyB0aGF0IGNhbiBiZSBwYXJlbnRzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gTm9kZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0ludGVybmFsUGFyZW50PEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sIENoaWxkPn0gUGFyZW50XG4gKiAgIENvbGxlY3Qgbm9kZXMgaW4gYFRyZWVgIHRoYXQgY2FuIGJlIHBhcmVudHMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBEZXB0aCBleHRlbmRzIE1heFxuICogICA/IG5ldmVyXG4gKiAgIDpcbiAqICAgICB8IEludGVybmFsUGFyZW50PE5vZGUsIENoaWxkPlxuICogICAgIHwgSW50ZXJuYWxBbmNlc3RvcjxOb2RlLCBJbnRlcm5hbFBhcmVudDxOb2RlLCBDaGlsZD4sIE1heCwgSW5jcmVtZW50PERlcHRoPj5cbiAqICl9IEludGVybmFsQW5jZXN0b3JcbiAqICAgQ29sbGVjdCBub2RlcyBpbiBgVHJlZWAgdGhhdCBjYW4gYmUgYW5jZXN0b3JzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gTm9kZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICogQHRlbXBsYXRlIHtVaW50fSBbTWF4PTEwXVxuICogICBNYXg7IHNlYXJjaGVzIHVwIHRvIHRoaXMgZGVwdGguXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtEZXB0aD0wXVxuICogICBDdXJyZW50IGRlcHRoLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgVHJlZSBleHRlbmRzIFVuaXN0UGFyZW50XG4gKiAgICAgPyBEZXB0aCBleHRlbmRzIE1heFxuICogICAgICAgPyBUcmVlXG4gKiAgICAgICA6IFRyZWUgfCBJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWVbJ2NoaWxkcmVuJ11bbnVtYmVyXSwgTWF4LCBJbmNyZW1lbnQ8RGVwdGg+PlxuICogICAgIDogVHJlZVxuICogKX0gSW5jbHVzaXZlRGVzY2VuZGFudFxuICogICBDb2xsZWN0IGFsbCAoaW5jbHVzaXZlKSBkZXNjZW5kYW50cyBvZiBgVHJlZWAuXG4gKlxuICogICA+IPCfkYkgKipOb3RlKio6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBmYXN0ZXN0IHdheSB0b1xuICogICA+IHJlY3Vyc2Ugd2l0aG91dCBhY3R1YWxseSBydW5uaW5nIGludG8gYW4gaW5maW5pdGUgbG9vcCwgd2hpY2ggdGhlXG4gKiAgID4gcHJldmlvdXMgdmVyc2lvbiBkaWQuXG4gKiAgID5cbiAqICAgPiBQcmFjdGljYWxseSwgYSBtYXggb2YgYDJgIGlzIHR5cGljYWxseSBlbm91Z2ggYXNzdW1pbmcgYSBgUm9vdGAgaXNcbiAqICAgPiBwYXNzZWQsIGJ1dCBpdCBkb2VzbuKAmXQgaW1wcm92ZSBwZXJmb3JtYW5jZS5cbiAqICAgPiBJdCBnZXRzIGhpZ2hlciB3aXRoIGBMaXN0ID4gTGlzdEl0ZW0gPiBUYWJsZSA+IFRhYmxlUm93ID4gVGFibGVDZWxsYC5cbiAqICAgPiBVc2luZyB1cCB0byBgMTBgIGRvZXNu4oCZdCBodXJ0IG9yIGhlbHAgZWl0aGVyLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgVHJlZSB0eXBlLlxuICogQHRlbXBsYXRlIHtVaW50fSBbTWF4PTEwXVxuICogICBNYXg7IHNlYXJjaGVzIHVwIHRvIHRoaXMgZGVwdGguXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtEZXB0aD0wXVxuICogICBDdXJyZW50IGRlcHRoLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqICAgSGFuZGxlIGEgbm9kZSAobWF0Y2hpbmcgYHRlc3RgLCBpZiBnaXZlbikuXG4gKlxuICogICBWaXNpdG9ycyBhcmUgZnJlZSB0byB0cmFuc2Zvcm0gYG5vZGVgLlxuICogICBUaGV5IGNhbiBhbHNvIHRyYW5zZm9ybSBgcGFyZW50YC5cbiAqXG4gKiAgIFJlcGxhY2luZyBgbm9kZWAgaXRzZWxmLCBpZiBgU0tJUGAgaXMgbm90IHJldHVybmVkLCBzdGlsbCBjYXVzZXMgaXRzXG4gKiAgIGRlc2NlbmRhbnRzIHRvIGJlIHdhbGtlZCAod2hpY2ggaXMgYSBidWcpLlxuICpcbiAqICAgV2hlbiBhZGRpbmcgb3IgcmVtb3ZpbmcgcHJldmlvdXMgc2libGluZ3Mgb2YgYG5vZGVgIChvciBuZXh0IHNpYmxpbmdzLCBpblxuICogICBjYXNlIG9mIHJldmVyc2UpLCB0aGUgYFZpc2l0b3JgIHNob3VsZCByZXR1cm4gYSBuZXcgYEluZGV4YCB0byBzcGVjaWZ5IHRoZVxuICogICBzaWJsaW5nIHRvIHRyYXZlcnNlIGFmdGVyIGBub2RlYCBpcyB0cmF2ZXJzZWQuXG4gKiAgIEFkZGluZyBvciByZW1vdmluZyBuZXh0IHNpYmxpbmdzIG9mIGBub2RlYCAob3IgcHJldmlvdXMgc2libGluZ3MsIGluIGNhc2VcbiAqICAgb2YgcmV2ZXJzZSkgaXMgaGFuZGxlZCBhcyBleHBlY3RlZCB3aXRob3V0IG5lZWRpbmcgdG8gcmV0dXJuIGEgbmV3IGBJbmRleGAuXG4gKlxuICogICBSZW1vdmluZyB0aGUgY2hpbGRyZW4gcHJvcGVydHkgb2YgYHBhcmVudGAgc3RpbGwgcmVzdWx0cyBpbiB0aGVtIGJlaW5nXG4gKiAgIHRyYXZlcnNlZC5cbiAqIEBwYXJhbSB7VmlzaXRlZH0gbm9kZVxuICogICBGb3VuZCBub2RlLlxuICogQHBhcmFtIHtWaXNpdGVkIGV4dGVuZHMgVW5pc3ROb2RlID8gbnVtYmVyIHwgdW5kZWZpbmVkIDogbmV2ZXJ9IGluZGV4XG4gKiAgIEluZGV4IG9mIGBub2RlYCBpbiBgcGFyZW50YC5cbiAqIEBwYXJhbSB7QW5jZXN0b3IgZXh0ZW5kcyBVbmlzdFBhcmVudCA/IEFuY2VzdG9yIHwgdW5kZWZpbmVkIDogbmV2ZXJ9IHBhcmVudFxuICogICBQYXJlbnQgb2YgYG5vZGVgLlxuICogQHJldHVybnMge1Zpc2l0b3JSZXN1bHR9XG4gKiAgIFdoYXQgdG8gZG8gbmV4dC5cbiAqXG4gKiAgIEFuIGBJbmRleGAgaXMgdHJlYXRlZCBhcyBhIHR1cGxlIG9mIGBbQ09OVElOVUUsIEluZGV4XWAuXG4gKiAgIEFuIGBBY3Rpb25gIGlzIHRyZWF0ZWQgYXMgYSB0dXBsZSBvZiBgW0FjdGlvbl1gLlxuICpcbiAqICAgUGFzc2luZyBhIHR1cGxlIGJhY2sgb25seSBtYWtlcyBzZW5zZSBpZiB0aGUgYEFjdGlvbmAgaXMgYFNLSVBgLlxuICogICBXaGVuIHRoZSBgQWN0aW9uYCBpcyBgRVhJVGAsIHRoYXQgYWN0aW9uIGNhbiBiZSByZXR1cm5lZC5cbiAqICAgV2hlbiB0aGUgYEFjdGlvbmAgaXMgYENPTlRJTlVFYCwgYEluZGV4YCBjYW4gYmUgcmV0dXJuZWQuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gW1Zpc2l0ZWQ9VW5pc3ROb2RlXVxuICogICBWaXNpdGVkIG5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3RQYXJlbnR9IFtBbmNlc3Rvcj1VbmlzdFBhcmVudF1cbiAqICAgQW5jZXN0b3IgdHlwZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtWaXNpdG9yPFZpc2l0ZWQsIFBhcmVudDxBbmNlc3RvciwgVmlzaXRlZD4+fSBCdWlsZFZpc2l0b3JGcm9tTWF0Y2hcbiAqICAgQnVpbGQgYSB0eXBlZCBgVmlzaXRvcmAgZnVuY3Rpb24gZnJvbSBhIG5vZGUgYW5kIGFsbCBwb3NzaWJsZSBwYXJlbnRzLlxuICpcbiAqICAgSXQgd2lsbCBpbmZlciB3aGljaCB2YWx1ZXMgYXJlIHBhc3NlZCBhcyBgbm9kZWAgYW5kIHdoaWNoIGFzIGBwYXJlbnRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFZpc2l0ZWRcbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtVbmlzdFBhcmVudH0gQW5jZXN0b3JcbiAqICAgUGFyZW50IHR5cGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBCdWlsZFZpc2l0b3JGcm9tTWF0Y2g8XG4gKiAgICAgTWF0Y2hlczxEZXNjZW5kYW50LCBDaGVjaz4sXG4gKiAgICAgRXh0cmFjdDxEZXNjZW5kYW50LCBVbmlzdFBhcmVudD5cbiAqICAgPlxuICogKX0gQnVpbGRWaXNpdG9yRnJvbURlc2NlbmRhbnRzXG4gKiAgIEJ1aWxkIGEgdHlwZWQgYFZpc2l0b3JgIGZ1bmN0aW9uIGZyb20gYSBsaXN0IG9mIGRlc2NlbmRhbnRzIGFuZCBhIHRlc3QuXG4gKlxuICogICBJdCB3aWxsIGluZmVyIHdoaWNoIHZhbHVlcyBhcmUgcGFzc2VkIGFzIGBub2RlYCBhbmQgd2hpY2ggYXMgYHBhcmVudGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gRGVzY2VuZGFudFxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1Rlc3R9IENoZWNrXG4gKiAgIFRlc3QgdHlwZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIEJ1aWxkVmlzaXRvckZyb21EZXNjZW5kYW50czxcbiAqICAgICBJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWU+LFxuICogICAgIENoZWNrXG4gKiAgID5cbiAqICl9IEJ1aWxkVmlzaXRvclxuICogICBCdWlsZCBhIHR5cGVkIGBWaXNpdG9yYCBmdW5jdGlvbiBmcm9tIGEgdHJlZSBhbmQgYSB0ZXN0LlxuICpcbiAqICAgSXQgd2lsbCBpbmZlciB3aGljaCB2YWx1ZXMgYXJlIHBhc3NlZCBhcyBgbm9kZWAgYW5kIHdoaWNoIGFzIGBwYXJlbnRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFtUcmVlPVVuaXN0Tm9kZV1cbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBbQ2hlY2s9VGVzdF1cbiAqICAgVGVzdCB0eXBlLlxuICovXG5cbmltcG9ydCB7dmlzaXRQYXJlbnRzfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnXG5cbmV4cG9ydCB7Q09OVElOVUUsIEVYSVQsIFNLSVB9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuLyoqXG4gKiBWaXNpdCBub2Rlcy5cbiAqXG4gKiBUaGlzIGFsZ29yaXRobSBwZXJmb3JtcyAqZGVwdGgtZmlyc3QqICp0cmVlIHRyYXZlcnNhbCogaW4gKnByZW9yZGVyKlxuICogKCoqTkxSKiopIG9yIGlmIGByZXZlcnNlYCBpcyBnaXZlbiwgaW4gKnJldmVyc2UgcHJlb3JkZXIqICgqKk5STCoqKS5cbiAqXG4gKiBZb3UgY2FuIGNob29zZSBmb3Igd2hpY2ggbm9kZXMgYHZpc2l0b3JgIGlzIGNhbGxlZCBieSBwYXNzaW5nIGEgYHRlc3RgLlxuICogRm9yIGNvbXBsZXggdGVzdHMsIHlvdSBzaG91bGQgdGVzdCB5b3Vyc2VsZiBpbiBgdmlzaXRvcmAsIGFzIGl0IHdpbGwgYmVcbiAqIGZhc3RlciBhbmQgd2lsbCBoYXZlIGltcHJvdmVkIHR5cGUgaW5mb3JtYXRpb24uXG4gKlxuICogV2Fsa2luZyB0aGUgdHJlZSBpcyBhbiBpbnRlbnNpdmUgdGFzay5cbiAqIE1ha2UgdXNlIG9mIHRoZSByZXR1cm4gdmFsdWVzIG9mIHRoZSB2aXNpdG9yIHdoZW4gcG9zc2libGUuXG4gKiBJbnN0ZWFkIG9mIHdhbGtpbmcgYSB0cmVlIG11bHRpcGxlIHRpbWVzLCB3YWxrIGl0IG9uY2UsIHVzZSBgdW5pc3QtdXRpbC1pc2BcbiAqIHRvIGNoZWNrIGlmIGEgbm9kZSBtYXRjaGVzLCBhbmQgdGhlbiBwZXJmb3JtIGRpZmZlcmVudCBvcGVyYXRpb25zLlxuICpcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSB0cmVlLlxuICogU2VlIGBWaXNpdG9yYCBmb3IgbW9yZSBpbmZvLlxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gKiBAcGFyYW0ge0NoZWNrfSBjaGVja1xuICogQHBhcmFtIHtCdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+fSB2aXNpdG9yXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbcmV2ZXJzZV1cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1RyZWV9IHRyZWVcbiAqIEBwYXJhbSB7QnVpbGRWaXNpdG9yPFRyZWU+fSB2aXNpdG9yXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbcmV2ZXJzZV1cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKlxuICogQHBhcmFtIHtVbmlzdE5vZGV9IHRyZWVcbiAqICAgVHJlZSB0byB0cmF2ZXJzZS5cbiAqIEBwYXJhbSB7VmlzaXRvciB8IFRlc3R9IHRlc3RPclZpc2l0b3JcbiAqICAgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdCAob3B0aW9uYWwsIG9taXQgdG8gcGFzcyBhIHZpc2l0b3IpLlxuICogQHBhcmFtIHtWaXNpdG9yIHwgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFt2aXNpdG9yT3JSZXZlcnNlXVxuICogICBIYW5kbGUgZWFjaCBub2RlICh3aGVuIHRlc3QgaXMgb21pdHRlZCwgcGFzcyBgcmV2ZXJzZWApLlxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW21heWJlUmV2ZXJzZT1mYWxzZV1cbiAqICAgVHJhdmVyc2UgaW4gcmV2ZXJzZSBwcmVvcmRlciAoTlJMKSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHByZW9yZGVyIChOTFIpLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1Rlc3R9IENoZWNrXG4gKiAgIGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdCh0cmVlLCB0ZXN0T3JWaXNpdG9yLCB2aXNpdG9yT3JSZXZlcnNlLCBtYXliZVJldmVyc2UpIHtcbiAgLyoqIEB0eXBlIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IHJldmVyc2VcbiAgLyoqIEB0eXBlIHtUZXN0fSAqL1xuICBsZXQgdGVzdFxuICAvKiogQHR5cGUge1Zpc2l0b3J9ICovXG4gIGxldCB2aXNpdG9yXG5cbiAgaWYgKFxuICAgIHR5cGVvZiB0ZXN0T3JWaXNpdG9yID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZpc2l0b3JPclJldmVyc2UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgdGVzdCA9IHVuZGVmaW5lZFxuICAgIHZpc2l0b3IgPSB0ZXN0T3JWaXNpdG9yXG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JPclJldmVyc2VcbiAgfSBlbHNlIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBhc3N1bWUgdGhlIG92ZXJsb2FkIHdpdGggdGVzdCB3YXMgZ2l2ZW4uXG4gICAgdGVzdCA9IHRlc3RPclZpc2l0b3JcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBhc3N1bWUgdGhlIG92ZXJsb2FkIHdpdGggdGVzdCB3YXMgZ2l2ZW4uXG4gICAgdmlzaXRvciA9IHZpc2l0b3JPclJldmVyc2VcbiAgICByZXZlcnNlID0gbWF5YmVSZXZlcnNlXG4gIH1cblxuICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VW5pc3ROb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7QXJyYXk8VW5pc3RQYXJlbnQ+fSBwYXJlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IHVuZGVmaW5lZFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2aXNpdFBhcmVudHMiLCJDT05USU5VRSIsIkVYSVQiLCJTS0lQIiwidmlzaXQiLCJ0cmVlIiwidGVzdE9yVmlzaXRvciIsInZpc2l0b3JPclJldmVyc2UiLCJtYXliZVJldmVyc2UiLCJyZXZlcnNlIiwidGVzdCIsInZpc2l0b3IiLCJ1bmRlZmluZWQiLCJvdmVybG9hZCIsIm5vZGUiLCJwYXJlbnRzIiwicGFyZW50IiwibGVuZ3RoIiwiaW5kZXgiLCJjaGlsZHJlbiIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-visit/lib/index.js\n");

/***/ })

};
;