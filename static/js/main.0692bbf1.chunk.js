(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/workspace.f619aada.jpg"},function(e,a,t){e.exports=t.p+"static/media/javascript2.a00831a7.png"},function(e,a,t){e.exports=t.p+"static/media/portfolio-1650.414cac3c.png"},function(e){e.exports=JSON.parse('{"title":"Client","skills-list":[{"id":1,"skill":"/images/html5.png","skillName":"HTML5"},{"id":2,"skill":"/images/css3.png","skillName":"CSS3"},{"id":3,"skill":"/images/javascript.png","skillName":"JavaScript"},{"id":4,"skill":"/images/react.png","skillName":"React"},{"id":5,"skill":"/images/jquery.png","skillName":"JQuery"},{"id":6,"skill":"/images/bootstrap.png","skillName":"Bootstrap"}]}')},function(e){e.exports=JSON.parse('{"title":"Server","skills-list":[{"id":1,"skill":"/images/mongo.png","skillName":"MongoDB"},{"id":2,"skill":"/images/ex.png","skillName":"Express"},{"id":3,"skill":"/images/nodejs.png","skillName":"Node"},{"id":4,"skill":"/images/mysql.png","skillName":"MySQL"},{"id":5,"skill":"/images/api.png","skillName":"API"}]}')},function(e){e.exports=JSON.parse('{"title":"Other","skills-list":[{"id":1,"skill":"/images/git.png","skillName":"Git"},{"id":2,"skill":"/images/github.png","skillName":"GitHub"},{"id":3,"skill":"/images/heroku.png","skillName":"Heroku"},{"id":4,"skill":"/images/sql-server.png","skillName":"SQL Server"},{"id":5,"skill":"/images/portfolio-1650.png","skillName":"SQL Server Integration Services"}]}')},function(e,a,t){e.exports=t(49)},,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),n=t(8),u=t.n(n),o=t(1),s=t(2),r=t(4),m=t(3),c=t(5),p=t(9),d=t.n(p),g=(t(40),function(e){function a(){return Object(o.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("aside",{id:"sidebar-wrapper"},l.a.createElement("div",{className:"sidebar-brand"},l.a.createElement("h4",{id:"logo"},l.a.createElement("a",{href:"#hero",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{id:"home",className:"fa fa-home"}),"Logo")),l.a.createElement("h4",null,l.a.createElement("button",{id:"sidebar-close",onClick:function(a){return e.props.onClickSideNav(a)}},l.a.createElement("i",{id:"close",className:"fa fa-window-close fa-lg"}),"Close"))),l.a.createElement("nav",null,l.a.createElement(d.a,{className:"sidebar-nav",items:["about","skills","projects","education","experience","contact","resume"],currentClassName:"active-nav",offset:this.props.scrollSpyOffset},l.a.createElement("li",null,l.a.createElement("a",{href:"#about",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-address-card"}),"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#skills",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-wrench"}),"Skills")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-laptop-code"}),"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#education",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-graduation-cap"}),"Education")),l.a.createElement("li",null,l.a.createElement("a",{href:"#experience",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-building"}),"Experience")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-envelope"}),"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#resume",onClick:function(a){return e.props.onClickNavLink(a)}},l.a.createElement("i",{className:"fa fa-file-pdf"}),"Resume")))))}}]),a}(i.Component)),v=t(10),b=t.n(v),q=t(11),f=t.n(q),E=t(12),k=t.n(E),N=t(13),x=t(14),A=t(15),P=(t(41),function(e){return l.a.createElement("h2",{className:"headline"},e.title)}),V=(t(42),function(e){return l.a.createElement("div",{id:e.id,className:"port-section"},e.children)}),F=(t(43),function(e){return l.a.createElement("div",{id:"hero"},l.a.createElement("img",{className:"img-fluid",src:e.heroimg,alt:"hero"}))}),h=(t(44),t(45),function(e){return l.a.createElement("div",{className:"skill-box"},l.a.createElement("img",{className:"img-fluid skill-img",src:"/portfolio2"+e.skill,alt:e.skillName}),l.a.createElement("p",{className:"skill-name"},e.skillName))}),C=(t(46),function(e){return l.a.createElement("div",{className:"skills-div"},l.a.createElement("p",{className:"skills-title"},e.skillGroup.title),e.skillGroup["skills-list"].map((function(e){return l.a.createElement(h,{skill:e.skill,skillName:e.skillName})})))}),S=(t(47),function(){return l.a.createElement("div",{className:"projects-div"},"Projects will go in here")}),j=function(e){function a(){return Object(o.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{id:"content-wrapper"},l.a.createElement("div",{id:"header"},"This is the Header Row",l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("button",{id:"sidebar-toggle",className:"navbar-brand"},l.a.createElement("i",{className:"fa fa-bars",onClick:function(a){return e.props.onClickSideNav(a)}})))),l.a.createElement("div",{className:"row main-section ",onClick:function(){return e.props.onClickMain()}},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(F,{heroimg:b.a}),l.a.createElement(V,{id:"about"},l.a.createElement(P,{title:"About Section"}),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.")),l.a.createElement(V,{id:"skills"},l.a.createElement(P,{title:"Skills Section"}),l.a.createElement(C,{skillGroup:N}),l.a.createElement(C,{skillGroup:x}),l.a.createElement(C,{skillGroup:A}),l.a.createElement("img",{className:"img-fluid skill-img",src:f.a,alt:"ex"}),l.a.createElement("img",{className:"img-fluid skill-img",src:k.a,alt:"ex"}),l.a.createElement("img",{className:"img-fluid skill-img",src:"/portfolio2/images/javascript2.png",alt:"git"})),l.a.createElement(V,{id:"projects"},l.a.createElement(P,{title:"Projects Section"}),l.a.createElement(S,null)),l.a.createElement(V,{id:"education"},l.a.createElement(P,{title:"Education Section"}),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.")),l.a.createElement(V,{id:"experience"},l.a.createElement(P,{title:"Experience Section"}),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.")),l.a.createElement(V,{id:"contact"},l.a.createElement(P,{title:"Contact Section"}),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.")),l.a.createElement(V,{id:"resume"},l.a.createElement(P,{title:"Resume Section"}),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis."),l.a.createElement("p",null,"Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.")))))}}]),a}(i.Component),O=(t(48),function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={toggleSideNavClass:"",scrollSpyOffset:-5},t.toggleSideNavClick=function(e){e.preventDefault(),console.log("CLICKED a TOGGLE NAV"),t.state.toggleSideNavClass?(console.log("you clicked toggle sideNav and it is open so close it"),t.setState({toggleSideNavClass:""}),t.setState({scrollSpyOffset:0})):(console.log("you clicked toggle sideNav and it is closed so open it"),t.setState({toggleSideNavClass:"toggled"}),t.setState({scrollSpyOffset:-120}))},t.closeSideNavClick=function(e){console.log("CLICKED a NAV Link"),t.setState({toggleSideNavClass:""})},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){window.innerWidth>767&&e.setState({toggleSideNavClass:""})}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"wrapper",className:this.state.toggleSideNavClass},l.a.createElement(g,{onClickSideNav:this.toggleSideNavClick,onClickNavLink:this.closeSideNavClick,scrollSpyOffset:this.state.scrollSpyOffset}),l.a.createElement(j,{onClickMain:this.closeSideNavClick,onClickSideNav:this.toggleSideNavClick}))}}]),a}(i.Component));var y=function(){return l.a.createElement(O,null)};u.a.render(l.a.createElement(y,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.0692bbf1.chunk.js.map