import{r as C,L as Oe,y as Ue,z as j,E as oe,f as ve,A as Ce,S as ie,B as Pe,D as De,G as Y,H as Le,_ as ae,I as z,J as Z,C as ce,K as Se,M as xe,F as Be,k as Fe,d as B,l as Me,w as $e,x as He,N as je}from"./index.esm2017.CUxXeArW.js";var ze="firebase",Ve="10.14.1";/**
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
 */C(ze,Ve,"app");/**
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
 */class We{constructor(e,n){this._delegate=e,this.firebase=n,Z(e,new ce("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Se(this._delegate)))}_getService(e,n=z){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=z){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Z(this._delegate,e)}_addOrOverwriteComponent(e){xe(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const qe={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},J=new oe("app-compat","Firebase",qe);/**
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
 */function Ke(t){const e={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:C,setLogLevel:De,onLog:Pe,apps:null,SDK_VERSION:ie,INTERNAL:{registerComponent:c,removeApp:r,useAsService:u,modularAPIs:Ce}};n.default=n,Object.defineProperty(n,"apps",{get:i});function r(a){delete e[a]}function s(a){if(a=a||z,!Y(e,a))throw J.create("no-app",{appName:a});return e[a]}s.App=t;function o(a,p={}){const l=Le(a,p);if(Y(e,l.name))return e[l.name];const f=new t(l,n);return e[l.name]=f,f}function i(){return Object.keys(e).map(a=>e[a])}function c(a){const p=a.name,l=p.replace("-compat","");if(ae(a)&&a.type==="PUBLIC"){const f=(_=s())=>{if(typeof _[l]!="function")throw J.create("invalid-app-argument",{appName:p});return _[l]()};a.serviceProps!==void 0&&j(f,a.serviceProps),n[l]=f,t.prototype[l]=function(..._){return this._getService.bind(this,p).apply(this,a.multipleInstances?_:[])}}return a.type==="PUBLIC"?n[l]:null}function u(a,p){return p==="serverAuth"?null:p}return n}/**
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
 */function ue(){const t=Ke(We);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:ue,extendNamespace:e,createSubscribe:ve,ErrorFactory:oe,deepExtend:j});function e(n){j(t,n)}return t}const Xe=ue();/**
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
 */const Q=new Oe("@firebase/app-compat"),Ge="@firebase/app-compat",Ye="0.2.43";/**
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
 */function Ze(t){C(Ge,Ye,t)}/**
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
 */try{const t=Ue();if(t.firebase!==void 0){Q.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Q.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const x=Xe;Ze();var Je="firebase",Qe="10.14.1";/**
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
 */x.registerVersion(Je,Qe,"app-compat");/**
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
 */const le="firebasestorage.googleapis.com",he="storageBucket",et=2*60*1e3,tt=10*60*1e3;/**
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
 */class d extends Be{constructor(e,n,r=0){super($(e),`Firebase Storage: ${n} (${$(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function $(t){return"storage/"+t}function W(){const t="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,t)}function nt(t){return new d(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function rt(t){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function st(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,t)}function ot(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function it(t){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function at(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ct(){return new d(h.CANCELED,"User canceled the upload/download.")}function ut(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}function lt(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ht(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+he+"' property when initializing the app?")}function dt(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function pt(){return new d(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ft(t){return new d(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function V(t){return new d(h.INVALID_ARGUMENT,t)}function de(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function _t(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function v(t,e){return new d(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function U(t){throw new d(h.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class w{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=w.makeFromUrl(e,n)}catch{return new w(e,"")}if(r.path==="")return r;throw lt(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+s+i,"i"),u={bucket:1,path:3};function a(b){b.path_=decodeURIComponent(b.path)}const p="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${l}/${p}/b/${s}/o${f}`,"i"),R={bucket:1,path:3},I=n===le?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",O=new RegExp(`^https?://${I}/${s}/${m}`,"i"),T=[{regex:c,indices:u,postModify:o},{regex:_,indices:R,postModify:a},{regex:O,indices:{bucket:1,path:2},postModify:a}];for(let b=0;b<T.length;b++){const D=T[b],F=D.regex.exec(e);if(F){const Ie=F[D.indices.bucket];let M=F[D.indices.path];M||(M=""),r=new w(Ie,M),D.postModify(r);break}}if(r==null)throw ut(e);return r}}class gt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mt(t,e,n){let r=1,s=null,o=null,i=!1,c=0;function u(){return c===2}let a=!1;function p(...m){a||(a=!0,e.apply(null,m))}function l(m){s=setTimeout(()=>{s=null,t(_,u())},m)}function f(){o&&clearTimeout(o)}function _(m,...O){if(a){f();return}if(m){f(),p.call(null,m,...O);return}if(u()||i){f(),p.call(null,m,...O);return}r<64&&(r*=2);let T;c===1?(c=2,T=0):T=(r+Math.random())*1e3,l(T)}let R=!1;function I(m){R||(R=!0,f(),!a&&(s!==null?(m||(c=2),clearTimeout(s),l(0)):m||(c=1)))}return l(0),o=setTimeout(()=>{i=!0,I(!0)},n),I}function bt(t){t(!1)}/**
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
 */function wt(t){return t!==void 0}function Rt(t){return typeof t=="object"&&!Array.isArray(t)}function q(t){return typeof t=="string"||t instanceof String}function ee(t){return K()&&t instanceof Blob}function K(){return typeof Blob<"u"}function te(t,e,n,r){if(r<e)throw V(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw V(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function X(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pe(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var k;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(k||(k={}));/**
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
 */function Tt(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class yt{constructor(e,n,r,s,o,i,c,u,a,p,l,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=u,this.timeout_=a,this.progressCallback_=p,this.connectionFactory_=l,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,R)=>{this.resolve_=_,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new L(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=c=>{const u=c.loaded,a=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,a)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const c=o.getErrorCode()===k.NO_ERROR,u=o.getStatus();if(!c||Tt(u,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===k.ABORT;r(!1,new L(!1,null,p));return}const a=this.successCodes_.indexOf(u)!==-1;r(!0,new L(a,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());wt(u)?o(u):o()}catch(u){i(u)}else if(c!==null){const u=W();u.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,u)):i(u)}else if(s.canceled){const u=this.appDelete_?de():ct();i(u)}else{const u=at();i(u)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=mt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Et(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function At(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Nt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function It(t,e,n,r,s,o,i=!0){const c=pe(t.urlParams),u=t.url+c,a=Object.assign({},t.headers);return kt(a,e),Et(a,n),At(a,o),Nt(a,r),new yt(u,t.method,a,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
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
 */function Ot(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ut(...t){const e=Ot();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(K())return new Blob(t);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ct(t){if(typeof atob>"u")throw ft("base-64");return atob(t)}/**
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
 */const y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class H{constructor(e,n){this.data=e,this.contentType=n||null}}function Pt(t,e){switch(t){case y.RAW:return new H(fe(e));case y.BASE64:case y.BASE64URL:return new H(_e(t,e));case y.DATA_URL:return new H(Lt(e),St(e))}throw W()}function fe(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Dt(t){let e;try{e=decodeURIComponent(t)}catch{throw v(y.DATA_URL,"Malformed data URL.")}return fe(e)}function _e(t,e){switch(t){case y.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw v(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case y.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw v(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ct(e)}catch(s){throw s.message.includes("polyfill")?s:v(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ge{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw v(y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xt(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Lt(t){const e=new ge(t);return e.base64?_e(y.BASE64,e.rest):Dt(e.rest)}function St(t){return new ge(t).contentType}function xt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class E{constructor(e,n){let r=0,s="";ee(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ee(this.data_)){const r=this.data_,s=vt(r,e,n);return s===null?null:new E(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new E(r,!0)}}static getBlob(...e){if(K()){const n=e.map(r=>r instanceof E?r.data_:r);return new E(Ut.apply(null,n))}else{const n=e.map(i=>q(i)?Pt(y.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)s[o++]=i[c]}),new E(s,!0)}}uploadData(){return this.data_}}/**
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
 */function me(t){let e;try{e=JSON.parse(t)}catch{return null}return Rt(e)?e:null}/**
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
 */function Bt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ft(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function be(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Mt(t,e){return e}class g{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Mt}}let S=null;function $t(t){return!q(t)||t.length<2?t:be(t)}function we(){if(S)return S;const t=[];t.push(new g("bucket")),t.push(new g("generation")),t.push(new g("metageneration")),t.push(new g("name","fullPath",!0));function e(o,i){return $t(i)}const n=new g("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new g("size");return s.xform=r,t.push(s),t.push(new g("timeCreated")),t.push(new g("updated")),t.push(new g("md5Hash",null,!0)),t.push(new g("cacheControl",null,!0)),t.push(new g("contentDisposition",null,!0)),t.push(new g("contentEncoding",null,!0)),t.push(new g("contentLanguage",null,!0)),t.push(new g("contentType",null,!0)),t.push(new g("metadata","customMetadata",!0)),S=t,S}function Ht(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new w(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function jt(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return Ht(r,t),r}function Re(t,e,n){const r=me(e);return r===null?null:jt(t,r,n)}function zt(t,e,n,r){const s=me(e);if(s===null||!q(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(a=>{const p=t.bucket,l=t.fullPath,f="/b/"+i(p)+"/o/"+i(l),_=X(f,n,r),R=pe({alt:"media",token:a});return _+R})[0]}function Vt(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Te{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ye(t){if(!t)throw W()}function Wt(t,e){function n(r,s){const o=Re(t,s,e);return ye(o!==null),o}return n}function qt(t,e){function n(r,s){const o=Re(t,s,e);return ye(o!==null),zt(o,s,t.host,t._protocol)}return n}function Ee(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ot():s=st():n.getStatus()===402?s=rt(t.bucket):n.getStatus()===403?s=it(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Kt(t){const e=Ee(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=nt(t.path)),o.serverResponse=s.serverResponse,o}return n}function Xt(t,e,n){const r=e.fullServerUrl(),s=X(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,c=new Te(s,o,qt(t,n),i);return c.errorHandler=Kt(e),c}function Gt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Yt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Gt(null,e)),r}function Zt(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let T="";for(let b=0;b<2;b++)T=T+Math.random().toString().slice(2);return T}const u=c();i["Content-Type"]="multipart/related; boundary="+u;const a=Yt(e,r,s),p=Vt(a,n),l="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+a.contentType+`\r
\r
`,f=`\r
--`+u+"--",_=E.getBlob(l,r,f);if(_===null)throw dt();const R={name:a.fullPath},I=X(o,t.host,t._protocol),m="POST",O=t.maxUploadRetryTime,A=new Te(I,m,Wt(t,n),O);return A.urlParams=R,A.headers=i,A.body=_.uploadData(),A.errorHandler=Ee(e),A}class Jt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=k.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=k.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=k.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw U("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw U("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw U("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw U("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw U("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Qt extends Jt{initXhr(){this.xhr_.responseType="text"}}function Ae(){return new Qt}/**
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
 */class N{constructor(e,n){this._service=e,n instanceof w?this._location=n:this._location=w.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new N(e,n)}get root(){const e=new w(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=Bt(this._location.path);if(e===null)return null;const n=new w(this._location.bucket,e);return new N(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _t(e)}}function en(t,e,n){t._throwIfRoot("uploadBytes");const r=Zt(t.storage,t._location,we(),new E(e,!0),n);return t.storage.makeRequestWithTokens(r,Ae).then(s=>({metadata:s,ref:t}))}function tn(t){t._throwIfRoot("getDownloadURL");const e=Xt(t.storage,t._location,we());return t.storage.makeRequestWithTokens(e,Ae).then(n=>{if(n===null)throw pt();return n})}function nn(t,e){const n=Ft(t._location.path,e),r=new w(t._location.bucket,n);return new N(t.storage,r)}/**
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
 */function rn(t){return/^[A-Za-z]+:\/\//.test(t)}function sn(t,e){return new N(t,e)}function ke(t,e){if(t instanceof G){const n=t;if(n._bucket==null)throw ht();const r=new N(n,n._bucket);return e!=null?ke(r,e):r}else return e!==void 0?nn(t,e):t}function on(t,e){if(e&&rn(e)){if(t instanceof G)return sn(t,e);throw V("To use ref(service, url), the first argument must be a Storage instance.")}else return ke(t,e)}function ne(t,e){const n=e?.[he];return n==null?null:w.makeFromBucketSpec(n,t)}function an(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:He(s,t.app.options.projectId))}class G{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=le,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=et,this._maxUploadRetryTime=tt,this._requests=new Set,s!=null?this._bucket=w.makeFromBucketSpec(s,this._host):this._bucket=ne(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=w.makeFromBucketSpec(this._url,e):this._bucket=ne(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){te("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){te("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new N(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new gt(de());{const i=It(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const re="@firebase/storage",se="0.13.2";/**
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
 */const Ne="storage";function cn(t,e,n){return t=B(t),en(t,e,n)}function un(t){return t=B(t),tn(t)}function ln(t,e){return t=B(t),on(t,e)}function hn(t=Fe(),e){t=B(t);const r=Me(t,Ne).getImmediate({identifier:e}),s=$e("storage");return s&&dn(r,...s),r}function dn(t,e,n,r={}){an(t,e,n,r)}function pn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new G(n,r,s,e,ie)}function fn(){ae(new ce(Ne,pn,"PUBLIC").setMultipleInstances(!0)),C(re,se,""),C(re,se,"esm2017")}fn();const _n={apiKey:"AIzaSyDO1S-2HG-B2PYGl64iP9YUHH37WkW6yXM",authDomain:"tienda-mpd.firebaseapp.com",projectId:"tienda-mpd",storageBucket:"tienda-mpd.appspot.com",messagingSenderId:"280590380835",appId:"1:280590380835:web:52389c60cb14a866f1e696",measurementId:"G-R3EZH0GNQD"};let P;x.apps.length?P=x.app():P=x.initializeApp(_n);const bn=je(P),gn=hn(P);crypto.randomUUID();async function wn(t){try{const e=ln(gn,crypto.randomUUID()),n=await cn(e,t);return await un(e)}catch(e){if(e instanceof Error&&(console.error("Stack trace:",e.stack),"code"in e&&console.error("Código de error:",e.code)),e instanceof Error&&"code"in e)switch(e.code){case"storage/unauthorized":throw new Error("No tienes permiso para subir este archivo.");case"storage/canceled":throw new Error("La subida del archivo fue cancelada.");case"storage/unknown":throw new Error("Ocurrió un error desconocido durante la subida.");default:throw new Error(`Error al subir el archivo: ${e.message}`)}else throw new Error("Ocurrió un error inesperado durante la subida del archivo.")}}const Rn=P;export{Rn as a,bn as b,wn as u};
