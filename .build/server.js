/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "a07a049b4a0883f8a5c2"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotMainModule = true; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			hotMainModule = false;
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		Object.defineProperty(fn, "e", {
/******/ 			enumerable: true,
/******/ 			value: function(chunkId) {
/******/ 				if(hotStatus === "ready")
/******/ 					hotSetStatus("prepare");
/******/ 				hotChunksLoading++;
/******/ 				return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 					finishChunkLoading();
/******/ 					throw err;
/******/ 				});
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		});
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotMainModule,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotMainModule = true;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest().then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return Promise.resolve(outdatedModules);
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(23)(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routers = __webpack_require__("./client/App/routers.js");

var _routers2 = _interopRequireDefault(_routers);

var _Main = __webpack_require__("./client/container/Main/index.js");

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(_routers2.default, null)
  );
};

/***/ }),

/***/ "./client/App/routers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(6);

var _routes = __webpack_require__("./client/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _NotFound = __webpack_require__("./client/container/NotFound/index.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (props) {

  // helper to add props into component
  var renderMergedProps = function renderMergedProps(component) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var finalProps = Object.assign.apply(Object, [{}].concat(rest));
    return _react2.default.createElement(component, finalProps);
  };

  var PropsRoute = function PropsRoute(_ref) {
    var component = _ref.component,
        rest = _objectWithoutProperties(_ref, ['component']);

    return _react2.default.createElement(_reactRouter.Route, _extends({}, rest, { render: function render(routeProps) {
        return renderMergedProps(component, routeProps, rest);
      } }));
  };

  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _routes2.default.map(function (route, i) {
      return _react2.default.createElement(PropsRoute, _extends({ key: i }, route, props));
    }),
    _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
  );
};

/***/ }),

/***/ "./client/App/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(17);

var _reduxUniversal = __webpack_require__(21);

var _reduxUniversal2 = _interopRequireDefault(_reduxUniversal);

var _reduxLogger = __webpack_require__(18);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(20);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(19);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducers = __webpack_require__("./client/reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var middlewares = void 0;

if (false) {
  middlewares = [(0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default];
} else {
  middlewares = [(0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger2.default)()];
}

var createStoreWithMiddleWare = _reduxUniversal2.default.apply(undefined, _toConsumableArray(middlewares))(_redux.createStore);

exports.default = function (initialState) {
  var store = createStoreWithMiddleWare((0, _redux.combineReducers)(_reducers2.default), initialState);

  if (true) {
    module.hot.accept("./client/reducers.js", function () {
      var nextReducer = (0, _redux.combineReducers)(__webpack_require__("./client/reducers.js"));
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

/***/ }),

/***/ "./client/component/BlackBox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./client/component/BlackBox/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlackBox = function BlackBox(props) {
  return _react2.default.createElement(
    'div',
    { className: _style2.default.container, onMouseEnter: props.onMouseEnter ? props.onMouseEnter : null },
    props.children
  );
};

exports.default = BlackBox;

/***/ }),

/***/ "./client/component/BlackBox/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_container_df458a19 {\n  width: 50%;\n  padding: 10px;\n  background: black;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n  -ms-transform: translateY(50%);\n      transform: translateY(50%);\n  margin: auto;\n  text-align: center;\n  border-radius: 5px;\n  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);\n  -webkit-animation-name: style_slideUp_daffcee7;\n  animation-name: style_slideUp_daffcee7;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  transition: ease-out 1s; }\n  .style_container_df458a19 h2,\n  .style_container_df458a19 p {\n    color: #FFF; }\n\n@media (max-width: 767px) {\n  .style_container_df458a19 {\n    width: 95%; } }\n\n@-webkit-keyframes style_slideUp_daffcee7 {\n  from {\n    opacity: 0;\n    bottom: 0%;\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%); }\n  to {\n    opacity: 1;\n    bottom: 50%;\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%); } }\n\n@keyframes style_slideUp_daffcee7 {\n  from {\n    opacity: 0;\n    bottom: 0%;\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%); }\n  to {\n    opacity: 1;\n    bottom: 50%;\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%); } }\n", ""]);

// exports
exports.locals = {
	"container": "style_container_df458a19",
	"slideUp": "style_slideUp_daffcee7"
};

/***/ }),

/***/ "./client/component/Footer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./client/component/Footer/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    { className: _style2.default.footer },
    'Copyright \xA9 2017 ',
    _react2.default.createElement(
      'a',
      { href: 'https://thefirstpersoncode.com', target: '_blank' },
      'Nasser'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ "./client/component/Footer/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_footer_f2f94845 {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  padding: 10px 0;\n  text-align: center; }\n  .style_footer_f2f94845 a {\n    color: #FFF; }\n", ""]);

// exports
exports.locals = {
	"footer": "style_footer_f2f94845"
};

/***/ }),

/***/ "./client/component/Form/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./client/component/Form/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.form },
        _react2.default.createElement(
          'span',
          null,
          this.props.preview
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.props.handleSetHeader },
          _react2.default.createElement('input', { type: 'text', ref: 'textInput', placeholder: 'type ...', onChange: this.props.handlePreview }),
          _react2.default.createElement('input', { type: 'submit', value: 'submit' })
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

;

exports.default = Form;

/***/ }),

/***/ "./client/component/Form/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_form_d15b3462 input {\n  border: none;\n  border-radius: 5px;\n  margin: 5px 0; }\n  .style_form_d15b3462 input[type=\"text\"] {\n    width: 100%;\n    padding: 10px;\n    clear: both; }\n  .style_form_d15b3462 input[type=\"submit\"] {\n    background: #fff;\n    float: right;\n    padding: 10px 20px; }\n", ""]);

// exports
exports.locals = {
	"form": "style_form_d15b3462"
};

/***/ }),

/***/ "./client/component/Header/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _windowOrGlobal = __webpack_require__(4);

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

var _style = __webpack_require__("./client/component/Header/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      floatStyle: {
        transform: 'rotate(0)'
      }
    };
    _this.width = Math.max(_windowOrGlobal2.default.innerWidth);
    _this.floatStyle = _this.floatStyle.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.width > 1025) {
        _windowOrGlobal2.default.document.addEventListener("mousemove", this.floatStyle);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.width > 1025) {
        _windowOrGlobal2.default.document.removeEventListener("mousemove", this.floatStyle);
      }
    }
  }, {
    key: 'floatStyle',
    value: function floatStyle(e) {
      this.setState({
        floatStyle: {
          transform: 'rotate(' + (e.clientX - this.width / 2) / 50 + 'deg)'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var randomStyled = function randomStyled() {
        var r = Math.floor(Math.random() * 201) - 80;
        return {
          transition: Math.max(_windowOrGlobal2.default.innerWidth) > 1025 ? 'ease-out 15s' : 'linear .5s',
          transform: 'translate(' + r * 2 + 'px, ' + r * 2 + 'px) rotate(' + r * 2 + 'deg)'
        };
      };

      var mapHeader = this.props.smallHeader.map(function (index, i) {
        return _react2.default.createElement(
          'span',
          {
            style: randomStyled(),
            key: i },
          index.data
        );
      });

      return _react2.default.createElement(
        'div',
        { className: _style2.default.header },
        _react2.default.createElement(
          'h1',
          null,
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.floatContainer, style: this.state.floatStyle },
          _react2.default.createElement(
            'span',
            { style: randomStyled(), className: _style2.default.latest },
            this.props.latestHeader
          ),
          mapHeader
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

;

exports.default = Header;

/***/ }),

/***/ "./client/component/Header/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_header_e0cf661e {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n  -webkit-animation-name: style_slideDown_d77bf7b3;\n  animation-name: style_slideDown_d77bf7b3;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n  .style_header_e0cf661e h1 {\n    position: relative;\n    font-size: 30px;\n    margin: 10px 0;\n    z-index: 100; }\n  .style_header_e0cf661e span {\n    padding: 10px;\n    font-size: 12px;\n    background: #eee;\n    border-radius: 3px;\n    margin: 5px;\n    display: inline-block; }\n\n.style_floatContainer_67ebe5a6 {\n  position: relative;\n  transition: ease-out .5s; }\n\n@-webkit-keyframes style_slideDown_d77bf7b3 {\n  from {\n    opacity: 0;\n    top: -10%;\n    -webkit-transform: translateY(-10%);\n    transform: translateY(-10%); }\n  to {\n    opacity: 1;\n    top: 0;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes style_slideDown_d77bf7b3 {\n  from {\n    opacity: 0;\n    top: -10%;\n    -webkit-transform: translateY(-10%);\n    transform: translateY(-10%); }\n  to {\n    opacity: 1;\n    top: 0;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@media (max-width: 767px) {\n  .style_header_e0cf661e h1 {\n    font-size: 18px; }\n  .style_header_e0cf661e span {\n    font-size: 10px;\n    opacity: .7; } }\n\n.style_latest_f342dc90 {\n  background: yellow !important; }\n", ""]);

// exports
exports.locals = {
	"header": "style_header_e0cf661e",
	"slideDown": "style_slideDown_d77bf7b3",
	"floatContainer": "style_floatContainer_67ebe5a6",
	"latest": "style_latest_f342dc90"
};

/***/ }),

/***/ "./client/component/Nav/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _style = __webpack_require__("./client/component/Nav/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(props) {
  return _react2.default.createElement(
    'nav',
    { className: _style2.default.nav },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/universal/index.html' },
          'home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/universal/sample.html' },
          'sample'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/universal/about.html' },
          'about'
        )
      )
    )
  );
};

exports.default = Nav;

/***/ }),

/***/ "./client/component/Nav/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_nav_e63b9c1e {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  bottom: 40px;\n  width: 100%; }\n  .style_nav_e63b9c1e ul {\n    padding-left: 0; }\n  .style_nav_e63b9c1e li {\n    display: inline-block;\n    margin: 5px; }\n  .style_nav_e63b9c1e a {\n    padding: 10px;\n    display: inline-block;\n    background: #eee;\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); }\n    .style_nav_e63b9c1e a:hover {\n      background: none;\n      color: #111; }\n", ""]);

// exports
exports.locals = {
	"nav": "style_nav_e63b9c1e"
};

/***/ }),

/***/ "./client/container/About/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(2);

var _windowOrGlobal = __webpack_require__(4);

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

var _BlackBox = __webpack_require__("./client/component/BlackBox/index.js");

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__("./client/container/About/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

    _this.state = {
      floatStyle: {
        transform: 'translateX(0) translateY(0) rotate(0)'
      }
    };
    _this.width = Math.max(_windowOrGlobal2.default.innerWidth);
    _this.height = Math.max(_windowOrGlobal2.default.innerHeight);
    _this.floatBox = _this.floatBox.bind(_this);
    return _this;
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.width > 1025) {
        _windowOrGlobal2.default.document.addEventListener("mousemove", this.floatBox);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.width > 1025) {
        _windowOrGlobal2.default.document.removeEventListener("mousemove", this.floatBox);
      }
    }
  }, {
    key: 'floatBox',
    value: function floatBox(e) {
      this.setState({
        floatStyle: {
          transform: 'translateX(' + (e.clientX - this.width / 2) + 'px) translateY(' + (e.clientY - this.height / 2) + 'px) rotate(' + (e.clientX - this.width / 2) + 'deg)'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement('meta', { name: 'description', content: 'About Universal ReactJS Starter' }),
          _react2.default.createElement(
            'title',
            null,
            'About'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.floatBox, style: this.state.floatStyle },
          _react2.default.createElement(
            _BlackBox2.default,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Isomorphic Javascript App'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Copyright \xA9 2017 Nasser'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(About);

/***/ }),

/***/ "./client/container/About/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    default:
      return state;
  }
};

var _immutee = __webpack_require__(3);

var _immutee2 = _interopRequireDefault(_immutee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/***/ }),

/***/ "./client/container/About/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_bg_dc84fffa {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  box-shadow: inset 0 -100px 250px 50px rgba(0, 0, 0, 0.3);\n  background: red;\n  overflow: hidden; }\n\n.style_floatBox_0d878827 {\n  position: relative;\n  transition: ease-out 20s;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports
exports.locals = {
	"bg": "style_bg_dc84fffa",
	"floatBox": "style_floatBox_0d878827"
};

/***/ }),

/***/ "./client/container/Home/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _style = __webpack_require__("./client/container/Home/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Home'
          ),
          _react2.default.createElement('link', { rel: 'canonical', href: 'https://github.com/firstpersoncode/universal-react-starter' })
        ),
        '\\',
        _react2.default.createElement(
          'div',
          { className: _style2.default.header },
          _react2.default.createElement(
            'h1',
            null,
            'Universal ReactJS Starter'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Packed with'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://facebook.github.io/react', target: '_blank' },
                'React'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://redux.js.org/', target: '_blank' },
                'Redux'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://www.npmjs.com/package/redux-universal', target: '_blank' },
                'Redux Universal !'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://reacttraining.com/react-router', target: '_blank' },
                'React Router v4 !'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://expressjs.com/', target: '_blank' },
                'Express'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://mongoosejs.com/', target: '_blank' },
                'Mongoose'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://webpack.github.io/', target: '_blank' },
                'Webpack v2'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/diruuu/immutee', target: '_blank' },
                'Immutee'
              )
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { className: _style2.default.paragraph },
          'modular sass + plop generator + hot reload + server side rendering !',
          _react2.default.createElement('br', null),
          'Easy project structure, SEO friendly, fast performance, and easy maintain.'
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(Home);

/***/ }),

/***/ "./client/container/Home/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    default:
      return state;
  }
};

var _immutee = __webpack_require__(3);

var _immutee2 = _interopRequireDefault(_immutee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/***/ }),

/***/ "./client/container/Home/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_bg_b568b8f6 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  box-shadow: inset 0 -100px 250px 50px rgba(0, 0, 0, 0.3);\n  background: #FFF;\n  overflow: hidden; }\n\n.style_header_9e28b9ac {\n  min-height: 40vh;\n  padding: 15px;\n  background: #222;\n  -webkit-animation: style_slideDown_0c496f9c ease-out 1s 1;\n          animation: style_slideDown_0c496f9c ease-out 1s 1; }\n  .style_header_9e28b9ac h1, .style_header_9e28b9ac h4, .style_header_9e28b9ac ul {\n    color: #FFF;\n    text-align: center; }\n  .style_header_9e28b9ac ul {\n    padding-left: 0;\n    list-style: none; }\n    .style_header_9e28b9ac ul li {\n      display: inline-block; }\n      .style_header_9e28b9ac ul li a {\n        padding: 15px;\n        color: #a8ffff; }\n\n.style_paragraph_535bd731 {\n  text-align: center;\n  padding: 15px;\n  -webkit-animation: style_slideUp_c213c2bf ease-out 1s 1;\n          animation: style_slideUp_c213c2bf ease-out 1s 1; }\n\n@-webkit-keyframes style_slideDown_0c496f9c {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes style_slideDown_0c496f9c {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@-webkit-keyframes style_slideUp_c213c2bf {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes style_slideUp_c213c2bf {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n", ""]);

// exports
exports.locals = {
	"bg": "style_bg_b568b8f6",
	"header": "style_header_9e28b9ac",
	"slideDown": "style_slideDown_0c496f9c",
	"paragraph": "style_paragraph_535bd731",
	"slideUp": "style_slideUp_c213c2bf"
};

/***/ }),

/***/ "./client/container/Main/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultAction = defaultAction;
exports.checkViewport = checkViewport;

var _constants = __webpack_require__("./client/container/Main/constants.js");

function defaultAction() {
  return {
    type: _constants.DEFAULT_ACTION,
    loading: false,
    error: false
  };
}

function checkViewport(width) {
  if (width > 1200) {
    return {
      type: _constants.CHECK_VIEWPORT,
      isMobile: false
    };
  } else {
    return {
      type: _constants.CHECK_VIEWPORT,
      isMobile: true
    };
  }
}

/***/ }),

/***/ "./client/container/Main/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_ACTION = exports.DEFAULT_ACTION = 'main/DEFAULT_ACTION';
var CHECK_VIEWPORT = exports.CHECK_VIEWPORT = 'main/CHECK_VIEWPORT';

/***/ }),

/***/ "./client/container/Main/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _windowOrGlobal = __webpack_require__(4);

var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);

var _actions = __webpack_require__("./client/container/Main/actions.js");

var _style = __webpack_require__("./client/container/Main/style.scss");

var _style2 = _interopRequireDefault(_style);

var _Nav = __webpack_require__("./client/component/Nav/index.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = __webpack_require__("./client/component/Footer/index.js");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

    _this.state = {
      isMobile: false
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _actions.checkViewport)(Math.max(_windowOrGlobal2.default.innerWidth)));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ isMobile: nextProps.mainState.isMobile });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: _style2.default['Main'] },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          {
            defaultTitle: 'Universal ReactJS Starter',
            titleTemplate: this.state.isMobile ? "URS mobile - %s" : "URS - %s" },
          _react2.default.createElement('meta', { name: 'description', content: 'Universal ReactJS Starter' })
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/firstpersoncode/universal-react-starter' },
          _react2.default.createElement('img', { style: { position: 'fixed', top: '0', right: '0', border: '0' }, src: 'https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67', alt: 'Fork me on GitHub', 'data-canonical-src': 'https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png' })
        ),
        this.props.children,
        _react2.default.createElement(
          'small',
          { className: _style2.default.viewportStatus },
          this.props.mainState.isMobile ? "Mobile" : "Desktop"
        ),
        _react2.default.createElement(_Nav2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    mainState: store.mainState
  };
})(Main);

/***/ }),

/***/ "./client/container/Main/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {

    case _constants.DEFAULT_ACTION:
      return immutable.set('isLoading', action.loading).set('error', action.error).done();

    case _constants.CHECK_VIEWPORT:
      return immutable.set('isMobile', action.isMobile).done();

    default:
      return state;
  }
};

var _immutee = __webpack_require__(3);

var _immutee2 = _interopRequireDefault(_immutee);

var _constants = __webpack_require__("./client/container/Main/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  data: [],
  isLoading: true,
  error: null,
  isMobile: false
};

/***/ }),

/***/ "./client/container/Main/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_viewportStatus_0fbfbf3e {\n  font-style: italic;\n  position: absolute;\n  right: 15px;\n  bottom: 15px; }\n", ""]);

// exports
exports.locals = {
	"viewportStatus": "style_viewportStatus_0fbfbf3e"
};

/***/ }),

/***/ "./client/container/NotFound/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _BlackBox = __webpack_require__("./client/component/BlackBox/index.js");

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__("./client/container/NotFound/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Oops, page not found'
          )
        ),
        _react2.default.createElement(
          _BlackBox2.default,
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Page Not Found :('
          )
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {};
})(NotFound);

/***/ }),

/***/ "./client/container/NotFound/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    default:
      return state;
  }
};

var _immutee = __webpack_require__(3);

var _immutee2 = _interopRequireDefault(_immutee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/***/ }),

/***/ "./client/container/NotFound/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_bg_deb22ca2 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  box-shadow: inset 0 -100px 250px 50px rgba(0, 0, 0, 0.3);\n  background: #DDD;\n  overflow: hidden; }\n", ""]);

// exports
exports.locals = {
	"bg": "style_bg_deb22ca2"
};

/***/ }),

/***/ "./client/container/Sample/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHeader = setHeader;
exports.fetchHeaders = fetchHeaders;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__("./client/container/Sample/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setHeader(payload) {
  return function (dispatch) {
    return _axios2.default.post('http://localhost:50045/api/headers', payload).then(function (res) {
      dispatch({
        type: _constants.SET_HEADER,
        payload: payload.data
      });
    }).catch(function () {
      dispatch({
        type: _constants.SET_HEADER,
        payload: payload.data
      });
    });
  };
}

function fetchHeaders() {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:50045/api/headers').then(function (res) {
      dispatch({
        type: _constants.FETCH_HEADER,
        payload: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: _constants.SET_HEADER,
        payload: err.stack
      });
    });
  };
}

/***/ }),

/***/ "./client/container/Sample/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_HEADER = exports.SET_HEADER = 'sample/SET_HEADER';
var FETCH_HEADER = exports.FETCH_HEADER = 'sample/FETCH_HEADER';
var FETCH_HEADER_FAILURE = exports.FETCH_HEADER_FAILURE = 'sample/FETCH_HEADER_FAILURE';

/***/ }),

/***/ "./client/container/Sample/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _actions = __webpack_require__("./client/container/Sample/actions.js");

var _Header = __webpack_require__("./client/component/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _Form = __webpack_require__("./client/component/Form/index.js");

var _Form2 = _interopRequireDefault(_Form);

var _BlackBox = __webpack_require__("./client/component/BlackBox/index.js");

var _BlackBox2 = _interopRequireDefault(_BlackBox);

var _style = __webpack_require__("./client/container/Sample/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sample = function (_Component) {
  _inherits(Sample, _Component);

  function Sample() {
    _classCallCheck(this, Sample);

    var _this = _possibleConstructorReturn(this, (Sample.__proto__ || Object.getPrototypeOf(Sample)).call(this));

    _this.state = {
      preview: null
    };
    _this.handlePreview = _this.handlePreview.bind(_this);
    _this.handleSetHeader = _this.handleSetHeader.bind(_this);
    return _this;
  }

  _createClass(Sample, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // if (!this.props.smallHeader.length)
      //   this.props.dispatch(fetchHeaders())
    }
  }, {
    key: 'handlePreview',
    value: function handlePreview(e) {
      this.setState({ preview: e.target.value });
    }
  }, {
    key: 'handleSetHeader',
    value: function handleSetHeader(e) {
      e.preventDefault();
      var text = this.refs.form.refs.textInput;
      this.props.dispatch((0, _actions.setHeader)({ data: text.value }));
      text.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.bg },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('meta', { name: 'description', content: 'Universal ReactJS Starter Sample app' }),
          _react2.default.createElement(
            'title',
            null,
            'Sample App'
          )
        ),
        _react2.default.createElement(_Header2.default, { header: this.state.preview, smallHeader: this.props.smallHeader, latestHeader: this.props.header }),
        _react2.default.createElement(
          _BlackBox2.default,
          null,
          _react2.default.createElement(_Form2.default, {
            ref: 'form',
            handlePreview: this.handlePreview,
            handleSetHeader: this.handleSetHeader })
        )
      );
    }
  }]);

  return Sample;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    header: store.sampleState.header,
    smallHeader: store.sampleState.smallHeader
  };
})(Sample);

/***/ }),

/***/ "./client/container/Sample/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var immutable = (0, _immutee2.default)(state);
  switch (action.type) {
    case _constants.SET_HEADER:
      return immutable.set('header', action.payload).merge('smallHeader', [{ data: action.payload }]).done();

    case _constants.FETCH_HEADER:
      return immutable.merge('smallHeader', action.payload).done();

    case _constants.FETCH_HEADER_FAILURE:
      return immutable.set('error', action.payload).done();

    default:
      return state;
  }
};

var _immutee = __webpack_require__(3);

var _immutee2 = _interopRequireDefault(_immutee);

var _constants = __webpack_require__("./client/container/Sample/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  header: null,
  smallHeader: [],
  error: null
};

/***/ }),

/***/ "./client/container/Sample/style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".style_bg_d0ef1e42 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  box-shadow: inset 0 -100px 250px 50px rgba(0, 0, 0, 0.3);\n  background: #c4daff;\n  overflow: hidden; }\n", ""]);

// exports
exports.locals = {
	"bg": "style_bg_d0ef1e42"
};

/***/ }),

/***/ "./client/reducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = __webpack_require__("./client/container/Main/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__("./client/container/Home/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__("./client/container/Sample/reducer.js");

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__("./client/container/About/reducer.js");

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__("./client/container/NotFound/reducer.js");

var _reducer10 = _interopRequireDefault(_reducer9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mainState: _reducer2.default,
  homeState: _reducer4.default,
  sampleState: _reducer6.default,
  aboutState: _reducer8.default,
  notFoundState: _reducer10.default
};

/***/ }),

/***/ "./client/routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__("./client/container/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _Sample = __webpack_require__("./client/container/Sample/index.js");

var _Sample2 = _interopRequireDefault(_Sample);

var _About = __webpack_require__("./client/container/About/index.js");

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  path: '/universal/index.html',
  exact: true,
  component: _Home2.default
}, {
  path: '/universal/sample.html',
  exact: true,
  component: _Sample2.default
}, {
  path: '/universal/about.html',
  exact: true,
  component: _About2.default
}];

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});

	if(unacceptedModules.length > 0) {
		console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			console.warn("[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		console.log("[HMR] Nothing hot updated.");
	} else {
		console.log("[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			console.log("[HMR]  - " + moduleId);
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			console.log("[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var hotPollInterval = +(__resourceQuery.substr(1)) || (10 * 60 * 1000);

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if(module.hot.status() === "idle") {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					if(fromUpdate) console.log("[HMR] Update applied.");
					return;
				}
				__webpack_require__("./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
				checkForUpdate(true);
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					console.warn("[HMR] Cannot apply update.");
					console.warn("[HMR] " + err.stack || err.message);
					console.warn("[HMR] You need to restart the application!");
				} else {
					console.warn("[HMR] Update failed: " + err.stack || err.message);
				}
			});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, "?1000"))

/***/ }),

/***/ "./server/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(12);

var _fs2 = _interopRequireDefault(_fs);

var _nodeFsExtra = __webpack_require__(13);

var _nodeFsExtra2 = _interopRequireDefault(_nodeFsExtra);

var _path = __webpack_require__(14);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(9);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = __webpack_require__(10);

var _cors2 = _interopRequireDefault(_cors);

var _serveFavicon = __webpack_require__(22);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _db = __webpack_require__("./server/db/index.js");

var _db2 = _interopRequireDefault(_db);

var _index = __webpack_require__("./server/source/index.js");

var _index2 = _interopRequireDefault(_index);

var _headers = __webpack_require__("./server/source/headers.js");

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// connect database
(0, _db2.default)('mongodb://localhost/basicIsomorphic');

// config
var app = (0, _express2.default)();
app.use("*", (0, _cors2.default)());
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.resolve(process.cwd(), './public')));

if (false) {
  app.use((0, _serveFavicon2.default)(_path2.default.resolve(process.cwd(), './public/favicon.ico')));
  _nodeFsExtra2.default.copy(_path2.default.resolve(process.cwd(), './.build/bundle.js'), _path2.default.resolve(process.cwd(), './public/javascripts/bundle.js'));
  _nodeFsExtra2.default.copy(_path2.default.resolve(process.cwd(), './.build/style.css'), _path2.default.resolve(process.cwd(), './public/stylesheets/style.css'));
}

// API
app.get("/api/headers", _headers2.default.get);
app.post("/api/headers", _headers2.default.post);

// render view
app.get("*", _index2.default);

exports.default = app;

/***/ }),

/***/ "./server/db/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
// connect database
module.exports = function (db) {
  return mongoose.connect(db, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database');
    }
  });
};

/***/ }),

/***/ "./server/db/model/headersSchema.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
var headersSchema = mongoose.Schema({
  data: String
});
var Headers = mongoose.model('Headers', headersSchema);
module.exports = Headers;

/***/ }),

/***/ "./server/db/model/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Headers: __webpack_require__("./server/db/model/headersSchema.js")
};

/***/ }),

/***/ "./server/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__("./server/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentApp = _app2.default;
var PORT = 50045;

if (false) {
  _app2.default.listen(PORT, function () {
    console.log("server running on port " + PORT);
  });
} else {
  _app2.default.listen(PORT, function () {
    console.log("=================================================\n\n      **************************************************\n      server running on port " + PORT + "\n      happy coding ...\n      **************************************************\n\n    =================================================");
  });

  if (true) {
    module.hot.accept("./server/app.js", function () {
      _app2.default.removeListener("request", currentApp);
      _app2.default.on("request", _app2.default);
      currentApp = _app2.default;
    });
  }
}

/***/ }),

/***/ "./server/source/headers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _model = __webpack_require__("./server/db/model/index.js");

var getHeaders = function getHeaders(callback) {
	_model.Headers.find({}, callback);
};

var addHeaders = function addHeaders(header, callback) {
	var newHeaders = new _model.Headers(header);
	newHeaders.save().then(function (newHeaders) {
		callback(newHeaders);
	});
};

var get = function get(req, res, next) {
	getHeaders(function (err, headers) {
		if (err) {
			throw err;
		}
		res.json(headers);
	});
};

var post = function post(req, res, next) {
	var header = req.body;
	addHeaders(header, function (newHeaders) {
		res.json(newHeaders);
	});
};

exports.default = {
	get: get,
	post: post
};

/***/ }),

/***/ "./server/source/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _server = __webpack_require__(15);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _layout = __webpack_require__("./client/App/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _store = __webpack_require__("./client/App/store.js");

var _store2 = _interopRequireDefault(_store);

var _routers = __webpack_require__("./client/App/routers.js");

var _routers2 = _interopRequireDefault(_routers);

var _routes = __webpack_require__("./client/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {

  // grab route object from ../../client/routes that match with req.url
  var match = _routes2.default.reduce(function (acc, route) {
    return (0, _reactRouter.matchPath)(req.url, route, { exact: true }) || acc;
  }, null);

  var store = (0, _store2.default)();
  var context = {};
  var html = void 0;
  var body = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      {
        location: req.url,
        context: context },
      _react2.default.createElement(_layout2.default, null)
    )
  );

  if (true) {
    html = function html(_ref) {
      var body = _ref.body,
          head = _ref.head,
          initialState = _ref.initialState;

      return '<!DOCTYPE html>\n        <html lang="en">\n          <head>\n            <meta charset="utf-8">\n            <meta http-equiv="x-ua-compatible" content="ie=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + head.title.toString() + '\n            <link rel="stylesheet" href="http://localhost:50044/style.css" />\n            ' + head.meta.toString() + '\n            ' + head.link.toString() + '\n            ' + head.script.toString() + '\n          </head>\n          <body>\n            <div id="root">' + body + '</div>\n            <script>window.INITIAL_STATE = ' + JSON.stringify(initialState) + ';</script>\n            <script src="http://localhost:50044/bundle.js"></script>\n          </body>\n        </html>';
    };
  } else {
    html = function html(_ref2) {
      var body = _ref2.body,
          head = _ref2.head,
          initialState = _ref2.initialState;

      return '<!DOCTYPE html>\n        <html lang="en">\n          <head>\n            <meta charset="utf-8">\n            <meta http-equiv="x-ua-compatible" content="ie=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            ' + head.title.toString() + '\n            <link rel="stylesheet" href="stylesheets/style.css" />\n            ' + head.meta.toString() + '\n            ' + head.link.toString() + '\n            ' + head.script.toString() + '\n          </head>\n          <body>\n            <div id="root">' + body + '</div>\n            <script>window.INITIAL_STATE = ' + JSON.stringify(initialState) + ';</script>\n            <script src="javascripts/bundle.js"></script>\n          </body>\n        </html>';
    };
  }

  // Async initialState reducer and render the view
  store.renderUniversal(_server.renderToString, body).then(function (_ref3) {
    var output = _ref3.output;

    var state = store.getState();
    if (!match) {
      res.status(404).send(html({
        body: output,
        head: _reactHelmet2.default.rewind(),
        initialState: state
      }));
    } else {
      res.status(200).send(html({
        body: output,
        head: _reactHelmet2.default.rewind(),
        initialState: state
      }));
    }
  }).catch(function (_ref4) {
    var output = _ref4.output,
        error = _ref4.error;

    console.warn(error);
    res.status(500).send(html({
      body: error
    }));
  });
};

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("node-fs-extra");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("redux-universal");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack/hot/poll.js?1000");
module.exports = __webpack_require__("./server/index.js");


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("immutee");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("window-or-global");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ })

/******/ });