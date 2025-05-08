import{o as Bc}from"./vendor-BIzLNe23.js";const qc=()=>{};var mo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},jc=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],l=r[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,l=a?r[s+1]:0,h=s+2<r.length,f=h?r[s+2]:0,p=o>>2,E=(o&3)<<4|l>>4;let w=(l&15)<<2|f>>6,C=f&63;h||(C=64,a||(w=64)),n.push(e[p],e[E],e[w],e[C])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(ya(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):jc(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],l=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const E=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||l==null||f==null||E==null)throw new $c;const w=o<<2|l>>4;if(n.push(w),f!==64){const C=l<<4&240|f>>2;if(n.push(C),E!==64){const b=f<<6&192|E;n.push(b)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zc=function(r){const t=ya(r);return Ea.encodeByteArray(t,!0)},er=function(r){return zc(r).replace(/\./g,"")},Gc=function(r){try{return Ea.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=()=>Kc().__FIREBASE_DEFAULTS__,Qc=()=>{if(typeof process>"u"||typeof mo>"u")return;const r=mo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Wc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Gc(r[1]);return t&&JSON.parse(t)},bs=()=>{try{return qc()||Hc()||Qc()||Wc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Yc=r=>{var t,e;return(e=(t=bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},Xc=r=>{const t=Yc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Ta=()=>{var r;return(r=bs())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[er(JSON.stringify(e)),er(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function el(){var r;const t=(r=bs())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nl(){return!el()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rl(){try{return typeof indexedDB=="object"}catch{return!1}}function sl(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="FirebaseError";class Ne extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=il,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?ol(o,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ne(s,l,n)}}function ol(r,t){return r.replace(al,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const al=/\{\$([^}]+)}/g;function nr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if(po(o)&&po(a)){if(!nr(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function po(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(r){return r.endsWith(".cloudworkstations.dev")}async function ul(r){return(await fetch(r,{credentials:"include"})).ok}class ln{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Jc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hl(t))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ae){return this.instances.has(t)}getOptions(t=ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ll(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ae){return this.component?this.component.multipleInstances?t:ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ll(r){return r===ae?void 0:r}function hl(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new cl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(j||(j={}));const fl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},ml=j.INFO,pl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},gl=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=pl[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Aa{constructor(t){this.name=t,this._logLevel=ml,this._logHandler=gl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(yl(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function yl(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ls="@firebase/app",go="0.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Aa("@firebase/app"),El="@firebase/app-compat",Tl="@firebase/analytics-compat",vl="@firebase/analytics",Il="@firebase/app-check-compat",Al="@firebase/app-check",wl="@firebase/auth",Rl="@firebase/auth-compat",Pl="@firebase/database",Sl="@firebase/data-connect",Cl="@firebase/database-compat",Vl="@firebase/functions",bl="@firebase/functions-compat",Dl="@firebase/installations",Nl="@firebase/installations-compat",kl="@firebase/messaging",Ol="@firebase/messaging-compat",xl="@firebase/performance",Ml="@firebase/performance-compat",Ll="@firebase/remote-config",Fl="@firebase/remote-config-compat",Ul="@firebase/storage",Bl="@firebase/storage-compat",ql="@firebase/firestore",jl="@firebase/vertexai",$l="@firebase/firestore-compat",zl="firebase",Gl="11.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]",Kl={[ls]:"fire-core",[El]:"fire-core-compat",[vl]:"fire-analytics",[Tl]:"fire-analytics-compat",[Al]:"fire-app-check",[Il]:"fire-app-check-compat",[wl]:"fire-auth",[Rl]:"fire-auth-compat",[Pl]:"fire-rtdb",[Sl]:"fire-data-connect",[Cl]:"fire-rtdb-compat",[Vl]:"fire-fn",[bl]:"fire-fn-compat",[Dl]:"fire-iid",[Nl]:"fire-iid-compat",[kl]:"fire-fcm",[Ol]:"fire-fcm-compat",[xl]:"fire-perf",[Ml]:"fire-perf-compat",[Ll]:"fire-rc",[Fl]:"fire-rc-compat",[Ul]:"fire-gcs",[Bl]:"fire-gcs-compat",[ql]:"fire-fst",[$l]:"fire-fst-compat",[jl]:"fire-vertex","fire-js":"fire-js",[zl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Map,Hl=new Map,ds=new Map;function _o(r,t){try{r.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function sr(r){const t=r.name;if(ds.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;ds.set(t,r);for(const e of rr.values())_o(e,r);for(const e of Hl.values())_o(e,r);return!0}function Ql(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Wl(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new va("app","Firebase",Yl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=Gl;function Zl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:hs,automaticDataCollectionEnabled:!0},t),s=n.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(e||(e=Ta()),!e)throw Ht.create("no-options");const o=rr.get(s);if(o){if(nr(e,o.options)&&nr(n,o.config))return o;throw Ht.create("duplicate-app",{appName:s})}const a=new dl(s);for(const h of ds.values())a.addComponent(h);const l=new Xl(e,n,a);return rr.set(s,l),l}function th(r=hs){const t=rr.get(r);if(!t&&r===hs&&Ta())return Zl();if(!t)throw Ht.create("no-app",{appName:r});return t}function Ae(r,t,e){var n;let s=(n=Kl[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}sr(new ln(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="firebase-heartbeat-database",nh=1,hn="firebase-heartbeat-store";let os=null;function wa(){return os||(os=Bc(eh,nh,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(hn)}catch(e){console.warn(e)}}}}).catch(r=>{throw Ht.create("idb-open",{originalErrorMessage:r.message})})),os}async function rh(r){try{const e=(await wa()).transaction(hn),n=await e.objectStore(hn).get(Ra(r));return await e.done,n}catch(t){if(t instanceof Ne)Ut.warn(t.message);else{const e=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function yo(r,t){try{const n=(await wa()).transaction(hn,"readwrite");await n.objectStore(hn).put(t,Ra(r)),await n.done}catch(e){if(e instanceof Ne)Ut.warn(e.message);else{const n=Ht.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}function Ra(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=1024,ih=30;class oh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new uh(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Eo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>ih){const a=ch(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ut.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Eo(),{heartbeatsToSend:n,unsentEntries:s}=ah(this._heartbeatsCache.heartbeats),o=er(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function Eo(){return new Date().toISOString().substring(0,10)}function ah(r,t=sh){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),To(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),To(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class uh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rl()?sl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function To(r){return er(JSON.stringify({version:2,heartbeats:r})).length}function ch(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(r){sr(new ln("platform-logger",t=>new _l(t),"PRIVATE")),sr(new ln("heartbeat",t=>new oh(t),"PRIVATE")),Ae(ls,go,r),Ae(ls,go,"esm2017"),Ae("fire-js","")}lh("");var hh="firebase",dh="11.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae(hh,dh,"app");var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Pa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,A){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=m+(A^_&(T^A))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(_^T))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^A)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~A))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<m;)if(y[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,y),T=0;break}}else for(;A<m;)if(y[T++]=v[A++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;y&&A==m||(_[T]=A,y=!1)}this.g=_}var l={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return D(f(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=E,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),m);8>A?(A=f(Math.pow(m,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),w=h(1),C=h(16777216);r=a.prototype,r.m=function(){if(O(this))return-D(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var m=f(Math.pow(v,6)),_=this,y="";;){var T=st(_,m).g;_=K(_,T.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,b(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}r.l=function(v){return v=K(this,v),O(v)?-1:b(v)?0:1};function D(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(w)}r.abs=function(){return O(this)?D(this):this},r.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=m;T++){var A=y+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(v,m){return v.add(D(m))}r.j=function(v){if(b(this)||b(v))return E;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var A=this.i(y)>>>16,g=this.i(y)&65535,kt=v.i(T)>>>16,Le=v.i(T)&65535;_[2*y+2*T]+=g*Le,z(_,2*y+2*T),_[2*y+2*T+1]+=A*Le,z(_,2*y+2*T+1),_[2*y+2*T+1]+=g*kt,z(_,2*y+2*T+1),_[2*y+2*T+2]+=A*kt,z(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function z(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function H(v,m){this.g=v,this.h=m}function st(v,m){if(b(m))throw Error("division by zero");if(b(v))return new H(E,E);if(O(v))return m=st(D(v),m),new H(D(m.g),D(m.h));if(O(m))return m=st(v,D(m)),new H(D(m.g),m.h);if(30<v.g.length){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=m;0>=y.l(v);)_=Nt(_),y=Nt(y);var T=at(_,1),A=at(y,1);for(y=at(y,2),_=at(_,2);!b(y);){var g=A.add(y);0>=g.l(v)&&(T=T.add(_),A=g),y=at(y,1),_=at(_,1)}return m=K(v,T.j(m)),new H(T,m)}for(T=E;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(m);O(g)||0<g.l(v);)_-=y,A=f(_),g=A.j(m);b(A)&&(A=w),T=T.add(A),v=K(v,g)}return new H(T,v)}r.A=function(v){return st(this,v).h},r.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},r.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},r.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Nt(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function at(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,T=[],A=0;A<y;A++)T[A]=0<m?v.i(A+_)>>>m|v.i(A+_+1)<<32-m:v.i(A+_);return new a(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Pa=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,Qt=a}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});var zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sa,tn,Ca,Wn,fs,Va,ba,Da;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof zn=="object"&&zn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function s(i,u){if(u)t:{var c=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in c))break t;c=c[I]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,d=!1,I={next:function(){if(!d&&c<i.length){var R=c++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,c){return i.call.apply(i.bind,arguments)}function E(i,u,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function w(i,u,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,w.apply(null,arguments)}function C(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function b(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,I,R){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return u.prototype[I].apply(d,V)}}function O(i){const u=i.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function D(i,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const I=i.length||0,R=d.length||0;i.length=I+R;for(let V=0;V<R;V++)i[I+V]=d[V]}else i.push(d)}}class K{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var Nt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function at(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function v(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function m(i){const u={};for(const c in i)u[c]=i[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let c,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(c in d)i[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function T(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function A(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Mr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class kt{constructor(){this.h=this.g=null}add(u,c){const d=Le.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Le=new K(()=>new ic,i=>i.reset());class ic{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Ue=!1,Mr=new kt,fi=()=>{const i=l.Promise.resolve(void 0);Fe=()=>{i.then(oc)}};var oc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){A(c)}var u=Le;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Ue=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var ac=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function Be(i,u){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Nt){t:{try{st(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:uc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Be.aa.h.call(this)}}b(Be,dt);var uc={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),cc=0;function lc(i,u,c,d,I){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=I,this.key=++cc,this.da=this.fa=!1}function Pn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Sn(i){this.src=i,this.g={},this.h=0}Sn.prototype.add=function(i,u,c,d,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=Fr(i,u,d,I);return-1<V?(u=i[V],c||(u.fa=!1)):(u=new lc(u,this.src,R,!!d,I),u.fa=c,i.push(u)),u};function Lr(i,u){var c=u.type;if(c in i.g){var d=i.g[c],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(Pn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Fr(i,u,c,d){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==d)return I}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),Br={};function mi(i,u,c,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)mi(i,u[R],c,d,I);return null}return c=_i(c),i&&i[Rn]?i.K(u,c,f(d)?!!d.capture:!1,I):hc(i,u,c,!1,d,I)}function hc(i,u,c,d,I,R){if(!u)throw Error("Invalid event type");var V=f(I)?!!I.capture:!!I,Q=jr(i);if(Q||(i[Ur]=Q=new Sn(i)),c=Q.add(u,c,d,V,R),c.proxy)return c;if(d=dc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)ac||(I=V),I===void 0&&(I=!1),i.addEventListener(u.toString(),d,I);else if(i.attachEvent)i.attachEvent(gi(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function dc(){function i(c){return u.call(i.src,i.listener,c)}const u=fc;return i}function pi(i,u,c,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)pi(i,u[R],c,d,I);else d=f(d)?!!d.capture:!!d,c=_i(c),i&&i[Rn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],c=Fr(R,c,d,I),-1<c&&(Pn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=jr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Fr(u,c,d,I)),(c=-1<i?u[i]:null)&&qr(c))}function qr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Rn])Lr(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(gi(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=jr(u))?(Lr(c,i),c.h==0&&(c.src=null,u[Ur]=null)):Pn(i)}}}function gi(i){return i in Br?Br[i]:Br[i]="on"+i}function fc(i,u){if(i.da)i=!0;else{u=new Be(u,this);var c=i.listener,d=i.ha||i.src;i.fa&&qr(i),i=c.call(d,u)}return i}function jr(i){return i=i[Ur],i instanceof Sn?i:null}var $r="__closure_events_fn_"+(1e9*Math.random()>>>0);function _i(i){return typeof i=="function"?i:(i[$r]||(i[$r]=function(u){return i.handleEvent(u)}),i[$r])}function ft(){jt.call(this),this.i=new Sn(this),this.M=this,this.F=null}b(ft,jt),ft.prototype[Rn]=!0,ft.prototype.removeEventListener=function(i,u,c,d){pi(this,i,u,c,d)};function yt(i,u){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new dt(u,i);else if(u instanceof dt)u.target=u.target||i;else{var I=u;u=new dt(d,i),y(u,I)}if(I=!0,c)for(var R=c.length-1;0<=R;R--){var V=u.g=c[R];I=Cn(V,d,!0,u)&&I}if(V=u.g=i,I=Cn(V,d,!0,u)&&I,I=Cn(V,d,!1,u)&&I,c)for(R=0;R<c.length;R++)V=u.g=c[R],I=Cn(V,d,!1,u)&&I}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],d=0;d<c.length;d++)Pn(c[d]);delete i.g[u],i.h--}}this.F=null},ft.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},ft.prototype.L=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function Cn(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var V=u[R];if(V&&!V.da&&V.capture==c){var Q=V.listener,ut=V.ha||V.src;V.fa&&Lr(i.i,V),I=Q.call(ut,d)!==!1&&I}}return I&&!d.defaultPrevented}function yi(i,u,c){if(typeof i=="function")c&&(i=w(i,c));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Ei(i){i.g=yi(()=>{i.g=null,i.i&&(i.i=!1,Ei(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class mc extends jt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(i){jt.call(this),this.h=i,this.g={}}b(qe,jt);var Ti=[];function vi(i){at(i.g,function(u,c){this.g.hasOwnProperty(c)&&qr(u)},i),i.g={}}qe.prototype.N=function(){qe.aa.N.call(this),vi(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=l.JSON.stringify,pc=l.JSON.parse,gc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Gr(){}Gr.prototype.h=null;function Ii(i){return i.h||(i.h=i.i())}function Ai(){}var je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kr(){dt.call(this,"d")}b(Kr,dt);function Hr(){dt.call(this,"c")}b(Hr,dt);var re={},wi=null;function Vn(){return wi=wi||new ft}re.La="serverreachability";function Ri(i){dt.call(this,re.La,i)}b(Ri,dt);function $e(i){const u=Vn();yt(u,new Ri(u))}re.STAT_EVENT="statevent";function Pi(i,u){dt.call(this,re.STAT_EVENT,i),this.stat=u}b(Pi,dt);function Et(i){const u=Vn();yt(u,new Pi(u,i))}re.Ma="timingevent";function Si(i,u){dt.call(this,re.Ma,i),this.size=u}b(Si,dt);function ze(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function _c(i,u,c,d,I,R){i.info(function(){if(i.g)if(R)for(var V="",Q=R.split("&"),ut=0;ut<Q.length;ut++){var G=Q[ut].split("=");if(1<G.length){var mt=G[0];G=G[1];var pt=mt.split("_");V=2<=pt.length&&pt[1]=="type"?V+(mt+"="+G+"&"):V+(mt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+c+`
`+V})}function yc(i,u,c,d,I,R,V){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+c+`
`+R+" "+V})}function me(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Tc(i,c)+(d?" "+d:"")})}function Ec(i,u){i.info(function(){return"TIMEOUT: "+u})}Ge.prototype.info=function(){};function Tc(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return zr(c)}catch{return u}}var bn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qr;function Dn(){}b(Dn,Gr),Dn.prototype.g=function(){return new XMLHttpRequest},Dn.prototype.i=function(){return{}},Qr=new Dn;function $t(i,u,c,d){this.j=i,this.i=u,this.l=c,this.R=d||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}var bi={},Wr={};function Yr(i,u,c){i.L=1,i.v=xn(Ot(u)),i.m=c,i.P=!0,Di(i,null)}function Di(i,u){i.F=Date.now(),Nn(i),i.A=Ot(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Gi(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Vi,i.g=co(i.j,c?u:null,!i.m),0<i.O&&(i.M=new mc(w(i.Y,i,i.g),i.O)),u=i.U,c=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ti[0]=I.toString()),I=Ti);for(var R=0;R<I.length;R++){var V=mi(c,I[R],d||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),$e(),_c(i.i,i.u,i.A,i.l,i.R,i.m)}$t.prototype.ca=function(i){i=i.target;const u=this.M;u&&xt(i)==3?u.j():this.Y(i)},$t.prototype.Y=function(i){try{if(i==this.g)t:{const pt=xt(this.g);var u=this.g.Ba();const _e=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Ji(this.g)))){this.J||pt!=4||u==7||(u==8||0>=_e?$e(3):$e(2)),Xr(this);var c=this.g.Z();this.X=c;e:if(Ni(this)){var d=Ji(this.g);i="";var I=d.length,R=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),Ke(this);var V="";break e}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,yc(this.i,this.u,this.A,this.l,this.R,pt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ut=this.g;if((Q=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var G=Q;break e}}G=null}if(c=G)me(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,c);else{this.o=!1,this.s=3,Et(12),se(this),Ke(this);break t}}if(this.P){c=!0;let St;for(;!this.J&&this.C<V.length;)if(St=vc(this,V),St==Wr){pt==4&&(this.s=4,Et(14),c=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(St==bi){this.s=4,Et(15),me(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else me(this.i,this.l,St,null),Jr(this,St);if(Ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||V.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)me(this.i,this.l,V,"[Invalid Chunked Response]"),se(this),Ke(this);else if(0<V.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),ss(mt),mt.M=!0,Et(11))}}else me(this.i,this.l,V,null),Jr(this,V);pt==4&&se(this),this.o&&!this.J&&(pt==4?io(this.j,this):(this.o=!1,Nn(this)))}else Fc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),se(this),Ke(this)}}}catch{}finally{}};function Ni(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function vc(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?Wr:(c=Number(u.substring(c,d)),isNaN(c)?bi:(d+=1,d+c>u.length?Wr:(u=u.slice(d,d+c),i.C=d+c,u)))}$t.prototype.cancel=function(){this.J=!0,se(this)};function Nn(i){i.S=Date.now()+i.I,ki(i,i.I)}function ki(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ze(w(i.ba,i),u)}function Xr(i){i.B&&(l.clearTimeout(i.B),i.B=null)}$t.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ec(this.i,this.A),this.L!=2&&($e(),Et(17)),se(this),this.s=2,Ke(this)):ki(this,this.S-i)};function Ke(i){i.j.G==0||i.J||io(i.j,i)}function se(i){Xr(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,vi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Jr(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||Zr(c.h,i))){if(!i.K&&Zr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)qn(c),Un(c);else break t;rs(c),Et(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=ze(w(c.Za,c),6e3));if(1>=Mi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else oe(c,11)}else if((i.K||c.g==i)&&qn(c),!z(u))for(I=c.Da.g.parse(u),u=0;u<I.length;u++){let G=I[u];if(c.T=G[0],G=G[1],c.G==2)if(G[0]=="c"){c.K=G[1],c.ia=G[2];const mt=G[3];mt!=null&&(c.la=mt,c.j.info("VER="+c.la));const pt=G[4];pt!=null&&(c.Aa=pt,c.j.info("SVER="+c.Aa));const _e=G[5];_e!=null&&typeof _e=="number"&&0<_e&&(d=1.5*_e,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const St=i.g;if(St){const $n=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($n){var R=d.h;R.g||$n.indexOf("spdy")==-1&&$n.indexOf("quic")==-1&&$n.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ts(R,R.h),R.h=null))}if(d.D){const is=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;is&&(d.ya=is,W(d.I,d.D,is))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=i;if(d.qa=uo(d,d.J?d.ia:null,d.W),V.K){Li(d.h,V);var Q=V,ut=d.L;ut&&(Q.I=ut),Q.B&&(Xr(Q),Nn(Q)),d.g=V}else ro(d);0<c.i.length&&Bn(c)}else G[0]!="stop"&&G[0]!="close"||oe(c,7);else c.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?oe(c,7):ns(c):G[0]!="noop"&&c.l&&c.l.ta(G),c.v=0)}}$e(4)}catch{}}var Ic=class{constructor(i,u){this.g=i,this.map=u}};function Oi(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Mi(i){return i.h?1:i.g?i.g.size:0}function Zr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ts(i,u){i.g?i.g.add(u):i.h=u}function Li(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Oi.prototype.cancel=function(){if(this.i=Fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Fi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return O(i.i)}function Ac(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,d=0;d<c;d++)u.push(i[d]);return u}u=[],c=0;for(d in i)u[c++]=i[d];return u}function wc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const d in i)u[c++]=d;return u}}}function Ui(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=wc(i),d=Ac(i),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],c&&c[R],i)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rc(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),I=null;if(0<=d){var R=i[c].substring(0,d);I=i[c].substring(d+1)}else R=i[c];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ie){this.h=i.h,kn(this,i.j),this.o=i.o,this.g=i.g,On(this,i.s),this.l=i.l;var u=i.i,c=new We;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),qi(this,c),this.m=i.m}else i&&(u=String(i).match(Bi))?(this.h=!1,kn(this,u[1]||"",!0),this.o=He(u[2]||""),this.g=He(u[3]||"",!0),On(this,u[4]),this.l=He(u[5]||"",!0),qi(this,u[6]||"",!0),this.m=He(u[7]||"")):(this.h=!1,this.i=new We(null,this.h))}ie.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Qe(u,ji,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Qe(u,ji,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Qe(c,c.charAt(0)=="/"?Cc:Sc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Qe(c,bc)),i.join("")};function Ot(i){return new ie(i)}function kn(i,u,c){i.j=c?He(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function On(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function qi(i,u,c){u instanceof We?(i.i=u,Dc(i.i,i.h)):(c||(u=Qe(u,Vc)),i.i=new We(u,i.h))}function W(i,u,c){i.i.set(u,c)}function xn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function He(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Qe(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Pc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Pc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ji=/[#\/\?@]/g,Sc=/[#\?:]/g,Cc=/[#\?]/g,Vc=/[#\?@]/g,bc=/#/g;function We(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function zt(i){i.g||(i.g=new Map,i.h=0,i.i&&Rc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}r=We.prototype,r.add=function(i,u){zt(this),this.i=null,i=pe(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function $i(i,u){zt(i),u=pe(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function zi(i,u){return zt(i),u=pe(i,u),i.g.has(u)}r.forEach=function(i,u){zt(this),this.g.forEach(function(c,d){c.forEach(function(I){i.call(u,I,d,this)},this)},this)},r.na=function(){zt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const I=i[d];for(let R=0;R<I.length;R++)c.push(u[d])}return c},r.V=function(i){zt(this);let u=[];if(typeof i=="string")zi(this,i)&&(u=u.concat(this.g.get(pe(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},r.set=function(i,u){return zt(this),this.i=null,i=pe(this,i),zi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},r.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Gi(i,u,c){$i(i,u),0<c.length&&(i.i=null,i.g.set(pe(i,u),O(c)),i.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const R=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var I=R;V[d]!==""&&(I+="="+encodeURIComponent(String(V[d]))),i.push(I)}}return this.i=i.join("&")};function pe(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Dc(i,u){u&&!i.j&&(zt(i),i.i=null,i.g.forEach(function(c,d){var I=d.toLowerCase();d!=I&&($i(this,d),Gi(this,I,c))},i)),i.j=u}function Nc(i,u){const c=new Ge;if(l.Image){const d=new Image;d.onload=C(Gt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=C(Gt,c,"TestLoadImage: error",!1,u,d),d.onabort=C(Gt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=C(Gt,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function kc(i,u){const c=new Ge,d=new AbortController,I=setTimeout(()=>{d.abort(),Gt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Gt(c,"TestPingServer: ok",!0,u):Gt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Gt(c,"TestPingServer: error",!1,u)})}function Gt(i,u,c,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(c)}catch{}}function Oc(){this.g=new gc}function xc(i,u,c){const d=c||"";try{Ui(i,function(I,R){let V=I;f(I)&&(V=zr(I)),u.push(d+R+"="+encodeURIComponent(V))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function Mn(i){this.l=i.Ub||null,this.j=i.eb||!1}b(Mn,Gr),Mn.prototype.g=function(){return new Ln(this.l,this.j)},Mn.prototype.i=function(i){return function(){return i}}({});function Ln(i,u){ft.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Ln,ft),r=Ln.prototype,r.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Xe(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ki(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ki(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Ye(this):Xe(this),this.readyState==3&&Ki(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Ye(this))},r.Qa=function(i){this.g&&(this.response=i,Ye(this))},r.ga=function(){this.g&&Ye(this)};function Ye(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Xe(i)}r.setRequestHeader=function(i,u){this.u.append(i,u)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function Xe(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Hi(i){let u="";return at(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function es(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Hi(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):W(i,u,c))}function J(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(J,ft);var Mc=/^https?$/i,Lc=["POST","PUT"];r=J.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qr.g(),this.v=this.o?Ii(this.o):Ii(Qr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){Qi(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)c.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Lc,u,void 0))||d||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xi(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Qi(this,R)}};function Qi(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Wi(i),Fn(i)}function Wi(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Yi(this):this.bb())},r.bb=function(){Yi(this)};function Yi(i){if(i.h&&typeof a<"u"&&(!i.v[1]||xt(i)!=4||i.Z()!=2)){if(i.u&&xt(i)==4)yi(i.Ea,0,i);else if(yt(i,"readystatechange"),xt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=V===0){var I=String(i.D).match(Bi)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),d=!Mc.test(I?I.toLowerCase():"")}c=d}if(c)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var R=2<xt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Wi(i)}}finally{Fn(i)}}}}function Fn(i,u){if(i.g){Xi(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||yt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Xi(i){i.I&&(l.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function xt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),pc(u)}};function Ji(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Fc(i){const u={};i=(i.g&&2<=xt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(z(i[d]))continue;var c=T(i[d]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[I]||[];u[I]=R,R.push(c)}v(u,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function Zi(i){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,i),this.cb=Je("retryDelaySeedMs",1e4,i),this.Wa=Je("forwardChannelMaxRetries",2,i),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(i&&i.concurrentRequestLimit),this.Da=new Oc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Zi.prototype,r.la=8,r.G=1,r.connect=function(i,u,c,d){Et(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=uo(this,null,this.W),Bn(this)};function ns(i){if(to(i),i.G==3){var u=i.U++,c=Ot(i.I);if(W(c,"SID",i.K),W(c,"RID",u),W(c,"TYPE","terminate"),Ze(i,c),u=new $t(i,i.j,u),u.L=2,u.v=xn(Ot(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=co(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Nn(u)}ao(i)}function Un(i){i.g&&(ss(i),i.g.cancel(),i.g=null)}function to(i){Un(i),i.u&&(l.clearTimeout(i.u),i.u=null),qn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Bn(i){if(!xi(i.h)&&!i.s){i.s=!0;var u=i.Ga;Fe||fi(),Ue||(Fe(),Ue=!0),Mr.add(u,i),i.B=0}}function Uc(i,u){return Mi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ze(w(i.Ga,i,u),oo(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new $t(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=no(this,I,u),c=Ot(this.I),W(c,"RID",i),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Ze(this,c),R&&(this.O?u="headers="+encodeURIComponent(String(Hi(R)))+"&"+u:this.m&&es(c,this.m,R)),ts(this.h,I),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",u),W(c,"SID","null"),I.T=!0,Yr(I,c,null)):Yr(I,c,u),this.G=2}}else this.G==3&&(i?eo(this,i):this.i.length==0||xi(this.h)||eo(this))};function eo(i,u){var c;u?c=u.l:c=i.U++;const d=Ot(i.I);W(d,"SID",i.K),W(d,"RID",c),W(d,"AID",i.T),Ze(i,d),i.m&&i.o&&es(d,i.m,i.o),c=new $t(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=no(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ts(i.h,c),Yr(c,d,u)}function Ze(i,u){i.H&&at(i.H,function(c,d){W(u,d,c)}),i.l&&Ui({},function(c,d){W(u,d,c)})}function no(i,u,c){c=Math.min(i.i.length,c);var d=i.l?w(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=I[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let Q=!0;for(let ut=0;ut<c;ut++){let G=I[ut].g;const mt=I[ut].map;if(G-=R,0>G)R=Math.max(0,I[ut].g-100),Q=!1;else try{xc(mt,V,"req"+G+"_")}catch{d&&d(mt)}}if(Q){d=V.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,d}function ro(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Fe||fi(),Ue||(Fe(),Ue=!0),Mr.add(u,i),i.v=0}}function rs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ze(w(i.Fa,i),oo(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,so(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ze(w(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Un(this),so(this))};function ss(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function so(i){i.g=new $t(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ot(i.qa);W(u,"RID","rpc"),W(u,"SID",i.K),W(u,"AID",i.T),W(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(u,"TO",i.ja),W(u,"TYPE","xmlhttp"),Ze(i,u),i.m&&i.o&&es(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=xn(Ot(u)),c.m=null,c.P=!0,Di(c,i)}r.Za=function(){this.C!=null&&(this.C=null,Un(this),rs(this),Et(19))};function qn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function io(i,u){var c=null;if(i.g==u){qn(i),ss(i),i.g=null;var d=2}else if(Zr(i.h,u))c=u.D,Li(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;d=Vn(),yt(d,new Si(d,c)),Bn(i)}else ro(i);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&Uc(i,u)||d==2&&rs(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),I){case 1:oe(i,5);break;case 4:oe(i,10);break;case 3:oe(i,6);break;default:oe(i,2)}}}function oo(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function oe(i,u){if(i.j.info("Error code "+u),u==2){var c=w(i.fb,i),d=i.Xa;const I=!d;d=new ie(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||kn(d,"https"),xn(d),I?Nc(d.toString(),c):kc(d.toString(),c)}else Et(2);i.G=0,i.l&&i.l.sa(u),ao(i),to(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function ao(i){if(i.G=0,i.ka=[],i.l){const u=Fi(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function uo(i,u,c){var d=c instanceof ie?Ot(c):new ie(c);if(d.g!="")u&&(d.g=u+"."+d.g),On(d,d.s);else{var I=l.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new ie(null);d&&kn(R,d),u&&(R.g=u),I&&On(R,I),c&&(R.l=c),d=R}return c=i.D,u=i.ya,c&&u&&W(d,c,u),W(d,"VER",i.la),Ze(i,d),d}function co(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new J(new Mn({eb:c})):new J(i.pa),u.Ha(i.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function lo(){}r=lo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function jn(){}jn.prototype.g=function(i,u){return new wt(i,u)};function wt(i,u){ft.call(this),this.g=new Zi(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!z(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new ge(this)}b(wt,ft),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ns(this.g)},wt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=zr(i),i=c);u.i.push(new Ic(u.Ya++,i)),u.G==3&&Bn(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,ns(this.g),delete this.g,wt.aa.N.call(this)};function ho(i){Kr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}b(ho,Kr);function fo(){Hr.call(this),this.status=1}b(fo,Hr);function ge(i){this.g=i}b(ge,lo),ge.prototype.ua=function(){yt(this.g,"a")},ge.prototype.ta=function(i){yt(this.g,new ho(i))},ge.prototype.sa=function(i){yt(this.g,new fo)},ge.prototype.ra=function(){yt(this.g,"b")},jn.prototype.createWebChannel=jn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Da=function(){return new jn},ba=function(){return Vn()},Va=re,fs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,Wn=bn,Ci.COMPLETE="complete",Ca=Ci,Ai.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",ft.prototype.listen=ft.prototype.K,tn=Ai,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Sa=J}).apply(typeof zn<"u"?zn:typeof self<"u"?self:typeof window<"u"?window:{});const Io="@firebase/firestore",Ao="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Aa("@firebase/firestore");function ye(){return ce.logLevel}function N(r,...t){if(ce.logLevel<=j.DEBUG){const e=t.map(Ds);ce.debug(`Firestore (${ke}): ${r}`,...e)}}function Bt(r,...t){if(ce.logLevel<=j.ERROR){const e=t.map(Ds);ce.error(`Firestore (${ke}): ${r}`,...e)}}function Re(r,...t){if(ce.logLevel<=j.WARN){const e=t.map(Ds);ce.warn(`Firestore (${ke}): ${r}`,...e)}}function Ds(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Na(r,n,e)}function Na(r,t,e){let n=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Bt(n),new Error(n)}function $(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Na(t,s,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class mh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ph{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Mt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Mt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string",31837,{l:n}),new ka(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class gh{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _h{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new gh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){$(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new wo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Eh(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function ms(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return U(n,s);{const o=Oa(),a=Th(o.encode(Ro(r,e)),o.encode(Ro(t,e)));return a!==0?a:U(n,s)}}e+=n>65535?2:1}return U(r.length,t.length)}function Ro(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Th(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function Pe(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-62135596800,So=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*So);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Po)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/So}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Po;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="__name__";class Ct{constructor(t,e,n){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&x(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Ct.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ct.isNumericId(t),s=Ct.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):ms(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Qt.fromString(t.substring(4,t.length-2))}}class Y extends Ct{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const vh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ct{construct(t,e,n){return new lt(t,e,n)}static isValidIdentifier(t){return vh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Co}static keyField(){return new lt([Co])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(o(),s++)}if(o(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=-1;function Ih(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Wt(s,M.empty(),t)}function Ah(r){return new Wt(r.readTime,r.key,dn)}class Wt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Wt(L.min(),M.empty(),dn)}static max(){return new Wt(L.max(),M.empty(),dn)}}function wh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ph{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Rh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>n(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(s=>s?P.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++l,l===o&&n(a)},p=>s(p))}})}static doWhile(t,e){return new P((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function Sh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xe(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}yr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=-1;function Tn(r){return r==null}function ir(r){return r===0&&1/r==-1/0}function Ch(r){return typeof r=="number"&&Number.isInteger(r)&&!ir(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="";function Vh(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Vo(t)),t=bh(r.get(e),t);return Vo(t)}function bh(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case Ma:e+="";break;default:e+=o}}return e}function Vo(r){return r+Ma+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ee(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function La(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ct(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,n,s,o){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Do(this.data.getIterator())}getIteratorFrom(t){return new Do(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class Do{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new rt(lt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fa("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Dh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(r){if($(!!r,39018),typeof r=="string"){let t=0;const e=Dh.exec(r);if($(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xt(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="server_timestamp",Ba="__type__",qa="__previous_value__",ja="__local_write_time__";function ks(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ba])===null||e===void 0?void 0:e.stringValue)===Ua}function Er(r){const t=r.mapValue.fields[qa];return ks(t)?Er(t):t}function fn(r){const t=Yt(r.mapValue.fields[ja].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e,n,s,o,a,l,h,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=p}}const or="(default)";class mn{constructor(t,e){this.projectId=t,this.database=e||or}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database===or}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="__type__",kh="__max__",Kn={mapValue:{}},za="__vector__",ar="value";function Jt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ks(r)?4:xh(r)?9007199254740991:Oh(r)?10:11:x(28295,{value:r})}function bt(r,t){if(r===t)return!0;const e=Jt(r);if(e!==Jt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return fn(r).isEqual(fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Yt(s.timestampValue),l=Yt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return Xt(s.bytesValue).isEqual(Xt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),l=Z(o.doubleValue);return a===l?ir(a)===ir(l):isNaN(a)&&isNaN(l)}return!1}(r,t);case 9:return Pe(r.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(bo(a)!==bo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!bt(a[h],l[h])))return!1;return!0}(r,t);default:return x(52216,{left:r})}}function pn(r,t){return(r.values||[]).find(e=>bt(e,t))!==void 0}function Se(r,t){if(r===t)return 0;const e=Jt(r),n=Jt(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,a){const l=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(r,t);case 3:return No(r.timestampValue,t.timestampValue);case 4:return No(fn(r),fn(t));case 5:return ms(r.stringValue,t.stringValue);case 6:return function(o,a){const l=Xt(o),h=Xt(a);return l.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const p=U(l[f],h[f]);if(p!==0)return p}return U(l.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const l=U(Z(o.latitude),Z(a.latitude));return l!==0?l:U(Z(o.longitude),Z(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ko(r.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,p;const E=o.fields||{},w=a.fields||{},C=(l=E[ar])===null||l===void 0?void 0:l.arrayValue,b=(h=w[ar])===null||h===void 0?void 0:h.arrayValue,O=U(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((p=b==null?void 0:b.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:ko(C,b)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Kn.mapValue&&a===Kn.mapValue)return 0;if(o===Kn.mapValue)return 1;if(a===Kn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const w=ms(h[E],p[E]);if(w!==0)return w;const C=Se(l[h[E]],f[p[E]]);if(C!==0)return C}return U(h.length,p.length)}(r.mapValue,t.mapValue);default:throw x(23264,{Pe:e})}}function No(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Yt(r),n=Yt(t),s=U(e.seconds,n.seconds);return s!==0?s:U(e.nanos,n.nanos)}function ko(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Se(e[s],n[s]);if(o)return o}return U(e.length,n.length)}function Ce(r){return ps(r)}function ps(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Yt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Xt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=ps(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${ps(e.fields[a])}`;return s+"}"}(r.mapValue):x(61005,{value:r})}function Yn(r){switch(Jt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Er(r);return t?16+Yn(t):16;case 5:return 2*r.stringValue.length;case 6:return Xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+Yn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return ee(n.fields,(o,a)=>{s+=o.length+Yn(a)}),s}(r.mapValue);default:throw x(13486,{value:r})}}function gs(r){return!!r&&"integerValue"in r}function Os(r){return!!r&&"arrayValue"in r}function Oo(r){return!!r&&"nullValue"in r}function xo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xn(r){return!!r&&"mapValue"in r}function Oh(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[$a])===null||e===void 0?void 0:e.stringValue)===za}function sn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ee(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=sn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function xh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===kh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=lt.emptyPath(),n={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=l.popLast()}a?n[l.lastSegment()]=sn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Xn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ee(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new Tt(sn(this.value))}}function Ga(r){const t=[];return ee(r.fields,(e,n)=>{const s=new lt([e]);if(Xn(n)){const o=Ga(n.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e,n,s,o,a,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ot(t,0,L.min(),L.min(),L.min(),Tt.empty(),0)}static newFoundDocument(t,e,n,s){return new ot(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new ot(t,2,e,L.min(),L.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new ot(t,3,e,L.min(),L.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.position=t,this.inclusive=e}}function Mo(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=Se(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Lo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!bt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{}class et extends Ka{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Fh(t,e,n):e==="array-contains"?new qh(t,n):e==="in"?new jh(t,n):e==="not-in"?new $h(t,n):e==="array-contains-any"?new zh(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Uh(t,n):new Bh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Se(e,this.value)):e!==null&&Jt(this.value)===Jt(e)&&this.matchesComparison(Se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Ka{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Dt(t,e)}matches(t){return Ha(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ha(r){return r.op==="and"}function Qa(r){return Lh(r)&&Ha(r)}function Lh(r){for(const t of r.filters)if(t instanceof Dt)return!1;return!0}function _s(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Ce(r.value);if(Qa(r))return r.filters.map(t=>_s(t)).join(",");{const t=r.filters.map(e=>_s(e)).join(",");return`${r.op}(${t})`}}function Wa(r,t){return r instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(r,t):r instanceof Dt?function(n,s){return s instanceof Dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,l)=>o&&Wa(a,s.filters[l]),!0):!1}(r,t):void x(19439)}function Ya(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(r):r instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ya).join(" ,")+"}"}(r):"Filter"}class Fh extends et{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Uh extends et{constructor(t,e){super(t,"in",e),this.keys=Xa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bh extends et{constructor(t,e){super(t,"not-in",e),this.keys=Xa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class qh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Os(e)&&pn(e.arrayValue,this.value)}}class jh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pn(this.value.arrayValue,e)}}class $h extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!pn(this.value.arrayValue,e)}}class zh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Os(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>pn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e=null,n=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Ie=null}}function Fo(r,t=null,e=[],n=[],s=null,o=null,a=null){return new Gh(r,t,e,n,s,o,a)}function xs(r){const t=F(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>_s(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Tn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ce(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ce(n)).join(",")),t.Ie=e}return t.Ie}function Ms(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Mh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Wa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Lo(r.startAt,t.startAt)&&Lo(r.endAt,t.endAt)}function ys(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e=null,n=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Kh(r,t,e,n,s,o,a,l){return new Tr(r,t,e,n,s,o,a,l)}function vr(r){return new Tr(r)}function Uo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Hh(r){return r.collectionGroup!==null}function on(r){const t=F(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new rt(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new cr(o,n))}),e.has(lt.keyField().canonicalString())||t.Ee.push(new cr(lt.keyField(),n))}return t.Ee}function Vt(r){const t=F(r);return t.de||(t.de=Qh(t,on(r))),t.de}function Qh(r,t){if(r.limitType==="F")return Fo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new cr(s.field,o)});const e=r.endAt?new ur(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ur(r.startAt.position,r.startAt.inclusive):null;return Fo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Es(r,t,e){return new Tr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ir(r,t){return Ms(Vt(r),Vt(t))&&r.limitType===t.limitType}function Ja(r){return`${xs(Vt(r))}|lt:${r.limitType}`}function Ee(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ya(s)).join(", ")}]`),Tn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ce(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ce(s)).join(",")),`Target(${n})`}(Vt(r))}; limitType=${r.limitType})`}function Ar(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of on(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,l,h){const f=Mo(a,l,h);return a.inclusive?f<=0:f<0}(n.startAt,on(n),s)||n.endAt&&!function(a,l,h){const f=Mo(a,l,h);return a.inclusive?f>=0:f>0}(n.endAt,on(n),s))}(r,t)}function Wh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Za(r){return(t,e)=>{let n=!1;for(const s of on(r)){const o=Yh(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Yh(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Se(h,f):x(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return x(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ee(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return La(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new X(M.comparator);function qt(){return Xh}const tu=new X(M.comparator);function en(...r){let t=tu;for(const e of r)t=t.insert(e.key,e);return t}function eu(r){let t=tu;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ue(){return an()}function nu(){return an()}function an(){return new de(r=>r.toString(),(r,t)=>r.isEqual(t))}const Jh=new X(M.comparator),Zh=new rt(M.comparator);function B(...r){let t=Zh;for(const e of r)t=t.add(e);return t}const td=new rt(U);function ed(){return td}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(t)?"-0":t}}function ru(r){return{integerValue:""+r}}function nd(r,t){return Ch(t)?ru(t):Ls(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this._=void 0}}function rd(r,t,e){return r instanceof gn?function(s,o){const a={fields:{[Ba]:{stringValue:Ua},[ja]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ks(o)&&(o=Er(o)),o&&(a.fields[qa]=o),{mapValue:a}}(e,t):r instanceof _n?iu(r,t):r instanceof yn?ou(r,t):function(s,o){const a=su(s,o),l=Bo(a)+Bo(s.Re);return gs(a)&&gs(s.Re)?ru(l):Ls(s.serializer,l)}(r,t)}function sd(r,t,e){return r instanceof _n?iu(r,t):r instanceof yn?ou(r,t):e}function su(r,t){return r instanceof lr?function(n){return gs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class gn extends wr{}class _n extends wr{constructor(t){super(),this.elements=t}}function iu(r,t){const e=au(t);for(const n of r.elements)e.some(s=>bt(s,n))||e.push(n);return{arrayValue:{values:e}}}class yn extends wr{constructor(t){super(),this.elements=t}}function ou(r,t){let e=au(t);for(const n of r.elements)e=e.filter(s=>!bt(s,n));return{arrayValue:{values:e}}}class lr extends wr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Bo(r){return Z(r.integerValue||r.doubleValue)}function au(r){return Os(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e){this.field=t,this.transform=e}}function od(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof _n&&s instanceof _n||n instanceof yn&&s instanceof yn?Pe(n.elements,s.elements,bt):n instanceof lr&&s instanceof lr?bt(n.Re,s.Re):n instanceof gn&&s instanceof gn}(r.transform,t.transform)}class ad{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Rr{}function uu(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Fs(r.key,It.none()):new vn(r.key,r.data,It.none());{const e=r.data,n=Tt.empty();let s=new rt(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new ne(r.key,n,new Rt(s.toArray()),It.none())}}function ud(r,t,e){r instanceof vn?function(s,o,a){const l=s.value.clone(),h=jo(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):r instanceof ne?function(s,o,a){if(!Jn(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=jo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(cu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(r,t,e,n){return r instanceof vn?function(o,a,l,h){if(!Jn(o.precondition,a))return l;const f=o.value.clone(),p=$o(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ne?function(o,a,l,h){if(!Jn(o.precondition,a))return l;const f=$o(o.fieldTransforms,h,a),p=a.data;return p.setAll(cu(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(r,t,e,n):function(o,a,l){return Jn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,t,e)}function cd(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=su(n.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(n.field,o))}return e||null}function qo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pe(n,s,(o,a)=>od(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class vn extends Rr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Rr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function cu(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function jo(r,t,e){const n=new Map;$(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,l=t.data.field(o.field);n.set(o.field,sd(a,l,e[s]))}return n}function $o(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,rd(o,a,t))}return n}class Fs extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lu extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&ud(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=nu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=uu(a,l);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,n)=>qo(e,n))&&Pe(this.baseMutations,t.baseMutations,(e,n)=>qo(e,n))}}class Us{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){$(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let s=function(){return Jh}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Us(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,q;function hu(r){switch(r){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:r})}}function du(r){if(r===void 0)return Bt("GRPC error has no .code"),S.UNKNOWN;switch(r){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:r})}}(q=tt||(tt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Qt([4294967295,4294967295],0);function zo(r){const t=Oa().encode(r),e=new Pa;return e.update(t),new Uint8Array(e.digest())}function Go(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,n],0),new Qt([s,o],0)]}class Bs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(n<0)throw new nn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Qt.fromNumber(this.pe)}we(t,e,n){let s=t.add(e.multiply(Qt.fromNumber(n)));return s.compare(fd)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=zo(t),[n,s]=Go(e);for(let o=0;o<this.hashCount;o++){const a=this.we(n,s,o);if(!this.be(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Bs(o,s,e);return n.forEach(l=>a.insert(l)),a}insert(t){if(this.pe===0)return;const e=zo(t),[n,s]=Go(e);for(let o=0;o<this.hashCount;o++){const a=this.we(n,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Pr(L.min(),s,new X(U),qt(),B())}}class In{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new In(n,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n,s){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=s}}class fu{constructor(t,e){this.targetId=t,this.Ce=e}}class mu{constructor(t,e,n=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ko{constructor(){this.Fe=0,this.Me=Ho(),this.xe=ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=B(),e=B(),n=B();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:x(38017,{changeType:o})}}),new In(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=Ho()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,$(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class md{constructor(t){this.ze=t,this.je=new Map,this.He=qt(),this.Je=Hn(),this.Ye=Hn(),this.Ze=new X(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:x(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,n=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(ys(o))if(n===0){const a=new M(o.path);this.tt(e,a,ot.newNoDocument(a,L.min()))}else $(n===1,20013,{expectedCount:n});else{const a=this.ut(e);if(a!==n){const l=this.ct(t),h=l?this.lt(l,t,a):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Xt(n).toUint8Array()}catch(h){if(h instanceof Fa)return Re("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Bs(a,s,o)}catch(h){return Re(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.pe===0?null:l}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const l=this._t(a);if(l){if(o.current&&ys(l.target)){const h=new M(l.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,ot.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let n=B();this.Ye.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new Pr(t,e,this.Ze,this.He,n);return this.He=qt(),this.Je=Hn(),this.Ye=Hn(),this.Ze=new X(U),s}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Ko,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new rt(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new rt(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Ko),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Hn(){return new X(M.comparator)}function Ho(){return new X(M.comparator)}const pd={asc:"ASCENDING",desc:"DESCENDING"},gd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_d={and:"AND",or:"OR"};class yd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ts(r,t){return r.useProto3Json||Tn(t)?t:{value:t}}function hr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ed(r,t){return hr(r,t.toTimestamp())}function Pt(r){return $(!!r,49232),L.fromTimestamp(function(e){const n=Yt(e);return new nt(n.seconds,n.nanos)}(r))}function qs(r,t){return vs(r,t).canonicalString()}function vs(r,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function gu(r){const t=Y.fromString(r);return $(Iu(t),10190,{key:t.toString()}),t}function dr(r,t){return qs(r.databaseId,t.path)}function cn(r,t){const e=gu(t);if(e.get(1)!==r.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(yu(e))}function _u(r,t){return qs(r.databaseId,t)}function Td(r){const t=gu(r);return t.length===4?Y.emptyPath():yu(t)}function Is(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function yu(r){return $(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Qo(r,t,e){return{name:dr(r,t),fields:e.value.mapValue.fields}}function vd(r,t){return"found"in t?function(n,s){$(!!s.found,43571),s.found.name,s.found.updateTime;const o=cn(n,s.found.name),a=Pt(s.found.updateTime),l=s.found.createTime?Pt(s.found.createTime):L.min(),h=new Tt({mapValue:{fields:s.found.fields}});return ot.newFoundDocument(o,a,l,h)}(r,t):"missing"in t?function(n,s){$(!!s.missing,3894),$(!!s.readTime,22933);const o=cn(n,s.missing),a=Pt(s.readTime);return ot.newNoDocument(o,a)}(r,t):x(7234,{result:t})}function Id(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:x(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?($(p===void 0||typeof p=="string",58123),ht.fromBase64String(p||"")):($(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ht.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const p=f.code===void 0?S.UNKNOWN:du(f.code);return new k(p,f.message||"")}(a);e=new mu(n,s,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=cn(r,n.document.name),o=Pt(n.document.updateTime),a=n.document.createTime?Pt(n.document.createTime):L.min(),l=new Tt({mapValue:{fields:n.document.fields}}),h=ot.newFoundDocument(s,o,a,l),f=n.targetIds||[],p=n.removedTargetIds||[];e=new Zn(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=cn(r,n.document),o=n.readTime?Pt(n.readTime):L.min(),a=ot.newNoDocument(s,o),l=n.removedTargetIds||[];e=new Zn([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=cn(r,n.document),o=n.removedTargetIds||[];e=new Zn([],o,s,null)}else{if(!("filter"in t))return x(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new dd(s,o),l=n.targetId;e=new fu(l,a)}}return e}function Eu(r,t){let e;if(t instanceof vn)e={update:Qo(r,t.key,t.value)};else if(t instanceof Fs)e={delete:dr(r,t.key)};else if(t instanceof ne)e={update:Qo(r,t.key,t.data),updateMask:Dd(t.fieldMask)};else{if(!(t instanceof lu))return x(16599,{ft:t.type});e={verify:dr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const l=a.transform;if(l instanceof gn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _n)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw x(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ed(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(r,t.precondition)),e}function Ad(r,t){return r&&r.length>0?($(t!==void 0,14353),r.map(e=>function(s,o){let a=s.updateTime?Pt(s.updateTime):Pt(o);return a.isEqual(L.min())&&(a=Pt(o)),new ad(a,s.transformResults||[])}(e,t))):[]}function wd(r,t){return{documents:[_u(r,t.path)]}}function Rd(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=_u(r,s);const o=function(f){if(f.length!==0)return vu(Dt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(w){return{field:Te(w.field),direction:Cd(w.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ts(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:s}}function Pd(r){let t=Td(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){$(n===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(E){const w=Tu(E);return w instanceof Dt&&Qa(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(w=>function(b){return new cr(ve(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(e.orderBy));let l=null;e.limit&&(l=function(E){let w;return w=typeof E=="object"?E.value:E,Tn(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(E){const w=!!E.before,C=E.values||[];return new ur(C,w)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const w=!E.before,C=E.values||[];return new ur(C,w)}(e.endAt)),Kh(t,s,a,o,l,"F",h,f)}function Sd(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ve(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ve(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ve(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(r):r.fieldFilter!==void 0?function(e){return et.create(ve(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>Tu(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(e.compositeFilter.op))}(r):x(30097,{filter:r})}function Cd(r){return pd[r]}function Vd(r){return gd[r]}function bd(r){return _d[r]}function Te(r){return{fieldPath:r.canonicalString()}}function ve(r){return lt.fromServerFormat(r.fieldPath)}function vu(r){return r instanceof et?function(e){if(e.op==="=="){if(xo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(Oo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(Oo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:Vd(e.op),value:e.value}}}(r):r instanceof Dt?function(e){const n=e.getFilters().map(s=>vu(s));return n.length===1?n[0]:{compositeFilter:{op:bd(e.op),filters:n}}}(r):x(54877,{filter:r})}function Dd(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Iu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,n,s,o=L.min(),a=L.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t){this.wt=t}}function kd(r){const t=Pd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Es(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.yn=new xd}addToCollectionParentIndex(t,e){return this.yn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Wt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class xd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new rt(Y.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new rt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Au=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Au,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ve(0)}static ir(){return new Ve(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="LruGarbageCollector",Md=1048576;function Xo([r,t],[e,n]){const s=U(r,e);return s===0?U(t,n):s}class Ld{constructor(t){this.cr=t,this.buffer=new rt(Xo),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Xo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Fd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){N(Yo,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xe(e)?N(Yo,"Ignoring IndexedDB error during garbage collection: ",e):await Oe(e)}await this.Ir(3e5)})}}class Ud{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(yr.le);const n=new Ld(e);return this.Er.forEachTarget(t,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(t,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Er.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Wo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wo):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let n,s,o,a,l,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(n=E,l=Date.now(),this.removeTargets(t,n,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(E=>(f=Date.now(),ye()<=j.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function Bd(r,t){return new Ud(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&un(n.mutation,s,Rt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const s=ue();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let a=en();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=ue();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,n,s){let o=qt();const a=an(),l=function(){return an()}();return e.forEach((h,f)=>{const p=n.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof ne)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),un(p.mutation,f,p.mutation.getFieldMask(),nt.now())):a.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var E;return l.set(f,new jd(p,(E=a.get(f))!==null&&E!==void 0?E:null))}),l))}recalculateAndSaveOverlays(t,e){const n=an();let s=new X((a,l)=>a-l),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=n.get(h)||Rt.empty();p=l.applyToLocalView(f,p),n.set(h,p);const E=(s.get(l.batchId)||B()).add(h);s=s.insert(l.batchId,E)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,E=nu();p.forEach(w=>{if(!o.has(w)){const C=uu(e.get(w),n.get(w));C!==null&&E.set(w,C),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return P.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):P.resolve(ue());let l=dn,h=o;return a.next(f=>P.forEach(f,(p,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(w=>{h=h.insert(p,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,B())).next(p=>({batchId:l,changes:eu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let s=en();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=en();return this.indexManager.getCollectionParents(t,o).next(l=>P.forEach(l,h=>{const f=function(E,w){return new Tr(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(p=>{p.forEach((E,w)=>{a=a.insert(E,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,ot.newInvalidDocument(p)))});let l=en();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&un(p.mutation,f,Rt.empty(),nt.now()),Ar(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return P.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(s){return{name:s.name,query:kd(s.bundledQuery),readTime:Pt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.overlays=new X(M.comparator),this.Or=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ue();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const s=ue(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new X((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let p=o.get(f.largestBatchId);p===null&&(p=ue(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return P.resolve(l)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new hd(e,n));let o=this.Or.get(e);o===void 0&&(o=B(),this.Or.set(e,o)),this.Or.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.Nr=new rt(it.Br),this.Lr=new rt(it.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Qr(new it(t,e))}$r(t,e){t.forEach(n=>this.removeReference(n,e))}Ur(t){const e=new M(new Y([])),n=new it(e,t),s=new it(e,t+1),o=[];return this.Lr.forEachInRange([n,s],a=>{this.Qr(a),o.push(a.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new M(new Y([])),n=new it(e,t),s=new it(e,t+1);let o=B();return this.Lr.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),n=this.Nr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return M.comparator(t.key,e.key)||U(t.Gr,e.Gr)}static kr(t,e){return U(t.Gr,e.Gr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new rt(it.Br)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ld(o,e,n,s);this.mutationQueue.push(a);for(const l of s)this.zr=this.zr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Hr(n),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ns:this.Jn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([n,s],a=>{const l=this.jr(a.Gr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(U);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,a],l=>{n=n.add(l.Gr)})}),P.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const a=new it(new M(o),0);let l=new rt(U);return this.zr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Gr)),!0)},a),P.resolve(this.Jr(l))}Jr(t){const e=[];return t.forEach(n=>{const s=this.jr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){$(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return P.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.zr=n})}Xn(t){}containsKey(t,e){const n=new it(e,0),s=this.zr.firstAfterOrEqual(n);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t){this.Zr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.Zr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():ot.newInvalidDocument(e))}getEntries(t,e){let n=qt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():ot.newInvalidDocument(s))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=qt();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||wh(Ah(p),n)<=0||(s.has(p.key)||Ar(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,s){x(9500)}Xr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Wd(this)}getSize(t){return P.resolve(this.size)}}class Wd extends qd{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.vr.addEntry(t,s)):this.vr.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.persistence=t,this.ei=new de(e=>xs(e),Ms),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ti=0,this.ni=new js,this.targetCount=0,this.ri=Ve.rr()}forEachTarget(t,e){return this.ei.forEach((n,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ti&&(this.ti=e),P.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.ar(e),P.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.ei.forEach((a,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.ei.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ei.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.ni.qr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.ni.$r(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ni.Wr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.ii={},this.overlays={},this.si=new yr(0),this.oi=!1,this.oi=!0,this._i=new Kd,this.referenceDelegate=t(this),this.ai=new Yd(this),this.indexManager=new Od,this.remoteDocumentCache=function(s){return new Qd(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new Nd(e),this.ci=new zd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Gd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ii[t.toKey()];return n||(n=new Hd(e,this.referenceDelegate),this.ii[t.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const s=new Xd(this.si.next());return this.referenceDelegate.li(),n(s).next(o=>this.referenceDelegate.hi(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Pi(t,e){return P.or(Object.values(this.ii).map(n=>()=>n.containsKey(t,e)))}}class Xd extends Ph{constructor(t){super(),this.currentSequenceNumber=t}}class $s{constructor(t){this.persistence=t,this.Ti=new js,this.Ii=null}static Ei(t){return new $s(t)}get di(){if(this.Ii)return this.Ii;throw x(60996)}addReference(t,e,n){return this.Ti.addReference(n,e),this.di.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ti.removeReference(n,e),this.di.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,n=>{const s=M.fromPath(n);return this.Ai(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return P.or([()=>P.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class fr{constructor(t,e){this.persistence=t,this.Ri=new de(n=>Vh(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Bd(this,e)}static Ei(t,e){return new fr(t,e)}li(){}hi(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}Vr(t){let e=0;return this.Ar(t,n=>{e++}).next(()=>e)}Ar(t,e){return P.forEach(this.Ri,(n,s)=>this.gr(t,n,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Xr(t,a=>this.gr(t,a,e).next(l=>{l||(n++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),P.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Yn(t.data.value)),e}gr(t,e,n){return P.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Ri.get(e);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.ls=n,this.hs=s}static Ps(t,e){let n=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new zs(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return nl()?8:Sh(tl())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Vs(t,e,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Jd;return this.fs(t,e,a).next(l=>{if(o.result=l,this.Is)return this.gs(t,e,a,l.size)})}).next(()=>o.result)}gs(t,e,n,s){return n.documentReadCount<this.Es?(ye()<=j.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),P.resolve()):(ye()<=j.DEBUG&&N("QueryEngine","Query:",Ee(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(ye()<=j.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):P.resolve())}Rs(t,e){if(Uo(e))return P.resolve(null);let n=Vt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Es(e,null,"F"),n=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=B(...o);return this.As.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.ps(e,l);return this.ys(e,f,a,h.readTime)?this.Rs(t,Es(e,null,"F")):this.ws(t,f,e,h)}))})))}Vs(t,e,n,s){return Uo(e)||s.isEqual(L.min())?P.resolve(null):this.As.getDocuments(t,n).next(o=>{const a=this.ps(e,o);return this.ys(e,a,n,s)?P.resolve(null):(ye()<=j.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ee(e)),this.ws(t,a,e,Ih(s,dn)).next(l=>l))})}ps(t,e){let n=new rt(Za(t));return e.forEach((s,o)=>{Ar(t,o)&&(n=n.add(o))}),n}ys(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}fs(t,e,n){return ye()<=j.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.As.getDocumentsMatchingQuery(t,e,Wt.min(),n)}ws(t,e,n,s){return this.As.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="LocalStore",tf=3e8;class ef{constructor(t,e,n,s){this.persistence=t,this.bs=e,this.serializer=s,this.Ss=new X(U),this.Ds=new de(o=>xs(o),Ms),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(n)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $d(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function nf(r,t,e,n){return new ef(r,t,e,n)}async function Ru(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],l=[];let h=B();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ms:f,removedBatchIds:a,addedBatchIds:l}))})})}function rf(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.Cs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,p){const E=f.batch,w=E.keys();let C=P.resolve();return w.forEach(b=>{C=C.next(()=>p.getEntry(h,b)).next(O=>{const D=f.docVersions.get(b);$(D!==null,48541),O.version.compareTo(D)<0&&(E.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),p.addEntry(O)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(h,E))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let h=B();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Pu(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function sf(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Cs.newChangeBuffer({trackRemovals:!0});s=e.Ss;const l=[];t.targetChanges.forEach((p,E)=>{const w=s.get(E);if(!w)return;l.push(e.ai.removeMatchingKeys(o,p.removedDocuments,E).next(()=>e.ai.addMatchingKeys(o,p.addedDocuments,E)));let C=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?C=C.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,n)),s=s.insert(E,C),function(O,D,K){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=tf?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(w,C,p)&&l.push(e.ai.updateTargetData(o,C))});let h=qt(),f=B();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(of(o,a,t.documentUpdates).next(p=>{h=p.xs,f=p.Os})),!n.isEqual(L.min())){const p=e.ai.getLastRemoteSnapshotVersion(o).next(E=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(p)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ss=s,o))}function of(r,t,e){let n=B(),s=B();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=qt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N(Gs,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{xs:a,Os:s}})}function af(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ns),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function uf(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.ai.getTargetData(n,t).next(o=>o?(s=o,P.resolve(s)):e.ai.allocateTargetId(n).next(a=>(s=new Kt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(n.targetId,n),e.Ds.set(t,n.targetId)),n})}async function As(r,t,e){const n=F(r),s=n.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!xe(a))throw a;N(Gs,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ss=n.Ss.remove(t),n.Ds.delete(s.target)}function Jo(r,t,e){const n=F(r);let s=L.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const E=F(h),w=E.Ds.get(p);return w!==void 0?P.resolve(E.Ss.get(w)):E.ai.getTargetData(f,p)}(n,a,Vt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>n.bs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:B())).next(l=>(cf(n,Wh(t),l),{documents:l,Ns:o})))}function cf(r,t,e){let n=r.vs.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.vs.set(t,n)}class Zo{constructor(){this.activeTargetIds=ed()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lf{constructor(){this.So=new Zo,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,n){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Zo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="ConnectivityMonitor";class ea{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){N(ta,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){N(ta,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn=null;function ws(){return Qn===null?Qn=function(){return 268435456+Math.round(2147483648*Math.random())}():Qn++,"0x"+Qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="RestConnection",df={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ff{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===or?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(t,e,n,s,o){const a=ws(),l=this.$o(t,e.toUriEncodedString());N(as,`Sending RPC '${t}' ${a}:`,l,n);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(h,s,o);const{host:f}=new URL(l),p=Ia(f);return this.Ko(t,l,h,n,p).then(E=>(N(as,`Received RPC '${t}' ${a}: `,E),E),E=>{throw Re(as,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",n),E})}Wo(t,e,n,s,o,a){return this.Qo(t,e,n,s,o)}Uo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),n&&n.headers.forEach((s,o)=>t[o]=s)}$o(t,e){const n=df[t];return`${this.Lo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class pf extends ff{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,n,s,o){const a=ws();return new Promise((l,h)=>{const f=new Sa;f.setWithCredentials(!0),f.listenOnce(Ca.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Wn.NO_ERROR:const E=f.getResponseJson();N(gt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case Wn.TIMEOUT:N(gt,`RPC '${t}' ${a} timed out`),h(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case Wn.HTTP_ERROR:const w=f.getStatus();if(N(gt,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const b=C==null?void 0:C.error;if(b&&b.status&&b.message){const O=function(K){const z=K.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN}(b.status);h(new k(O,b.message))}else h(new k(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new k(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{s_:t,streamId:a,o_:f.getLastErrorCode(),__:f.getLastError()})}}finally{N(gt,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(s);N(gt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",p,n,15)})}a_(t,e,n){const s=ws(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Da(),l=ba(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const p=o.join("");N(gt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const E=a.createWebChannel(p,h);let w=!1,C=!1;const b=new mf({Go:D=>{C?N(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(w||(N(gt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),w=!0),N(gt,`RPC '${t}' stream ${s} sending:`,D),E.send(D))},zo:()=>E.close()}),O=(D,K,z)=>{D.listen(K,H=>{try{z(H)}catch(st){setTimeout(()=>{throw st},0)}})};return O(E,tn.EventType.OPEN,()=>{C||(N(gt,`RPC '${t}' stream ${s} transport opened.`),b.t_())}),O(E,tn.EventType.CLOSE,()=>{C||(C=!0,N(gt,`RPC '${t}' stream ${s} transport closed`),b.r_())}),O(E,tn.EventType.ERROR,D=>{C||(C=!0,Re(gt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),b.r_(new k(S.UNAVAILABLE,"The operation could not be completed")))}),O(E,tn.EventType.MESSAGE,D=>{var K;if(!C){const z=D.data[0];$(!!z,16349);const H=z,st=(H==null?void 0:H.error)||((K=H[0])===null||K===void 0?void 0:K.error);if(st){N(gt,`RPC '${t}' stream ${s} received error:`,st);const Nt=st.status;let at=function(_){const y=tt[_];if(y!==void 0)return du(y)}(Nt),v=st.message;at===void 0&&(at=S.INTERNAL,v="Unknown error status: "+Nt+" with message "+st.message),C=!0,b.r_(new k(at,v)),E.close()}else N(gt,`RPC '${t}' stream ${s} received:`,z),b.i_(z)}}),O(l,Va.STAT_EVENT,D=>{D.stat===fs.PROXY?N(gt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===fs.NOPROXY&&N(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.n_()},0),b}}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(r){return new yd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e,n=1e3,s=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=n,this.c_=s,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,e-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="PersistentStream";class Su{constructor(t,e,n,s,o,a,l,h){this.bi=t,this.R_=n,this.V_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Ks(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===e&&this.B_(n,s)},n=>{t(()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(t,e){const n=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return N(na,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(N(na,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gf extends Su{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=Id(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Pt(a.readTime):L.min()}(t);return this.listener.Q_(e,n)}U_(t){const e={};e.database=Is(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=ys(h)?{documents:wd(o,h)}:{query:Rd(o,h).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=pu(o,a.resumeToken);const f=Ts(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=hr(o,a.snapshotVersion.toTimestamp());const f=Ts(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const n=Sd(this.serializer,t);n&&(e.labels=n),this.F_(e)}K_(t){const e={};e.database=Is(this.serializer),e.removeTarget=t,this.F_(e)}}class _f extends Su{constructor(t,e,n,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return $(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){$(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=Ad(t.writeResults,t.commitTime),n=Pt(t.commitTime);return this.listener.j_(n,e)}H_(){const t={};t.database=Is(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Eu(this.serializer,n))};this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{}class Ef extends yf{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Qo(t,vs(e,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())})}Wo(t,e,n,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Wo(t,vs(e,n),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class Tf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Bt(e),this.ea=!1):N("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="RemoteStore";class vf{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(a=>{n.enqueueAndForget(async()=>{fe(this)&&(N(le,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.aa.add(4),await An(f),f.la.set("Unknown"),f.aa.delete(4),await Cr(f)}(this))})}),this.la=new Tf(n,s)}}async function Cr(r){if(fe(r))for(const t of r.ua)await t(!0)}async function An(r){for(const t of r.ua)await t(!1)}function Cu(r,t){const e=F(r);e._a.has(t.targetId)||(e._a.set(t.targetId,t),Ys(e)?Ws(e):Me(e).b_()&&Qs(e,t))}function Hs(r,t){const e=F(r),n=Me(e);e._a.delete(t),n.b_()&&Vu(e,t),e._a.size===0&&(n.b_()?n.v_():fe(e)&&e.la.set("Unknown"))}function Qs(r,t){if(r.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(r).U_(t)}function Vu(r,t){r.ha.Ke(t),Me(r).K_(t)}function Ws(r){r.ha=new md({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r._a.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),Me(r).start(),r.la.ta()}function Ys(r){return fe(r)&&!Me(r).w_()&&r._a.size>0}function fe(r){return F(r).aa.size===0}function bu(r){r.ha=void 0}async function If(r){r.la.set("Online")}async function Af(r){r._a.forEach((t,e)=>{Qs(r,t)})}async function wf(r,t){bu(r),Ys(r)?(r.la.ia(t),Ws(r)):r.la.set("Unknown")}async function Rf(r,t,e){if(r.la.set("Online"),t instanceof mu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s._a.delete(l),s.ha.removeTarget(l))}(r,t)}catch(n){N(le,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await mr(r,n)}else if(t instanceof Zn?r.ha.Xe(t):t instanceof fu?r.ha.ot(t):r.ha.nt(t),!e.isEqual(L.min()))try{const n=await Pu(r.localStore);e.compareTo(n)>=0&&await function(o,a){const l=o.ha.It(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o._a.get(f);p&&o._a.set(f,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const p=o._a.get(h);if(!p)return;o._a.set(h,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),Vu(o,h);const E=new Kt(p.target,h,f,p.sequenceNumber);Qs(o,E)}),o.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){N(le,"Failed to raise snapshot:",n),await mr(r,n)}}async function mr(r,t,e){if(!xe(t))throw t;r.aa.add(1),await An(r),r.la.set("Offline"),e||(e=()=>Pu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(le,"Retrying IndexedDB access"),await e(),r.aa.delete(1),await Cr(r)})}function Du(r,t){return t().catch(e=>mr(r,e,t))}async function Vr(r){const t=F(r),e=Zt(t);let n=t.oa.length>0?t.oa[t.oa.length-1].batchId:Ns;for(;Pf(t);)try{const s=await af(t.localStore,n);if(s===null){t.oa.length===0&&e.v_();break}n=s.batchId,Sf(t,s)}catch(s){await mr(t,s)}Nu(t)&&ku(t)}function Pf(r){return fe(r)&&r.oa.length<10}function Sf(r,t){r.oa.push(t);const e=Zt(r);e.b_()&&e.W_&&e.G_(t.mutations)}function Nu(r){return fe(r)&&!Zt(r).w_()&&r.oa.length>0}function ku(r){Zt(r).start()}async function Cf(r){Zt(r).H_()}async function Vf(r){const t=Zt(r);for(const e of r.oa)t.G_(e.mutations)}async function bf(r,t,e){const n=r.oa.shift(),s=Us.from(n,t,e);await Du(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Vr(r)}async function Df(r,t){t&&Zt(r).W_&&await async function(n,s){if(function(a){return hu(a)&&a!==S.ABORTED}(s.code)){const o=n.oa.shift();Zt(n).D_(),await Du(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Vr(n)}}(r,t),Nu(r)&&ku(r)}async function ra(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N(le,"RemoteStore received new credentials");const n=fe(e);e.aa.add(3),await An(e),n&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await Cr(e)}async function Nf(r,t){const e=F(r);t?(e.aa.delete(2),await Cr(e)):t||(e.aa.add(2),await An(e),e.la.set("Unknown"))}function Me(r){return r.Pa||(r.Pa=function(e,n,s){const o=F(e);return o.Y_(),new gf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{jo:If.bind(null,r),Jo:Af.bind(null,r),Zo:wf.bind(null,r),Q_:Rf.bind(null,r)}),r.ua.push(async t=>{t?(r.Pa.D_(),Ys(r)?Ws(r):r.la.set("Unknown")):(await r.Pa.stop(),bu(r))})),r.Pa}function Zt(r){return r.Ta||(r.Ta=function(e,n,s){const o=F(e);return o.Y_(),new _f(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:Cf.bind(null,r),Zo:Df.bind(null,r),z_:Vf.bind(null,r),j_:bf.bind(null,r)}),r.ua.push(async t=>{t?(r.Ta.D_(),await Vr(r)):(await r.Ta.stop(),r.oa.length>0&&(N(le,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,l=new Xs(t,e,a,s,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(r,t){if(Bt("AsyncQueue",`${t}: ${r}`),xe(r))return new k(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static emptySet(t){return new we(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=en(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new we;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.Ia=new X(M.comparator)}track(t){const e=t.doc.key,n=this.Ia.get(e);n?t.type!==0&&n.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&n.type!==1?this.Ia=this.Ia.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Ia=this.Ia.remove(e):t.type===1&&n.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):x(63341,{Vt:t,Ea:n}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,n)=>{t.push(n)}),t}}class be{constructor(t,e,n,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new be(t,e,we.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class Of{constructor(){this.queries=ia(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=ia(),o.forEach((a,l)=>{for(const h of l.Ra)h.onError(n)})})(this,new k(S.ABORTED,"Firestore shutting down"))}}function ia(){return new de(r=>Ja(r),Ir)}async function Ou(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.Va()&&t.ma()&&(n=2):(o=new kf,n=t.ma()?0:1);try{switch(n){case 0:o.Aa=await e.onListen(s,!0);break;case 1:o.Aa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Js(a,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&Zs(e)}async function xu(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.Ra.indexOf(t);a>=0&&(o.Ra.splice(a,1),o.Ra.length===0?s=t.ma()?0:1:!o.Va()&&t.ma()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function xf(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Ra)l.pa(s)&&(n=!0);a.Aa=s}}n&&Zs(e)}function Mf(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.Ra)o.onError(e);n.queries.delete(t)}function Zs(r){r.fa.forEach(t=>{t.next()})}var Rs,oa;(oa=Rs||(Rs={})).ya="default",oa.Cache="cache";class Mu{constructor(t,e,n){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new be(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const n=e!=="Offline";return(!this.options.Fa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==Rs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this.key=t}}class Fu{constructor(t){this.key=t}}class Lf{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=B(),this.mutatedKeys=B(),this.Ua=Za(t),this.Ka=new we(this.Ua)}get Wa(){return this.qa}Ga(t,e){const n=e?e.za:new sa,s=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,E)=>{const w=s.get(p),C=Ar(this.query,E)?E:null,b=!!w&&this.mutatedKeys.has(w.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;w&&C?w.data.isEqual(C.data)?b!==O&&(n.track({type:3,doc:C}),D=!0):this.ja(w,C)||(n.track({type:2,doc:C}),D=!0,(h&&this.Ua(C,h)>0||f&&this.Ua(C,f)<0)&&(l=!0)):!w&&C?(n.track({type:0,doc:C}),D=!0):w&&!C&&(n.track({type:1,doc:w}),D=!0,(h||f)&&(l=!0)),D&&(C?(a=a.add(C),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{Ka:a,za:n,ys:l,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const a=t.za.da();a.sort((p,E)=>function(C,b){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Vt:D})}};return O(C)-O(b)}(p.type,E.type)||this.Ua(p.doc,E.doc)),this.Ha(n),s=s!=null&&s;const l=e&&!s?this.Ja():[],h=this.$a.size===0&&this.current&&!s?1:0,f=h!==this.Qa;return this.Qa=h,a.length!==0||f?{snapshot:new be(this.query,t.Ka,o,a,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new sa,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=B(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const e=[];return t.forEach(n=>{this.$a.has(n)||e.push(new Fu(n))}),this.$a.forEach(n=>{t.has(n)||e.push(new Lu(n))}),e}Xa(t){this.qa=t.Ns,this.$a=B();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return be.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const ti="SyncEngine";class Ff{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Uf{constructor(t){this.key=t,this.tu=!1}}class Bf{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new de(l=>Ja(l),Ir),this.iu=new Map,this.su=new Set,this.ou=new X(M.comparator),this._u=new Map,this.au=new js,this.uu={},this.cu=new Map,this.lu=Ve.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function qf(r,t,e=!0){const n=zu(r);let s;const o=n.ru.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.eu()):s=await Uu(n,t,e,!0),s}async function jf(r,t){const e=zu(r);await Uu(e,t,!0,!1)}async function Uu(r,t,e,n){const s=await uf(r.localStore,Vt(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await $f(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Cu(r.remoteStore,s),l}async function $f(r,t,e,n,s){r.Pu=(E,w,C)=>async function(O,D,K,z){let H=D.view.Ga(K);H.ys&&(H=await Jo(O.localStore,D.query,!1).then(({documents:v})=>D.view.Ga(v,H)));const st=z&&z.targetChanges.get(D.targetId),Nt=z&&z.targetMismatches.get(D.targetId)!=null,at=D.view.applyChanges(H,O.isPrimaryClient,st,Nt);return ua(O,D.targetId,at.Ya),at.snapshot}(r,E,w,C);const o=await Jo(r.localStore,t,!0),a=new Lf(t,o.Ns),l=a.Ga(o.documents),h=In.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=a.applyChanges(l,r.isPrimaryClient,h);ua(r,e,f.Ya);const p=new Ff(t,e,a);return r.ru.set(t,p),r.iu.has(e)?r.iu.get(e).push(t):r.iu.set(e,[t]),f.snapshot}async function zf(r,t,e){const n=F(r),s=n.ru.get(t),o=n.iu.get(s.targetId);if(o.length>1)return n.iu.set(s.targetId,o.filter(a=>!Ir(a,t))),void n.ru.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await As(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Hs(n.remoteStore,s.targetId),Ps(n,s.targetId)}).catch(Oe)):(Ps(n,s.targetId),await As(n.localStore,s.targetId,!0))}async function Gf(r,t){const e=F(r),n=e.ru.get(t),s=e.iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Hs(e.remoteStore,n.targetId))}async function Kf(r,t,e){const n=Zf(r);try{const s=await function(a,l){const h=F(a),f=nt.now(),p=l.reduce((C,b)=>C.add(b.key),B());let E,w;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let b=qt(),O=B();return h.Cs.getEntries(C,p).next(D=>{b=D,b.forEach((K,z)=>{z.isValidDocument()||(O=O.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,b)).next(D=>{E=D;const K=[];for(const z of l){const H=cd(z,E.get(z.key).overlayedDocument);H!=null&&K.push(new ne(z.key,H,Ga(H.value.mapValue),It.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,K,l)}).next(D=>{w=D;const K=D.applyToLocalDocumentSet(E,O);return h.documentOverlayCache.saveOverlays(C,D.batchId,K)})}).then(()=>({batchId:w.batchId,changes:eu(E)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let f=a.uu[a.currentUser.toKey()];f||(f=new X(U)),f=f.insert(l,h),a.uu[a.currentUser.toKey()]=f}(n,s.batchId,e),await wn(n,s.changes),await Vr(n.remoteStore)}catch(s){const o=Js(s,"Failed to persist write");e.reject(o)}}async function Bu(r,t){const e=F(r);try{const n=await sf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e._u.get(o);a&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?$(a.tu,14607):s.removedDocuments.size>0&&($(a.tu,42227),a.tu=!1))}),await wn(e,n,t)}catch(n){await Oe(n)}}function aa(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ru.forEach((o,a)=>{const l=a.view.ga(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((p,E)=>{for(const w of E.Ra)w.ga(l)&&(f=!0)}),f&&Zs(h)}(n.eventManager,t),s.length&&n.nu.Q_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Hf(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n._u.get(t),o=s&&s.key;if(o){let a=new X(M.comparator);a=a.insert(o,ot.newNoDocument(o,L.min()));const l=B().add(o),h=new Pr(L.min(),new Map,new X(U),a,l);await Bu(n,h),n.ou=n.ou.remove(o),n._u.delete(t),ei(n)}else await As(n.localStore,t,!1).then(()=>Ps(n,t,e)).catch(Oe)}async function Qf(r,t){const e=F(r),n=t.batch.batchId;try{const s=await rf(e.localStore,t);ju(e,n,null),qu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await wn(e,s)}catch(s){await Oe(s)}}async function Wf(r,t,e){const n=F(r);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,l).next(E=>($(E!==null,37113),p=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(n.localStore,t);ju(n,t,e),qu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await wn(n,s)}catch(s){await Oe(s)}}function qu(r,t){(r.cu.get(t)||[]).forEach(e=>{e.resolve()}),r.cu.delete(t)}function ju(r,t,e){const n=F(r);let s=n.uu[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.uu[n.currentUser.toKey()]=s}}function Ps(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.iu.get(t))r.ru.delete(n),e&&r.nu.Tu(n,e);r.iu.delete(t),r.isPrimaryClient&&r.au.Ur(t).forEach(n=>{r.au.containsKey(n)||$u(r,n)})}function $u(r,t){r.su.delete(t.path.canonicalString());const e=r.ou.get(t);e!==null&&(Hs(r.remoteStore,e),r.ou=r.ou.remove(t),r._u.delete(e),ei(r))}function ua(r,t,e){for(const n of e)n instanceof Lu?(r.au.addReference(n.key,t),Yf(r,n)):n instanceof Fu?(N(ti,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,t),r.au.containsKey(n.key)||$u(r,n.key)):x(19791,{Iu:n})}function Yf(r,t){const e=t.key,n=e.path.canonicalString();r.ou.get(e)||r.su.has(n)||(N(ti,"New document in limbo: "+e),r.su.add(n),ei(r))}function ei(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const t=r.su.values().next().value;r.su.delete(t);const e=new M(Y.fromString(t)),n=r.lu.next();r._u.set(n,new Uf(e)),r.ou=r.ou.insert(e,n),Cu(r.remoteStore,new Kt(Vt(vr(e.path)),n,"TargetPurposeLimboResolution",yr.le))}}async function wn(r,t,e){const n=F(r),s=[],o=[],a=[];n.ru.isEmpty()||(n.ru.forEach((l,h)=>{a.push(n.Pu(h,t,e).then(f=>{var p;if((f||e)&&n.isPrimaryClient){const E=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=zs.Ps(h.targetId,f);o.push(E)}}))}),await Promise.all(a),n.nu.Q_(s),await async function(h,f){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(f,w=>P.forEach(w.ls,C=>p.persistence.referenceDelegate.addReference(E,w.targetId,C)).next(()=>P.forEach(w.hs,C=>p.persistence.referenceDelegate.removeReference(E,w.targetId,C)))))}catch(E){if(!xe(E))throw E;N(Gs,"Failed to update sequence numbers: "+E)}for(const E of f){const w=E.targetId;if(!E.fromCache){const C=p.Ss.get(w),b=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(b);p.Ss=p.Ss.insert(w,O)}}}(n.localStore,o))}async function Xf(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N(ti,"User change. New user:",t.toKey());const n=await Ru(e.localStore,t);e.currentUser=t,function(o,a){o.cu.forEach(l=>{l.forEach(h=>{h.reject(new k(S.CANCELLED,a))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await wn(e,n.Ms)}}function Jf(r,t){const e=F(r),n=e._u.get(t);if(n&&n.tu)return B().add(n.key);{let s=B();const o=e.iu.get(t);if(!o)return s;for(const a of o){const l=e.ru.get(a);s=s.unionWith(l.view.Wa)}return s}}function zu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hf.bind(null,t),t.nu.Q_=xf.bind(null,t.eventManager),t.nu.Tu=Mf.bind(null,t.eventManager),t}function Zf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wf.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return nf(this.persistence,new Zd,t.initialUser,this.serializer)}Ru(t){return new wu($s.Ei,this.serializer)}Au(t){return new lf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class tm extends pr{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){$(this.persistence.referenceDelegate instanceof fr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Fd(n,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new wu(n=>fr.Ei(n,e),this.serializer)}}class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>aa(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xf.bind(null,this.syncEngine),await Nf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Of}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),n=function(o){return new pf(o)}(t.databaseInfo);return function(o,a,l,h){return new Ef(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,a,l){return new vf(n,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>aa(this.syncEngine,e,0),function(){return ea.C()?new ea:new hf}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,p){const E=new Bf(s,o,a,l,h,f);return p&&(E.hu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);N(le,"RemoteStore shutting down."),o.aa.add(5),await An(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ss.provider={build:()=>new Ss};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,o){const a=F(s),l={documents:o.map(E=>dr(a.serializer,E))},h=await a.Wo("BatchGetDocuments",a.serializer.databaseId,Y.emptyPath(),l,o.length),f=new Map;h.forEach(E=>{const w=vd(a.serializer,E);f.set(w.key.toString(),w)});const p=[];return o.forEach(E=>{const w=f.get(E.toString());$(!!w,55234,{key:E}),p.push(w)}),p}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fs(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=M.fromPath(n);this.mutations.push(new lu(s,this.precondition(s)))}),await async function(n,s){const o=F(n),a={writes:s.map(l=>Eu(o.serializer,l))};await o.Qo("Commit",o.serializer.databaseId,Y.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw x(50498,{xu:t.constructor.name});e=L.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new k(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(L.min())?It.exists(!1):It.updateTime(e):It.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(L.min()))throw new k(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return It.updateTime(e)}return It.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,e,n,s,o){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=o,this.Ou=n.maxAttempts,this.y_=new Ks(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const t=new em(this.datastore),e=this.Lu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.ku(s)}))}).catch(n=>{this.ku(n)})})}Lu(t){try{const e=this.updateFunction(t);return!Tn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ku(t){this.Ou>0&&this.qu(t)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(t)}qu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!hu(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="FirestoreClient";class rm{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=xa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{N(te,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(te,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Js(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function cs(r,t){r.asyncQueue.verifyOperationInProgress(),N(te,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Ru(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ca(r,t){r.asyncQueue.verifyOperationInProgress();const e=await sm(r);N(te,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ra(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ra(t.remoteStore,s)),r._onlineComponents=t}async function sm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(te,"Using user provided OfflineComponentProvider");try{await cs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await cs(r,new pr)}}else N(te,"Using default OfflineComponentProvider"),await cs(r,new tm(void 0));return r._offlineComponents}async function ni(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(te,"Using user provided OnlineComponentProvider"),await ca(r,r._uninitializedComponentsProvider._online)):(N(te,"Using default OnlineComponentProvider"),await ca(r,new Ss))),r._onlineComponents}function im(r){return ni(r).then(t=>t.syncEngine)}function om(r){return ni(r).then(t=>t.datastore)}async function Cs(r){const t=await ni(r),e=t.eventManager;return e.onListen=qf.bind(null,t.syncEngine),e.onUnlisten=zf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=jf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Gf.bind(null,t.syncEngine),e}function am(r,t,e={}){const n=new Mt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const p=new Gu({next:w=>{p.yu(),a.enqueueAndForget(()=>xu(o,E));const C=w.docs.has(l);!C&&w.fromCache?f.reject(new k(S.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&h&&h.source==="server"?f.reject(new k(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),E=new Mu(vr(l.path),p,{includeMetadataChanges:!0,Fa:!0});return Ou(o,E)}(await Cs(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(r,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function cm(r,t,e,n){if(t===!0&&n===!0)throw new k(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ha(r){if(!M.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ri(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":x(12329,{type:typeof r})}function Lt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ri(r);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="firestore.googleapis.com",da=!0;class fa{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hu,this.ssl=da}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:da;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Au;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Md)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ku((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class si{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fh;switch(n.type){case"firstParty":return new _h(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=la.get(e);n&&(N("ComponentProvider","Removing Datastore"),la.delete(e),n.terminate())}(this),Promise.resolve()}}function lm(r,t,e,n={}){var s;r=Lt(r,si);const o=Ia(t),a=r._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&ul(`https://${h}`),a.host!==Hu&&a.host!==h&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:n});if(!nr(f,l)&&(r._setSettings(f),n.mockUserToken)){let p,E;if(typeof n.mockUserToken=="string")p=n.mockUserToken,E=_t.MOCK_USER;else{p=Zc(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new _t(w)}r._authCredentials=new mh(new ka(p,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new br(this.firestore,t,this._query)}}class At{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class En extends br{constructor(t,e,n){super(t,e,vr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new M(t))}withConverter(t){return new En(this.firestore,t,this._path)}}function Vm(r,t,...e){if(r=Ft(r),arguments.length===1&&(t=xa.newId()),um("doc","path",t),r instanceof si){const n=Y.fromString(t,...e);return ha(n),new At(r,null,new M(n))}{if(!(r instanceof At||r instanceof En))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return ha(n),new At(r.firestore,r instanceof En?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="AsyncQueue";class pa{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Ks(this,"async_queue_retry"),this.ju=()=>{const n=us();n&&N(ma,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=t;const e=us();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=us();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new Mt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!xe(t))throw t;N(ma,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(n=>{throw this.Ku=n,this.Wu=!1,Bt("INTERNAL UNHANDLED ERROR: ",ga(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=e,e}enqueueAfterDelay(t,e,n){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const s=Xs.createAndSchedule(this,t,e,n,o=>this.Xu(o));return this.Uu.push(s),s}Ju(){this.Ku&&x(47125,{ec:ga(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function ga(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(r,["next","error","complete"])}class De extends si{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new pa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pa(t),this._firestoreClient=void 0,await t}}}function bm(r,t){const e=typeof r=="object"?r:th(),n=typeof r=="string"?r:or,s=Ql(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Xc("firestore");o&&lm(s,...o)}return s}function Dr(r){if(r._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hm(r),r._firestoreClient}function hm(r){var t,e,n;const s=r._freezeSettings(),o=function(l,h,f,p){return new Nh(l,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ku(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new rm(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(ht.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new he(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=/^__.*__$/;class fm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new vn(t,this.data,e,this.fieldTransforms)}}class Qu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Wu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{oc:r})}}class ai{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new ai(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:n,cc:!1});return s.lc(t),s}hc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return gr(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(Wu(this.oc)&&dm.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class mm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Sr(t)}dc(t,e,n,s=!1){return new ai({oc:t,methodName:e,Ec:n,path:lt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yu(r){const t=r._freezeSettings(),e=Sr(r._databaseId);return new mm(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Xu(r,t,e,n,s,o={}){const a=r.dc(o.merge||o.mergeFields?2:0,t,e,s);ci("Data must be an object, but it was:",a,n);const l=Ju(n,a);let h,f;if(o.merge)h=new Rt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const w=Vs(t,E,e);if(!a.contains(w))throw new k(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);tc(p,w)||p.push(w)}h=new Rt(p),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new fm(new Tt(l),h,f)}class Or extends kr{_toFieldTransform(t){if(t.oc!==2)throw t.oc===1?t.Tc(`${this._methodName}() can only appear at the top level of your update data`):t.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Or}}class ui extends kr{_toFieldTransform(t){return new id(t.path,new gn)}isEqual(t){return t instanceof ui}}function pm(r,t,e,n){const s=r.dc(1,t,e);ci("Data must be an object, but it was:",s,n);const o=[],a=Tt.empty();ee(n,(h,f)=>{const p=li(t,h,e);f=Ft(f);const E=s.hc(p);if(f instanceof Or)o.push(p);else{const w=xr(f,E);w!=null&&(o.push(p),a.set(p,w))}});const l=new Rt(o);return new Qu(a,l,s.fieldTransforms)}function gm(r,t,e,n,s,o){const a=r.dc(1,t,e),l=[Vs(t,n,e)],h=[s];if(o.length%2!=0)throw new k(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)l.push(Vs(t,o[w])),h.push(o[w+1]);const f=[],p=Tt.empty();for(let w=l.length-1;w>=0;--w)if(!tc(f,l[w])){const C=l[w];let b=h[w];b=Ft(b);const O=a.hc(C);if(b instanceof Or)f.push(C);else{const D=xr(b,O);D!=null&&(f.push(C),p.set(C,D))}}const E=new Rt(f);return new Qu(p,E,a.fieldTransforms)}function xr(r,t){if(Zu(r=Ft(r)))return ci("Unsupported field value:",t,r),Ju(r,t);if(r instanceof kr)return function(n,s){if(!Wu(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const l of n){let h=xr(l,s.Pc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=nt.fromDate(n);return{timestampValue:hr(s.serializer,o)}}if(n instanceof nt){const o=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hr(s.serializer,o)}}if(n instanceof ii)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof he)return{bytesValue:pu(s.serializer,n._byteString)};if(n instanceof At){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qs(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof oi)return function(a,l){return{mapValue:{fields:{[$a]:{stringValue:za},[ar]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.Tc("VectorValues must only contain numeric values.");return Ls(l.serializer,f)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${ri(n)}`)}(r,t)}function Ju(r,t){const e={};return La(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ee(r,(n,s)=>{const o=xr(s,t.uc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Zu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof ii||r instanceof he||r instanceof At||r instanceof kr||r instanceof oi)}function ci(r,t,e){if(!Zu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=ri(e);throw n==="an object"?t.Tc(r+" a custom object"):t.Tc(r+" "+n)}}function Vs(r,t,e){if((t=Ft(t))instanceof Nr)return t._internalPath;if(typeof t=="string")return li(r,t);throw gr("Field path arguments must be of type string or ",r,!1,void 0,e)}const _m=new RegExp("[~\\*/\\[\\]]");function li(r,t,e){if(t.search(_m)>=0)throw gr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Nr(...t.split("."))._internalPath}catch{throw gr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function gr(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,l+r+h)}function tc(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ym(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ec("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ym extends _r{data(){return super.data()}}function ec(r,t){return typeof t=="string"?li(r,t):t instanceof Nr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nc{convertValue(t,e="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ee(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[ar].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new oi(o)}convertGeoPoint(t){return new ii(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Er(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);$(Iu(n),9688,{name:t});const s=new mn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return s.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Tm extends nc{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hi extends _r{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ec("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class tr extends hi{data(t={}){return super.data(t)}}class vm{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ie(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new tr(this._firestore,this._userDataWriter,n.key,n,new Ie(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new tr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ie(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new tr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ie(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Im(l.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Im(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(r){r=Lt(r,At);const t=Lt(r.firestore,De);return am(Dr(t),r._key).then(e=>sc(t,r,e))}class di extends nc{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function Nm(r,t,e){r=Lt(r,At);const n=Lt(r.firestore,De),s=rc(r.converter,t,e);return Am(n,[Xu(Yu(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,It.none())])}function km(r,...t){var e,n,s;r=Ft(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||_a(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(_a(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(n=E.error)===null||n===void 0?void 0:n.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,f,p;if(r instanceof At)f=Lt(r.firestore,De),p=vr(r._key.path),h={next:E=>{t[a]&&t[a](sc(f,r,E))},error:t[a+1],complete:t[a+2]};else{const E=Lt(r,br);f=Lt(E.firestore,De),p=E._query;const w=new di(f);h={next:C=>{t[a]&&t[a](new vm(f,w,E,C))},error:t[a+1],complete:t[a+2]},Em(r._query)}return function(w,C,b,O){const D=new Gu(O),K=new Mu(C,D,b);return w.asyncQueue.enqueueAndForget(async()=>Ou(await Cs(w),K)),()=>{D.yu(),w.asyncQueue.enqueueAndForget(async()=>xu(await Cs(w),K))}}(Dr(f),p,l,h)}function Am(r,t){return function(n,s){const o=new Mt;return n.asyncQueue.enqueueAndForget(async()=>Kf(await im(n),s,o)),o.promise}(Dr(r),t)}function sc(r,t,e){const n=e.docs.get(t._key),s=new di(r);return new hi(r,s,t._key,n,new Ie(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm={maxAttempts:5};function rn(r,t){if((r=Ft(r)).firestore!==t)throw new k(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Yu(t)}get(t){const e=rn(t,this._firestore),n=new Tm(this._firestore);return this._transaction.lookup([e._key]).then(s=>{if(!s||s.length!==1)return x(24041);const o=s[0];if(o.isFoundDocument())return new _r(this._firestore,n,o.key,o,e.converter);if(o.isNoDocument())return new _r(this._firestore,n,e._key,null,e.converter);throw x(18433,{doc:o})})}set(t,e,n){const s=rn(t,this._firestore),o=rc(s.converter,e,n),a=Xu(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(t,e,n,...s){const o=rn(t,this._firestore);let a;return a=typeof(e=Ft(e))=="string"||e instanceof Nr?gm(this._dataReader,"Transaction.update",o._key,e,n,s):pm(this._dataReader,"Transaction.update",o._key,e),this._transaction.update(o._key,a),this}delete(t){const e=rn(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Rm{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=rn(t,this._firestore),n=new di(this._firestore);return super.get(t).then(s=>new hi(this._firestore,n,e._key,s._document,new Ie(!1,!1),e.converter))}}function Om(r,t,e){r=Lt(r,De);const n=Object.assign(Object.assign({},wm),e);return function(o){if(o.maxAttempts<1)throw new k(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(o,a,l){const h=new Mt;return o.asyncQueue.enqueueAndForget(async()=>{const f=await om(o);new nm(o.asyncQueue,f,l,a,h).Nu()}),h.promise}(Dr(r),s=>t(new Pm(r,s)),n)}function xm(){return new ui("serverTimestamp")}(function(t,e=!0){(function(s){ke=s})(Jl),sr(new ln("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new De(new ph(n.getProvider("auth-internal")),new yh(a,n.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ae(Io,Ao,t),Ae(Io,Ao,"esm2017")})();export{xm as a,Dm as b,Vm as d,bm as g,Zl as i,km as o,Om as r,Nm as s};
