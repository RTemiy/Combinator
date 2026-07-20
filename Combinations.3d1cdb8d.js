// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7BLl3":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "93a3de0c3d1cdb8d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"doGT4":[function(require,module,exports,__globalThis) {
var _gameManagerJs = require("./gameManager.js");
// 1. Инициализируем игру, как только загрузится структура страницы
document.addEventListener('DOMContentLoaded', ()=>{
    (0, _gameManagerJs.initGame)();
});
// 2. Ждем первого клика/касания от пользователя, чтобы запустить музыку и саму игру.
// Это необходимо для обхода ограничений автозапуска аудио в браузерах.
document.body.addEventListener('pointerdown', (0, _gameManagerJs.startGameAndAudio), {
    once: true
});

},{"./gameManager.js":"CQNle"}],"CQNle":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startGameAndAudio", ()=>startGameAndAudio);
parcelHelpers.export(exports, "initGame", ()=>initGame);
parcelHelpers.export(exports, "saveGame", ()=>saveGame);
parcelHelpers.export(exports, "loadGame", ()=>loadGame);
parcelHelpers.export(exports, "startNewGame", ()=>startNewGame);
var _configJs = require("./config.js");
var _gameConfigJs = require("./data/gameConfig.js");
var _stateJs = require("./state.js");
var _domJs = require("./dom.js");
var _eventHandlersJs = require("./eventHandlers.js");
var _uiJs = require("./ui.js");
var _gameLogicJs = require("./gameLogic.js");
var _modalsJs = require("./modals.js");
var _assetUrlsJs = require("./data/assetUrls.js");
var _assetPreloaderJs = require("./assetPreloader.js");
// --- Game Version Check ---
(function checkVersion() {
    const storedVersion = localStorage.getItem((0, _gameConfigJs.CONFIG).VERSION_KEY);
    if (storedVersion !== (0, _gameConfigJs.CONFIG).GAME_VERSION) {
        console.warn(`Game version mismatch (was ${storedVersion}, now ${(0, _gameConfigJs.CONFIG).GAME_VERSION}). Resetting save.`);
        localStorage.removeItem((0, _gameConfigJs.CONFIG).SAVE_KEY);
        localStorage.removeItem((0, _gameConfigJs.CONFIG).LAST_LOGIN_KEY);
        localStorage.setItem((0, _gameConfigJs.CONFIG).VERSION_KEY, (0, _gameConfigJs.CONFIG).GAME_VERSION);
        window.location.reload();
    }
})();
// --- Inactivity Hint Logic ---
const HINT_INACTIVITY_DELAY = 8000; // 8 seconds
let inactivityTimer = null;
function showHint() {
    const pair = (0, _gameLogicJs.findMergeablePair)();
    if (pair) (0, _uiJs.highlightHintItems)(pair);
}
function resetInactivityTimer() {
    (0, _uiJs.removeHintHighlights)();
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showHint, HINT_INACTIVITY_DELAY);
}
function startGameAndAudio() {
    if ((0, _stateJs.gameSettings).musicVolume > 0 && (0, _domJs.DOMElements).bgMusic.paused) (0, _domJs.DOMElements).bgMusic.play().catch((e)=>{
        console.warn("Background music playback failed even after initial user interaction.", e);
    });
    (0, _domJs.DOMElements).startScreen.style.opacity = '0';
    setTimeout(()=>{
        (0, _domJs.DOMElements).startScreen.style.display = 'none';
    }, 500);
    // Запускаем постепенное кэширование всех игровых картинок в фоне
    (0, _assetPreloaderJs.precacheGameAssets)();
}
function initGame() {
    (0, _uiJs.createGrid)();
    const isNewPlayer = !localStorage.getItem((0, _gameConfigJs.CONFIG).SAVE_KEY);
    if (isNewPlayer) startNewGame();
    else loadGame();
    (0, _domJs.DOMElements).bgMusic.volume = (0, _stateJs.gameSettings).musicVolume;
    (0, _uiJs.applyTheme)();
    (0, _gameLogicJs.restoreGeneratorsEnergy)();
    (0, _gameLogicJs.checkOrdersAvailability)();
    (0, _uiJs.updateUI)();
    (0, _eventHandlersJs.addListeners)();
    // Показываем обучение для новых игроков или модал сюжета для вернувшихся
    if (!(0, _stateJs.playerProfile).hasSeenTutorial) (0, _modalsJs.openTutorialModal)();
    else if (!isNewPlayer) {
        if ((0, _stateJs.gameState).storyState.unlocked) {
            const activeStoryId = (0, _stateJs.gameState).storyState.activeStoryId;
            const hasActiveStory = activeStoryId && (0, _configJs.STORY_DATA)[activeStoryId];
            const progress = hasActiveStory ? (0, _stateJs.gameState).storyState.progress[activeStoryId] : null;
            if (hasActiveStory && progress && !progress.completed) (0, _modalsJs.openStoryModal)();
            else (0, _modalsJs.openStorySelectionModal)();
        }
    }
    // Reset inactivity timer on any user interaction on the screen
    document.body.addEventListener('pointerdown', resetInactivityTimer, true);
    resetInactivityTimer(); // Start the first timer
    setInterval(()=>{
        if (!document.hidden) (0, _stateJs.playerProfile).timePlayed += (0, _gameConfigJs.CONFIG).ENERGY_REGEN_INTERVAL;
        (0, _gameLogicJs.regenerateEnergy)();
        (0, _gameLogicJs.restoreGeneratorsEnergy)();
        (0, _domJs.DOMElements).energy.value.innerText = (0, _stateJs.gameState).energy;
        localStorage.setItem((0, _gameConfigJs.CONFIG).LAST_LOGIN_KEY, Date.now());
    }, (0, _gameConfigJs.CONFIG).ENERGY_REGEN_INTERVAL);
}
function saveGame() {
    const saveData = {
        gridData: (0, _stateJs.gameState).gridData,
        score: (0, _stateJs.gameState).score,
        coins: (0, _stateJs.gameState).coins,
        energy: (0, _stateJs.gameState).energy,
        orders: (0, _stateJs.gameState).orders,
        orderIdCounter: (0, _stateJs.gameState).orderIdCounter,
        rewardQueue: (0, _stateJs.gameState).rewardQueue,
        activeCategories: (0, _stateJs.gameState).activeCategories,
        newlyUnlockedCategories: (0, _stateJs.gameState).newlyUnlockedCategories,
        unlockedItemGenCategories: (0, _stateJs.gameState).unlockedItemGenCategories,
        lockedCategories: (0, _stateJs.gameState).lockedCategories,
        discoveredItems: (0, _stateJs.gameState).discoveredItems,
        claimedAchievements: (0, _stateJs.gameState).claimedAchievements,
        profile: (0, _stateJs.playerProfile),
        claimedCollectionBonuses: (0, _stateJs.gameState).claimedCollectionBonuses,
        storyState: (0, _stateJs.gameState).storyState,
        settings: (0, _stateJs.gameSettings),
        thresholds: (0, _gameConfigJs.UNLOCK_THRESHOLDS).map((t)=>({
                level: t.level,
                unlocked: t.unlocked
            }))
    };
    localStorage.setItem((0, _gameConfigJs.CONFIG).SAVE_KEY, JSON.stringify(saveData));
}
function loadGame() {
    try {
        const loaded = JSON.parse(localStorage.getItem((0, _gameConfigJs.CONFIG).SAVE_KEY));
        if (!loaded) {
            startNewGame();
            return;
        }
        const lastTime = parseInt(localStorage.getItem((0, _gameConfigJs.CONFIG).LAST_LOGIN_KEY)) || Date.now();
        const timePassed = Date.now() - lastTime;
        const energyToRestore = Math.floor(timePassed / (0, _gameConfigJs.CONFIG).OFFLINE_ENERGY_REGEN_RATE);
        (0, _stateJs.gameState).gridData = loaded.gridData;
        (0, _stateJs.gameState).score = loaded.score;
        (0, _stateJs.gameState).coins = loaded.coins || 0;
        (0, _stateJs.gameState).energy = loaded.energy || 0;
        (0, _stateJs.gameState).orders = loaded.orders;
        (0, _stateJs.gameState).orderIdCounter = loaded.orderIdCounter;
        (0, _stateJs.gameState).rewardQueue = loaded.rewardQueue || [];
        (0, _stateJs.gameState).activeCategories = loaded.activeCategories;
        (0, _stateJs.gameState).lockedCategories = loaded.lockedCategories;
        (0, _stateJs.gameState).newlyUnlockedCategories = loaded.newlyUnlockedCategories || [];
        (0, _stateJs.gameState).unlockedItemGenCategories = loaded.unlockedItemGenCategories || [];
        (0, _stateJs.gameState).discoveredItems = loaded.discoveredItems || {};
        (0, _stateJs.gameState).claimedAchievements = loaded.claimedAchievements || {};
        (0, _stateJs.gameState).claimedCollectionBonuses = loaded.claimedCollectionBonuses || {};
        (0, _stateJs.gameState).storyState = loaded.storyState || {
            unlocked: false,
            currentChapter: 1,
            currentStep: 0,
            completed: false
        };
        // Делаем сюжет доступным по умолчанию для старых сохранений, где он мог быть заблокирован
        if (!(0, _stateJs.gameState).storyState.unlocked) {
            (0, _stateJs.gameState).storyState.unlocked = true;
            (0, _uiJs.showToast)("\u0412\u0430\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0441\u044E\u0436\u0435\u0442\u043D\u0430\u044F \u0433\u043B\u0430\u0432\u0430!", "story");
        }
        const loadedSettings = loaded.settings || {};
        (0, _stateJs.gameSettings).musicVolume = loadedSettings.musicVolume !== undefined ? loadedSettings.musicVolume : 0.2;
        (0, _stateJs.gameSettings).sfxVolume = loadedSettings.sfxVolume !== undefined ? loadedSettings.sfxVolume : 0.5;
        (0, _stateJs.gameSettings).theme = loadedSettings.theme || 'light';
        const loadedProfile = loaded.profile || {};
        (0, _stateJs.playerProfile).icon = loadedProfile.icon || (0, _assetUrlsJs.profileIconUrl).href;
        (0, _stateJs.playerProfile).startDate = loadedProfile.startDate || Date.now();
        (0, _stateJs.playerProfile).timePlayed = loadedProfile.timePlayed || 0;
        (0, _stateJs.playerProfile).totalMerges = loadedProfile.totalMerges || 0;
        (0, _stateJs.playerProfile).totalOrdersCompleted = loadedProfile.totalOrdersCompleted || 0;
        (0, _stateJs.playerProfile).totalCoinsEarned = loadedProfile.totalCoinsEarned || 0;
        (0, _stateJs.playerProfile).totalEnergySpent = loadedProfile.totalEnergySpent || 0;
        (0, _stateJs.playerProfile).mergeCounts = loadedProfile.mergeCounts || {};
        // Для старых сохранений считаем, что обучение пройдено
        // Изменено: теперь для старых сохранений обучение будет показано один раз.
        if (loadedProfile.hasSeenTutorial === undefined) (0, _stateJs.playerProfile).hasSeenTutorial = false;
        else (0, _stateJs.playerProfile).hasSeenTutorial = loadedProfile.hasSeenTutorial;
        if (energyToRestore > 0) {
            (0, _stateJs.gameState).energy = Math.min((0, _gameConfigJs.CONFIG).MAX_ENERGY, (0, _stateJs.gameState).energy + energyToRestore);
            (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="toast-icon" alt=""> \u{412}\u{44B} \u{43E}\u{442}\u{441}\u{443}\u{442}\u{441}\u{442}\u{432}\u{43E}\u{432}\u{430}\u{43B}\u{438}. \u{412}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{43B}\u{435}\u{43D}\u{43E} ${energyToRestore <= 100 ? energyToRestore : 100} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438}!`, "success");
        }
        if (loaded.thresholds) // Безопасная загрузка по уровню, а не по индексу, для совместимости со старыми сохранениями
        loaded.thresholds.forEach((savedThreshold)=>{
            const gameThreshold = (0, _gameConfigJs.UNLOCK_THRESHOLDS).find((t)=>t.level === savedThreshold.level);
            if (gameThreshold) gameThreshold.unlocked = savedThreshold.unlocked;
        });
    } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0447\u0442\u0435\u043D\u0438\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u043D\u0430\u0447\u0430\u0442\u0430 \u043D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430", e);
        startNewGame();
    }
}
function startNewGame() {
    (0, _stateJs.gameState).gridData = Array((0, _gameConfigJs.CONFIG).GRID_COLS * (0, _gameConfigJs.CONFIG).GRID_ROWS).fill(null);
    (0, _stateJs.gameState).score = 0;
    (0, _stateJs.gameState).coins = 0;
    (0, _stateJs.gameState).energy = (0, _gameConfigJs.CONFIG).MAX_ENERGY;
    // Сбрасываем прогресс уровней, оставляя разблокированным только 1-й уровень
    (0, _gameConfigJs.UNLOCK_THRESHOLDS).forEach((t)=>t.unlocked = t.level === 1);
    (0, _stateJs.gameState).rewardQueue = [];
    (0, _stateJs.gameState).newlyUnlockedCategories = [];
    (0, _stateJs.gameState).unlockedItemGenCategories = [];
    (0, _stateJs.gameState).discoveredItems = {};
    (0, _stateJs.gameState).claimedAchievements = {};
    (0, _stateJs.gameState).claimedCollectionBonuses = {};
    (0, _stateJs.gameState).storyState = {
        unlocked: true,
        activeStoryId: null,
        progress: {}
    };
    // Reset settings
    (0, _stateJs.gameSettings).musicVolume = 0.2;
    (0, _stateJs.gameSettings).sfxVolume = 0.5;
    (0, _stateJs.gameSettings).theme = 'light';
    (0, _domJs.DOMElements).bgMusic.volume = (0, _stateJs.gameSettings).musicVolume;
    // Сброс профиля
    (0, _stateJs.playerProfile).name = "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F";
    (0, _stateJs.playerProfile).icon = (0, _assetUrlsJs.profileIconUrl).href;
    (0, _stateJs.playerProfile).startDate = Date.now();
    (0, _stateJs.playerProfile).timePlayed = 0;
    (0, _stateJs.playerProfile).totalMerges = 0;
    (0, _stateJs.playerProfile).totalOrdersCompleted = 0;
    (0, _stateJs.playerProfile).totalCoinsEarned = 0;
    (0, _stateJs.playerProfile).totalEnergySpent = 0;
    (0, _stateJs.playerProfile).mergeCounts = {};
    (0, _stateJs.playerProfile).hasSeenTutorial = false;
    const allGeneratorKeys = Object.keys((0, _configJs.GENERATORS_DATA)).filter((k)=>k !== 'bonus_chest' && !(0, _configJs.GENERATORS_DATA)[k].isStoryOnly);
    const startingGenerators = [];
    const activeCategoriesSet = new Set();
    // Выбираем N уникальных случайных генераторов
    const shuffledGenKeys = [
        ...allGeneratorKeys
    ].sort(()=>0.5 - Math.random());
    const startingGenKeys = shuffledGenKeys.slice(0, (0, _gameConfigJs.CONFIG).STARTING_GENERATORS_COUNT);
    startingGenKeys.forEach((genKey)=>{
        startingGenerators.push({
            isGenerator: true,
            generatorKey: genKey,
            genLevel: 1,
            genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[1].max,
            lastRegenTime: Date.now()
        });
        (0, _gameLogicJs.markItemAsDiscovered)(genKey, 1);
        (0, _configJs.GENERATORS_DATA)[genKey].categories.forEach((cat)=>activeCategoriesSet.add(cat));
    });
    (0, _stateJs.gameState).activeCategories = Array.from(activeCategoriesSet);
    (0, _stateJs.gameState).lockedCategories = Object.keys((0, _configJs.CATEGORIES_CONFIG)).filter((cat)=>{
        const genKey = (0, _configJs.CATEGORIES_CONFIG)[cat].generatorKey;
        const isStoryGenerator = genKey && (0, _configJs.GENERATORS_DATA)[genKey] && (0, _configJs.GENERATORS_DATA)[genKey].isStoryOnly;
        return !(0, _stateJs.gameState).activeCategories.includes(cat) && !(0, _configJs.CATEGORIES_CONFIG)[cat].isItemGenerated && !isStoryGenerator;
    });
    (0, _gameLogicJs.shuffleArray)((0, _stateJs.gameState).lockedCategories);
    let availableIndices = Array.from({
        length: (0, _gameConfigJs.CONFIG).GRID_COLS * (0, _gameConfigJs.CONFIG).GRID_ROWS
    }, (_, i)=>i);
    // --- Новая логика генерации заблокированных предметов ---
    const blockedItemsToGenerate = [];
    const totalBlockedItems = (0, _gameConfigJs.CONFIG).BLOCKED_ITEMS_AT_START;
    const activeCategoryBlockedCount = Math.round(totalBlockedItems * (0, _gameConfigJs.CONFIG).BLOCKED_UNLOCKED_CATEGORY_ITEMS_AT_START);
    const lockedCategoryBlockedCount = totalBlockedItems - activeCategoryBlockedCount;
    // Фильтруем категории, которые могут быть сгенерированы (не являются результатом крафта другого предмета)
    const activeSpawnableCategories = (0, _stateJs.gameState).activeCategories.filter((cat)=>!(0, _configJs.CATEGORIES_CONFIG)[cat].isItemGenerated);
    const lockedSpawnableCategories = (0, _stateJs.gameState).lockedCategories.filter((cat)=>!(0, _configJs.CATEGORIES_CONFIG)[cat].isItemGenerated);
    // Функция для генерации случайного уровня от 3 до предпоследнего (6)
    const getRandomBlockedLevel = ()=>Math.floor(Math.random() * ((0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL - 3)) + 3;
    // Генерируем предметы из активных категорий
    for(let i = 0; i < activeCategoryBlockedCount; i++)if (activeSpawnableCategories.length > 0) {
        const randomCat = activeSpawnableCategories[Math.floor(Math.random() * activeSpawnableCategories.length)];
        blockedItemsToGenerate.push({
            category: randomCat,
            level: getRandomBlockedLevel(),
            isBlocked: true
        });
    }
    // Генерируем предметы из заблокированных категорий
    for(let i = 0; i < lockedCategoryBlockedCount; i++)if (lockedSpawnableCategories.length > 0) {
        const randomCat = lockedSpawnableCategories[Math.floor(Math.random() * lockedSpawnableCategories.length)];
        blockedItemsToGenerate.push({
            category: randomCat,
            level: getRandomBlockedLevel(),
            isBlocked: true
        });
    }
    // Перемешиваем и размещаем на поле
    (0, _gameLogicJs.shuffleArray)(blockedItemsToGenerate);
    blockedItemsToGenerate.forEach((item)=>{
        if (availableIndices.length > 5) {
            const randIdx = Math.floor(Math.random() * availableIndices.length);
            const cellIndex = availableIndices.splice(randIdx, 1)[0];
            (0, _stateJs.gameState).gridData[cellIndex] = item;
        }
    });
    // Размещаем стартовые генераторы
    startingGenerators.forEach((gen)=>{
        if (availableIndices.length > 0) {
            const randIdx = Math.floor(Math.random() * availableIndices.length);
            const cellIndex = availableIndices.splice(randIdx, 1)[0];
            (0, _stateJs.gameState).gridData[cellIndex] = gen;
        }
    });
    for(let i = 0; i < (0, _gameConfigJs.CONFIG).STARTING_ITEMS_COUNT; i++){
        let emptyCells = (0, _gameLogicJs.getEmptyGridCells)();
        if (emptyCells.length > 0) {
            let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            (0, _stateJs.gameState).gridData[randomCell] = {
                category: (0, _stateJs.gameState).activeCategories[i % (0, _stateJs.gameState).activeCategories.length],
                level: 1
            };
            (0, _gameLogicJs.markItemAsDiscovered)((0, _stateJs.gameState).activeCategories[i % (0, _stateJs.gameState).activeCategories.length], 1);
        }
    }
    (0, _stateJs.gameState).orders = [];
    for(let i = 0; i < (0, _gameConfigJs.CONFIG).MAX_ORDERS; i++)(0, _gameLogicJs.generateOrder)();
    saveGame();
}

},{"./config.js":"itWAF","./data/gameConfig.js":"5Gyni","./state.js":"9b3Vp","./dom.js":"iyifM","./eventHandlers.js":"5tF51","./ui.js":"3OQ5l","./gameLogic.js":"6oSsV","./modals.js":"6Bu0H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./data/assetUrls.js":"4MPQh","./assetPreloader.js":"8s0KB"}],"itWAF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _achievementsJs = require("./data/achievements.js");
parcelHelpers.exportAll(_achievementsJs, exports);
var _charactersJs = require("./data/characters.js");
parcelHelpers.exportAll(_charactersJs, exports);
var _gameConfigJs = require("./data/gameConfig.js");
parcelHelpers.exportAll(_gameConfigJs, exports);
var _generatorsJs = require("./data/generators.js");
parcelHelpers.exportAll(_generatorsJs, exports);
var _itemsJs = require("./data/items.js");
parcelHelpers.exportAll(_itemsJs, exports);
var _storyJs = require("./data/story.js");
parcelHelpers.exportAll(_storyJs, exports);

},{"./data/achievements.js":"2Jrxe","./data/characters.js":"j2S6s","./data/gameConfig.js":"5Gyni","./data/generators.js":"9D7J7","./data/items.js":"k7E33","./data/story.js":"5TqtG","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Jrxe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ACHIEVEMENTS_DATA", ()=>ACHIEVEMENTS_DATA);
var _assetUrlsJs = require("./assetUrls.js");
const ACHIEVEMENTS_DATA = {
    totalMerges: {
        id: 'totalMerges',
        name: "\u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0439",
        desc: "\u0421\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u0438\u044F\u043D\u0438\u0439.",
        icon: (0, _assetUrlsJs.mergeAchievementIconUrl),
        tiers: [
            {
                goal: 50,
                reward: 75
            },
            {
                goal: 250,
                reward: 250
            },
            {
                goal: 1000,
                reward: 500
            },
            {
                goal: 5000,
                reward: 1000
            }
        ]
    },
    totalOrdersCompleted: {
        id: 'totalOrdersCompleted',
        name: "\u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",
        desc: "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432.",
        icon: (0, _assetUrlsJs.orderAchievementIconUrl),
        tiers: [
            {
                goal: 10,
                reward: 50
            },
            {
                goal: 50,
                reward: 300
            },
            {
                goal: 100,
                reward: 600
            },
            {
                goal: 250,
                reward: 1200
            }
        ]
    },
    totalCoinsEarned: {
        id: 'totalCoinsEarned',
        name: "\u0411\u043E\u0433\u0430\u0447",
        desc: "\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u043E\u043D\u0435\u0442 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F.",
        icon: (0, _assetUrlsJs.coinsAchievementIconUrl),
        tiers: [
            {
                goal: 1000,
                reward: 100
            },
            {
                goal: 5000,
                reward: 250
            },
            {
                goal: 20000,
                reward: 500
            },
            {
                goal: 100000,
                reward: 1000
            }
        ]
    },
    totalEnergySpent: {
        id: 'totalEnergySpent',
        name: "\u042D\u043D\u0435\u0440\u0434\u0436\u0430\u0439\u0437\u0435\u0440",
        desc: "\u041F\u043E\u0442\u0440\u0430\u0442\u044C\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438.",
        icon: (0, _assetUrlsJs.energyAchievementIconUrl),
        tiers: [
            {
                goal: 500,
                reward: 50
            },
            {
                goal: 2000,
                reward: 150
            },
            {
                goal: 10000,
                reward: 400
            },
            {
                goal: 50000,
                reward: 800
            }
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./assetUrls.js":"4MPQh"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4MPQh":[function(require,module,exports,__globalThis) {
// This file centralizes asset URLs to make them compatible with Parcel's bundling.
// By using `new URL(...)`, we tell Parcel to include these assets in the build
// and provide us with the final, correct path.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "coinIconUrl", ()=>coinIconUrl);
parcelHelpers.export(exports, "energyIconUrl", ()=>energyIconUrl);
parcelHelpers.export(exports, "upgradePartIconUrl", ()=>upgradePartIconUrl);
parcelHelpers.export(exports, "magicToolIconUrl", ()=>magicToolIconUrl);
parcelHelpers.export(exports, "copyBubbleIconUrl", ()=>copyBubbleIconUrl);
parcelHelpers.export(exports, "boxIconUrl", ()=>boxIconUrl);
parcelHelpers.export(exports, "checkmarkIconUrl", ()=>checkmarkIconUrl);
parcelHelpers.export(exports, "lockIconUrl", ()=>lockIconUrl);
parcelHelpers.export(exports, "achievementsIconUrl", ()=>achievementsIconUrl);
parcelHelpers.export(exports, "chainIconUrl", ()=>chainIconUrl);
parcelHelpers.export(exports, "storyScrollIconUrl", ()=>storyScrollIconUrl);
parcelHelpers.export(exports, "questionIconUrl", ()=>questionIconUrl);
parcelHelpers.export(exports, "warningIconUrl", ()=>warningIconUrl);
parcelHelpers.export(exports, "blockIconUrl", ()=>blockIconUrl);
parcelHelpers.export(exports, "bonusChestLvl1IconUrl", ()=>bonusChestLvl1IconUrl);
parcelHelpers.export(exports, "levelIconUrl", ()=>levelIconUrl);
parcelHelpers.export(exports, "profileIconUrl", ()=>profileIconUrl);
parcelHelpers.export(exports, "starIconUrl", ()=>starIconUrl);
parcelHelpers.export(exports, "mergeAchievementIconUrl", ()=>mergeAchievementIconUrl);
parcelHelpers.export(exports, "orderAchievementIconUrl", ()=>orderAchievementIconUrl);
parcelHelpers.export(exports, "coinsAchievementIconUrl", ()=>coinsAchievementIconUrl);
parcelHelpers.export(exports, "energyAchievementIconUrl", ()=>energyAchievementIconUrl);
const coinIconUrl = new URL(require("212dbb8d446341a0"));
const energyIconUrl = new URL(require("6925787bf5fe2cf"));
const upgradePartIconUrl = new URL(require("efa4998ec850919c"));
const magicToolIconUrl = new URL(require("4f952aa9104fd2a2"));
const copyBubbleIconUrl = new URL(require("a24833c87909bad4"));
const boxIconUrl = new URL(require("b0ef20676c9e41f0"));
const checkmarkIconUrl = new URL(require("585fe5255b23fdeb"));
const lockIconUrl = new URL(require("a026d5df313ce930"));
const achievementsIconUrl = new URL(require("ba785e0fab8c45fd"));
const chainIconUrl = new URL(require("77199fd44154371c"));
const storyScrollIconUrl = new URL(require("e9f21387644e413f"));
const questionIconUrl = new URL(require("f8f4bf79b5515d24"));
const warningIconUrl = new URL(require("dad7f35a8ea52254"));
const blockIconUrl = new URL(require("9eeab77a064239ab"));
const bonusChestLvl1IconUrl = new URL(require("7c807f3b682d469c"));
const levelIconUrl = new URL(require("8cc4c4eaf5f46193"));
const profileIconUrl = new URL(require("6ad103636ea20bb5"));
const starIconUrl = new URL(require("f9e0a4d5ffcdb3a"));
const mergeAchievementIconUrl = new URL(require("81743507a0165d45"));
const orderAchievementIconUrl = new URL(require("d42ef4e4bd806040"));
const coinsAchievementIconUrl = new URL(require("a45012050e48a3fe"));
const energyAchievementIconUrl = new URL(require("c88a593a718e6196"));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","8cc4c4eaf5f46193":"94QUL","6ad103636ea20bb5":"21LY5","f9e0a4d5ffcdb3a":"6YoQm","212dbb8d446341a0":"4qhqe","6925787bf5fe2cf":"8Wmv0","efa4998ec850919c":"kpMI4","4f952aa9104fd2a2":"begDh","a24833c87909bad4":"BECs3","b0ef20676c9e41f0":"7gkEz","585fe5255b23fdeb":"a5FXi","a026d5df313ce930":"e2TCP","ba785e0fab8c45fd":"85vnb","77199fd44154371c":"7Qh4L","e9f21387644e413f":"3dqfw","f8f4bf79b5515d24":"hcRwP","dad7f35a8ea52254":"dv2cz","9eeab77a064239ab":"bcXHE","7c807f3b682d469c":"8IdlK","81743507a0165d45":"hog9b","d42ef4e4bd806040":"OczAK","a45012050e48a3fe":"lfEGv","c88a593a718e6196":"bop8R"}],"94QUL":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("level.bd276a14.png") + "?" + Date.now();

},{}],"21LY5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("profile.5f50cfab.png") + "?" + Date.now();

},{}],"6YoQm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("star.d5fd55ca.png") + "?" + Date.now();

},{}],"4qhqe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("coin.d0546732.png") + "?" + Date.now();

},{}],"8Wmv0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("energy.ff6f3c8c.png") + "?" + Date.now();

},{}],"kpMI4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("upgrade_part.29f49284.png") + "?" + Date.now();

},{}],"begDh":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("magic_tool.cee612fd.png") + "?" + Date.now();

},{}],"BECs3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("copy_bubble.70aa0e81.png") + "?" + Date.now();

},{}],"7gkEz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("box.610267f4.png") + "?" + Date.now();

},{}],"a5FXi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("checkmark.af51ecf0.png") + "?" + Date.now();

},{}],"e2TCP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lock.0dc38545.png") + "?" + Date.now();

},{}],"85vnb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("achievements.c2c0f454.png") + "?" + Date.now();

},{}],"7Qh4L":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("chain.b924a0b7.png") + "?" + Date.now();

},{}],"3dqfw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("story_scroll.cc034aba.png") + "?" + Date.now();

},{}],"hcRwP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("question.71d58941.png") + "?" + Date.now();

},{}],"dv2cz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("warning.34a7afb5.png") + "?" + Date.now();

},{}],"bcXHE":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("block.1947a7d7.png") + "?" + Date.now();

},{}],"8IdlK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bonus_chest_lvl1.47431a07.png") + "?" + Date.now();

},{}],"hog9b":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("merge_achievement.11ccf8d0.png") + "?" + Date.now();

},{}],"OczAK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("order_achievement.f315a889.png") + "?" + Date.now();

},{}],"lfEGv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("coins_achievement.a079c49b.png") + "?" + Date.now();

},{}],"bop8R":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("energy_achievement.4b4e7ee7.png") + "?" + Date.now();

},{}],"j2S6s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHARACTERS", ()=>CHARACTERS);
parcelHelpers.export(exports, "STORY_CHARACTERS", ()=>STORY_CHARACTERS);
const CHARACTERS = [
    {
        icon: new URL(require("e897767e002011af")),
        name: "\u0414\u0436\u0435\u043D\u0442\u043B\u044C\u043C\u0435\u043D",
        desc: "\u0426\u0435\u043D\u0438\u0442\u0435\u043B\u044C \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0438 \u0438 \u0445\u043E\u0440\u043E\u0448\u0438\u0445 \u043C\u0430\u043D\u0435\u0440. \u0427\u0430\u0441\u0442\u043E \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0447\u0442\u043E-\u0442\u043E \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0439 \u043F\u043E\u0434\u0440\u0443\u0433\u0438."
    },
    {
        icon: new URL(require("2966f00865d33cc")),
        name: "\u041E\u0444\u0438\u0441\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A",
        desc: "\u0415\u0433\u043E \u0434\u0435\u043D\u044C \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0438 \u0442\u0430\u0431\u043B\u0438\u0446. \u041B\u044E\u0431\u0438\u0442, \u043A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u0440\u0430\u0437\u043B\u043E\u0436\u0435\u043D\u043E \u043F\u043E \u043F\u043E\u043B\u043E\u0447\u043A\u0430\u043C."
    },
    {
        icon: new URL(require("3eb037fc7845d594")),
        name: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442",
        desc: "\u0412\u0435\u0447\u043D\u043E \u0437\u0430\u043D\u044F\u0442 \u0443\u0447\u0435\u0431\u043E\u0439, \u043D\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0447\u0430\u0448\u0435\u0447\u043A\u0438 \u043A\u043E\u0444\u0435."
    },
    {
        icon: new URL(require("6c664363ba73338")),
        name: "\u041F\u043E\u0436\u0438\u043B\u043E\u0439 \u043C\u0443\u0436\u0447\u0438\u043D\u0430",
        desc: "\u041C\u0443\u0434\u0440\u044B\u0439 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439, \u043E\u043D \u0446\u0435\u043D\u0438\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u0432\u0435\u0449\u0438."
    },
    {
        icon: new URL(require("b65b45d8abd44145")),
        name: "\u041F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C",
        desc: "\u0412\u0441\u0435\u0433\u0434\u0430 \u0432 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438, \u0446\u0435\u043D\u0438\u0442 \u0441\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0449\u0438. \u0418\u0449\u0435\u0442 \u0447\u0442\u043E-\u0442\u043E, \u0447\u0442\u043E \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0435\u0442 \u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441."
    },
    {
        icon: new URL(require("178f097d842b0b3c")),
        name: "\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u0446\u0430",
        desc: "\u0418\u0449\u0435\u0442 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0432 \u043C\u0435\u043B\u043E\u0447\u0430\u0445. \u0415\u0439 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043D\u0443\u0436\u043D\u044B \u043D\u043E\u0432\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0434\u043B\u044F \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430."
    },
    {
        icon: new URL(require("3a23359ea821735a")),
        name: "\u041C\u043E\u043B\u043E\u0434\u0430\u044F \u043C\u0430\u043C\u0430",
        desc: "\u0412\u0441\u044F \u0432 \u0437\u0430\u0431\u043E\u0442\u0430\u0445, \u043D\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0435\u0442 \u0440\u0430\u0434\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0438 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0430\u043C\u0438."
    },
    {
        icon: new URL(require("8b6d13e852ecfa7b")),
        name: "\u0424\u0440\u0438\u043B\u0430\u043D\u0441\u0435\u0440",
        desc: "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0432 \u0447\u0435\u043C-\u0442\u043E \u0438\u0449\u0435\u0442 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435."
    },
    {
        icon: new URL(require("32765279ef5ea365")),
        name: "\u041F\u043E\u0436\u0438\u043B\u0430\u044F \u0436\u0435\u043D\u0449\u0438\u043D\u0430",
        desc: "\u0414\u043E\u0431\u0440\u0430\u044F \u0438 \u0440\u0430\u0441\u0441\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F, \u043E\u043D\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u0440\u0430\u0434\u043E\u0441\u0442\u044C \u0432 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0445 \u0434\u0435\u043B\u0430\u0445."
    },
    {
        icon: new URL(require("889a2d320a66c979")),
        name: "\u0411\u0438\u0437\u043D\u0435\u0441-\u043B\u0435\u0434\u0438",
        desc: "\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u0438 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u0430\u044F \u0432 \u0441\u0435\u0431\u0435. \u0415\u0451 \u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D \u043F\u043E \u043C\u0438\u043D\u0443\u0442\u0430\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043E\u043D\u0430 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F."
    }
];
const STORY_CHARACTERS = [
    {
        icon: new URL(require("32b78bcb34c3b998")),
        name: "\u041C\u0430\u0433",
        desc: "\u0417\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0444\u043E\u043A\u0443\u0441\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F \u0441\u0430\u043C\u044B\u0435 \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0434\u043B\u044F \u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0439. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u0443 \u043D\u0435\u0433\u043E \u0432 \u0448\u043B\u044F\u043F\u0435."
    },
    {
        icon: new URL(require("5461015c9c813b21")),
        name: "\u0422\u0438\u0433\u0440\u0443\u043B\u044F",
        desc: "\u042D\u043D\u0435\u0440\u0433\u0438\u0447\u043D\u044B\u0439 \u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440 \u0432 \u043A\u043E\u0441\u0442\u044E\u043C\u0435 \u0442\u0438\u0433\u0440\u0430. \u0413\u043E\u0442\u043E\u0432\u0438\u0442\u0441\u044F \u043A \u0434\u0435\u0442\u0441\u043A\u043E\u043C\u0443 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0443 \u0438 \u0438\u0449\u0435\u0442 \u0432\u0441\u0451 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0433\u043E \u043D\u0435\u0437\u0430\u0431\u044B\u0432\u0430\u0435\u043C\u044B\u043C."
    },
    {
        icon: new URL(require("dac542f301f667f")),
        name: "\u0420\u0443\u0441\u0430\u043B\u043E\u0447\u043A\u0430",
        desc: "\u041C\u0435\u0447\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0434\u0435\u0432\u0443\u0448\u043A\u0430, \u0433\u043E\u0442\u043E\u0432\u044F\u0449\u0430\u044F\u0441\u044F \u043A \u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0432\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0435 \u0443 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0430. \u0415\u0439 \u043D\u0443\u0436\u043D\u044B \u0434\u0438\u043A\u043E\u0432\u0438\u043D\u043D\u044B\u0435 \u0432\u0435\u0449\u0438, \u0447\u0442\u043E\u0431\u044B \u0435\u0451 \u043E\u0431\u0440\u0430\u0437 \u0440\u0443\u0441\u0430\u043B\u043A\u0438 \u0431\u044B\u043B \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u0435\u043D."
    },
    {
        icon: new URL(require("6b85868574013f62")),
        name: "\u0410\u043A\u0442\u0440\u0438\u0441\u0430 \u0432 \u043E\u0431\u0440\u0430\u0437\u0435",
        desc: "\u0413\u043E\u0442\u043E\u0432\u0438\u0442\u0441\u044F \u043A \u043D\u043E\u0432\u043E\u0439 \u0440\u043E\u043B\u0438 \u0438 \u0438\u0449\u0435\u0442 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0435\u0439 \u0432\u0436\u0438\u0442\u044C\u0441\u044F \u0432 \u043E\u0431\u0440\u0430\u0437. \u0415\u0451 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u044B \u0438 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B."
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","e897767e002011af":"7mlZd","2966f00865d33cc":"hacvG","3eb037fc7845d594":"5CYCI","6c664363ba73338":"bj9vZ","b65b45d8abd44145":"8jtyd","178f097d842b0b3c":"kkyZn","3a23359ea821735a":"fWijE","8b6d13e852ecfa7b":"eGV7u","32765279ef5ea365":"4shyz","889a2d320a66c979":"5E036","32b78bcb34c3b998":"a1uPz","5461015c9c813b21":"kUESP","dac542f301f667f":"ddzyX","6b85868574013f62":"fqU0U"}],"7mlZd":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_man_01.2835a589.png") + "?" + Date.now();

},{}],"hacvG":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_man_02.7d69e49b.png") + "?" + Date.now();

},{}],"5CYCI":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_man_03.ca468b48.png") + "?" + Date.now();

},{}],"bj9vZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_man_04.dbd5a9a1.png") + "?" + Date.now();

},{}],"8jtyd":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_man_05.ece8fe69.png") + "?" + Date.now();

},{}],"kkyZn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_woman_01.a193633d.png") + "?" + Date.now();

},{}],"fWijE":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_woman_02.a5e930a2.png") + "?" + Date.now();

},{}],"eGV7u":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_woman_03.d736ed24.png") + "?" + Date.now();

},{}],"4shyz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_woman_04.f9739209.png") + "?" + Date.now();

},{}],"5E036":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("simple_woman_05.961ac8b4.png") + "?" + Date.now();

},{}],"a1uPz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("special_01.73ce368a.png") + "?" + Date.now();

},{}],"kUESP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("special_02.e48db9e4.png") + "?" + Date.now();

},{}],"ddzyX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("special_03.e6c7be10.png") + "?" + Date.now();

},{}],"fqU0U":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("special_04.b5dfaf62.png") + "?" + Date.now();

},{}],"5Gyni":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONFIG", ()=>CONFIG);
parcelHelpers.export(exports, "GEN_ENERGY_CONFIG", ()=>GEN_ENERGY_CONFIG);
parcelHelpers.export(exports, "SPAWN_CHANCES", ()=>SPAWN_CHANCES);
parcelHelpers.export(exports, "UNLOCK_THRESHOLDS", ()=>UNLOCK_THRESHOLDS);
parcelHelpers.export(exports, "STORY_ORDER_CONFIG", ()=>STORY_ORDER_CONFIG);
const CONFIG = {
    // Grid and Board
    GRID_COLS: 6,
    GRID_ROWS: 8,
    MAX_ITEM_LEVEL: 7,
    MAX_GENERATOR_LEVEL: 5,
    STARTING_ITEMS_COUNT: 2,
    STARTING_GENERATORS_COUNT: 1,
    BLOCKED_ITEMS_AT_START: 40,
    BLOCKED_UNLOCKED_CATEGORY_ITEMS_AT_START: 0.35,
    // Energy
    MAX_ENERGY: 100,
    ENERGY_REGEN_INTERVAL: 32000,
    ENERGY_REGEN_AMOUNT: 1,
    STORY_ORDER_ENERGY_REWARD: 7,
    ORDER_ENERGY_REWARD: 1,
    OFFLINE_ENERGY_REGEN_RATE: 32000,
    // Coins
    COIN_MULTIPLIER: 5,
    COINS_PER_ORDER_CANCEL: 250,
    GENERATOR_RECHARGE_COST: 500,
    BLOCKED_CLEAR_COST_COINS: 550,
    ENERGY_RECHARGE_COST_COINS: 600,
    // Orders
    MAX_ORDERS: 3,
    ORDER_GENERATION_STORY_CHANCE: 0.1,
    // Scoring and Progression
    ITEM_SCORE_MULTIPLIER: 50,
    LEVEL_UP_COIN_MULTIPLIER: 50,
    // Timings and Animations
    ANIMATION: {
        FLY_DURATION: 400,
        FADE_DURATION: 400,
        PARTICLE_DURATION: 500,
        PARTICLE_COUNT: 12
    },
    DRAG_THRESHOLD: 5,
    // Collection
    COLLECTION_BONUS_BASE_VALUE: 12,
    // System
    VERSION_KEY: 'merge_game_version',
    GAME_VERSION: '1.3.1',
    SAVE_KEY: 'merge_game_save',
    LAST_LOGIN_KEY: 'last_login_time',
    ROMAN_NUMERALS: {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V'
    }
};
const GEN_ENERGY_CONFIG = {
    1: {
        max: 25,
        cooldown: 30000
    },
    2: {
        max: 25,
        cooldown: 25000
    },
    3: {
        max: 25,
        cooldown: 20000
    },
    4: {
        max: 30,
        cooldown: 20000
    },
    5: {
        max: 30,
        cooldown: 15000
    }
};
const SPAWN_CHANCES = {
    2: [
        {
            level: 2,
            chance: 20
        }
    ],
    3: [
        {
            level: 3,
            chance: 10
        },
        {
            level: 2,
            chance: 35
        }
    ],
    4: [
        {
            level: 4,
            chance: 5
        },
        {
            level: 3,
            chance: 20
        },
        {
            level: 2,
            chance: 50
        }
    ],
    5: [
        {
            level: 5,
            chance: 5
        },
        {
            level: 4,
            chance: 15
        },
        {
            level: 3,
            chance: 40
        },
        {
            level: 2,
            chance: 70
        }
    ]
};
const UNLOCK_THRESHOLDS = [
    // Каждый объект описывает уровень, на котором находится игрок
    // level: номер уровня
    // scoreStart: количество очков для начала этого уровня
    // scoreEnd: количество очков для перехода на следующий уровень
    {
        level: 1,
        unlocked: true,
        scoreStart: 0,
        scoreEnd: 500,
        orderLevels: {
            min: 1,
            max: 2
        },
        unlocksGenerator: false
    },
    {
        level: 2,
        unlocked: false,
        scoreStart: 500,
        scoreEnd: 1250,
        orderLevels: {
            min: 2,
            max: 3
        },
        unlocksGenerator: false
    },
    {
        level: 3,
        unlocked: false,
        scoreStart: 1250,
        scoreEnd: 5000,
        orderLevels: {
            min: 2,
            max: 7
        },
        unlocksGenerator: false
    },
    {
        level: 4,
        unlocked: false,
        scoreStart: 5000,
        scoreEnd: 10000,
        orderLevels: {
            min: 2,
            max: 4
        },
        unlocksGenerator: true
    },
    {
        level: 5,
        unlocked: false,
        scoreStart: 10000,
        scoreEnd: 15000,
        orderLevels: {
            min: 3,
            max: 7
        },
        unlocksGenerator: false
    },
    {
        level: 6,
        unlocked: false,
        scoreStart: 15000,
        scoreEnd: 20000,
        orderLevels: {
            min: 3,
            max: 5
        },
        unlocksGenerator: true
    },
    {
        level: 7,
        unlocked: false,
        scoreStart: 20000,
        scoreEnd: 25000,
        orderLevels: {
            min: 3,
            max: 7
        },
        unlocksGenerator: false
    },
    {
        level: 8,
        unlocked: false,
        scoreStart: 25000,
        scoreEnd: 30000,
        orderLevels: {
            min: 3,
            max: 6
        },
        unlocksGenerator: true
    },
    {
        level: 9,
        unlocked: false,
        scoreStart: 30000,
        scoreEnd: 35000,
        orderLevels: {
            min: 4,
            max: 7
        },
        unlocksGenerator: false
    },
    {
        level: 10,
        unlocked: false,
        scoreStart: 35000,
        scoreEnd: 40000,
        orderLevels: {
            min: 4,
            max: 7
        },
        unlocksGenerator: true
    },
    {
        level: 11,
        unlocked: false,
        scoreStart: 40000,
        scoreEnd: 45000,
        orderLevels: {
            min: 5,
            max: 7
        },
        unlocksGenerator: false
    },
    {
        level: 12,
        unlocked: false,
        scoreStart: 45000,
        scoreEnd: 50000,
        orderLevels: {
            min: 6,
            max: 7
        },
        unlocksGenerator: true
    },
    {
        level: 13,
        unlocked: false,
        scoreStart: 50000,
        scoreEnd: 55000,
        orderLevels: {
            min: 7,
            max: 7
        },
        unlocksGenerator: false
    },
    {
        level: 14,
        unlocked: false,
        scoreStart: 55000,
        scoreEnd: Infinity,
        orderLevels: {
            min: 7,
            max: 7
        },
        unlocksGenerator: false
    }
];
const STORY_ORDER_CONFIG = {
    1: {
        levels: [
            4,
            3
        ]
    },
    2: {
        levels: [
            2,
            2
        ]
    },
    3: {
        levels: [
            7,
            2,
            3
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9D7J7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GENERATORS_DATA", ()=>GENERATORS_DATA);
const GENERATORS_DATA = {
    'flowers': {
        name: "\u041A\u0430\u0448\u043F\u043E \u0441 \u0437\u0435\u043C\u043B\u0435\u0439",
        desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0435 \u043A\u0430\u0448\u043F\u043E, \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0435 \u043F\u043B\u043E\u0434\u043E\u0440\u043E\u0434\u043D\u043E\u0439 \u0437\u0435\u043C\u043B\u0435\u0439. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430 \u0434\u043B\u044F \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0439.",
        categories: [
            'flowers'
        ],
        parts: [
            {
                name: "\u0417\u0435\u043C\u043B\u044F",
                desc: "\u0413\u043E\u0440\u0441\u0442\u044C \u043F\u043B\u043E\u0434\u043E\u0440\u043E\u0434\u043D\u043E\u0439 \u0437\u0435\u043C\u043B\u0438, \u043E\u0441\u043D\u043E\u0432\u0430 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F.",
                icon: new URL(require("c401e1ce0719fa75"))
            },
            {
                name: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u043A\u0430\u0448\u043F\u043E \u0441 \u0437\u0435\u043C\u043B\u0435\u0439",
                desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0435 \u043A\u0430\u0448\u043F\u043E \u0441 \u0437\u0435\u043C\u043B\u0435\u0439, \u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0435 \u0441\u0435\u043C\u0435\u043D\u0430.",
                icon: new URL(require("16dd353ae0da83f9"))
            },
            {
                name: "\u041A\u0430\u0448\u043F\u043E \u0441 \u0443\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u043E\u0439 \u0437\u0435\u043C\u043B\u0435\u0439",
                desc: "\u0417\u0435\u043C\u043B\u044F \u0432 \u044D\u0442\u043E\u043C \u043A\u0430\u0448\u043F\u043E \u043E\u0431\u043E\u0433\u0430\u0449\u0435\u043D\u0430 \u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u0431\u0443\u0440\u043D\u043E\u0433\u043E \u0440\u043E\u0441\u0442\u0430.",
                icon: new URL(require("a9d47d99a5baf343"))
            }
        ],
        icons: [
            new URL(require("8d272505aa07fe9b")),
            new URL(require("3ae9666c89e9b854")),
            new URL(require("3ae9666c89e9b854")),
            new URL(require("3ae9666c89e9b854")),
            new URL(require("3ae9666c89e9b854"))
        ]
    },
    'coffee': {
        name: "\u041A\u043E\u0444\u0435\u0439\u043D\u0438\u043A",
        desc: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0433\u043E \u043A\u043E\u0444\u0435. \u0427\u0435\u043C \u0432\u044B\u0448\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0442\u0435\u043C \u0441\u043B\u043E\u0436\u043D\u0435\u0435 \u0438 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u0435\u0435 \u043D\u0430\u043F\u0438\u0442\u043A\u0438 \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C.",
        categories: [
            'coffee'
        ],
        parts: [
            {
                name: "\u0422\u0443\u0440\u043A\u0430",
                desc: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0443\u0440\u043A\u0430 \u0434\u043B\u044F \u0432\u0430\u0440\u043A\u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0433\u043E \u0438 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0433\u043E \u043A\u043E\u0444\u0435.",
                icon: new URL(require("9f2f1b94caeffb37"))
            },
            {
                name: "\u041A\u043E\u0444\u0435\u043C\u043E\u043B\u043A\u0430",
                desc: "\u0420\u0443\u0447\u043D\u0430\u044F \u043A\u043E\u0444\u0435\u043C\u043E\u043B\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0432\u0435\u0441\u044C \u0430\u0440\u043E\u043C\u0430\u0442 \u0441\u0432\u0435\u0436\u0435\u043C\u043E\u043B\u043E\u0442\u044B\u0445 \u0437\u0435\u0440\u0435\u043D.",
                icon: new URL(require("9ef95a947a9b5cc3"))
            },
            {
                name: "\u041A\u043E\u0444\u0435\u043C\u043E\u043B\u043A\u0430 \u0438 \u043F\u0438\u0442\u0447\u0435\u0440",
                desc: "\u041D\u0430\u0431\u043E\u0440 \u0431\u0430\u0440\u0438\u0441\u0442\u0430: \u043A\u043E\u0444\u0435\u043C\u043E\u043B\u043A\u0430 \u0438 \u043F\u0438\u0442\u0447\u0435\u0440 \u0434\u043B\u044F \u0432\u0437\u0431\u0438\u0432\u0430\u043D\u0438\u044F \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u043E\u043B\u043E\u0447\u043D\u043E\u0439 \u043F\u0435\u043D\u043A\u0438.",
                icon: new URL(require("23ad2a881acaf5ce"))
            }
        ],
        icons: [
            new URL(require("e56b2dfef9171e5f")),
            new URL(require("393910bdc1633866")),
            new URL(require("393910bdc1633866")),
            new URL(require("393910bdc1633866")),
            new URL(require("393910bdc1633866"))
        ]
    },
    'stationery': {
        name: "\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u0441 \u043A\u0430\u043D\u0446\u0435\u043B\u044F\u0440\u0438\u0435\u0439",
        desc: "\u041A\u043E\u0440\u043E\u0431\u043A\u0430, \u043F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0439 \u0434\u043B\u044F \u0443\u0447\u0435\u0431\u044B \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430. \u041E\u0442 \u0441\u043A\u0440\u0435\u043F\u043A\u0438 \u0434\u043E \u0432\u0441\u044F\u043A\u0438\u0445 \u0431\u0443\u043C\u0430\u0436\u0435\u043A.",
        categories: [
            'books',
            'stationery'
        ],
        isHybrid: true,
        parts: [
            {
                name: "\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448\u0438 \u0438 \u0440\u0443\u0447\u043A\u0438",
                desc: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u0434\u043B\u044F \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F. \u0421 \u0447\u0435\u0433\u043E-\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C.",
                icon: new URL(require("389c2b0ffea1d519"))
            },
            {
                name: "\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448\u0438, \u0440\u0443\u0447\u043A\u0438, \u043B\u0430\u0441\u0442\u0438\u043A\u0438 \u0438 \u0440\u0435\u0437\u0438\u043D\u043A\u0438",
                desc: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u043A\u0430\u043D\u0446\u0435\u043B\u044F\u0440\u0441\u043A\u0438\u0445 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0435\u0439. \u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C.",
                icon: new URL(require("b1b5b8c6eb912bee"))
            },
            {
                name: "\u041A\u0430\u043D\u0446\u0435\u043B\u044F\u0440\u0441\u043A\u0438\u0439 \u0445\u043B\u0430\u043C",
                desc: "\u0426\u0435\u043B\u0430\u044F \u0433\u043E\u0440\u0430 \u0432\u0441\u0435\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u0434\u043B\u044F \u0443\u0447\u0435\u0431\u044B \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430. \u041F\u043E\u0440\u0430 \u043D\u0430\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A!",
                icon: new URL(require("f0f8580593f28745"))
            }
        ],
        icons: [
            new URL(require("d46b649ad1868607")),
            new URL(require("5c221b80cbd889e6")),
            new URL(require("8f43269a8fd16514")),
            new URL(require("8f43269a8fd16514")),
            new URL(require("8f43269a8fd16514"))
        ]
    },
    'bakery': {
        name: "\u041F\u043B\u0430\u043D\u0435\u0442\u0430\u0440\u043D\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440",
        desc: "\u041C\u043E\u0449\u043D\u044B\u0439 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0434\u043B\u044F \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u043E\u0432. \u0421\u043E\u0437\u0434\u0430\u0435\u0442 \u043E\u0441\u043D\u043E\u0432\u0443 \u0434\u043B\u044F \u0432\u044B\u043F\u0435\u0447\u043A\u0438 \u0438 \u043A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u043A\u0438\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439.",
        categories: [
            'bakery',
            'pastry'
        ],
        isHybrid: true,
        parts: [
            {
                name: "\u0412\u0438\u043B\u043A\u0430",
                desc: "\u041F\u0440\u043E\u0441\u0442\u0430\u044F \u0432\u0438\u043B\u043A\u0430. \u041C\u043E\u0436\u043D\u043E \u0432\u0437\u0431\u0438\u0442\u044C \u044F\u0439\u0446\u043E, \u043D\u043E \u0434\u043B\u044F \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E\u0439 \u0432\u044B\u043F\u0435\u0447\u043A\u0438 \u044D\u0442\u043E\u0433\u043E \u043C\u0430\u043B\u043E\u0432\u0430\u0442\u043E.",
                icon: new URL(require("d6bae082c0aa09ae"))
            },
            {
                name: "\u0412\u0435\u043D\u0447\u0438\u043A \u0434\u043B\u044F \u0432\u0437\u0431\u0438\u0432\u0430\u043D\u0438\u044F",
                desc: "\u0420\u0443\u0447\u043D\u043E\u0439 \u0432\u0435\u043D\u0447\u0438\u043A \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0445 \u043A\u0440\u0435\u043C\u043E\u0432 \u0438 \u043B\u0435\u0433\u043A\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0430.",
                icon: new URL(require("663db21942814ce8"))
            },
            {
                name: "\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440",
                desc: "\u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u0440\u0443\u0447\u043D\u043E\u0439 \u043C\u0438\u043A\u0441\u0435\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0433\u043E\u0442\u043E\u0432\u043A\u0438.",
                icon: new URL(require("cd0acebc1151baa2"))
            }
        ],
        icons: [
            new URL(require("827fc4c2204e41c")),
            new URL(require("b4a556351f5f557")),
            new URL(require("b4a556351f5f557")),
            new URL(require("b4a556351f5f557")),
            new URL(require("b4a556351f5f557"))
        ]
    },
    'currant': {
        name: "\u041A\u0443\u0441\u0442 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
        desc: "\u041F\u044B\u0448\u043D\u044B\u0439 \u043A\u0443\u0441\u0442, \u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u043E\u0447\u043D\u044B\u0435 \u044F\u0433\u043E\u0434\u044B \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B. \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0432\u0438\u0442\u0430\u043C\u0438\u043D\u043E\u0432 \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043B\u0435\u0442\u043D\u0438\u0445 \u0434\u0435\u0441\u0435\u0440\u0442\u043E\u0432.",
        categories: [
            'currant'
        ],
        isStoryOnly: true,
        parts: [
            {
                name: "\u0412\u0435\u0442\u043A\u0430 \u0441 \u043F\u043E\u0447\u043A\u0430\u043C\u0438",
                desc: "\u041A\u0440\u0435\u043F\u043A\u0430\u044F \u0432\u0435\u0442\u043A\u0430 \u0441 \u043D\u0430\u0431\u0443\u0445\u0448\u0438\u043C\u0438 \u043F\u043E\u0447\u043A\u0430\u043C\u0438, \u043F\u0440\u0435\u0434\u0432\u0435\u0449\u0430\u044E\u0449\u0430\u044F \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u0443\u0440\u043E\u0436\u0430\u0439.",
                icon: new URL(require("32518da01ba02981"))
            },
            {
                name: "\u0427\u0435\u0440\u0435\u043D\u043E\u043A \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
                desc: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0447\u0435\u0440\u0435\u043D\u043E\u043A, \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u043D\u0438 \u0438 \u0441\u0442\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u0443\u0441\u0442\u043E\u043C.",
                icon: new URL(require("c5dc243286bab149"))
            },
            {
                name: "\u0421\u0430\u0436\u0435\u043D\u0435\u0446 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
                desc: "\u041C\u043E\u043B\u043E\u0434\u043E\u0439 \u0441\u0430\u0436\u0435\u043D\u0435\u0446, \u0443\u0436\u0435 \u0441 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u043B\u0438\u0441\u0442\u043E\u0447\u043A\u0430\u043C\u0438. \u0415\u043C\u0443 \u043D\u0443\u0436\u0435\u043D \u0443\u0445\u043E\u0434 \u0438 \u0437\u0430\u0431\u043E\u0442\u0430.",
                icon: new URL(require("b0ec13162261b5f2"))
            }
        ],
        icons: [
            new URL(require("2866c481a8faf0ef")),
            new URL(require("f2b0436a0f7dcfa7")),
            new URL(require("c7eb1ea58813ce3e")),
            new URL(require("c7eb1ea58813ce3e")),
            new URL(require("c7eb1ea58813ce3e"))
        ]
    },
    'beehive': {
        name: "\u0423\u043B\u0435\u0439",
        desc: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0434\u043E\u043C\u0438\u043A \u0434\u043B\u044F \u043F\u0447\u0451\u043B, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u043B\u0430\u0434\u043A\u043E\u0433\u043E \u043C\u0451\u0434\u0430 \u0438 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u043E\u0441\u043A\u0430.",
        categories: [
            'honey',
            'wax'
        ],
        isHybrid: true,
        isStoryOnly: true,
        parts: [
            {
                name: "\u041F\u0447\u0435\u043B\u0438\u043D\u0430\u044F \u043C\u0430\u0442\u043A\u0430",
                desc: "\u0421\u0435\u0440\u0434\u0446\u0435 \u0438 \u0434\u0443\u0448\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0447\u0435\u043B\u0438\u043D\u043E\u0439 \u0441\u0435\u043C\u044C\u0438. \u0411\u0435\u0437 \u043D\u0435\u0435 \u0443\u043B\u0435\u0439 \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C.",
                icon: new URL(require("a17b743680ae7da4"))
            },
            {
                name: "\u0421\u043E\u0442\u0430",
                desc: "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u043E\u0441\u043A\u043E\u0432\u0430\u044F \u044F\u0447\u0435\u0439\u043A\u0430, \u0433\u043E\u0442\u043E\u0432\u0430\u044F \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043C\u0451\u0434\u0430 \u0438\u043B\u0438 \u0432\u044B\u0440\u0430\u0449\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0442\u043E\u043C\u0441\u0442\u0432\u0430.",
                icon: new URL(require("c66594bb64712de4"))
            },
            {
                name: "\u041A\u043E\u0440\u043E\u0431 \u0441 \u0441\u043E\u0442\u0430\u043C\u0438",
                desc: "\u0426\u0435\u043B\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u0442\u0430\u043C\u0438. \u041F\u0447\u0435\u043B\u0438\u043D\u0430\u044F \u0441\u0435\u043C\u044C\u044F \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0434\u0430 \u0442\u0430\u043A\u043E\u043C\u0443 \u0436\u0438\u043B\u0438\u0449\u0443.",
                icon: new URL(require("e4f6599dc096ea28"))
            }
        ],
        icons: [
            new URL(require("688f69e1f2dca994")),
            new URL(require("e22e1ec917c1b2e8")),
            new URL(require("e22e1ec917c1b2e8")),
            new URL(require("e22e1ec917c1b2e8")),
            new URL(require("e22e1ec917c1b2e8"))
        ]
    },
    'bonus_chest': {
        name: "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430",
        desc: "\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u0441 \u0441\u044E\u0440\u043F\u0440\u0438\u0437\u043E\u043C. \u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u0435\u0434\u043A\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B, \u043D\u043E \u0438\u043C\u0435\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0440\u044F\u0434\u043E\u0432.",
        categories: [],
        isSpecial: true,
        icons: [
            new URL(require("868989500f57b669")),
            new URL(require("5d3ffd2336768e4b")),
            new URL(require("e6932d2a9f1862c8"))
        ],
        // Таблица добычи. 'weight' - относительный шанс выпадения.
        drops: [
            {
                weight: 33,
                item: {
                    isUpgradePart: true,
                    icon: new URL(require("2e5589ad72649aa5")),
                    name: "\u041D\u043E\u0432\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C",
                    discoveryKey: 'upgrade_part'
                }
            },
            {
                weight: 33,
                item: {
                    isMagicTool: true,
                    icon: new URL(require("250986d97a31ab38")),
                    name: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
                    discoveryKey: 'magic_tool'
                }
            },
            {
                weight: 34,
                item: {
                    isCopyBubble: true,
                    icon: new URL(require("55374b335963f617")),
                    name: "\u041A\u043E\u043F\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u043F\u0443\u0437\u044B\u0440\u044C",
                    discoveryKey: 'copy_bubble'
                }
            }
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","c401e1ce0719fa75":"jZF6t","16dd353ae0da83f9":"31gwr","a9d47d99a5baf343":"5mbm1","8d272505aa07fe9b":"3xroe","3ae9666c89e9b854":"itnwL","9f2f1b94caeffb37":"356AO","9ef95a947a9b5cc3":"9kQN2","23ad2a881acaf5ce":"c05Uz","e56b2dfef9171e5f":"khCYC","393910bdc1633866":"jzwSR","389c2b0ffea1d519":"5RJ3y","b1b5b8c6eb912bee":"6oOgn","f0f8580593f28745":"1DOXq","d46b649ad1868607":"hN2Jc","5c221b80cbd889e6":"1kYUB","8f43269a8fd16514":"kDh34","d6bae082c0aa09ae":"gURkd","663db21942814ce8":"9hmcn","cd0acebc1151baa2":"8gjRR","827fc4c2204e41c":"k6YZA","b4a556351f5f557":"aXvst","32518da01ba02981":"hXN1Q","c5dc243286bab149":"dbY67","b0ec13162261b5f2":"64hih","2866c481a8faf0ef":"k76yf","f2b0436a0f7dcfa7":"bExiW","c7eb1ea58813ce3e":"eyTXe","a17b743680ae7da4":"5ix8B","c66594bb64712de4":"dNfBK","e4f6599dc096ea28":"aoeac","688f69e1f2dca994":"7K3QN","e22e1ec917c1b2e8":"c2sfX","868989500f57b669":"8IdlK","5d3ffd2336768e4b":"izmkC","e6932d2a9f1862c8":"jTfgJ","2e5589ad72649aa5":"kpMI4","250986d97a31ab38":"begDh","55374b335963f617":"BECs3"}],"jZF6t":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_01.4d0e66b3.png") + "?" + Date.now();

},{}],"31gwr":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_02.63405709.png") + "?" + Date.now();

},{}],"5mbm1":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_03.f6473db6.png") + "?" + Date.now();

},{}],"3xroe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_01.ccc347c2.png") + "?" + Date.now();

},{}],"itnwL":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_02.93bd3e1d.png") + "?" + Date.now();

},{}],"356AO":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_01.09e7c403.png") + "?" + Date.now();

},{}],"9kQN2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_02.b492b831.png") + "?" + Date.now();

},{}],"c05Uz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_03.cf7f1330.png") + "?" + Date.now();

},{}],"khCYC":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_01.b1dd8eb6.png") + "?" + Date.now();

},{}],"jzwSR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_02.a98686df.png") + "?" + Date.now();

},{}],"5RJ3y":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_01.560e733f.png") + "?" + Date.now();

},{}],"6oOgn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_02.36b51b82.png") + "?" + Date.now();

},{}],"1DOXq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_03.81efbaac.png") + "?" + Date.now();

},{}],"hN2Jc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_01.3a0b9db8.png") + "?" + Date.now();

},{}],"1kYUB":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_02.08531bf1.png") + "?" + Date.now();

},{}],"kDh34":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_03.94785b3a.png") + "?" + Date.now();

},{}],"gURkd":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_01.88c5f8f4.png") + "?" + Date.now();

},{}],"9hmcn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_02.94cd7420.png") + "?" + Date.now();

},{}],"8gjRR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_03.ee7b774e.png") + "?" + Date.now();

},{}],"k6YZA":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_01.175667ee.png") + "?" + Date.now();

},{}],"aXvst":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_02.a07db72b.png") + "?" + Date.now();

},{}],"hXN1Q":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_01.04567878.png") + "?" + Date.now();

},{}],"dbY67":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_02.9dc0f5a3.png") + "?" + Date.now();

},{}],"64hih":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_03.73342e92.png") + "?" + Date.now();

},{}],"k76yf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_01.3c797644.png") + "?" + Date.now();

},{}],"bExiW":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_02.750cc0eb.png") + "?" + Date.now();

},{}],"eyTXe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_03.0b6b8926.png") + "?" + Date.now();

},{}],"5ix8B":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_01.b97d4185.png") + "?" + Date.now();

},{}],"dNfBK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_02.12539cae.png") + "?" + Date.now();

},{}],"aoeac":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("part_lvl_03.5feea388.png") + "?" + Date.now();

},{}],"7K3QN":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_01.c6e68da6.png") + "?" + Date.now();

},{}],"c2sfX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("generator_lvl_02.79afdbe0.png") + "?" + Date.now();

},{}],"izmkC":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bonus_chest_lvl2.fc8a6963.png") + "?" + Date.now();

},{}],"jTfgJ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bonus_chest_lvl3.bec296d7.png") + "?" + Date.now();

},{}],"k7E33":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CATEGORIES_CONFIG", ()=>CATEGORIES_CONFIG);
const CATEGORIES_CONFIG = {
    flowers: {
        name: "\u0420\u0430\u0441\u0442\u0435\u043D\u0438\u044F",
        color: '#04c30e',
        generatorKey: 'flowers',
        items: [
            {
                level: 1,
                icon: new URL(require("ee771f937903888")),
                name: "\u0421\u0435\u043C\u0435\u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0439",
                desc: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u0441\u043F\u044F\u0449\u0438\u0435 \u0437\u0435\u0440\u043D\u0430. \u041F\u043E\u0441\u0430\u0434\u0438\u0442\u0435 \u0438\u0445 \u0432 \u0437\u0435\u043C\u043B\u044E, \u0447\u0442\u043E\u0431\u044B \u0434\u0430\u0442\u044C \u0436\u0438\u0437\u043D\u044C."
            },
            {
                level: 2,
                icon: new URL(require("b7f11f46a287b4da")),
                name: "\u0417\u0435\u043B\u0435\u043D\u044B\u0439 \u0440\u043E\u0441\u0442\u043E\u043A",
                desc: "\u042E\u043D\u044B\u0439 \u0438 \u0445\u0440\u0443\u043F\u043A\u0438\u0439 \u0441\u0442\u0435\u0431\u0435\u043B\u0435\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u043E\u043B\u044C\u043A\u043E-\u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0431\u0438\u043B\u0441\u044F \u0438\u0437 \u0437\u0435\u043C\u043B\u0438."
            },
            {
                level: 3,
                icon: new URL(require("1d142b723e858f74")),
                name: "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435",
                desc: "\u0420\u0430\u0441\u0442\u0435\u043D\u0438\u0435 \u043E\u043A\u0440\u0435\u043F\u043B\u043E \u0438 \u043E\u0431\u0437\u0430\u0432\u0435\u043B\u043E\u0441\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u043B\u0438\u0441\u0442\u043E\u0447\u043A\u0430\u043C\u0438."
            },
            {
                level: 4,
                icon: new URL(require("c0d836f2ab56e991")),
                name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0435 \u0432 \u0433\u043E\u0440\u0448\u043A\u0435",
                desc: "\u0423\u0445\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442\u043E\u043A \u0432 \u043A\u0435\u0440\u0430\u043C\u0438\u043A\u0435. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0443\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430."
            },
            {
                level: 5,
                icon: new URL(require("ca9ac2ab3dd52bfe")),
                name: "\u0410\u043B\u0430\u044F \u0440\u043E\u0437\u0430",
                desc: "\u041F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0438 \u0433\u043E\u0440\u0434\u044B\u0439 \u0446\u0432\u0435\u0442\u043E\u043A \u0441 \u043E\u0441\u0442\u0440\u044B\u043C\u0438 \u0437\u0430\u0449\u0438\u0442\u043D\u044B\u043C\u0438 \u0448\u0438\u043F\u0430\u043C\u0438."
            },
            {
                level: 6,
                icon: new URL(require("eec8da62ec7398a5")),
                name: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439 \u0431\u0443\u043A\u0435\u0442",
                desc: "\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435."
            },
            {
                level: 7,
                icon: new URL(require("3e23f5dba7c12fdf")),
                name: "\u042F\u0431\u043B\u043E\u043D\u044F",
                desc: "\u041C\u043E\u0433\u0443\u0447\u0435\u0435 \u0434\u0435\u0440\u0435\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0435\u0441\u043D\u043E\u0439 \u0446\u0432\u0435\u0442\u0435\u0442, \u0430 \u043E\u0441\u0435\u043D\u044C\u044E \u0434\u0430\u0440\u0438\u0442 \u0441\u043E\u0447\u043D\u044B\u0435 \u044F\u0431\u043B\u043E\u043A\u0438. \u041D\u0430\u0447\u0430\u043B\u043E \u044F\u0431\u043B\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.",
                becomesGenerator: {
                    category: 'apples',
                    charges: 7
                }
            }
        ]
    },
    apples: {
        name: "\u042F\u0431\u043B\u043E\u0447\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
        color: '#ff0000',
        generatorKey: null,
        isItemGenerated: true,
        items: [
            {
                level: 1,
                icon: new URL(require("7e42fd6f1a27159b")),
                name: "\u0414\u043E\u043B\u044C\u043A\u0430 \u044F\u0431\u043B\u043E\u043A\u0430",
                desc: "\u0421\u043E\u0447\u043D\u044B\u0439 \u043A\u0443\u0441\u043E\u0447\u0435\u043A \u044F\u0431\u043B\u043E\u043A\u0430, \u0438\u0434\u0435\u0430\u043B\u0435\u043D \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u043A\u0443\u0441\u0430."
            },
            {
                level: 2,
                icon: new URL(require("697ece373b1a48b4")),
                name: "\u0426\u0435\u043B\u043E\u0435 \u044F\u0431\u043B\u043E\u043A\u043E",
                desc: "\u0421\u043F\u0435\u043B\u043E\u0435 \u0438 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0435 \u044F\u0431\u043B\u043E\u043A\u043E, \u043F\u043E\u043B\u043D\u043E\u0435 \u0432\u0438\u0442\u0430\u043C\u0438\u043D\u043E\u0432."
            },
            {
                level: 3,
                icon: new URL(require("17167ab5b2a29f8b")),
                name: "\u042F\u0449\u0438\u043A \u044F\u0431\u043B\u043E\u043A",
                desc: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u043E\u0442\u0431\u043E\u0440\u043D\u044B\u0445 \u044F\u0431\u043B\u043E\u043A, \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043A \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0435."
            },
            {
                level: 4,
                icon: new URL(require("61c6926da674c83e")),
                name: "\u0421\u0442\u0430\u043A\u0430\u043D \u044F\u0431\u043B\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u043E\u043A\u0430",
                desc: "\u0421\u0432\u0435\u0436\u0435\u0432\u044B\u0436\u0430\u0442\u044B\u0439 \u0441\u043E\u043A, \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0432\u0448\u0438\u0439 \u0432\u0435\u0441\u044C \u0432\u043A\u0443\u0441 \u0438 \u0430\u0440\u043E\u043C\u0430\u0442 \u044F\u0431\u043B\u043E\u043A."
            },
            {
                level: 5,
                icon: new URL(require("23167359dea38b22")),
                name: "\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u044F\u0431\u043B\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u043E\u043A\u0430",
                desc: "\u0423\u0434\u043E\u0431\u043D\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430 \u0441 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u043A\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438."
            },
            {
                level: 6,
                icon: new URL(require("974b0b61ff4e0992")),
                name: "\u0428\u0430\u0440\u043B\u043E\u0442\u043A\u0430",
                desc: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044F\u0431\u043B\u043E\u0447\u043D\u044B\u0439 \u043F\u0438\u0440\u043E\u0433 \u0441 \u043D\u0435\u0436\u043D\u044B\u043C \u0431\u0438\u0441\u043A\u0432\u0438\u0442\u043E\u043C \u0438 \u043A\u043E\u0440\u0438\u0446\u0435\u0439."
            },
            {
                level: 7,
                icon: new URL(require("36391aa4582adc13")),
                name: "\u0416\u0435\u043B\u0435-\u0442\u043E\u0440\u0442 \u0438\u0437 \u044F\u0431\u043B\u043E\u043A",
                desc: "\u041B\u0435\u0433\u043A\u0438\u0439 \u0438 \u043E\u0441\u0432\u0435\u0436\u0430\u044E\u0449\u0438\u0439 \u0434\u0435\u0441\u0435\u0440\u0442 \u0438\u0437 \u044F\u0431\u043B\u043E\u0447\u043D\u043E\u0433\u043E \u0436\u0435\u043B\u0435 \u0438 \u043A\u0443\u0441\u043E\u0447\u043A\u043E\u0432 \u0444\u0440\u0443\u043A\u0442\u043E\u0432."
            }
        ]
    },
    coffee: {
        name: "\u041A\u043E\u0444\u0435",
        color: '#c5420d',
        generatorKey: 'coffee',
        items: [
            {
                level: 1,
                icon: new URL(require("648882a0f56c8cea")),
                name: "\u041F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A",
                desc: "\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A, \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043A \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E."
            },
            {
                level: 2,
                icon: new URL(require("19b43cddff3e7f54")),
                name: "\u0421\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A \u0441 \u043A\u043E\u0444\u0435",
                desc: "\u0413\u043E\u0440\u044F\u0447\u0438\u0439 \u044D\u0441\u043F\u0440\u0435\u0441\u0441\u043E \u0432 \u043F\u0440\u043E\u0441\u0442\u043E\u043C \u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A\u0435."
            },
            {
                level: 3,
                icon: new URL(require("413ef2d00576cffc")),
                name: "\u0421\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A \u043D\u0430\u0432\u044B\u043D\u043E\u0441",
                desc: "\u041A\u043E\u0444\u0435 \u0441 \u043A\u0440\u044B\u0448\u043A\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0434\u043E\u0431\u043D\u043E \u0432\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439."
            },
            {
                level: 4,
                icon: new URL(require("82c7dec63b24f376")),
                name: "\u041F\u0443\u0441\u0442\u0430\u044F \u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0447\u0430\u0448\u043A\u0430",
                desc: "\u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u0430\u044F \u0447\u0430\u0448\u043A\u0430 \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u0446\u0435\u043D\u0438\u0442\u0435\u043B\u0435\u0439."
            },
            {
                level: 5,
                icon: new URL(require("c0274ca6ecdf03a2")),
                name: "\u0427\u0430\u0448\u043A\u0430 \u0441 \u043A\u043E\u0444\u0435",
                desc: "\u0410\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E \u0432 \u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0447\u0430\u0448\u043A\u0435."
            },
            {
                level: 6,
                icon: new URL(require("80ca1a3053027362")),
                name: "\u041A\u0430\u043F\u0443\u0447\u0438\u043D\u043E",
                desc: "\u041D\u0435\u0436\u043D\u044B\u0439 \u043A\u043E\u0444\u0435 \u0441 \u043F\u044B\u0448\u043D\u043E\u0439 \u043C\u043E\u043B\u043E\u0447\u043D\u043E\u0439 \u043F\u0435\u043D\u043A\u043E\u0439."
            },
            {
                level: 7,
                icon: new URL(require("4d792f2856c0b9a3")),
                name: "\u0421\u043B\u0430\u0434\u043A\u0438\u0439 \u043A\u043E\u0444\u0435 \u0441 \u0434\u043E\u043F\u0438\u043D\u0433\u0430\u043C\u0438",
                desc: "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u043D\u0430\u043F\u0438\u0442\u043E\u043A \u0441 \u0441\u0438\u0440\u043E\u043F\u043E\u043C, \u0441\u043B\u0438\u0432\u043A\u0430\u043C\u0438 \u0438 \u043C\u0430\u0440\u0448\u043C\u0435\u043B\u043B\u043E\u0443."
            }
        ]
    },
    stationery: {
        name: "\u041F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438",
        color: '#0fffd4',
        generatorKey: 'stationery',
        items: [
            {
                level: 1,
                icon: new URL(require("ebcf5066f1a2efb3")),
                name: "\u0421\u043A\u0440\u0435\u043F\u043A\u0430",
                desc: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u043B\u0438\u0441\u0442\u044B \u0432\u043C\u0435\u0441\u0442\u0435."
            },
            {
                level: 2,
                icon: new URL(require("af672498fa668f2e")),
                name: "\u041B\u0430\u0441\u0442\u0438\u043A",
                desc: "\u0421\u0442\u0438\u0440\u0430\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043D\u0435\u0443\u0434\u0430\u0447\u043D\u044B\u0435 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u0438, \u0434\u0430\u0432\u0430\u044F \u0432\u0442\u043E\u0440\u043E\u0439 \u0448\u0430\u043D\u0441."
            },
            {
                level: 3,
                icon: new URL(require("cad2165102e57d06")),
                name: "\u041A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",
                desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430."
            },
            {
                level: 4,
                icon: new URL(require("961f1727bfb4e625")),
                name: "\u0420\u0443\u0447\u043A\u0430",
                desc: "\u041E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0447\u0435\u0442\u043A\u0438\u0439 \u0438 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u0435\u0434, \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u0432\u0430\u0436\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439."
            },
            {
                level: 5,
                icon: new URL(require("236945616bf3136f")),
                name: "\u041D\u043E\u0436\u043D\u0438\u0446\u044B",
                desc: "\u041E\u0441\u0442\u0440\u044B\u0435 \u043B\u0435\u0437\u0432\u0438\u044F \u0434\u043B\u044F \u0442\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0437\u043A\u0438 \u0431\u0443\u043C\u0430\u0433\u0438 \u0438 \u043A\u0430\u0440\u0442\u043E\u043D\u0430."
            },
            {
                level: 6,
                icon: new URL(require("70eab036d245b951")),
                name: "\u041F\u0435\u043D\u0430\u043B",
                desc: "\u0412\u043C\u0435\u0441\u0442\u0438\u043B\u0438\u0449\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A."
            },
            {
                level: 7,
                icon: new URL(require("7db0a75dab4d26e4")),
                name: "\u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440",
                desc: "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043B\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0432\u0441\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435.",
                becomesGenerator: {
                    category: 'gadgets',
                    charges: 13
                }
            }
        ]
    },
    gadgets: {
        name: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
        color: '#00ffb2',
        generatorKey: null,
        isItemGenerated: true,
        items: [
            {
                level: 1,
                icon: new URL(require("cc79ef23a99fbd42")),
                name: "USB-\u043A\u0430\u0431\u0435\u043B\u044C",
                desc: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u0434 \u0434\u043B\u044F \u0437\u0430\u0440\u044F\u0434\u043A\u0438 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u0411\u0435\u0437 \u043D\u0435\u0433\u043E \u043D\u0438\u043A\u0443\u0434\u0430."
            },
            {
                level: 2,
                icon: new URL(require("40d0927c48e96c87")),
                name: 'Powerbank',
                desc: "\u041F\u043E\u0440\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043F\u0430\u0441\u0435\u0442 \u0432 \u0441\u0430\u043C\u044B\u0439 \u043D\u0443\u0436\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442."
            },
            {
                level: 3,
                icon: new URL(require("86ad1a1815a3b09c")),
                name: "\u0411\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0430\u044F \u043C\u044B\u0448\u044C",
                desc: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440, \u0434\u0430\u044E\u0449\u0438\u0439 \u0441\u0432\u043E\u0431\u043E\u0434\u0443 \u043E\u0442 \u043F\u0440\u043E\u0432\u043E\u0434\u043E\u0432."
            },
            {
                level: 4,
                icon: new URL(require("7ad76dcaf50483c9")),
                name: "\u0411\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u044B\u0435 \u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0438",
                desc: "\u041F\u043E\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044C \u0432 \u043C\u0443\u0437\u044B\u043A\u0443 \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u0430\u0441\u0442, \u043D\u0435 \u043C\u0435\u0448\u0430\u044F \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u043C."
            },
            {
                level: 5,
                icon: new URL(require("cbf969356fa36c58")),
                name: "\u0423\u043C\u043D\u044B\u0435 \u0447\u0430\u0441\u044B",
                desc: "\u0421\u0442\u0438\u043B\u044C\u043D\u044B\u0439 \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043B\u0435\u0434\u0438\u0442 \u0437\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F."
            },
            {
                level: 6,
                icon: new URL(require("94dba6075e2fb810")),
                name: "\u041F\u043B\u0430\u043D\u0448\u0435\u0442",
                desc: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u043A\u0440\u0430\u043D \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B, \u0438\u0433\u0440 \u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0444\u0438\u043B\u044C\u043C\u043E\u0432."
            },
            {
                level: 7,
                icon: new URL(require("9cc5abe021657bda")),
                name: "\u041D\u043E\u0443\u0442\u0431\u0443\u043A",
                desc: "\u041C\u043E\u0449\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043B\u044E\u0431\u044B\u0445 \u0437\u0430\u0434\u0430\u0447."
            }
        ]
    },
    books: {
        name: "\u041A\u043D\u0438\u0433\u0438",
        color: '#0f1eff',
        generatorKey: 'stationery',
        items: [
            {
                level: 1,
                icon: new URL(require("a0c0cd03fa49e821")),
                name: "\u041B\u0438\u043F\u0443\u0447\u0430\u044F \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0430",
                desc: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043B\u0438\u0441\u0442\u043E\u043A \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0438 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0439."
            },
            {
                level: 2,
                icon: new URL(require("2acf4218f9e7c4a8")),
                name: "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u043D\u0430\u043A\u043B\u0435\u0435\u043A",
                desc: "\u0421\u0432\u0435\u0436\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u043D\u0430\u043A\u043B\u0435\u0435\u043A, \u043F\u0440\u044F\u043C\u043E \u0438\u0437 \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0438. \u0412\u0441\u0435 \u0433\u043E\u0442\u043E\u0432\u043E \u0434\u043B\u044F \u043C\u043E\u0449\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u0439\u043D\u0448\u0442\u043E\u0440\u043C\u0430."
            },
            {
                level: 3,
                icon: new URL(require("c2a06e66a1dc8ccd")),
                name: "\u0411\u043B\u043E\u043A\u043D\u043E\u0442 \u043D\u0430 \u043F\u0440\u0443\u0436\u0438\u043D\u0435",
                desc: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0431\u043B\u043E\u043A\u043D\u043E\u0442 \u0434\u043B\u044F \u043A\u043E\u043D\u0441\u043F\u0435\u043A\u0442\u043E\u0432 \u0438 \u0437\u0430\u0440\u0438\u0441\u043E\u0432\u043E\u043A."
            },
            {
                level: 4,
                icon: new URL(require("1809fdeb6fe839b9")),
                name: "\u0411\u043B\u043E\u043A\u043D\u043E\u0442",
                desc: "\u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u0441\u043F\u0443\u0442\u043D\u0438\u043A \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u043C\u044B\u0441\u043B\u0435\u0439 \u0438 \u043F\u043B\u0430\u043D\u043E\u0432 \u0432 \u0442\u0432\u0435\u0440\u0434\u043E\u0439 \u043E\u0431\u043B\u043E\u0436\u043A\u0435."
            },
            {
                level: 5,
                icon: new URL(require("ff1ccb9ccbfa29d1")),
                name: "\u041A\u043D\u0438\u0436\u043A\u0430",
                desc: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0437\u043D\u0430\u043D\u0438\u0439 \u0438\u043B\u0438 \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0432 \u043F\u0435\u0440\u0435\u043F\u043B\u0435\u0442\u0435."
            },
            {
                level: 6,
                icon: new URL(require("6138886a2bd38cb2")),
                name: "\u0421\u0442\u043E\u043F\u043A\u0430 \u043A\u043D\u0438\u0433",
                desc: "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u043E\u0436\u0438\u0434\u0430\u044E\u0449\u0430\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F."
            },
            {
                level: 7,
                icon: new URL(require("a2da5cd0509f45df")),
                name: "\u041A\u043D\u0438\u0436\u043D\u044B\u0439 \u0448\u043A\u0430\u0444",
                desc: "\u0426\u0435\u043B\u0430\u044F \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430, \u0445\u0440\u0430\u043D\u044F\u0449\u0430\u044F \u0432 \u0441\u0435\u0431\u0435 \u043C\u0438\u0440\u044B \u0438 \u044D\u043F\u043E\u0445\u0438."
            }
        ]
    },
    bakery: {
        name: "\u0412\u044B\u043F\u0435\u0447\u043A\u0430",
        color: '#edca08',
        generatorKey: 'bakery',
        items: [
            {
                level: 1,
                icon: new URL(require("836d853c5436896d")),
                name: "\u0422\u043E\u0441\u0442",
                desc: "\u041F\u043E\u0434\u0436\u0430\u0440\u0435\u043D\u043D\u044B\u0439 \u043B\u043E\u043C\u0442\u0438\u043A \u0445\u043B\u0435\u0431\u0430, \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0438\u0439 \u0441\u043D\u0430\u0440\u0443\u0436\u0438 \u0438 \u043C\u044F\u0433\u043A\u0438\u0439 \u0432\u043D\u0443\u0442\u0440\u0438."
            },
            {
                level: 2,
                icon: new URL(require("ba72aeff9e8bd6e2")),
                name: "\u0411\u0435\u0439\u0433\u043B",
                desc: "\u041F\u043B\u043E\u0442\u043D\u044B\u0439 \u0431\u0443\u0431\u043B\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0447\u0430\u0441\u0442\u043E \u0435\u0434\u044F\u0442 \u0441 \u043D\u0430\u0447\u0438\u043D\u043A\u043E\u0439."
            },
            {
                level: 3,
                icon: new URL(require("dcb8820ef6aafbac")),
                name: "\u0411\u0440\u0438\u043E\u0448\u044C",
                desc: "\u0421\u0434\u043E\u0431\u043D\u0430\u044F \u0431\u0443\u043B\u043E\u0447\u043A\u0430 \u0438\u0437 \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0430, \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u0432\u0442\u0440\u0430\u043A\u0430."
            },
            {
                level: 4,
                icon: new URL(require("8d1998017e881f39")),
                name: "\u0427\u0438\u0430\u0431\u0430\u0442\u0442\u0430",
                desc: "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u0445\u043B\u0435\u0431 \u0441 \u043F\u043E\u0440\u0438\u0441\u0442\u043E\u0439 \u043C\u044F\u043A\u043E\u0442\u044C\u044E \u0438 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0439 \u043A\u043E\u0440\u043E\u0447\u043A\u043E\u0439."
            },
            {
                level: 5,
                icon: new URL(require("cdf021522124c666")),
                name: "\u0424\u043E\u043A\u0430\u0447\u0447\u0430 \u0441 \u043E\u043B\u0438\u0432\u043A\u0430\u043C\u0438",
                desc: "\u041F\u044B\u0448\u043D\u0430\u044F \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0430\u044F \u043B\u0435\u043F\u0435\u0448\u043A\u0430, \u0441\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u0430\u044F \u043E\u043B\u0438\u0432\u043A\u043E\u0432\u044B\u043C \u043C\u0430\u0441\u043B\u043E\u043C \u0438 \u043E\u043B\u0438\u0432\u043A\u0430\u043C\u0438."
            },
            {
                level: 6,
                icon: new URL(require("45e0b1dbf8cb03fc")),
                name: "\u0411\u0430\u0433\u0435\u0442",
                desc: "\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0438 \u0442\u043E\u043D\u043A\u0438\u0439 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439 \u0445\u043B\u0435\u0431 \u0441 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0439 \u043A\u043E\u0440\u043E\u0447\u043A\u043E\u0439."
            },
            {
                level: 7,
                icon: new URL(require("305f2438fda30242")),
                name: "\u041A\u0430\u0440\u0430\u0432\u0430\u0439",
                desc: "\u041F\u044B\u0448\u043D\u044B\u0439 \u0438 \u0440\u0443\u043C\u044F\u043D\u044B\u0439 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439 \u0445\u043B\u0435\u0431, \u0441\u0438\u043C\u0432\u043E\u043B \u0433\u043E\u0441\u0442\u0435\u043F\u0440\u0438\u0438\u043C\u0441\u0442\u0432\u0430."
            }
        ]
    },
    pastry: {
        name: "\u041A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u0441\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F",
        color: '#ed08c7',
        generatorKey: 'bakery',
        items: [
            {
                level: 1,
                icon: new URL(require("d42989192fe98c10")),
                name: "\u041A\u0430\u043A\u0430\u043E",
                desc: "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u043A\u0430\u043A\u0430\u043E-\u043F\u043E\u0440\u043E\u0448\u043A\u0430, \u043E\u0441\u043D\u043E\u0432\u0430 \u0434\u043B\u044F \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0445 \u0448\u0435\u0434\u0435\u0432\u0440\u043E\u0432."
            },
            {
                level: 2,
                icon: new URL(require("3573fd810ac85c81")),
                name: "\u0428\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u0430\u044F \u043A\u043E\u043D\u0444\u0435\u0442\u0430",
                desc: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u043E\u0435 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435 \u0441 \u043D\u0435\u0436\u043D\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u043A\u043E\u0439."
            },
            {
                level: 3,
                icon: new URL(require("af87c04efd8d26b0")),
                name: "\u041F\u043B\u0438\u0442\u043A\u0430 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0430",
                desc: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043B\u0438\u0442\u043A\u0430 \u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0430."
            },
            {
                level: 4,
                icon: new URL(require("a927f0eb3e66b0e7")),
                name: "\u0428\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439 \u043C\u0430\u0444\u0444\u0438\u043D",
                desc: "\u0412\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043A\u0435\u043A\u0441 \u0441 \u043A\u0443\u0441\u043E\u0447\u043A\u0430\u043C\u0438 \u0442\u0430\u044E\u0449\u0435\u0433\u043E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0430."
            },
            {
                level: 5,
                icon: new URL(require("554320863918d7d1")),
                name: "\u041A\u0440\u0443\u0430\u0441\u0441\u0430\u043D \u0441 \u0444\u0438\u0441\u0442\u0430\u0448\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u0441\u0442\u043E\u0439",
                desc: "\u0421\u043B\u043E\u0435\u043D\u044B\u0439 \u043A\u0440\u0443\u0430\u0441\u0441\u0430\u043D \u0441 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0439 \u0438 \u0441\u043B\u0430\u0434\u043A\u043E\u0439 \u0444\u0438\u0441\u0442\u0430\u0448\u043A\u043E\u0432\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u043A\u043E\u0439."
            },
            {
                level: 6,
                icon: new URL(require("72d4271329b451af")),
                name: "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u044D\u043A\u043B\u0435\u0440\u043E\u0432",
                desc: "\u041D\u0430\u0431\u043E\u0440 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u0432\u0430\u0440\u043D\u044B\u0445 \u043F\u0438\u0440\u043E\u0436\u043D\u044B\u0445 \u0441 \u043D\u0435\u0436\u043D\u044B\u043C \u043A\u0440\u0435\u043C\u043E\u043C."
            },
            {
                level: 7,
                icon: new URL(require("73abdf397e1f7daa")),
                name: "\u0411\u0435\u043D\u0442\u043E-\u0442\u043E\u0440\u0442",
                desc: "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u0442\u043E\u0440\u0442 \u0432 \u043A\u043E\u0440\u043E\u0431\u043E\u0447\u043A\u0435, \u043C\u043E\u0434\u043D\u044B\u0439 \u0438 \u0432\u043A\u0443\u0441\u043D\u044B\u0439 \u0434\u0435\u0441\u0435\u0440\u0442."
            }
        ]
    },
    currant: {
        name: "\u0421\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430",
        color: '#8c00ff',
        generatorKey: 'currant',
        items: [
            {
                level: 1,
                icon: new URL(require("3b5a6ae63c2f90f9")),
                name: "\u042F\u0433\u043E\u0434\u043A\u0430 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
                desc: "\u041E\u0434\u043D\u0430-\u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u043B\u0430\u044F \u0438 \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0430\u044F \u044F\u0433\u043E\u0434\u043A\u0430."
            },
            {
                level: 2,
                icon: new URL(require("8ec2aa872ed8b913")),
                name: "\u0413\u0440\u043E\u0437\u0434\u044C \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
                desc: "\u0426\u0435\u043B\u0430\u044F \u0432\u0435\u0442\u043E\u0447\u043A\u0430, \u0443\u0441\u044B\u043F\u0430\u043D\u043D\u0430\u044F \u043A\u0438\u0441\u043B\u043E-\u0441\u043B\u0430\u0434\u043A\u0438\u043C\u0438 \u044F\u0433\u043E\u0434\u0430\u043C\u0438."
            },
            {
                level: 3,
                icon: new URL(require("3fb5d78ae13e23fe")),
                name: "\u0413\u043E\u0440\u0441\u0442\u044C \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
                desc: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044F\u0433\u043E\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0445\u0432\u0430\u0442\u0438\u0442, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0432\u043A\u0443\u0441 \u043B\u0435\u0442\u0430."
            },
            {
                level: 4,
                icon: new URL(require("2c0bbf92f0385051")),
                name: "\u041C\u0438\u0441\u043A\u0430 \u0441\u043E \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u043E\u0439",
                desc: "\u041F\u043E\u043B\u043D\u0430\u044F \u043C\u0438\u0441\u043A\u0430 \u0441\u0432\u0435\u0436\u0435\u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u044F\u0433\u043E\u0434, \u043F\u043E\u0441\u044B\u043F\u0430\u043D\u043D\u044B\u0445 \u0441\u0430\u0445\u0430\u0440\u043E\u043C."
            },
            {
                level: 5,
                icon: new URL(require("3d46969b15190903")),
                name: "\u041A\u043E\u0440\u0437\u0438\u043D\u043A\u0430 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B",
                desc: "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u043B\u0435\u0442\u0435\u043D\u0430\u044F \u043A\u043E\u0440\u0437\u0438\u043D\u043A\u0430, \u0434\u043E\u0432\u0435\u0440\u0445\u0443 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0443\u0440\u043E\u0436\u0430\u0435\u043C."
            },
            {
                level: 6,
                icon: new URL(require("bab104af349e1ef7")),
                name: "\u0411\u0430\u043D\u043A\u0430 \u0432\u0430\u0440\u0435\u043D\u044C\u044F",
                desc: "\u0413\u0443\u0441\u0442\u043E\u0435 \u0438 \u0441\u043B\u0430\u0434\u043A\u043E\u0435 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u043E\u0432\u043E\u0435 \u0432\u0430\u0440\u0435\u043D\u044C\u0435, \u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0437\u0438\u043C\u0443."
            },
            {
                level: 7,
                icon: new URL(require("73d99351cf48cceb")),
                name: "\u041F\u0438\u0440\u043E\u0433 \u0441\u043E \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u043E\u0439",
                desc: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u043F\u0438\u0440\u043E\u0433 \u0441 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u043E\u0439 \u044F\u0433\u043E\u0434\u043D\u043E\u0439 \u043D\u0430\u0447\u0438\u043D\u043A\u043E\u0439."
            }
        ]
    },
    honey: {
        name: "\u041C\u0451\u0434",
        color: '#ffb703',
        generatorKey: 'beehive',
        items: [
            {
                level: 1,
                icon: new URL(require("3f3be7c883c55017")),
                name: "\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043D\u0435\u043A\u0442\u0430\u0440",
                desc: "\u0421\u043B\u0430\u0434\u043A\u0430\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u044C, \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u043F\u0447\u0435\u043B\u0430\u043C\u0438. \u041E\u0441\u043D\u043E\u0432\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E \u043C\u0451\u0434\u0430."
            },
            {
                level: 2,
                icon: new URL(require("147b6aeb5c75e8b9")),
                name: "\u042F\u0447\u0435\u0439\u043A\u0430 \u0441\u043E\u0442",
                desc: "\u041E\u0434\u043D\u0430 \u0432\u043E\u0441\u043A\u043E\u0432\u0430\u044F \u044F\u0447\u0435\u0439\u043A\u0430, \u0434\u043E\u0432\u0435\u0440\u0445\u0443 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0441\u0432\u0435\u0436\u0438\u043C \u043C\u0451\u0434\u043E\u043C."
            },
            {
                level: 3,
                icon: new URL(require("19a0a28e4bc69d55")),
                name: "\u041A\u0443\u0441\u043E\u0447\u0435\u043A \u0441\u043E\u0442",
                desc: "\u0410\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u043A\u0443\u0441\u043E\u0447\u0435\u043A \u0441\u043E\u0442. \u041C\u043E\u0436\u043D\u043E \u0436\u0435\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0442\u0430\u043A!"
            },
            {
                level: 4,
                icon: new URL(require("b077813c22bb2ff3")),
                name: "\u0411\u0430\u043D\u043E\u0447\u043A\u0430 \u0436\u0438\u0434\u043A\u043E\u0433\u043E \u043C\u0451\u0434\u0430",
                desc: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0451\u0434, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0438 \u0442\u044F\u0433\u0443\u0447\u0438\u0439."
            },
            {
                level: 5,
                icon: new URL(require("ac7e90f6a9a58fe4")),
                name: "\u041A\u0440\u0435\u043C-\u043C\u0451\u0434",
                desc: "\u041D\u0435\u0436\u043D\u044B\u0439 \u0432\u0437\u0431\u0438\u0442\u044B\u0439 \u043C\u0451\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0430\u0435\u0442 \u0432\u043E \u0440\u0442\u0443. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0442\u043E\u0441\u0442\u043E\u0432."
            },
            {
                level: 6,
                icon: new URL(require("db4e86fe0e00d30f")),
                name: "\u041C\u0451\u0434 \u0441 \u043E\u0440\u0435\u0445\u0430\u043C\u0438",
                desc: "\u041F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E: \u043E\u0442\u0431\u043E\u0440\u043D\u044B\u0435 \u043E\u0440\u0435\u0445\u0438 \u0432 \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u043E\u043C \u043C\u0451\u0434\u0435."
            },
            {
                level: 7,
                icon: new URL(require("3f500caba53ff052")),
                name: "\u0411\u043E\u0447\u043E\u043D\u043E\u043A \u0432\u044B\u0434\u0435\u0440\u0436\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0451\u0434\u0430",
                desc: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043E\u0447\u043E\u043D\u043E\u043A \u0440\u0435\u0434\u043A\u043E\u0433\u043E, \u0432\u044B\u0434\u0435\u0440\u0436\u0430\u043D\u043D\u043E\u0433\u043E \u0433\u043E\u0434\u0430\u043C\u0438 \u043C\u0451\u0434\u0430. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449\u0435."
            }
        ]
    },
    wax: {
        name: "\u0412\u043E\u0441\u043A",
        color: '#fca311',
        generatorKey: 'beehive',
        items: [
            {
                level: 1,
                icon: new URL(require("b2ca75e4187316ed")),
                name: "\u041F\u0447\u0435\u043B\u0438\u043D\u044B\u0439 \u043A\u043B\u0435\u0439 (\u041F\u0440\u043E\u043F\u043E\u043B\u0438\u0441)",
                desc: "\u041A\u043B\u0435\u0439\u043A\u043E\u0435 \u0441\u043C\u043E\u043B\u0438\u0441\u0442\u043E\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u0447\u0435\u043B\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0434\u043B\u044F \u0434\u0435\u0437\u0438\u043D\u0444\u0435\u043A\u0446\u0438\u0438 \u0443\u043B\u044C\u044F."
            },
            {
                level: 2,
                icon: new URL(require("bffbd9232a3da7d7")),
                name: "\u041A\u0443\u0441\u043E\u0447\u0435\u043A \u0432\u043E\u0441\u043A\u0430",
                desc: "\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u043E\u043C\u043E\u0447\u0435\u043A \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0447\u0435\u043B\u0438\u043D\u043E\u0433\u043E \u0432\u043E\u0441\u043A\u0430."
            },
            {
                level: 3,
                icon: new URL(require("bf86407970bb16ee")),
                name: "\u041B\u0438\u0441\u0442 \u0432\u043E\u0449\u0438\u043D\u044B",
                desc: "\u0422\u043E\u043D\u043A\u0438\u0439 \u0440\u0438\u0444\u043B\u0435\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0432\u043E\u0441\u043A\u0430, \u043E\u0441\u043D\u043E\u0432\u0430 \u0434\u043B\u044F \u0441\u043E\u0442 \u0438 \u0441\u0432\u0435\u0447\u0435\u0439."
            },
            {
                level: 4,
                icon: new URL(require("c4b4090e583671a8")),
                name: "\u0421\u0432\u0435\u0447\u0430 \u0438\u0437 \u0432\u043E\u0449\u0438\u043D\u044B",
                desc: "\u0421\u043A\u0440\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0441\u0432\u0435\u0447\u0430 \u0441 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u043C \u043C\u0435\u0434\u043E\u0432\u044B\u043C \u0430\u0440\u043E\u043C\u0430\u0442\u043E\u043C."
            },
            {
                level: 5,
                icon: new URL(require("5730eb10d0ce8715")),
                name: "\u0424\u0438\u0433\u0443\u0440\u043D\u0430\u044F \u0441\u0432\u0435\u0447\u0430",
                desc: "\u0412\u043E\u0441\u043A\u043E\u0432\u0430\u044F \u0441\u0432\u0435\u0447\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0446\u0432\u0435\u0442\u043A\u0430."
            },
            {
                level: 6,
                icon: new URL(require("b3ecf46c4eaaa99")),
                name: "\u0424\u043B\u043E\u0440\u0435\u043D\u0442\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u0430\u0448\u0435",
                desc: "\u0410\u0440\u043E\u043C\u0430\u0442\u043D\u0430\u044F \u0432\u043E\u0441\u043A\u043E\u0432\u0430\u044F \u043F\u043B\u0438\u0442\u043A\u0430 \u0441 \u0441\u0443\u0445\u043E\u0446\u0432\u0435\u0442\u0430\u043C\u0438 \u0438 \u044D\u0444\u0438\u0440\u043D\u044B\u043C\u0438 \u043C\u0430\u0441\u043B\u0430\u043C\u0438 \u0434\u043B\u044F \u0430\u0440\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0435\u043B\u044C\u044F \u0438\u043B\u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439."
            },
            {
                level: 7,
                icon: new URL(require("fc6a02e8d84a7ba")),
                name: "\u041D\u0430\u0431\u043E\u0440 \u0441\u0432\u0435\u0447\u0435\u0439",
                desc: "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0432\u0435\u0447\u0435\u0439 \u0434\u043B\u044F \u0443\u044E\u0442\u0430 \u0432 \u0434\u043E\u043C\u0435."
            }
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","ee771f937903888":"evjHh","b7f11f46a287b4da":"joO1t","1d142b723e858f74":"NX2Z8","c0d836f2ab56e991":"1MaDE","ca9ac2ab3dd52bfe":"2ZwWF","eec8da62ec7398a5":"c6rtS","3e23f5dba7c12fdf":"49Q6M","7e42fd6f1a27159b":"kLSMp","697ece373b1a48b4":"d6Lok","17167ab5b2a29f8b":"2zLBj","61c6926da674c83e":"iiBSm","23167359dea38b22":"9rr0f","974b0b61ff4e0992":"jtBnA","36391aa4582adc13":"jH6Ad","648882a0f56c8cea":"flIeF","19b43cddff3e7f54":"9F9SQ","413ef2d00576cffc":"pGUoD","82c7dec63b24f376":"hybpe","c0274ca6ecdf03a2":"bxWwo","80ca1a3053027362":"elAcP","4d792f2856c0b9a3":"cifrC","ebcf5066f1a2efb3":"kIIZg","af672498fa668f2e":"2cWAP","cad2165102e57d06":"d8O8B","961f1727bfb4e625":"dJz7n","236945616bf3136f":"jpxzu","70eab036d245b951":"60ix5","7db0a75dab4d26e4":"hdK98","cc79ef23a99fbd42":"luZpb","40d0927c48e96c87":"dsIOa","86ad1a1815a3b09c":"fHjIB","7ad76dcaf50483c9":"gkDfB","cbf969356fa36c58":"3TbCH","94dba6075e2fb810":"5M473","9cc5abe021657bda":"eGhN9","a0c0cd03fa49e821":"6St31","2acf4218f9e7c4a8":"bz8L5","c2a06e66a1dc8ccd":"juyyM","1809fdeb6fe839b9":"7gpVn","ff1ccb9ccbfa29d1":"ie9JR","6138886a2bd38cb2":"3P8uS","a2da5cd0509f45df":"1pWUb","836d853c5436896d":"25DCl","ba72aeff9e8bd6e2":"guQ8b","dcb8820ef6aafbac":"9Cc5U","8d1998017e881f39":"8n4eX","cdf021522124c666":"fHHHV","45e0b1dbf8cb03fc":"2GQFu","305f2438fda30242":"dtSr0","d42989192fe98c10":"8GDe4","3573fd810ac85c81":"2fS0F","af87c04efd8d26b0":"bEaeo","a927f0eb3e66b0e7":"bNmID","554320863918d7d1":"5jgBv","72d4271329b451af":"l7qS5","73abdf397e1f7daa":"2ztdy","3b5a6ae63c2f90f9":"6w0j2","8ec2aa872ed8b913":"8avOu","3fb5d78ae13e23fe":"3jrGR","2c0bbf92f0385051":"g7e5b","3d46969b15190903":"33UR7","bab104af349e1ef7":"2meEW","73d99351cf48cceb":"kTey6","3f3be7c883c55017":"bo0n6","147b6aeb5c75e8b9":"hXO8s","19a0a28e4bc69d55":"9kkW9","b077813c22bb2ff3":"ae31w","ac7e90f6a9a58fe4":"4HVm0","db4e86fe0e00d30f":"g4YiO","3f500caba53ff052":"9uyTZ","b2ca75e4187316ed":"hRm1b","bffbd9232a3da7d7":"5CYjM","bf86407970bb16ee":"i5PS3","c4b4090e583671a8":"jlcyP","5730eb10d0ce8715":"arLzt","b3ecf46c4eaaa99":"luEC3","fc6a02e8d84a7ba":"ejJo3"}],"evjHh":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("seeds.be137990.png") + "?" + Date.now();

},{}],"joO1t":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sprout.2fa4d724.png") + "?" + Date.now();

},{}],"NX2Z8":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("mint.028a41fe.png") + "?" + Date.now();

},{}],"1MaDE":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("potted_plant.8ba95a35.png") + "?" + Date.now();

},{}],"2ZwWF":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("rose.ea43b065.png") + "?" + Date.now();

},{}],"c6rtS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bouquet.27da2685.png") + "?" + Date.now();

},{}],"49Q6M":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tree.606a9ea0.png") + "?" + Date.now();

},{}],"kLSMp":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("slice.1c4e14b5.png") + "?" + Date.now();

},{}],"d6Lok":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("apple.8d5b068e.png") + "?" + Date.now();

},{}],"2zLBj":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("box.01836b3b.png") + "?" + Date.now();

},{}],"iiBSm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("juice_glass.75b8f376.png") + "?" + Date.now();

},{}],"9rr0f":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("juice_bottle.f2b2703f.png") + "?" + Date.now();

},{}],"jtBnA":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("pie.6e393363.png") + "?" + Date.now();

},{}],"jH6Ad":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("jelly_cake.dcd2f74b.png") + "?" + Date.now();

},{}],"flIeF":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("empty_cup.e81dc9c6.png") + "?" + Date.now();

},{}],"9F9SQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("cup_coffee.3f1761df.png") + "?" + Date.now();

},{}],"pGUoD":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ready_cup.5fe2cffe.png") + "?" + Date.now();

},{}],"hybpe":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ceramic.cc000943.png") + "?" + Date.now();

},{}],"bxWwo":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ceramic_coffee.377f85c4.png") + "?" + Date.now();

},{}],"elAcP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("cappuccino.034188ef.png") + "?" + Date.now();

},{}],"cifrC":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("best_coffee.4ac5af78.png") + "?" + Date.now();

},{}],"kIIZg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("clip.a61ca730.png") + "?" + Date.now();

},{}],"2cWAP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("eraser.f39c7427.png") + "?" + Date.now();

},{}],"d8O8B":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("pencil.b9f4027b.png") + "?" + Date.now();

},{}],"dJz7n":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("pen.515e2139.png") + "?" + Date.now();

},{}],"jpxzu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("scissors.50f8ad61.png") + "?" + Date.now();

},{}],"60ix5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("pencil_case.fae5ad3e.png") + "?" + Date.now();

},{}],"hdK98":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("organizer.b517aeca.png") + "?" + Date.now();

},{}],"luZpb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("usb_cable.c0a86912.png") + "?" + Date.now();

},{}],"dsIOa":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("powerbank.b07371c0.png") + "?" + Date.now();

},{}],"fHjIB":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("mouse.f6637d5d.png") + "?" + Date.now();

},{}],"gkDfB":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("headphones.acac48a0.png") + "?" + Date.now();

},{}],"3TbCH":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("smartwatch.f8086fdd.png") + "?" + Date.now();

},{}],"5M473":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tablet.82dc748b.png") + "?" + Date.now();

},{}],"eGhN9":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("laptop.83e3e3a6.png") + "?" + Date.now();

},{}],"6St31":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sticker.7a42c20d.png") + "?" + Date.now();

},{}],"bz8L5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("paper.ebcf001c.png") + "?" + Date.now();

},{}],"juyyM":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("spiral_notebook.ed1a964d.png") + "?" + Date.now();

},{}],"7gpVn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("notebook.c63cdc0d.png") + "?" + Date.now();

},{}],"ie9JR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("book.745364f6.png") + "?" + Date.now();

},{}],"3P8uS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("books_stack.3aa782b1.png") + "?" + Date.now();

},{}],"1pWUb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bookshelf.1c87bfb6.png") + "?" + Date.now();

},{}],"25DCl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("toast.f1af2c59.png") + "?" + Date.now();

},{}],"guQ8b":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bagel.713b1b9e.png") + "?" + Date.now();

},{}],"9Cc5U":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("brioche.4b660952.png") + "?" + Date.now();

},{}],"8n4eX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ciabatta.03c8a58d.png") + "?" + Date.now();

},{}],"fHHHV":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("focaccia.6d3e3297.png") + "?" + Date.now();

},{}],"2GQFu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("baguette.7bdc78d2.png") + "?" + Date.now();

},{}],"dtSr0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("karavai.5d20c104.png") + "?" + Date.now();

},{}],"8GDe4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("cacao.b031545d.png") + "?" + Date.now();

},{}],"2fS0F":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("choco_candy.60088857.png") + "?" + Date.now();

},{}],"bEaeo":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("choco_bar.d7e9c85e.png") + "?" + Date.now();

},{}],"bNmID":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("muffin.602e17a2.png") + "?" + Date.now();

},{}],"5jgBv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("croissant.bf6c7b66.png") + "?" + Date.now();

},{}],"l7qS5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("eclairs.42f6f1f8.png") + "?" + Date.now();

},{}],"2ztdy":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bento_cake.166c3fe7.png") + "?" + Date.now();

},{}],"6w0j2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("single_berry.36cc77b8.png") + "?" + Date.now();

},{}],"8avOu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bunch.7fbc022d.png") + "?" + Date.now();

},{}],"3jrGR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("handful.85415846.png") + "?" + Date.now();

},{}],"g7e5b":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("bowl.65bbced0.png") + "?" + Date.now();

},{}],"33UR7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("basket.39478654.png") + "?" + Date.now();

},{}],"2meEW":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("jam_jar.2a53aff3.png") + "?" + Date.now();

},{}],"kTey6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("pie.5f85eb95.png") + "?" + Date.now();

},{}],"bo0n6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("nectar.8935ab72.png") + "?" + Date.now();

},{}],"hXO8s":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("honey_cell.56f4adbc.png") + "?" + Date.now();

},{}],"9kkW9":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("honeycomb.ac57805a.png") + "?" + Date.now();

},{}],"ae31w":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("honey_jar.0a2a46de.png") + "?" + Date.now();

},{}],"4HVm0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("creamed_honey.9a19651a.png") + "?" + Date.now();

},{}],"g4YiO":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("honey_with_nuts.62292c97.png") + "?" + Date.now();

},{}],"9uyTZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("honey_barrel.50418266.png") + "?" + Date.now();

},{}],"hRm1b":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("propolis.ae0075a2.png") + "?" + Date.now();

},{}],"5CYjM":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("wax_piece.c7faea89.png") + "?" + Date.now();

},{}],"i5PS3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("wax_sheet.a05355b2.png") + "?" + Date.now();

},{}],"jlcyP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("wax_candle.ab60a465.png") + "?" + Date.now();

},{}],"arLzt":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("shaped_candle.fc79580a.png") + "?" + Date.now();

},{}],"luEC3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("sachet.015dc669.png") + "?" + Date.now();

},{}],"ejJo3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("candle_set.cf122b1f.png") + "?" + Date.now();

},{}],"5TqtG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STORY_DATA", ()=>STORY_DATA);
const STORY_DATA = {
    'neighbor_arc': {
        id: 'neighbor_arc',
        title: "\u0421\u043E\u0441\u0435\u0434\u0441\u043A\u0438\u0435 \u0441\u043F\u043B\u0435\u0442\u043D\u0438",
        description: "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0432\u0430\u0448\u0435\u0439 \u043D\u043E\u0432\u043E\u0439 \u0441\u043E\u0441\u0435\u0434\u043A\u043E\u0439. \u041A\u0442\u043E \u0437\u043D\u0430\u0435\u0442, \u043A \u0447\u0435\u043C\u0443 \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u044D\u0442\u043E \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E?",
        requiredLevel: 3,
        icon: new URL(require("4153d35cb6041b79")),
        chapters: {
            1: {
                title: "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0443\u0436\u0438\u043D",
                steps: [
                    {
                        type: 'dialogue',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u041E\u0439, \u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0410 \u044F \u0432\u0430\u0441 \u0438 \u043D\u0435 \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0430. \u0412\u044B, \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C, \u043D\u043E\u0432\u044B\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u044D\u0442\u043E\u0439 \u0447\u0443\u0434\u0435\u0441\u043D\u043E\u0439 \u043B\u0430\u0432\u043E\u0447\u043A\u0438? \u042F \u0432\u0430\u0448\u0430 \u0441\u043E\u0441\u0435\u0434\u043A\u0430, \u0436\u0438\u0432\u0443 \u043F\u0440\u044F\u043C\u043E \u0437\u0430 \u0443\u0433\u043B\u043E\u043C. \u0422\u0430\u043A \u043F\u0440\u0438\u044F\u0442\u043D\u043E \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F!"
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u0421\u043B\u0443\u0448\u0430\u0439\u0442\u0435, \u0430 \u0440\u0430\u0437 \u0443\u0436 \u043C\u044B \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0441\u0435\u0434\u0438, \u043C\u043E\u0436\u0435\u0442, \u043A\u0430\u043A-\u043D\u0438\u0431\u0443\u0434\u044C \u043F\u043E\u0443\u0436\u0438\u043D\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435? \u042F \u0431\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B\u0430 \u0432\u0430\u043C \u0432\u0441\u0435 \u043C\u0435\u0441\u0442\u043D\u044B\u0435 \u0441\u043F\u043B\u0435\u0442\u043D\u0438... \u0442\u043E \u0435\u0441\u0442\u044C, \u043D\u043E\u0432\u043E\u0441\u0442\u0438! \u042F \u043C\u043E\u0433\u0443 \u043F\u0440\u0438\u043D\u0435\u0441\u0442\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043A \u0447\u0430\u044E, \u0430 \u0432\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u0435\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0431\u043B\u044E\u0434\u043E?"
                    },
                    {
                        type: 'task',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u041F\u0440\u0430\u0432\u0434\u0430? \u0417\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E! \u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u0435, \u043D\u0443\u0436\u043D\u043E \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F. \u0414\u0443\u043C\u0430\u044E, 1000 \u043C\u043E\u043D\u0435\u0442 \u0445\u0432\u0430\u0442\u0438\u0442 \u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u043A\u0443 \u043B\u0443\u0447\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0434\u043B\u044F \u043D\u0430\u0448\u0435\u0433\u043E \u0443\u0436\u0438\u043D\u0430.",
                        task: {
                            type: 'spend_coins',
                            amount: 1000,
                            buttonText: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043A \u0443\u0436\u0438\u043D\u0443"
                        },
                        reward: {
                            type: 'generator',
                            key: 'bonus_chest',
                            level: 1
                        }
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438\u0441\u044C! \u042F \u0442\u0430\u043A \u0440\u0430\u0434\u0430! \u041D\u0435 \u0432\u043E\u043B\u043D\u0443\u0439\u0442\u0435\u0441\u044C, \u0441 \u043F\u0443\u0441\u0442\u044B\u043C\u0438 \u0440\u0443\u043A\u0430\u043C\u0438 \u044F \u043D\u0435 \u043F\u0440\u0438\u0434\u0443. \u0417\u0430\u0445\u0432\u0430\u0447\u0443 \u0434\u043B\u044F \u0432\u0430\u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439, \u043D\u043E \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u0435\u043A \u0432 \u0437\u043D\u0430\u043A \u043D\u0430\u0448\u0435\u0439 \u0434\u0440\u0443\u0436\u0431\u044B. \u0414\u043E \u0432\u0435\u0447\u0435\u0440\u0430!"
                    }
                ]
            },
            2: {
                title: "\u0429\u0435\u0434\u0440\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
                steps: [
                    {
                        type: 'dialogue',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u0421\u043D\u043E\u0432\u0430 \u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041D\u0430\u0448 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0443\u0436\u0438\u043D \u0431\u044B\u043B \u043F\u0440\u043E\u0441\u0442\u043E \u0432\u043E\u0441\u0445\u0438\u0442\u0438\u0442\u0435\u043B\u0435\u043D! \u0412\u044B \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u0430\u0441\u0442\u0435\u0440 \u0441\u0432\u043E\u0435\u0433\u043E \u0434\u0435\u043B\u0430."
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u0417\u043D\u0430\u0435\u0442\u0435, \u044F \u0442\u0443\u0442 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u044F\u0440\u043C\u0430\u0440\u043A\u0435 \u0432\u0438\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u0442\u0440\u044F\u0441\u0430\u044E\u0449\u0443\u044E \u0432\u0435\u0449\u044C... \u041E\u043D\u0430 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0432\u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 \u0432\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0447\u0438\u043A. \u042F \u043C\u043E\u0433\u0443 \u0435\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u044C, \u043D\u043E \u043C\u043D\u0435 \u0441\u043D\u043E\u0432\u0430 \u043D\u0443\u0436\u043D\u0430 \u0432\u0430\u0448\u0430 \u043F\u043E\u043C\u043E\u0449\u044C \u0441 \u0444\u0438\u043D\u0430\u043D\u0441\u0430\u043C\u0438."
                    },
                    {
                        type: 'task',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u042D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043E\u0438\u0442\u044C \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0434\u043E\u0440\u043E\u0436\u0435, \u043E\u043A\u043E\u043B\u043E 1250 \u043C\u043E\u043D\u0435\u0442. \u041D\u043E \u043F\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u043E\u043D\u043E \u0442\u043E\u0433\u043E \u0441\u0442\u043E\u0438\u0442! \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043A\u043E\u0435-\u0447\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0434\u043A\u043E\u0435 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0435. \u041D\u0443 \u0447\u0442\u043E, \u043F\u043E\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0442\u0430\u0440\u043E\u0439 \u0437\u043D\u0430\u043A\u043E\u043C\u043E\u0439?",
                        task: {
                            type: 'spend_coins',
                            amount: 1250,
                            buttonText: "\u041F\u043E\u043C\u043E\u0447\u044C \u0441\u043E\u0441\u0435\u0434\u043A\u0435"
                        },
                        reward: {
                            type: 'generator',
                            key: 'bonus_chest',
                            level: 2
                        }
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("4153d35cb6041b79")),
                        name: "\u0421\u043E\u0441\u0435\u0434\u043A\u0430",
                        text: "\u042F \u0437\u043D\u0430\u043B\u0430, \u0447\u0442\u043E \u043D\u0430 \u0432\u0430\u0441 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u044C\u0441\u044F! \u0412\u043E\u0442, \u0434\u0435\u0440\u0436\u0438\u0442\u0435. \u042D\u0442\u043E \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043C\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u0430. \u0423\u0432\u0435\u0440\u0435\u043D\u0430, \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0435\u043C\u0443 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435. \u041E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C, \u0435\u0441\u043B\u0438 \u0447\u0442\u043E!"
                    }
                ]
            }
        }
    },
    'gardener_arc': {
        id: 'gardener_arc',
        title: "\u0412\u0435\u0442\u0432\u044C \u0421\u0430\u0434\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
        description: "\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043D\u043E\u043C\u0443 \u0441\u0430\u0434\u043E\u0432\u043D\u0438\u043A\u0443 \u0432\u044B\u0440\u0430\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u0434\u043A\u0438\u0439 \u043A\u0443\u0441\u0442 \u0447\u0435\u0440\u043D\u043E\u0439 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B \u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432.",
        requiredLevel: 5,
        icon: new URL(require("e34f6adb7208c0cd")),
        chapters: {
            1: {
                title: "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u0430\u0434\u043E\u0432\u043D\u0438\u043A\u0430",
                steps: [
                    {
                        type: 'dialogue',
                        character: new URL(require("e34f6adb7208c0cd")),
                        name: "\u0421\u0430\u0434\u043E\u0432\u043D\u0438\u043A",
                        text: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E, \u043A\u043E\u043B\u043B\u0435\u0433\u0430! \u042F \u0432\u0438\u0436\u0443, \u0443 \u0442\u0435\u0431\u044F \u0442\u0443\u0442 \u0441\u0432\u043E\u044F \u043B\u0430\u0432\u043E\u0447\u043A\u0430. \u0410 \u044F \u0432\u043E\u0442 \u0437\u043D\u0430\u044E \u0441\u043F\u043E\u0441\u043E\u0431, \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0442\u0432\u043E\u0439... \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442. \u0418 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A, \u0441\u0430\u043C\u043E \u0441\u043E\u0431\u043E\u0439."
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("e34f6adb7208c0cd")),
                        name: "\u0421\u0430\u0434\u043E\u0432\u043D\u0438\u043A",
                        text: "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0441\u0435\u043C\u0435\u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0447\u0435\u043D\u044C \u0440\u0435\u0434\u043A\u043E\u0433\u043E \u043A\u0443\u0441\u0442\u0430 \u2014 \u0447\u0435\u0440\u043D\u043E\u0439 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B. \u041E\u043D \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439, \u043D\u043E \u0438 \u043F\u043B\u043E\u0434\u043E\u043D\u043E\u0441\u0438\u0442! \u041F\u0440\u0430\u0432\u0434\u0430, \u0447\u0442\u043E\u0431\u044B \u0435\u0433\u043E \u0432\u044B\u0440\u0430\u0441\u0442\u0438\u0442\u044C \u0434\u043E \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F, \u043D\u0443\u0436\u043D\u044B \u043E\u0441\u043E\u0431\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438, \u0441\u043A\u0430\u0436\u0435\u043C \u0442\u0430\u043A, \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438."
                    },
                    {
                        type: 'task',
                        character: new URL(require("e34f6adb7208c0cd")),
                        name: "\u0421\u0430\u0434\u043E\u0432\u043D\u0438\u043A",
                        text: "\u0415\u0441\u043B\u0438 \u0432\u043B\u043E\u0436\u0438\u0448\u044C 875 \u043C\u043E\u043D\u0435\u0442 \u0432 \u043D\u0430\u0448\u0435 \u043E\u0431\u0449\u0435\u0435 \u0434\u0435\u043B\u043E, \u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u044E \u0434\u043B\u044F \u0442\u0435\u0431\u044F \u0441\u0430\u0436\u0435\u043D\u0435\u0446 \u0447\u0435\u0440\u043D\u043E\u0439 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B\u0440\u0430\u0441\u0442\u0435\u0442 \u0432 \u043F\u043B\u043E\u0434\u043E\u043D\u043E\u0441\u044F\u0449\u0438\u0439 \u043A\u0443\u0441\u0442. \u0421 \u043D\u0435\u0433\u043E \u0438 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0442\u0432\u043E\u0439 \u043D\u043E\u0432\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441!",
                        task: {
                            type: 'spend_coins',
                            amount: 875,
                            buttonText: "\u0412\u043B\u043E\u0436\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u0430\u0436\u0435\u043D\u0435\u0446 \u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u044B"
                        },
                        reward: {
                            type: 'generator',
                            key: 'currant',
                            level: 1
                        }
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("e34f6adb7208c0cd")),
                        name: "\u0421\u0430\u0434\u043E\u0432\u043D\u0438\u043A",
                        text: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440! \u0412\u043E\u0442, \u0434\u0435\u0440\u0436\u0438. \u042D\u0442\u043E \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u0443\u0441\u0442, \u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u044F\u0433\u043E\u0434! \u0423\u0445\u0430\u0436\u0438\u0432\u0430\u0439 \u0437\u0430 \u043D\u0438\u043C, \u0438 \u043E\u043D \u043F\u0440\u0438\u043D\u0435\u0441\u0435\u0442 \u0442\u0435\u0431\u0435 \u043D\u0435\u043C\u0430\u043B\u043E \u0432\u044B\u0433\u043E\u0434\u044B. \u0423\u0434\u0430\u0447\u0438 \u0432 \u043D\u043E\u0432\u043E\u043C \u043D\u0430\u0447\u0438\u043D\u0430\u043D\u0438\u0438!"
                    }
                ]
            }
        }
    },
    'beekeeper_arc': {
        id: 'beekeeper_arc',
        title: "\u0412\u0435\u0442\u043A\u0430 \u041F\u0447\u0435\u043B\u043E\u0432\u043E\u0434\u0430",
        description: "\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u0441\u0442\u0430\u0440\u043E\u043C\u0443 \u043F\u0447\u0435\u043B\u043E\u0432\u043E\u0434\u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043F\u0430\u0441\u0435\u043A\u0443 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0432 \u043D\u0430\u0433\u0440\u0430\u0434\u0443 \u0441\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0443\u043B\u0435\u0439.",
        requiredLevel: 8,
        icon: new URL(require("c437754356a678c9")),
        chapters: {
            1: {
                title: "\u0421\u043B\u0430\u0434\u043A\u043E\u0435 \u0434\u0435\u043B\u043E",
                steps: [
                    {
                        type: 'dialogue',
                        character: new URL(require("c437754356a678c9")),
                        name: "\u041F\u0447\u0435\u043B\u043E\u0432\u043E\u0434",
                        text: "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C! \u042F \u0432\u0438\u0436\u0443, \u0443 \u0432\u0430\u0441 \u0442\u0443\u0442 \u043F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u044E\u0449\u0438\u0439 \u0431\u0438\u0437\u043D\u0435\u0441. \u0410 \u044F \u0432\u043E\u0442 \u0432\u0441\u044E \u0436\u0438\u0437\u043D\u044C \u043F\u0447\u0451\u043B\u0430\u043C\u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C. \u0414\u0443\u0448\u0430 \u043F\u043E\u0451\u0442, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u0436\u0443\u0436\u0436\u0430\u0442."
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("c437754356a678c9")),
                        name: "\u041F\u0447\u0435\u043B\u043E\u0432\u043E\u0434",
                        text: "\u0425\u043E\u0447\u0443 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u043F\u0430\u0441\u0435\u043A\u0443, \u0434\u0430 \u0432\u043E\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u043A\u0443 \u043D\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0445\u043E\u0440\u043E\u0448\u0435\u0439 \u043C\u0430\u0442\u043A\u0438. \u041D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043B\u0438 \u0441\u0442\u0430\u0442\u044C \u043C\u043E\u0438\u043C \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u043C \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0430\u0434\u043A\u043E\u043C \u0434\u0435\u043B\u0435?"
                    },
                    {
                        type: 'task',
                        character: new URL(require("c437754356a678c9")),
                        name: "\u041F\u0447\u0435\u043B\u043E\u0432\u043E\u0434",
                        text: "\u041D\u0443\u0436\u043D\u043E \u0432\u0441\u0435\u0433\u043E 2000 \u043C\u043E\u043D\u0435\u0442. \u0417\u0430 \u044D\u0442\u043E \u044F \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0430\u0441\u0435\u043A\u0443 \u0440\u0430\u0441\u0448\u0438\u0440\u044E, \u043D\u043E \u0438 \u0432\u0430\u043C \u043E\u0434\u0438\u043D \u0438\u0437 \u0441\u0432\u043E\u0438\u0445 \u043B\u0443\u0447\u0448\u0438\u0445 \u0443\u043B\u044C\u0435\u0432 \u043E\u0442\u0434\u0430\u043C. \u041E\u043D \u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0430\u043C \u0438 \u043C\u0451\u0434, \u0438 \u0432\u043E\u0441\u043A. \u0427\u0442\u043E \u0441\u043A\u0430\u0436\u0435\u0442\u0435?",
                        task: {
                            type: 'spend_coins',
                            amount: 2000,
                            buttonText: "\u0412\u043B\u043E\u0436\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u0430\u0441\u0435\u043A\u0443"
                        },
                        reward: {
                            type: 'generator',
                            key: 'beehive',
                            level: 1
                        }
                    },
                    {
                        type: 'dialogue',
                        character: new URL(require("c437754356a678c9")),
                        name: "\u041F\u0447\u0435\u043B\u043E\u0432\u043E\u0434",
                        text: "\u0412\u043E\u0442 \u044D\u0442\u043E \u043F\u043E-\u043D\u0430\u0448\u0435\u043C\u0443! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C! \u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u043E\u0431\u0435\u0449\u0430\u043D\u043D\u044B\u0439 \u0443\u043B\u0435\u0439. \u0423\u0445\u0430\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0437\u0430 \u043D\u0438\u043C, \u0438 \u043E\u043D \u0432\u0430\u0441 \u0449\u0435\u0434\u0440\u043E \u043E\u0442\u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u0442. \u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u0435\u0442\u0435 \u0436\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B \u043D\u0430 \u043C\u0451\u0434 \u0438 \u0441\u0432\u0435\u0447\u0438!"
                    }
                ]
            }
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","4153d35cb6041b79":"eUYfj","e34f6adb7208c0cd":"8xlQr","c437754356a678c9":"hXh2g"}],"eUYfj":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("neighbor.ce8c5ecf.png") + "?" + Date.now();

},{}],"8xlQr":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gardener.bf7c7234.png") + "?" + Date.now();

},{}],"hXh2g":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("beekeeper.affcc068.png") + "?" + Date.now();

},{}],"9b3Vp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameState", ()=>gameState);
parcelHelpers.export(exports, "gameSettings", ()=>gameSettings);
parcelHelpers.export(exports, "playerProfile", ()=>playerProfile);
const gameState = {
    gridData: [],
    score: 0,
    coins: 0,
    energy: 100,
    orders: [],
    orderIdCounter: 1,
    lockedCells: [],
    newlyUnlockedCategories: [],
    activeCategories: [],
    rewardQueue: [],
    unlockedItemGenCategories: [],
    lockedCategories: [],
    discoveredItems: {},
    claimedAchievements: {},
    claimedCollectionBonuses: {},
    dragState: {
        element: null,
        startIndex: null,
        isMoved: false,
        isDragging: false,
        startX: 0,
        startY: 0
    },
    lastClick: {
        index: null
    },
    storyState: {
        unlocked: false,
        activeStoryId: null,
        progress: {}
    }
};
const gameSettings = {
    musicVolume: 0.2,
    sfxVolume: 0.5,
    theme: 'light',
    hapticsEnabled: true
};
const playerProfile = {
    name: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    icon: 'assets/icons/profile.png',
    startDate: Date.now(),
    timePlayed: 0,
    totalMerges: 0,
    totalOrdersCompleted: 0,
    totalCoinsEarned: 0,
    totalEnergySpent: 0,
    mergeCounts: {}
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iyifM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMElements", ()=>DOMElements);
const DOMElements = {
    grid: document.getElementById('grid'),
    startScreen: document.getElementById('start-screen-overlay'),
    toastContainer: document.getElementById('toast-container'),
    infoModal: {
        overlay: document.getElementById('info-modal'),
        closeBtn: document.querySelector('#info-modal .modal-close'),
        icon: document.getElementById('m-icon'),
        title: document.getElementById('m-title'),
        subtitle: document.getElementById('m-subtitle'),
        desc: document.getElementById('m-desc'),
        actionBtn: document.getElementById('m-action-btn'),
        dangerGroup: document.getElementById('m-danger-group'),
        confirmBtn: document.getElementById('m-confirm-btn'),
        cancelBtn: document.querySelector('#m-danger-group .modal-btn-cancel'),
        infoBtn: document.getElementById('m-info-btn')
    },
    detailModal: {
        overlay: document.getElementById('detail-modal'),
        closeBtn: document.getElementById('d-m-close'),
        icon: document.getElementById('d-m-icon'),
        title: document.getElementById('d-m-title'),
        body: document.getElementById('d-m-body'),
        desc: document.getElementById('d-m-desc'),
        extraContent: document.getElementById('d-m-extra-content')
    },
    menuModal: {
        overlay: document.getElementById('menu-modal'),
        closeBtn: document.querySelector('#menu-modal .modal-close'),
        resetBtn: document.getElementById('reset-game-btn'),
        collectionBtn: document.getElementById('collection-btn'),
        settingsBtn: document.getElementById('settings-btn'),
        profileBtn: document.getElementById('profile-btn'),
        achievementsBtn: document.getElementById('achievements-btn'),
        collectionNotificationDot: document.getElementById('collection-notification-dot'),
        achievementsNotificationDot: document.getElementById('achievements-notification-dot'),
        storyBtn: document.getElementById('story-btn'),
        storyNotificationDot: document.getElementById('story-notification-dot'),
        tutorialBtn: document.getElementById('tutorial-btn')
    },
    levelUpModal: {
        overlay: document.getElementById('level-up-modal-overlay'),
        body: document.getElementById('level-up-modal-body')
    },
    settingsModal: {
        overlay: document.getElementById('settings-modal'),
        closeBtn: document.getElementById('s-m-close'),
        body: document.getElementById('s-m-body')
    },
    profileModal: {
        overlay: document.getElementById('profile-modal'),
        closeBtn: document.getElementById('p-m-close'),
        icon: document.getElementById('p-m-icon'),
        title: document.getElementById('p-m-title'),
        body: document.getElementById('p-m-body')
    },
    achievementsModal: {
        overlay: document.getElementById('achievements-modal'),
        closeBtn: document.getElementById('ach-m-close'),
        body: document.getElementById('ach-m-body')
    },
    collectionModal: {
        overlay: document.getElementById('collection-modal'),
        closeBtn: document.getElementById('c-m-close'),
        body: document.getElementById('c-m-body'),
        footer: document.getElementById('c-m-footer')
    },
    level: {
        bar: document.getElementById('level-bar'),
        text: document.getElementById('player-level'),
        score: document.getElementById('score-text'),
        container: document.querySelector('.level-container')
    },
    energy: {
        value: document.getElementById('energy-val'),
        container: document.querySelector('.energy-container')
    },
    coins: {
        value: document.getElementById('coins-val'),
        container: document.querySelector('.coins-container')
    },
    menuBtn: document.querySelector('.menu-btn'),
    menuNotificationDot: document.getElementById('menu-notification-dot'),
    ordersList: document.getElementById('orders-list'),
    rewardQueuePanel: document.getElementById('reward-queue-panel'),
    bgMusic: document.getElementById('bg-music'),
    sfxMerge: document.getElementById('sfx-merge'),
    sfxMergeLevels: {
        2: document.getElementById('sfx-merge-lvl2'),
        3: document.getElementById('sfx-merge-lvl3'),
        4: document.getElementById('sfx-merge-lvl4'),
        5: document.getElementById('sfx-merge-lvl5'),
        6: document.getElementById('sfx-merge-lvl6'),
        7: document.getElementById('sfx-merge-lvl7')
    },
    sfxSwap: document.getElementById('sfx-swap'),
    sfxSpawn: document.getElementById('sfx-spawn'),
    sfxClaimReward: document.getElementById('sfx-claim-reward'),
    sfxLevelUp: document.getElementById('sfx-level-up'),
    sfxGeneratorSpawn: document.getElementById('sfx-generator-spawn'),
    sfxOrderComplete: document.getElementById('sfx-order-complete'),
    sfxCoin: document.getElementById('sfx-coin'),
    sfxDragStart: document.getElementById('sfx-drag-start'),
    sfxOrderReady: document.getElementById('sfx-order-ready'),
    sfxFly: document.getElementById('sfx-fly'),
    // Добавьте новый объект для модального окна сюжета
    storyModal: {
        overlay: document.getElementById('story-modal'),
        closeBtn: document.getElementById('st-m-close'),
        title: document.getElementById('st-m-title'),
        body: document.getElementById('st-m-body'),
        actions: document.getElementById('st-m-actions')
    },
    tutorialModal: {
        overlay: document.getElementById('tutorial-modal'),
        body: document.getElementById('tut-m-body'),
        closeBtn: document.getElementById('tut-m-close'),
        confirmBtn: document.getElementById('tutorial-close-btn')
    },
    storySelectionModal: {
        overlay: document.getElementById('story-selection-modal'),
        closeBtn: document.getElementById('story-selection-close'),
        body: document.getElementById('story-selection-body')
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5tF51":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addListeners", ()=>addListeners);
parcelHelpers.export(exports, "cleanDragState", ()=>cleanDragState);
var _domJs = require("./dom.js");
var _stateJs = require("./state.js");
var _configJs = require("./config.js");
var _gameManagerJs = require("./gameManager.js");
var _assetUrlsJs = require("./data/assetUrls.js");
var _modalsJs = require("./modals.js");
var _gameLogicJs = require("./gameLogic.js");
var _hapticsJs = require("./haptics.js");
var _audioJs = require("./audio.js");
var _uiJs = require("./ui.js");
let dragStartAttached = false;
function addListeners() {
    (0, _domJs.DOMElements).startScreen.addEventListener('click', (0, _gameManagerJs.startGameAndAudio), {
        once: true
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('blur', cleanDragState);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, {
        passive: false
    });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchCancel);
    window.addEventListener('beforeunload', ()=>{
        localStorage.setItem((0, _configJs.CONFIG).LAST_LOGIN_KEY, Date.now());
        (0, _gameManagerJs.saveGame)();
    });
    document.addEventListener('visibilitychange', ()=>{
        if (document.hidden) {
            (0, _gameManagerJs.saveGame)();
            (0, _domJs.DOMElements).bgMusic.pause();
        } else if ((0, _stateJs.gameSettings).musicVolume > 0) (0, _domJs.DOMElements).bgMusic.play().catch(()=>{});
    });
    (0, _domJs.DOMElements).energy.container.addEventListener('click', ()=>{
        const modalOptions = {
            icon: (0, _assetUrlsJs.energyIconUrl),
            title: "\u042D\u043D\u0435\u0440\u0433\u0438\u044F",
            subtitle: "\u0412\u0435\u0447\u043D\u044B\u0439 \u0434\u0432\u0438\u0436\u0438\u0442\u0435\u043B\u044C",
            desc: `\u{417}\u{430} \u{43A}\u{430}\u{436}\u{434}\u{43E}\u{435} \u{438}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{430} \u{442}\u{440}\u{430}\u{442}\u{438}\u{442}\u{441}\u{44F} 1 \u{435}\u{434}. \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438}. \u{41A}\u{430}\u{436}\u{434}\u{44B}\u{435} ${(0, _configJs.CONFIG).ENERGY_REGEN_INTERVAL / 1000} \u{441}\u{435}\u{43A}. \u{432}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{430}\u{432}\u{43B}\u{438}\u{432}\u{430}\u{435}\u{442}\u{441}\u{44F} ${(0, _configJs.CONFIG).ENERGY_REGEN_AMOUNT} \u{435}\u{434}. \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438}. \u{417}\u{430} \u{43A}\u{430}\u{436}\u{434}\u{44B}\u{439} \u{432}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43D}\u{44B}\u{439} \u{441}\u{44E}\u{436}\u{435}\u{442}\u{43D}\u{44B}\u{439} \u{437}\u{430}\u{43A}\u{430}\u{437} \u{432}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{430}\u{435}\u{442}\u{435} ${(0, _configJs.CONFIG).STORY_ORDER_ENERGY_REWARD} \u{435}\u{434}. \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438}.`
        };
        if ((0, _stateJs.gameState).energy < (0, _configJs.CONFIG).MAX_ENERGY) modalOptions.actionButton = {
            text: `\u{412}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{44C} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44E} (-${(0, _configJs.CONFIG).ENERGY_RECHARGE_COST_COINS}<img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">)`,
            onClick: (0, _gameLogicJs.rechargePlayerEnergyWithCoins)
        };
        (0, _modalsJs.showModal)(modalOptions);
    });
    (0, _domJs.DOMElements).level.container.addEventListener('click', ()=>(0, _modalsJs.showModal)({
            icon: (0, _assetUrlsJs.levelIconUrl),
            title: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C",
            subtitle: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
            desc: "\u0417\u0430 \u0441\u0434\u0430\u0447\u0443 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0432\u044B\u0434\u0430\u044E\u0442\u0441\u044F \u043E\u0447\u043A\u0438. \u0427\u0435\u043C \u0441\u043B\u043E\u0436\u043D\u0435\u0435 \u0437\u0430\u043A\u0430\u0437, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F. \u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u0447\u043A\u043E\u0432, \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442\u0441\u044F."
        }));
    (0, _domJs.DOMElements).coins.container.addEventListener('click', ()=>(0, _modalsJs.showModal)({
            icon: (0, _assetUrlsJs.coinIconUrl),
            title: "\u041C\u043E\u043D\u0435\u0442\u044B",
            subtitle: "\u0418\u0433\u0440\u043E\u0432\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430",
            desc: `\u{41C}\u{43E}\u{43D}\u{435}\u{442}\u{44B} \u{437}\u{430}\u{440}\u{430}\u{431}\u{430}\u{442}\u{44B}\u{432}\u{430}\u{44E}\u{442}\u{441}\u{44F} \u{437}\u{430} \u{432}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{438}\u{435} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{43E}\u{432}.`
        }));
    (0, _domJs.DOMElements).infoModal.closeBtn.addEventListener('click', (0, _modalsJs.closeModal));
    (0, _domJs.DOMElements).infoModal.cancelBtn.addEventListener('click', (0, _modalsJs.closeModal));
    (0, _domJs.DOMElements).menuBtn.addEventListener('click', (0, _modalsJs.openMenuModal));
    (0, _domJs.DOMElements).menuModal.closeBtn.addEventListener('click', (0, _modalsJs.closeMenuModal));
    (0, _domJs.DOMElements).menuModal.resetBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.confirmReset)();
    });
    (0, _domJs.DOMElements).menuModal.collectionBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.showCollectionModal)();
    });
    (0, _domJs.DOMElements).menuModal.profileBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.openProfileModal)();
    });
    (0, _domJs.DOMElements).menuModal.achievementsBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.openAchievementsModal)();
    });
    (0, _domJs.DOMElements).menuModal.storyBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.openStorySelectionModal)();
    });
    (0, _domJs.DOMElements).menuModal.settingsBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.openSettingsModal)();
    });
    (0, _domJs.DOMElements).menuModal.tutorialBtn.addEventListener('click', ()=>{
        (0, _modalsJs.closeMenuModal)();
        (0, _modalsJs.openTutorialModal)();
    });
    (0, _domJs.DOMElements).profileModal.closeBtn.addEventListener('click', (0, _modalsJs.closeProfileModal));
    (0, _domJs.DOMElements).detailModal.closeBtn.addEventListener('click', (0, _modalsJs.closeDetailModal));
    (0, _domJs.DOMElements).achievementsModal.closeBtn.addEventListener('click', (0, _modalsJs.closeAchievementsModal));
    (0, _domJs.DOMElements).collectionModal.closeBtn.addEventListener('click', (0, _modalsJs.closeCollectionModal));
    (0, _domJs.DOMElements).storySelectionModal.closeBtn.addEventListener('click', (0, _modalsJs.closeStorySelectionModal));
    (0, _domJs.DOMElements).settingsModal.closeBtn.addEventListener('click', (0, _modalsJs.closeSettingsModal));
    (0, _domJs.DOMElements).storyModal.closeBtn.addEventListener('click', (0, _modalsJs.closeStoryModal));
    (0, _domJs.DOMElements).tutorialModal.closeBtn.addEventListener('click', (0, _modalsJs.closeTutorialModal));
    (0, _domJs.DOMElements).tutorialModal.confirmBtn.addEventListener('click', (0, _modalsJs.closeTutorialModal));
    (0, _domJs.DOMElements).tutorialModal.overlay.addEventListener('click', (e)=>{
        if (e.target === (0, _domJs.DOMElements).tutorialModal.overlay) (0, _modalsJs.closeTutorialModal)();
    });
    (0, _domJs.DOMElements).storySelectionModal.body.addEventListener('click', (e)=>{
        const card = e.target.closest('.story-selection-card');
        if (card) {
            const storyId = card.dataset.storyId;
            (0, _stateJs.gameState).storyState.activeStoryId = storyId;
            // Инициализируем прогресс, если его еще нет
            if (!(0, _stateJs.gameState).storyState.progress[storyId]) (0, _stateJs.gameState).storyState.progress[storyId] = {
                currentChapter: 1,
                currentStep: 0,
                completed: false
            };
            (0, _modalsJs.closeStorySelectionModal)();
            (0, _modalsJs.openStoryModal)();
        }
    });
    (0, _domJs.DOMElements).storyModal.actions.addEventListener('click', (e)=>{
        const button = e.target.closest('button');
        if (button && (button.id === 'story-continue-btn' || button.id === 'story-task-btn')) (0, _gameLogicJs.advanceStoryStep)(true);
    });
    (0, _domJs.DOMElements).collectionModal.body.addEventListener('click', (e)=>{
        const claimButton = e.target.closest('[data-action="claim-bonus"]');
        if (claimButton) {
            const { category, level } = claimButton.dataset;
            (0, _gameLogicJs.claimItemBonus)(category, parseInt(level, 10), claimButton);
        }
    });
    (0, _domJs.DOMElements).achievementsModal.body.addEventListener('click', (e)=>{
        const claimButton = e.target.closest('[data-action="claim-achievement"]');
        if (claimButton) {
            const { id, index } = claimButton.dataset;
            (0, _gameLogicJs.claimAchievementReward)(id, parseInt(index, 10), claimButton);
        }
    });
    (0, _domJs.DOMElements).rewardQueuePanel.addEventListener('click', (e)=>{
        const claimButton = e.target.closest('[data-action="claim-reward"]');
        if (claimButton) (0, _gameLogicJs.claimReward)(parseInt(claimButton.dataset.index, 10), claimButton);
    });
    (0, _domJs.DOMElements).ordersList.addEventListener('click', (e)=>{
        const target = e.target;
        const card = target.closest('.order-card');
        if (!card) return;
        const orderId = parseInt(card.dataset.orderId);
        if (isNaN(orderId)) return;
        const orderItemTarget = target.closest('.order-target');
        if (target.closest('.cancel-btn')) (0, _modalsJs.confirmCancelOrder)(orderId);
        else if (target.closest('.complete-btn')) (0, _gameLogicJs.completeOrder)(orderId);
        else if (target.closest('.order-avatar-container')) (0, _modalsJs.showCharacterById)(orderId);
        else if (orderItemTarget) {
            const category = orderItemTarget.dataset.category;
            const icon = orderItemTarget.querySelector('.order-item-icon img')?.src;
            if (category) (0, _modalsJs.showCategoryProgressionModal)(category, icon);
        }
    });
    if (!dragStartAttached) {
        (0, _domJs.DOMElements).grid.addEventListener('mousedown', (e)=>{
            const cell = e.target.closest('.cell');
            if (cell) {
                e.preventDefault();
                startDrag(e, parseInt(cell.dataset.index));
            }
        });
        (0, _domJs.DOMElements).grid.addEventListener('touchstart', (e)=>{
            const cell = e.target.closest('.cell');
            if (cell) {
                e.preventDefault();
                startDrag(e, parseInt(cell.dataset.index));
            }
        }, {
            passive: false
        });
        dragStartAttached = true;
    }
}
function startDrag(e, index) {
    if ((0, _stateJs.gameState).lockedCells.includes(index) || !(0, _stateJs.gameState).gridData[index] || (0, _stateJs.gameState).dragState.isDragging) return;
    _hapticsJs.hapticLight();
    (0, _stateJs.gameState).dragState.isDragging = true; // Блокировка
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    (0, _stateJs.gameState).dragState.startIndex = index;
    (0, _stateJs.gameState).dragState.isMoved = false;
    (0, _stateJs.gameState).dragState.startX = clientX;
    (0, _stateJs.gameState).dragState.startY = clientY;
}
function handleDragMove(clientX, clientY) {
    const { startIndex, isMoved, startX, startY } = (0, _stateJs.gameState).dragState;
    if (startIndex === null) return;
    if (!isMoved && (Math.abs(clientX - startX) > (0, _configJs.CONFIG).DRAG_THRESHOLD || Math.abs(clientY - startY) > (0, _configJs.CONFIG).DRAG_THRESHOLD)) {
        (0, _stateJs.gameState).dragState.isMoved = true;
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxDragStart);
        document.body.classList.add('is-dragging');
        if (!(0, _stateJs.gameState).dragState.element) {
            // Запрещаем перетаскивание заблокированных предметов
            if ((0, _stateJs.gameState).gridData[startIndex] && (0, _stateJs.gameState).gridData[startIndex].isBlocked) {
                cleanDragState();
                return;
            }
            // Создаем "призрак" только при реальном начале перетаскивания (когда курсор сдвинулся)
            const cells = document.querySelectorAll('.cell');
            const targetCell = cells[startIndex];
            const originalWrapper = targetCell.querySelector('.item-wrapper');
            if (!originalWrapper) {
                (0, _stateJs.gameState).dragState.isDragging = false;
                return;
            }
            (0, _stateJs.gameState).dragState.element = originalWrapper.cloneNode(true);
            (0, _stateJs.gameState).dragState.element.classList.add('dragging');
            const rect = originalWrapper.getBoundingClientRect();
            (0, _stateJs.gameState).dragState.element.style.left = `${rect.left}px`;
            (0, _stateJs.gameState).dragState.element.style.top = `${rect.top}px`;
            document.body.appendChild((0, _stateJs.gameState).dragState.element);
            originalWrapper.style.opacity = '0';
        }
    }
    if ((0, _stateJs.gameState).dragState.element) {
        (0, _stateJs.gameState).dragState.element.style.left = `${clientX - 27}px`;
        (0, _stateJs.gameState).dragState.element.style.top = `${clientY - 27}px`;
    }
}
function handleMouseMove(e) {
    if (!(0, _stateJs.gameState).dragState.isDragging) return;
    handleDragMove(e.clientX, e.clientY);
}
function handleTouchMove(e) {
    handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
}
function handleMouseLeave() {
    // Если мышь покидает окно во время перетаскивания, отменяем его,
    // чтобы избежать "залипания" предмета, если mouseup произойдет вне окна.
    if ((0, _stateJs.gameState).dragState.isDragging) endDrag(-1, -1);
}
function handleMouseUp(e) {
    if ((0, _stateJs.gameState).dragState.startIndex === null) return;
    endDrag(e.clientX, e.clientY);
}
function handleTouchEnd(e) {
    if ((0, _stateJs.gameState).dragState.startIndex === null) return;
    const changedTouch = e.changedTouches[0];
    endDrag(changedTouch.clientX, changedTouch.clientY);
}
function handleTouchCancel() {
    // Событие touchcancel может произойти, если палец уходит за пределы экрана.
    // Отменяем перетаскивание, чтобы избежать "залипания".
    if ((0, _stateJs.gameState).dragState.isDragging) endDrag(-1, -1);
}
function endDrag(clientX, clientY) {
    const { element, isMoved, startIndex } = (0, _stateJs.gameState).dragState;
    // Если это был клик, а не перетаскивание
    if (!isMoved) {
        handleCellClick(startIndex);
        cleanDragState();
        return;
    }
    // Если это было перетаскивание, но что-то пошло не так (нет "призрака")
    if (!element) {
        cleanDragState();
        return;
    }
    const elementUnder = document.elementFromPoint(clientX, clientY);
    const targetCell = elementUnder ? elementUnder.closest('.cell') : null;
    const dragTargetIndex = targetCell ? parseInt(targetCell.dataset.index) : -1;
    // Условие для невалидного броска: за пределы поля, на себя, на временно заблокированную ячейку,
    // или на ячейку, с которой невозможно действие (слияние или обмен).
    const isInvalidDrop = !targetCell || startIndex === dragTargetIndex || (0, _stateJs.gameState).lockedCells.includes(dragTargetIndex) || !(0, _gameLogicJs.isActionPossible)(startIndex, dragTargetIndex);
    if (isInvalidDrop) {
        _hapticsJs.hapticError();
        // Анимируем "призрак" обратно на исходную позицию
        const originalCell = (0, _domJs.DOMElements).grid.children[startIndex];
        const rect = originalCell.getBoundingClientRect();
        element.classList.add('returning');
        element.style.left = `${rect.left}px`;
        element.style.top = `${rect.top}px`;
        element.style.transform = 'scale(1)';
        // После анимации очищаем состояние. Это перерисует поле и вернет видимость исходному предмету.
        setTimeout(()=>{
            cleanDragState(true); // Перерисовать, чтобы восстановить opacity
        }, 200); // Должно совпадать с длительностью transition в CSS
        return;
    }
    // Валидный бросок: анимируем "призрак" в целевую ячейку
    const targetRect = targetCell.getBoundingClientRect();
    element.classList.add('dropping');
    element.style.left = `${targetRect.left}px`;
    element.style.top = `${targetRect.top}px`;
    element.style.transform = 'scale(1)';
    // После анимации выполняем логику игры и очищаем состояние
    setTimeout(()=>{
        (0, _gameLogicJs.executeMergeOrSwap)(startIndex, dragTargetIndex); // Эта функция вызывает updateUI() -> renderGrid()
        cleanDragState(false); // Очищаем состояние перетаскивания без лишней перерисовки
    }, 150); // Должно совпадать с длительностью transition в CSS
}
function cleanDragState(shouldRender = true) {
    document.body.classList.remove('is-dragging');
    (0, _stateJs.gameState).dragState.isDragging = false;
    if ((0, _stateJs.gameState).dragState.element) {
        (0, _stateJs.gameState).dragState.element.remove();
        (0, _stateJs.gameState).dragState.element = null;
    }
    (0, _stateJs.gameState).dragState.startIndex = null;
    (0, _stateJs.gameState).dragState.isMoved = false;
    if (shouldRender) (0, _uiJs.renderGrid)(); // Принудительный рендер восстановит все opacity
}
function handleCellClick(index) {
    const item = (0, _stateJs.gameState).gridData[index];
    if (!item) return;
    if (item.isGenerator) {
        // Логика двойного клика для генераторов
        if ((0, _stateJs.gameState).lastClick.index === index) {
            (0, _modalsJs.closeModal)();
            (0, _gameLogicJs.triggerGenerator)(item, index);
        } else {
            (0, _modalsJs.showItemInfoModal)(item, index);
            (0, _stateJs.gameState).lastClick = {
                index: index
            };
        }
    } else if (item.isItemGenerator) {
        if ((0, _stateJs.gameState).lastClick.index === index) {
            (0, _modalsJs.closeModal)();
            (0, _gameLogicJs.triggerItemGenerator)(item, index);
        } else {
            (0, _modalsJs.showItemInfoModal)(item, index);
            (0, _stateJs.gameState).lastClick = {
                index: index
            };
        }
    } else {
        // Одиночный клик для любого другого предмета показывает информацию
        (0, _modalsJs.showItemInfoModal)(item, index);
        (0, _stateJs.gameState).lastClick = {
            index: null
        }; // Сбрасываем состояние двойного клика
    }
}

},{"./dom.js":"iyifM","./state.js":"9b3Vp","./config.js":"itWAF","./gameManager.js":"CQNle","./modals.js":"6Bu0H","./gameLogic.js":"6oSsV","./haptics.js":"4SzyB","./audio.js":"bUGZ1","./ui.js":"3OQ5l","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./data/assetUrls.js":"4MPQh"}],"6Bu0H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openStorySelectionModal", ()=>openStorySelectionModal);
parcelHelpers.export(exports, "closeStorySelectionModal", ()=>closeStorySelectionModal);
parcelHelpers.export(exports, "openStoryModal", ()=>openStoryModal);
parcelHelpers.export(exports, "closeStoryModal", ()=>closeStoryModal);
parcelHelpers.export(exports, "openTutorialModal", ()=>openTutorialModal);
parcelHelpers.export(exports, "closeTutorialModal", ()=>closeTutorialModal);
parcelHelpers.export(exports, "showModal", ()=>showModal);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
parcelHelpers.export(exports, "openMenuModal", ()=>openMenuModal);
parcelHelpers.export(exports, "closeMenuModal", ()=>closeMenuModal);
parcelHelpers.export(exports, "openProfileModal", ()=>openProfileModal);
parcelHelpers.export(exports, "closeProfileModal", ()=>closeProfileModal);
parcelHelpers.export(exports, "openAchievementsModal", ()=>openAchievementsModal);
parcelHelpers.export(exports, "closeAchievementsModal", ()=>closeAchievementsModal);
parcelHelpers.export(exports, "openSettingsModal", ()=>openSettingsModal);
parcelHelpers.export(exports, "closeSettingsModal", ()=>closeSettingsModal);
parcelHelpers.export(exports, "showCollectionModal", ()=>showCollectionModal);
parcelHelpers.export(exports, "closeCollectionModal", ()=>closeCollectionModal);
parcelHelpers.export(exports, "closeDetailModal", ()=>closeDetailModal);
parcelHelpers.export(exports, "openLevelUpModal", ()=>openLevelUpModal);
parcelHelpers.export(exports, "closeLevelUpModal", ()=>closeLevelUpModal);
parcelHelpers.export(exports, "confirmReset", ()=>confirmReset);
parcelHelpers.export(exports, "confirmCancelOrder", ()=>confirmCancelOrder);
parcelHelpers.export(exports, "showCharacterById", ()=>showCharacterById);
parcelHelpers.export(exports, "showCharacterModal", ()=>showCharacterModal);
parcelHelpers.export(exports, "showItemInfoModal", ()=>showItemInfoModal);
parcelHelpers.export(exports, "showCategoryProgressionModal", ()=>showCategoryProgressionModal);
parcelHelpers.export(exports, "showGeneratorDetailModal", ()=>showGeneratorDetailModal);
parcelHelpers.export(exports, "showItemDetailModal", ()=>showItemDetailModal);
parcelHelpers.export(exports, "showGeneratorPartDetailModal", ()=>showGeneratorPartDetailModal);
var _domJs = require("./dom.js");
var _stateJs = require("./state.js");
var _configJs = require("./config.js");
var _assetUrlsJs = require("./data/assetUrls.js");
var _gameLogicJs = require("./gameLogic.js");
var _uiJs = require("./ui.js");
var _gameManagerJs = require("./gameManager.js");
function openStorySelectionModal() {
    if (!(0, _stateJs.gameState).storyState.unlocked) {
        (0, _uiJs.showToast)("\u0421\u044E\u0436\u0435\u0442 \u043F\u043E\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D.", "error");
        return;
    }
    const modal = (0, _domJs.DOMElements).storySelectionModal;
    let contentHTML = '';
    const playerLevel = (0, _gameLogicJs.getCurrentPlayerLevel)();
    for(const storyId in 0, _configJs.STORY_DATA){
        const story = (0, _configJs.STORY_DATA)[storyId];
        const isLocked = story.requiredLevel && playerLevel < story.requiredLevel;
        if (isLocked) contentHTML += `
        <div class="story-selection-card locked">
          <img src="${story.icon}" class="story-selection-icon" alt="${story.title}">
          <div class="story-selection-info">
            <h4>${story.title}</h4>
            <p>${story.description}</p>
            <div class="story-lock-reason">
              <img src="${0, _assetUrlsJs.lockIconUrl}" alt="\u{417}\u{430}\u{43C}\u{43E}\u{43A}">
              <span>\u{414}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E} \u{441} ${story.requiredLevel} \u{443}\u{440}\u{43E}\u{432}\u{43D}\u{44F}</span>
            </div>
          </div>
        </div>
      `;
        else {
            const progress = (0, _stateJs.gameState).storyState.progress[storyId] || {
                currentChapter: 1,
                currentStep: 0,
                completed: false
            };
            const status = progress.completed ? "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E" : "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C";
            contentHTML += `
        <div class="story-selection-card" data-story-id="${story.id}">
          <img src="${story.icon}" class="story-selection-icon" alt="${story.title}">
          <div class="story-selection-info">
            <h4>${story.title}</h4>
            <p>${story.description}</p>
            <span class="story-status ${progress.completed ? 'completed' : ''}">${status}</span>
          </div>
        </div>
      `;
        }
    }
    modal.body.innerHTML = contentHTML;
    modal.overlay.classList.add('active', 'blocking');
}
function closeStorySelectionModal() {
    (0, _domJs.DOMElements).storySelectionModal.overlay.classList.remove('active', 'blocking');
}
function openStoryModal() {
    const activeStoryId = (0, _stateJs.gameState).storyState.activeStoryId;
    if (!(0, _stateJs.gameState).storyState.unlocked || !activeStoryId) {
        (0, _uiJs.showToast)("\u0421\u044E\u0436\u0435\u0442 \u043F\u043E\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D.", "error");
        return;
    }
    const modal = (0, _domJs.DOMElements).storyModal;
    const story = (0, _configJs.STORY_DATA)[activeStoryId];
    const progress = (0, _stateJs.gameState).storyState.progress[activeStoryId];
    const chapter = story.chapters[progress.currentChapter];
    if (!chapter || progress.completed) {
        modal.title.textContent = story.title;
        modal.body.innerHTML = `<p style="text-align: center;">\u{412}\u{44B} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{43B}\u{438} \u{442}\u{435}\u{43A}\u{443}\u{449}\u{443}\u{44E} \u{441}\u{44E}\u{436}\u{435}\u{442}\u{43D}\u{443}\u{44E} \u{43B}\u{438}\u{43D}\u{438}\u{44E}. \u{41F}\u{440}\u{43E}\u{434}\u{43E}\u{43B}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{441}\u{43B}\u{435}\u{434}\u{443}\u{435}\u{442}!</p>`;
        modal.actions.innerHTML = '';
        modal.overlay.classList.add('active', 'blocking');
        return;
    }
    const step = chapter.steps[progress.currentStep];
    if (!step) {
        closeStoryModal();
        return;
    }
    modal.title.textContent = "\u0421\u044E\u0436\u0435\u0442. " + chapter.title;
    // Теперь мы берем иконку и имя прямо из объекта шага сюжета
    modal.body.innerHTML = `
        <div class="story-dialogue">
            <div class="story-char-container">
                <div class="story-char-avatar">
                    <img src="${step.character}" alt="${step.name}">
                </div>
                <div class="story-char-name">${step.name}</div>
            </div>
            <div class="story-text-bubble">
                <p>${step.text}</p>
            </div>
        </div>
    `;
    if (step.type === 'dialogue') modal.actions.innerHTML = `<button id="story-continue-btn" class="modal-action-btn">\u{41F}\u{440}\u{43E}\u{434}\u{43E}\u{43B}\u{436}\u{438}\u{442}\u{44C}</button>`;
    else if (step.type === 'task' && step.task.type === 'spend_coins') modal.actions.innerHTML = `<button id="story-task-btn" class="modal-action-btn">${step.task.buttonText} (${step.task.amount}<img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon" />)</button>`;
    else modal.actions.innerHTML = '';
    modal.overlay.classList.add('active', 'blocking');
}
function closeStoryModal() {
    (0, _domJs.DOMElements).storyModal.overlay.classList.remove('active', 'blocking');
}
function openTutorialModal() {
    const modal = (0, _domJs.DOMElements).tutorialModal;
    modal.body.innerHTML = `
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.magicToolIconUrl}" alt="\u{421}\u{43B}\u{438}\u{44F}\u{43D}\u{438}\u{435}">1. \u{41E}\u{431}\u{44A}\u{435}\u{434}\u{438}\u{43D}\u{44F}\u{439}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B}</h4>
        <p>\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{43E}\u{434}\u{438}\u{43D}\u{430}\u{43A}\u{43E}\u{432}\u{44B}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} \u{434}\u{440}\u{443}\u{433} \u{43D}\u{430} \u{434}\u{440}\u{443}\u{433}\u{430}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442} \u{431}\u{43E}\u{43B}\u{435}\u{435} \u{432}\u{44B}\u{441}\u{43E}\u{43A}\u{43E}\u{433}\u{43E} \u{443}\u{440}\u{43E}\u{432}\u{43D}\u{44F}. \u{42D}\u{442}\u{43E} \u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{43E}\u{439} \u{441}\u{43F}\u{43E}\u{441}\u{43E}\u{431} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{44F} \u{43D}\u{43E}\u{432}\u{44B}\u{445} \u{432}\u{435}\u{449}\u{435}\u{439}!</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.boxIconUrl}" alt="\u{413}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{44B}">2. \u{418}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{443}\u{439}\u{442}\u{435} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{44B}</h4>
        <p>\u{41D}\u{430}\u{436}\u{438}\u{43C}\u{430}\u{439}\u{442}\u{435} \u{43D}\u{430} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{44B} (\u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} \u{441} \u{43E}\u{440}\u{430}\u{43D}\u{436}\u{435}\u{432}\u{43E}\u{439}/\u{441}\u{438}\u{43D}\u{435}\u{439} \u{430}\u{43D}\u{438}\u{43C}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{43D}\u{43E}\u{439} \u{43E}\u{431}\u{432}\u{43E}\u{434}\u{43A}\u{43E}\u{439}), \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{441}\u{43E}\u{437}\u{434}\u{430}\u{432}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B}. \u{42D}\u{442}\u{43E} \u{442}\u{440}\u{430}\u{442}\u{438}\u{442} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44E} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{430} \u{438} \u{432}\u{430}\u{448}\u{443} \u{43B}\u{438}\u{447}\u{43D}\u{443}\u{44E} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44E} <img src="${0, _assetUrlsJs.energyIconUrl}" class="inline-icon">.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.achievementsIconUrl}" alt="\u{417}\u{430}\u{43A}\u{430}\u{437}\u{44B}">3. \u{412}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{44F}\u{439}\u{442}\u{435} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{44B}</h4>
        <p>\u{412} \u{432}\u{435}\u{440}\u{445}\u{43D}\u{435}\u{439} \u{447}\u{430}\u{441}\u{442}\u{438} \u{44D}\u{43A}\u{440}\u{430}\u{43D}\u{430} \u{43D}\u{430}\u{445}\u{43E}\u{434}\u{44F}\u{442}\u{441}\u{44F} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{44B} \u{43E}\u{442} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{43E}\u{432}. \u{421}\u{43E}\u{431}\u{438}\u{440}\u{430}\u{439}\u{442}\u{435} \u{43D}\u{443}\u{436}\u{43D}\u{44B}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} \u{438} \u{43D}\u{430}\u{436}\u{438}\u{43C}\u{430}\u{439}\u{442}\u{435} "\u{421}\u{434}\u{430}\u{442}\u{44C} \u{437}\u{430}\u{43A}\u{430}\u{437}", \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{44C} \u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{44B} \u{438} \u{43E}\u{43F}\u{44B}\u{442}.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.chainIconUrl}" alt="\u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{44F}">4. \u{423}\u{437}\u{43D}\u{430}\u{439}\u{442}\u{435} \u{431}\u{43E}\u{43B}\u{44C}\u{448}\u{435} \u{43E} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{430}\u{445}</h4>
        <p>\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{43B}\u{44E}\u{431}\u{43E}\u{439} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442} \u{43D}\u{430} \u{43F}\u{43E}\u{43B}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43E}\u{43A}\u{43D}\u{43E} \u{441} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{435}\u{439}. \u{412} \u{44D}\u{442}\u{43E}\u{43C} \u{43E}\u{43A}\u{43D}\u{435} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{443} \u{446}\u{435}\u{43F}\u{43E}\u{447}\u{43A}\u{438} <img src="${0, _assetUrlsJs.chainIconUrl}" class="inline-icon">, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{432}\u{438}\u{434}\u{435}\u{442}\u{44C} \u{432}\u{441}\u{44E} \u{435}\u{433}\u{43E} \u{43B}\u{438}\u{43D}\u{438}\u{44E} \u{44D}\u{432}\u{43E}\u{43B}\u{44E}\u{446}\u{438}\u{438}.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.coinIconUrl}" alt="\u{420}\u{435}\u{441}\u{443}\u{440}\u{441}\u{44B}">5. \u{421}\u{43B}\u{435}\u{434}\u{438}\u{442}\u{435} \u{437}\u{430} \u{440}\u{435}\u{441}\u{443}\u{440}\u{441}\u{430}\u{43C}\u{438}</h4>
        <p><b>\u{41C}\u{43E}\u{43D}\u{435}\u{442}\u{44B}</b> <img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon"> \u{43D}\u{443}\u{436}\u{43D}\u{44B} \u{434}\u{43B}\u{44F} \u{43F}\u{43E}\u{43A}\u{443}\u{43F}\u{43A}\u{438} \u{443}\u{43B}\u{443}\u{447}\u{448}\u{435}\u{43D}\u{438}\u{439} \u{438} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{43E}\u{432}. <b>\u{42D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44F}</b> <img src="${0, _assetUrlsJs.energyIconUrl}" class="inline-icon"> \u{43D}\u{443}\u{436}\u{43D}\u{430} \u{434}\u{43B}\u{44F} \u{438}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{432}. \u{41E}\u{431}\u{430} \u{440}\u{435}\u{441}\u{443}\u{440}\u{441}\u{430} \u{432}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{430}\u{432}\u{43B}\u{438}\u{432}\u{430}\u{44E}\u{442}\u{441}\u{44F} \u{441}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{435}\u{43C}.</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.storyScrollIconUrl}" alt="\u{41C}\u{435}\u{43D}\u{44E}">6. \u{418}\u{441}\u{441}\u{43B}\u{435}\u{434}\u{443}\u{439}\u{442}\u{435} \u{438}\u{433}\u{440}\u{443}</h4>
        <p>\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{43A}\u{43D}\u{43E}\u{43F}\u{43A}\u{443} \u{43C}\u{435}\u{43D}\u{44E} \u{2630}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} <b>\u{421}\u{44E}\u{436}\u{435}\u{442}</b>, \u{43F}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440}\u{435}\u{442}\u{44C} \u{441}\u{432}\u{43E}\u{44E} <b>\u{41A}\u{43E}\u{43B}\u{43B}\u{435}\u{43A}\u{446}\u{438}\u{44E}</b> \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{43E}\u{432} \u{438} \u{43E}\u{442}\u{441}\u{43B}\u{435}\u{434}\u{438}\u{442}\u{44C} <b>\u{414}\u{43E}\u{441}\u{442}\u{438}\u{436}\u{435}\u{43D}\u{438}\u{44F}</b>. \u{417}\u{430} \u{438}\u{445} \u{432}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{438}\u{435} \u{432}\u{44B} \u{431}\u{443}\u{434}\u{435}\u{442}\u{435} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{430}\u{442}\u{44C} \u{43D}\u{430}\u{433}\u{440}\u{430}\u{434}\u{44B}!</p>
    </div>
    <div class="tutorial-section">
        <h4><img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41E}\u{431}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{435}">7. \u{412}\u{43E}\u{437}\u{432}\u{440}\u{430}\u{449}\u{430}\u{439}\u{442}\u{435}\u{441}\u{44C} \u{43A} \u{43E}\u{431}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{44E}</h4>
        <p>\u{412}\u{44B} \u{432}\u{441}\u{435}\u{433}\u{434}\u{430} \u{43C}\u{43E}\u{436}\u{435}\u{442}\u{435} \u{432}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}\u{441}\u{44F} \u{43A} \u{44D}\u{442}\u{43E}\u{43C}\u{443} \u{440}\u{443}\u{43A}\u{43E}\u{432}\u{43E}\u{434}\u{441}\u{442}\u{432}\u{443}, \u{43D}\u{430}\u{436}\u{430}\u{432} \u{43D}\u{430} \u{43A}\u{43D}\u{43E}\u{43F}\u{43A}\u{443} \u{43C}\u{435}\u{43D}\u{44E} \u{2630} \u{432} \u{43F}\u{440}\u{430}\u{432}\u{43E}\u{43C} \u{432}\u{435}\u{440}\u{445}\u{43D}\u{435}\u{43C} \u{443}\u{433}\u{43B}\u{443} \u{438} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{432} \u{43F}\u{443}\u{43D}\u{43A}\u{442} "\u{41E}\u{431}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{435}".</p>
    </div>
  `;
    modal.overlay.classList.add('active', 'blocking');
}
function closeTutorialModal() {
    (0, _domJs.DOMElements).tutorialModal.overlay.classList.remove('active', 'blocking');
    (0, _stateJs.playerProfile).hasSeenTutorial = true;
    (0, _gameManagerJs.saveGame)();
}
function showModal(options) {
    const { icon, title, subtitle, desc, actionButton, dangerButtons, infoButton, isBlocking } = options;
    const modal = (0, _domJs.DOMElements).infoModal;
    if (typeof icon === 'string') // Assume it's an HTML string
    modal.icon.innerHTML = icon;
    else if (icon instanceof URL) // It's a URL object from an import or new URL()
    modal.icon.innerHTML = `<img src="${icon}" alt="">`;
    modal.title.innerText = title;
    modal.subtitle.innerText = subtitle;
    modal.desc.innerHTML = desc; // Use innerHTML to support icons
    modal.infoBtn.style.display = infoButton ? 'block' : 'none';
    if (infoButton) modal.infoBtn.onclick = infoButton.onClick;
    modal.actionBtn.style.display = actionButton ? 'block' : 'none';
    if (actionButton) {
        modal.actionBtn.innerHTML = actionButton.text;
        modal.actionBtn.onclick = actionButton.onClick;
    }
    modal.dangerGroup.style.display = dangerButtons ? 'flex' : 'none';
    if (dangerButtons) {
        modal.confirmBtn.innerHTML = dangerButtons.confirmButtonText;
        modal.confirmBtn.onclick = dangerButtons.onConfirm;
    }
    modal.overlay.className = `modal-overlay active ${isBlocking ? 'blocking' : ''}`;
}
function closeModal() {
    (0, _domJs.DOMElements).infoModal.overlay.className = 'modal-overlay';
}
function openMenuModal() {
    closeAllModals();
    (0, _domJs.DOMElements).menuModal.achievementsNotificationDot.style.display = (0, _gameLogicJs.hasUnclaimedAchievements)() ? 'block' : 'none';
    (0, _domJs.DOMElements).menuModal.collectionNotificationDot.style.display = (0, _gameLogicJs.hasUnclaimedCollectionBonuses)() ? 'block' : 'none';
    (0, _domJs.DOMElements).menuModal.overlay.classList.add('active', 'blocking');
}
function closeMenuModal() {
    (0, _domJs.DOMElements).menuModal.overlay.classList.remove('active', 'blocking');
}
function openProfileModal() {
    (0, _uiJs.renderProfile)();
    (0, _domJs.DOMElements).profileModal.overlay.classList.add('active', 'blocking');
}
function closeProfileModal() {
    (0, _domJs.DOMElements).profileModal.overlay.classList.remove('active', 'blocking');
}
function openAchievementsModal() {
    (0, _uiJs.renderAchievementsModal)();
    (0, _domJs.DOMElements).achievementsModal.overlay.classList.add('active', 'blocking');
}
function closeAchievementsModal() {
    (0, _domJs.DOMElements).achievementsModal.overlay.classList.remove('active', 'blocking');
}
function openSettingsModal() {
    (0, _uiJs.renderSettingsModal)();
    (0, _domJs.DOMElements).settingsModal.overlay.classList.add('active', 'blocking');
}
function closeSettingsModal() {
    (0, _domJs.DOMElements).settingsModal.overlay.classList.remove('active', 'blocking');
}
function showCollectionModal() {
    (0, _uiJs.renderCollectionModal)();
    (0, _domJs.DOMElements).collectionModal.overlay.classList.add('active', 'blocking');
}
function closeCollectionModal() {
    const modal = (0, _domJs.DOMElements).collectionModal;
    modal.overlay.classList.remove('active', 'blocking');
    setTimeout(()=>{
        modal.body.innerHTML = '';
        modal.footer.innerHTML = '';
    }, 300);
}
function closeDetailModal() {
    const modal = (0, _domJs.DOMElements).detailModal;
    modal.overlay.classList.remove('active', 'blocking');
    setTimeout(()=>{
        modal.icon.innerHTML = '';
        modal.desc.innerHTML = '';
        modal.extraContent.innerHTML = '';
    }, 300);
}
function closeAllModals() {
    closeModal();
    closeDetailModal();
    closeCollectionModal();
    closeProfileModal();
    closeSettingsModal();
    closeAchievementsModal();
    closeStoryModal();
    closeStorySelectionModal();
    closeTutorialModal();
    closeMenuModal();
    closeLevelUpModal();
}
function openLevelUpModal(fromLevel, toLevel, rewards) {
    const modal = (0, _domJs.DOMElements).levelUpModal;
    let rewardsHTML = '';
    if (rewards.coins > 0) rewardsHTML += `
          <div class="level-up-reward-item">
              <div class="reward-icon-container coin-reward"><img src="${0, _assetUrlsJs.coinIconUrl}" alt="\u{41C}\u{43E}\u{43D}\u{435}\u{442}\u{44B}"></div>
              <div class="reward-info">
                  <span class="reward-name">\u{41C}\u{43E}\u{43D}\u{435}\u{442}\u{44B}</span>
                  <span class="reward-amount">+${rewards.coins.toLocaleString('ru-RU')}</span>
              </div>
          </div>
      `;
    if (rewards.giftBox) rewardsHTML += `
          <div class="level-up-reward-item">
              <div class="reward-icon-container"><img src="${0, _assetUrlsJs.bonusChestLvl1IconUrl}" alt="\u{41F}\u{43E}\u{434}\u{430}\u{440}\u{43E}\u{447}\u{43D}\u{430}\u{44F} \u{43A}\u{43E}\u{440}\u{43E}\u{431}\u{43A}\u{430}"></div>
              <div class="reward-info">
                  <span class="reward-name">\u{41F}\u{43E}\u{434}\u{430}\u{440}\u{43E}\u{447}\u{43D}\u{430}\u{44F} \u{43A}\u{43E}\u{440}\u{43E}\u{431}\u{43A}\u{430}</span>
                  <span class="reward-amount">+1</span>
              </div>
          </div>
      `;
    if (rewards.newGenerator) rewardsHTML += `
          <div class="level-up-reward-item">
              <div class="reward-icon-container"><img src="${rewards.newGeneratorIcon}" alt="${rewards.newGeneratorName}"></div>
              <div class="reward-info">
                  <span class="reward-name">\u{41D}\u{43E}\u{432}\u{44B}\u{439} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}!<br><em>${rewards.newGeneratorName}</em></span>
                  <span class="reward-amount">+1</span>
              </div>
          </div>
      `;
    modal.body.innerHTML = `
    <div class="level-up-header">
        <h2 class="level-up-title">\u{41D}\u{43E}\u{432}\u{44B}\u{439} \u{443}\u{440}\u{43E}\u{432}\u{435}\u{43D}\u{44C}!</h2>
        <div class="level-up-transition">
            <span class="level-badge">${fromLevel}</span>
            <span class="level-up-arrow">\u{2192}</span>
            <span class="level-badge new">${toLevel}</span>
        </div>
    </div>
    <div class="level-up-congrats">
        <p>\u{41F}\u{43E}\u{437}\u{434}\u{440}\u{430}\u{432}\u{43B}\u{44F}\u{435}\u{43C}! \u{412}\u{44B} \u{434}\u{43E}\u{441}\u{442}\u{438}\u{433}\u{43B}\u{438} \u{43D}\u{43E}\u{432}\u{43E}\u{433}\u{43E} \u{443}\u{440}\u{43E}\u{432}\u{43D}\u{44F} \u{438} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{438}\u{43B}\u{438} \u{43D}\u{430}\u{433}\u{440}\u{430}\u{434}\u{44B}:</p>
    </div>
    <div class="level-up-rewards">
        ${rewardsHTML}
    </div>
    <button id="level-up-close-btn" class="modal-action-btn">\u{41F}\u{440}\u{43E}\u{434}\u{43E}\u{43B}\u{436}\u{438}\u{442}\u{44C}</button>
  `;
    modal.overlay.classList.add('active', 'blocking');
    const closeBtn = modal.body.querySelector('#level-up-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeLevelUpModal, {
        once: true
    });
}
function closeLevelUpModal() {
    (0, _domJs.DOMElements).levelUpModal.overlay.classList.remove('active', 'blocking');
}
function confirmReset() {
    showModal({
        icon: `<img src="${(0, _assetUrlsJs.warningIconUrl)}" alt="\u{412}\u{43D}\u{438}\u{43C}\u{430}\u{43D}\u{438}\u{435}">`,
        title: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441?",
        subtitle: "\u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u0431\u043D\u0443\u043B\u0435\u043D\u0438\u0435",
        desc: "\u0412\u044B \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0432\u0441\u0435 \u0441\u0432\u043E\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B, \u043E\u0447\u043A\u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u044B. \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.",
        dangerButtons: {
            confirmButtonText: "\u0414\u0430, \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
            onConfirm: ()=>{
                closeModal();
                setTimeout(()=>{
                    localStorage.removeItem((0, _configJs.CONFIG).SAVE_KEY);
                    (0, _gameManagerJs.startNewGame)();
                    (0, _uiJs.updateUI)();
                    (0, _uiJs.showToast)("\u0418\u0433\u0440\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430", "success");
                }, 50);
            }
        },
        isBlocking: true
    });
}
function confirmCancelOrder(id) {
    const order = (0, _stateJs.gameState).orders.find((o)=>o.id === id);
    if (!order || order.isStory) return;
    showModal({
        icon: `<img src="${(0, _assetUrlsJs.questionIconUrl)}" alt="\u{412}\u{43E}\u{43F}\u{440}\u{43E}\u{441}">`,
        title: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437?",
        subtitle: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
        desc: `\u{412}\u{44B} \u{443}\u{432}\u{435}\u{440}\u{435}\u{43D}\u{44B}, \u{447}\u{442}\u{43E} \u{445}\u{43E}\u{442}\u{438}\u{442}\u{435} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{44D}\u{442}\u{43E}\u{442} \u{437}\u{430}\u{43A}\u{430}\u{437}? \u{42D}\u{442}\u{43E} \u{431}\u{443}\u{434}\u{435}\u{442} \u{441}\u{442}\u{43E}\u{438}\u{442}\u{44C} ${(0, _configJs.CONFIG).COINS_PER_ORDER_CANCEL} \u{43C}\u{43E}\u{43D}\u{435}\u{442}.`,
        dangerButtons: {
            confirmButtonText: `\u{414}\u{430}, \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} (-${(0, _configJs.CONFIG).COINS_PER_ORDER_CANCEL}<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">)`,
            onConfirm: ()=>{
                if ((0, _stateJs.gameState).coins < (0, _configJs.CONFIG).COINS_PER_ORDER_CANCEL) {
                    (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="toast-icon" alt=""> \u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{43C}\u{43E}\u{43D}\u{435}\u{442} \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B} (\u{43D}\u{443}\u{436}\u{43D}\u{43E} ${(0, _configJs.CONFIG).COINS_PER_ORDER_CANCEL})!`, "error");
                    closeModal();
                    return;
                }
                (0, _stateJs.gameState).coins -= (0, _configJs.CONFIG).COINS_PER_ORDER_CANCEL;
                const idx = (0, _stateJs.gameState).orders.findIndex((o)=>o.id === id);
                if (idx !== -1) {
                    (0, _stateJs.gameState).orders.splice(idx, 1);
                    (0, _gameLogicJs.generateOrder)();
                    (0, _gameManagerJs.saveGame)();
                    (0, _uiJs.updateUI)();
                    (0, _uiJs.showToast)("\u0417\u0430\u043A\u0430\u0437 \u043E\u0442\u043C\u0435\u043D\u0435\u043D", "error");
                }
                closeModal();
            }
        },
        isBlocking: true
    });
}
function showCharacterById(id) {
    const order = (0, _stateJs.gameState).orders.find((o)=>o.id === id);
    if (order) showCharacterModal(order);
}
function showCharacterModal(order) {
    showModal({
        icon: `<img src="${order.character.icon}" alt="">`,
        title: order.character.name,
        subtitle: order.isStory ? `\u{412}\u{430}\u{436}\u{43D}\u{44B}\u{439} \u{433}\u{43E}\u{441}\u{442}\u{44C} (\u{421}\u{435}\u{440}\u{438}\u{44F})` : "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442",
        desc: order.character.desc || "\u0417\u0430\u0433\u043B\u044F\u043D\u0443\u043B \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C\u0438."
    });
}
function showItemInfoModal(item, index = -1) {
    const itemType = (0, _gameLogicJs.getItemType)(item);
    const getOptions = MODAL_OPTIONS_GETTERS[itemType];
    if (getOptions) {
        const modalOptions = getOptions(item, index);
        showModal(modalOptions);
    }
}
function getBlockedItemModalOptions(item, index) {
    const info = (0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1];
    return {
        icon: (0, _assetUrlsJs.blockIconUrl),
        title: `\u{417}\u{430}\u{431}\u{43B}\u{43E}\u{43A}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{43D}\u{44B}\u{439}: ${info.name}`,
        subtitle: "\u041F\u0440\u0435\u0433\u0440\u0430\u0434\u0430",
        desc: "\u042D\u0442\u043E\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0437\u0430 \u0431\u0430\u0440\u0440\u0438\u043A\u0430\u0434\u043E\u0439. \u0427\u0442\u043E\u0431\u044B \u0435\u0433\u043E \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u044C, \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043D\u0430 \u043D\u0435\u0433\u043E \u0442\u043E\u0447\u043D\u043E \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0441 \u043F\u043E\u043B\u044F, \u043B\u0438\u0431\u043E \u0440\u0430\u0441\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0430\u043B \u0437\u0430 \u043C\u043E\u043D\u0435\u0442\u044B.",
        actionButton: {
            text: `\u{420}\u{430}\u{441}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{44C} \u{437}\u{430}\u{432}\u{430}\u{43B} (-${(0, _configJs.CONFIG).BLOCKED_CLEAR_COST_COINS}<img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">)`,
            onClick: ()=>(0, _gameLogicJs.clearBlockedItemWithCoins)(index)
        },
        isBlocking: false
    };
}
function getGeneratorModalOptions(item, index) {
    const genInfo = (0, _configJs.GENERATORS_DATA)[item.generatorKey];
    const lvl = item.genLevel || 1;
    if (item.generatorKey === 'bonus_chest') {
        const lvl = item.genLevel || 1;
        const iconPath = genInfo.icons[lvl - 1];
        return {
            icon: iconPath,
            title: `\u{41F}\u{43E}\u{434}\u{430}\u{440}\u{43E}\u{447}\u{43D}\u{430}\u{44F} \u{43A}\u{43E}\u{440}\u{43E}\u{431}\u{43A}\u{430} ${(0, _configJs.CONFIG).ROMAN_NUMERALS[lvl]}`,
            subtitle: "\u041E\u0441\u043E\u0431\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440",
            desc: `\u{42D}\u{442}\u{43E}\u{442} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} \u{441}\u{43E}\u{434}\u{435}\u{440}\u{436}\u{438}\u{442} \u{440}\u{435}\u{434}\u{43A}\u{438}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B}. \u{423} \u{43D}\u{435}\u{433}\u{43E} \u{43E}\u{441}\u{442}\u{430}\u{43B}\u{43E}\u{441}\u{44C} ${item.genCharges} \u{437}\u{430}\u{440}\u{44F}\u{434}(\u{43E}\u{432}). \u{41A}\u{43E}\u{433}\u{434}\u{430} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{44B} \u{437}\u{430}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{442}\u{441}\u{44F}, \u{43E}\u{43D} \u{438}\u{441}\u{447}\u{435}\u{437}\u{43D}\u{435}\u{442}. \u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{43D}\u{435}\u{433}\u{43E} \u{442}\u{430}\u{43A}\u{443}\u{44E} \u{436}\u{435} \u{43A}\u{43E}\u{440}\u{43E}\u{431}\u{43A}\u{443}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{43B}\u{443}\u{447}\u{448}\u{438}\u{442}\u{44C} \u{438} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{44C} \u{431}\u{43E}\u{43B}\u{44C}\u{448}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{43E}\u{432}.`,
            isBlocking: false
        };
    }
    const config = (0, _configJs.GEN_ENERGY_CONFIG)[lvl];
    const desc = `\u{421}\u{43E}\u{437}\u{434}\u{430}\u{435}\u{442} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} \u{438}\u{437} \u{441}\u{432}\u{43E}\u{435}\u{439} \u{43A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{438}\u{438}.`;
    const iconPath = genInfo.icons[lvl - 1];
    const modalOptions = {
        icon: iconPath,
        title: `${genInfo.name} ${(0, _configJs.CONFIG).ROMAN_NUMERALS[lvl]}`,
        subtitle: `\u{413}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} \u{2022} \u{423}\u{440}\u{43E}\u{432}\u{435}\u{43D}\u{44C} ${(0, _configJs.CONFIG).ROMAN_NUMERALS[lvl]}`,
        desc: desc,
        infoButton: {
            onClick: ()=>showGeneratorDetailModal(item)
        }
    };
    if (item.genEnergy < config.max) modalOptions.actionButton = {
        text: `\u{412}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{44C} (-${(0, _configJs.CONFIG).GENERATOR_RECHARGE_COST}<img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">)`,
        onClick: ()=>(0, _gameLogicJs.rechargeGeneratorWithCoins)(index)
    };
    return modalOptions;
}
function getItemGeneratorModalOptions(item, index) {
    const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1];
    const generatedCatInfo = (0, _configJs.CATEGORIES_CONFIG)[item.generatedCategory];
    return {
        icon: itemInfo.icon,
        title: itemInfo.name,
        subtitle: `\u{41F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}-\u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} \u{2022} ${item.charges} \u{437}\u{430}\u{440}\u{44F}\u{434}(\u{43E}\u{432})`,
        desc: `\u{42D}\u{442}\u{43E}\u{442} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442} \u{43C}\u{43E}\u{436}\u{435}\u{442} \u{43F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} \u{438}\u{437} \u{43A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{438}\u{438} "${generatedCatInfo.name}". \u{41F}\u{43E}\u{441}\u{43B}\u{435} \u{438}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{432}\u{441}\u{435}\u{445} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{43E}\u{432} \u{43E}\u{43D} \u{438}\u{441}\u{447}\u{435}\u{437}\u{43D}\u{435}\u{442}. \u{415}\u{433}\u{43E} \u{442}\u{430}\u{43A}\u{436}\u{435} \u{43C}\u{43E}\u{436}\u{43D}\u{43E} \u{441}\u{434}\u{430}\u{442}\u{44C} \u{432} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{435}.`,
        infoButton: {
            onClick: ()=>showItemDetailModal(item)
        },
        isBlocking: false
    };
}
function getBoosterModalOptions(item) {
    if (item.isUpgradePart) return {
        icon: (0, _assetUrlsJs.upgradePartIconUrl),
        title: "\u041D\u043E\u0432\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C",
        subtitle: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0435\u043B\u044C",
        desc: "\u0420\u0435\u0434\u043A\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u0437\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0441\u043E\u0431\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430. \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0435\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 (\u043A\u0440\u043E\u043C\u0435 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0445 \u043A\u043E\u0440\u043E\u0431\u043E\u043A), \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0435\u0433\u043E \u0443\u0440\u043E\u0432\u0435\u043D\u044C.",
        isBlocking: false
    };
    if (item.isMagicTool) return {
        icon: (0, _assetUrlsJs.magicToolIconUrl),
        title: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
        subtitle: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0435\u043B\u044C",
        desc: "\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0435 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0430 \u043E\u0434\u0438\u043D \u0443\u0440\u043E\u0432\u0435\u043D\u044C. \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0445 \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C.",
        isBlocking: false
    };
    if (item.isCopyBubble) return {
        icon: (0, _assetUrlsJs.copyBubbleIconUrl),
        title: "\u041A\u043E\u043F\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u043F\u0443\u0437\u044B\u0440\u044C",
        subtitle: "\u0411\u0443\u0441\u0442\u0435\u0440-\u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u043E\u0440",
        desc: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 (\u043A\u0440\u043E\u043C\u0435 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0443\u0441\u0442\u0435\u0440\u043E\u0432) \u043D\u0430 \u044D\u0442\u043E\u0442 \u043F\u0443\u0437\u044B\u0440\u044C, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0435\u0433\u043E \u0442\u043E\u0447\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E. \u041F\u0443\u0437\u044B\u0440\u044C \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442.",
        isBlocking: false
    };
    return {};
}
function getGeneratorPartModalOptions(item, index) {
    const genInfo = (0, _configJs.GENERATORS_DATA)[item.generatorKey];
    const lvl = item.level || 1;
    const partInfo = genInfo.parts[lvl - 1];
    const sellPrice = (item.level || 1) * 3;
    return {
        icon: partInfo.icon,
        title: partInfo.name,
        subtitle: `\u{414}\u{435}\u{442}\u{430}\u{43B}\u{44C} \u{434}\u{43B}\u{44F} \u{441}\u{431}\u{43E}\u{440}\u{43A}\u{438} \u{2022} \u{423}\u{440}\u{43E}\u{432}\u{435}\u{43D}\u{44C} ${item.level}`,
        desc: "\u0427\u0430\u0441\u0442\u044C \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430.",
        dangerButtons: {
            confirmButtonText: `\u{41F}\u{440}\u{43E}\u{434}\u{430}\u{442}\u{44C} (+${sellPrice}<img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">)`,
            onConfirm: ()=>(0, _gameLogicJs.deleteItem)(index)
        },
        infoButton: {
            onClick: ()=>showGeneratorPartDetailModal(item)
        },
        isBlocking: false
    };
}
function getRegularItemModalOptions(item, index) {
    const info = (0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1];
    const sellPrice = (item.level || 1) * 3;
    return {
        icon: info.icon,
        title: info.name,
        subtitle: `${(0, _configJs.CATEGORIES_CONFIG)[item.category].name} \u{2022} \u{423}\u{440}\u{43E}\u{432}\u{435}\u{43D}\u{44C} ${item.level}`,
        desc: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0438 \u0441\u043B\u0438\u044F\u043D\u0438\u044F.",
        dangerButtons: {
            confirmButtonText: `\u{41F}\u{440}\u{43E}\u{434}\u{430}\u{442}\u{44C} (+${sellPrice}<img src="${0, _assetUrlsJs.coinIconUrl}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">)`,
            onConfirm: ()=>(0, _gameLogicJs.deleteItem)(index)
        },
        infoButton: {
            onClick: ()=>showItemDetailModal(item)
        },
        isBlocking: false
    };
}
const MODAL_OPTIONS_GETTERS = {
    blocked: getBlockedItemModalOptions,
    generator: getGeneratorModalOptions,
    itemGenerator: getItemGeneratorModalOptions,
    generatorPart: getGeneratorPartModalOptions,
    booster: getBoosterModalOptions,
    regular: getRegularItemModalOptions
};
function showCategoryProgressionModal(categoryKeyOrKeys, icon) {
    const categoryKeys = Array.isArray(categoryKeyOrKeys) ? categoryKeyOrKeys : [
        categoryKeyOrKeys
    ];
    if (categoryKeys.length === 0) return;
    const modal = (0, _domJs.DOMElements).detailModal; // Используем большой модал
    let progressionHTML = '';
    let modalTitle = "\u0426\u0435\u043F\u043E\u0447\u043A\u0430 \u044D\u0432\u043E\u043B\u044E\u0446\u0438\u0438"; // Заголовок по умолчанию
    let itemDescription = '';
    let specificItemFound = false;
    // Если передан один ключ категории и иконка, пытаемся найти описание конкретного предмета
    if (categoryKeys.length === 1 && icon) {
        const categoryKey = categoryKeys[0];
        const category = (0, _configJs.CATEGORIES_CONFIG)[categoryKey];
        if (category) {
            // Иконка из DOM будет полным URL, а в конфиге - относительный путь.
            // Ищем предмет, чей путь к иконке совпадает с концом URL.
            const itemInfo = category.items.find((item)=>icon.endsWith(item.icon));
            if (itemInfo) {
                modalTitle = itemInfo.name;
                itemDescription = `<p class="modal-desc">${itemInfo.desc}</p>`;
                specificItemFound = true;
            }
        }
    }
    // Setup modal shell
    modal.title.innerText = modalTitle;
    modal.icon.innerHTML = `<img src="${icon || (0, _assetUrlsJs.chainIconUrl)}" alt="\u{418}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{446}\u{435}\u{43F}\u{43E}\u{447}\u{43A}\u{438}">`;
    if (specificItemFound) {
        modal.desc.innerHTML = itemDescription;
        modal.desc.style.display = 'block';
    } else {
        modal.desc.innerHTML = '';
        modal.desc.style.display = 'none';
    }
    modal.icon.style.display = 'flex';
    categoryKeys.forEach((key, index)=>{
        const category = (0, _configJs.CATEGORIES_CONFIG)[key];
        if (!category) return;
        if (index > 0) progressionHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
        // Если мы нашли конкретный предмет, заголовок для его цепочки будет другим, для консистентности
        const chainTitle = specificItemFound ? `\u{426}\u{435}\u{43F}\u{43E}\u{447}\u{43A}\u{430}: ${category.name}` : category.name;
        progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${chainTitle}</h4>`;
        progressionHTML += `<div class="progression-container">`;
        category.items.forEach((item, itemIndex)=>{
            const discovered = (0, _gameLogicJs.isDiscovered)(key, item.level);
            const undiscoveredClass = discovered ? '' : 'undiscovered';
            const itemIcon = discovered ? `<img src="${item.icon}" alt="">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
            progressionHTML += `
        <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? item.name : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E"}">
          <div class="progression-item-icon">${itemIcon}</div>
          <div class="progression-item-level">${item.level}</div>
        </div>
      `;
            if (itemIndex < category.items.length - 1) progressionHTML += '<div class="progression-arrow-h">\u2192</div>';
        });
        progressionHTML += '</div>';
    });
    modal.extraContent.innerHTML = progressionHTML;
    modal.overlay.classList.add('active', 'blocking');
}
function showGeneratorDetailModal(item) {
    const modal = (0, _domJs.DOMElements).detailModal;
    const genInfo = (0, _configJs.GENERATORS_DATA)[item.generatorKey];
    const lvl = item.genLevel || 1;
    const iconPath = genInfo.icons[lvl - 1];
    // Setup modal shell
    modal.icon.innerHTML = `<img src="${iconPath}" alt="${genInfo.name}">`;
    modal.title.innerText = `${genInfo.name} ${(0, _configJs.CONFIG).ROMAN_NUMERALS[lvl]}`;
    modal.desc.style.display = 'block';
    modal.icon.style.display = 'flex';
    // 1. Description
    let desc = `<p class="modal-desc">${genInfo.desc} `;
    if (genInfo.isHybrid) desc += `\u{41F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{438}\u{442} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} \u{438}\u{437} \u{43A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{438}\u{439}: ${genInfo.categories.map((c)=>(0, _configJs.CATEGORIES_CONFIG)[c].name).join(" \u0438 ")}. `;
    const cdSec = (0, _configJs.GEN_ENERGY_CONFIG)[lvl].cooldown / 1000;
    const levelDescriptions = {
        1: `\u{411}\u{430}\u{437}\u{43E}\u{432}\u{44B}\u{439} \u{443}\u{440}\u{43E}\u{432}\u{435}\u{43D}\u{44C}. \u{421}\u{43E}\u{437}\u{434}\u{430}\u{451}\u{442} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}\u{44B} 1-\u{433}\u{43E} \u{443}\u{440}\u{43E}\u{432}\u{43D}\u{44F}. \u{412}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{430}\u{432}\u{43B}\u{438}\u{432}\u{430}\u{435}\u{442} 1 \u{437}\u{430}\u{440}\u{44F}\u{434} \u{43A}\u{430}\u{436}\u{434}\u{44B}\u{435} ${cdSec} \u{441}\u{435}\u{43A}.`,
        2: `\u{41F}\u{440}\u{43E}\u{434}\u{432}\u{438}\u{43D}\u{443}\u{442}\u{44B}\u{439} \u{440}\u{430}\u{43D}\u{433}. \u{428}\u{430}\u{43D}\u{441}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{44F}: 80% (\u{443}\u{440}. 1), 20% (\u{443}\u{440}. 2). \u{417}\u{430}\u{440}\u{44F}\u{434} \u{43A}\u{430}\u{436}\u{434}\u{44B}\u{435} ${cdSec} \u{441}\u{435}\u{43A}.`,
        3: `\u{41F}\u{440}\u{43E}\u{444}\u{435}\u{441}\u{441}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{439} \u{440}\u{430}\u{43D}\u{433}. \u{428}\u{430}\u{43D}\u{441}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{44F}: 65% (\u{443}\u{440}. 1), 25% (\u{443}\u{440}. 2), 10% (\u{443}\u{440}. 3). \u{417}\u{430}\u{440}\u{44F}\u{434} \u{43A}\u{430}\u{436}\u{434}\u{44B}\u{435} ${cdSec} \u{441}\u{435}\u{43A}.`,
        4: `\u{42D}\u{43B}\u{438}\u{442}\u{43D}\u{44B}\u{439} \u{440}\u{430}\u{43D}\u{433}. \u{428}\u{430}\u{43D}\u{441}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{438}\u{44F}: 50% (\u{443}\u{440}. 1), 30% (\u{443}\u{440}. 2), 15% (\u{443}\u{440}. 3), 5% (\u{443}\u{440}. 4). \u{417}\u{430}\u{440}\u{44F}\u{434} \u{43A}\u{430}\u{436}\u{434}\u{44B}\u{435} ${cdSec} \u{441}\u{435}\u{43A}.`,
        5: `\u{41B}\u{435}\u{433}\u{435}\u{43D}\u{434}\u{430}\u{440}\u{43D}\u{44B}\u{439} \u{440}\u{430}\u{43D}\u{433}! \u{428}\u{430}\u{43D}\u{441}\u{44B}: 30% (\u{443}\u{440}. 1), 30% (\u{443}\u{440}. 2), 25% (\u{443}\u{440}. 3), 10% (\u{443}\u{440}. 4), 5% (\u{443}\u{440}. 5). \u{421}\u{430}\u{43C}\u{430}\u{44F} \u{431}\u{44B}\u{441}\u{442}\u{440}\u{430}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{437}\u{430}\u{440}\u{44F}\u{434}\u{43A}\u{430}: ${cdSec} \u{441}\u{435}\u{43A}.`
    };
    desc += (levelDescriptions[lvl] || '') + '</p>';
    modal.desc.innerHTML = desc;
    // 2. Progression chain(s)
    let progressionHTML = '';
    // --- НОВЫЙ БЛОК: Цепочка улучшений самого генератора ---
    if (genInfo.icons.length > 1) {
        progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">\u{426}\u{435}\u{43F}\u{43E}\u{447}\u{43A}\u{430} \u{443}\u{43B}\u{443}\u{447}\u{448}\u{435}\u{43D}\u{438}\u{439} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{430}</h4>`;
        progressionHTML += `<div class="progression-container">`;
        for(let i = 1; i <= (0, _configJs.CONFIG).MAX_GENERATOR_LEVEL; i++){
            // Проверяем, существует ли иконка для этого уровня
            if (!genInfo.icons[i - 1]) break;
            const discovered = (0, _gameLogicJs.isDiscovered)(`gen_${item.generatorKey}`, i);
            const romanLevel = (0, _configJs.CONFIG).ROMAN_NUMERALS[i];
            const title = discovered ? `${genInfo.name} ${romanLevel}` : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
            const icon = discovered ? `<img src="${genInfo.icons[i - 1]}" alt="${title}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
            progressionHTML += `
         <div class="progression-item-square ${discovered ? '' : 'undiscovered'}" title="${title}">
           <div class="progression-item-icon">${icon}</div>
           <div class="progression-item-level">${romanLevel}</div>
         </div>
       `;
            if (i < (0, _configJs.CONFIG).MAX_GENERATOR_LEVEL && genInfo.icons[i]) progressionHTML += '<div class="progression-arrow-h">\u2192</div>';
        }
        progressionHTML += `</div>`;
        progressionHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';
    }
    const categoryKeys = genInfo.categories;
    categoryKeys.forEach((key, index)=>{
        const category = (0, _configJs.CATEGORIES_CONFIG)[key];
        if (!category) return;
        if (index > 0) progressionHTML += '<hr style="border-color: #444; margin: 15px 0 10px;">';
        progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;
        progressionHTML += `<div class="progression-container">`;
        category.items.forEach((item, itemIndex)=>{
            const discovered = (0, _gameLogicJs.isDiscovered)(key, item.level);
            const undiscoveredClass = discovered ? '' : 'undiscovered';
            const itemIcon = discovered ? `<img src="${item.icon}" alt="">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
            progressionHTML += `
              <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? item.name : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E"}">
                  <div class="progression-item-icon">${itemIcon}</div>
                  <div class="progression-item-level">${item.level}</div>
              </div>
          `;
            if (itemIndex < category.items.length - 1) progressionHTML += '<div class="progression-arrow-h">\u2192</div>';
        });
        progressionHTML += '</div>';
    });
    modal.extraContent.innerHTML = progressionHTML;
    modal.overlay.classList.add('active', 'blocking');
}
function showItemDetailModal(item) {
    const modal = (0, _domJs.DOMElements).detailModal;
    const category = (0, _configJs.CATEGORIES_CONFIG)[item.category];
    const itemInfo = category.items[item.level - 1];
    // Setup modal shell
    modal.icon.innerHTML = `<img src="${itemInfo.icon}" alt="">`;
    modal.title.innerText = itemInfo.name;
    modal.desc.style.display = 'block';
    modal.icon.style.display = 'flex';
    // 1. Description
    modal.desc.innerHTML = `<p class="modal-desc">${itemInfo.desc}</p>`;
    let progressionHTML = '';
    // --- Вспомогательная функция для отрисовки цепочки ---
    const renderProgressionChain = (cat, title, categoryKey)=>{
        let chainHTML = `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${title}</h4>`;
        chainHTML += `<div class="progression-container">`;
        cat.items.forEach((progItem, itemIndex)=>{
            const discovered = (0, _gameLogicJs.isDiscovered)(categoryKey, progItem.level);
            const undiscoveredClass = discovered ? '' : 'undiscovered';
            const itemIcon = discovered ? `<img src="${progItem.icon}" alt="">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
            chainHTML += `
          <div class="progression-item-square ${undiscoveredClass}" title="${discovered ? progItem.name : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E"}">
              <div class="progression-item-icon">${itemIcon}</div>
              <div class="progression-item-level">${progItem.level}</div>
          </div>
      `;
            if (itemIndex < cat.items.length - 1) chainHTML += '<div class="progression-arrow-h">\u2192</div>';
        });
        chainHTML += '</div>';
        return chainHTML;
    };
    // progressionHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';
    // 2. Цепочка эволюции самого предмета
    progressionHTML += renderProgressionChain(category, `\u{426}\u{435}\u{43F}\u{43E}\u{447}\u{43A}\u{430}: ${category.name}`, item.category);
    // 3. Цепочка производимых предметов (если применимо)
    if (item.isItemGenerator || itemInfo.becomesGenerator) {
        const genCategoryKey = item.generatedCategory || itemInfo.becomesGenerator.category;
        const genCategory = (0, _configJs.CATEGORIES_CONFIG)[genCategoryKey];
        if (genCategory) {
            progressionHTML += '<hr style="border-color: #444; margin: 20px 0 15px;">';
            progressionHTML += renderProgressionChain(genCategory, `\u{41F}\u{440}\u{43E}\u{438}\u{437}\u{432}\u{43E}\u{434}\u{438}\u{442}: ${genCategory.name}`, genCategoryKey);
        }
    }
    modal.extraContent.innerHTML = progressionHTML;
    modal.overlay.classList.add('active', 'blocking');
}
function showGeneratorPartDetailModal(item) {
    const modal = (0, _domJs.DOMElements).detailModal;
    const genInfo = (0, _configJs.GENERATORS_DATA)[item.generatorKey];
    const lvl = item.level || 1;
    const partInfo = genInfo.parts[lvl - 1];
    // Setup modal shell
    modal.icon.innerHTML = `<img src="${partInfo.icon}" alt="${partInfo.name}">`;
    modal.title.innerText = `${partInfo.name} (\u{423}\u{440}. ${lvl})`;
    modal.desc.style.display = 'block';
    modal.icon.style.display = 'flex';
    // Description
    modal.desc.innerHTML = `<p class="modal-desc">${partInfo.desc}</p>`;
    // Progression chain
    let progressionHTML = '';
    progressionHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">\u{426}\u{435}\u{43F}\u{43E}\u{447}\u{43A}\u{430} \u{441}\u{431}\u{43E}\u{440}\u{43A}\u{438}</h4>`;
    progressionHTML += `<div class="progression-container">`;
    const partHTML = (level, genKey)=>{
        const currentPartInfo = genInfo.parts[level - 1];
        const partDiscoveryKey = `part_${genKey}`;
        const discovered = (0, _gameLogicJs.isDiscovered)(partDiscoveryKey, level);
        const undiscoveredClass = discovered ? '' : 'undiscovered';
        const title = discovered ? `${currentPartInfo.name}, \u{423}\u{440}. ${level}` : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
        const icon = discovered ? `<img src="${currentPartInfo.icon}" alt="${currentPartInfo.name}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
        return `
        <div class="progression-item-square ${undiscoveredClass}" title="${title}">
            <div class="progression-item-icon">
                ${icon}
            </div>
            <div class="progression-item-level">${level}</div>
        </div>
    `;
    };
    const generatorHTML = (genKey)=>{
        const discovered = (0, _gameLogicJs.isDiscovered)(`gen_${genKey}`, 1);
        const undiscoveredClass = discovered ? '' : 'undiscovered';
        const title = discovered ? `${genInfo.name}, \u{423}\u{440}. I` : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
        const icon = discovered ? `<img src="${genInfo.icons[0]}" alt="${genInfo.name}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
        return `
        <div class="progression-item-square ${undiscoveredClass}" title="${title}">
            <div class="progression-item-icon">
                ${icon}
            </div>
            <div class="progression-item-level">I</div>
        </div>
    `;
    };
    progressionHTML += partHTML(1, item.generatorKey);
    progressionHTML += '<div class="progression-arrow-h">\u2192</div>';
    progressionHTML += partHTML(2, item.generatorKey);
    progressionHTML += '<div class="progression-arrow-h">\u2192</div>';
    progressionHTML += partHTML(3, item.generatorKey);
    progressionHTML += '<div class="progression-arrow-h">\u2192</div>';
    progressionHTML += generatorHTML(item.generatorKey);
    progressionHTML += '</div>';
    modal.extraContent.innerHTML = progressionHTML;
    modal.overlay.classList.add('active', 'blocking');
}

},{"./dom.js":"iyifM","./state.js":"9b3Vp","./config.js":"itWAF","./gameLogic.js":"6oSsV","./ui.js":"3OQ5l","./gameManager.js":"CQNle","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./data/assetUrls.js":"4MPQh"}],"6oSsV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEmptyGridCells", ()=>getEmptyGridCells);
parcelHelpers.export(exports, "getAvailableEmptyCells", ()=>getAvailableEmptyCells);
parcelHelpers.export(exports, "getCurrentPlayerLevel", ()=>getCurrentPlayerLevel);
parcelHelpers.export(exports, "isDiscovered", ()=>isDiscovered);
parcelHelpers.export(exports, "markItemAsDiscovered", ()=>markItemAsDiscovered);
parcelHelpers.export(exports, "regenerateEnergy", ()=>regenerateEnergy);
parcelHelpers.export(exports, "restoreGeneratorsEnergy", ()=>restoreGeneratorsEnergy);
parcelHelpers.export(exports, "shuffleArray", ()=>shuffleArray);
parcelHelpers.export(exports, "formatTimePlayed", ()=>formatTimePlayed);
parcelHelpers.export(exports, "hasUnclaimedCollectionBonuses", ()=>hasUnclaimedCollectionBonuses);
parcelHelpers.export(exports, "hasUnclaimedAchievements", ()=>hasUnclaimedAchievements);
parcelHelpers.export(exports, "hasNewStoryUpdate", ()=>hasNewStoryUpdate);
parcelHelpers.export(exports, "advanceStoryStep", ()=>advanceStoryStep);
parcelHelpers.export(exports, "claimReward", ()=>claimReward);
parcelHelpers.export(exports, "claimItemBonus", ()=>claimItemBonus);
parcelHelpers.export(exports, "claimAchievementReward", ()=>claimAchievementReward);
parcelHelpers.export(exports, "deleteItem", ()=>deleteItem);
parcelHelpers.export(exports, "clearBlockedItemWithCoins", ()=>clearBlockedItemWithCoins);
parcelHelpers.export(exports, "rechargeGeneratorWithCoins", ()=>rechargeGeneratorWithCoins);
parcelHelpers.export(exports, "rechargePlayerEnergyWithCoins", ()=>rechargePlayerEnergyWithCoins);
parcelHelpers.export(exports, "isActionPossible", ()=>isActionPossible);
parcelHelpers.export(exports, "executeMergeOrSwap", ()=>executeMergeOrSwap);
parcelHelpers.export(exports, "getItemType", ()=>getItemType);
parcelHelpers.export(exports, "findClosestEmptyCell", ()=>findClosestEmptyCell);
parcelHelpers.export(exports, "triggerSpecialGenerator", ()=>triggerSpecialGenerator);
parcelHelpers.export(exports, "triggerItemGenerator", ()=>triggerItemGenerator);
parcelHelpers.export(exports, "triggerRegularGenerator", ()=>triggerRegularGenerator);
parcelHelpers.export(exports, "triggerGenerator", ()=>triggerGenerator);
parcelHelpers.export(exports, "checkProgressiveUnlocks", ()=>checkProgressiveUnlocks);
parcelHelpers.export(exports, "spawnRandomExistingGenerator", ()=>spawnRandomExistingGenerator);
parcelHelpers.export(exports, "spawnUpgradePart", ()=>spawnUpgradePart);
parcelHelpers.export(exports, "spawnMagicTool", ()=>spawnMagicTool);
parcelHelpers.export(exports, "spawnCopyBubble", ()=>spawnCopyBubble);
parcelHelpers.export(exports, "spawnGeneratorPart", ()=>spawnGeneratorPart);
parcelHelpers.export(exports, "generateOrder", ()=>generateOrder);
parcelHelpers.export(exports, "generateStoryOrder", ()=>generateStoryOrder);
parcelHelpers.export(exports, "checkOrdersAvailability", ()=>checkOrdersAvailability);
parcelHelpers.export(exports, "completeOrder", ()=>completeOrder);
parcelHelpers.export(exports, "findMergeablePair", ()=>findMergeablePair);
var _stateJs = require("./state.js");
var _domJs = require("./dom.js");
var _configJs = require("./config.js");
var _assetUrlsJs = require("./data/assetUrls.js");
var _gameConfigJs = require("./data/gameConfig.js");
var _audioJs = require("./audio.js");
var _uiJs = require("./ui.js");
var _gameManagerJs = require("./gameManager.js");
var _modalsJs = require("./modals.js");
var _hapticsJs = require("./haptics.js");
function getEmptyGridCells() {
    return (0, _stateJs.gameState).gridData.map((val, idx)=>val === null ? idx : null).filter((val)=>val !== null);
}
function getAvailableEmptyCells() {
    return (0, _stateJs.gameState).gridData.map((val, idx)=>val === null && !(0, _stateJs.gameState).lockedCells.includes(idx) ? idx : null).filter((val)=>val !== null);
}
function getCurrentPlayerLevel() {
    // Итерируем в обратном порядке для эффективности
    for(let i = (0, _gameConfigJs.UNLOCK_THRESHOLDS).length - 1; i >= 0; i--){
        const levelInfo = (0, _gameConfigJs.UNLOCK_THRESHOLDS)[i];
        if ((0, _stateJs.gameState).score >= levelInfo.scoreStart) return levelInfo.level;
    }
    return 1; // На случай, если что-то пойдет не так
}
function isDiscovered(category, level) {
    const key = `${category}-${level}`;
    return !!(0, _stateJs.gameState).discoveredItems[key];
}
function markItemAsDiscovered(category, level) {
    const key = `${category}-${level}`;
    if (!(0, _stateJs.gameState).discoveredItems[key]) (0, _stateJs.gameState).discoveredItems[key] = true;
}
function regenerateEnergy() {
    if ((0, _stateJs.gameState).energy < (0, _gameConfigJs.CONFIG).MAX_ENERGY) {
        (0, _stateJs.gameState).energy = Math.min((0, _gameConfigJs.CONFIG).MAX_ENERGY, (0, _stateJs.gameState).energy + (0, _gameConfigJs.CONFIG).ENERGY_REGEN_AMOUNT);
        (0, _gameManagerJs.saveGame)();
        (0, _domJs.DOMElements).energy.value.innerText = (0, _stateJs.gameState).energy;
    }
}
function restoreGeneratorsEnergy() {
    let changed = false;
    const now = Date.now();
    (0, _stateJs.gameState).gridData.forEach((item)=>{
        if (item && item.isGenerator && item.generatorKey !== 'bonus_chest') {
            const lvl = item.genLevel || 1;
            const config = (0, _gameConfigJs.GEN_ENERGY_CONFIG)[lvl];
            if (item.genEnergy === undefined) item.genEnergy = config.max;
            if (!item.lastRegenTime) item.lastRegenTime = now;
            if (item.genEnergy < config.max) {
                const timePassed = now - item.lastRegenTime;
                const earnedCharges = Math.floor(timePassed / config.cooldown);
                if (earnedCharges > 0) {
                    item.genEnergy = Math.min(config.max, item.genEnergy + earnedCharges);
                    item.lastRegenTime = item.lastRegenTime + earnedCharges * config.cooldown;
                    changed = true;
                }
            } else item.lastRegenTime = now;
        }
    });
    if (changed) (0, _gameManagerJs.saveGame)();
}
function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [
            array[j],
            array[i]
        ];
    }
}
function formatTimePlayed(ms) {
    if (!ms || ms < 1000) return "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B";
    const seconds = Math.floor(ms / 1000 % 60);
    const minutes = Math.floor(ms / 60000 % 60);
    const hours = Math.floor(ms / 3600000 % 24);
    const days = Math.floor(ms / 86400000);
    let parts = [];
    if (days > 0) parts.push(`${days} \u{434}`);
    if (hours > 0) parts.push(`${hours} \u{447}`);
    if (minutes > 0) parts.push(`${minutes} \u{43C}`);
    if (parts.length === 0 && seconds > 0) return `${seconds} \u{441}\u{435}\u{43A}`;
    return parts.slice(0, 2).join(' ');
}
function hasUnclaimedCollectionBonuses() {
    for(const catKey in 0, _configJs.CATEGORIES_CONFIG){
        const category = (0, _configJs.CATEGORIES_CONFIG)[catKey];
        for (const item of category.items){
            const itemKey = `${catKey}-${item.level}`;
            const discovered = isDiscovered(catKey, item.level);
            const bonusClaimed = !!(0, _stateJs.gameState).claimedCollectionBonuses[itemKey];
            if (discovered && !bonusClaimed) return true;
        }
    }
    return false;
}
function hasUnclaimedAchievements() {
    for(const key in 0, _configJs.ACHIEVEMENTS_DATA){
        const achievement = (0, _configJs.ACHIEVEMENTS_DATA)[key];
        const progress = (0, _stateJs.playerProfile)[key] || 0;
        for(let i = 0; i < achievement.tiers.length; i++){
            const tier = achievement.tiers[i];
            const isUnlocked = progress >= tier.goal;
            const isClaimed = (0, _stateJs.gameState).claimedAchievements[`${achievement.id}_${i}`];
            if (isUnlocked && !isClaimed) return true;
        }
    }
    return false;
}
function hasNewStoryUpdate() {
    /*if (!gameState.storyState.unlocked) return false;
  const playerLevel = getCurrentPlayerLevel();

  for (const storyId in STORY_DATA) {
      const story = STORY_DATA[storyId];
      const progress = gameState.storyState.progress[storyId] || { currentChapter: 1, currentStep: 0, completed: false };

      // Пропускаем сюжет, если уровень игрока недостаточен
      if (story.requiredLevel && playerLevel < story.requiredLevel) {
          continue;
      }

      if (progress.completed) continue;

      const chapter = story.chapters[progress.currentChapter];
      if (chapter && chapter.steps[progress.currentStep]) {
          return true; // Найдена доступная для продолжения история
      }
  }*/ return false;
}
function advanceStoryStep(fromModal = false) {
    const activeStoryId = (0, _stateJs.gameState).storyState.activeStoryId;
    if (!(0, _stateJs.gameState).storyState.unlocked || !activeStoryId) return;
    const story = (0, _configJs.STORY_DATA)[activeStoryId];
    // Если прогресса для этой истории еще нет, создаем его "на лету"
    if (!(0, _stateJs.gameState).storyState.progress[activeStoryId]) (0, _stateJs.gameState).storyState.progress[activeStoryId] = {
        currentChapter: 1,
        currentStep: 0,
        completed: false
    };
    const progress = (0, _stateJs.gameState).storyState.progress[activeStoryId];
    if (!story || progress.completed) return;
    const chapter = story.chapters[progress.currentChapter];
    if (!chapter) return;
    const step = chapter.steps[progress.currentStep];
    if (!step) return;
    // Обработка выполнения задач
    if (step.type === 'task') {
        if (step.task.type === 'spend_coins') {
            if ((0, _stateJs.gameState).coins < step.task.amount) {
                (0, _uiJs.showToast)(`\u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{43C}\u{43E}\u{43D}\u{435}\u{442}! \u{41D}\u{443}\u{436}\u{43D}\u{43E} ${step.task.amount}`, 'error');
                return;
            }
            (0, _stateJs.gameState).coins -= step.task.amount;
            // В идеале, здесь должна быть отдельная статистика потраченных монет
            _hapticsJs.hapticSuccess();
            (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxCoin);
            (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxOrderComplete);
        }
        // Обработка награды
        if (step.reward) {
            if (step.reward.type === 'generator') {
                const generatorData = (0, _configJs.GENERATORS_DATA)[step.reward.key];
                const rewardLevel = step.reward.level;
                if (generatorData && generatorData.isSpecial) {
                    // Специальный генератор (например, bonus_chest) с конечными зарядами
                    let charges = 1; // Значение по умолчанию
                    if (step.reward.key === 'bonus_chest') {
                        if (rewardLevel === 2) charges = 3;
                        else if (rewardLevel === 3) charges = 5;
                    }
                    (0, _stateJs.gameState).rewardQueue.push({
                        isGenerator: true,
                        generatorKey: step.reward.key,
                        genLevel: rewardLevel,
                        genCharges: charges
                    });
                } else // Обычный, перезаряжаемый генератор
                (0, _stateJs.gameState).rewardQueue.push({
                    isGenerator: true,
                    generatorKey: step.reward.key,
                    genLevel: rewardLevel,
                    genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[rewardLevel].max,
                    lastRegenTime: Date.now()
                });
                markItemAsDiscovered(`gen_${step.reward.key}`, rewardLevel);
                // Если генератор сюжетный, сразу разблокируем его категории для заказов
                if (generatorData && generatorData.isStoryOnly) generatorData.categories.forEach((cat)=>{
                    if (!(0, _stateJs.gameState).activeCategories.includes(cat)) (0, _stateJs.gameState).activeCategories.push(cat);
                });
            } else if (step.reward.type === 'item') {
                (0, _stateJs.gameState).rewardQueue.push({
                    category: step.reward.category,
                    level: step.reward.level
                });
                markItemAsDiscovered(step.reward.category, step.reward.level);
            }
        }
    }
    // Переход к следующему шагу
    progress.currentStep++;
    if (progress.currentStep >= chapter.steps.length) {
        progress.currentChapter++;
        progress.currentStep = 0;
        // Если следующей главы нет, помечаем сюжет как завершенный
        if (!story.chapters[progress.currentChapter]) progress.completed = true;
    }
    // Перерисовываем модальное окно с новым шагом, если оно было открыто
    if (fromModal) (0, _modalsJs.openStoryModal)();
    (0, _uiJs.updateMenuNotification)();
    (0, _uiJs.updateUI)();
    (0, _gameManagerJs.saveGame)();
}
function claimReward(rewardIndex, startElement) {
    const emptyCells = getEmptyGridCells();
    if (emptyCells.length === 0) {
        (0, _uiJs.showToast)("\u041D\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 \u043D\u0430 \u043F\u043E\u043B\u0435!", "error");
        return;
    }
    _hapticsJs.hapticMedium();
    // Немедленно удаляем элемент из UI, чтобы избежать двойного клика
    startElement.style.pointerEvents = 'none';
    startElement.style.opacity = '0.5';
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxClaimReward);
    const reward = (0, _stateJs.gameState).rewardQueue[rewardIndex];
    const targetCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const targetCellElement = (0, _domJs.DOMElements).grid.children[targetCellIndex];
    let icon = '';
    if (reward.isGenerator) {
        const genInfo = (0, _configJs.GENERATORS_DATA)[reward.generatorKey];
        const lvl = reward.genLevel || 1;
        const iconPath = genInfo.icons[lvl - 1];
        icon = `<img src="${iconPath}" alt="">`;
    } else if (reward.isUpgradePart) icon = `<img src="${0, _assetUrlsJs.upgradePartIconUrl}" alt="">`;
    else if (reward.isMagicTool) icon = `<img src="${0, _assetUrlsJs.magicToolIconUrl}" alt="">`;
    else if (reward.isCopyBubble) icon = `<img src="${0, _assetUrlsJs.copyBubbleIconUrl}" alt="">`;
    else if (reward.isGeneratorPart) {
        const genInfo = (0, _configJs.GENERATORS_DATA)[reward.generatorKey];
        const lvl = reward.level || 1;
        const partInfo = genInfo.parts[lvl - 1];
        icon = `<img src="${partInfo.icon}" alt="">`;
    } else if (reward.category && reward.level) {
        // Обычный предмет из категории
        const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[reward.category]?.items[reward.level - 1];
        if (itemInfo) icon = `<img src="${itemInfo.icon}" alt="">`;
    }
    (0, _uiJs.moveItem3D)(startElement, targetCellElement, icon).then(()=>{
        // Удаляем награду из массива только после завершения анимации
        (0, _stateJs.gameState).rewardQueue.splice(rewardIndex, 1);
        let finalItem = reward;
        // Проверяем, не должен ли предмет стать генератором предметов
        if (reward.category && reward.level) {
            const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[reward.category]?.items[reward.level - 1];
            if (itemInfo && itemInfo.becomesGenerator) {
                const genInfo = itemInfo.becomesGenerator;
                finalItem = {
                    isItemGenerator: true,
                    category: reward.category,
                    level: reward.level,
                    generatedCategory: genInfo.category,
                    charges: genInfo.charges
                };
                // Разблокируем новую категорию для заказов, если это впервые
                if (!(0, _stateJs.gameState).unlockedItemGenCategories.includes(genInfo.category)) {
                    (0, _stateJs.gameState).unlockedItemGenCategories.push(genInfo.category);
                    (0, _uiJs.showToast)(`\u{41D}\u{43E}\u{432}\u{430}\u{44F} \u{43A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{438}\u{44F} "${(0, _configJs.CATEGORIES_CONFIG)[genInfo.category].name}" \u{442}\u{435}\u{43F}\u{435}\u{440}\u{44C} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{432} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{430}\u{445}!`, "success");
                }
            }
        }
        (0, _stateJs.gameState).gridData[targetCellIndex] = finalItem;
        (0, _gameManagerJs.saveGame)();
        (0, _uiJs.updateUI)(); // Перерисовывает и очередь, и поле
        (0, _uiJs.animateCellPop)(targetCellIndex);
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSpawn);
    });
}
function claimItemBonus(category, level, element) {
    const key = `${category}-${level}`;
    // Проверяем, что бонус еще не был получен
    if ((0, _stateJs.gameState).claimedCollectionBonuses[key]) return;
    // Отмечаем бонус как полученный
    (0, _stateJs.gameState).claimedCollectionBonuses[key] = true;
    // Добавляем монеты
    const bonusAmount = level * (0, _gameConfigJs.CONFIG).COLLECTION_BONUS_BASE_VALUE;
    (0, _stateJs.gameState).coins += bonusAmount;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxCoin);
    (0, _stateJs.playerProfile).totalCoinsEarned += bonusAmount;
    // Анимация полета монетки
    (0, _uiJs.animateRewardFly)(element, (0, _domJs.DOMElements).coins.container, `<img src="${(0, _assetUrlsJs.coinIconUrl)}" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`, 1, 'coin');
    // Обновляем вид элемента в модалке и запускаем анимации
    element.classList.remove('bonus-unclaimed');
    element.classList.add('bonus-claiming'); // Добавляем класс для анимации пульсации
    element.onclick = null; // Убираем возможность повторного клика
    const bonusIcon = element.querySelector('.unclaimed-bonus-icon');
    if (bonusIcon) bonusIcon.classList.add('exploding'); // Добавляем класс для анимации "взрыва"
    // Обновляем счетчик монет (можно сделать чуть раньше, чем закончится полет)
    setTimeout(()=>{
        (0, _domJs.DOMElements).coins.value.innerText = (0, _stateJs.gameState).coins;
        (0, _uiJs.updateMenuNotification)();
        (0, _gameManagerJs.saveGame)();
    }, 300);
    // Убираем иконку и класс пульсации после завершения их анимаций
    setTimeout(()=>{
        if (bonusIcon) bonusIcon.remove();
        element.classList.remove('bonus-claiming');
    }, 400); // Должно совпадать с длительностью анимаций
}
function claimAchievementReward(achievementId, tierIndex, buttonElement) {
    const achievement = (0, _configJs.ACHIEVEMENTS_DATA)[achievementId];
    if (!achievement) return;
    const tier = achievement.tiers[tierIndex];
    const progress = (0, _stateJs.playerProfile)[achievementId] || 0;
    const key = `${achievementId}_${tierIndex}`;
    if (progress >= tier.goal && !(0, _stateJs.gameState).claimedAchievements[key]) {
        // Добавляем награду
        (0, _stateJs.gameState).coins += tier.reward;
        _hapticsJs.hapticSuccess();
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxCoin);
        // Отмечаем как полученную
        (0, _stateJs.gameState).claimedAchievements[key] = true;
        // Анимация
        (0, _uiJs.animateRewardFly)(buttonElement, (0, _domJs.DOMElements).coins.container, `<img src="${(0, _assetUrlsJs.coinIconUrl)}" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`, 5, 'coin');
        // Обновляем UI
        buttonElement.classList.add('claimed');
        buttonElement.disabled = true;
        buttonElement.innerHTML = `<img src="${0, _assetUrlsJs.checkmarkIconUrl}" alt="\u{412}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}">`;
        buttonElement.onclick = null;
        (0, _domJs.DOMElements).coins.value.innerText = (0, _stateJs.gameState).coins;
        (0, _uiJs.updateMenuNotification)();
        (0, _gameManagerJs.saveGame)();
    }
}
function deleteItem(index) {
    const item = (0, _stateJs.gameState).gridData[index];
    // Проверяем, что предмет существует и его можно продать (не генератор, не заблокирован)
    if (index === -1 || !item || item.isGenerator || item.isBlocked || item.isUpgradePart || item.isMagicTool || item.isCopyBubble) {
        (0, _modalsJs.closeModal)();
        return;
    }
    // Получаем DOM-элемент ячейки ДО того, как UI обновится
    const cellElement = (0, _domJs.DOMElements).grid.children[index];
    // Цена продажи зависит от уровня предмета. Для деталей генератора тоже есть уровень.
    const sellPrice = (item.level || 1) * 3;
    // Запускаем анимацию полета монеток. Она возьмет координаты ячейки, пока предмет еще в ней.
    (0, _uiJs.animateRewardFly)(cellElement, (0, _domJs.DOMElements).coins.container, `<img src="${(0, _assetUrlsJs.coinIconUrl)}" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`, 5, 'coin');
    // Теперь обновляем состояние игры
    (0, _stateJs.gameState).coins += sellPrice;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxCoin);
    (0, _stateJs.playerProfile).totalCoinsEarned += sellPrice;
    (0, _stateJs.gameState).gridData[index] = null;
    (0, _modalsJs.closeModal)();
    (0, _gameManagerJs.saveGame)();
    // Обновляем UI. Это сотрет предмет с поля и обновит счетчик монет.
    // Анимация монеток будет продолжаться параллельно.
    (0, _uiJs.updateUI)();
}
function clearBlockedItemWithCoins(index) {
    if ((0, _stateJs.gameState).coins < (0, _gameConfigJs.CONFIG).BLOCKED_CLEAR_COST_COINS) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="toast-icon" alt=""> \u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{43C}\u{43E}\u{43D}\u{435}\u{442} \u{434}\u{43B}\u{44F} \u{440}\u{430}\u{441}\u{447}\u{438}\u{441}\u{442}\u{43A}\u{438} (\u{43D}\u{443}\u{436}\u{43D}\u{43E} ${(0, _gameConfigJs.CONFIG).BLOCKED_CLEAR_COST_COINS})!`, "error");
        (0, _modalsJs.closeModal)();
        return;
    }
    const item = (0, _stateJs.gameState).gridData[index];
    (0, _stateJs.gameState).coins -= (0, _gameConfigJs.CONFIG).BLOCKED_CLEAR_COST_COINS;
    delete item.isBlocked; // Просто убираем флаг блокировки
    // После снятия блокировки предмет считается открытым и добавляется в коллекцию.
    markItemAsDiscovered(item.category, item.level);
    (0, _modalsJs.closeModal)();
    (0, _gameManagerJs.saveGame)();
    (0, _uiJs.updateUI)();
    // showToast("Завал успешно расчищен!", "success");
    setTimeout(()=>{
        (0, _uiJs.animateCellPop)(index);
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSpawn);
    }, 50);
}
function rechargeGeneratorWithCoins(index) {
    const item = (0, _stateJs.gameState).gridData[index];
    if (!item || !item.isGenerator || item.generatorKey === 'bonus_chest') {
        (0, _modalsJs.closeModal)();
        return;
    }
    if ((0, _stateJs.gameState).coins < (0, _gameConfigJs.CONFIG).GENERATOR_RECHARGE_COST) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="toast-icon" alt=""> \u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{43C}\u{43E}\u{43D}\u{435}\u{442} (\u{43D}\u{443}\u{436}\u{43D}\u{43E} ${(0, _gameConfigJs.CONFIG).GENERATOR_RECHARGE_COST})!`, "error");
        (0, _modalsJs.closeModal)();
        return;
    }
    const lvl = item.genLevel || 1;
    const config = (0, _gameConfigJs.GEN_ENERGY_CONFIG)[lvl];
    (0, _stateJs.gameState).coins -= (0, _gameConfigJs.CONFIG).GENERATOR_RECHARGE_COST;
    item.genEnergy = config.max;
    item.lastRegenTime = Date.now();
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxClaimReward);
    (0, _modalsJs.closeModal)();
    (0, _gameManagerJs.saveGame)();
    (0, _uiJs.updateUI)();
    (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="toast-icon" alt=""> \u{42D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44F} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{430} \u{43F}\u{43E}\u{43B}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E} \u{432}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{43B}\u{435}\u{43D}\u{430}!`, "success");
}
function rechargePlayerEnergyWithCoins() {
    if ((0, _stateJs.gameState).coins < (0, _gameConfigJs.CONFIG).ENERGY_RECHARGE_COST_COINS) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="toast-icon" alt=""> \u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{43C}\u{43E}\u{43D}\u{435}\u{442} (\u{43D}\u{443}\u{436}\u{43D}\u{43E} ${(0, _gameConfigJs.CONFIG).ENERGY_RECHARGE_COST_COINS})!`, "error");
        (0, _modalsJs.closeModal)();
        return;
    }
    if ((0, _stateJs.gameState).energy >= (0, _gameConfigJs.CONFIG).MAX_ENERGY) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="toast-icon" alt=""> \u{412}\u{430}\u{448}\u{430} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44F} \u{443}\u{436}\u{435} \u{43F}\u{43E}\u{43B}\u{43D}\u{430}\u{44F}!`, "error");
        (0, _modalsJs.closeModal)();
        return;
    }
    (0, _stateJs.gameState).coins -= (0, _gameConfigJs.CONFIG).ENERGY_RECHARGE_COST_COINS;
    (0, _stateJs.gameState).energy = (0, _gameConfigJs.CONFIG).MAX_ENERGY;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxClaimReward);
    (0, _modalsJs.closeModal)();
    (0, _gameManagerJs.saveGame)();
    (0, _uiJs.updateUI)();
    (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="toast-icon" alt=""> \u{42D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44F} \u{43F}\u{43E}\u{43B}\u{43D}\u{43E}\u{441}\u{442}\u{44C}\u{44E} \u{432}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{43B}\u{435}\u{43D}\u{430}!`, "success");
}
function createUpgradedItem(category, level) {
    markItemAsDiscovered(category, level);
    const newItemInfo = (0, _configJs.CATEGORIES_CONFIG)[category]?.items[level - 1];
    if (newItemInfo && newItemInfo.becomesGenerator) {
        const genInfo = newItemInfo.becomesGenerator;
        // Разблокируем новую категорию для заказов, если это впервые
        if (!(0, _stateJs.gameState).unlockedItemGenCategories.includes(genInfo.category)) {
            (0, _stateJs.gameState).unlockedItemGenCategories.push(genInfo.category);
            (0, _uiJs.showToast)(`\u{41D}\u{43E}\u{432}\u{430}\u{44F} \u{43A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{438}\u{44F} "${(0, _configJs.CATEGORIES_CONFIG)[genInfo.category].name}" \u{442}\u{435}\u{43F}\u{435}\u{440}\u{44C} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{432} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{430}\u{445}!`, "success");
        }
        return {
            isItemGenerator: true,
            category: category,
            level: level,
            generatedCategory: genInfo.category,
            charges: genInfo.charges
        };
    }
    return {
        category: category,
        level: level
    };
}
function handleUnblockMerge(fromIdx, toIdx, source) {
    if (source.level >= (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL) return false;
    const nextLevel = source.level + 1;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playMergeSound)(nextLevel);
    (0, _stateJs.gameState).gridData[fromIdx] = null;
    const newItem = createUpgradedItem(source.category, nextLevel);
    newItem.isBlocked = false; // Убедимся, что предмет разблокирован
    (0, _stateJs.gameState).gridData[toIdx] = newItem;
    (0, _uiJs.triggerMergeEffects)(toIdx, source.category);
    // showToast("Паутина снята!", "success");
    return true;
}
function handleGeneratorUpgrade(partIdx, genIdx, generator) {
    const lvl = generator.genLevel || 1;
    if (lvl >= (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL) return false;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxMerge);
    const nextLvl = lvl + 1;
    (0, _stateJs.gameState).gridData[partIdx] = null;
    (0, _stateJs.gameState).gridData[genIdx] = {
        ...generator,
        genLevel: nextLvl,
        genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[nextLvl].max,
        lastRegenTime: Date.now()
    };
    markItemAsDiscovered(`gen_${generator.generatorKey}`, nextLvl);
    (0, _uiJs.triggerMergeEffects)(genIdx, (0, _configJs.GENERATORS_DATA)[generator.generatorKey].categories[0]);
    // showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
    return true;
}
function handleGeneratorPartMerge(fromIdx, toIdx, source) {
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxMerge);
    // Гарантируем, что исходная деталь, которую мы сливаем, будет добавлена в коллекцию.
    markItemAsDiscovered(`part_${source.generatorKey}`, source.level);
    if (source.level >= 3) {
        (0, _stateJs.gameState).gridData[fromIdx] = null;
        // Create a new L1 generator
        (0, _stateJs.gameState).gridData[toIdx] = {
            isGenerator: true,
            generatorKey: source.generatorKey,
            genLevel: 1,
            genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[1].max,
            lastRegenTime: Date.now()
        };
        markItemAsDiscovered(`gen_${source.generatorKey}`, 1);
        (0, _uiJs.triggerMergeEffects)(toIdx, (0, _configJs.GENERATORS_DATA)[source.generatorKey].categories[0]);
        // showToast(`🛠️ Собран новый генератор!`, "success");
        return true;
    } else {
        (0, _stateJs.gameState).gridData[fromIdx] = null;
        markItemAsDiscovered(`part_${source.generatorKey}`, source.level + 1);
        (0, _stateJs.gameState).gridData[toIdx] = {
            isGeneratorPart: true,
            generatorKey: source.generatorKey,
            level: source.level + 1
        };
        (0, _uiJs.triggerMergeEffects)(toIdx, (0, _configJs.GENERATORS_DATA)[source.generatorKey].categories[0]);
        return true;
    }
}
function handleItemUpgradeWithTool(toolIdx, itemIdx, regularItem) {
    if (regularItem.level >= (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL) return false;
    const nextLvl = regularItem.level + 1;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playMergeSound)(nextLvl);
    (0, _stateJs.gameState).gridData[toolIdx] = null;
    (0, _stateJs.gameState).gridData[itemIdx] = createUpgradedItem(regularItem.category, nextLvl);
    (0, _uiJs.triggerMergeEffects)(itemIdx, regularItem.category);
    // showToast(`✨ Предмет улучшен до уровня ${nextLvl}!`, "success");
    return true;
}
function handleItemMerge(fromIdx, toIdx, source) {
    if (source.level >= (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL) return false;
    const nextLevel = source.level + 1;
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playMergeSound)(nextLevel);
    // Стандартное слияние
    (0, _stateJs.gameState).gridData[fromIdx] = null;
    (0, _stateJs.gameState).gridData[toIdx] = createUpgradedItem(source.category, nextLevel);
    (0, _uiJs.triggerMergeEffects)(toIdx, source.category);
    return true;
}
function handleGeneratorMerge(fromIdx, toIdx, source) {
    _hapticsJs.hapticSuccess();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxMerge);
    if (source.generatorKey === 'bonus_chest') {
        const currentLevel = source.genLevel || 1;
        if (currentLevel === 1) {
            (0, _stateJs.gameState).gridData[fromIdx] = null;
            (0, _stateJs.gameState).gridData[toIdx] = {
                isGenerator: true,
                generatorKey: 'bonus_chest',
                genLevel: 2,
                genCharges: 3
            };
            (0, _uiJs.triggerMergeEffects)(toIdx, 'stationery');
            markItemAsDiscovered('gen_bonus_chest', 2);
            return true;
        } else if (currentLevel === 2) {
            (0, _stateJs.gameState).gridData[fromIdx] = null;
            (0, _stateJs.gameState).gridData[toIdx] = {
                isGenerator: true,
                generatorKey: 'bonus_chest',
                genLevel: 3,
                genCharges: 5
            };
            (0, _uiJs.triggerMergeEffects)(toIdx, 'stationery');
            markItemAsDiscovered('gen_bonus_chest', 3);
            return true;
        }
        return false; // Нельзя объединять L3 и выше
    }
    const lvl = source.genLevel || 1;
    if (lvl >= (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL) return false;
    const nextLvl = lvl + 1;
    (0, _stateJs.gameState).gridData[fromIdx] = null;
    (0, _stateJs.gameState).gridData[toIdx] = {
        isGenerator: true,
        generatorKey: source.generatorKey,
        genLevel: nextLvl,
        genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[nextLvl].max,
        lastRegenTime: Date.now()
    };
    markItemAsDiscovered(`gen_${source.generatorKey}`, nextLvl);
    (0, _uiJs.triggerMergeEffects)(toIdx, (0, _configJs.GENERATORS_DATA)[source.generatorKey].categories[0]);
    // showToast(`🎉 Генератор улучшен до уровня ${CONFIG.ROMAN_NUMERALS[nextLvl]}!`, "success");
    return true;
}
function handleSwap(fromIdx, toIdx, source, target) {
    if (target && target.isBlocked) return false;
    _hapticsJs.hapticLight();
    [(0, _stateJs.gameState).gridData[fromIdx], (0, _stateJs.gameState).gridData[toIdx]] = [
        target,
        source
    ];
    return true;
}
const MERGE_HANDLERS = [
    // Слияние с заблокированным предметом
    {
        canHandle: (s, t)=>!s.isBlocked && t?.isBlocked && !s.isGenerator && !s.isItemGenerator && s.category === t.category && s.level === t.level && s.level < (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL,
        execute: (from, to, src)=>handleUnblockMerge(from, to, src)
    },
    {
        canHandle: (s, t)=>t?.isMagicTool && s && !s.isGenerator && !s.isBlocked && !s.isUpgradePart && !s.isMagicTool && !s.isGeneratorPart && s.level < (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL,
        execute: (from, to, src, trg)=>handleItemUpgradeWithTool(to, from, src)
    },
    // Слияние двух деталей генератора
    {
        canHandle: (s, t)=>t && s.isGeneratorPart && t.isGeneratorPart && s.generatorKey === t.generatorKey && s.level === t.level,
        execute: (from, to, src)=>handleGeneratorPartMerge(from, to, src)
    },
    // Слияние двух генераторов
    {
        canHandle: (s, t)=>{
            if (!t || !s.isGenerator || !t.isGenerator || s.generatorKey !== t.generatorKey || s.genLevel !== t.genLevel) return false;
            // Now check if they are mergeable based on level
            if (s.generatorKey === 'bonus_chest') {
                const level = s.genLevel || 1;
                return level === 1 || level === 2; // Можно объединять сундуки 1 и 2 уровней
            }
            return (s.genLevel || 1) < (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL;
        },
        execute: (from, to, src)=>handleGeneratorMerge(from, to, src)
    },
    // Улучшение генератора деталью (в обе стороны)
    {
        canHandle: (s, t)=>s.isUpgradePart && t?.isGenerator && t.generatorKey !== 'bonus_chest' && (t.genLevel || 1) < (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL,
        execute: (from, to, src, trg)=>handleGeneratorUpgrade(from, to, trg)
    },
    {
        canHandle: (s, t)=>t?.isUpgradePart && s.isGenerator && s.generatorKey !== 'bonus_chest' && (s.genLevel || 1) < (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL,
        execute: (from, to, src, trg)=>handleGeneratorUpgrade(to, from, src)
    },
    // Улучшение предмета магическим инструментом (в обе стороны)
    {
        canHandle: (s, t)=>s.isMagicTool && t && !t.isGenerator && !t.isBlocked && !t.isUpgradePart && !t.isMagicTool && !t.isGeneratorPart && t.level < (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL,
        execute: (from, to, src, trg)=>handleItemUpgradeWithTool(from, to, trg)
    },
    // Копирование предмета пузырем (перетаскивание предмета НА пузырь)
    {
        canHandle: (s, t)=>t?.isCopyBubble && s && !s.isGenerator && !s.isBlocked && !s.isGeneratorPart && !s.isUpgradePart && !s.isMagicTool && !s.isCopyBubble && (s.isItemGenerator || s.level < (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL),
        execute: (from, to, src, trg)=>{
            _hapticsJs.hapticSuccess();
            (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxMerge);
            // Пузырь в ячейке 'to' заменяется копией предмета из ячейки 'from'.
            // Предмет в 'from' НЕ удаляется, что приводит к дублированию.
            (0, _stateJs.gameState).gridData[to] = {
                ...src
            };
            (0, _uiJs.triggerMergeEffects)(to, src.category);
            return true;
        }
    },
    // Слияние двух обычных предметов (включая предметы-генераторы)
    {
        canHandle: (s, t)=>t && !s.isBlocked && !t.isBlocked && !s.isGenerator && !t.isGenerator && !s.isUpgradePart && !t.isUpgradePart && !s.isGeneratorPart && !t.isGeneratorPart && !s.isMagicTool && !t.isMagicTool && !s.isCopyBubble && !t.isCopyBubble && s.category === t.category && s.level === t.level && s.level < (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL,
        execute: (from, to, src)=>handleItemMerge(from, to, src)
    }
];
function isActionPossible(fromIdx, toIdx) {
    const source = (0, _stateJs.gameState).gridData[fromIdx];
    const target = (0, _stateJs.gameState).gridData[toIdx];
    if (!source) return false; // Нельзя перетаскивать пустую ячейку
    // Проверка на слияние
    for (const handler of MERGE_HANDLERS){
        if (handler.canHandle(source, target)) return true;
    }
    // Проверка на обмен
    // Нельзя меняться местами с заблокированным предметом
    if (target && target.isBlocked) return false;
    // Можно меняться с пустой ячейкой или другим незаблокированным предметом
    return true;
}
function executeMergeOrSwap(fromIdx, toIdx) {
    const source = (0, _stateJs.gameState).gridData[fromIdx];
    const target = (0, _stateJs.gameState).gridData[toIdx];
    for (const handler of MERGE_HANDLERS)if (handler.canHandle(source, target)) {
        handler.execute(fromIdx, toIdx, source, target);
        (0, _stateJs.playerProfile).totalMerges++;
        // --- NEW LOGIC FOR MERGE COUNTS ---
        let mergeCategory;
        // Case 1: Merging two regular items, or a regular item with a blocked one.
        if (source.category && !source.isGenerator && !source.isGeneratorPart && !source.isMagicTool && !source.isUpgradePart) mergeCategory = source.category;
        else if ((source.isGenerator || source.isGeneratorPart) && target && (target.isGenerator || target.isGeneratorPart)) mergeCategory = (0, _configJs.GENERATORS_DATA)[source.generatorKey].categories[0];
        else if (source.isUpgradePart && target && target.isGenerator) mergeCategory = (0, _configJs.GENERATORS_DATA)[target.generatorKey].categories[0];
        else if (target && target.isUpgradePart && source.isGenerator) mergeCategory = (0, _configJs.GENERATORS_DATA)[source.generatorKey].categories[0];
        else if (source.isMagicTool && target && target.category) mergeCategory = target.category;
        else if (target && target.isMagicTool && source.category) mergeCategory = source.category;
        if (mergeCategory) (0, _stateJs.playerProfile).mergeCounts[mergeCategory] = ((0, _stateJs.playerProfile).mergeCounts[mergeCategory] || 0) + 1;
        // --- END NEW LOGIC ---
        (0, _gameManagerJs.saveGame)();
        (0, _uiJs.updateUI)();
        return;
    }
    // Если ни один обработчик слияния не сработал, выполняем перемещение
    const wasSwapped = handleSwap(fromIdx, toIdx, source, target);
    if (wasSwapped) (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSwap);
    (0, _gameManagerJs.saveGame)();
    (0, _uiJs.updateUI)();
    if (wasSwapped) setTimeout(()=>{
        (0, _uiJs.animateCellPop)(toIdx);
        if (target) (0, _uiJs.animateCellPop)(fromIdx);
    }, 10); // Небольшая задержка, чтобы DOM успел обновиться
}
function getItemType(item) {
    if (item.isBlocked) return 'blocked';
    if (item.isGenerator) return 'generator';
    if (item.isItemGenerator) return 'itemGenerator';
    if (item.isGeneratorPart) return 'generatorPart';
    if (item.isUpgradePart || item.isMagicTool || item.isCopyBubble) return 'booster';
    return 'regular';
}
function findClosestEmptyCell(fromIndex, emptyCells) {
    const genX = fromIndex % (0, _gameConfigJs.CONFIG).GRID_COLS;
    const genY = Math.floor(fromIndex / (0, _gameConfigJs.CONFIG).GRID_COLS);
    let closestCells = [];
    let minDistance = Infinity;
    emptyCells.forEach((cellIndex)=>{
        const cellX = cellIndex % (0, _gameConfigJs.CONFIG).GRID_COLS;
        const cellY = Math.floor(cellIndex / (0, _gameConfigJs.CONFIG).GRID_COLS);
        const distance = Math.abs(genX - cellX) + Math.abs(genY - cellY);
        if (distance < minDistance) {
            minDistance = distance;
            closestCells = [
                cellIndex
            ];
        } else if (distance === minDistance) closestCells.push(cellIndex);
    });
    // Выбираем случайную ячейку из самых близких
    return closestCells[Math.floor(Math.random() * closestCells.length)];
}
function triggerSpecialGenerator(generator, fromIndex) {
    if (generator.genCharges <= 0) return;
    const genData = (0, _configJs.GENERATORS_DATA)[generator.generatorKey];
    if (!genData || !genData.drops || genData.drops.length === 0) {
        console.error(`No drops defined for special generator: ${generator.generatorKey}`);
        return;
    }
    const emptyCells = getAvailableEmptyCells();
    if (emptyCells.length === 0) {
        (0, _uiJs.showToast)("\u041D\u0435\u0442 \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430!", "error");
        return;
    }
    _hapticsJs.hapticMedium();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxGeneratorSpawn);
    generator.genCharges--;
    const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
    (0, _stateJs.gameState).lockedCells.push(targetCellIndex);
    // --- NEW LOGIC: Weighted random drop ---
    const drops = genData.drops;
    const totalWeight = drops.reduce((sum, drop)=>sum + drop.weight, 0);
    let random = Math.random() * totalWeight;
    let chosenDrop;
    for (const drop of drops){
        if (random < drop.weight) {
            chosenDrop = drop;
            break;
        }
        random -= drop.weight;
    }
    if (!chosenDrop) chosenDrop = drops[drops.length - 1];
    const newItem = {
        ...chosenDrop.item
    }; // Create a copy
    (0, _uiJs.moveItem3D)((0, _domJs.DOMElements).grid.children[fromIndex], (0, _domJs.DOMElements).grid.children[targetCellIndex], `<img src="${newItem.icon}" alt="">`).then(()=>{
        if (newItem.discoveryKey) markItemAsDiscovered(newItem.discoveryKey, 1);
        delete newItem.discoveryKey; // Clean up the object before placing it on the grid
        (0, _stateJs.gameState).gridData[targetCellIndex] = newItem;
        (0, _stateJs.gameState).lockedCells = (0, _stateJs.gameState).lockedCells.filter((idx)=>idx !== targetCellIndex);
        if (generator.genCharges <= 0) (0, _stateJs.gameState).gridData[fromIndex] = null;
        (0, _gameManagerJs.saveGame)();
        (0, _uiJs.updateUI)();
        (0, _uiJs.animateCellPop)(targetCellIndex);
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSpawn);
    });
}
function triggerItemGenerator(generator, fromIndex) {
    if (generator.charges <= 0) {
        (0, _uiJs.showToast)("\u0423 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u0437\u0430\u0440\u044F\u0434\u044B.", "error");
        return;
    }
    if ((0, _stateJs.gameState).energy <= 0) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="toast-icon" alt=""> \u{423}\u{43F}\u{441}! \u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438} \u{438}\u{433}\u{440}\u{43E}\u{43A}\u{430}!`, "error");
        return;
    }
    const emptyCells = getAvailableEmptyCells();
    if (emptyCells.length === 0) {
        (0, _uiJs.showToast)("\u041D\u0435\u0442 \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430!", "error");
        return;
    }
    _hapticsJs.hapticMedium();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxGeneratorSpawn);
    (0, _stateJs.gameState).energy--;
    (0, _stateJs.playerProfile).totalEnergySpent++;
    generator.charges--;
    const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
    (0, _stateJs.gameState).lockedCells.push(targetCellIndex);
    const newItemCategory = generator.generatedCategory;
    const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[newItemCategory].items[0]; // Всегда создаем 1-й уровень
    (0, _uiJs.moveItem3D)((0, _domJs.DOMElements).grid.children[fromIndex], (0, _domJs.DOMElements).grid.children[targetCellIndex], `<img src="${itemInfo.icon}" alt="">`).then(()=>{
        markItemAsDiscovered(newItemCategory, 1);
        (0, _stateJs.gameState).gridData[targetCellIndex] = {
            category: newItemCategory,
            level: 1
        };
        (0, _stateJs.gameState).lockedCells = (0, _stateJs.gameState).lockedCells.filter((idx)=>idx !== targetCellIndex);
        if (generator.charges <= 0) {
            const generatorInfo = (0, _configJs.CATEGORIES_CONFIG)[generator.category].items[generator.level - 1];
            (0, _stateJs.gameState).gridData[fromIndex] = null; // Исчезает
        // showToast(`"${generatorInfo.name}" исчерпал себя и исчез.`, "success");
        }
        (0, _gameManagerJs.saveGame)();
        (0, _uiJs.updateUI)();
        (0, _uiJs.animateCellPop)(targetCellIndex);
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSpawn);
    });
}
function triggerRegularGenerator(generator, fromIndex) {
    restoreGeneratorsEnergy();
    const lvl = generator.genLevel || 1;
    const config = (0, _gameConfigJs.GEN_ENERGY_CONFIG)[lvl];
    if (generator.genEnergy === undefined) generator.genEnergy = config.max;
    if (generator.genEnergy <= 0) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.boxIconUrl)}" class="toast-icon" alt=""> \u{413}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} \u{438}\u{441}\u{442}\u{43E}\u{449}\u{435}\u{43D}! \u{41F}\u{43E}\u{434}\u{43E}\u{436}\u{434}\u{438}\u{442}\u{435}, \u{43F}\u{43E}\u{43A}\u{430} \u{43D}\u{430}\u{43A}\u{43E}\u{43F}\u{44F}\u{442}\u{441}\u{44F} \u{437}\u{430}\u{440}\u{44F}\u{434}\u{44B}.`, "error");
        return;
    }
    if ((0, _stateJs.gameState).energy <= 0) {
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="toast-icon" alt=""> \u{423}\u{43F}\u{441}! \u{41D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{430}\u{442}\u{43E}\u{447}\u{43D}\u{43E} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438} \u{438}\u{433}\u{440}\u{43E}\u{43A}\u{430}!`, "error");
        return;
    }
    const emptyCells = getAvailableEmptyCells();
    if (emptyCells.length === 0) {
        (0, _uiJs.showToast)("\u041D\u0435\u0442 \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430!", "error");
        return;
    }
    _hapticsJs.hapticMedium();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxGeneratorSpawn);
    if (generator.genEnergy === config.max) generator.lastRegenTime = Date.now();
    generator.genEnergy--;
    (0, _stateJs.gameState).energy--;
    (0, _stateJs.playerProfile).totalEnergySpent++;
    const targetCellIndex = findClosestEmptyCell(fromIndex, emptyCells);
    (0, _stateJs.gameState).lockedCells.push(targetCellIndex);
    const genData = (0, _configJs.GENERATORS_DATA)[generator.generatorKey];
    const spawnCategory = genData.isHybrid ? genData.categories[Math.random() < 0.5 ? 0 : 1] : genData.categories[0];
    const determineSpawnLevel = (generatorLevel, randomPercent)=>{
        const chances = (0, _gameConfigJs.SPAWN_CHANCES)[generatorLevel];
        if (!chances) return 1;
        for (const tier of chances){
            if (randomPercent < tier.chance) return tier.level;
        }
        return 1;
    };
    const spawnLevel = determineSpawnLevel(lvl, Math.random() * 100);
    const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[spawnCategory].items[spawnLevel - 1];
    (0, _uiJs.moveItem3D)((0, _domJs.DOMElements).grid.children[fromIndex], (0, _domJs.DOMElements).grid.children[targetCellIndex], `<img src="${itemInfo.icon}" alt="">`).then(()=>{
        markItemAsDiscovered(spawnCategory, spawnLevel);
        (0, _stateJs.gameState).gridData[targetCellIndex] = {
            category: spawnCategory,
            level: spawnLevel
        };
        (0, _stateJs.gameState).lockedCells = (0, _stateJs.gameState).lockedCells.filter((idx)=>idx !== targetCellIndex);
        (0, _gameManagerJs.saveGame)();
        (0, _uiJs.updateUI)();
        (0, _uiJs.animateCellPop)(targetCellIndex);
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSpawn);
    });
}
function triggerGenerator(generator, fromIndex) {
    const genData = (0, _configJs.GENERATORS_DATA)[generator.generatorKey];
    if (genData.isSpecial) triggerSpecialGenerator(generator, fromIndex);
    else triggerRegularGenerator(generator, fromIndex);
}
function checkProgressiveUnlocks() {
    (0, _gameConfigJs.UNLOCK_THRESHOLDS).forEach((threshold)=>{
        // Уровень считается достигнутым, если игрок набрал scoreStart этого уровня
        if ((0, _stateJs.gameState).score >= threshold.scoreStart && !threshold.unlocked) {
            const previousLevel = threshold.level - 1;
            threshold.unlocked = true;
            // Воспроизводим звук, даем монеты и показываем тост при повышении уровня (кроме 1-го)
            if (threshold.level > 1) {
                (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxLevelUp); // Звук повышения уровня
                const coinReward = threshold.level * (0, _gameConfigJs.CONFIG).LEVEL_UP_COIN_MULTIPLIER;
                (0, _stateJs.gameState).coins += coinReward;
                (0, _stateJs.playerProfile).totalCoinsEarned += coinReward;
                let hasGiftBox = false;
                let hasNewGenerator = false;
                let newGeneratorName = '';
                let newGeneratorIcon = '';
                // Проверяем, должен ли этот уровень разблокировать генератор
                if (threshold.unlocksGenerator && (0, _stateJs.gameState).lockedCategories.length > 0) {
                    // Логика разблокировки нового генератора
                    const newGenData = unlockNewGenerator(threshold);
                    if (newGenData) {
                        hasNewGenerator = true;
                        newGeneratorName = newGenData.name;
                        newGeneratorIcon = newGenData.icon;
                    }
                } else {
                    // Если генератор не выдается или все уже открыты, даем другую награду
                    spawnLevelUpBonus(threshold.level);
                    hasGiftBox = true;
                }
                (0, _modalsJs.openLevelUpModal)(previousLevel, threshold.level, {
                    coins: coinReward,
                    giftBox: hasGiftBox,
                    newGenerator: hasNewGenerator,
                    newGeneratorName: newGeneratorName,
                    newGeneratorIcon: newGeneratorIcon
                });
                (0, _uiJs.animateRewardFly)((0, _domJs.DOMElements).level.container, (0, _domJs.DOMElements).coins.container, `<img src="${(0, _assetUrlsJs.coinIconUrl)}" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`, Math.min(10, Math.ceil(coinReward / 10)), 'coin');
            }
            (0, _uiJs.updateUI)(); // Обновляем UI, чтобы показать награду в очереди
        }
    });
}
function unlockNewGenerator(threshold) {
    // 1. Определяем, какой генератор будет разблокирован, по первой категории в списке.
    const representativeCategory = (0, _stateJs.gameState).lockedCategories[0];
    const genKey = (0, _configJs.CATEGORIES_CONFIG)[representativeCategory].generatorKey;
    const generatorData = (0, _configJs.GENERATORS_DATA)[genKey];
    // 2. Находим ВСЕ категории, которые производит этот генератор.
    const categoriesToUnlock = generatorData.categories;
    // 3. Перемещаем все эти категории из locked в active.
    categoriesToUnlock.forEach((catToUnlock)=>{
        const indexInLocked = (0, _stateJs.gameState).lockedCategories.indexOf(catToUnlock);
        if (indexInLocked > -1) (0, _stateJs.gameState).lockedCategories.splice(indexInLocked, 1);
        if (!(0, _stateJs.gameState).activeCategories.includes(catToUnlock)) {
            (0, _stateJs.gameState).activeCategories.push(catToUnlock);
            (0, _stateJs.gameState).newlyUnlockedCategories.push(catToUnlock);
        }
    });
    // 4. Добавляем сам генератор в очередь наград.
    (0, _stateJs.gameState).rewardQueue.push({
        isGenerator: true,
        generatorKey: genKey,
        genLevel: 1,
        genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[1].max,
        lastRegenTime: Date.now()
    });
    markItemAsDiscovered(`gen_${genKey}`, 1);
    // showToast - убрали, теперь это в модальном окне
    return {
        name: generatorData.name,
        icon: generatorData.icons[0]
    };
}
function spawnRandomExistingGenerator() {
    // 1. Получаем все уникальные ключи генераторов из активных категорий.
    const activeGeneratorKeys = [
        ...new Set((0, _stateJs.gameState).activeCategories.map((cat)=>(0, _configJs.CATEGORIES_CONFIG)[cat].generatorKey))
    ];
    // 2. Фильтруем специальные генераторы, такие как bonus_chest.
    const regularGeneratorKeys = activeGeneratorKeys.filter((key)=>!(0, _configJs.GENERATORS_DATA)[key].isSpecial && !(0, _configJs.GENERATORS_DATA)[key].isStoryOnly);
    if (regularGeneratorKeys.length > 0) {
        // 3. Выбираем один случайным образом.
        const randomGenKey = regularGeneratorKeys[Math.floor(Math.random() * regularGeneratorKeys.length)];
        const generatorData = (0, _configJs.GENERATORS_DATA)[randomGenKey];
        // 4. Добавляем его в очередь наград.
        (0, _stateJs.gameState).rewardQueue.push({
            isGenerator: true,
            generatorKey: randomGenKey,
            genLevel: 1,
            genEnergy: (0, _gameConfigJs.GEN_ENERGY_CONFIG)[1].max,
            lastRegenTime: Date.now()
        });
        markItemAsDiscovered(`gen_${randomGenKey}`, 1);
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.boxIconUrl)}" class="toast-icon" alt=""> \u{421}\u{435}\u{440}\u{438}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{411}\u{43E}\u{43D}\u{443}\u{441}: \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} "${generatorData.name}"!`, "story");
    } else {
        // Запасной вариант, если по какой-то причине нет активных обычных генераторов (маловероятно).
        spawnUpgradePart();
        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.upgradePartIconUrl)}" class="toast-icon" alt=""> \u{421}\u{435}\u{440}\u{438}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{411}\u{43E}\u{43D}\u{443}\u{441}: \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{430} \u{41D}\u{43E}\u{432}\u{430}\u{44F} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}!`, "story");
    }
}
function spawnLevelUpBonus(level) {
    (0, _stateJs.gameState).rewardQueue.push({
        isGenerator: true,
        generatorKey: 'bonus_chest',
        genLevel: 1,
        genCharges: 1
    });
    markItemAsDiscovered('gen_bonus_chest', 1);
}
function spawnUpgradePart() {
    (0, _stateJs.gameState).rewardQueue.push({
        isUpgradePart: true,
        icon: (0, _assetUrlsJs.upgradePartIconUrl),
        name: "\u041D\u043E\u0432\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C"
    });
    markItemAsDiscovered('upgrade_part', 1);
}
function spawnMagicTool() {
    (0, _stateJs.gameState).rewardQueue.push({
        isMagicTool: true,
        icon: (0, _assetUrlsJs.magicToolIconUrl),
        name: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"
    });
    markItemAsDiscovered('magic_tool', 1);
}
function spawnCopyBubble() {
    (0, _stateJs.gameState).rewardQueue.push({
        isCopyBubble: true,
        icon: (0, _assetUrlsJs.copyBubbleIconUrl),
        name: "\u041A\u043E\u043F\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u043F\u0443\u0437\u044B\u0440\u044C"
    });
    markItemAsDiscovered('copy_bubble', 1);
}
function spawnGeneratorPart() {
    // 1. Get all unique generator keys from active categories.
    const activeGeneratorKeys = [
        ...new Set((0, _stateJs.gameState).activeCategories.map((cat)=>(0, _configJs.CATEGORIES_CONFIG)[cat].generatorKey))
    ];
    // 2. Filter out special generators.
    const regularGeneratorKeys = activeGeneratorKeys.filter((key)=>!(0, _configJs.GENERATORS_DATA)[key].isSpecial);
    if (regularGeneratorKeys.length > 0) {
        // 3. Pick one randomly.
        const randomGenKey = regularGeneratorKeys[Math.floor(Math.random() * regularGeneratorKeys.length)];
        const generatorData = (0, _configJs.GENERATORS_DATA)[randomGenKey];
        // 4. Add it to the reward queue.
        (0, _stateJs.gameState).rewardQueue.push({
            isGeneratorPart: true,
            generatorKey: randomGenKey,
            level: 1
        });
        markItemAsDiscovered(`part_${randomGenKey}`, 1);
    // showToast(`⚙️ Получена деталь для "${generatorData.name}"!`, "success");
    }
}
function generateOrder() {
    const isStoryRoll = Math.random() < (0, _gameConfigJs.CONFIG).ORDER_GENERATION_STORY_CHANCE;
    const hasActiveStory = (0, _stateJs.gameState).orders.some((o)=>o.isStory);
    if (isStoryRoll && !hasActiveStory) {
        generateStoryOrder(1);
        return;
    }
    // --- Новая логика выбора персонажа ---
    // 1. Получаем имена персонажей, у которых уже есть заказы
    const activeCharacterNames = (0, _stateJs.gameState).orders.map((o)=>o.character.name);
    // 2. Фильтруем список доступных персонажей, исключая уже активных
    const availableCharacters = (0, _configJs.CHARACTERS).filter((c)=>!activeCharacterNames.includes(c.name));
    // 3. Выбираем случайного персонажа из доступных. Если все заняты, выбираем из полного списка.
    const characterPool = availableCharacters.length > 0 ? availableCharacters : (0, _configJs.CHARACTERS);
    const char = characterPool[Math.floor(Math.random() * characterPool.length)];
    let baseCategory;
    if ((0, _stateJs.gameState).newlyUnlockedCategories && (0, _stateJs.gameState).newlyUnlockedCategories.length > 0) baseCategory = (0, _stateJs.gameState).newlyUnlockedCategories.shift();
    const itemsCount = Math.floor(Math.random() * 3) + 1;
    const requestedItems = [];
    // Determine item levels based on player's progress
    const playerLevel = getCurrentPlayerLevel();
    let orderLevelConfig = {
        min: 1,
        max: 2
    }; // Default for level 1
    const threshold = (0, _gameConfigJs.UNLOCK_THRESHOLDS).find((t)=>t.level === playerLevel);
    if (threshold && threshold.orderLevels) orderLevelConfig = threshold.orderLevels;
    else if (playerLevel > (0, _gameConfigJs.UNLOCK_THRESHOLDS).length) orderLevelConfig = {
        min: 4,
        max: (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL
    };
    const { min: minLevel, max: maxLevel } = orderLevelConfig;
    for(let i = 0; i < itemsCount; i++){
        const orderableCategories = [
            ...(0, _stateJs.gameState).activeCategories,
            ...(0, _stateJs.gameState).unlockedItemGenCategories
        ];
        const randomCat = i === 0 && baseCategory ? baseCategory : orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
        const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;
        requestedItems.push({
            category: randomCat,
            level: randomLevel
        });
    }
    requestedItems.sort((a, b)=>a.level - b.level);
    (0, _stateJs.gameState).orders.unshift({
        id: (0, _stateJs.gameState).orderIdCounter++,
        character: char,
        items: requestedItems,
        canComplete: false,
        isStory: false
    });
}
function generateStoryOrder(step, fixedChar = null) {
    let char;
    if (fixedChar) char = fixedChar;
    else {
        // --- Новая логика выбора персонажа ---
        const activeCharacterNames = (0, _stateJs.gameState).orders.map((o)=>o.character.name);
        const availableCharacters = (0, _configJs.STORY_CHARACTERS).filter((c)=>!activeCharacterNames.includes(c.name));
        const characterPool = availableCharacters.length > 0 ? availableCharacters : (0, _configJs.STORY_CHARACTERS);
        char = characterPool[Math.floor(Math.random() * characterPool.length)];
    // --- Конец новой логики ---
    }
    const requestedItems = [];
    const orderConfig = (0, _gameConfigJs.STORY_ORDER_CONFIG)[step];
    if (orderConfig && orderConfig.levels) {
        const orderableCategories = [
            ...(0, _stateJs.gameState).activeCategories,
            ...(0, _stateJs.gameState).unlockedItemGenCategories
        ];
        orderConfig.levels.forEach((level)=>{
            if (orderableCategories.length > 0) {
                const randomCat = orderableCategories[Math.floor(Math.random() * orderableCategories.length)];
                requestedItems.push({
                    category: randomCat,
                    level: level
                });
            }
        });
    }
    requestedItems.sort((a, b)=>a.level - b.level);
    (0, _stateJs.gameState).orders.unshift({
        id: (0, _stateJs.gameState).orderIdCounter++,
        character: char,
        items: requestedItems,
        canComplete: false,
        isStory: true,
        storyStep: step
    });
    if (step === 1 && !fixedChar) (0, _uiJs.showToast)(`\u{41F}\u{43E}\u{44F}\u{432}\u{438}\u{43B}\u{441}\u{44F} \u{43F}\u{435}\u{440}\u{441}\u{43E}\u{43D}\u{430}\u{436} \u{441} \u{441}\u{435}\u{440}\u{438}\u{439}\u{43D}\u{44B}\u{43C} \u{437}\u{430}\u{43A}\u{430}\u{437}\u{43E}\u{43C}!`, "story");
}
function checkOrdersAvailability() {
    // 1. Сброс выделения и сбор всех требуемых предметов в Set для быстрой проверки
    const requiredItemsSet = new Set();
    (0, _stateJs.gameState).orders.forEach((order)=>order.items.forEach((req)=>requiredItemsSet.add(`${req.category}-${req.level}`)));
    // 2. Создаем частотную карту доступных предметов на поле и одновременно подсвечиваем их
    const availableItemsMap = new Map();
    (0, _stateJs.gameState).gridData.forEach((item, idx)=>{
        if (!item) return;
        item.isAllocatedToOrder = false; // Сброс
        const isAvailableForOrder = item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !item.isGeneratorPart && !item.isMagicTool && !item.isCopyBubble && !(0, _stateJs.gameState).lockedCells.includes(idx);
        if (!isAvailableForOrder) return;
        const key = `${item.category}-${item.level}`;
        // Подсветка, если предмет нужен для любого из заказов
        if (requiredItemsSet.has(key)) item.isAllocatedToOrder = true;
        // Добавление в карту доступных предметов
        if (!availableItemsMap.has(key)) availableItemsMap.set(key, []);
        availableItemsMap.get(key).push(idx);
    });
    // 3. Проверяем каждый заказ на выполнимость
    (0, _stateJs.gameState).orders.forEach((order)=>{
        // Для каждого заказа создаем временную копию карты доступных предметов
        const tempAvailableMap = new Map(Array.from(availableItemsMap.entries()).map(([k, v])=>[
                k,
                [
                    ...v
                ]
            ]));
        let canComplete = true;
        const allocatedForThisOrder = [];
        for (const reqItem of order.items){
            const key = `${reqItem.category}-${reqItem.level}`;
            const availableIndices = tempAvailableMap.get(key);
            if (availableIndices && availableIndices.length > 0) {
                const gridIndex = availableIndices.shift(); // "Берем" один предмет с поля
                allocatedForThisOrder.push(gridIndex);
            } else {
                canComplete = false; // Если нужного предмета нет, заказ невыполним
                break;
            }
        }
        order.canComplete = canComplete;
        order.allocatedIndices = order.canComplete ? allocatedForThisOrder : [];
    });
    // Проверяем, появился ли новый готовый к сдаче заказ
    const hasNewlyCompletedOrder = (0, _stateJs.gameState).orders.some((o)=>o.canComplete && !o.wasCompletableBefore);
    // Автоматическое перемещение готовых к сдаче заказов влево
    (0, _stateJs.gameState).orders.sort((a, b)=>{
        if (a.canComplete && !b.canComplete) return -1;
        if (!a.canComplete && b.canComplete) return 1;
        return 0;
    });
    // Если появился новый выполненный заказ, плавно прокручиваем панель влево
    if (hasNewlyCompletedOrder) {
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxOrderReady);
        setTimeout(()=>{
            (0, _domJs.DOMElements).ordersList.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }, 50); // Небольшая задержка, чтобы DOM успел обновиться перед прокруткой
    }
}
function completeOrder(id) {
    checkOrdersAvailability();
    const orderIndex = (0, _stateJs.gameState).orders.findIndex((o)=>o.id === id);
    if (orderIndex === -1) return;
    const order = (0, _stateJs.gameState).orders[orderIndex];
    if (!order.canComplete) {
        (0, _uiJs.showToast)("\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 \u043D\u0430 \u043F\u043E\u043B\u0435!", "error");
        return;
    }
    // Находим карточку в DOM
    const cardElement = (0, _domJs.DOMElements).ordersList.querySelector(`#order-card-${id}`);
    const cellElements = document.querySelectorAll('.cell');
    const targetAvatarElement = cardElement ? cardElement.querySelector('.order-avatar-container') : null;
    // Используем предварительно рассчитанные индексы из checkOrdersAvailability
    const elementsToAnimate = order.allocatedIndices.map((idx)=>{
        const item = (0, _stateJs.gameState).gridData[idx];
        return {
            idx: idx,
            icon: `<img src="${(0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1].icon}" alt="">`,
            level: item.level
        };
    });
    elementsToAnimate.forEach((el)=>{
        (0, _stateJs.gameState).lockedCells.push(el.idx);
        (0, _stateJs.gameState).gridData[el.idx] = null;
    });
    (0, _uiJs.renderGrid)();
    (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxFly);
    const animationPromises = elementsToAnimate.map((el)=>{
        (0, _stateJs.gameState).score += el.level * (0, _gameConfigJs.CONFIG).ITEM_SCORE_MULTIPLIER;
        (0, _stateJs.gameState).coins += el.level * (0, _gameConfigJs.CONFIG).COIN_MULTIPLIER;
        return (0, _uiJs.moveItem3D)(cellElements[el.idx], targetAvatarElement, el.icon).then(()=>{
            (0, _stateJs.gameState).lockedCells = (0, _stateJs.gameState).lockedCells.filter((idx)=>idx !== el.idx);
        });
    });
    // After all items have flown to the card
    Promise.all(animationPromises).then(()=>{
        // Теперь, когда предметы долетели, запускаем анимацию исчезновения карточки
        if (cardElement) cardElement.classList.add('fade-out');
        const coinsEarned = elementsToAnimate.reduce((sum, el)=>sum + el.level * (0, _gameConfigJs.CONFIG).COIN_MULTIPLIER, 0);
        (0, _stateJs.playerProfile).totalCoinsEarned += coinsEarned;
        (0, _stateJs.playerProfile).totalOrdersCompleted++;
        const energyReward = order.isStory ? (0, _gameConfigJs.CONFIG).STORY_ORDER_ENERGY_REWARD : (0, _gameConfigJs.CONFIG).ORDER_ENERGY_REWARD;
        // Воспроизводим звук успешной сдачи заказа
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxOrderComplete);
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxCoin);
        _hapticsJs.hapticSuccess();
        // Анимация полета наград
        (0, _uiJs.animateRewardFly)(targetAvatarElement, (0, _domJs.DOMElements).coins.value, `<img src="${(0, _assetUrlsJs.coinIconUrl)}" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`, Math.min(10, Math.ceil(coinsEarned / 5)), 'coin');
        if (energyReward > 0) (0, _uiJs.animateRewardFly)(targetAvatarElement, (0, _domJs.DOMElements).energy.value, `<img src="${(0, _assetUrlsJs.energyIconUrl)}" alt="\u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44F}">`, energyReward, 'energy');
        // Wait for the card fade-out animation to complete
        setTimeout(()=>{
            const wasStory = order.isStory;
            const currentStep = order.storyStep;
            const storyChar = order.character;
            (0, _stateJs.gameState).orders.splice(orderIndex, 1);
            checkProgressiveUnlocks();
            (0, _stateJs.gameState).energy = Math.min((0, _gameConfigJs.CONFIG).MAX_ENERGY, (0, _stateJs.gameState).energy + energyReward);
            if (wasStory) {
                if (currentStep < 3) {
                    generateStoryOrder(currentStep + 1, storyChar);
                    (0, _uiJs.showToast)(`\u{427}\u{430}\u{441}\u{442}\u{44C} \u{441}\u{435}\u{440}\u{438}\u{438} \u{432}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{430}! \u{428}\u{430}\u{433} ${currentStep + 1}/3 \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{441}\u{44F}.`, "story");
                } else {
                    const rand = Math.random();
                    if (rand < 0.20) {
                        // 20% шанс на подарочную коробку
                        (0, _stateJs.gameState).rewardQueue.push({
                            isGenerator: true,
                            generatorKey: 'bonus_chest',
                            genLevel: 1,
                            genCharges: 1
                        });
                        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.boxIconUrl)}" class="toast-icon" alt=""> \u{421}\u{435}\u{440}\u{438}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{412}\u{44B} \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{438}\u{43B}\u{438} \u{41F}\u{43E}\u{434}\u{430}\u{440}\u{43E}\u{447}\u{43D}\u{443}\u{44E} \u{43A}\u{43E}\u{440}\u{43E}\u{431}\u{43A}\u{443}!`, "story");
                    } else if (rand < 0.40) {
                        // 20% шанс на деталь для улучшения
                        spawnUpgradePart();
                        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.upgradePartIconUrl)}" class="toast-icon" alt=""> \u{421}\u{435}\u{440}\u{438}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{411}\u{43E}\u{43D}\u{443}\u{441}: \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{430} \u{41D}\u{43E}\u{432}\u{430}\u{44F} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}!`, "story");
                    } else if (rand < 0.60) {
                        // 20% шанс на магические инструменты
                        spawnMagicTool();
                        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.magicToolIconUrl)}" class="toast-icon" alt=""> \u{421}\u{435}\u{440}\u{438}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{411}\u{43E}\u{43D}\u{443}\u{441}: \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D}\u{44B} \u{41C}\u{430}\u{433}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}\u{435} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{44B}!`, "story");
                    } else if (rand < 0.80) {
                        // 20% шанс на копирующий пузырь
                        spawnCopyBubble();
                        (0, _uiJs.showToast)(`<img src="${(0, _assetUrlsJs.copyBubbleIconUrl)}" class="toast-icon" alt=""> \u{421}\u{435}\u{440}\u{438}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{430}! \u{411}\u{43E}\u{43D}\u{443}\u{441}: \u{43F}\u{43E}\u{43B}\u{443}\u{447}\u{435}\u{43D} \u{41A}\u{43E}\u{43F}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{438}\u{439} \u{43F}\u{443}\u{437}\u{44B}\u{440}\u{44C}!`, "story");
                    } else // 20% шанс на случайный уже открытый генератор
                    spawnRandomExistingGenerator();
                    generateOrder();
                }
            } else {
                generateOrder();
                spawnGeneratorPart();
            }
            (0, _gameManagerJs.saveGame)();
            (0, _uiJs.updateUI)();
        }, (0, _gameConfigJs.CONFIG).ANIMATION.FADE_DURATION);
    });
}
function findMergeablePair() {
    const grid = (0, _stateJs.gameState).gridData;
    const mergeablePairs = [];
    for(let i = 0; i < grid.length; i++){
        const source = grid[i];
        if (!source) continue;
        // Start j from i + 1 to avoid duplicate pairs and self-comparison
        for(let j = i + 1; j < grid.length; j++){
            const target = grid[j];
            if (!target) continue;
            for (const handler of MERGE_HANDLERS){
                // Check both directions as some handlers are not symmetrical
                if (handler.canHandle(source, target)) {
                    mergeablePairs.push([
                        i,
                        j
                    ]);
                    break;
                }
                if (handler.canHandle(target, source)) {
                    mergeablePairs.push([
                        j,
                        i
                    ]);
                    break;
                }
            }
        }
    }
    if (mergeablePairs.length > 0) return mergeablePairs[Math.floor(Math.random() * mergeablePairs.length)];
    return null; // No mergeable pair found
}
// --- DEBUG FUNCTIONS ---
// This function will be available in the browser console for development purposes.
function dev_addCoins(amount = 100000) {
    if (typeof amount !== 'number' || amount <= 0) {
        console.error("Please provide a positive number of coins to add.");
        return;
    }
    (0, _stateJs.gameState).coins += amount;
    (0, _uiJs.showToast)(`\u{2728} \u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{43E} ${amount.toLocaleString('ru-RU')} \u{43C}\u{43E}\u{43D}\u{435}\u{442}!`, 'success');
    (0, _uiJs.updateUI)();
    (0, _gameManagerJs.saveGame)();
}
// Expose to console for debugging
window.dev_addCoins = dev_addCoins;
const levelContainerForCheat = document.querySelector('.menu-modal-title');
if (levelContainerForCheat) levelContainerForCheat.addEventListener('click', ()=>{
    dev_addCoins(100000);
});

},{"./state.js":"9b3Vp","./dom.js":"iyifM","./config.js":"itWAF","./data/gameConfig.js":"5Gyni","./audio.js":"bUGZ1","./ui.js":"3OQ5l","./gameManager.js":"CQNle","./modals.js":"6Bu0H","./haptics.js":"4SzyB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./data/assetUrls.js":"4MPQh"}],"bUGZ1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playSound", ()=>playSound);
parcelHelpers.export(exports, "playMergeSound", ()=>playMergeSound);
var _domJs = require("./dom.js");
var _stateJs = require("./state.js");
function playSound(soundElement) {
    if (!soundElement || (0, _stateJs.gameSettings).sfxVolume === 0) return;
    soundElement.volume = (0, _stateJs.gameSettings).sfxVolume;
    soundElement.currentTime = 0; // Rewind to start to allow for rapid playback
    soundElement.play().catch((e)=>{
    // This can happen if the user hasn't interacted with the page yet.
    // It's less of an issue for SFX which are triggered by user actions.
    });
}
function playMergeSound(level) {
    const soundElement = (0, _domJs.DOMElements).sfxMergeLevels[level];
    if (soundElement) playSound(soundElement);
    else playSound((0, _domJs.DOMElements).sfxMerge); // Fallback to default
}

},{"./dom.js":"iyifM","./state.js":"9b3Vp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3OQ5l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyTheme", ()=>applyTheme);
parcelHelpers.export(exports, "updateUI", ()=>updateUI);
parcelHelpers.export(exports, "createGrid", ()=>createGrid);
parcelHelpers.export(exports, "updateLevelProgressBar", ()=>updateLevelProgressBar);
parcelHelpers.export(exports, "updateMenuNotification", ()=>updateMenuNotification);
parcelHelpers.export(exports, "renderRewardQueue", ()=>renderRewardQueue);
parcelHelpers.export(exports, "updateEnergyUI", ()=>updateEnergyUI);
parcelHelpers.export(exports, "showToast", ()=>showToast);
parcelHelpers.export(exports, "animateCellPop", ()=>animateCellPop);
parcelHelpers.export(exports, "triggerMergeEffects", ()=>triggerMergeEffects);
parcelHelpers.export(exports, "moveItem3D", ()=>moveItem3D);
parcelHelpers.export(exports, "animateRewardFly", ()=>animateRewardFly);
parcelHelpers.export(exports, "highlightHintItems", ()=>highlightHintItems);
parcelHelpers.export(exports, "removeHintHighlights", ()=>removeHintHighlights);
parcelHelpers.export(exports, "renderGrid", ()=>renderGrid);
parcelHelpers.export(exports, "renderOrders", ()=>renderOrders);
parcelHelpers.export(exports, "renderProfile", ()=>renderProfile);
parcelHelpers.export(exports, "renderSettingsModal", ()=>renderSettingsModal);
parcelHelpers.export(exports, "renderAchievementsModal", ()=>renderAchievementsModal);
parcelHelpers.export(exports, "renderCollectionModal", ()=>renderCollectionModal);
var _domJs = require("./dom.js");
var _stateJs = require("./state.js");
var _configJs = require("./config.js");
var _gameConfigJs = require("./data/gameConfig.js");
var _gameLogicJs = require("./gameLogic.js");
var _gameManagerJs = require("./gameManager.js");
var _audioJs = require("./audio.js");
var _hapticsJs = require("./haptics.js");
var _assetUrlsJs = require("./data/assetUrls.js");
function applyTheme() {
    document.body.dataset.theme = (0, _stateJs.gameSettings).theme;
}
function updateUI() {
    (0, _gameLogicJs.checkOrdersAvailability)();
    renderGrid();
    renderRewardQueue();
    renderOrders();
    (0, _domJs.DOMElements).coins.value.innerText = (0, _stateJs.gameState).coins;
    (0, _domJs.DOMElements).energy.value.innerText = (0, _stateJs.gameState).energy;
    (0, _domJs.DOMElements).level.text.innerText = (0, _gameLogicJs.getCurrentPlayerLevel)();
    updateLevelProgressBar();
    updateMenuNotification();
}
function createGrid() {
    (0, _domJs.DOMElements).grid.innerHTML = '';
    // Динамически устанавливаем количество строк и столбцов из конфига
    (0, _domJs.DOMElements).grid.style.gridTemplateColumns = `repeat(${(0, _gameConfigJs.CONFIG).GRID_COLS}, 1fr)`;
    (0, _domJs.DOMElements).grid.style.gridTemplateRows = `repeat(${(0, _gameConfigJs.CONFIG).GRID_ROWS}, 1fr)`;
    for(let i = 0; i < (0, _gameConfigJs.CONFIG).GRID_COLS * (0, _gameConfigJs.CONFIG).GRID_ROWS; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        (0, _domJs.DOMElements).grid.appendChild(cell);
    }
}
function updateLevelProgressBar() {
    const currentLvl = (0, _gameLogicJs.getCurrentPlayerLevel)();
    const barFill = (0, _domJs.DOMElements).level.bar;
    // Находим конфиг для ТЕКУЩЕГО уровня
    const levelConfig = (0, _gameConfigJs.UNLOCK_THRESHOLDS).find((t)=>t.level === currentLvl);
    if (levelConfig) {
        const min = levelConfig.scoreStart;
        const max = levelConfig.scoreEnd;
        if (max === Infinity) // Для максимального уровня полоска всегда заполнена
        barFill.style.width = '100%';
        else {
            const range = max - min;
            const progress = (0, _stateJs.gameState).score - min;
            const percentage = range > 0 ? progress / range * 100 : 0;
            barFill.style.width = `${Math.max(0, Math.min(100, percentage))}%`;
        }
    } else barFill.style.width = '0%'; // Fallback
    (0, _domJs.DOMElements).level.score.innerText = (0, _stateJs.gameState).score;
}
function updateMenuNotification() {
    const storyUpdate = (0, _gameLogicJs.hasNewStoryUpdate)();
    const achievementsUpdate = (0, _gameLogicJs.hasUnclaimedAchievements)();
    const collectionUpdate = (0, _gameLogicJs.hasUnclaimedCollectionBonuses)();
    const hasNotifications = storyUpdate || achievementsUpdate || collectionUpdate;
    (0, _domJs.DOMElements).menuNotificationDot.style.display = hasNotifications ? 'block' : 'none';
    (0, _domJs.DOMElements).menuModal.storyNotificationDot.style.display = storyUpdate ? 'block' : 'none';
    (0, _domJs.DOMElements).menuModal.achievementsNotificationDot.style.display = achievementsUpdate ? 'block' : 'none';
    (0, _domJs.DOMElements).menuModal.collectionNotificationDot.style.display = collectionUpdate ? 'block' : 'none';
}
function renderRewardQueue() {
    const panel = (0, _domJs.DOMElements).rewardQueuePanel;
    panel.innerHTML = '';
    const queue = (0, _stateJs.gameState).rewardQueue;
    const count = queue.length;
    for(let i = 0; i < count; i++){
        const reward = queue[i];
        const indexInStack = count - 1 - i;
        const rewardElem = document.createElement('div');
        rewardElem.classList.add('reward-item');
        if (i === count - 1) {
            rewardElem.classList.add('claimable');
            rewardElem.dataset.action = 'claim-reward';
            rewardElem.dataset.index = i;
        }
        rewardElem.style.transform = `translateY(${indexInStack * 8}px) scale(${1 - indexInStack * 0.05})`;
        rewardElem.style.zIndex = 10 - indexInStack;
        let iconHTML = '';
        let title = '';
        if (reward.isGenerator) {
            const genInfo = (0, _configJs.GENERATORS_DATA)[reward.generatorKey];
            const lvl = reward.genLevel || 1;
            iconHTML = `<img src="${genInfo.icons[lvl - 1]}" alt="${genInfo.name}" style="width: 90%; height: 90%;">`;
            title = `\u{417}\u{430}\u{431}\u{440}\u{430}\u{442}\u{44C}: ${genInfo.name}`;
        } else if (reward.isGeneratorPart) {
            const genInfo = (0, _configJs.GENERATORS_DATA)[reward.generatorKey];
            const lvl = reward.level || 1;
            const partInfo = genInfo.parts[lvl - 1];
            iconHTML = `<img src="${partInfo.icon}" alt="${partInfo.name}" style="width: 90%; height: 90%;">`;
            title = `\u{417}\u{430}\u{431}\u{440}\u{430}\u{442}\u{44C}: ${partInfo.name}`;
        } else if (reward.isUpgradePart) {
            iconHTML = `<img src="${0, _assetUrlsJs.upgradePartIconUrl}" alt="\u{41D}\u{43E}\u{432}\u{430}\u{44F} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}" style="width: 90%; height: 90%;">`;
            title = "\u0417\u0430\u0431\u0440\u0430\u0442\u044C: \u041D\u043E\u0432\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C";
        } else if (reward.isMagicTool) {
            iconHTML = `<img src="${0, _assetUrlsJs.magicToolIconUrl}" alt="\u{41C}\u{430}\u{433}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}\u{435} \u{438}\u{43D}\u{441}\u{442}\u{440}\u{443}\u{43C}\u{435}\u{43D}\u{442}\u{44B}" style="width: 90%; height: 90%;">`;
            title = "\u0417\u0430\u0431\u0440\u0430\u0442\u044C: \u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B";
        } else if (reward.isCopyBubble) {
            iconHTML = `<img src="${0, _assetUrlsJs.copyBubbleIconUrl}" alt="\u{41A}\u{43E}\u{43F}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{438}\u{439} \u{43F}\u{443}\u{437}\u{44B}\u{440}\u{44C}" style="width: 90%; height: 90%;">`;
            title = "\u0417\u0430\u0431\u0440\u0430\u0442\u044C: \u041A\u043E\u043F\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u043F\u0443\u0437\u044B\u0440\u044C";
        } else if (reward.category && reward.level) {
            // Обычный предмет или предмет-генератор
            const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[reward.category]?.items[reward.level - 1];
            if (itemInfo) {
                iconHTML = `<img src="${itemInfo.icon}" alt="${itemInfo.name}" style="width: 90%; height: 90%;">`;
                title = `\u{417}\u{430}\u{431}\u{440}\u{430}\u{442}\u{44C}: ${itemInfo.name}`;
            }
        }
        rewardElem.innerHTML = iconHTML;
        rewardElem.title = title;
        panel.appendChild(rewardElem);
    }
    panel.style.display = count > 0 ? 'flex' : 'none';
}
function updateEnergyUI() {
    (0, _domJs.DOMElements).energy.value.innerText = (0, _stateJs.gameState).energy;
    const cells = document.querySelectorAll('.cell');
    (0, _stateJs.gameState).gridData.forEach((item, idx)=>{
        if (item && item.isGenerator) renderGeneratorBadges(cells[idx], item);
    });
}
function showToast(text, type = "success") {
    const toast = document.createElement('div');
    toast.classList.add('game-toast', type);
    toast.innerHTML = text;
    (0, _domJs.DOMElements).toastContainer.appendChild(toast);
    setTimeout(()=>{
        toast.classList.add('show');
    }, 10);
    setTimeout(()=>{
        toast.classList.remove('show');
        setTimeout(()=>toast.remove(), 300);
    }, 2800);
}
function animateCellPop(index) {
    const cells = document.querySelectorAll('.cell');
    const wrapper = cells[index]?.querySelector('.item-wrapper');
    if (wrapper) {
        wrapper.classList.remove('merge-animate');
        wrapper.offsetWidth;
        wrapper.classList.add('merge-animate');
    }
}
function triggerMergeEffects(idx, category) {
    setTimeout(()=>{
        animateCellPop(idx);
        const targetCell = (0, _domJs.DOMElements).grid.children[idx];
        if (targetCell) {
            const themeColor = (0, _configJs.CATEGORIES_CONFIG)[category] ? (0, _configJs.CATEGORIES_CONFIG)[category].color : '#ff477e';
            // 1. Улучшенная вспышка
            const flash = document.createElement('div');
            flash.classList.add('merge-flash');
            flash.style.setProperty('--flash-color', themeColor);
            targetCell.appendChild(flash);
            setTimeout(()=>flash.remove(), 600); // Длительность анимации вспышки
            // 2. Новая "ударная волна"
            const shockwave = document.createElement('div');
            shockwave.classList.add('merge-shockwave');
            shockwave.style.borderColor = themeColor;
            targetCell.appendChild(shockwave);
            setTimeout(()=>shockwave.remove(), 600); // Длительность анимации волны
            const rect = targetCell.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            // 3. Новые частицы-звездочки
            const particleCount = ((0, _gameConfigJs.CONFIG).ANIMATION.PARTICLE_COUNT || 10) + 5; // Увеличим количество
            for(let i = 0; i < particleCount; i++){
                const particle = document.createElement('div');
                particle.classList.add('merge-particle');
                particle.innerHTML = "\u2726"; // Используем символ звездочки
                particle.style.color = themeColor;
                particle.style.left = `${centerX}px`;
                particle.style.top = `${centerY}px`;
                const angle = Math.random() * Math.PI * 2;
                const speed = 30 + Math.random() * 70; // Увеличим скорость и разброс
                const rotation = Math.random() * 360;
                const scale = 0.5 + Math.random() * 1;
                particle.style.setProperty('--x', `${Math.cos(angle) * speed}px`);
                particle.style.setProperty('--y', `${Math.sin(angle) * speed}px`);
                particle.style.setProperty('--rotation', `${rotation}deg`);
                particle.style.setProperty('--scale', scale);
                document.body.appendChild(particle);
                setTimeout(()=>particle.remove(), 800); // Увеличим время жизни
            }
        }
    }, 0);
}
function createParticleEffectHTML() {
    let html = '<div class="particle-container">';
    const directions = [
        {
            x: '30px',
            y: '0px'
        },
        {
            x: '-25px',
            y: '15px'
        },
        {
            x: '20px',
            y: '-25px'
        },
        {
            x: '-15px',
            y: '-30px'
        },
        {
            x: '10px',
            y: '28px'
        },
        {
            x: '-28px',
            y: '-5px'
        }
    ];
    for(let i = 1; i <= 6; i++){
        const dir = directions[i - 1];
        html += `<div class="particle p${i}" style="--x: ${dir.x}; --y: ${dir.y};"></div>`;
    }
    return html + '</div>';
}
function renderGeneratorBadges(cell, item) {
    if (!cell || !item || !item.isGenerator) return;
    let lvl = item.genLevel || 1;
    // Удаляем старые значки, чтобы избежать дублирования
    cell.querySelector('.gen-energy-badge')?.remove();
    cell.querySelector('.gen-level-badge')?.remove();
    cell.querySelector('.max-level-star')?.remove();
    // Обновляем значок энергии/зарядов
    const energyBadge = document.createElement('span');
    energyBadge.classList.add('gen-energy-badge');
    if (item.generatorKey === 'bonus_chest') {
        energyBadge.innerHTML = `<img src="${0, _assetUrlsJs.energyIconUrl}" class="badge-icon" alt=""> ${item.genCharges}`;
        energyBadge.classList.add('charges');
        if (item.genCharges === 0) energyBadge.classList.add('gen-energy-badge-no-energy');
    } else {
        energyBadge.innerHTML = `<img src="${0, _assetUrlsJs.energyIconUrl}" class="badge-icon" alt="">${item.genEnergy}`;
        // Обновляем классы ячейки в зависимости от энергии
        cell.classList.remove('generator-slot-no-energy', 'generator-slot-low-energy');
        energyBadge.classList.remove('gen-energy-badge-no-energy');
        if (item.genEnergy <= 5 && item.genEnergy > 0) {
            cell.classList.add('generator-slot-low-energy');
            energyBadge.classList.add('gen-energy-badge-no-energy');
        } else if (item.genEnergy === 0) {
            cell.classList.add('generator-slot-no-energy');
            energyBadge.classList.add('gen-energy-badge-no-energy');
        }
    }
    cell.appendChild(energyBadge);
    // Обновляем значок уровня
    const levelBadge = document.createElement('span');
    levelBadge.classList.add('gen-level-badge');
    levelBadge.innerText = (0, _gameConfigJs.CONFIG).ROMAN_NUMERALS[lvl];
    cell.appendChild(levelBadge);
    // Для подарочной коробки уровень 2 - максимальный
    if (item.generatorKey === 'bonus_chest' && lvl === 3) lvl = (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL;
    // Добавляем звезду для генератора максимального уровня
    if (lvl === (0, _gameConfigJs.CONFIG).MAX_GENERATOR_LEVEL) {
        const starBadge = document.createElement('span');
        starBadge.classList.add('max-level-star');
        starBadge.innerHTML = `<img src="${0, _assetUrlsJs.starIconUrl}" alt="max level">`;
        cell.appendChild(starBadge);
    }
}
function moveItem3D(fromElem, toElem, icon) {
    return new Promise((resolve)=>{
        if (!fromElem || !toElem) {
            resolve();
            return;
        }
        const fromRect = fromElem.getBoundingClientRect();
        const toRect = toElem.getBoundingClientRect();
        const flyer = document.createElement('div');
        flyer.classList.add('flying-item');
        flyer.innerHTML = icon;
        const startX = fromRect.left + (fromRect.width - 40) / 2;
        const startY = fromRect.top + (fromRect.height - 40) / 2;
        const endX = toRect.left + (toRect.width - 40) / 2;
        const endY = toRect.top + (toRect.height - 40) / 2;
        flyer.style.left = `${startX}px`;
        flyer.style.top = `${startY}px`;
        document.body.appendChild(flyer);
        flyer.offsetWidth;
        flyer.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(0.8)`;
        setTimeout(()=>{
            flyer.remove();
            resolve();
        }, (0, _gameConfigJs.CONFIG).ANIMATION.FLY_DURATION);
    });
}
function animateRewardFly(startElement, endElement, icon, count = 5, className = 'coin') {
    if (!startElement || !endElement) return;
    // Получаем координаты ОДИН РАЗ в самом начале
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const startXInitial = startRect.left + startRect.width / 2;
    const startYInitial = startRect.top + startRect.height / 2;
    const endX = endRect.left + endRect.width / 2;
    const endY = endRect.top + endRect.height / 2;
    for(let i = 0; i < count; i++)setTimeout(()=>{
        const startX = startXInitial + (Math.random() - 0.5) * 40;
        const startY = startYInitial + (Math.random() - 0.5) * 20;
        const flyer = document.createElement('div');
        flyer.classList.add('flying-reward', className);
        flyer.innerHTML = icon;
        flyer.style.left = `${startX}px`;
        flyer.style.top = `${startY}px`;
        document.body.appendChild(flyer);
        flyer.offsetWidth;
        const dX = endX - startX;
        const dY = endY - startY;
        flyer.style.transform = `translate(${dX}px, ${dY}px) scale(0.5)`;
        flyer.style.opacity = '0';
        setTimeout(()=>{
            flyer.remove();
        }, 700);
    }, i * 60);
}
function highlightHintItems(indices) {
    indices.forEach((index)=>{
        const cell = (0, _domJs.DOMElements).grid.children[index];
        if (cell) {
            const wrapper = cell.querySelector('.item-wrapper');
            if (wrapper && !wrapper.classList.contains('hint-highlight')) wrapper.classList.add('hint-highlight');
        }
    });
}
function removeHintHighlights() {
    const highlightedItems = (0, _domJs.DOMElements).grid.querySelectorAll('.hint-highlight');
    highlightedItems.forEach((item)=>{
        item.classList.remove('hint-highlight');
    });
}
function renderGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, idx)=>{
        const item = (0, _stateJs.gameState).gridData[idx];
        cell.innerHTML = '';
        cell.className = 'cell';
        if (item) {
            if (item.isBlocked) cell.classList.add('blocked');
            else if (item.isGeneratorPart) cell.classList.add('generator-part-cell');
            else if (item.isUpgradePart || item.isMagicTool || item.isCopyBubble) cell.classList.add('booster-cell');
            const wrapper = document.createElement('div');
            wrapper.classList.add('item-wrapper');
            if (item.isGenerator) {
                const lvl = item.genLevel || 1;
                cell.classList.add('generator-slot');
                const genInfo = (0, _configJs.GENERATORS_DATA)[item.generatorKey];
                const iconPath = genInfo.icons[lvl - 1];
                wrapper.innerHTML = `<img src="${iconPath}" alt="${genInfo.name}">`;
                // Добавляем класс для специальной рамки, если генератор с конечными зарядами
                if (genInfo.isSpecial) cell.classList.add('finite-charge-generator');
                renderGeneratorBadges(cell, item);
            } else if (item.isItemGenerator) {
                // Предметы-генераторы всегда имеют конечные заряды, поэтому добавляем им спец-класс
                cell.classList.add('item-generator-slot', 'finite-charge-generator');
                const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1];
                wrapper.innerHTML = `<img src="${itemInfo.icon}" alt="">`;
                // Добавляем значок заряда
                const chargeBadge = document.createElement('span');
                chargeBadge.classList.add('gen-energy-badge', 'charges'); // Переиспользуем существующие стили
                chargeBadge.innerHTML = `<img src="${0, _assetUrlsJs.energyIconUrl}" class="badge-icon" alt=""> ${item.charges}`; // Кастомная иконка
                if (item.charges === 0) chargeBadge.classList.add('gen-energy-badge-no-energy');
                cell.appendChild(chargeBadge);
                // Добавляем звезду и частицы, так как предмет достиг максимального уровня в своей ветке
                const starBadge = document.createElement('span');
                starBadge.classList.add('max-level-star');
                starBadge.innerHTML = `<img src="${0, _assetUrlsJs.starIconUrl}" alt="max level">`;
                cell.appendChild(starBadge);
                // Вставляем частицы перед звездочкой, чтобы звезда была поверх
                starBadge.insertAdjacentHTML('beforebegin', createParticleEffectHTML());
                // Предмет-генератор может быть частью заказа
                if (item.isAllocatedToOrder) {
                    cell.classList.add('allocated-for-order');
                    const checkmark = document.createElement('div');
                    checkmark.classList.add('item-checkmark');
                    cell.appendChild(checkmark);
                }
            } else if (item.isGeneratorPart) {
                const genInfo = (0, _configJs.GENERATORS_DATA)[item.generatorKey];
                const lvl = item.level || 1;
                const partInfo = genInfo.parts[lvl - 1];
                wrapper.innerHTML = `<img src="${partInfo.icon}" alt="${partInfo.name}">`;
                const levelBadge = document.createElement('span');
                levelBadge.classList.add('item-level');
                levelBadge.innerText = item.level;
                cell.appendChild(levelBadge);
            } else if (item.isUpgradePart || item.isMagicTool || item.isCopyBubble) {
                // Общая логика для деталей и инструментов
                let iconSrc = (0, _assetUrlsJs.questionIconUrl);
                if (item.isUpgradePart) iconSrc = (0, _assetUrlsJs.upgradePartIconUrl);
                if (item.isMagicTool) iconSrc = (0, _assetUrlsJs.magicToolIconUrl);
                if (item.isCopyBubble) iconSrc = (0, _assetUrlsJs.copyBubbleIconUrl);
                wrapper.innerHTML = `<img src="${iconSrc}" alt="">`;
                // Добавляем звездочку, так как их нельзя улучшить
                const starBadge = document.createElement('span');
                starBadge.classList.add('max-level-star');
                starBadge.innerHTML = `<img src="${0, _assetUrlsJs.starIconUrl}" alt="max level">`;
                cell.appendChild(starBadge);
                // Добавляем эффект частиц
                const particleHTML = createParticleEffectHTML();
                // Вставляем частицы перед звездочкой, чтобы звезда была поверх
                starBadge.insertAdjacentHTML('beforebegin', particleHTML);
            } else {
                wrapper.innerHTML = `<img src="${(0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1].icon}" alt="">`;
                // Добавляем эффект частиц для предметов максимального уровня
                if (item.level === (0, _gameConfigJs.CONFIG).MAX_ITEM_LEVEL) {
                    const starBadge = document.createElement('span');
                    starBadge.classList.add('max-level-star');
                    starBadge.innerHTML = `<img src="${0, _assetUrlsJs.starIconUrl}" alt="max level">`;
                    cell.appendChild(starBadge);
                    // Вставляем частицы перед звездочкой, чтобы звезда была поверх
                    starBadge.insertAdjacentHTML('beforebegin', createParticleEffectHTML());
                } else {
                    const levelBadge = document.createElement('span');
                    levelBadge.classList.add('item-level');
                    levelBadge.innerText = item.level;
                    cell.appendChild(levelBadge);
                }
                // Подсветка для предметов, подходящих под заказ (не заблокированных)
                if (item.isAllocatedToOrder) {
                    cell.classList.add('allocated-for-order');
                    const checkmark = document.createElement('div');
                    checkmark.classList.add('item-checkmark');
                    cell.appendChild(checkmark);
                }
            }
            cell.appendChild(wrapper);
        }
    });
}
function renderOrders() {
    const ordersList = (0, _domJs.DOMElements).ordersList;
    // Сохраняем предыдущее состояние для отслеживания изменений
    (0, _stateJs.gameState).orders.forEach((order)=>{
        order.wasCompletableBefore = order.canComplete;
    });
    // Получаем список старых ID для сохранения структуры
    const currentCards = Array.from(ordersList.children);
    // Создаем временный список доступных на поле предметов для проверки
    const availableItemsOnGrid = (0, _stateJs.gameState).gridData.filter((item)=>item && !item.isGenerator && !item.isBlocked && !item.isUpgradePart && !item.isGeneratorPart && !item.isMagicTool && !item.isCopyBubble);
    // Создаем или обновляем карточки на основе отсортированного массива
    (0, _stateJs.gameState).orders.forEach((order, index)=>{
        const cardId = `order-card-${order.id}`;
        let card = document.getElementById(cardId);
        let isNew = false;
        // Создаем копию доступных предметов для этого конкретного заказа, чтобы не влиять на другие
        let tempAvailable = [
            ...availableItemsOnGrid
        ];
        if (!card) {
            isNew = true;
            card = document.createElement('div');
            card.id = cardId;
            card.dataset.orderId = order.id;
            card.classList.add('order-card');
            if (order.isStory) card.classList.add('story-card');
            // Добавляем начальный класс для анимации
            card.classList.add('is-entering');
            ordersList.appendChild(card);
        }
        // Перемещаем карточку в правильный индекс в DOM для CSS transition
        if (ordersList.children[index] !== card) ordersList.insertBefore(card, ordersList.children[index]);
        let itemsHTML = '<div class="order-items-list">';
        order.items.forEach((item)=>{
            const itemInfo = (0, _configJs.CATEGORIES_CONFIG)[item.category].items[item.level - 1];
            // Ищем, есть ли подходящий предмет на поле
            const foundItemIndex = tempAvailable.findIndex((gridItem)=>gridItem.category === item.category && gridItem.level === item.level);
            let isFulfilled = foundItemIndex !== -1;
            if (isFulfilled) // Если предмет найден, "удаляем" его из временного списка, чтобы он не засчитался дважды
            tempAvailable.splice(foundItemIndex, 1);
            const fulfilledClass = isFulfilled ? 'fulfilled' : '';
            const itemIconHTML = `<img src="${itemInfo.icon}" alt="${itemInfo.name}">`;
            itemsHTML += `<div class="order-target ${fulfilledClass}" title="${itemInfo.name}" data-category="${item.category}"><span class="order-item-icon">${itemIconHTML}</span></div>`;
        });
        itemsHTML += '</div>';
        const avatarHTML = `<div class="order-avatar-container" title="${order.character.name}"><img src="${order.character.icon}" alt="${order.character.name}"></div>`;
        card.innerHTML = `
      <div class="order-header">
          ${!order.isStory ? `<button class="cancel-btn" title="\u{41E}\u{442}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{437}\u{430}\u{43A}\u{430}\u{437}">&times;</button>` : `<span class="story-badge">\u{421}\u{435}\u{440}\u{438}\u{44F} ${order.storyStep}/3</span>`}
      </div>
      <div class="order-body">
          ${avatarHTML}
          <div class="order-content">
              ${itemsHTML}
              <button class="complete-btn ${order.canComplete ? 'visible' : ''}">\u{421}\u{434}\u{430}\u{442}\u{44C} \u{437}\u{430}\u{43A}\u{430}\u{437}</button>
          </div>
      </div>
    `;
        // Если карточка новая, запускаем анимацию
        if (isNew) // Небольшая задержка, чтобы браузер успел отрисовать элемент
        // перед тем, как мы уберем класс и запустим transition.
        setTimeout(()=>{
            card.classList.remove('is-entering');
        }, 10);
    });
    // Удаляем карточки, которых больше нет в логике игры
    const activeIds = (0, _stateJs.gameState).orders.map((o)=>`order-card-${o.id}`);
    currentCards.forEach((c)=>{
        if (!activeIds.includes(c.id) && !c.classList.contains('fade-out')) c.remove();
    });
}
function renderProfile() {
    const modal = (0, _domJs.DOMElements).profileModal;
    const profile = (0, _stateJs.playerProfile);
    modal.icon.innerHTML = `<img src="${profile.icon}" alt="${profile.name}">`;
    // --- NEW LOGIC for favorite category ---
    let favoriteCategoryName = "\u041D\u0435\u0442";
    if (profile.mergeCounts && Object.keys(profile.mergeCounts).length > 0) {
        const favoriteCategoryKey = Object.keys(profile.mergeCounts).reduce((a, b)=>profile.mergeCounts[a] > profile.mergeCounts[b] ? a : b);
        if ((0, _configJs.CATEGORIES_CONFIG)[favoriteCategoryKey]) favoriteCategoryName = (0, _configJs.CATEGORIES_CONFIG)[favoriteCategoryKey].name;
    }
    // --- END NEW LOGIC ---
    const timePlayedStr = (0, _gameLogicJs.formatTimePlayed)(profile.timePlayed);
    const startDateStr = new Date(profile.startDate).toLocaleDateString('ru-RU');
    const profileIconHTML = `<img src="${profile.icon}" alt="${profile.name}">`;
    const energyIcon = `<img src="${(0, _assetUrlsJs.energyIconUrl)}" class="inline-icon" alt="\u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{44F}">`;
    const coinIcon = `<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`;
    modal.body.innerHTML = `
    <div class="profile-header">
        <div class="profile-avatar">${profileIconHTML}</div>
        <input type="text" class="profile-name-input" value="${profile.name}" id="profile-name-input" maxlength="20" placeholder="\u{412}\u{432}\u{435}\u{434}\u{438}\u{442}\u{435} \u{438}\u{43C}\u{44F}">
    </div>
    <div class="profile-stats">
        <div class="stat-item"><span>\u{41A}\u{43E}\u{43C}\u{431}\u{438}\u{43D}\u{430}\u{446}\u{438}\u{439} \u{441}\u{434}\u{435}\u{43B}\u{430}\u{43D}\u{43E}:</span> <strong>${profile.totalMerges.toLocaleString('ru-RU')}</strong></div>
        <div class="stat-item"><span>\u{417}\u{430}\u{43A}\u{430}\u{437}\u{43E}\u{432} \u{432}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}:</span> <strong>${profile.totalOrdersCompleted.toLocaleString('ru-RU')}</strong></div>
        <div class="stat-item"><span>\u{412}\u{441}\u{435}\u{433}\u{43E} \u{43F}\u{43E}\u{442}\u{440}\u{430}\u{447}\u{435}\u{43D}\u{43E} \u{44D}\u{43D}\u{435}\u{440}\u{433}\u{438}\u{438}:</span> <strong>${(profile.totalEnergySpent || 0).toLocaleString('ru-RU')} ${energyIcon}</strong></div>
        <div class="stat-item"><span>\u{412}\u{441}\u{435}\u{433}\u{43E} \u{437}\u{430}\u{440}\u{430}\u{431}\u{43E}\u{442}\u{430}\u{43D}\u{43E}:</span> <strong>${(profile.totalCoinsEarned || 0).toLocaleString('ru-RU')} ${coinIcon}</strong></div>
        <div class="stat-item"><span>\u{41B}\u{44E}\u{431}\u{438}\u{43C}\u{430}\u{44F} \u{43A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{438}\u{44F}:</span> <strong>${favoriteCategoryName}</strong></div>
        <div class="stat-item"><span>\u{412}\u{440}\u{435}\u{43C}\u{44F} \u{432} \u{438}\u{433}\u{440}\u{435}:</span> <strong>${timePlayedStr}</strong></div>
        <div class="stat-item"><span>\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430}:</span> <strong>${startDateStr}</strong></div>
    </div>
  `;
    // Добавляем обработчик для сохранения имени при потере фокуса
    const nameInput = modal.body.querySelector('#profile-name-input');
    nameInput.addEventListener('blur', ()=>{
        (0, _stateJs.playerProfile).name = nameInput.value.trim() || "\u0418\u0433\u0440\u043E\u043A";
        (0, _gameManagerJs.saveGame)(); // Сохраняем игру после изменения имени
    });
}
function renderSettingsModal() {
    const body = (0, _domJs.DOMElements).settingsModal.body;
    body.innerHTML = `
    <div class="settings-item">
      <label for="music-volume-slider" class="settings-label">\u{413}\u{440}\u{43E}\u{43C}\u{43A}\u{43E}\u{441}\u{442}\u{44C} \u{43C}\u{443}\u{437}\u{44B}\u{43A}\u{438}</label>
      <div class="settings-control">
        <input type="range" id="music-volume-slider" min="0" max="1" step="0.05" value="${(0, _stateJs.gameSettings).musicVolume}">
      </div>
    </div>
    <div class="settings-item">
      <label for="sfx-volume-slider" class="settings-label">\u{413}\u{440}\u{43E}\u{43C}\u{43A}\u{43E}\u{441}\u{442}\u{44C} \u{437}\u{432}\u{443}\u{43A}\u{43E}\u{432}</label>
      <div class="settings-control">
        <input type="range" id="sfx-volume-slider" min="0" max="1" step="0.05" value="${(0, _stateJs.gameSettings).sfxVolume}">
      </div>
    </div>
    <div class="settings-item">
      <label for="haptics-toggle" class="settings-label">\u{412}\u{438}\u{431}\u{440}\u{430}\u{446}\u{438}\u{44F}</label>
      <div class="settings-control">
        <label class="switch">
          <input type="checkbox" id="haptics-toggle" ${(0, _stateJs.gameSettings).hapticsEnabled ? 'checked' : ''}>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <div class="settings-item">
      <label for="theme-switch" class="settings-label">\u{421}\u{432}\u{435}\u{442}\u{43B}\u{430}\u{44F} \u{442}\u{435}\u{43C}\u{430}</label>
      <div class="settings-control">
        <label class="switch">
          <input type="checkbox" id="theme-switch" ${(0, _stateJs.gameSettings).theme === 'light' ? 'checked' : ''}>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  `;
    const musicSlider = body.querySelector('#music-volume-slider');
    musicSlider.addEventListener('input', (e)=>{
        const volume = parseFloat(e.target.value);
        (0, _stateJs.gameSettings).musicVolume = volume;
        (0, _domJs.DOMElements).bgMusic.volume = volume;
        if (volume > 0 && (0, _domJs.DOMElements).bgMusic.paused && !document.hidden) // Взаимодействие с ползунком — это пользовательская активность,
        // поэтому мы можем запустить музыку.
        (0, _domJs.DOMElements).bgMusic.play().catch(()=>{});
        else if (volume === 0) (0, _domJs.DOMElements).bgMusic.pause();
    });
    // Save when user stops sliding
    musicSlider.addEventListener('change', ()=>{
        (0, _gameManagerJs.saveGame)();
    });
    const sfxSlider = body.querySelector('#sfx-volume-slider');
    sfxSlider.addEventListener('input', (e)=>{
        (0, _stateJs.gameSettings).sfxVolume = parseFloat(e.target.value);
    });
    // Save when user stops sliding
    sfxSlider.addEventListener('change', ()=>{
        // Play a sample sound to give feedback
        (0, _audioJs.playSound)((0, _domJs.DOMElements).sfxSwap);
        (0, _gameManagerJs.saveGame)();
    });
    const themeSwitch = body.querySelector('#theme-switch');
    themeSwitch.addEventListener('change', (e)=>{
        (0, _stateJs.gameSettings).theme = e.target.checked ? 'light' : 'dark';
        applyTheme();
        (0, _gameManagerJs.saveGame)();
    });
    const hapticsToggle = body.querySelector('#haptics-toggle');
    hapticsToggle.addEventListener('change', (e)=>{
        (0, _stateJs.gameSettings).hapticsEnabled = e.target.checked;
        if ((0, _stateJs.gameSettings).hapticsEnabled) (0, _hapticsJs.hapticLight)(); // Легкий виброотклик для подтверждения
        (0, _gameManagerJs.saveGame)();
    });
}
function renderAchievementsModal() {
    const body = (0, _domJs.DOMElements).achievementsModal.body;
    let contentHTML = '';
    for(const key in 0, _configJs.ACHIEVEMENTS_DATA){
        const achievement = (0, _configJs.ACHIEVEMENTS_DATA)[key];
        const progress = (0, _stateJs.playerProfile)[key] || 0;
        contentHTML += `
      <div class="achievement-item">
        <div class="achievement-icon"><img src="${achievement.icon}" alt="${achievement.name}"></div>
        <div class="achievement-details">
          <h4 class="achievement-title">${achievement.name}</h4>
          <p class="achievement-desc">${achievement.desc}</p>
          <div class="achievement-tiers">
    `;
        achievement.tiers.forEach((tier, index)=>{
            const isClaimed = !!(0, _stateJs.gameState).claimedAchievements[`${achievement.id}_${index}`];
            const canClaim = progress >= tier.goal && !isClaimed;
            const percentage = Math.min(100, progress / tier.goal * 100);
            const coinIcon = `<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`;
            let btnHTML;
            if (isClaimed) btnHTML = `<button class="achievement-claim-btn claimed" disabled><img src="${0, _assetUrlsJs.checkmarkIconUrl}" alt="\u{412}\u{44B}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}"></button>`;
            else btnHTML = `<button class="achievement-claim-btn" ${!canClaim ? 'disabled' : ''} data-action="claim-achievement" data-id="${achievement.id}" data-index="${index}">+${tier.reward}${coinIcon}</button>`;
            contentHTML += `
        <div class="achievement-tier">
          <div class="achievement-progress-container">
            <div class="achievement-progress-text">${progress.toLocaleString('ru-RU')} / ${tier.goal.toLocaleString('ru-RU')}</div>
            <div class="achievement-progress-bar-bg">
              <div class="achievement-progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
          </div>
          ${btnHTML}
        </div>
      `;
        });
        contentHTML += `
          </div>
        </div>
      </div>
    `;
    }
    body.innerHTML = contentHTML;
}
function renderCollectionModal() {
    const modal = (0, _domJs.DOMElements).collectionModal;
    let contentHTML = '';
    let hasContent = false;
    // --- Секция 1: Предметы из категорий ---
    const allCategories = Object.keys((0, _configJs.CATEGORIES_CONFIG));
    allCategories.forEach((key)=>{
        const category = (0, _configJs.CATEGORIES_CONFIG)[key];
        // Проверяем, открыт ли хоть один предмет в этой категории
        const isCategoryVisible = category.items.some((item)=>(0, _gameLogicJs.isDiscovered)(key, item.level));
        if (isCategoryVisible) {
            if (hasContent) contentHTML += `<hr style="border-color: #333; margin: 15px 0 10px;">`;
            contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">${category.name}</h4>`;
            contentHTML += `<div class="progression-container">`;
            category.items.forEach((item, itemIndex)=>{
                const itemKey = `${key}-${item.level}`;
                const discovered = (0, _gameLogicJs.isDiscovered)(key, item.level);
                const bonusClaimed = !!(0, _stateJs.gameState).claimedCollectionBonuses[itemKey];
                let itemClasses = 'progression-item-square';
                let clickHandler = '';
                let title = "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
                let bonusIconHTML = '';
                if (discovered) {
                    title = item.name;
                    // Если бонус еще не собран, добавляем соответствующий класс, иконку и обработчик
                    if (!bonusClaimed) {
                        itemClasses += ' bonus-unclaimed';
                        const bonusAmount = item.level * (0, _gameConfigJs.CONFIG).COLLECTION_BONUS_BASE_VALUE;
                        const coinIcon = `<img src="${(0, _assetUrlsJs.coinIconUrl)}" class="inline-icon" alt="\u{43C}\u{43E}\u{43D}\u{435}\u{442}\u{430}">`;
                        clickHandler = `data-action="claim-bonus" data-category="${key}" data-level="${item.level}"`;
                        bonusIconHTML = `<div class="unclaimed-bonus-icon" title="\u{421}\u{43E}\u{431}\u{440}\u{430}\u{442}\u{44C} \u{431}\u{43E}\u{43D}\u{443}\u{441}">+${bonusAmount}${coinIcon}</div>`;
                    }
                } else itemClasses += ' undiscovered';
                const itemIcon = discovered ? `<img src="${item.icon}" alt="${item.name}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
                contentHTML += `
          <div class="${itemClasses}" title="${title}" ${clickHandler}>
            <div class="progression-item-icon">${itemIcon}</div>
            <div class="progression-item-level">${item.level}</div>
            ${bonusIconHTML}
          </div>
        `;
                if (itemIndex < category.items.length - 1) contentHTML += '<div class="progression-arrow-h">\u2192</div>';
            });
            contentHTML += `</div>`;
            hasContent = true;
        }
    });
    // --- Секция 2: Генераторы ---
    if (hasContent) contentHTML += `<hr style="border-color: #333; margin: 15px 0 10px;">`;
    contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">\u{423}\u{43B}\u{443}\u{447}\u{448}\u{435}\u{43D}\u{438}\u{44F} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{432}</h4>`;
    for(const genKey in 0, _configJs.GENERATORS_DATA){
        if (genKey === 'bonus_chest') continue;
        const genData = (0, _configJs.GENERATORS_DATA)[genKey];
        // Проверяем, открыт ли хоть один уровень этого генератора
        const isGeneratorVisible = genData.icons.some((icon, index)=>(0, _gameLogicJs.isDiscovered)(`gen_${genKey}`, index + 1));
        if (isGeneratorVisible) {
            contentHTML += `<div class="progression-container" style="margin-top: 5px; margin-bottom: 10px;">`;
            genData.icons.forEach((iconPath, index)=>{
                const level = index + 1;
                const romanLevel = (0, _gameConfigJs.CONFIG).ROMAN_NUMERALS[level];
                const discovered = (0, _gameLogicJs.isDiscovered)(`gen_${genKey}`, level);
                const undiscoveredClass = discovered ? '' : 'undiscovered';
                const title = discovered ? `${genData.name} ${romanLevel}` : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
                const itemIcon = discovered ? `<img src="${iconPath}" alt="${title}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
                contentHTML += `
          <div class="progression-item-square ${undiscoveredClass}" title="${title}">
            <div class="progression-item-icon">${itemIcon}</div>
            <div class="progression-item-level">${romanLevel}</div>
          </div>
        `;
                if (index < genData.icons.length - 1) contentHTML += '<div class="progression-arrow-h">\u2192</div>';
            });
            contentHTML += `</div>`;
        }
    }
    hasContent = true;
    // --- Секция 3: Части генераторов ---
    contentHTML += `<hr style="border-color: #333; margin: 15px 0 10px;">`;
    contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">\u{421}\u{431}\u{43E}\u{440}\u{43A}\u{430} \u{433}\u{435}\u{43D}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{432}</h4>`;
    for(const genKey in 0, _configJs.GENERATORS_DATA){
        const genData = (0, _configJs.GENERATORS_DATA)[genKey];
        if (!genData.parts) continue;
        const discoveryKey = `part_${genKey}`;
        const arePartsVisible = genData.parts.some((part, index)=>(0, _gameLogicJs.isDiscovered)(discoveryKey, index + 1));
        if (arePartsVisible) {
            contentHTML += `<div class="progression-container" style="margin-top: 5px; margin-bottom: 10px;">`;
            genData.parts.forEach((part, index)=>{
                const level = index + 1;
                const discovered = (0, _gameLogicJs.isDiscovered)(discoveryKey, level);
                const undiscoveredClass = discovered ? '' : 'undiscovered';
                const title = discovered ? part.name : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
                const itemIcon = discovered ? `<img src="${part.icon}" alt="${title}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
                contentHTML += `
          <div class="progression-item-square ${undiscoveredClass}" title="${title}">
            <div class="progression-item-icon">${itemIcon}</div>
            <div class="progression-item-level">${level}</div>
          </div>
        `;
                if (index < genData.parts.length - 1) contentHTML += '<div class="progression-arrow-h">\u2192</div>';
            });
            contentHTML += '<div class="progression-arrow-h">\u2192</div>';
            const finalGenDiscovered = (0, _gameLogicJs.isDiscovered)(`gen_${genKey}`, 1);
            const finalGenUndiscoveredClass = finalGenDiscovered ? '' : 'undiscovered';
            const finalGenTitle = finalGenDiscovered ? `${genData.name} I` : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
            const finalGenIcon = finalGenDiscovered ? `<img src="${genData.icons[0]}" alt="${finalGenTitle}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
            contentHTML += `
        <div class="progression-item-square ${finalGenUndiscoveredClass}" title="${finalGenTitle}">
          <div class="progression-item-icon">${finalGenIcon}</div>
          <div class="progression-item-level">I</div>
        </div>
      `;
            contentHTML += `</div>`;
        }
    }
    // --- Секция 4: Бустеры ---
    const boosters = [
        {
            key: 'upgrade_part',
            name: "\u041D\u043E\u0432\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C",
            icon: (0, _assetUrlsJs.upgradePartIconUrl)
        },
        {
            key: 'magic_tool',
            name: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
            icon: (0, _assetUrlsJs.magicToolIconUrl)
        },
        {
            key: 'copy_bubble',
            name: "\u041A\u043E\u043F\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u043F\u0443\u0437\u044B\u0440\u044C",
            icon: (0, _assetUrlsJs.copyBubbleIconUrl)
        }
    ];
    if (hasContent) contentHTML += `<hr style="border-color: #333; margin: 15px 0 10px;">`;
    contentHTML += `<h4 style="margin-bottom: 10px; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">\u{411}\u{443}\u{441}\u{442}\u{435}\u{440}\u{44B}</h4>`;
    contentHTML += `<div class="progression-container">`;
    boosters.forEach((booster)=>{
        const discovered = (0, _gameLogicJs.isDiscovered)(booster.key, 1);
        const undiscoveredClass = discovered ? '' : 'undiscovered';
        const title = discovered ? booster.name : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
        const iconSrc = discovered ? booster.icon : (0, _assetUrlsJs.questionIconUrl);
        contentHTML += `
      <div class="progression-item-square ${undiscoveredClass}" title="${title}">
        <div class="progression-item-icon"><img src="${iconSrc}" alt="${title}"></div>
      </div>
    `;
    });
    contentHTML += `</div>`;
    // --- Добавляем цепочку bonus_chest в эту же секцию ---
    const bonusChestData = (0, _configJs.GENERATORS_DATA)['bonus_chest'];
    const isBonusChestVisible = bonusChestData.icons.some((icon, index)=>(0, _gameLogicJs.isDiscovered)('gen_bonus_chest', index + 1));
    if (isBonusChestVisible) {
        contentHTML += `<div class="progression-container" style="margin-top: 10px;">`;
        bonusChestData.icons.forEach((iconPath, index)=>{
            const level = index + 1;
            const romanLevel = (0, _gameConfigJs.CONFIG).ROMAN_NUMERALS[level];
            const discovered = (0, _gameLogicJs.isDiscovered)('gen_bonus_chest', level);
            const undiscoveredClass = discovered ? '' : 'undiscovered';
            const title = discovered ? `${bonusChestData.name} ${romanLevel}` : "\u041D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E";
            const itemIcon = discovered ? `<img src="${iconPath}" alt="${title}">` : `<img src="${0, _assetUrlsJs.questionIconUrl}" alt="\u{41D}\u{435} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{43E}">`;
            contentHTML += `
        <div class="progression-item-square ${undiscoveredClass}" title="${title}">
          <div class="progression-item-icon">${itemIcon}</div>
          <div class="progression-item-level">${romanLevel}</div>
        </div>
      `;
            if (index < bonusChestData.icons.length - 1) contentHTML += '<div class="progression-arrow-h">\u2192</div>';
        });
        contentHTML += `</div>`;
    }
    modal.body.innerHTML = contentHTML;
    modal.footer.innerHTML = ''; // Очищаем футер, кнопка больше не нужна
}

},{"./dom.js":"iyifM","./state.js":"9b3Vp","./config.js":"itWAF","./data/gameConfig.js":"5Gyni","./gameLogic.js":"6oSsV","./gameManager.js":"CQNle","./audio.js":"bUGZ1","./haptics.js":"4SzyB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./data/assetUrls.js":"4MPQh"}],"4SzyB":[function(require,module,exports,__globalThis) {
// script/haptics.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Легкий виброотклик, для кликов и простых действий.
 */ parcelHelpers.export(exports, "hapticLight", ()=>hapticLight);
/**
 * Средний виброотклик, для значимых действий (использование генератора).
 */ parcelHelpers.export(exports, "hapticMedium", ()=>hapticMedium);
/**
 * Сильный виброотклик, для успешных действий (слияние, получение награды).
 */ parcelHelpers.export(exports, "hapticSuccess", ()=>hapticSuccess);
/**
 * Виброотклик для ошибки или неверного действия.
 */ parcelHelpers.export(exports, "hapticError", ()=>hapticError);
var _stateJs = require("./state.js");
/**
 * Проверяет, поддерживается ли вибрация и включена ли она в настройках.
 * @returns {boolean}
 */ function canVibrate() {
    return (0, _stateJs.gameSettings).hapticsEnabled && 'vibrate' in navigator;
}
function hapticLight() {
    if (!canVibrate()) return;
    navigator.vibrate(10);
}
function hapticMedium() {
    if (!canVibrate()) return;
    navigator.vibrate(12);
}
function hapticSuccess() {
    if (!canVibrate()) return;
    navigator.vibrate([
        10,
        4,
        10
    ]); // Двойная короткая вибрация
}
function hapticError() {
    if (!canVibrate()) return;
    navigator.vibrate([
        50,
        30,
        50
    ]); // "Дребезжание"
}

},{"./state.js":"9b3Vp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8s0KB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Запускает постепенную фоновую загрузку всех игровых ассетов для кэширования.
 * Использует requestIdleCallback, чтобы не мешать основному потоку выполнения.
 */ parcelHelpers.export(exports, "precacheGameAssets", ()=>precacheGameAssets);
var _configJs = require("./config.js");
var _assetUrlsJs = require("./data/assetUrls.js");
// Используем Set, чтобы хранить только уникальные URL и избежать дубликатов
const allAssetUrls = new Set();
function addUrl(url) {
    // Убеждаемся, что работаем со строковым представлением URL
    if (url instanceof URL) allAssetUrls.add(url.href);
    else if (typeof url === 'string' && url.startsWith('http')) allAssetUrls.add(url);
}
// 1. Собираем URL из центрального файла ассетов
Object.values(_assetUrlsJs).forEach(addUrl);
// 2. Собираем иконки предметов
Object.values((0, _configJs.CATEGORIES_CONFIG)).forEach((category)=>{
    category.items.forEach((item)=>addUrl(item.icon));
});
// 3. Собираем иконки генераторов, их частей и дропов
Object.values((0, _configJs.GENERATORS_DATA)).forEach((generator)=>{
    if (generator.parts) generator.parts.forEach((part)=>addUrl(part.icon));
    if (generator.icons) generator.icons.forEach((icon)=>addUrl(icon));
    if (generator.drops) generator.drops.forEach((drop)=>addUrl(drop.item.icon));
});
// 4. Собираем иконки персонажей
(0, _configJs.CHARACTERS).forEach((char)=>addUrl(char.icon));
(0, _configJs.STORY_CHARACTERS).forEach((char)=>addUrl(char.icon));
// 5. Собираем иконки из сюжетов
Object.values((0, _configJs.STORY_DATA)).forEach((story)=>{
    addUrl(story.icon);
    Object.values(story.chapters).forEach((chapter)=>{
        chapter.steps.forEach((step)=>{
            if (step.character) addUrl(step.character);
        });
    });
});
function precacheGameAssets() {
    // Проверяем, что Service Worker активен
    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
        console.log("Service Worker \u043D\u0435 \u0430\u043A\u0442\u0438\u0432\u0435\u043D, \u0444\u043E\u043D\u043E\u0432\u043E\u0435 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E.");
        return;
    }
    console.log(`[Asset Preloader] \u{417}\u{430}\u{43F}\u{443}\u{441}\u{43A} \u{444}\u{43E}\u{43D}\u{43E}\u{432}\u{43E}\u{433}\u{43E} \u{43A}\u{44D}\u{448}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${allAssetUrls.size} \u{430}\u{441}\u{441}\u{435}\u{442}\u{43E}\u{432}.`);
    const urlsToCache = Array.from(allAssetUrls);
    let i = 0;
    function fetchNext() {
        if (i >= urlsToCache.length) {
            console.log("[Asset Preloader] \u0412\u0441\u0435 \u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u0430\u0441\u0441\u0435\u0442\u044B \u0431\u044B\u043B\u0438 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u044B \u0434\u043B\u044F \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.");
            return;
        }
        // Этот запрос будет перехвачен Service Worker'ом,
        // который положит ответ в кэш согласно стратегии CacheFirst.
        fetch(urlsToCache[i]);
        i++;
        // Планируем следующий запрос, когда браузер будет свободен
        if ('requestIdleCallback' in window) requestIdleCallback(fetchNext);
        else setTimeout(fetchNext, 100); // Fallback для старых браузеров
    }
    // Даем игре "продышаться" и запускаем процесс с небольшой задержкой
    setTimeout(()=>{
        if ('requestIdleCallback' in window) requestIdleCallback(fetchNext);
        else setTimeout(fetchNext, 1000);
    }, 2000); // Запускаем через 2 секунды после старта игры
}

},{"./config.js":"itWAF","./data/assetUrls.js":"4MPQh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["7BLl3","doGT4"], "doGT4", "parcelRequire7fd4", {}, "./", "/")

//# sourceMappingURL=Combinations.3d1cdb8d.js.map
