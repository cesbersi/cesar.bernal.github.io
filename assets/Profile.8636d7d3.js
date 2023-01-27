import{_ as x,o as _,c as y,a as S,b as e,t as b,r as v,n as w,d as p,F as k,e as q}from"./index.a7af21cd.js";import{V as C}from"./VsudAvatar.a4b86e16.js";import{b as $,s as L}from"./tooltip.96d5c9eb.js";function E(){var c=document.querySelectorAll(".nav-pills");function h(){c.forEach(function(s,t){var l=document.createElement("div"),a=s.querySelector("li:first-child .nav-link"),n=a.cloneNode();n.innerHTML="-",l.classList.add("moving-tab","position-absolute","nav-link"),l.appendChild(n),s.appendChild(l),s.getElementsByTagName("li").length,l.style.padding="0px",l.style.width=s.querySelector("li:nth-child(1)").offsetWidth+"px",l.style.transform="translate3d(0px, 0px, 0px)",l.style.transition=".5s ease",s.onmouseover=function(i){let r=d(i).closest("li");if(r){let m=Array.from(r.closest("ul").children),f=m.indexOf(r)+1;s.querySelector("li:nth-child("+f+") .nav-link").onclick=function(){l=s.querySelector(".moving-tab");let g=0;if(s.classList.contains("flex-column")){for(var u=1;u<=m.indexOf(r);u++)g+=s.querySelector("li:nth-child("+u+")").offsetHeight;l.style.transform="translate3d(0px,"+g+"px, 0px)",l.style.height=s.querySelector("li:nth-child("+u+")").offsetHeight}else{for(var u=1;u<=m.indexOf(r);u++)g+=s.querySelector("li:nth-child("+u+")").offsetWidth;l.style.transform="translate3d("+g+"px, 0px, 0px)",l.style.width=s.querySelector("li:nth-child("+f+")").offsetWidth+"px"}}}}})}setTimeout(function(){h()},100),window.addEventListener("resize",function(s){c.forEach(function(t,l){t.querySelector(".moving-tab").remove();var a=document.createElement("div"),n=t.querySelector(".nav-link.active").cloneNode();n.innerHTML="-",a.classList.add("moving-tab","position-absolute","nav-link"),a.appendChild(n),t.appendChild(a),a.style.padding="0px",a.style.transition=".5s ease";let i=t.querySelector(".nav-link.active").parentElement;if(i){let r=Array.from(i.closest("ul").children),m=r.indexOf(i)+1,f=0;if(t.classList.contains("flex-column")){for(var o=1;o<=r.indexOf(i);o++)f+=t.querySelector("li:nth-child("+o+")").offsetHeight;a.style.transform="translate3d(0px,"+f+"px, 0px)",a.style.width=t.querySelector("li:nth-child("+m+")").offsetWidth+"px",a.style.height=t.querySelector("li:nth-child("+o+")").offsetHeight}else{for(var o=1;o<=r.indexOf(i);o++)f+=t.querySelector("li:nth-child("+o+")").offsetWidth;a.style.transform="translate3d("+f+"px, 0px, 0px)",a.style.width=t.querySelector("li:nth-child("+m+")").offsetWidth+"px"}}}),window.innerWidth<991?c.forEach(function(t,l){if(!t.classList.contains("flex-column")){t.classList.remove("flex-row"),t.classList.add("flex-column","on-resize");let i=t.querySelector(".nav-link.active").parentElement,o=Array.from(i.closest("ul").children);o.indexOf(i)+1;let r=0;for(var a=1;a<=o.indexOf(i);a++)r+=t.querySelector("li:nth-child("+a+")").offsetHeight;var n=document.querySelector(".moving-tab");n.style.width=t.querySelector("li:nth-child(1)").offsetWidth+"px",n.style.transform="translate3d(0px,"+r+"px, 0px)"}}):c.forEach(function(t,l){if(t.classList.contains("on-resize")){t.classList.remove("flex-column","on-resize"),t.classList.add("flex-row");let i=t.querySelector(".nav-link.active").parentElement,o=Array.from(i.closest("ul").children),r=o.indexOf(i)+1,m=0;for(var a=1;a<=o.indexOf(i);a++)m+=t.querySelector("li:nth-child("+a+")").offsetWidth;var n=document.querySelector(".moving-tab");n.style.transform="translate3d("+m+"px, 0px, 0px)",n.style.width=t.querySelector("li:nth-child("+r+")").offsetWidth+"px"}})}),window.innerWidth<991&&c.forEach(function(s,t){s.classList.contains("flex-row")&&(s.classList.remove("flex-row"),s.classList.add("flex-column","on-resize"))});function d(s){return s=s||window.event,s.target||s.srcElement}}const z={name:"ProfileCard"},A={class:"card h-100"},T=S('<div class="p-3 pb-0 card-header"><div class="row"><div class="col-md-8 d-flex align-items-center"><h6 class="mb-0">un poco de mi...</h6></div><div class="col-md-4 text-end"><a href="javascript:;"><i class="text-sm fas fa-user-edit text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i></a></div></div></div><div class="p-3 card-body"><p class="text-sm"> Con m\xE1s de 16 a\xF1os de experiencia en desarrollo de software en los cuales he tenido la oportunidad de crear aplicaciones, optimizar procesos y construcci\xF3n de soluciones personalizadas, aplicando tecnolog\xEDas como java, nodejs, angular, vuejs entre otros y en algunos casos realizando tareas de an\xE1lisis y dise\xF1o de soluciones. He trabajo en grupos multiculturales, me gustan los retos y considero que una de mi fortaleza es el autoaprendizaje. </p><hr class="my-4 horizontal gray-light"><ul class="list-group"><li class="pt-0 text-sm border-0 list-group-item ps-0"><strong class="text-dark">Full Name:</strong> \xA0 Cesar Bernal </li><li class="text-sm border-0 list-group-item ps-0"><strong class="text-dark">Mobile:</strong> \xA0 (+51) 317 589 7994 </li><li class="text-sm border-0 list-group-item ps-0"><strong class="text-dark">Email:</strong> \xA0 cesbersi@gmail.com </li><li class="text-sm border-0 list-group-item ps-0"><strong class="text-dark">Location:</strong> \xA0 Colombia </li><li class="pb-0 border-0 list-group-item ps-0"><strong class="text-sm text-dark">Social:</strong> \xA0 <a class="py-0 mb-0 btn btn-github btn-simple ps-1 pe-2" href="https://github.com/cesbersi"><i class="fab fa-github fa-lg"></i></a><a class="py-0 mb-0 btn btn-linkedin btn-simple ps-1 pe-2" href="https://www.linkedin.com/in/cesar-bernal-42693791/"><i class="fab fa-linkedin fa-lg"></i></a><a class="py-0 mb-0 btn btn-tumblr btn-simple ps-1 pe-2" href="https://torre.co/cesbersi"><i class="fab fa-tumblr fa-lg"></i></a></li></ul></div>',2),j=[T];function P(c,h,d,s,t,l){return _(),y("div",A,j)}var N=x(z,[["render",P]]),O="/cesar.bernal.github.io/assets/diego_guzman.7ebeb5f2.jpg",W="/cesar.bernal.github.io/assets/marie.21329175.jpg",M="/cesar.bernal.github.io/assets/ivana-square.4f2ca50d.jpg",H="/cesar.bernal.github.io/assets/team-4.de45d842.jpg",B="/cesar.bernal.github.io/assets/team-3.185e3869.jpg",F="/cesar.bernal.github.io/assets/ScriptoCCM.a0522ad8.png",V="/cesar.bernal.github.io/assets/Mireservaenlinea.com.d1341fb3.png",I="/cesar.bernal.github.io/assets/mi-reserva.0f6e9207.png",D="/cesar.bernal.github.io/assets/globuscargo10.6257e4d9.png",G="/cesar.bernal.github.io/assets/Fotomisamigos.67dedb9e.png",U="/cesar.bernal.github.io/assets/Registro Llamadas.2772821c.png";const R={name:"ProjectsCard",props:{img:{type:String,default:""},number:{type:Number,default:0},title:{type:String,default:""},description:{type:String,default:""},imgTeam1:{type:String,default:""},imgTeam2:{type:String,default:""},imgTeam3:{type:String,default:""},imgTeam4:{type:String,default:""},titleTeam1:{type:String,default:""},titleTeam2:{type:String,default:""},titleTeam3:{type:String,default:""},titleTeam4:{type:String,default:""}}},J={class:"card card-blog card-plain"},K={class:"position-relative"},Q={class:"shadow-xl d-block border-radius-xl"},X=["src"],Y={class:"px-1 pb-0 card-body"},Z={class:"mb-2 text-sm text-gradient text-dark"},ee={href:"javascript:;"},se={class:"mb-4 text-sm"},te={class:"d-flex align-items-center justify-content-between"};function ae(c,h,d,s,t,l){return _(),y("div",J,[e("div",K,[e("a",Q,[e("img",{src:d.img,alt:"img-blur-shadow",class:"shadow img-fluid border-radius-xl"},null,8,X)])]),e("div",Y,[e("p",Z,"Proyecto #"+b(d.number),1),e("a",ee,[e("h5",null,b(d.title),1)]),e("p",se,b(d.description),1),e("div",te,[e("a",{type:"button",class:"mb-0 btn btn-outline-success btn-sm",onClick:h[0]||(h[0]=a=>c.$router.replace({name:"Project",params:{id:d.number}}))},"Ver proyecto")])])])}var ie=x(R,[["render",ae]]);const le={name:"ProfileOverview",components:{ProfileCard:N,VsudAvatar:C,ProjectsCard:ie},setup(){return{showMenu:!1,diego:O,marie:W,ivana:M,peterson:H,nick:B,scriptoCCM:F,mrl:V,globus:D,bgImg:$,mrlAdmin:I,fma:G,llamdas:U}},mounted(){this.$store.state.isAbsolute=!0,this.$store.state.isNavFixed=!1,E(),L()},beforeUnmount(){this.$store.state.isAbsolute=!1}},oe={class:"container-fluid"},re=S('<div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6" style="background-color:#ffffff69!important;backdrop-filter:blur(40px);"><div class="row gx-4"><div class="col-auto"><div class="avatar avatar-xl position-relative"><img src="'+q+'" alt="profile_image" class="shadow-sm w-80 border-radius-lg"></div></div><div class="col-auto my-auto"><div class="h-100"><h5 class="mb-1">Cesar Bernal</h5><p class="mb-0 text-sm font-weight-bold">Developer - Full stack</p></div></div><div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"></div></div></div>',1),ne={class:"py-4 container-fluid"},ce={class:"mt-3 row"},de={class:"mt-4 col-md-6"},me={class:"mt-4 col-md-6"},ue={class:"card h-100"},pe=e("div",{class:"p-3 pb-0 card-header"},[e("h6",{class:"mb-0"},"Comentarios")],-1),fe={class:"p-3 card-body"},he={class:"list-group"},ge={class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},be=S('<div class="d-flex align-items-start flex-column justify-content-center"><h6 class="mb-0 text-sm">Diego Guzman.</h6><p class="mb-0 text-xs">Machine Learning Engineer</p><p><a class="py-0 mb-0 btn btn-linkedin btn-simple ps-1 pe-2" href="https://www.linkedin.com/in/diegoarmando-guzman/"><i class="fab fa-linkedin fa-lg"></i></a></p></div>',1),ve=e("li",{class:"px-0 mb-2 border-0 list-group-item d-flex align-items-center"},[e("div",{class:"d-flex align-items-start flex-column justify-content-center"},[e("h6",{class:"mb-0 text-sm"}," C\xE9sar tiene la capacidad de resolver lo que se necesita. Su flexibilidad, la b\xFAsqueda de soluciones eficaces en corto tiempo y su constante deseo de aprender, lo llevan a ser un elemento clave en cualquier proyecto. Lo recomiendo!. ")])],-1),xe={class:"mt-4 row"},_e={class:"col-12"},ye={class:"mb-4 card"},Se=e("div",{class:"p-3 pb-0 card-header"},[e("h6",{class:"mb-1"},"Proyectos"),e("p",{class:"text-sm"},"Algunos proyectos")],-1),we={class:"p-3 card-body"},ke={class:"row"},qe={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},Ce={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},$e={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},Le={class:"mb-4 col-xl-3 col-md-6 mb-xl-0"},Ee={class:"mb-4 col-xl-3 col-md-6 mb-xl-0 mt-3"},ze={class:"mb-4 col-xl-3 col-md-6 mb-xl-0 mt-3"};function Ae(c,h,d,s,t,l){const a=v("profile-card"),n=v("vsud-avatar"),i=v("projects-card");return _(),y(k,null,[e("div",oe,[e("div",{class:"page-header min-height-250 border-radius-xl",style:w({backgroundImage:`url(${s.bgImg})`})},null,4),re]),e("div",ne,[e("div",ce,[e("div",de,[p(a)]),e("div",me,[e("div",ue,[pe,e("div",fe,[e("ul",he,[e("li",ge,[p(n,{class:"me-3",img:s.diego,alt:"kal","border-radius":"lg",shadow:"regular"},null,8,["img"]),be]),ve])])])])]),e("div",xe,[e("div",_e,[e("div",ye,[Se,e("div",we,[e("div",ke,[e("div",qe,[p(i,{img:s.scriptoCCM,number:1,title:"scriptoCCM",description:"Aplicaci\xF3n para gesti\xF3n y administraci\xF3n de comunicaciones efectivas con los clientes de los clientes. "},null,8,["img"])]),e("div",Ce,[p(i,{img:s.mrl,number:2,title:"mireservaenlinea.com",description:"Aplicaci\xF3n para gesti\xF3n y administraci\xF3n de reservas en l\xEDnea, agenda electr\xF3nica y recordatorios."},null,8,["img"])]),e("div",$e,[p(i,{img:s.mrlAdmin,number:3,title:"mireservaenlinea.com",description:"Administrador de usuarios, calendarios, profesionales, aforos, planes, notificaciones y reservas."},null,8,["img"])]),e("div",Le,[p(i,{img:s.globus,number:4,title:"GlobusCargo",description:"Proyecto para administrar env\xEDos desde y hacia USA, manteniendo la trazabilidad a los usuarios."},null,8,["img"])]),e("div",Ee,[p(i,{img:s.fma,number:5,title:"fotomisamigos",description:"Implementaci\xF3n de aplicaci\xF3n cuya funci\xF3n principal es la administraci\xF3n y gesti\xF3n de pedidos para fot\xF3grafos profesionales."},null,8,["img"])]),e("div",ze,[p(i,{img:s.llamdas,number:6,title:`registrollamadas.com
`,description:"Sistema para gesti\xF3n y control de llamadas, con visualizaciones en tiempo real y distribuci\xF3n inteligente entre los usuarios."},null,8,["img"])])])])])])])])],64)}var Ne=x(le,[["render",Ae]]);export{Ne as default};