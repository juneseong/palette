(this.webpackJsonppalette=this.webpackJsonppalette||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),c=(a(13),a(5)),s=a(1),i=a(2),u=a(4),m=a(3),f=(a(14),a(15),a(16),function(){return l.a.createElement("nav",{className:"top-nav-container"},l.a.createElement("nav",{className:"top-nav"},l.a.createElement("div",{className:"logo rainbow"},l.a.createElement("i",{className:"fas fa-palette"}),"Palette"),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://juneseong.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"far fa-folder"})),l.a.createElement("a",{href:"https://github.com/juneseong/palette",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/juneseong",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"https://angel.co/u/june-seong",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-angellist"})))))}),d=(a(17),function(e){return l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"search",onChange:e.handleChange,placeholder:"Search by font, color or text",spellCheck:"false"}))}),h=(a(18),a(19),a(20),function(e){var t=Object.assign({},e).style,a=t.font,n=t.size,o=t.weight,r=t.style,c=t.decoration,s=t.color,i=t.category;return l.a.createElement("div",{className:"code-container"},l.a.createElement("div",{className:"code-instruction-code"},l.a.createElement("div",{className:"code-instruction"},l.a.createElement("button",null,"Copy")," and paste the code into the ","<head>"," of your html."),l.a.createElement("div",{className:"code"},'<link href="https://fonts.googleapis.com/css2?family=',l.a.createElement("span",null,a+":wght@"+o),'&display=swap" rel="stylesheet">')),l.a.createElement("div",{className:"code-instruction-code"},l.a.createElement("div",{className:"code-instruction"},l.a.createElement("button",null,"Copy")," and paste the code into your CSS file."),l.a.createElement("div",{className:"code"},l.a.createElement("p",null,a?"font-family: '".concat(a,"', ").concat(i,";"):null),l.a.createElement("p",null,n?"font-size: ".concat(n,";"):null),l.a.createElement("p",null,o?"font-weight: ".concat(o,";"):null),l.a.createElement("p",null,"normal"!==r?"font-style: ".concat(r,";"):null),l.a.createElement("p",null,"none"!==c?"text-decoration: ".concat(c,";"):null),l.a.createElement("p",null,s?"color: #".concat(s,";"):null))))}),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n,o,r,i,u,m,f,d;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(c.a)({},t,e.target.value))},n.handleSubmit=function(e,t){e.preventDefault();var a=n.props,l=a.handleSubmit,o=a.style,r=a.closeEditForm;l("styles",t,o.id),r()},"create"===e.type?(o="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a diam eleifend mauris porta posuere a eu lectus. Suspendisse pellentesque diam tempor enim rutrum pretium.",r="Roboto",i="16px",u="400",m="normal",f="none",d=""):(o=e.style.text,r=e.style.font,i=e.style.size,u=e.style.weight,m=e.style.style,f=e.style.decoration,d=e.style.color),n.state={text:o,font:r,size:i,weight:u,style:m,decoration:f,color:d,fonts:null,weights:["100","300","400","500","700","900"],category:null,sizeClass:"",colorClass:""},n.textarea=l.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[];this.textarea.current.focus(),fetch("https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/palette",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY)).then((function(e){return e.json()})).then((function(a){for(var n=0;n<40;n++)t.push(a.items[n]);e.setState({fonts:t});for(var l=["https://fonts.googleapis.com/css2?","&display=swap"],o="",r=0;r<t.length;r++){var c=t[r],s=c.family;if(s===e.state.font){var i=c.variants.filter((function(e){return e.length<4||"regular"===e})),u=i.indexOf("regular");null!==u&&(i[u]="400"),s.split(" ").length>1&&(s=s.split(" ").join("+")),o+=0===r?"family=".concat(s):"&family=".concat(s),o+=":wght@".concat(i.join(";")),e.setState({category:c.category})}}l=l.join(o);var m=document.createElement("link");m.href=l,m.rel="stylesheet",m.classList.add("google-fonts-link"),document.getElementsByTagName("head")[0].appendChild(m)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.font,l=a.fonts;if(t.font!==n){for(var o,r=["https://fonts.googleapis.com/css2?","&display=swap"],c="",s=0;s<l.length;s++){var i=l[s].family;if(i===n){var u=(o=l[s].variants.filter((function(e){return e.length<4||"regular"===e}))).indexOf("regular");null!==u&&(o[u]="400"),i.split(" ").length>1&&(i=i.split(" ").join("+")),c+=0===s?"family=".concat(i):"&family=".concat(i),c+=":wght@".concat(o.join(";")),this.setState({weights:o,category:l[s].category});break}}r=r.join(c),document.querySelector(".google-fonts-link").href=r}}},{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.handleSubmit,o=t.closeCreateForm,r=t.closeEditForm,c=t.code,s=this.state,i=s.text,u=s.font,m=s.size,f=s.weight,d=s.style,p=s.decoration,v=s.color,E=s.fonts,g=s.weights,y=s.sizeClass,b=s.colorClass;return c?l.a.createElement(h,{style:this.state}):l.a.createElement("form",null,l.a.createElement("div",{className:"form-style"},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-font"}),l.a.createElement("select",{className:"font-select",value:u,onChange:function(t){return e.setState({font:t.target.value})}},E?E.map((function(e,t){return l.a.createElement("option",{key:"font-option-".concat(t)},e.family)})):null)),l.a.createElement("div",null,l.a.createElement("span",{className:"material-icons"},"format_size"),l.a.createElement("input",{className:"size-input ".concat(y),value:m,onChange:function(t){return e.setState({size:t.target.value})},type:"text",maxLength:"4",spellCheck:"false",onFocus:function(){return e.setState({sizeClass:"focused"})},onBlur:function(){return e.setState({sizeClass:""})}})),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-bold"}),l.a.createElement("select",{value:f,onChange:function(t){return e.setState({weight:t.target.value})}},g?this.state.weights.map((function(e,t){return l.a.createElement("option",{key:"weight-option-".concat(t)},e)})):null)),l.a.createElement("div",{className:"font-style-icon"},l.a.createElement("i",{className:"fas fa-italic",style:{color:"italic"===d?"#0081ff":""},onClick:function(){return e.setState({style:"normal"===d?"italic":"normal"})}}),l.a.createElement("i",{className:"fas fa-underline",style:{color:"underline"===p?"#0081ff":""},onClick:function(){return e.setState({decoration:"underline"===p?"none":"underline"})}})),l.a.createElement("div",{className:"color-input-form ".concat(b)},l.a.createElement("i",{className:"fas fa-palette"}),"#",l.a.createElement("input",{className:"color-input",type:"text",placeholder:"000000",maxLength:"6",spellCheck:"false",value:v,onChange:function(t){return e.setState({color:t.target.value})},onFocus:function(){return e.setState({colorClass:"focused"})},onBlur:function(){return e.setState({colorClass:""})}}))),l.a.createElement("textarea",{ref:this.textarea,placeholder:"Add text",value:i,onChange:function(t){return e.handleChange(t,"text")},spellCheck:"false",style:{fontFamily:u,fontSize:m,fontWeight:f,fontStyle:d,textDecoration:p,color:"#"+v}}),"create"===a?l.a.createElement("div",{className:"cancel-save-btn"},l.a.createElement("button",{onClick:o},"Cancel"),l.a.createElement("button",{onClick:function(){return n("styles",e.state)}},"Save")):l.a.createElement("div",{className:"cancel-save-btn"},l.a.createElement("button",{onClick:r},"Cancel"),l.a.createElement("button",{onClick:function(t){return e.handleSubmit(t,e.state)}},"Save")))}}]),a}(l.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={code:!1},n}return Object(i.a)(a,[{key:"toggleCode",value:function(){this.setState({code:!this.state.code})}},{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.handleSubmit,o=t.closeCreateForm,r=t.closeEditForm,c=t.style,s=this.state.code;return l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"form-header"},l.a.createElement("ul",null,l.a.createElement("li",{className:s?"":"active",onClick:function(){return e.setState({code:!1})}},"create"===a?"Add Style":"Edit Style"),l.a.createElement("li",{className:s?"active":"",onClick:function(){return e.setState({code:!0})}},"Code"),l.a.createElement("li",null))),l.a.createElement(p,{handleSubmit:n,closeCreateForm:o,closeEditForm:r,type:a,style:c,code:s}))}}]),a}(l.a.Component),E=(a(21),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).closeEditForm=function(){n.setState({editing:!1})},n.state={editing:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.style,n=t.remove,o=t.handleSubmit;return l.a.createElement(l.a.Fragment,null,this.state.editing?l.a.createElement(v,{type:"edit",style:a,closeEditForm:this.closeEditForm,handleSubmit:o}):l.a.createElement("div",{className:"style"},l.a.createElement("div",{className:"edit-delete-style"},l.a.createElement("button",{onClick:function(){return e.setState({editing:!0})}},"Edit"),l.a.createElement("button",{onClick:function(){return n(a.id)}},"Delete")),l.a.createElement("span",{style:{fontFamily:a.font,fontSize:a.size,fontWeight:a.weight,fontStyle:a.style,textDecoration:a.decoration,color:"#"+a.color}},a.text)))}}]),a}(l.a.Component)),g=(a(22),function(e){return l.a.createElement("div",{className:"style-list"},e.styles.map((function(t,a){var n=t.style;return l.a.createElement(E,{key:"style-".concat(a),style:n,remove:e.remove,handleSubmit:e.handleSubmit})})))}),y=(a(23),a(24),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={color:""},n.textarea=l.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.textarea.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,a=t.handleSubmit,n=t.handleClose,o=this.state.color;return l.a.createElement("div",{className:"add-color"},l.a.createElement("div",{className:"colored",style:{backgroundColor:"#".concat(o)}}),l.a.createElement("div",{className:"add-color-form"},l.a.createElement("div",{className:"color-code"},"#",l.a.createElement("input",{ref:this.textarea,type:"text",spellCheck:"false",placeholder:"000000",maxLength:"6",onChange:function(t){return e.setState({color:t.target.value})},value:o,onKeyDown:function(e){return"Enter"===e.key?(a("colors",o),n()):null}}),l.a.createElement("i",{className:"fas fa-times",onClick:n})),l.a.createElement("span",{className:"color-code-instruction"},"Press enter to save.")))}}]),a}(l.a.Component)),b=(a(25),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.color;return l.a.createElement("div",{className:"colored",style:{backgroundColor:"#".concat(e.value)}})}}]),a}(l.a.Component)),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClose=function(){n.setState({adding:!1})},n.state={adding:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.colors;return l.a.createElement("div",{className:"color-list"},t.map((function(e,t){var a=e.color;return l.a.createElement(b,{key:"color-".concat(t),color:a})})),this.state.adding?l.a.createElement(y,{handleClose:this.handleClose,handleSubmit:this.props.handleSubmit}):l.a.createElement("div",{className:"add-color",onClick:function(){return e.setState({adding:!0})}},l.a.createElement("i",{className:"fas fa-plus"})))}}]),a}(l.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t,a){var n,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=e.state[t],r=null!==l?l:o.length;if(null===l)for(var s=0;s<o.length;s++)o[s].id!==s&&(r=s);if("styles"===t){var i=a.text,u=a.font,m=a.size,f=a.weight,d=a.style,h=a.decoration,p=a.color;n={id:r,text:i,font:u,size:m,weight:f,style:d,decoration:h,color:p}}else n={id:r,value:a};if(null!==l)for(var v=0;v<o.length;v++)o[v].id===r&&(o[v]=n);else o.push(n);localStorage.setItem(t,JSON.stringify(o)),e.setState(Object(c.a)({},t,o)),"styles"===t&&null===l&&e.closeCreateForm()},e.closeCreateForm=function(){e.setState({creating:!1})},e.delete=function(t){for(var a=e.state.styles,n=0;n<a.length;n++)a[n]&&a[n].id===t&&delete a[n];var l=a.filter((function(e){return null!==e}));e.setState({styles:l}),localStorage.setItem("styles",JSON.stringify(l))},e.state={styles:[],colors:[],searchText:"",creating:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({styles:JSON.parse(localStorage.getItem("styles"))||[],colors:JSON.parse(localStorage.getItem("colors"))||[]})}},{key:"render",value:function(){var e=this,t=[],a=[],n=this.state,o=n.creating,r=n.styles,c=n.colors;return r.forEach((function(a,n){a&&a.text.toLowerCase().includes(e.state.searchText.toLowerCase())&&t.push({id:n,style:a})})),c.forEach((function(t,n){t&&t.value.toLowerCase().includes(e.state.searchText.toLowerCase())&&a.push({id:n,color:t})})),l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(d,{handleChange:this.handleChange}),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"colors"},l.a.createElement("h1",null,"Colors"),l.a.createElement(C,{colors:a,handleSubmit:this.handleSubmit})),l.a.createElement("div",{className:"styles"},l.a.createElement("h1",null,"Fonts"),!o&&r.length<1?l.a.createElement("div",{className:"empty-style"},"No styles to show"):null,o?l.a.createElement(v,{type:"create",closeCreateForm:this.closeCreateForm,handleSubmit:this.handleSubmit}):l.a.createElement("div",{className:"add-style-btn"},l.a.createElement("button",{onClick:function(){return e.setState({creating:!0})}},"Add")),l.a.createElement(g,{styles:t.reverse(),remove:this.delete,handleSubmit:this.handleSubmit}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.75887ad1.chunk.js.map