(this["webpackJsonpportfolio-react-2"]=this["webpackJsonpportfolio-react-2"]||[]).push([[5],{53:function(e,n,t){"use strict";var r=t(2);function a(){var e=Object(r.a)(["\n    text-align: center;\n    padding: ",";\n"]);return a=function(){return e},e}var c=t(1).c.h1(a(),(function(e){return e.theme.padding.medium}));n.a=c},63:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(8),i=t(53),o=t(62),l=t(2),m=t(1),u=t(23);function s(){var e=Object(l.a)(["\n    float: right;\n    cursor: pointer;\n    font-size: 1em;\n    @media only screen and (min-width: 900px) {\n        font-size: 125%;\n    }\n"]);return s=function(){return e},e}function d(){var e=Object(l.a)(["\n    margin-top: 2em;\n"]);return d=function(){return e},e}function p(){var e=Object(l.a)(["\n    top: -22px;\n    @media only screen and (min-width: 900px) {\n        top: -30px;\n    }\n"]);return p=function(){return e},e}function f(){var e=Object(l.a)(["\n    resize: none;\n    font-size: 1em;\n    width: 100%;\n    border: 1px solid ",";\n    padding: 0.3em;\n    box-shadow: none;\n    @media only screen and (min-width: 900px) {\n        width: 350px;\n    }\n    @media only screen and (min-width: 1024px) {\n        width: 400px;\n    }\n"]);return f=function(){return e},e}function h(){var e=Object(l.a)(["\n    color: rgb(207, 0, 0);\n    font-weight: bold;\n    font-size: 0.8em;\n    @media only screen and (min-width: 900px) {\n        margin-top: 0.3em;\n    }\n"]);return h=function(){return e},e}function x(){var e=Object(l.a)(["\n    position: relative;\n    margin-top: 1em;\n    width: 50%;\n    min-width: 300px;\n    @media only screen and (min-width: 900px) {\n        display: flex;\n        flex-direction: column;\n        &:nth-of-type(2) {\n            margin-top: 1.5em;\n            width: auto;\n        }\n    }\n"]);return x=function(){return e},e}function b(){var e=Object(l.a)(["\n    position: absolute;\n    left: 0;\n    top: -5px;\n    font-weight: bold;\n    @media only screen and (min-width: 900px) {\n        font-size: 125%;\n        top: -13px;\n    }\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n    margin-top: 1em;\n    font-size: 1em;\n    width: 100%;\n    height: 3em;\n    border: 1px solid ",";\n    padding-left: 0.3em;\n    box-shadow: none;\n    @media only screen and (min-width: 900px) {\n        width: 350px;\n    }\n    @media only screen and (min-width: 1024px) {\n        width: 400px;\n    }\n"]);return g=function(){return e},e}function w(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    @media only screen and (min-width: 900px) {\n        margin: 0 auto;\n        width: 90%;\n        flex-direction: row;\n        justify-content: space-evenly;\n        align-items: start;\n    }\n"]);return w=function(){return e},e}var E=m.c.form(w()),y=m.c.input(g(),(function(e){return e.theme.colors.secondary})),v=m.c.label(b()),j=m.c.section(x()),O=m.c.span(h()),z=m.c.textarea(f(),(function(e){return e.theme.colors.secondary})),C=Object(m.c)(v)(p()),q=Object(m.c)(j)(d()),F=Object(m.c)(u.a)(s()),k=function(){var e=Object(r.useContext)(c.a).content;return a.a.createElement(j,null,a.a.createElement(F,{type:"submit"},e.contact.submit))},S=function(e){var n=e.errors,t=e.register,i=Object(r.useContext)(c.a).content;return a.a.createElement(q,null,a.a.createElement(C,{htmlFor:"message"},i.contact.message),a.a.createElement(z,{name:"message",rows:10,cols:10,wrap:"hard",ref:t({required:!0})}),n.message&&a.a.createElement(O,null,i.contact.errors.message))},J=t(10),N=function(e){var n=e.errors,t=e.register,i=Object(r.useContext)(c.a).content;return a.a.createElement(j,null,a.a.createElement(v,{htmlFor:"email"},i.contact.email),a.a.createElement(y,{name:"email",placeholder:"example@address.com",ref:t({required:!0,pattern:J.b})}),n.email&&"required"===n.email.type&&a.a.createElement(O,null,i.contact.errors.email),n.email&&"pattern"===n.email.type&&a.a.createElement(O,null,i.contact.errors.emailPattern))},P=function(e){var n=e.errors,t=e.register,i=Object(r.useContext)(c.a).content;return a.a.createElement(j,null,a.a.createElement(v,{htmlFor:"name"},i.contact.name),a.a.createElement(y,{type:"text",name:"name",ref:t({required:!0})}),n.name&&"required"===n.name.type&&a.a.createElement(O,null,i.contact.errors.name))},T=t(54),M=t.n(T),A=t(55);function B(){return(B=Object(A.a)(M.a.mark((function e(n,t,r,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:e.sent,r(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var D=t(24);n.default=function(){var e=Object(r.useContext)(c.a),n=e.content,t=e.isMobile,l=Object(o.a)(),m=l.register,u=l.handleSubmit,s=l.errors,d=l.reset,p=u((function(e){!function(e,n,t,r){B.apply(this,arguments)}("https://formspree.io/xvorpadg",e,(function(){return alert(n.contact.success)}),(function(){return alert(n.contact.failure)})),d()}));return a.a.createElement(D.a,null,a.a.createElement(i.a,null,n.contact.sectionName),a.a.createElement(E,{onSubmit:p},t?a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{errors:s,register:m}),a.a.createElement(N,{errors:s,register:m}),a.a.createElement(S,{errors:s,register:m}),a.a.createElement(k,null)):a.a.createElement(a.a.Fragment,null,a.a.createElement("section",null,a.a.createElement(P,{errors:s,register:m}),a.a.createElement(N,{errors:s,register:m})),a.a.createElement("section",null,a.a.createElement(S,{errors:s,register:m}),a.a.createElement(k,null)))))}}}]);
//# sourceMappingURL=5.ebddd90e.chunk.js.map