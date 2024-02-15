import{s as re,f as l,a as N,g as i,h as f,d as o,c as V,u as X,j as e,i as x,v as s,H as le,M as ie,l as oe,m as ce,n as de}from"../chunks/scheduler.1f572272.js";import{S as ue,i as fe,b as Y,d as Z,m as ee,a as te,t as se,e as ae}from"../chunks/index.b942bf85.js";import{g as pe,i as me}from"../chunks/navigation.872e8737.js";import{P as he,L as ve}from"../chunks/LockClosed.36d30438.js";import{P as _e}from"../chunks/public.aa8ed6af.js";function ne(h){let a,d,t;return{c(){a=l("div"),d=l("div"),t=oe(h[0]),this.h()},l(r){a=i(r,"DIV",{class:!0});var p=f(a);d=i(p,"DIV",{class:!0});var m=f(d);t=ce(m,h[0]),m.forEach(o),p.forEach(o),this.h()},h(){e(d,"class","notification is-danger"),e(a,"class","container")},m(r,p){x(r,a,p),s(a,d),s(d,t)},p(r,p){p&1&&de(t,r[0])},d(r){r&&o(a)}}}function ge(h){let a,d,t,r,p='<div class="column is-half has-text-centered"><p class="is-size-4">Let&#39;s signup.</p></div>',m,v,_,u,y,g,w,A,D,I,H,L,$,P,j,b,S,B,T,J='<p class="control"><input type="submit" value="SignUp" class="button is-success"/></p>',M,F,R,c=h[0]&&ne(h);return I=new he({}),S=new ve({}),{c(){a=l("section"),c&&c.c(),d=N(),t=l("section"),r=l("div"),r.innerHTML=p,m=N(),v=l("div"),_=l("div"),u=l("form"),y=l("div"),g=l("p"),w=l("input"),A=N(),D=l("span"),Y(I.$$.fragment),H=N(),L=l("div"),$=l("p"),P=l("input"),j=N(),b=l("span"),Y(S.$$.fragment),B=N(),T=l("div"),T.innerHTML=J,this.h()},l(n){a=i(n,"SECTION",{class:!0});var E=f(a);c&&c.l(E),E.forEach(o),d=V(n),t=i(n,"SECTION",{class:!0});var O=f(t);r=i(O,"DIV",{class:!0,"data-svelte-h":!0}),X(r)!=="svelte-13w7eoo"&&(r.innerHTML=p),m=V(O),v=i(O,"DIV",{class:!0});var q=f(v);_=i(q,"DIV",{class:!0});var z=f(_);u=i(z,"FORM",{});var C=f(u);y=i(C,"DIV",{class:!0});var G=f(y);g=i(G,"P",{class:!0});var U=f(g);w=i(U,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),A=V(U),D=i(U,"SPAN",{class:!0});var K=f(D);Z(I.$$.fragment,K),K.forEach(o),U.forEach(o),G.forEach(o),H=V(C),L=i(C,"DIV",{class:!0});var Q=f(L);$=i(Q,"P",{class:!0});var k=f($);P=i(k,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),j=V(k),b=i(k,"SPAN",{class:!0});var W=f(b);Z(S.$$.fragment,W),W.forEach(o),k.forEach(o),Q.forEach(o),B=V(C),T=i(C,"DIV",{class:!0,"data-svelte-h":!0}),X(T)!=="svelte-1w4lgya"&&(T.innerHTML=J),C.forEach(o),z.forEach(o),q.forEach(o),O.forEach(o),this.h()},h(){e(a,"class","section"),e(r,"class","columns is-centered"),e(w,"class","input"),e(w,"name","username"),e(w,"type","text"),e(w,"placeholder","Username"),e(D,"class","icon is-small is-left"),e(g,"class","control has-icons-left has-icons-right"),e(y,"class","field"),e(P,"class","input"),e(P,"name","password"),e(P,"type","password"),e(P,"placeholder","Password"),e(b,"class","icon is-small is-left"),e($,"class","control has-icons-left"),e(L,"class","field"),e(T,"class","field"),e(_,"class","column is-half has-text-centered"),e(v,"class","columns is-centered"),e(t,"class","section")},m(n,E){x(n,a,E),c&&c.m(a,null),x(n,d,E),x(n,t,E),s(t,r),s(t,m),s(t,v),s(v,_),s(_,u),s(u,y),s(y,g),s(g,w),s(g,A),s(g,D),ee(I,D,null),s(u,H),s(u,L),s(L,$),s($,P),s($,j),s($,b),ee(S,b,null),s(u,B),s(u,T),M=!0,F||(R=le(u,"submit",ie(h[1])),F=!0)},p(n,[E]){n[0]?c?c.p(n,E):(c=ne(n),c.c(),c.m(a,null)):c&&(c.d(1),c=null)},i(n){M||(te(I.$$.fragment,n),te(S.$$.fragment,n),M=!0)},o(n){se(I.$$.fragment,n),se(S.$$.fragment,n),M=!1},d(n){n&&(o(a),o(d),o(t)),c&&c.d(),ae(I),ae(S),F=!1,R()}}}function $e(h,a,d){let t;async function r(p){const m=new FormData(p.currentTarget);let v=m.get("username"),_=m.get("password");try{const u=await fetch(`${_e}/signup`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:v,password:_})});if(u.ok){await pe("/",{invalidateAll:!0});return}d(0,t=await u.text());try{d(0,t=JSON.parse(t).detail.error)}catch{}}catch(u){d(0,t=u.toString())}await me()}return[t,r]}class Se extends ue{constructor(a){super(),fe(this,a,$e,ge,re,{})}}export{Se as component};
