(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={btn:"contactList_btn__1yL8U",contactList:"contactList_contactList__3Szqk",contactList__item:"contactList_contactList__item__enGy6"}},13:function(t,e,n){t.exports={filter:"filter_filter__1vICE",label:"filter_label__2u6_m"}},20:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),s=(n(20),n(15)),i=n(2),l=n(7),u=n(8),m=n(10),b=n(9),d=(n(21),n(3)),h=n.n(d),j=n(6),f=n(4),p=n.n(f),O=n(0),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(i.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.nameInputId,n=this.handleChange,a=this.numberInputId,c=this.state,r=c.name,o=c.number;return Object(O.jsxs)("form",{className:p.a.contactForm,onSubmit:t,children:[Object(O.jsxs)("label",{htmlFor:e,children:["Name",Object(O.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n,id:e,className:p.a.contactName})]}),Object(O.jsxs)("label",{htmlFor:a,children:["Number",Object(O.jsx)("input",{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n,id:a,className:p.a.contactNumber})]}),Object(O.jsx)("button",{type:"submit",className:p.a.btn,children:"Add contact"})]})}}]),n}(a.Component),_=v,g=n(11),C=n.n(g);function x(t){var e=t.contacts,n=t.onDeleteContact;return console.log(e),Object(O.jsx)("ul",{className:C.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsxs)("li",{className:C.a.contactList__item,children:[a,": ",c,Object(O.jsx)("button",{type:"submit",onClick:function(){return n(e)},className:C.a.btn,children:"Delete"})]},e)}))})}var y=n(13),N=n.n(y);function S(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:N.a.filter,children:[Object(O.jsx)("span",{className:N.a.label,children:"Find contacts by name"}),Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})}var F=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.name.toLowerCase());if(n)alert("".concat(e.name," is already in contacts"));else{var a=Object(i.a)(Object(i.a)({},e),{},{id:h.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))}},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getVisibleFilter=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contact");console.log(t);var e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contact",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleFilter(),e=this.addContact,n=this.changeFilter,a=this.deleteContact,c=this.state.filter;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(_,{onAddContact:e}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(S,{value:c,onChange:n}),Object(O.jsx)(x,{contacts:t,onDeleteContact:a})]})}}]),n}(a.Component),L=F;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__2wceU",contactName:"contactForm_contactName__2yypW",contactNumber:"contactForm_contactNumber__2n-jY",btn:"contactForm_btn__3OtuD"}}},[[31,1,2]]]);
//# sourceMappingURL=main.12675fcf.chunk.js.map