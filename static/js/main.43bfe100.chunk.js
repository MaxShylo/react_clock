(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e.timerUpdateDate=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerUpdateDate=window.setInterval((function(){var t=new Date;e.setState({date:t}),console.info(t.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.name,n=e.name;t!==n&&console.debug("Renamed from ".concat(n," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerUpdateDate)}},{key:"render",value:function(){var e=this.state.date,t=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(l.Component);function h(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var d=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={hasClock:!0,clockName:"Clock-0"},e.timerChangeName=0,e.handleDocumentContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleDocumentClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleDocumentContextMenu),document.addEventListener("click",this.handleDocumentClick),this.timerChangeName=window.setInterval((function(){e.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleDocumentContextMenu),document.removeEventListener("click",this.handleDocumentClick),clearInterval(this.timerChangeName)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{name:n})]})}}]),n}(l.Component);c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.43bfe100.chunk.js.map