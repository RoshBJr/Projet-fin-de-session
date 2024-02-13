"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(rsc)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst tty = __webpack_require__(/*! tty */ \"tty\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(rsc)/./node_modules/has-flag/index.js\");\nconst { env } = process;\nlet forceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\") || hasFlag(\"color=never\")) {\n    forceColor = 0;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    forceColor = 1;\n}\nif (\"FORCE_COLOR\" in env) {\n    if (env.FORCE_COLOR === \"true\") {\n        forceColor = 1;\n    } else if (env.FORCE_COLOR === \"false\") {\n        forceColor = 0;\n    } else {\n        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);\n    }\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(haveStream, streamIsTTY) {\n    if (forceColor === 0) {\n        return 0;\n    }\n    if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n        return 3;\n    }\n    if (hasFlag(\"color=256\")) {\n        return 2;\n    }\n    if (haveStream && !streamIsTTY && forceColor === undefined) {\n        return 0;\n    }\n    const min = forceColor || 0;\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    if (process.platform === \"win32\") {\n        // Windows 10 build 10586 is the first Windows release that supports 256 colors.\n        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\",\n            \"GITHUB_ACTIONS\",\n            \"BUILDKITE\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    return min;\n}\nfunction getSupportLevel(stream) {\n    const level = supportsColor(stream, stream && stream.isTTY);\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: translateLevel(supportsColor(true, tty.isatty(1))),\n    stderr: translateLevel(supportsColor(true, tty.isatty(2)))\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxNQUFNRCxtQkFBT0EsQ0FBQztBQUNwQixNQUFNRSxVQUFVRixtQkFBT0EsQ0FBQztBQUV4QixNQUFNLEVBQUNHLEdBQUcsRUFBQyxHQUFHQztBQUVkLElBQUlDO0FBQ0osSUFBSUgsUUFBUSxlQUNYQSxRQUFRLGdCQUNSQSxRQUFRLGtCQUNSQSxRQUFRLGdCQUFnQjtJQUN4QkcsYUFBYTtBQUNkLE9BQU8sSUFBSUgsUUFBUSxZQUNsQkEsUUFBUSxhQUNSQSxRQUFRLGlCQUNSQSxRQUFRLGlCQUFpQjtJQUN6QkcsYUFBYTtBQUNkO0FBRUEsSUFBSSxpQkFBaUJGLEtBQUs7SUFDekIsSUFBSUEsSUFBSUcsV0FBVyxLQUFLLFFBQVE7UUFDL0JELGFBQWE7SUFDZCxPQUFPLElBQUlGLElBQUlHLFdBQVcsS0FBSyxTQUFTO1FBQ3ZDRCxhQUFhO0lBQ2QsT0FBTztRQUNOQSxhQUFhRixJQUFJRyxXQUFXLENBQUNDLE1BQU0sS0FBSyxJQUFJLElBQUlDLEtBQUtDLEdBQUcsQ0FBQ0MsU0FBU1AsSUFBSUcsV0FBVyxFQUFFLEtBQUs7SUFDekY7QUFDRDtBQUVBLFNBQVNLLGVBQWVDLEtBQUs7SUFDNUIsSUFBSUEsVUFBVSxHQUFHO1FBQ2hCLE9BQU87SUFDUjtJQUVBLE9BQU87UUFDTkE7UUFDQUMsVUFBVTtRQUNWQyxRQUFRRixTQUFTO1FBQ2pCRyxRQUFRSCxTQUFTO0lBQ2xCO0FBQ0Q7QUFFQSxTQUFTSSxjQUFjQyxVQUFVLEVBQUVDLFdBQVc7SUFDN0MsSUFBSWIsZUFBZSxHQUFHO1FBQ3JCLE9BQU87SUFDUjtJQUVBLElBQUlILFFBQVEsZ0JBQ1hBLFFBQVEsaUJBQ1JBLFFBQVEsb0JBQW9CO1FBQzVCLE9BQU87SUFDUjtJQUVBLElBQUlBLFFBQVEsY0FBYztRQUN6QixPQUFPO0lBQ1I7SUFFQSxJQUFJZSxjQUFjLENBQUNDLGVBQWViLGVBQWVjLFdBQVc7UUFDM0QsT0FBTztJQUNSO0lBRUEsTUFBTVYsTUFBTUosY0FBYztJQUUxQixJQUFJRixJQUFJaUIsSUFBSSxLQUFLLFFBQVE7UUFDeEIsT0FBT1g7SUFDUjtJQUVBLElBQUlMLFFBQVFpQixRQUFRLEtBQUssU0FBUztRQUNqQyxnRkFBZ0Y7UUFDaEYsMkVBQTJFO1FBQzNFLE1BQU1DLFlBQVl2QixHQUFHd0IsT0FBTyxHQUFHQyxLQUFLLENBQUM7UUFDckMsSUFDQ0MsT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxNQUN4QkcsT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxPQUN2QjtZQUNELE9BQU9HLE9BQU9ILFNBQVMsQ0FBQyxFQUFFLEtBQUssUUFBUSxJQUFJO1FBQzVDO1FBRUEsT0FBTztJQUNSO0lBRUEsSUFBSSxRQUFRbkIsS0FBSztRQUNoQixJQUFJO1lBQUM7WUFBVTtZQUFZO1lBQVk7WUFBYTtZQUFrQjtTQUFZLENBQUN1QixJQUFJLENBQUNDLENBQUFBLE9BQVFBLFFBQVF4QixRQUFRQSxJQUFJeUIsT0FBTyxLQUFLLFlBQVk7WUFDM0ksT0FBTztRQUNSO1FBRUEsT0FBT25CO0lBQ1I7SUFFQSxJQUFJLHNCQUFzQk4sS0FBSztRQUM5QixPQUFPLGdDQUFnQzBCLElBQUksQ0FBQzFCLElBQUkyQixnQkFBZ0IsSUFBSSxJQUFJO0lBQ3pFO0lBRUEsSUFBSTNCLElBQUk0QixTQUFTLEtBQUssYUFBYTtRQUNsQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLGtCQUFrQjVCLEtBQUs7UUFDMUIsTUFBTTZCLFVBQVV0QixTQUFTLENBQUNQLElBQUk4QixvQkFBb0IsSUFBSSxFQUFDLEVBQUdULEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBRXpFLE9BQVFyQixJQUFJK0IsWUFBWTtZQUN2QixLQUFLO2dCQUNKLE9BQU9GLFdBQVcsSUFBSSxJQUFJO1lBQzNCLEtBQUs7Z0JBQ0osT0FBTztRQUVUO0lBQ0Q7SUFFQSxJQUFJLGlCQUFpQkgsSUFBSSxDQUFDMUIsSUFBSWlCLElBQUksR0FBRztRQUNwQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLDhEQUE4RFMsSUFBSSxDQUFDMUIsSUFBSWlCLElBQUksR0FBRztRQUNqRixPQUFPO0lBQ1I7SUFFQSxJQUFJLGVBQWVqQixLQUFLO1FBQ3ZCLE9BQU87SUFDUjtJQUVBLE9BQU9NO0FBQ1I7QUFFQSxTQUFTMEIsZ0JBQWdCQyxNQUFNO0lBQzlCLE1BQU14QixRQUFRSSxjQUFjb0IsUUFBUUEsVUFBVUEsT0FBT0MsS0FBSztJQUMxRCxPQUFPMUIsZUFBZUM7QUFDdkI7QUFFQTBCLE9BQU9DLE9BQU8sR0FBRztJQUNoQnZCLGVBQWVtQjtJQUNmSyxRQUFRN0IsZUFBZUssY0FBYyxNQUFNZixJQUFJd0MsTUFBTSxDQUFDO0lBQ3REQyxRQUFRL0IsZUFBZUssY0FBYyxNQUFNZixJQUFJd0MsTUFBTSxDQUFDO0FBQ3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanM/N2JiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCB0dHkgPSByZXF1aXJlKCd0dHknKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCB7ZW52fSA9IHByb2Nlc3M7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1uZXZlcicpKSB7XG5cdGZvcmNlQ29sb3IgPSAwO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRmb3JjZUNvbG9yID0gMTtcbn1cblxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICd0cnVlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAxO1xuXHR9IGVsc2UgaWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ2ZhbHNlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWluKHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApLCAzKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihoYXZlU3RyZWFtLCBzdHJlYW1Jc1RUWSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKGhhdmVTdHJlYW0gJiYgIXN0cmVhbUlzVFRZICYmIGZvcmNlQ29sb3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciB8fCAwO1xuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93cyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy5cblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDSScgaW4gZW52KSB7XG5cdFx0aWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSScsICdHSVRIVUJfQUNUSU9OUycsICdCVUlMREtJVEUnXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtLCBzdHJlYW0gJiYgc3RyZWFtLmlzVFRZKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMSkpKSxcblx0c3RkZXJyOiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMikpKVxufTtcbiJdLCJuYW1lcyI6WyJvcyIsInJlcXVpcmUiLCJ0dHkiLCJoYXNGbGFnIiwiZW52IiwicHJvY2VzcyIsImZvcmNlQ29sb3IiLCJGT1JDRV9DT0xPUiIsImxlbmd0aCIsIk1hdGgiLCJtaW4iLCJwYXJzZUludCIsInRyYW5zbGF0ZUxldmVsIiwibGV2ZWwiLCJoYXNCYXNpYyIsImhhczI1NiIsImhhczE2bSIsInN1cHBvcnRzQ29sb3IiLCJoYXZlU3RyZWFtIiwic3RyZWFtSXNUVFkiLCJ1bmRlZmluZWQiLCJURVJNIiwicGxhdGZvcm0iLCJvc1JlbGVhc2UiLCJyZWxlYXNlIiwic3BsaXQiLCJOdW1iZXIiLCJzb21lIiwic2lnbiIsIkNJX05BTUUiLCJ0ZXN0IiwiVEVBTUNJVFlfVkVSU0lPTiIsIkNPTE9SVEVSTSIsInZlcnNpb24iLCJURVJNX1BST0dSQU1fVkVSU0lPTiIsIlRFUk1fUFJPR1JBTSIsImdldFN1cHBvcnRMZXZlbCIsInN0cmVhbSIsImlzVFRZIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ZG91dCIsImlzYXR0eSIsInN0ZGVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/supports-color/index.js\n");

/***/ })

};
;