/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.118
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as _e}from"./chunk-MCE3KFYN.js";import{a as Z}from"./chunk-ERW7V247.js";import{a as _t}from"./chunk-7AZZVJ52.js";import{a as Oe}from"./chunk-QKO6VIG2.js";import{a as Le}from"./chunk-S3ZKQKMM.js";import{a as te}from"./chunk-KTEJE5KE.js";import{b as Qt}from"./chunk-F7RQIJML.js";import{a as jt}from"./chunk-T75MW4X3.js";import{c as Ce,d as zt}from"./chunk-PWPX3224.js";import{a as bt,d as U}from"./chunk-46KFVW24.js";import{d as xe,e as Ne,f as Kt,h as G}from"./chunk-TVO2A75R.js";import{a as Bt}from"./chunk-KKKPU2CI.js";import{a as t,b as u,c as Pt,d as z,e as vt}from"./chunk-4EI6PP43.js";import{a as p}from"./chunk-3T4KR75X.js";import"./chunk-I44IOOT4.js";import"./chunk-UHR36K45.js";import{a as O}from"./chunk-4YLYA3DC.js";import{a as St,b as et}from"./chunk-6RGNWVZ2.js";import{e as g}from"./chunk-IALXUAD4.js";function rt(e){e=O(e,O.EMPTY_OBJECT),this._ellipsoid=O(e.ellipsoid,z.WGS84),this._rectangle=O(e.rectangle,G.MAX_VALUE),this._projection=new bt(this._ellipsoid),this._numberOfLevelZeroTilesX=O(e.numberOfLevelZeroTilesX,2),this._numberOfLevelZeroTilesY=O(e.numberOfLevelZeroTilesY,1)}Object.defineProperties(rt.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},rectangle:{get:function(){return this._rectangle}},projection:{get:function(){return this._projection}}});rt.prototype.getNumberOfXTilesAtLevel=function(e){return this._numberOfLevelZeroTilesX<<e};rt.prototype.getNumberOfYTilesAtLevel=function(e){return this._numberOfLevelZeroTilesY<<e};rt.prototype.rectangleToNativeRectangle=function(e,i){et.defined("rectangle",e);let r=p.toDegrees(e.west),n=p.toDegrees(e.south),o=p.toDegrees(e.east),a=p.toDegrees(e.north);return g(i)?(i.west=r,i.south=n,i.east=o,i.north=a,i):new G(r,n,o,a)};rt.prototype.tileXYToNativeRectangle=function(e,i,r,n){let o=this.tileXYToRectangle(e,i,r,n);return o.west=p.toDegrees(o.west),o.south=p.toDegrees(o.south),o.east=p.toDegrees(o.east),o.north=p.toDegrees(o.north),o};rt.prototype.tileXYToRectangle=function(e,i,r,n){let o=this._rectangle,a=this.getNumberOfXTilesAtLevel(r),c=this.getNumberOfYTilesAtLevel(r),l=o.width/a,s=e*l+o.west,d=(e+1)*l+o.west,h=o.height/c,N=o.north-i*h,S=o.north-(i+1)*h;return g(n)||(n=new G(s,S,d,N)),n.west=s,n.south=S,n.east=d,n.north=N,n};rt.prototype.positionToTileXY=function(e,i,r){let n=this._rectangle;if(!G.contains(n,e))return;let o=this.getNumberOfXTilesAtLevel(i),a=this.getNumberOfYTilesAtLevel(i),c=n.width/o,l=n.height/a,s=e.longitude;n.east<n.west&&(s+=p.TWO_PI);let d=(s-n.west)/c|0;d>=o&&(d=o-1);let h=(n.north-e.latitude)/l|0;return h>=a&&(h=a-1),g(r)?(r.x=d,r.y=h,r):new Pt(d,h)};var De=rt;var Ie=new t,He=new t,ke=new u,ee=new t,hn=new t,ye=new U,pn=new De,Lt=[new u,new u,new u,new u],Ot=new Pt,w={};w.initialize=function(){let e=w._initPromise;return g(e)||(e=xe.fetchJson(Ne("Assets/approximateTerrainHeights.json")).then(function(i){w._terrainHeights=i}),w._initPromise=e),e};w.getMinimumMaximumHeights=function(e,i){if(et.defined("rectangle",e),!g(w._terrainHeights))throw new St("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");i=O(i,z.WGS84);let r=Ae(e),n=w._defaultMinTerrainHeight,o=w._defaultMaxTerrainHeight;if(g(r)){let a=`${r.level}-${r.x}-${r.y}`,c=w._terrainHeights[a];g(c)&&(n=c[0],o=c[1]),i.cartographicToCartesian(G.northeast(e,ke),Ie),i.cartographicToCartesian(G.southwest(e,ke),He),t.midpoint(He,Ie,ee);let l=i.scaleToGeodeticSurface(ee,hn);if(g(l)){let s=t.distance(ee,l);n=Math.min(n,-s)}else n=w._defaultMinTerrainHeight}return n=Math.max(w._defaultMinTerrainHeight,n),{minimumTerrainHeight:n,maximumTerrainHeight:o}};w.getBoundingSphere=function(e,i){if(et.defined("rectangle",e),!g(w._terrainHeights))throw new St("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");i=O(i,z.WGS84);let r=Ae(e),n=w._defaultMaxTerrainHeight;if(g(r)){let a=`${r.level}-${r.x}-${r.y}`,c=w._terrainHeights[a];g(c)&&(n=c[1])}let o=U.fromRectangle3D(e,i,0);return U.fromRectangle3D(e,i,n,ye),U.union(o,ye,o)};function Ae(e){u.fromRadians(e.east,e.north,0,Lt[0]),u.fromRadians(e.west,e.north,0,Lt[1]),u.fromRadians(e.east,e.south,0,Lt[2]),u.fromRadians(e.west,e.south,0,Lt[3]);let i=0,r=0,n=0,o=0,a=w._terrainHeightsMaxLevel,c;for(c=0;c<=a;++c){let l=!1;for(let s=0;s<4;++s){let d=Lt[s];if(pn.positionToTileXY(d,c,Ot),s===0)n=Ot.x,o=Ot.y;else if(n!==Ot.x||o!==Ot.y){l=!0;break}}if(l)break;i=n,r=o}if(c!==0)return{x:i,y:r,level:c>a?a:c-1}}w._terrainHeightsMaxLevel=6;w._defaultMaxTerrainHeight=9e3;w._defaultMinTerrainHeight=-1e5;w._terrainHeights=void 0;w._initPromise=void 0;Object.defineProperties(w,{initialized:{get:function(){return g(w._terrainHeights)}}});var Xt=w;var le=[bt,_e],dn=le.length,Ke=Math.cos(p.toRadians(30)),Me=Math.cos(p.toRadians(150)),Qe=0,tn=1e3;function ct(e){e=O(e,O.EMPTY_OBJECT);let i=e.positions;if(!g(i)||i.length<2)throw new St("At least two positions are required.");if(g(e.arcType)&&e.arcType!==Z.GEODESIC&&e.arcType!==Z.RHUMB)throw new St("Valid options for arcType are ArcType.GEODESIC and ArcType.RHUMB.");this.width=O(e.width,1),this._positions=i,this.granularity=O(e.granularity,9999),this.loop=O(e.loop,!1),this.arcType=O(e.arcType,Z.GEODESIC),this._ellipsoid=z.WGS84,this._projectionIndex=0,this._workerName="createGroundPolylineGeometry",this._scene3DOnly=!1}Object.defineProperties(ct.prototype,{packedLength:{get:function(){return 1+this._positions.length*3+1+1+1+z.packedLength+1+1}}});ct.setProjectionAndEllipsoid=function(e,i){let r=0;for(let n=0;n<dn;n++)if(i instanceof le[n]){r=n;break}e._projectionIndex=r,e._ellipsoid=i.ellipsoid};var fn=new t,Re=new t,Pe=new t;function se(e,i,r,n,o){let a=P(n,e,0,fn),c=P(n,e,r,Re),l=P(n,i,0,Pe),s=nt(c,a,Re),d=nt(l,a,Pe);return t.cross(d,s,o),t.normalize(o,o)}var mn=new u,gn=new t,un=new t,wn=new t;function ne(e,i,r,n,o,a,c,l,s,d,h){if(o===0)return;let N;a===Z.GEODESIC?N=new Oe(e,i,c):a===Z.RHUMB&&(N=new te(e,i,c));let S=N.surfaceDistance;if(S<o)return;let R=se(e,i,n,c,wn),D=Math.ceil(S/o),I=S/D,j=I,W=D-1,f=l.length;for(let X=0;X<W;X++){let v=N.interpolateUsingSurfaceDistance(j,mn),y=P(c,v,r,gn),H=P(c,v,n,un);t.pack(R,l,f),t.pack(y,s,f),t.pack(H,d,f),h.push(v.latitude),h.push(v.longitude),f+=3,j+=I}}var oe=new u;function P(e,i,r,n){return u.clone(i,oe),oe.height=r,u.toCartesian(oe,e,n)}ct.pack=function(e,i,r){et.typeOf.object("value",e),et.defined("array",i);let n=O(r,0),o=e._positions,a=o.length;i[n++]=a;for(let c=0;c<a;++c){let l=o[c];t.pack(l,i,n),n+=3}return i[n++]=e.granularity,i[n++]=e.loop?1:0,i[n++]=e.arcType,z.pack(e._ellipsoid,i,n),n+=z.packedLength,i[n++]=e._projectionIndex,i[n++]=e._scene3DOnly?1:0,i};ct.unpack=function(e,i,r){et.defined("array",e);let n=O(i,0),o=e[n++],a=new Array(o);for(let S=0;S<o;S++)a[S]=t.unpack(e,n),n+=3;let c=e[n++],l=e[n++]===1,s=e[n++],d=z.unpack(e,n);n+=z.packedLength;let h=e[n++],N=e[n++]===1;return g(r)||(r=new ct({positions:a})),r._positions=a,r.granularity=c,r.loop=l,r.arcType=s,r._ellipsoid=d,r._projectionIndex=h,r._scene3DOnly=N,r};function nt(e,i,r){return t.subtract(e,i,r),t.normalize(r,r),r}function be(e,i,r,n){return n=nt(e,i,n),n=t.cross(n,r,n),n=t.normalize(n,n),n=t.cross(r,n,n),n}var Sn=new t,Tn=new t,En=new t,en=new t,xn=0,Nn=-1;function ie(e,i,r,n,o){let a=nt(r,i,en),c=be(e,i,a,Sn),l=be(n,i,a,Tn);if(p.equalsEpsilon(t.dot(c,l),Nn,p.EPSILON5))return o=t.cross(a,c,o),o=t.normalize(o,o),o;o=t.add(l,c,o),o=t.normalize(o,o);let s=t.cross(a,o,En);return t.dot(l,s)<xn&&(o=t.negate(o,o)),o}var Ut=jt.fromPointNormal(t.ZERO,t.UNIT_Y),Cn=new t,_n=new t,Ln=new t,On=new t,Dn=new t,Yt=new t,Ft=new u,ve=new u,Be=new u;ct.createGeometry=function(e){let i=!e._scene3DOnly,r=e.loop,n=e._ellipsoid,o=e.granularity,a=e.arcType,c=new le[e._projectionIndex](n),l=Qe,s=tn,d,h,N=e._positions,S=N.length;S===2&&(r=!1);let R,D,I,j,W=new te(void 0,void 0,n),f,X,v,y=[N[0]];for(h=0;h<S-1;h++)R=N[h],D=N[h+1],f=Qt.lineSegmentPlane(R,D,Ut,Yt),g(f)&&!t.equalsEpsilon(f,R,p.EPSILON7)&&!t.equalsEpsilon(f,D,p.EPSILON7)&&(e.arcType===Z.GEODESIC?y.push(t.clone(f)):e.arcType===Z.RHUMB&&(v=n.cartesianToCartographic(f,Ft).longitude,I=n.cartesianToCartographic(R,Ft),j=n.cartesianToCartographic(D,ve),W.setEndPoints(I,j),X=W.findIntersectionWithLongitude(v,Be),f=n.cartographicToCartesian(X,Yt),g(f)&&!t.equalsEpsilon(f,R,p.EPSILON7)&&!t.equalsEpsilon(f,D,p.EPSILON7)&&y.push(t.clone(f)))),y.push(D);r&&(R=N[S-1],D=N[0],f=Qt.lineSegmentPlane(R,D,Ut,Yt),g(f)&&!t.equalsEpsilon(f,R,p.EPSILON7)&&!t.equalsEpsilon(f,D,p.EPSILON7)&&(e.arcType===Z.GEODESIC?y.push(t.clone(f)):e.arcType===Z.RHUMB&&(v=n.cartesianToCartographic(f,Ft).longitude,I=n.cartesianToCartographic(R,Ft),j=n.cartesianToCartographic(D,ve),W.setEndPoints(I,j),X=W.findIntersectionWithLongitude(v,Be),f=n.cartographicToCartesian(X,Yt),g(f)&&!t.equalsEpsilon(f,R,p.EPSILON7)&&!t.equalsEpsilon(f,D,p.EPSILON7)&&y.push(t.clone(f)))));let H=y.length,C=new Array(H);for(h=0;h<H;h++){let F=u.fromCartesian(y[h],n);F.height=0,C[h]=F}if(C=Le(C,u.equalsEpsilon),H=C.length,H<2)return;let k=[],b=[],B=[],E=[],x=Cn,L=_n,_=Ln,Y=On,A=Dn,m=C[0],V=C[1],It=C[H-1];for(x=P(n,It,l,x),Y=P(n,V,l,Y),L=P(n,m,l,L),_=P(n,m,s,_),r?A=ie(x,L,_,Y,A):A=se(m,V,s,n,A),t.pack(A,b,0),t.pack(L,B,0),t.pack(_,E,0),k.push(m.latitude),k.push(m.longitude),ne(m,V,l,s,o,a,n,b,B,E,k),h=1;h<H-1;++h){x=t.clone(L,x),L=t.clone(Y,L);let F=C[h];P(n,F,s,_),P(n,C[h+1],l,Y),ie(x,L,_,Y,A),d=b.length,t.pack(A,b,d),t.pack(L,B,d),t.pack(_,E,d),k.push(F.latitude),k.push(F.longitude),ne(C[h],C[h+1],l,s,o,a,n,b,B,E,k)}let M=C[H-1],Tt=C[H-2];if(L=P(n,M,l,L),_=P(n,M,s,_),r){let F=C[0];x=P(n,Tt,l,x),Y=P(n,F,l,Y),A=ie(x,L,_,Y,A)}else A=se(Tt,M,s,n,A);if(d=b.length,t.pack(A,b,d),t.pack(L,B,d),t.pack(_,E,d),k.push(M.latitude),k.push(M.longitude),r){for(ne(M,m,l,s,o,a,n,b,B,E,k),d=b.length,h=0;h<3;++h)b[d+h]=b[h],B[d+h]=B[h],E[d+h]=E[h];k.push(m.latitude),k.push(m.longitude)}return Qn(r,c,B,E,b,k,i)};var In=new t,Hn=new vt,kn=new Kt;function ze(e,i,r,n){let o=nt(r,i,In),a=t.dot(o,e);if(a>Ke||a<Me){let c=nt(n,r,en),l=a<Me?p.PI_OVER_TWO:-p.PI_OVER_TWO,s=Kt.fromAxisAngle(c,l,kn),d=vt.fromQuaternion(s,Hn);return vt.multiplyByVector(d,e,e),!0}return!1}var je=new u,yn=new t,Xe=new t;function Dt(e,i,r,n,o){let a=u.toCartesian(i,e._ellipsoid,yn),c=t.add(a,r,Xe),l=!1,s=e._ellipsoid,d=s.cartesianToCartographic(c,je);Math.abs(i.longitude-d.longitude)>p.PI_OVER_TWO&&(l=!0,c=t.subtract(a,r,Xe),d=s.cartesianToCartographic(c,je)),d.height=0;let h=e.project(d,o);return o=t.subtract(h,n,o),o.z=0,o=t.normalize(o,o),l&&t.negate(o,o),o}var An=new t,Ye=new t;function Fe(e,i,r,n,o,a){let c=t.subtract(i,e,An);t.normalize(c,c);let l=r-Qe,s=t.multiplyByScalar(c,l,Ye);t.add(e,s,o);let d=n-tn;s=t.multiplyByScalar(c,d,Ye),t.add(i,s,a)}var Mn=new t;function Gt(e,i){let r=jt.getPointDistance(Ut,e),n=jt.getPointDistance(Ut,i),o=Mn;p.equalsEpsilon(r,0,p.EPSILON2)?(o=nt(i,e,o),t.multiplyByScalar(o,p.EPSILON2,o),t.add(e,o,e)):p.equalsEpsilon(n,0,p.EPSILON2)&&(o=nt(e,i,o),t.multiplyByScalar(o,p.EPSILON2,o),t.add(i,o,i))}function Rn(e,i){let r=Math.abs(e.longitude),n=Math.abs(i.longitude);if(p.equalsEpsilon(r,p.PI,p.EPSILON11)){let o=p.sign(i.longitude);return e.longitude=o*(r-p.EPSILON11),1}else if(p.equalsEpsilon(n,p.PI,p.EPSILON11)){let o=p.sign(e.longitude);return i.longitude=o*(n-p.EPSILON11),2}return 0}var nn=new u,on=new u,Ge=new t,re=new t,Ue=new t,We=new t,Pn=new t,qe=new t,bn=[nn,on],vn=new G,Bn=new t,zn=new t,jn=new t,Xn=new t,Yn=new t,Fn=new t,ae=new t,ce=new t,Gn=new t,Un=new t,Wn=new t,Ze=new t,qn=new t,Zn=new t,Vn=new _t,$n=new _t,Ve=new t,Jn=new t,$e=new t,Kn=[new U,new U],rn=[0,2,1,0,3,2,0,7,3,0,4,7,0,5,4,0,1,5,5,7,4,5,6,7,5,2,6,5,1,2,3,6,2,3,7,6],Je=rn.length;function Qn(e,i,r,n,o,a,c){let l,s,d=i._ellipsoid,h=r.length/3-1,N=h*8,S=N*4,R=h*36,D=N>65535?new Uint32Array(R):new Uint16Array(R),I=new Float64Array(N*3),j=new Float32Array(S),W=new Float32Array(S),f=new Float32Array(S),X=new Float32Array(S),v=new Float32Array(S),y,H,C,k;c&&(y=new Float32Array(S),H=new Float32Array(S),C=new Float32Array(S),k=new Float32Array(N*2));let b=a.length/2,B=0,E=nn;E.height=0;let x=on;x.height=0;let L=Ge,_=re;if(c)for(s=0,l=1;l<b;l++)E.latitude=a[s],E.longitude=a[s+1],x.latitude=a[s+2],x.longitude=a[s+3],L=i.project(E,L),_=i.project(x,_),B+=t.distance(L,_),s+=2;let Y=n.length/3;_=t.unpack(n,0,_);let A=0;for(s=3,l=1;l<Y;l++)L=t.clone(_,L),_=t.unpack(n,s,_),A+=t.distance(L,_),s+=3;let m;s=3;let V=0,It=0,M=0,Tt=0,F=!1,st=t.unpack(r,0,We),lt=t.unpack(n,0,re),q=t.unpack(o,0,qe);if(e){let ht=t.unpack(r,r.length-6,Ue);ze(q,ht,st,lt)&&(q=t.negate(q,q))}let pe=0,de=0,Wt=0;for(l=0;l<h;l++){let ht=t.clone(st,Ue),Zt=t.clone(lt,Ge),mt=t.clone(q,Pn);F&&(mt=t.negate(mt,mt)),st=t.unpack(r,s,We),lt=t.unpack(n,s,re),q=t.unpack(o,s,qe),F=ze(q,ht,st,lt),E.latitude=a[V],E.longitude=a[V+1],x.latitude=a[V+2],x.longitude=a[V+3];let pt,gt,ot,it;if(c){let T=Rn(E,x);pt=i.project(E,Yn),gt=i.project(x,Fn);let wt=nt(gt,pt,Ve);wt.y=Math.abs(wt.y),ot=ae,it=ce,T===0||t.dot(wt,t.UNIT_Y)>Ke?(ot=Dt(i,E,mt,pt,ae),it=Dt(i,x,q,gt,ce)):T===1?(it=Dt(i,x,q,gt,ce),ot.x=0,ot.y=p.sign(E.longitude-Math.abs(x.longitude)),ot.z=0):(ot=Dt(i,E,mt,pt,ae),it.x=0,it.y=p.sign(E.longitude-x.longitude),it.z=0)}let ge=t.distance(Zt,lt),ue=_t.fromCartesian(ht,Vn),Ht=t.subtract(st,ht,Gn),an=t.normalize(Ht,Ze),xt=t.subtract(Zt,ht,Un);xt=t.normalize(xt,xt);let ut=t.cross(an,xt,Ze);ut=t.normalize(ut,ut);let kt=t.cross(xt,mt,qn);kt=t.normalize(kt,kt);let yt=t.subtract(lt,st,Wn);yt=t.normalize(yt,yt);let At=t.cross(q,yt,Zn);At=t.normalize(At,At);let cn=ge/A,sn=pe/A,Vt=0,Nt,Mt,dt,we=0,Se=0;if(c){Vt=t.distance(pt,gt),Nt=_t.fromCartesian(pt,$n),Mt=t.subtract(gt,pt,Ve),dt=t.normalize(Mt,Jn);let T=dt.x;dt.x=dt.y,dt.y=-T,we=Vt/B,Se=de/B}for(m=0;m<8;m++){let T=Tt+m*4,wt=It+m*2,Ct=T+3,Ee=m<4?1:-1,Rt=m===2||m===3||m===6||m===7?1:-1;t.pack(ue.high,j,T),j[Ct]=Ht.x,t.pack(ue.low,W,T),W[Ct]=Ht.y,t.pack(kt,f,T),f[Ct]=Ht.z,t.pack(At,X,T),X[Ct]=cn*Ee,t.pack(ut,v,T);let ft=sn*Rt;ft===0&&Rt<0&&(ft=9),v[Ct]=ft,c&&(y[T]=Nt.high.x,y[T+1]=Nt.high.y,y[T+2]=Nt.low.x,y[T+3]=Nt.low.y,C[T]=-ot.y,C[T+1]=ot.x,C[T+2]=it.y,C[T+3]=-it.x,H[T]=Mt.x,H[T+1]=Mt.y,H[T+2]=dt.x,H[T+3]=dt.y,k[wt]=we*Ee,ft=Se*Rt,ft===0&&Rt<0&&(ft=9),k[wt+1]=ft)}let $=jn,J=Xn,K=Bn,Q=zn,ln=G.fromCartographicArray(bn,vn),Te=Xt.getMinimumMaximumHeights(ln,d),$t=Te.minimumTerrainHeight,Jt=Te.maximumTerrainHeight;Wt+=Math.abs($t),Wt+=Math.abs(Jt),Fe(ht,Zt,$t,Jt,$,K),Fe(st,lt,$t,Jt,J,Q);let tt=t.multiplyByScalar(ut,p.EPSILON5,$e);t.add($,tt,$),t.add(J,tt,J),t.add(K,tt,K),t.add(Q,tt,Q),Gt($,J),Gt(K,Q),t.pack($,I,M),t.pack(J,I,M+3),t.pack(Q,I,M+6),t.pack(K,I,M+9),tt=t.multiplyByScalar(ut,-2*p.EPSILON5,$e),t.add($,tt,$),t.add(J,tt,J),t.add(K,tt,K),t.add(Q,tt,Q),Gt($,J),Gt(K,Q),t.pack($,I,M+12),t.pack(J,I,M+15),t.pack(Q,I,M+18),t.pack(K,I,M+21),V+=2,s+=3,It+=16,M+=24,Tt+=32,pe+=ge,de+=Vt}s=0;let fe=0;for(l=0;l<h;l++){for(m=0;m<Je;m++)D[s+m]=rn[m]+fe;fe+=8,s+=Je}let qt=Kn;U.fromVertices(r,t.ZERO,3,qt[0]),U.fromVertices(n,t.ZERO,3,qt[1]);let me=U.fromBoundingSpheres(qt);me.radius+=Wt/(h*2);let Et={position:new zt({componentDatatype:Bt.DOUBLE,componentsPerAttribute:3,normalize:!1,values:I}),startHiAndForwardOffsetX:at(j),startLoAndForwardOffsetY:at(W),startNormalAndForwardOffsetZ:at(f),endNormalAndTextureCoordinateNormalizationX:at(X),rightNormalAndTextureCoordinateNormalizationY:at(v)};return c&&(Et.startHiLo2D=at(y),Et.offsetAndRight2D=at(H),Et.startEndNormals2D=at(C),Et.texcoordNormalization2D=new zt({componentDatatype:Bt.FLOAT,componentsPerAttribute:2,normalize:!1,values:k})),new Ce({attributes:Et,indices:D,boundingSphere:me})}function at(e){return new zt({componentDatatype:Bt.FLOAT,componentsPerAttribute:4,normalize:!1,values:e})}ct._projectNormal=Dt;var he=ct;function to(e,i){return Xt.initialize().then(function(){return g(i)&&(e=he.unpack(e,i)),he.createGeometry(e)})}var ti=to;export{ti as default};
