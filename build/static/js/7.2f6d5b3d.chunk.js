(this["webpackJsonperp-crm"]=this["webpackJsonperp-crm"]||[]).push([[7],{565:function(e,t,n){"use strict";var r=n(3),a=n(5),i=n(0),o=n(7),c=n.n(o),l=n(47),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){return i.createElement(l.a,null,(function(t){var n,o=t.getPrefixCls,l=t.direction,p=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,f=e.orientation,y=void 0===f?"center":f,m=e.className,h=e.children,b=e.dashed,v=e.plain,g=s(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=o("divider",p),x=y.length>0?"-".concat(y):y,E=!!h,j=c()(O,"".concat(O,"-").concat(u),(n={},Object(a.a)(n,"".concat(O,"-with-text"),E),Object(a.a)(n,"".concat(O,"-with-text").concat(x),E),Object(a.a)(n,"".concat(O,"-dashed"),!!b),Object(a.a)(n,"".concat(O,"-plain"),!!v),Object(a.a)(n,"".concat(O,"-rtl"),"rtl"===l),n),m);return i.createElement("div",Object(r.a)({className:j},g,{role:"separator"}),h&&i.createElement("span",{className:"".concat(O,"-inner-text")},h))}))}},590:function(e,t,n){"use strict";var r=n(591),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,o,c,l,s,p=!1;t||(t={}),n=t.debug||!1;try{if(o=r(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),o()}return p}},591:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},604:function(e,t,n){"use strict";var r=n(1),a=n(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},o=n(9),c=function(e,t){return a.createElement(o.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:i}))};c.displayName="LockOutlined";t.a=a.forwardRef(c)},611:function(e,t,n){"use strict";var r=n(3),a=n(5),i=n(0),o=n(7),c=n.n(o),l=n(28),s=n(47),p=n(38),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=function(e,t){var n=e.prefixCls,o=e.component,u=void 0===o?"article":o,f=e.className,y=e["aria-label"],m=e.setContentRef,h=e.children,b=d(e,["prefixCls","component","className","aria-label","setContentRef","children"]),v=t;return m&&(Object(p.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),v=Object(l.a)(t,m)),i.createElement(s.a,null,(function(e){var t=e.getPrefixCls,o=e.direction,l=u,s=t("typography",n),p=c()(s,Object(a.a)({},"".concat(s,"-rtl"),"rtl"===o),f);return i.createElement(l,Object(r.a)({className:p,"aria-label":y,ref:v},b),h)}))},f=i.forwardRef(u);f.displayName="Typography";var y=f,m=n(19),h=n(33),b=n(8),v=n(12),g=n(13),O=n(15),x=n(16),E=n(49),j=n(590),C=n.n(j),w=n(605),S=n(573),N=n(1),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},P=n(9),R=function(e,t){return i.createElement(P.a,Object(N.a)(Object(N.a)({},e),{},{ref:t,icon:k}))};R.displayName="CopyOutlined";var z=i.forwardRef(R),T=n(69),A=n(23),D=n(106),I=n(581),M=n(137),H=n(564),L=n(110),B=n(6),U=n(52),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},V=function(e,t){return i.createElement(P.a,Object(N.a)(Object(N.a)({},e),{},{ref:t,icon:F}))};V.displayName="EnterOutlined";var K,W=i.forwardRef(V),G=n(580),J=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,o=e.style,l=e.direction,s=e.maxLength,p=e.autoSize,d=void 0===p||p,u=e.value,f=e.onSave,y=e.onCancel,m=e.onEnd,h=i.useRef(),b=i.useRef(!1),v=i.useRef(),g=i.useState(u),O=Object(B.a)(g,2),x=O[0],E=O[1];i.useEffect((function(){E(u)}),[u]),i.useEffect((function(){if(h.current&&h.current.resizableTextArea){var e=h.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var j=function(){f(x.trim())},C=c()(t,"".concat(t,"-edit-content"),Object(a.a)({},"".concat(t,"-rtl"),"rtl"===l),r);return i.createElement("div",{className:C,style:o},i.createElement(G.a,{ref:h,maxLength:s,value:x,onChange:function(e){var t=e.target;E(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;b.current||(v.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,i=e.shiftKey;v.current!==t||b.current||n||r||a||i||(t===U.a.ENTER?(j(),null===m||void 0===m||m()):t===U.a.ESC&&y())},onCompositionStart:function(){b.current=!0},onCompositionEnd:function(){b.current=!1},onBlur:function(){j()},"aria-label":n,autoSize:d}),i.createElement(W,{className:"".concat(t,"-edit-content-confirm")}))},X=n(26),_={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function q(e,t){e.setAttribute("aria-hidden","true");var n,r=window.getComputedStyle(t),a=(n=r,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",a),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.borderTopWidth="0",e.style.borderBottomWidth="0",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}var Q=function(e,t,n,r,a){K||(K=document.createElement("div")).setAttribute("aria-hidden","true"),K.parentNode||document.body.appendChild(K);var o=t.rows,c=t.suffix,l=void 0===c?"":c,s=function(e){var t=document.createElement("div");q(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}(e),p=Math.round(s*o*100)/100;q(K,e);var d=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}(Object(E.a)(n));function u(){return Math.round(100*K.getBoundingClientRect().height)/100-.1<=p}if(Object(X.render)(i.createElement("div",{style:_},i.createElement("span",{style:_},d,l),i.createElement("span",{style:_},r)),K),u())return Object(X.unmountComponentAtNode)(K),{content:n,text:K.innerHTML,ellipsis:!1};var f=Array.prototype.slice.apply(K.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),y=Array.prototype.slice.apply(K.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(X.unmountComponentAtNode)(K);var m=[];K.innerHTML="";var h=document.createElement("span");K.appendChild(h);var b=document.createTextNode(a+l);function v(e){h.insertBefore(e,b)}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=Math.floor((n+r)/2),o=t.slice(0,i);if(e.textContent=o,n>=r-1)for(var c=r;c>=n;c-=1){var l=t.slice(0,c);if(e.textContent=l,u()||!l)return c===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:l}}return u()?g(e,t,i,r,i):g(e,t,n,i,a)}function O(e,t){var n=e.nodeType;if(1===n)return v(e),u()?{finished:!1,reactNode:d[t]}:(h.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",a=document.createTextNode(r);return v(a),g(a,r)}return{finished:!1,reactNode:null}}return h.appendChild(b),y.forEach((function(e){K.appendChild(e)})),f.some((function(e,t){var n=O(e,t),r=n.finished,a=n.reactNode;return a&&m.push(a),r})),{content:m,text:K.innerHTML,ellipsis:!0}},Y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Z=Object(H.a)("webkitLineClamp"),$=Object(H.a)("textOverflow");function ee(e,t,n){return!0===e||void 0===e?t:e||n&&t}var te=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.apply(this,arguments)).contentRef=i.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n,r=e.getEllipsis().onExpand;e.setState({expanded:!0}),null===(n=r)||void 0===n||n(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;null===n||void 0===n||n(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,n;null===(n=(t=e.getEditable()).onCancel)||void 0===n||n.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var n=e.props,a=n.children,i=n.copyable,o=Object(r.a)({},"object"===Object(m.a)(i)?i:null);void 0===o.text&&(o.text=String(a)),C()(o.text||""),e.setState({copied:!0},(function(){o.onCopy&&o.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){M.a.cancel(e.rafId),e.rafId=Object(M.a)((function(){e.syncEllipsis()}))},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),M.a.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?Object(r.a)({editing:t},"object"===Object(m.a)(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?Object(r.a)({rows:1,expandable:!1},"object"===Object(m.a)(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,a=this.getEllipsis(),i=a.rows,o=a.expandable,c=a.suffix,l=a.onEllipsis,s=a.tooltip;return!c&&!s&&(!(n||r||o||!e||l)&&(1===i?$:Z))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,a=this.getEllipsis(),i=a.rows,o=a.suffix,c=a.onEllipsis,l=this.props.children;if(i&&!(i<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){Object(p.a)(Object(E.a)(l).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var s=Q(this.contentRef.current,{rows:i,suffix:o},l,this.renderOperations(!0),"..."),d=s.content,u=s.text,f=s.ellipsis;t===u&&n===f||(this.setState({ellipsisText:u,ellipsisContent:d,isEllipsis:f}),n!==f&&c&&c(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,a=n.symbol,o=this.state,c=o.expanded,l=o.isEllipsis;return r&&(e||!c&&l)?(t=a||this.expandStr,i.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){var e=this.props.editable;if(e){var t=e.icon,n=e.tooltip,r=Object(E.a)(n)[0]||this.editStr,a="string"===typeof r?r:"";return i.createElement(L.a,{key:"edit",title:!1===n?"":r},i.createElement(I.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":a},t||i.createElement(w.a,{role:"button"})))}}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props.copyable;if(t){var n=this.getPrefixCls(),r=t.tooltips,a=t.icon,o=Array.isArray(r)?r:[r],l=Array.isArray(a)?a:[a],s=e?ee(o[1],this.copiedStr):ee(o[0],this.copyStr),p=e?this.copiedStr:this.copyStr,d="string"===typeof s?s:p;return i.createElement(L.a,{key:"copy",title:s},i.createElement(I.a,{className:c()("".concat(n,"-copy"),e&&"".concat(n,"-copy-success")),onClick:this.onCopyClick,"aria-label":d},e?ee(l[1],i.createElement(S.a,null),!0):ee(l[0],i.createElement(z,null),!0)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.context.direction,o=this.getEditable(),c=o.maxLength,l=o.autoSize,s=o.onEnd;return i.createElement(J,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:s,prefixCls:this.getPrefixCls(),className:n,style:r,direction:a,maxLength:c,autoSize:l})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.ellipsisContent,o=t.isEllipsis,l=t.expanded,s=this.props,p=s.component,d=s.children,u=s.className,f=s.type,m=s.disabled,v=s.style,g=Y(s,["component","children","className","type","disabled","style"]),O=this.context.direction,x=this.getEllipsis(),E=x.rows,j=x.suffix,C=x.tooltip,w=this.getPrefixCls(),S=Object(h.a)(g,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat(Object(b.a)(A.a))),N=this.canUseCSSEllipsis(),k=1===E&&N,P=E&&E>1&&N,R=d;if(E&&o&&!l&&!N){var z=g.title,I=z||"";z||"string"!==typeof d&&"number"!==typeof d||(I=String(d)),I=I.slice(String(n||"").length),R=i.createElement(i.Fragment,null,n,i.createElement("span",{title:I,"aria-hidden":"true"},"..."),j),C&&(R=i.createElement(L.a,{title:!0===C?d:C},i.createElement("span",null,R)))}else R=i.createElement(i.Fragment,null,d,j);return R=function(e,t){var n=e.mark,r=e.code,a=e.underline,o=e.delete,c=e.strong,l=e.keyboard,s=e.italic,p=t;function d(e,t){e&&(p=i.createElement(t,{},p))}return d(c,"strong"),d(a,"u"),d(o,"del"),d(r,"code"),d(n,"mark"),d(l,"kbd"),d(s,"i"),p}(this.props,R),i.createElement(D.a,{componentName:"Text"},(function(t){var n,l=t.edit,s=t.copy,d=t.copied,h=t.expand;return e.editStr=l,e.copyStr=s,e.copiedStr=d,e.expandStr=h,i.createElement(T.a,{onResize:e.resizeOnNextFrame,disabled:N},i.createElement(y,Object(r.a)({className:c()((n={},Object(a.a)(n,"".concat(w,"-").concat(f),f),Object(a.a)(n,"".concat(w,"-disabled"),m),Object(a.a)(n,"".concat(w,"-ellipsis"),E),Object(a.a)(n,"".concat(w,"-single-line"),1===E&&!o),Object(a.a)(n,"".concat(w,"-ellipsis-single-line"),k),Object(a.a)(n,"".concat(w,"-ellipsis-multiple-line"),P),n),u),style:Object(r.a)(Object(r.a)({},v),{WebkitLineClamp:P?E:void 0}),component:p,ref:e.contentRef,direction:O},S),R,e.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return Object(p.a)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(i.Component);te.contextType=s.b,te.defaultProps={children:""};var ne=te,re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ae=function(e){var t=e.ellipsis,n=re(e,["ellipsis"]),a=i.useMemo((function(){return t&&"object"===Object(m.a)(t)?Object(h.a)(t,["expandable","rows"]):t}),[t]);return Object(p.a)("object"!==Object(m.a)(t)||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),i.createElement(ne,Object(r.a)({},n,{ellipsis:a,component:"span"}))},ie=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},oe=function(e,t){var n=e.ellipsis,a=e.rel,o=ie(e,["ellipsis","rel"]);Object(p.a)("object"!==Object(m.a)(n),"Typography.Link","`ellipsis` only supports boolean value.");var c=i.useRef(null);i.useImperativeHandle(t,(function(){var e;return null===(e=c.current)||void 0===e?void 0:e.contentRef.current}));var l=Object(r.a)(Object(r.a)({},o),{rel:void 0===a&&"_blank"===o.target?"noopener noreferrer":a});return delete l.navigate,i.createElement(ne,Object(r.a)({},l,{ref:c,ellipsis:!!n,component:"a"}))},ce=i.forwardRef(oe),le=n(46),se=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},pe=Object(le.b)(1,2,3,4,5),de=function(e){var t,n=e.level,a=void 0===n?1:n,o=se(e,["level"]);return-1!==pe.indexOf(a)?t="h".concat(a):(Object(p.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),i.createElement(ne,Object(r.a)({},o,{component:t}))},ue=function(e){return i.createElement(ne,Object(r.a)({},e,{component:"div"}))},fe=y;fe.Text=ae,fe.Link=ce,fe.Title=de,fe.Paragraph=ue;t.a=fe},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(3),a=n(5),i=n(6),o=n(0),c=n(7),l=n.n(c),s=n(49),p=n(47);function d(e){var t=e.className,n=e.direction,i=e.index,c=e.marginDirection,l=e.children,s=e.split,p=e.wrap,d=o.useContext(y),u=d.horizontalSize,f=d.verticalSize,m=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?i<m&&(h={marginBottom:u/(s?2:1)}):h=Object(r.a)(Object(r.a)({},i<m&&Object(a.a)({},c,u/(s?2:1))),p&&{paddingBottom:f})),null===l||void 0===l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:h},l),i<m&&s&&o.createElement("span",{className:"".concat(t,"-split"),style:h},s))}var u=n(575),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m={small:8,middle:16,large:24};t.b=function(e){var t,n=o.useContext(p.b),c=n.getPrefixCls,h=n.space,b=n.direction,v=e.size,g=void 0===v?(null===h||void 0===h?void 0:h.size)||"small":v,O=e.align,x=e.className,E=e.children,j=e.direction,C=void 0===j?"horizontal":j,w=e.prefixCls,S=e.split,N=e.style,k=e.wrap,P=void 0!==k&&k,R=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),z=Object(u.a)(),T=o.useMemo((function(){return(Array.isArray(g)?g:[g,g]).map((function(e){return function(e){return"string"===typeof e?m[e]:e||0}(e)}))}),[g]),A=Object(i.a)(T,2),D=A[0],I=A[1],M=Object(s.a)(E,{keepEmpty:!0}),H=void 0===O&&"horizontal"===C?"center":O,L=c("space",w),B=l()(L,"".concat(L,"-").concat(C),(t={},Object(a.a)(t,"".concat(L,"-rtl"),"rtl"===b),Object(a.a)(t,"".concat(L,"-align-").concat(H),H),t),x),U="".concat(L,"-item"),F="rtl"===b?"marginLeft":"marginRight",V=0,K=M.map((function(e,t){return null!==e&&void 0!==e&&(V=t),o.createElement(d,{className:U,key:"".concat(U,"-").concat(t),direction:C,index:t,marginDirection:F,split:S,wrap:P},e)})),W=o.useMemo((function(){return{horizontalSize:D,verticalSize:I,latestIndex:V,supportFlexGap:z}}),[D,I,V,z]);if(0===M.length)return null;var G={};return P&&(G.flexWrap="wrap",z||(G.marginBottom=-I)),z&&(G.columnGap=D,G.rowGap=I),o.createElement("div",Object(r.a)({className:B,style:Object(r.a)(Object(r.a)({},G),N)},R),o.createElement(y.Provider,{value:W},K))}}}]);
//# sourceMappingURL=7.2f6d5b3d.chunk.js.map