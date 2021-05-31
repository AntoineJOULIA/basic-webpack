/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tidyjs/tidy/dist/es/addRows.js":
/*!******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/addRows.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addRows\": () => (/* binding */ addRows)\n/* harmony export */ });\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\nfunction addRows(itemsToAdd) {\n  const _addRows = (items) => {\n    if (typeof itemsToAdd === \"function\") {\n      return [...items, ...(0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(itemsToAdd(items))];\n    }\n    return [...items, ...(0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(itemsToAdd)];\n  };\n  return _addRows;\n}\n\n\n//# sourceMappingURL=addRows.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/addRows.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/arrange.js":
/*!******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/arrange.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrange\": () => (/* binding */ arrange),\n/* harmony export */   \"asc\": () => (/* binding */ asc),\n/* harmony export */   \"desc\": () => (/* binding */ desc),\n/* harmony export */   \"fixedOrder\": () => (/* binding */ fixedOrder)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\n\nfunction arrange(comparators) {\n  const _arrange = (items) => {\n    const comparatorFns = (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(comparators).map((comp) => typeof comp === \"function\" ? comp : asc(comp));\n    return items.slice().sort((a, b) => {\n      for (const comparator of comparatorFns) {\n        const result = comparator(a, b);\n        if (result)\n          return result;\n      }\n      return 0;\n    });\n  };\n  return _arrange;\n}\nfunction asc(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return function _asc(a, b) {\n    return emptyAwareComparator(keyFn(a), keyFn(b), false);\n  };\n}\nfunction desc(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return function _desc(a, b) {\n    return emptyAwareComparator(keyFn(a), keyFn(b), true);\n  };\n}\nfunction fixedOrder(key, order, options) {\n  let {position = \"start\"} = options != null ? options : {};\n  const positionFactor = position === \"end\" ? -1 : 1;\n  const indexMap = new Map();\n  for (let i = 0; i < order.length; ++i) {\n    indexMap.set(order[i], i);\n  }\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return function _fixedOrder(a, b) {\n    var _a, _b;\n    const aIndex = (_a = indexMap.get(keyFn(a))) != null ? _a : -1;\n    const bIndex = (_b = indexMap.get(keyFn(b))) != null ? _b : -1;\n    if (aIndex >= 0 && bIndex >= 0) {\n      return aIndex - bIndex;\n    }\n    if (aIndex >= 0) {\n      return positionFactor * -1;\n    }\n    if (bIndex >= 0) {\n      return positionFactor * 1;\n    }\n    return 0;\n  };\n}\nfunction emptyAwareComparator(aInput, bInput, desc2) {\n  let a = desc2 ? bInput : aInput;\n  let b = desc2 ? aInput : bInput;\n  if (isEmpty(a) && isEmpty(b)) {\n    const rankA = a !== a ? 0 : a === null ? 1 : 2;\n    const rankB = b !== b ? 0 : b === null ? 1 : 2;\n    const order = rankA - rankB;\n    return desc2 ? -order : order;\n  }\n  if (isEmpty(a)) {\n    return desc2 ? -1 : 1;\n  }\n  if (isEmpty(b)) {\n    return desc2 ? 1 : -1;\n  }\n  return (0,d3_array__WEBPACK_IMPORTED_MODULE_1__.default)(a, b);\n}\nfunction isEmpty(value) {\n  return value == null || value !== value;\n}\n\n\n//# sourceMappingURL=arrange.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/arrange.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/complete.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/complete.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"complete\": () => (/* binding */ complete)\n/* harmony export */ });\n/* harmony import */ var _expand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expand.js */ \"./node_modules/@tidyjs/tidy/dist/es/expand.js\");\n/* harmony import */ var _leftJoin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leftJoin.js */ \"./node_modules/@tidyjs/tidy/dist/es/leftJoin.js\");\n/* harmony import */ var _replaceNully_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replaceNully.js */ \"./node_modules/@tidyjs/tidy/dist/es/replaceNully.js\");\n\n\n\n\nfunction complete(expandKeys, replaceNullySpec) {\n  const _complete = (items) => {\n    const expanded = (0,_expand_js__WEBPACK_IMPORTED_MODULE_0__.expand)(expandKeys)(items);\n    const joined = (0,_leftJoin_js__WEBPACK_IMPORTED_MODULE_1__.leftJoin)(items)(expanded);\n    return replaceNullySpec ? (0,_replaceNully_js__WEBPACK_IMPORTED_MODULE_2__.replaceNully)(replaceNullySpec)(joined) : joined;\n  };\n  return _complete;\n}\n\n\n//# sourceMappingURL=complete.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/complete.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/count.js":
/*!****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/count.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"count\": () => (/* binding */ count)\n/* harmony export */ });\n/* harmony import */ var _arrange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrange.js */ \"./node_modules/@tidyjs/tidy/dist/es/arrange.js\");\n/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupBy.js */ \"./node_modules/@tidyjs/tidy/dist/es/groupBy.js\");\n/* harmony import */ var _helpers_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/identity.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/identity.js\");\n/* harmony import */ var _tally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tally.js */ \"./node_modules/@tidyjs/tidy/dist/es/tally.js\");\n/* harmony import */ var _tidy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tidy.js */ \"./node_modules/@tidyjs/tidy/dist/es/tidy.js\");\n\n\n\n\n\n\nfunction count(groupKeys, options) {\n  const _count = (items) => {\n    options = options != null ? options : {};\n    const {name = \"n\", sort} = options;\n    const results = (0,_tidy_js__WEBPACK_IMPORTED_MODULE_4__.tidy)(items, (0,_groupBy_js__WEBPACK_IMPORTED_MODULE_1__.groupBy)(groupKeys, [(0,_tally_js__WEBPACK_IMPORTED_MODULE_3__.tally)(options)]), sort ? (0,_arrange_js__WEBPACK_IMPORTED_MODULE_0__.arrange)((0,_arrange_js__WEBPACK_IMPORTED_MODULE_0__.desc)(name)) : _helpers_identity_js__WEBPACK_IMPORTED_MODULE_2__.identity);\n    return results;\n  };\n  return _count;\n}\n\n\n//# sourceMappingURL=count.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/count.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/debug.js":
/*!****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/debug.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debug\": () => (/* binding */ debug)\n/* harmony export */ });\nfunction debug(label, options) {\n  const _debug = (items, context) => {\n    var _a;\n    let prefix = \"[tidy.debug\";\n    if ((_a = context == null ? void 0 : context.groupKeys) == null ? void 0 : _a.length) {\n      const groupKeys = context.groupKeys;\n      const groupKeyStrings = groupKeys.map((keyPair) => keyPair.join(\": \")).join(\", \");\n      if (groupKeyStrings.length) {\n        prefix += \"|\" + groupKeyStrings;\n      }\n    }\n    options = options != null ? options : {};\n    const {limit = 10, output = \"table\"} = options;\n    const dashString = \"--------------------------------------------------------------------------------\";\n    let numDashes = dashString.length;\n    const prefixedLabel = prefix + \"]\" + (label == null ? \"\" : \" \" + label);\n    numDashes = Math.max(0, numDashes - (prefixedLabel.length + 2));\n    console.log(`${prefixedLabel} ${dashString.substring(0, numDashes)}`);\n    console[output](limit == null || limit >= items.length ? items : items.slice(0, limit));\n    return items;\n  };\n  return _debug;\n}\n\n\n//# sourceMappingURL=debug.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/debug.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/distinct.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/distinct.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"distinct\": () => (/* binding */ distinct)\n/* harmony export */ });\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\nfunction distinct(keys) {\n  const _distinct = (items) => {\n    keys = (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(keys);\n    if (!keys.length) {\n      const set = new Set();\n      for (const item of items) {\n        set.add(item);\n      }\n      return Array.from(set);\n    }\n    const rootMap = new Map();\n    const distinctItems = [];\n    const lastKey = keys[keys.length - 1];\n    for (const item of items) {\n      let map = rootMap;\n      let hasItem = false;\n      for (const key of keys) {\n        const mapItemKey = typeof key === \"function\" ? key(item) : item[key];\n        if (key === lastKey) {\n          hasItem = map.has(mapItemKey);\n          if (!hasItem) {\n            distinctItems.push(item);\n            map.set(mapItemKey, true);\n          }\n          break;\n        }\n        if (!map.has(mapItemKey)) {\n          map.set(mapItemKey, new Map());\n        }\n        map = map.get(mapItemKey);\n      }\n    }\n    return distinctItems;\n  };\n  return _distinct;\n}\n\n\n//# sourceMappingURL=distinct.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/distinct.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/expand.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/expand.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"expand\": () => (/* binding */ expand),\n/* harmony export */   \"makeKeyMap\": () => (/* binding */ makeKeyMap)\n/* harmony export */ });\nfunction expand(expandKeys) {\n  const _expand = (items) => {\n    const keyMap = makeKeyMap(expandKeys);\n    const vectors = [];\n    for (const key in keyMap) {\n      const keyValue = keyMap[key];\n      let values;\n      if (typeof keyValue === \"function\") {\n        values = keyValue(items);\n      } else if (Array.isArray(keyValue)) {\n        values = keyValue;\n      } else {\n        values = Array.from(new Set(items.map((d) => d[key])));\n      }\n      vectors.push(values.map((value) => ({[key]: value})));\n    }\n    return makeCombinations(vectors);\n  };\n  return _expand;\n}\nfunction makeCombinations(vectors) {\n  function combine(accum, baseObj, remainingVectors) {\n    if (!remainingVectors.length && baseObj != null) {\n      accum.push(baseObj);\n      return;\n    }\n    const vector = remainingVectors[0];\n    const newRemainingArrays = remainingVectors.slice(1);\n    for (const item of vector) {\n      combine(accum, {...baseObj, ...item}, newRemainingArrays);\n    }\n  }\n  const result = [];\n  combine(result, null, vectors);\n  return result;\n}\nfunction makeKeyMap(keys) {\n  if (Array.isArray(keys)) {\n    const keyMap = {};\n    for (const key of keys) {\n      keyMap[key] = key;\n    }\n    return keyMap;\n  } else if (typeof keys === \"object\") {\n    return keys;\n  }\n  return {[keys]: keys};\n}\n\n\n//# sourceMappingURL=expand.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/expand.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/fill.js":
/*!***************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/fill.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fill\": () => (/* binding */ fill)\n/* harmony export */ });\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\nfunction fill(keys) {\n  const _fill = (items) => {\n    const keysArray = (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(keys);\n    const replaceMap = {};\n    return items.map((d) => {\n      const obj = {...d};\n      for (const key of keysArray) {\n        if (obj[key] != null) {\n          replaceMap[key] = obj[key];\n        } else if (replaceMap[key] != null) {\n          obj[key] = replaceMap[key];\n        }\n      }\n      return obj;\n    });\n  };\n  return _fill;\n}\n\n\n//# sourceMappingURL=fill.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/fill.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/filter.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/filter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter(filterFn) {\n  const _filter = (items) => items.filter(filterFn);\n  return _filter;\n}\n\n\n//# sourceMappingURL=filter.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/filter.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/fullJoin.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/fullJoin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fullJoin\": () => (/* binding */ fullJoin)\n/* harmony export */ });\n/* harmony import */ var _innerJoin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./innerJoin.js */ \"./node_modules/@tidyjs/tidy/dist/es/innerJoin.js\");\n\n\nfunction fullJoin(itemsToJoin, options) {\n  const _fullJoin = (items) => {\n    if (!itemsToJoin.length)\n      return items;\n    if (!items.length)\n      return itemsToJoin;\n    const byMap = (options == null ? void 0 : options.by) == null ? (0,_innerJoin_js__WEBPACK_IMPORTED_MODULE_0__.autodetectByMap)(items, itemsToJoin) : (0,_innerJoin_js__WEBPACK_IMPORTED_MODULE_0__.makeByMap)(options.by);\n    const matchMap = new Map();\n    const joinObjectKeys = Object.keys(itemsToJoin[0]);\n    const joined = items.flatMap((d) => {\n      const matches = itemsToJoin.filter((j) => {\n        const matched = (0,_innerJoin_js__WEBPACK_IMPORTED_MODULE_0__.isMatch)(d, j, byMap);\n        if (matched) {\n          matchMap.set(j, true);\n        }\n        return matched;\n      });\n      if (matches.length) {\n        return matches.map((j) => ({...d, ...j}));\n      }\n      const undefinedFill = Object.fromEntries(joinObjectKeys.filter((key) => d[key] == null).map((key) => [key, void 0]));\n      return {...d, ...undefinedFill};\n    });\n    if (matchMap.size < itemsToJoin.length) {\n      const leftEmptyObject = Object.fromEntries(Object.keys(items[0]).map((key) => [key, void 0]));\n      for (const item of itemsToJoin) {\n        if (!matchMap.has(item)) {\n          joined.push({...leftEmptyObject, ...item});\n        }\n      }\n    }\n    return joined;\n  };\n  return _fullJoin;\n}\n\n\n//# sourceMappingURL=fullJoin.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/fullJoin.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/groupBy.js":
/*!******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/groupBy.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"groupBy\": () => (/* binding */ groupBy)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/group.js\");\n/* harmony import */ var _helpers_assignGroupKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/assignGroupKeys.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/assignGroupKeys.js\");\n/* harmony import */ var _helpers_groupMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/groupMap.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/groupMap.js\");\n/* harmony import */ var _helpers_groupTraversal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/groupTraversal.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/groupTraversal.js\");\n/* harmony import */ var _helpers_identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/identity.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/identity.js\");\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\n\n\n\n\n\nfunction groupBy(groupKeys, fns, options) {\n  if (typeof fns === \"function\") {\n    fns = [fns];\n  } else if (arguments.length === 2 && fns != null && !Array.isArray(fns)) {\n    options = fns;\n  }\n  const _groupBy = (items) => {\n    const grouped = makeGrouped(items, groupKeys);\n    const results = runFlow(grouped, fns, options == null ? void 0 : options.addGroupKeys);\n    if (options == null ? void 0 : options.export) {\n      switch (options.export) {\n        case \"grouped\":\n          return results;\n        case \"levels\":\n          return exportLevels(results, options);\n        case \"entries-obj\":\n        case \"entriesObject\":\n          return exportLevels(results, {\n            ...options,\n            export: \"levels\",\n            levels: [\"entries-object\"]\n          });\n        default:\n          return exportLevels(results, {\n            ...options,\n            export: \"levels\",\n            levels: [options.export]\n          });\n      }\n    }\n    const ungrouped = ungroup(results, options == null ? void 0 : options.addGroupKeys);\n    return ungrouped;\n  };\n  return _groupBy;\n}\ngroupBy.grouped = (options) => ({...options, export: \"grouped\"});\ngroupBy.entries = (options) => ({...options, export: \"entries\"});\ngroupBy.entriesObject = (options) => ({...options, export: \"entries-object\"});\ngroupBy.object = (options) => ({...options, export: \"object\"});\ngroupBy.map = (options) => ({...options, export: \"map\"});\ngroupBy.keys = (options) => ({...options, export: \"keys\"});\ngroupBy.values = (options) => ({...options, export: \"values\"});\ngroupBy.levels = (options) => ({...options, export: \"levels\"});\nfunction runFlow(items, fns, addGroupKeys) {\n  let result = items;\n  if (!(fns == null ? void 0 : fns.length))\n    return result;\n  for (const fn of fns) {\n    if (!fn)\n      continue;\n    result = (0,_helpers_groupMap_js__WEBPACK_IMPORTED_MODULE_1__.groupMap)(result, (items2, keys) => {\n      const context = {groupKeys: keys};\n      let leafItemsMapped = fn(items2, context);\n      if (addGroupKeys !== false) {\n        leafItemsMapped = leafItemsMapped.map((item) => (0,_helpers_assignGroupKeys_js__WEBPACK_IMPORTED_MODULE_0__.assignGroupKeys)(item, keys));\n      }\n      return leafItemsMapped;\n    });\n  }\n  return result;\n}\nfunction makeGrouped(items, groupKeys) {\n  const groupKeyFns = (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_4__.singleOrArray)(groupKeys).map((key, i) => {\n    const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n    const keyCache = new Map();\n    return (d) => {\n      const keyValue = keyFn(d);\n      if (keyCache.has(keyValue)) {\n        return keyCache.get(keyValue);\n      }\n      const keyWithName = [key, keyValue];\n      keyCache.set(keyValue, keyWithName);\n      return keyWithName;\n    };\n  });\n  const grouped = (0,d3_array__WEBPACK_IMPORTED_MODULE_5__.default)(items, ...groupKeyFns);\n  return grouped;\n}\nfunction ungroup(grouped, addGroupKeys) {\n  const items = [];\n  (0,_helpers_groupTraversal_js__WEBPACK_IMPORTED_MODULE_2__.groupTraversal)(grouped, items, [], _helpers_identity_js__WEBPACK_IMPORTED_MODULE_3__.identity, (root, keys, values) => {\n    let valuesToAdd = values;\n    if (addGroupKeys !== false) {\n      valuesToAdd = values.map((d) => (0,_helpers_assignGroupKeys_js__WEBPACK_IMPORTED_MODULE_0__.assignGroupKeys)(d, keys));\n    }\n    root.push(...valuesToAdd);\n  });\n  return items;\n}\nconst defaultCompositeKey = (keys) => keys.join(\"/\");\nfunction processFromGroupsOptions(options) {\n  var _a;\n  const {\n    flat,\n    single,\n    mapLeaf = _helpers_identity_js__WEBPACK_IMPORTED_MODULE_3__.identity,\n    mapLeaves = _helpers_identity_js__WEBPACK_IMPORTED_MODULE_3__.identity,\n    addGroupKeys\n  } = options;\n  let compositeKey;\n  if (options.flat) {\n    compositeKey = (_a = options.compositeKey) != null ? _a : defaultCompositeKey;\n  }\n  const groupFn = (values, keys) => {\n    return single ? mapLeaf(addGroupKeys === false ? values[0] : (0,_helpers_assignGroupKeys_js__WEBPACK_IMPORTED_MODULE_0__.assignGroupKeys)(values[0], keys)) : mapLeaves(values.map((d) => mapLeaf(addGroupKeys === false ? d : (0,_helpers_assignGroupKeys_js__WEBPACK_IMPORTED_MODULE_0__.assignGroupKeys)(d, keys))));\n  };\n  const keyFn = flat ? (keys) => compositeKey(keys.map((d) => d[1])) : (keys) => keys[keys.length - 1][1];\n  return {groupFn, keyFn};\n}\nfunction exportLevels(grouped, options) {\n  const {groupFn, keyFn} = processFromGroupsOptions(options);\n  let {mapEntry = _helpers_identity_js__WEBPACK_IMPORTED_MODULE_3__.identity} = options;\n  const {levels = [\"entries\"]} = options;\n  const levelSpecs = [];\n  for (const levelOption of levels) {\n    switch (levelOption) {\n      case \"entries\":\n      case \"entries-object\":\n      case \"entries-obj\":\n      case \"entriesObject\": {\n        const levelMapEntry = (levelOption === \"entries-object\" || levelOption === \"entries-obj\" || levelOption === \"entriesObject\") && options.mapEntry == null ? ([key, values]) => ({key, values}) : mapEntry;\n        levelSpecs.push({\n          id: \"entries\",\n          createEmptySubgroup: () => [],\n          addSubgroup: (parentGrouped, newSubgroup, key, level) => {\n            parentGrouped.push(levelMapEntry([key, newSubgroup], level));\n          },\n          addLeaf: (parentGrouped, key, values, level) => {\n            parentGrouped.push(levelMapEntry([key, values], level));\n          }\n        });\n        break;\n      }\n      case \"map\":\n        levelSpecs.push({\n          id: \"map\",\n          createEmptySubgroup: () => new Map(),\n          addSubgroup: (parentGrouped, newSubgroup, key) => {\n            parentGrouped.set(key, newSubgroup);\n          },\n          addLeaf: (parentGrouped, key, values) => {\n            parentGrouped.set(key, values);\n          }\n        });\n        break;\n      case \"object\":\n        levelSpecs.push({\n          id: \"object\",\n          createEmptySubgroup: () => ({}),\n          addSubgroup: (parentGrouped, newSubgroup, key) => {\n            parentGrouped[key] = newSubgroup;\n          },\n          addLeaf: (parentGrouped, key, values) => {\n            parentGrouped[key] = values;\n          }\n        });\n        break;\n      case \"keys\":\n        levelSpecs.push({\n          id: \"keys\",\n          createEmptySubgroup: () => [],\n          addSubgroup: (parentGrouped, newSubgroup, key) => {\n            parentGrouped.push([key, newSubgroup]);\n          },\n          addLeaf: (parentGrouped, key) => {\n            parentGrouped.push(key);\n          }\n        });\n        break;\n      case \"values\":\n        levelSpecs.push({\n          id: \"values\",\n          createEmptySubgroup: () => [],\n          addSubgroup: (parentGrouped, newSubgroup) => {\n            parentGrouped.push(newSubgroup);\n          },\n          addLeaf: (parentGrouped, key, values) => {\n            parentGrouped.push(values);\n          }\n        });\n        break;\n      default: {\n        if (typeof levelOption === \"object\") {\n          levelSpecs.push(levelOption);\n        }\n      }\n    }\n  }\n  const addSubgroup = (parentGrouped, keys, level) => {\n    var _a, _b;\n    if (options.flat) {\n      return parentGrouped;\n    }\n    const levelSpec = (_a = levelSpecs[level]) != null ? _a : levelSpecs[levelSpecs.length - 1];\n    const nextLevelSpec = (_b = levelSpecs[level + 1]) != null ? _b : levelSpec;\n    const newSubgroup = nextLevelSpec.createEmptySubgroup();\n    levelSpec.addSubgroup(parentGrouped, newSubgroup, keyFn(keys), level);\n    return newSubgroup;\n  };\n  const addLeaf = (parentGrouped, keys, values, level) => {\n    var _a;\n    const levelSpec = (_a = levelSpecs[level]) != null ? _a : levelSpecs[levelSpecs.length - 1];\n    levelSpec.addLeaf(parentGrouped, keyFn(keys), groupFn(values, keys), level);\n  };\n  const initialOutputObject = levelSpecs[0].createEmptySubgroup();\n  return (0,_helpers_groupTraversal_js__WEBPACK_IMPORTED_MODULE_2__.groupTraversal)(grouped, initialOutputObject, [], addSubgroup, addLeaf);\n}\n\n\n//# sourceMappingURL=groupBy.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/groupBy.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/assignGroupKeys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/assignGroupKeys.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assignGroupKeys\": () => (/* binding */ assignGroupKeys)\n/* harmony export */ });\nfunction assignGroupKeys(d, keys) {\n  if (d == null || typeof d !== \"object\" || Array.isArray(d))\n    return d;\n  const keysObj = Object.fromEntries(keys.filter((key) => typeof key[0] !== \"function\"));\n  return Object.assign(keysObj, d);\n}\n\n\n//# sourceMappingURL=assignGroupKeys.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/assignGroupKeys.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/groupMap.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/groupMap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"groupMap\": () => (/* binding */ groupMap)\n/* harmony export */ });\n/* harmony import */ var _groupTraversal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupTraversal.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/groupTraversal.js\");\n\n\nfunction groupMap(grouped, groupFn, keyFn = (keys) => keys[keys.length - 1]) {\n  function addSubgroup(parentGrouped, keys) {\n    const subgroup = new Map();\n    parentGrouped.set(keyFn(keys), subgroup);\n    return subgroup;\n  }\n  function addLeaves(parentGrouped, keys, values) {\n    parentGrouped.set(keyFn(keys), groupFn(values, keys));\n  }\n  const outputGrouped = new Map();\n  (0,_groupTraversal_js__WEBPACK_IMPORTED_MODULE_0__.groupTraversal)(grouped, outputGrouped, [], addSubgroup, addLeaves);\n  return outputGrouped;\n}\n\n\n//# sourceMappingURL=groupMap.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/groupMap.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/groupTraversal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/groupTraversal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"groupTraversal\": () => (/* binding */ groupTraversal)\n/* harmony export */ });\nfunction groupTraversal(grouped, outputGrouped, keys, addSubgroup, addLeaves, level = 0) {\n  for (const [key, value] of grouped.entries()) {\n    const keysHere = [...keys, key];\n    if (value instanceof Map) {\n      const subgroup = addSubgroup(outputGrouped, keysHere, level);\n      groupTraversal(value, subgroup, keysHere, addSubgroup, addLeaves, level + 1);\n    } else {\n      addLeaves(outputGrouped, keysHere, value, level);\n    }\n  }\n  return outputGrouped;\n}\n\n\n//# sourceMappingURL=groupTraversal.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/groupTraversal.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/identity.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"identity\": () => (/* binding */ identity)\n/* harmony export */ });\nconst identity = (d) => d;\n\n\n//# sourceMappingURL=identity.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/identity.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keysFromItems\": () => (/* binding */ keysFromItems)\n/* harmony export */ });\nfunction keysFromItems(items) {\n  if (items.length < 1)\n    return [];\n  const keys = Object.keys(items[0]);\n  return keys;\n}\n\n\n//# sourceMappingURL=keysFromItems.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"singleOrArray\": () => (/* binding */ singleOrArray)\n/* harmony export */ });\nfunction singleOrArray(d) {\n  return d == null ? [] : Array.isArray(d) ? d : [d];\n}\n\n\n//# sourceMappingURL=singleOrArray.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/helpers/summation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/helpers/summation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fcumsum\": () => (/* binding */ fcumsum),\n/* harmony export */   \"mean\": () => (/* binding */ mean)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/fsum.js\");\n\n\nfunction fcumsum(items, accessor) {\n  let sum = new d3_array__WEBPACK_IMPORTED_MODULE_0__.Adder(), i = 0;\n  return Float64Array.from(items, (value) => sum.add(+(accessor(value, i++, items) || 0)));\n}\nfunction mean(items, accessor) {\n  let n = 0;\n  for (let i = 0; i < items.length; ++i) {\n    const value = accessor(items[i], i, items);\n    if (+value === value) {\n      n += 1;\n    }\n  }\n  return n ? (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.fsum)(items, accessor) / n : void 0;\n}\n\n\n//# sourceMappingURL=summation.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/helpers/summation.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tidy\": () => (/* reexport safe */ _tidy_js__WEBPACK_IMPORTED_MODULE_0__.tidy),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_1__.filter),\n/* harmony export */   \"when\": () => (/* reexport safe */ _when_js__WEBPACK_IMPORTED_MODULE_2__.when),\n/* harmony export */   \"map\": () => (/* reexport safe */ _map_js__WEBPACK_IMPORTED_MODULE_3__.map),\n/* harmony export */   \"distinct\": () => (/* reexport safe */ _distinct_js__WEBPACK_IMPORTED_MODULE_4__.distinct),\n/* harmony export */   \"arrange\": () => (/* reexport safe */ _arrange_js__WEBPACK_IMPORTED_MODULE_5__.arrange),\n/* harmony export */   \"asc\": () => (/* reexport safe */ _arrange_js__WEBPACK_IMPORTED_MODULE_5__.asc),\n/* harmony export */   \"desc\": () => (/* reexport safe */ _arrange_js__WEBPACK_IMPORTED_MODULE_5__.desc),\n/* harmony export */   \"fixedOrder\": () => (/* reexport safe */ _arrange_js__WEBPACK_IMPORTED_MODULE_5__.fixedOrder),\n/* harmony export */   \"sort\": () => (/* reexport safe */ _arrange_js__WEBPACK_IMPORTED_MODULE_5__.arrange),\n/* harmony export */   \"summarize\": () => (/* reexport safe */ _summarize_js__WEBPACK_IMPORTED_MODULE_6__.summarize),\n/* harmony export */   \"summarizeAll\": () => (/* reexport safe */ _summarize_js__WEBPACK_IMPORTED_MODULE_6__.summarizeAll),\n/* harmony export */   \"summarizeAt\": () => (/* reexport safe */ _summarize_js__WEBPACK_IMPORTED_MODULE_6__.summarizeAt),\n/* harmony export */   \"summarizeIf\": () => (/* reexport safe */ _summarize_js__WEBPACK_IMPORTED_MODULE_6__.summarizeIf),\n/* harmony export */   \"total\": () => (/* reexport safe */ _total_js__WEBPACK_IMPORTED_MODULE_7__.total),\n/* harmony export */   \"totalAll\": () => (/* reexport safe */ _total_js__WEBPACK_IMPORTED_MODULE_7__.totalAll),\n/* harmony export */   \"totalAt\": () => (/* reexport safe */ _total_js__WEBPACK_IMPORTED_MODULE_7__.totalAt),\n/* harmony export */   \"totalIf\": () => (/* reexport safe */ _total_js__WEBPACK_IMPORTED_MODULE_7__.totalIf),\n/* harmony export */   \"count\": () => (/* reexport safe */ _count_js__WEBPACK_IMPORTED_MODULE_8__.count),\n/* harmony export */   \"tally\": () => (/* reexport safe */ _tally_js__WEBPACK_IMPORTED_MODULE_9__.tally),\n/* harmony export */   \"groupBy\": () => (/* reexport safe */ _groupBy_js__WEBPACK_IMPORTED_MODULE_10__.groupBy),\n/* harmony export */   \"rename\": () => (/* reexport safe */ _rename_js__WEBPACK_IMPORTED_MODULE_11__.rename),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _slice_js__WEBPACK_IMPORTED_MODULE_12__.slice),\n/* harmony export */   \"sliceHead\": () => (/* reexport safe */ _slice_js__WEBPACK_IMPORTED_MODULE_12__.sliceHead),\n/* harmony export */   \"sliceMax\": () => (/* reexport safe */ _slice_js__WEBPACK_IMPORTED_MODULE_12__.sliceMax),\n/* harmony export */   \"sliceMin\": () => (/* reexport safe */ _slice_js__WEBPACK_IMPORTED_MODULE_12__.sliceMin),\n/* harmony export */   \"sliceSample\": () => (/* reexport safe */ _slice_js__WEBPACK_IMPORTED_MODULE_12__.sliceSample),\n/* harmony export */   \"sliceTail\": () => (/* reexport safe */ _slice_js__WEBPACK_IMPORTED_MODULE_12__.sliceTail),\n/* harmony export */   \"innerJoin\": () => (/* reexport safe */ _innerJoin_js__WEBPACK_IMPORTED_MODULE_13__.innerJoin),\n/* harmony export */   \"leftJoin\": () => (/* reexport safe */ _leftJoin_js__WEBPACK_IMPORTED_MODULE_14__.leftJoin),\n/* harmony export */   \"fullJoin\": () => (/* reexport safe */ _fullJoin_js__WEBPACK_IMPORTED_MODULE_15__.fullJoin),\n/* harmony export */   \"mutateWithSummary\": () => (/* reexport safe */ _mutateWithSummary_js__WEBPACK_IMPORTED_MODULE_16__.mutateWithSummary),\n/* harmony export */   \"mutate\": () => (/* reexport safe */ _mutate_js__WEBPACK_IMPORTED_MODULE_17__.mutate),\n/* harmony export */   \"transmute\": () => (/* reexport safe */ _transmute_js__WEBPACK_IMPORTED_MODULE_18__.transmute),\n/* harmony export */   \"pick\": () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_19__.select),\n/* harmony export */   \"select\": () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_19__.select),\n/* harmony export */   \"addItems\": () => (/* reexport safe */ _addRows_js__WEBPACK_IMPORTED_MODULE_20__.addRows),\n/* harmony export */   \"addRows\": () => (/* reexport safe */ _addRows_js__WEBPACK_IMPORTED_MODULE_20__.addRows),\n/* harmony export */   \"pivotWider\": () => (/* reexport safe */ _pivotWider_js__WEBPACK_IMPORTED_MODULE_21__.pivotWider),\n/* harmony export */   \"pivotLonger\": () => (/* reexport safe */ _pivotLonger_js__WEBPACK_IMPORTED_MODULE_22__.pivotLonger),\n/* harmony export */   \"expand\": () => (/* reexport safe */ _expand_js__WEBPACK_IMPORTED_MODULE_23__.expand),\n/* harmony export */   \"fullSeq\": () => (/* reexport safe */ _sequences_fullSeq_js__WEBPACK_IMPORTED_MODULE_24__.fullSeq),\n/* harmony export */   \"fullSeqDate\": () => (/* reexport safe */ _sequences_fullSeq_js__WEBPACK_IMPORTED_MODULE_24__.fullSeqDate),\n/* harmony export */   \"fullSeqDateISOString\": () => (/* reexport safe */ _sequences_fullSeq_js__WEBPACK_IMPORTED_MODULE_24__.fullSeqDateISOString),\n/* harmony export */   \"vectorSeq\": () => (/* reexport safe */ _sequences_fullSeq_js__WEBPACK_IMPORTED_MODULE_24__.vectorSeq),\n/* harmony export */   \"vectorSeqDate\": () => (/* reexport safe */ _sequences_fullSeq_js__WEBPACK_IMPORTED_MODULE_24__.vectorSeqDate),\n/* harmony export */   \"replaceNully\": () => (/* reexport safe */ _replaceNully_js__WEBPACK_IMPORTED_MODULE_25__.replaceNully),\n/* harmony export */   \"complete\": () => (/* reexport safe */ _complete_js__WEBPACK_IMPORTED_MODULE_26__.complete),\n/* harmony export */   \"fill\": () => (/* reexport safe */ _fill_js__WEBPACK_IMPORTED_MODULE_27__.fill),\n/* harmony export */   \"debug\": () => (/* reexport safe */ _debug_js__WEBPACK_IMPORTED_MODULE_28__.debug),\n/* harmony export */   \"rate\": () => (/* reexport safe */ _item_rate_js__WEBPACK_IMPORTED_MODULE_29__.rate),\n/* harmony export */   \"cumsum\": () => (/* reexport safe */ _vector_cumsum_js__WEBPACK_IMPORTED_MODULE_30__.cumsum),\n/* harmony export */   \"roll\": () => (/* reexport safe */ _vector_roll_js__WEBPACK_IMPORTED_MODULE_31__.roll),\n/* harmony export */   \"lag\": () => (/* reexport safe */ _vector_lag_js__WEBPACK_IMPORTED_MODULE_32__.lag),\n/* harmony export */   \"lead\": () => (/* reexport safe */ _vector_lead_js__WEBPACK_IMPORTED_MODULE_33__.lead),\n/* harmony export */   \"sum\": () => (/* reexport safe */ _summary_sum_js__WEBPACK_IMPORTED_MODULE_34__.sum),\n/* harmony export */   \"min\": () => (/* reexport safe */ _summary_min_js__WEBPACK_IMPORTED_MODULE_35__.min),\n/* harmony export */   \"max\": () => (/* reexport safe */ _summary_max_js__WEBPACK_IMPORTED_MODULE_36__.max),\n/* harmony export */   \"mean\": () => (/* reexport safe */ _summary_mean_js__WEBPACK_IMPORTED_MODULE_37__.mean),\n/* harmony export */   \"meanRate\": () => (/* reexport safe */ _summary_meanRate_js__WEBPACK_IMPORTED_MODULE_38__.meanRate),\n/* harmony export */   \"median\": () => (/* reexport safe */ _summary_median_js__WEBPACK_IMPORTED_MODULE_39__.median),\n/* harmony export */   \"deviation\": () => (/* reexport safe */ _summary_deviation_js__WEBPACK_IMPORTED_MODULE_40__.deviation),\n/* harmony export */   \"variance\": () => (/* reexport safe */ _summary_variance_js__WEBPACK_IMPORTED_MODULE_41__.variance),\n/* harmony export */   \"n\": () => (/* reexport safe */ _summary_n_js__WEBPACK_IMPORTED_MODULE_42__.n),\n/* harmony export */   \"nDistinct\": () => (/* reexport safe */ _summary_nDistinct_js__WEBPACK_IMPORTED_MODULE_43__.nDistinct),\n/* harmony export */   \"first\": () => (/* reexport safe */ _summary_first_js__WEBPACK_IMPORTED_MODULE_44__.first),\n/* harmony export */   \"last\": () => (/* reexport safe */ _summary_last_js__WEBPACK_IMPORTED_MODULE_45__.last),\n/* harmony export */   \"everything\": () => (/* reexport safe */ _selectors_everything_js__WEBPACK_IMPORTED_MODULE_46__.everything),\n/* harmony export */   \"startsWith\": () => (/* reexport safe */ _selectors_startsWith_js__WEBPACK_IMPORTED_MODULE_47__.startsWith),\n/* harmony export */   \"endsWith\": () => (/* reexport safe */ _selectors_endsWith_js__WEBPACK_IMPORTED_MODULE_48__.endsWith),\n/* harmony export */   \"contains\": () => (/* reexport safe */ _selectors_contains_js__WEBPACK_IMPORTED_MODULE_49__.contains),\n/* harmony export */   \"matches\": () => (/* reexport safe */ _selectors_matches_js__WEBPACK_IMPORTED_MODULE_50__.matches),\n/* harmony export */   \"numRange\": () => (/* reexport safe */ _selectors_numRange_js__WEBPACK_IMPORTED_MODULE_51__.numRange),\n/* harmony export */   \"negate\": () => (/* reexport safe */ _selectors_negate_js__WEBPACK_IMPORTED_MODULE_52__.negate),\n/* harmony export */   \"TMath\": () => (/* reexport module object */ _math_math_js__WEBPACK_IMPORTED_MODULE_53__)\n/* harmony export */ });\n/* harmony import */ var _tidy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tidy.js */ \"./node_modules/@tidyjs/tidy/dist/es/tidy.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/@tidyjs/tidy/dist/es/filter.js\");\n/* harmony import */ var _when_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./when.js */ \"./node_modules/@tidyjs/tidy/dist/es/when.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ \"./node_modules/@tidyjs/tidy/dist/es/map.js\");\n/* harmony import */ var _distinct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distinct.js */ \"./node_modules/@tidyjs/tidy/dist/es/distinct.js\");\n/* harmony import */ var _arrange_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrange.js */ \"./node_modules/@tidyjs/tidy/dist/es/arrange.js\");\n/* harmony import */ var _summarize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summarize.js */ \"./node_modules/@tidyjs/tidy/dist/es/summarize.js\");\n/* harmony import */ var _total_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./total.js */ \"./node_modules/@tidyjs/tidy/dist/es/total.js\");\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./count.js */ \"./node_modules/@tidyjs/tidy/dist/es/count.js\");\n/* harmony import */ var _tally_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tally.js */ \"./node_modules/@tidyjs/tidy/dist/es/tally.js\");\n/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./groupBy.js */ \"./node_modules/@tidyjs/tidy/dist/es/groupBy.js\");\n/* harmony import */ var _rename_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rename.js */ \"./node_modules/@tidyjs/tidy/dist/es/rename.js\");\n/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slice.js */ \"./node_modules/@tidyjs/tidy/dist/es/slice.js\");\n/* harmony import */ var _innerJoin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./innerJoin.js */ \"./node_modules/@tidyjs/tidy/dist/es/innerJoin.js\");\n/* harmony import */ var _leftJoin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leftJoin.js */ \"./node_modules/@tidyjs/tidy/dist/es/leftJoin.js\");\n/* harmony import */ var _fullJoin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fullJoin.js */ \"./node_modules/@tidyjs/tidy/dist/es/fullJoin.js\");\n/* harmony import */ var _mutateWithSummary_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mutateWithSummary.js */ \"./node_modules/@tidyjs/tidy/dist/es/mutateWithSummary.js\");\n/* harmony import */ var _mutate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mutate.js */ \"./node_modules/@tidyjs/tidy/dist/es/mutate.js\");\n/* harmony import */ var _transmute_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transmute.js */ \"./node_modules/@tidyjs/tidy/dist/es/transmute.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select.js */ \"./node_modules/@tidyjs/tidy/dist/es/select.js\");\n/* harmony import */ var _addRows_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./addRows.js */ \"./node_modules/@tidyjs/tidy/dist/es/addRows.js\");\n/* harmony import */ var _pivotWider_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pivotWider.js */ \"./node_modules/@tidyjs/tidy/dist/es/pivotWider.js\");\n/* harmony import */ var _pivotLonger_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pivotLonger.js */ \"./node_modules/@tidyjs/tidy/dist/es/pivotLonger.js\");\n/* harmony import */ var _expand_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./expand.js */ \"./node_modules/@tidyjs/tidy/dist/es/expand.js\");\n/* harmony import */ var _sequences_fullSeq_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sequences/fullSeq.js */ \"./node_modules/@tidyjs/tidy/dist/es/sequences/fullSeq.js\");\n/* harmony import */ var _replaceNully_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./replaceNully.js */ \"./node_modules/@tidyjs/tidy/dist/es/replaceNully.js\");\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./complete.js */ \"./node_modules/@tidyjs/tidy/dist/es/complete.js\");\n/* harmony import */ var _fill_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fill.js */ \"./node_modules/@tidyjs/tidy/dist/es/fill.js\");\n/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./debug.js */ \"./node_modules/@tidyjs/tidy/dist/es/debug.js\");\n/* harmony import */ var _item_rate_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./item/rate.js */ \"./node_modules/@tidyjs/tidy/dist/es/item/rate.js\");\n/* harmony import */ var _vector_cumsum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./vector/cumsum.js */ \"./node_modules/@tidyjs/tidy/dist/es/vector/cumsum.js\");\n/* harmony import */ var _vector_roll_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./vector/roll.js */ \"./node_modules/@tidyjs/tidy/dist/es/vector/roll.js\");\n/* harmony import */ var _vector_lag_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./vector/lag.js */ \"./node_modules/@tidyjs/tidy/dist/es/vector/lag.js\");\n/* harmony import */ var _vector_lead_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./vector/lead.js */ \"./node_modules/@tidyjs/tidy/dist/es/vector/lead.js\");\n/* harmony import */ var _summary_sum_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./summary/sum.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/sum.js\");\n/* harmony import */ var _summary_min_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./summary/min.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/min.js\");\n/* harmony import */ var _summary_max_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./summary/max.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/max.js\");\n/* harmony import */ var _summary_mean_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./summary/mean.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/mean.js\");\n/* harmony import */ var _summary_meanRate_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./summary/meanRate.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/meanRate.js\");\n/* harmony import */ var _summary_median_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./summary/median.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/median.js\");\n/* harmony import */ var _summary_deviation_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./summary/deviation.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/deviation.js\");\n/* harmony import */ var _summary_variance_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./summary/variance.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/variance.js\");\n/* harmony import */ var _summary_n_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./summary/n.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/n.js\");\n/* harmony import */ var _summary_nDistinct_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./summary/nDistinct.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/nDistinct.js\");\n/* harmony import */ var _summary_first_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./summary/first.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/first.js\");\n/* harmony import */ var _summary_last_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./summary/last.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/last.js\");\n/* harmony import */ var _selectors_everything_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./selectors/everything.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/everything.js\");\n/* harmony import */ var _selectors_startsWith_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./selectors/startsWith.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/startsWith.js\");\n/* harmony import */ var _selectors_endsWith_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./selectors/endsWith.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/endsWith.js\");\n/* harmony import */ var _selectors_contains_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./selectors/contains.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/contains.js\");\n/* harmony import */ var _selectors_matches_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./selectors/matches.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/matches.js\");\n/* harmony import */ var _selectors_numRange_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./selectors/numRange.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/numRange.js\");\n/* harmony import */ var _selectors_negate_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./selectors/negate.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/negate.js\");\n/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./math/math.js */ \"./node_modules/@tidyjs/tidy/dist/es/math/math.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/index.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/innerJoin.js":
/*!********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/innerJoin.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autodetectByMap\": () => (/* binding */ autodetectByMap),\n/* harmony export */   \"innerJoin\": () => (/* binding */ innerJoin),\n/* harmony export */   \"isMatch\": () => (/* binding */ isMatch),\n/* harmony export */   \"makeByMap\": () => (/* binding */ makeByMap)\n/* harmony export */ });\nfunction autodetectByMap(itemsA, itemsB) {\n  if (itemsA.length === 0 || itemsB.length === 0)\n    return {};\n  const keysA = Object.keys(itemsA[0]);\n  const keysB = Object.keys(itemsB[0]);\n  const byMap = {};\n  for (const key of keysA) {\n    if (keysB.includes(key)) {\n      byMap[key] = key;\n    }\n  }\n  return byMap;\n}\nfunction makeByMap(by) {\n  if (Array.isArray(by)) {\n    const byMap = {};\n    for (const key of by) {\n      byMap[key] = key;\n    }\n    return byMap;\n  } else if (typeof by === \"object\") {\n    return by;\n  }\n  return {[by]: by};\n}\nfunction isMatch(d, j, byMap) {\n  for (const jKey in byMap) {\n    const dKey = byMap[jKey];\n    if (d[dKey] !== j[jKey]) {\n      return false;\n    }\n  }\n  return true;\n}\nfunction innerJoin(itemsToJoin, options) {\n  const _innerJoin = (items) => {\n    const byMap = (options == null ? void 0 : options.by) == null ? autodetectByMap(items, itemsToJoin) : makeByMap(options.by);\n    const joined = items.flatMap((d) => {\n      const matches = itemsToJoin.filter((j) => isMatch(d, j, byMap));\n      return matches.map((j) => ({...d, ...j}));\n    });\n    return joined;\n  };\n  return _innerJoin;\n}\n\n\n//# sourceMappingURL=innerJoin.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/innerJoin.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/item/rate.js":
/*!********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/item/rate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rate\": () => (/* binding */ rate)\n/* harmony export */ });\n/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/math.js */ \"./node_modules/@tidyjs/tidy/dist/es/math/math.js\");\n\n\nfunction rate(numerator, denominator, options) {\n  const numeratorFn = typeof numerator === \"function\" ? numerator : (d) => d[numerator];\n  const denominatorFn = typeof denominator === \"function\" ? denominator : (d) => d[denominator];\n  const {predicate, allowDivideByZero} = options != null ? options : {};\n  return predicate == null ? (d) => {\n    const denom = denominatorFn(d);\n    const numer = numeratorFn(d);\n    return (0,_math_math_js__WEBPACK_IMPORTED_MODULE_0__.rate)(numer, denom, allowDivideByZero);\n  } : (d) => {\n    if (!predicate(d))\n      return void 0;\n    const denom = denominatorFn(d);\n    const numer = numeratorFn(d);\n    return (0,_math_math_js__WEBPACK_IMPORTED_MODULE_0__.rate)(numer, denom, allowDivideByZero);\n  };\n}\n\n\n//# sourceMappingURL=rate.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/item/rate.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/leftJoin.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/leftJoin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leftJoin\": () => (/* binding */ leftJoin)\n/* harmony export */ });\n/* harmony import */ var _innerJoin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./innerJoin.js */ \"./node_modules/@tidyjs/tidy/dist/es/innerJoin.js\");\n\n\nfunction leftJoin(itemsToJoin, options) {\n  const _leftJoin = (items) => {\n    if (!itemsToJoin.length)\n      return items;\n    const byMap = (options == null ? void 0 : options.by) == null ? (0,_innerJoin_js__WEBPACK_IMPORTED_MODULE_0__.autodetectByMap)(items, itemsToJoin) : (0,_innerJoin_js__WEBPACK_IMPORTED_MODULE_0__.makeByMap)(options.by);\n    const joinObjectKeys = Object.keys(itemsToJoin[0]);\n    const joined = items.flatMap((d) => {\n      const matches = itemsToJoin.filter((j) => (0,_innerJoin_js__WEBPACK_IMPORTED_MODULE_0__.isMatch)(d, j, byMap));\n      if (matches.length) {\n        return matches.map((j) => ({...d, ...j}));\n      }\n      const undefinedFill = Object.fromEntries(joinObjectKeys.filter((key) => d[key] == null).map((key) => [key, void 0]));\n      return {...d, ...undefinedFill};\n    });\n    return joined;\n  };\n  return _leftJoin;\n}\n\n\n//# sourceMappingURL=leftJoin.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/leftJoin.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/map.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\nfunction map(mapFn) {\n  const _map = (items) => items.map(mapFn);\n  return _map;\n}\n\n\n//# sourceMappingURL=map.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/map.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/math/math.js":
/*!********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/math/math.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"rate\": () => (/* binding */ rate),\n/* harmony export */   \"subtract\": () => (/* binding */ subtract)\n/* harmony export */ });\nfunction rate(numerator, denominator, allowDivideByZero) {\n  return numerator == null || denominator == null ? void 0 : denominator === 0 && numerator === 0 ? 0 : !allowDivideByZero && denominator === 0 ? void 0 : numerator / denominator;\n}\nfunction subtract(a, b, nullyZero) {\n  return a == null || b == null ? nullyZero ? (a != null ? a : 0) - (b != null ? b : 0) : void 0 : a - b;\n}\nfunction add(a, b, nullyZero) {\n  return a == null || b == null ? nullyZero ? (a != null ? a : 0) + (b != null ? b : 0) : void 0 : a + b;\n}\n\n\n//# sourceMappingURL=math.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/math/math.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/mutate.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/mutate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutate\": () => (/* binding */ mutate)\n/* harmony export */ });\nfunction mutate(mutateSpec) {\n  const _mutate = (items) => {\n    const mutatedItems = [];\n    for (const item of items) {\n      const mutatedItem = {...item};\n      for (const key in mutateSpec) {\n        const mutateSpecValue = mutateSpec[key];\n        const mutatedResult = typeof mutateSpecValue === \"function\" ? mutateSpecValue(mutatedItem) : mutateSpecValue;\n        mutatedItem[key] = mutatedResult;\n      }\n      mutatedItems.push(mutatedItem);\n    }\n    return mutatedItems;\n  };\n  return _mutate;\n}\n\n\n//# sourceMappingURL=mutate.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/mutate.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/mutateWithSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/mutateWithSummary.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutateWithSummary\": () => (/* binding */ mutateWithSummary)\n/* harmony export */ });\nfunction mutateWithSummary(mutateSpec) {\n  const _mutate = (items) => {\n    const mutatedItems = items.map((d) => ({...d}));\n    for (const key in mutateSpec) {\n      const mutateSpecValue = mutateSpec[key];\n      const mutatedResult = typeof mutateSpecValue === \"function\" ? mutateSpecValue(mutatedItems) : mutateSpecValue;\n      const mutatedVector = (mutatedResult == null ? void 0 : mutatedResult[Symbol.iterator]) && typeof mutatedResult !== \"string\" ? mutatedResult : items.map(() => mutatedResult);\n      let i = -1;\n      for (const mutatedItem of mutatedItems) {\n        mutatedItem[key] = mutatedVector[++i];\n      }\n    }\n    return mutatedItems;\n  };\n  return _mutate;\n}\n\n\n//# sourceMappingURL=mutateWithSummary.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/mutateWithSummary.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/pivotLonger.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/pivotLonger.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pivotLonger\": () => (/* binding */ pivotLonger)\n/* harmony export */ });\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ \"./node_modules/@tidyjs/tidy/dist/es/select.js\");\n\n\nfunction pivotLonger(options) {\n  const _pivotLonger = (items) => {\n    var _a;\n    const {namesTo, valuesTo, namesSep = \"_\"} = options;\n    const cols = (_a = options.cols) != null ? _a : [];\n    const colsKeys = (0,_select_js__WEBPACK_IMPORTED_MODULE_0__.processSelectors)(items, cols);\n    const namesToKeys = Array.isArray(namesTo) ? namesTo : [namesTo];\n    const valuesToKeys = Array.isArray(valuesTo) ? valuesTo : [valuesTo];\n    const hasMultipleNamesTo = namesToKeys.length > 1;\n    const hasMultipleValuesTo = valuesToKeys.length > 1;\n    const longer = [];\n    for (const item of items) {\n      const remainingKeys = Object.keys(item).filter((key) => !colsKeys.includes(key));\n      const baseObj = {};\n      for (const key of remainingKeys) {\n        baseObj[key] = item[key];\n      }\n      const nameValueKeysWithoutValuePrefix = hasMultipleValuesTo ? Array.from(new Set(colsKeys.map((key) => key.substring(key.indexOf(namesSep) + 1)))) : colsKeys;\n      for (const nameValue of nameValueKeysWithoutValuePrefix) {\n        const entryObj = {...baseObj};\n        for (const valueKey of valuesToKeys) {\n          const itemKey = hasMultipleValuesTo ? `${valueKey}${namesSep}${nameValue}` : nameValue;\n          const nameValueParts = hasMultipleNamesTo ? nameValue.split(namesSep) : [nameValue];\n          let i = 0;\n          for (const nameKey of namesToKeys) {\n            const nameValuePart = nameValueParts[i++];\n            entryObj[nameKey] = nameValuePart;\n            entryObj[valueKey] = item[itemKey];\n          }\n        }\n        longer.push(entryObj);\n      }\n    }\n    return longer;\n  };\n  return _pivotLonger;\n}\n\n\n//# sourceMappingURL=pivotLonger.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/pivotLonger.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/pivotWider.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/pivotWider.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pivotWider\": () => (/* binding */ pivotWider)\n/* harmony export */ });\n/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupBy.js */ \"./node_modules/@tidyjs/tidy/dist/es/groupBy.js\");\n/* harmony import */ var _tidy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tidy.js */ \"./node_modules/@tidyjs/tidy/dist/es/tidy.js\");\n\n\n\nfunction pivotWider(options) {\n  const _pivotWider = (items) => {\n    const {\n      namesFrom,\n      valuesFrom,\n      valuesFill,\n      valuesFillMap,\n      namesSep = \"_\"\n    } = options;\n    const namesFromKeys = Array.isArray(namesFrom) ? namesFrom : [namesFrom];\n    const valuesFromKeys = Array.isArray(valuesFrom) ? valuesFrom : [valuesFrom];\n    const wider = [];\n    if (!items.length)\n      return wider;\n    const idColumns = Object.keys(items[0]).filter((key) => !namesFromKeys.includes(key) && !valuesFromKeys.includes(key));\n    const nameValuesMap = {};\n    for (const item of items) {\n      for (const nameKey of namesFromKeys) {\n        if (nameValuesMap[nameKey] == null) {\n          nameValuesMap[nameKey] = {};\n        }\n        nameValuesMap[nameKey][item[nameKey]] = true;\n      }\n    }\n    const nameValuesLists = [];\n    for (const nameKey in nameValuesMap) {\n      nameValuesLists.push(Object.keys(nameValuesMap[nameKey]));\n    }\n    const baseWideObj = {};\n    const combos = makeCombinations(namesSep, nameValuesLists);\n    for (const nameKey of combos) {\n      if (valuesFromKeys.length === 1) {\n        baseWideObj[nameKey] = valuesFillMap != null ? valuesFillMap[valuesFromKeys[0]] : valuesFill;\n        continue;\n      }\n      for (const valueKey of valuesFromKeys) {\n        baseWideObj[`${valueKey}${namesSep}${nameKey}`] = valuesFillMap != null ? valuesFillMap[valueKey] : valuesFill;\n      }\n    }\n    function widenItems(items2) {\n      if (!items2.length)\n        return [];\n      const wide = {...baseWideObj};\n      for (const idKey of idColumns) {\n        wide[idKey] = items2[0][idKey];\n      }\n      for (const item of items2) {\n        const nameKey = namesFromKeys.map((key) => item[key]).join(namesSep);\n        if (valuesFromKeys.length === 1) {\n          wide[nameKey] = item[valuesFromKeys[0]];\n          continue;\n        }\n        for (const valueKey of valuesFromKeys) {\n          wide[`${valueKey}${namesSep}${nameKey}`] = item[valueKey];\n        }\n      }\n      return [wide];\n    }\n    if (!idColumns.length) {\n      return widenItems(items);\n    }\n    const finish = (0,_tidy_js__WEBPACK_IMPORTED_MODULE_1__.tidy)(items, (0,_groupBy_js__WEBPACK_IMPORTED_MODULE_0__.groupBy)(idColumns, [widenItems]));\n    return finish;\n  };\n  return _pivotWider;\n}\nfunction makeCombinations(separator = \"_\", arrays) {\n  function combine(accum, prefix, remainingArrays) {\n    if (!remainingArrays.length && prefix != null) {\n      accum.push(prefix);\n      return;\n    }\n    const array = remainingArrays[0];\n    const newRemainingArrays = remainingArrays.slice(1);\n    for (const item of array) {\n      combine(accum, prefix == null ? item : `${prefix}${separator}${item}`, newRemainingArrays);\n    }\n  }\n  const result = [];\n  combine(result, null, arrays);\n  return result;\n}\n\n\n//# sourceMappingURL=pivotWider.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/pivotWider.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/rename.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/rename.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rename\": () => (/* binding */ rename)\n/* harmony export */ });\nfunction rename(renameSpec) {\n  const _rename = (items) => {\n    return items.map((d) => {\n      var _a;\n      const mapped = {};\n      const keys = Object.keys(d);\n      for (const key of keys) {\n        const newKey = (_a = renameSpec[key]) != null ? _a : key;\n        mapped[newKey] = d[key];\n      }\n      return mapped;\n    });\n  };\n  return _rename;\n}\n\n\n//# sourceMappingURL=rename.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/rename.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/replaceNully.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/replaceNully.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replaceNully\": () => (/* binding */ replaceNully)\n/* harmony export */ });\nfunction replaceNully(replaceSpec) {\n  const _replaceNully = (items) => {\n    const replacedItems = [];\n    for (const d of items) {\n      const obj = {...d};\n      for (const key in replaceSpec) {\n        if (obj[key] == null) {\n          obj[key] = replaceSpec[key];\n        }\n      }\n      replacedItems.push(obj);\n    }\n    return replacedItems;\n  };\n  return _replaceNully;\n}\n\n\n//# sourceMappingURL=replaceNully.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/replaceNully.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/select.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/select.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"processSelectors\": () => (/* binding */ processSelectors),\n/* harmony export */   \"select\": () => (/* binding */ select)\n/* harmony export */ });\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n/* harmony import */ var _selectors_everything_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors/everything.js */ \"./node_modules/@tidyjs/tidy/dist/es/selectors/everything.js\");\n\n\n\nfunction processSelectors(items, selectKeys) {\n  let processedSelectKeys = [];\n  for (const keyInput of (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(selectKeys)) {\n    if (typeof keyInput === \"function\") {\n      processedSelectKeys.push(...keyInput(items));\n    } else {\n      processedSelectKeys.push(keyInput);\n    }\n  }\n  if (processedSelectKeys.length && processedSelectKeys[0][0] === \"-\") {\n    processedSelectKeys = [...(0,_selectors_everything_js__WEBPACK_IMPORTED_MODULE_1__.everything)()(items), ...processedSelectKeys];\n  }\n  const negationMap = {};\n  const keysWithoutNegations = [];\n  for (let k = processedSelectKeys.length - 1; k >= 0; k--) {\n    const key = processedSelectKeys[k];\n    if (key[0] === \"-\") {\n      negationMap[key.substring(1)] = true;\n      continue;\n    }\n    if (negationMap[key]) {\n      negationMap[key] = false;\n      continue;\n    }\n    keysWithoutNegations.unshift(key);\n  }\n  processedSelectKeys = Array.from(new Set(keysWithoutNegations));\n  return processedSelectKeys;\n}\nfunction select(selectKeys) {\n  const _select = (items) => {\n    let processedSelectKeys = processSelectors(items, selectKeys);\n    if (!processedSelectKeys.length)\n      return items;\n    return items.map((d) => {\n      const mapped = {};\n      for (const key of processedSelectKeys) {\n        mapped[key] = d[key];\n      }\n      return mapped;\n    });\n  };\n  return _select;\n}\n\n\n//# sourceMappingURL=select.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/select.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/contains.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/contains.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contains\": () => (/* binding */ contains)\n/* harmony export */ });\n/* harmony import */ var _helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/keysFromItems.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js\");\n\n\nfunction contains(substring, ignoreCase = true) {\n  return (items) => {\n    const regex = new RegExp(substring, ignoreCase ? \"i\" : void 0);\n    const keys = (0,_helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__.keysFromItems)(items);\n    return keys.filter((d) => regex.test(d));\n  };\n}\n\n\n//# sourceMappingURL=contains.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/contains.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/endsWith.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/endsWith.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endsWith\": () => (/* binding */ endsWith)\n/* harmony export */ });\n/* harmony import */ var _helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/keysFromItems.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js\");\n\n\nfunction endsWith(suffix, ignoreCase = true) {\n  return (items) => {\n    const regex = new RegExp(`${suffix}$`, ignoreCase ? \"i\" : void 0);\n    const keys = (0,_helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__.keysFromItems)(items);\n    return keys.filter((d) => regex.test(d));\n  };\n}\n\n\n//# sourceMappingURL=endsWith.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/endsWith.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/everything.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/everything.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"everything\": () => (/* binding */ everything)\n/* harmony export */ });\n/* harmony import */ var _helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/keysFromItems.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js\");\n\n\nfunction everything() {\n  return (items) => {\n    const keys = (0,_helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__.keysFromItems)(items);\n    return keys;\n  };\n}\n\n\n//# sourceMappingURL=everything.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/everything.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/matches.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/matches.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matches\": () => (/* binding */ matches)\n/* harmony export */ });\n/* harmony import */ var _helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/keysFromItems.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js\");\n\n\nfunction matches(regex) {\n  return (items) => {\n    const keys = (0,_helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__.keysFromItems)(items);\n    return keys.filter((d) => regex.test(d));\n  };\n}\n\n\n//# sourceMappingURL=matches.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/matches.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/negate.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/negate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"negate\": () => (/* binding */ negate)\n/* harmony export */ });\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\nfunction negate(selectors) {\n  return (items) => {\n    let keySet = new Set();\n    for (const selector of (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(selectors)) {\n      if (typeof selector === \"function\") {\n        const keys2 = selector(items);\n        for (const key of keys2) {\n          keySet.add(key);\n        }\n      } else {\n        keySet.add(selector);\n      }\n    }\n    const keys = Array.from(keySet).map((key) => `-${key}`);\n    return keys;\n  };\n}\n\n\n//# sourceMappingURL=negate.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/negate.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/numRange.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/numRange.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numRange\": () => (/* binding */ numRange)\n/* harmony export */ });\n/* harmony import */ var _helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/keysFromItems.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js\");\n\n\nfunction numRange(prefix, range, width) {\n  return (items) => {\n    const keys = (0,_helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__.keysFromItems)(items);\n    const matchKeys = [];\n    for (let i = range[0]; i <= range[1]; ++i) {\n      const num = width == null ? i : new String(\"00000000\" + i).slice(-width);\n      matchKeys.push(`${prefix}${num}`);\n    }\n    return keys.filter((d) => matchKeys.includes(d));\n  };\n}\n\n\n//# sourceMappingURL=numRange.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/numRange.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/selectors/startsWith.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/selectors/startsWith.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startsWith\": () => (/* binding */ startsWith)\n/* harmony export */ });\n/* harmony import */ var _helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/keysFromItems.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/keysFromItems.js\");\n\n\nfunction startsWith(prefix, ignoreCase = true) {\n  return (items) => {\n    const regex = new RegExp(`^${prefix}`, ignoreCase ? \"i\" : void 0);\n    const keys = (0,_helpers_keysFromItems_js__WEBPACK_IMPORTED_MODULE_0__.keysFromItems)(items);\n    return keys.filter((d) => regex.test(d));\n  };\n}\n\n\n//# sourceMappingURL=startsWith.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/selectors/startsWith.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/sequences/fullSeq.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/sequences/fullSeq.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fullSeq\": () => (/* binding */ fullSeq),\n/* harmony export */   \"fullSeqDate\": () => (/* binding */ fullSeqDate),\n/* harmony export */   \"fullSeqDateISOString\": () => (/* binding */ fullSeqDateISOString),\n/* harmony export */   \"vectorSeq\": () => (/* binding */ vectorSeq),\n/* harmony export */   \"vectorSeqDate\": () => (/* binding */ vectorSeqDate)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/extent.js\");\n\n\nfunction vectorSeq(values, period = 1) {\n  let [min, max] = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(values);\n  const sequence = [];\n  let value = min;\n  while (value <= max) {\n    sequence.push(value);\n    value += period;\n  }\n  return sequence;\n}\nfunction vectorSeqDate(values, granularity = \"day\", period = 1) {\n  let [min, max] = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(values);\n  const sequence = [];\n  let value = new Date(min);\n  while (value <= max) {\n    sequence.push(new Date(value));\n    if (granularity === \"second\" || granularity === \"s\" || granularity === \"seconds\") {\n      value.setUTCSeconds(value.getUTCSeconds() + 1 * period);\n    } else if (granularity === \"minute\" || granularity === \"min\" || granularity === \"minutes\") {\n      value.setUTCMinutes(value.getUTCMinutes() + 1 * period);\n    } else if (granularity === \"day\" || granularity === \"d\" || granularity === \"days\") {\n      value.setUTCDate(value.getUTCDate() + 1 * period);\n    } else if (granularity === \"week\" || granularity === \"w\" || granularity === \"weeks\") {\n      value.setUTCDate(value.getUTCDate() + 7 * period);\n    } else if (granularity === \"month\" || granularity === \"m\" || granularity === \"months\") {\n      value.setUTCMonth(value.getUTCMonth() + 1 * period);\n    } else if (granularity === \"year\" || granularity === \"y\" || granularity === \"years\") {\n      value.setUTCFullYear(value.getUTCFullYear() + 1 * period);\n    } else {\n      throw new Error(\"Invalid granularity for date sequence: \" + granularity);\n    }\n  }\n  return sequence;\n}\nfunction fullSeq(key, period) {\n  return function fullSeqInner(items) {\n    period = period != null ? period : 1;\n    const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n    return vectorSeq(items.map(keyFn), period);\n  };\n}\nfunction fullSeqDate(key, granularity, period) {\n  return function fullSeqDateInner(items) {\n    granularity = granularity != null ? granularity : \"day\";\n    period = period != null ? period : 1;\n    const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n    return vectorSeqDate(items.map(keyFn), granularity, period);\n  };\n}\nfunction fullSeqDateISOString(key, granularity, period) {\n  return function fullSeqDateISOStringInner(items) {\n    granularity = granularity != null ? granularity : \"day\";\n    period = period != null ? period : 1;\n    const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n    return vectorSeqDate(items.map((d) => new Date(keyFn(d))), granularity, period).map((date) => date.toISOString());\n  };\n}\n\n\n//# sourceMappingURL=fullSeq.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/sequences/fullSeq.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/slice.js":
/*!****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/slice.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice),\n/* harmony export */   \"sliceHead\": () => (/* binding */ sliceHead),\n/* harmony export */   \"sliceMax\": () => (/* binding */ sliceMax),\n/* harmony export */   \"sliceMin\": () => (/* binding */ sliceMin),\n/* harmony export */   \"sliceSample\": () => (/* binding */ sliceSample),\n/* harmony export */   \"sliceTail\": () => (/* binding */ sliceTail)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/shuffle.js\");\n/* harmony import */ var _arrange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrange.js */ \"./node_modules/@tidyjs/tidy/dist/es/arrange.js\");\n\n\n\nfunction slice(start, end) {\n  const _slice = (items) => items.slice(start, end);\n  return _slice;\n}\nconst sliceHead = (n) => slice(0, n);\nconst sliceTail = (n) => slice(-n);\nfunction sliceMin(n, orderBy) {\n  const _sliceMin = (items) => (0,_arrange_js__WEBPACK_IMPORTED_MODULE_0__.arrange)(orderBy)(items).slice(0, n);\n  return _sliceMin;\n}\nfunction sliceMax(n, orderBy) {\n  const _sliceMax = (items) => typeof orderBy === \"function\" ? (0,_arrange_js__WEBPACK_IMPORTED_MODULE_0__.arrange)(orderBy)(items).slice(-n).reverse() : (0,_arrange_js__WEBPACK_IMPORTED_MODULE_0__.arrange)((0,_arrange_js__WEBPACK_IMPORTED_MODULE_0__.desc)(orderBy))(items).slice(0, n);\n  return _sliceMax;\n}\nfunction sliceSample(n, options) {\n  options = options != null ? options : {};\n  const {replace} = options;\n  const _sliceSample = (items) => {\n    if (!items.length)\n      return items.slice();\n    if (replace) {\n      const sliced = [];\n      for (let i = 0; i < n; ++i) {\n        sliced.push(items[Math.floor(Math.random() * items.length)]);\n      }\n      return sliced;\n    }\n    return (0,d3_array__WEBPACK_IMPORTED_MODULE_1__.default)(items.slice()).slice(0, n);\n  };\n  return _sliceSample;\n}\n\n\n//# sourceMappingURL=slice.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/slice.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summarize.js":
/*!********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summarize.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"summarize\": () => (/* binding */ summarize),\n/* harmony export */   \"summarizeAll\": () => (/* binding */ summarizeAll),\n/* harmony export */   \"summarizeAt\": () => (/* binding */ summarizeAt),\n/* harmony export */   \"summarizeIf\": () => (/* binding */ summarizeIf)\n/* harmony export */ });\n/* harmony import */ var _helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/singleOrArray.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/singleOrArray.js\");\n\n\nfunction summarize(summarizeSpec, options) {\n  const _summarize = (items) => {\n    options = options != null ? options : {};\n    const summarized = {};\n    const keys = Object.keys(summarizeSpec);\n    for (const key of keys) {\n      summarized[key] = summarizeSpec[key](items);\n    }\n    if (options.rest && items.length) {\n      const objectKeys = Object.keys(items[0]);\n      for (const objKey of objectKeys) {\n        if (keys.includes(objKey)) {\n          continue;\n        }\n        summarized[objKey] = options.rest(objKey)(items);\n      }\n    }\n    return [summarized];\n  };\n  return _summarize;\n}\nfunction _summarizeHelper(items, summaryFn, predicateFn, keys) {\n  if (!items.length)\n    return [];\n  const summarized = {};\n  let keysArr;\n  if (keys == null) {\n    keysArr = Object.keys(items[0]);\n  } else {\n    keysArr = [];\n    for (const keyInput of (0,_helpers_singleOrArray_js__WEBPACK_IMPORTED_MODULE_0__.singleOrArray)(keys)) {\n      if (typeof keyInput === \"function\") {\n        keysArr.push(...keyInput(items));\n      } else {\n        keysArr.push(keyInput);\n      }\n    }\n  }\n  for (const key of keysArr) {\n    if (predicateFn) {\n      const vector = items.map((d) => d[key]);\n      if (!predicateFn(vector)) {\n        continue;\n      }\n    }\n    summarized[key] = summaryFn(key)(items);\n  }\n  return [summarized];\n}\nfunction summarizeAll(summaryFn) {\n  const _summarizeAll = (items) => _summarizeHelper(items, summaryFn);\n  return _summarizeAll;\n}\nfunction summarizeIf(predicateFn, summaryFn) {\n  const _summarizeIf = (items) => _summarizeHelper(items, summaryFn, predicateFn);\n  return _summarizeIf;\n}\nfunction summarizeAt(keys, summaryFn) {\n  const _summarizeAt = (items) => _summarizeHelper(items, summaryFn, void 0, keys);\n  return _summarizeAt;\n}\n\n\n//# sourceMappingURL=summarize.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summarize.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/deviation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/deviation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deviation\": () => (/* binding */ deviation)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/deviation.js\");\n\n\nfunction deviation(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(items, keyFn);\n}\n\n\n//# sourceMappingURL=deviation.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/deviation.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/first.js":
/*!************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/first.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"first\": () => (/* binding */ first)\n/* harmony export */ });\nfunction first(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => items.length ? keyFn(items[0]) : void 0;\n}\n\n\n//# sourceMappingURL=first.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/first.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/last.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/last.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"last\": () => (/* binding */ last)\n/* harmony export */ });\nfunction last(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => items.length ? keyFn(items[items.length - 1]) : void 0;\n}\n\n\n//# sourceMappingURL=last.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/last.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/max.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/max.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"max\": () => (/* binding */ max)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/max.js\");\n\n\nfunction max(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(items, keyFn);\n}\n\n\n//# sourceMappingURL=max.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/max.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/mean.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/mean.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mean\": () => (/* binding */ mean)\n/* harmony export */ });\n/* harmony import */ var _helpers_summation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/summation.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/summation.js\");\n\n\nfunction mean(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,_helpers_summation_js__WEBPACK_IMPORTED_MODULE_0__.mean)(items, keyFn);\n}\n\n\n//# sourceMappingURL=mean.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/mean.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/meanRate.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/meanRate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"meanRate\": () => (/* binding */ meanRate)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/fsum.js\");\n/* harmony import */ var _math_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/math.js */ \"./node_modules/@tidyjs/tidy/dist/es/math/math.js\");\n\n\n\nfunction meanRate(numerator, denominator) {\n  const numeratorFn = typeof numerator === \"function\" ? numerator : (d) => d[numerator];\n  const denominatorFn = typeof denominator === \"function\" ? denominator : (d) => d[denominator];\n  return (items) => {\n    const numerator2 = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__.fsum)(items, numeratorFn);\n    const denominator2 = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__.fsum)(items, denominatorFn);\n    return (0,_math_math_js__WEBPACK_IMPORTED_MODULE_0__.rate)(numerator2, denominator2);\n  };\n}\n\n\n//# sourceMappingURL=meanRate.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/meanRate.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/median.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/median.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"median\": () => (/* binding */ median)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/median.js\");\n\n\nfunction median(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(items, keyFn);\n}\n\n\n//# sourceMappingURL=median.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/median.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/min.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/min.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"min\": () => (/* binding */ min)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/min.js\");\n\n\nfunction min(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(items, keyFn);\n}\n\n\n//# sourceMappingURL=min.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/min.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/n.js":
/*!********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/n.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"n\": () => (/* binding */ n)\n/* harmony export */ });\nfunction n() {\n  return (items) => items.length;\n}\n\n\n//# sourceMappingURL=n.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/n.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/nDistinct.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/nDistinct.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nDistinct\": () => (/* binding */ nDistinct)\n/* harmony export */ });\nfunction nDistinct(key, options = {}) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => {\n    const uniques = new Map();\n    let count = 0;\n    for (const item of items) {\n      const value = keyFn(item);\n      if (!uniques.has(value)) {\n        if (!options.includeUndefined && value === void 0 || options.includeNull === false && value === null) {\n          continue;\n        }\n        count += 1;\n        uniques.set(value, true);\n      }\n    }\n    return count;\n  };\n}\n\n\n//# sourceMappingURL=nDistinct.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/nDistinct.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/sum.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/sum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/fsum.js\");\n\n\nfunction sum(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.fsum)(items, keyFn);\n}\n\n\n//# sourceMappingURL=sum.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/sum.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/summary/variance.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/summary/variance.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"variance\": () => (/* binding */ variance)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/variance.js\");\n\n\nfunction variance(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(items, keyFn);\n}\n\n\n//# sourceMappingURL=variance.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/summary/variance.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/tally.js":
/*!****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/tally.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tally\": () => (/* binding */ tally)\n/* harmony export */ });\n/* harmony import */ var _summarize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summarize.js */ \"./node_modules/@tidyjs/tidy/dist/es/summarize.js\");\n/* harmony import */ var _summary_n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary/n.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/n.js\");\n/* harmony import */ var _summary_sum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/sum.js */ \"./node_modules/@tidyjs/tidy/dist/es/summary/sum.js\");\n\n\n\n\nfunction tally(options) {\n  const _tally = (items) => {\n    const {name = \"n\", wt} = options != null ? options : {};\n    const summarized = (0,_summarize_js__WEBPACK_IMPORTED_MODULE_0__.summarize)({[name]: wt == null ? (0,_summary_n_js__WEBPACK_IMPORTED_MODULE_1__.n)() : (0,_summary_sum_js__WEBPACK_IMPORTED_MODULE_2__.sum)(wt)})(items);\n    return summarized;\n  };\n  return _tally;\n}\n\n\n//# sourceMappingURL=tally.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/tally.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/tidy.js":
/*!***************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/tidy.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tidy\": () => (/* binding */ tidy)\n/* harmony export */ });\nfunction tidy(items, ...fns) {\n  if (typeof items === \"function\") {\n    throw new Error(\"You must supply the data as the first argument to tidy()\");\n  }\n  let result = items;\n  for (const fn of fns) {\n    if (fn) {\n      result = fn(result);\n    }\n  }\n  return result;\n}\n\n\n//# sourceMappingURL=tidy.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/tidy.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/total.js":
/*!****************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/total.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"total\": () => (/* binding */ total),\n/* harmony export */   \"totalAll\": () => (/* binding */ totalAll),\n/* harmony export */   \"totalAt\": () => (/* binding */ totalAt),\n/* harmony export */   \"totalIf\": () => (/* binding */ totalIf)\n/* harmony export */ });\n/* harmony import */ var _mutate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mutate.js */ \"./node_modules/@tidyjs/tidy/dist/es/mutate.js\");\n/* harmony import */ var _summarize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summarize.js */ \"./node_modules/@tidyjs/tidy/dist/es/summarize.js\");\n\n\n\nfunction total(summarizeSpec, mutateSpec) {\n  const _total = (items) => {\n    const summarized = (0,_summarize_js__WEBPACK_IMPORTED_MODULE_1__.summarize)(summarizeSpec)(items);\n    const mutated = (0,_mutate_js__WEBPACK_IMPORTED_MODULE_0__.mutate)(mutateSpec)(summarized);\n    return [...items, ...mutated];\n  };\n  return _total;\n}\nfunction totalAll(summaryFn, mutateSpec) {\n  const _totalAll = (items) => {\n    const summarized = (0,_summarize_js__WEBPACK_IMPORTED_MODULE_1__.summarizeAll)(summaryFn)(items);\n    const mutated = (0,_mutate_js__WEBPACK_IMPORTED_MODULE_0__.mutate)(mutateSpec)(summarized);\n    return [...items, ...mutated];\n  };\n  return _totalAll;\n}\nfunction totalIf(predicateFn, summaryFn, mutateSpec) {\n  const _totalIf = (items) => {\n    const summarized = (0,_summarize_js__WEBPACK_IMPORTED_MODULE_1__.summarizeIf)(predicateFn, summaryFn)(items);\n    const mutated = (0,_mutate_js__WEBPACK_IMPORTED_MODULE_0__.mutate)(mutateSpec)(summarized);\n    return [...items, ...mutated];\n  };\n  return _totalIf;\n}\nfunction totalAt(keys, summaryFn, mutateSpec) {\n  const _totalAt = (items) => {\n    const summarized = (0,_summarize_js__WEBPACK_IMPORTED_MODULE_1__.summarizeAt)(keys, summaryFn)(items);\n    const mutated = (0,_mutate_js__WEBPACK_IMPORTED_MODULE_0__.mutate)(mutateSpec)(summarized);\n    return [...items, ...mutated];\n  };\n  return _totalAt;\n}\n\n\n//# sourceMappingURL=total.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/total.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/transmute.js":
/*!********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/transmute.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transmute\": () => (/* binding */ transmute)\n/* harmony export */ });\n/* harmony import */ var _mutate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mutate.js */ \"./node_modules/@tidyjs/tidy/dist/es/mutate.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ \"./node_modules/@tidyjs/tidy/dist/es/select.js\");\n\n\n\nfunction transmute(mutateSpec) {\n  const _transmute = (items) => {\n    const mutated = (0,_mutate_js__WEBPACK_IMPORTED_MODULE_0__.mutate)(mutateSpec)(items);\n    const picked = (0,_select_js__WEBPACK_IMPORTED_MODULE_1__.select)(Object.keys(mutateSpec))(mutated);\n    return picked;\n  };\n  return _transmute;\n}\n\n\n//# sourceMappingURL=transmute.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/transmute.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/vector/cumsum.js":
/*!************************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/vector/cumsum.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cumsum\": () => (/* binding */ cumsum)\n/* harmony export */ });\n/* harmony import */ var _helpers_summation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/summation.js */ \"./node_modules/@tidyjs/tidy/dist/es/helpers/summation.js\");\n\n\nfunction cumsum(key) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  return (items) => (0,_helpers_summation_js__WEBPACK_IMPORTED_MODULE_0__.fcumsum)(items, keyFn);\n}\n\n\n//# sourceMappingURL=cumsum.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/vector/cumsum.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/vector/lag.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/vector/lag.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lag\": () => (/* binding */ lag)\n/* harmony export */ });\nfunction lag(key, options) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  const {n = 1, default: defaultValue} = options != null ? options : {};\n  return (items) => {\n    return items.map((_, i) => {\n      const lagItem = items[i - n];\n      return lagItem == null ? defaultValue : keyFn(lagItem);\n    });\n  };\n}\n\n\n//# sourceMappingURL=lag.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/vector/lag.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/vector/lead.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/vector/lead.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lead\": () => (/* binding */ lead)\n/* harmony export */ });\nfunction lead(key, options) {\n  const keyFn = typeof key === \"function\" ? key : (d) => d[key];\n  const {n = 1, default: defaultValue} = options != null ? options : {};\n  return (items) => {\n    return items.map((_, i) => {\n      const leadItem = items[i + n];\n      return leadItem == null ? defaultValue : keyFn(leadItem);\n    });\n  };\n}\n\n\n//# sourceMappingURL=lead.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/vector/lead.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/vector/roll.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/vector/roll.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roll\": () => (/* binding */ roll)\n/* harmony export */ });\nfunction roll(width, rollFn, options) {\n  const {partial = false} = options != null ? options : {};\n  return (items) => {\n    return items.map((_, i) => {\n      const endIndex = i;\n      if (!partial && endIndex - width + 1 < 0) {\n        return void 0;\n      }\n      const startIndex = Math.max(0, endIndex - width + 1);\n      const itemsInWindow = items.slice(startIndex, endIndex + 1);\n      return rollFn(itemsInWindow, endIndex);\n    });\n  };\n}\n\n\n//# sourceMappingURL=roll.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/vector/roll.js?");

/***/ }),

/***/ "./node_modules/@tidyjs/tidy/dist/es/when.js":
/*!***************************************************!*\
  !*** ./node_modules/@tidyjs/tidy/dist/es/when.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"when\": () => (/* binding */ when)\n/* harmony export */ });\n/* harmony import */ var _tidy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tidy.js */ \"./node_modules/@tidyjs/tidy/dist/es/tidy.js\");\n\n\nfunction when(predicate, fns) {\n  const _when = (items) => {\n    if (typeof predicate === \"function\") {\n      if (!predicate(items))\n        return items;\n    } else if (!predicate) {\n      return items;\n    }\n    const results = (0,_tidy_js__WEBPACK_IMPORTED_MODULE_0__.tidy)(items, ...fns);\n    return results;\n  };\n  return _when;\n}\n\n\n//# sourceMappingURL=when.js.map\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/@tidyjs/tidy/dist/es/when.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/ascending.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deviation)\n/* harmony export */ });\n/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ \"./node_modules/d3-array/src/variance.js\");\n\n\nfunction deviation(values, valueof) {\n  const v = (0,_variance_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, valueof);\n  return v ? Math.sqrt(v) : v;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/deviation.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values, valueof) {\n  let min;\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  }\n  return [min, max];\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/extent.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/fsum.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/fsum.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Adder\": () => (/* binding */ Adder),\n/* harmony export */   \"fsum\": () => (/* binding */ fsum),\n/* harmony export */   \"fcumsum\": () => (/* binding */ fcumsum)\n/* harmony export */ });\n// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423\nclass Adder {\n  constructor() {\n    this._partials = new Float64Array(32);\n    this._n = 0;\n  }\n  add(x) {\n    const p = this._partials;\n    let i = 0;\n    for (let j = 0; j < this._n && j < 32; j++) {\n      const y = p[j],\n        hi = x + y,\n        lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);\n      if (lo) p[i++] = lo;\n      x = hi;\n    }\n    p[i] = x;\n    this._n = i + 1;\n    return this;\n  }\n  valueOf() {\n    const p = this._partials;\n    let n = this._n, x, y, lo, hi = 0;\n    if (n > 0) {\n      hi = p[--n];\n      while (n > 0) {\n        x = hi;\n        y = p[--n];\n        hi = x + y;\n        lo = y - (hi - x);\n        if (lo) break;\n      }\n      if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {\n        y = lo * 2;\n        x = hi + y;\n        if (y == x - hi) hi = x;\n      }\n    }\n    return hi;\n  }\n}\n\nfunction fsum(values, valueof) {\n  const adder = new Adder();\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value = +value) {\n        adder.add(value);\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if (value = +valueof(value, ++index, values)) {\n        adder.add(value);\n      }\n    }\n  }\n  return +adder;\n}\n\nfunction fcumsum(values, valueof) {\n  const adder = new Adder();\n  let index = -1;\n  return Float64Array.from(values, valueof === undefined\n      ? v => adder.add(+v || 0)\n      : v => adder.add(+valueof(v, ++index, values) || 0)\n  );\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/fsum.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/group.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/group.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ group),\n/* harmony export */   \"groups\": () => (/* binding */ groups),\n/* harmony export */   \"rollup\": () => (/* binding */ rollup),\n/* harmony export */   \"rollups\": () => (/* binding */ rollups),\n/* harmony export */   \"index\": () => (/* binding */ index),\n/* harmony export */   \"indexes\": () => (/* binding */ indexes)\n/* harmony export */ });\n/* harmony import */ var internmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! internmap */ \"./node_modules/internmap/src/index.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-array/src/identity.js\");\n\n\n\nfunction group(values, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, keys);\n}\n\nfunction groups(values, ...keys) {\n  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, keys);\n}\n\nfunction rollup(values, reduce, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, reduce, keys);\n}\n\nfunction rollups(values, reduce, ...keys) {\n  return nest(values, Array.from, reduce, keys);\n}\n\nfunction index(values, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, unique, keys);\n}\n\nfunction indexes(values, ...keys) {\n  return nest(values, Array.from, unique, keys);\n}\n\nfunction unique(values) {\n  if (values.length !== 1) throw new Error(\"duplicate key\");\n  return values[0];\n}\n\nfunction nest(values, map, reduce, keys) {\n  return (function regroup(values, i) {\n    if (i >= keys.length) return reduce(values);\n    const groups = new internmap__WEBPACK_IMPORTED_MODULE_1__.InternMap();\n    const keyof = keys[i++];\n    let index = -1;\n    for (const value of values) {\n      const key = keyof(value, ++index, values);\n      const group = groups.get(key);\n      if (group) group.push(value);\n      else groups.set(key, [value]);\n    }\n    for (const [key, values] of groups) {\n      groups.set(key, regroup(values, i));\n    }\n    return map(groups);\n  })(values, 0);\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/group.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return x;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ max)\n/* harmony export */ });\nfunction max(values, valueof) {\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value;\n      }\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/max.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values, valueof) {\n  return (0,_quantile_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, 0.5, valueof);\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/median.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ min)\n/* harmony export */ });\nfunction min(values, valueof) {\n  let min;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value;\n      }\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/min.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"numbers\": () => (/* binding */ numbers)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return x === null ? NaN : +x;\n}\n\nfunction* numbers(values, valueof) {\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quantile),\n/* harmony export */   \"quantileSorted\": () => (/* binding */ quantileSorted)\n/* harmony export */ });\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max.js */ \"./node_modules/d3-array/src/max.js\");\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickselect.js */ \"./node_modules/d3-array/src/quickselect.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-array/src/number.js\");\n\n\n\n\n\nfunction quantile(values, p, valueof) {\n  values = Float64Array.from((0,_number_js__WEBPACK_IMPORTED_MODULE_0__.numbers)(values, valueof));\n  if (!(n = values.length)) return;\n  if ((p = +p) <= 0 || n < 2) return (0,_min_js__WEBPACK_IMPORTED_MODULE_1__.default)(values);\n  if (p >= 1) return (0,_max_js__WEBPACK_IMPORTED_MODULE_2__.default)(values);\n  var n,\n      i = (n - 1) * p,\n      i0 = Math.floor(i),\n      value0 = (0,_max_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_quickselect_js__WEBPACK_IMPORTED_MODULE_3__.default)(values, i0).subarray(0, i0 + 1)),\n      value1 = (0,_min_js__WEBPACK_IMPORTED_MODULE_1__.default)(values.subarray(i0 + 1));\n  return value0 + (value1 - value0) * (i - i0);\n}\n\nfunction quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  if (!(n = values.length)) return;\n  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);\n  if (p >= 1) return +valueof(values[n - 1], n - 1, values);\n  var n,\n      i = (n - 1) * p,\n      i0 = Math.floor(i),\n      value0 = +valueof(values[i0], i0, values),\n      value1 = +valueof(values[i0 + 1], i0 + 1, values);\n  return value0 + (value1 - value0) * (i - i0);\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/quantile.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/quickselect.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-array/src/quickselect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quickselect)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\n// Based on https://github.com/mourner/quickselect\n// ISC license, Copyright 2018 Vladimir Agafonkin.\nfunction quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  while (right > left) {\n    if (right - left > 600) {\n      const n = right - left + 1;\n      const m = k - left + 1;\n      const z = Math.log(n);\n      const s = 0.5 * Math.exp(2 * z / 3);\n      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);\n      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));\n      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));\n      quickselect(array, k, newLeft, newRight, compare);\n    }\n\n    const t = array[k];\n    let i = left;\n    let j = right;\n\n    swap(array, left, k);\n    if (compare(array[right], t) > 0) swap(array, left, right);\n\n    while (i < j) {\n      swap(array, i, j), ++i, --j;\n      while (compare(array[i], t) < 0) ++i;\n      while (compare(array[j], t) > 0) --j;\n    }\n\n    if (compare(array[left], t) === 0) swap(array, left, j);\n    else ++j, swap(array, j, right);\n\n    if (j <= k) left = j + 1;\n    if (k <= j) right = j - 1;\n  }\n  return array;\n}\n\nfunction swap(array, i, j) {\n  const t = array[i];\n  array[i] = array[j];\n  array[j] = t;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/quickselect.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"shuffler\": () => (/* binding */ shuffler)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffler(Math.random));\n\nfunction shuffler(random) {\n  return function shuffle(array, i0 = 0, i1 = array.length) {\n    let m = i1 - (i0 = +i0);\n    while (m) {\n      const i = random() * m-- | 0, t = array[m + i0];\n      array[m + i0] = array[i + i0];\n      array[i + i0] = t;\n    }\n    return array;\n  };\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/shuffle.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ variance)\n/* harmony export */ });\nfunction variance(values, valueof) {\n  let count = 0;\n  let delta;\n  let mean = 0;\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        delta = value - mean;\n        mean += delta / ++count;\n        sum += delta * (value - mean);\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        delta = value - mean;\n        mean += delta / ++count;\n        sum += delta * (value - mean);\n      }\n    }\n  }\n  if (count > 1) return sum / (count - 1);\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/d3-array/src/variance.js?");

/***/ }),

/***/ "./node_modules/internmap/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/internmap/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InternMap\": () => (/* binding */ InternMap),\n/* harmony export */   \"InternSet\": () => (/* binding */ InternSet)\n/* harmony export */ });\nclass InternMap extends Map {\n  constructor(entries, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (entries != null) for (const [key, value] of entries) this.set(key, value);\n  }\n  get(key) {\n    return super.get(intern_get(this, key));\n  }\n  has(key) {\n    return super.has(intern_get(this, key));\n  }\n  set(key, value) {\n    return super.set(intern_set(this, key), value);\n  }\n  delete(key) {\n    return super.delete(intern_delete(this, key));\n  }\n}\n\nclass InternSet extends Set {\n  constructor(values, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (values != null) for (const value of values) this.add(value);\n  }\n  has(value) {\n    return super.has(intern_get(this, value));\n  }\n  add(value) {\n    return super.add(intern_set(this, value));\n  }\n  delete(value) {\n    return super.delete(intern_delete(this, value));\n  }\n}\n\nfunction intern_get({_intern, _key}, value) {\n  const key = _key(value);\n  return _intern.has(key) ? _intern.get(key) : value;\n}\n\nfunction intern_set({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) return _intern.get(key);\n  _intern.set(key, value);\n  return value;\n}\n\nfunction intern_delete({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) {\n    value = _intern.get(value);\n    _intern.delete(key);\n  }\n  return value;\n}\n\nfunction keyof(value) {\n  return value !== null && typeof value === \"object\" ? value.valueOf() : value;\n}\n\n\n//# sourceURL=webpack://formation-xol/./node_modules/internmap/src/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar tidy_1 = __webpack_require__(/*! @tidyjs/tidy */ \"./node_modules/@tidyjs/tidy/dist/es/index.js\");\r\nvar myfile_1 = __importDefault(__webpack_require__(/*! ./myfile */ \"./src/myfile.ts\"));\r\nvar data = [\r\n    { str: \"foo\", value: 3 },\r\n    { str: \"foo\", value: 3 },\r\n    { str: \"foo\", value: 1 },\r\n    { str: \"bar\", value: 3 },\r\n    { str: \"bar\", value: 1 },\r\n    { str: \"bar\", value: 1 },\r\n    { str: \"foo\", value: 3 },\r\n    { str: \"bar\", value: 7 },\r\n];\r\nvar res = tidy_1.tidy(data, tidy_1.distinct([\"str\", \"value\"]), tidy_1.filter(function (d) { return d.value <= 3; }), tidy_1.summarize({ summedValue: tidy_1.sum(\"value\") }));\r\nconsole.log(res);\r\nconsole.log(myfile_1.default);\r\n\n\n//# sourceURL=webpack://formation-xol/./src/index.ts?");

/***/ }),

/***/ "./src/myfile.ts":
/*!***********************!*\
  !*** ./src/myfile.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar CONSTANT = 11;\r\nexports.default = CONSTANT;\r\n\n\n//# sourceURL=webpack://formation-xol/./src/myfile.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;