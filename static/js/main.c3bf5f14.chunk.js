(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{117:function(e,a,t){e.exports=t(158)},122:function(e,a,t){},158:function(e,a,t){"use strict";t.r(a),t.d(a,"store",(function(){return Qe}));var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=(t(122),t(123),t(46)),i=t(24),m=t(40),p=t(190),u=t(193),s=t(214),E=t(194),f=t(195),b=t(210),d=t(71),g=t(95),k=t.n(g),O=t(196),h=function(e){var a=e.handleDrawerToggle,t=y();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{position:"fixed",className:t.appBar},r.a.createElement(u.a,null,r.a.createElement(s.a,{lgUp:!0},r.a.createElement(E.a,{color:"inherit","aria-label":"open mobile menu",edge:"start",onClick:a,className:t.menuButton},r.a.createElement(k.a,null))),r.a.createElement(f.a,{disableGutters:!0},r.a.createElement(b.a,{display:"flex",alignItems:"center"},r.a.createElement(i.b,{to:"/"},r.a.createElement(d.a,null,"Pokedex App")),r.a.createElement(b.a,{flexGrow:1}),r.a.createElement(s.a,{mdDown:!0},r.a.createElement(b.a,{mr:3},r.a.createElement(i.b,{to:"/search"},r.a.createElement(d.a,null,"Wyszukiwarka"))),r.a.createElement(i.b,{to:"/info"},r.a.createElement(d.a,null,"Informacje"))))))),r.a.createElement(u.a,null))},y=Object(O.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:e.spacing(2)}}})),v=t(197),j=t(198),C=t(161),S=t(199),N=t(67),w=t.n(N),_=Object(O.a)((function(e){return{drawerPaper:{width:300},closeButton:{position:"fixed",top:5,left:12}}})),x=function(e){var a=e.mobileOpen,t=e.handleDrawerToggle,n=_();return r.a.createElement(v.a,{variant:"temporary",open:a,onClose:t,classes:{paper:n.drawerPaper}},r.a.createElement(u.a,null),r.a.createElement(E.a,{color:"inherit","aria-label":"close mobile menu",edge:"start",onClick:t,className:n.closeButton},r.a.createElement(w.a,null)),r.a.createElement(j.a,null,r.a.createElement(i.b,{to:"/",onClick:t},r.a.createElement(C.a,{button:!0},r.a.createElement(S.a,{primary:"Strona g\u0142\xf3wna"}))),r.a.createElement(i.b,{to:"/search",onClick:t},r.a.createElement(C.a,{button:!0},r.a.createElement(S.a,{primary:"Wyszukiwarka"}))),r.a.createElement(i.b,{to:"/info",onClick:t},r.a.createElement(C.a,{button:!0},r.a.createElement(S.a,{primary:"Informacje"})))))},T=t(7),P=t(200),R=function(e){for(var a=e.number,t=[],n=0;n<a;n++)t.push(r.a.createElement(P.a,{key:n,animation:"wave",variant:"text",height:40}));return r.a.createElement(r.a.Fragment,null,t)},A=t(201),F=t(202),I=[{name:"all"},{name:"normal",url:"https://pokeapi.co/api/v2/type/1/"},{name:"fighting",url:"https://pokeapi.co/api/v2/type/2/"},{name:"flying",url:"https://pokeapi.co/api/v2/type/3/"},{name:"poison",url:"https://pokeapi.co/api/v2/type/4/"},{name:"ground",url:"https://pokeapi.co/api/v2/type/5/"},{name:"rock",url:"https://pokeapi.co/api/v2/type/6/"},{name:"bug",url:"https://pokeapi.co/api/v2/type/7/"},{name:"ghost",url:"https://pokeapi.co/api/v2/type/8/"},{name:"steel",url:"https://pokeapi.co/api/v2/type/9/"},{name:"fire",url:"https://pokeapi.co/api/v2/type/10/"},{name:"water",url:"https://pokeapi.co/api/v2/type/11/"},{name:"grass",url:"https://pokeapi.co/api/v2/type/12/"},{name:"electric",url:"https://pokeapi.co/api/v2/type/13/"},{name:"psychic",url:"https://pokeapi.co/api/v2/type/14/"},{name:"ice",url:"https://pokeapi.co/api/v2/type/15/"},{name:"dragon",url:"https://pokeapi.co/api/v2/type/16/"},{name:"dark",url:"https://pokeapi.co/api/v2/type/17/"},{name:"fairy",url:"https://pokeapi.co/api/v2/type/18/"}],z=Object(O.a)((function(e){return{btn:{borderColor:"#006c74"}}})),L=function(e){var a=e.onClickFn,t=Object(T.c)((function(e){return e.pokemons.formOptions.type})),n=z();return r.a.createElement(A.a,{container:!0,spacing:2},I.map((function(e){return r.a.createElement(A.a,{key:e.name,item:!0,xs:4,lg:6},r.a.createElement(F.a,{variant:"outlined",className:n.btn,disabled:t===e.name,onClick:function(){return a(e.name,e.url)}},e.name))})))},W=t(33),D=t(203),U=t(215),H=t(211),M=t(204),Y=t(48),B=t.n(Y),K=t(68),G=t(69),J=t.n(G);function V(){return function(){var e=Object(K.a)(B.a.mark((function e(a){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"ASYNC_ACTION_START"}),e.prev=1,e.next=4,J.a.get("https://pokeapi.co/api/v2/pokemon/?limit=964");case 4:t=e.sent,a({type:"ASYNC_ACTION_FINISH"}),a({type:"POKEMONS_FETCH_SUCCESS",payload:{results:t.data.results,count:t.data.count}}),a(q(1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a({type:"ASYNC_ACTION_ERROR"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}()}function $(e,a){return function(){var t=Object(K.a)(B.a.mark((function t(n){var r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"ASYNC_ACTION_START"}),t.prev=1,t.next=4,J.a.get(e);case 4:r=t.sent,n({type:"ASYNC_ACTION_FINISH"}),n({type:"POKEMONS_TYPE_FETCH_SUCCESS",payload:{pokemon:r.data.pokemon,count:r.data.pokemon.length,name:a,url:e}}),n(q(1)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:"ASYNC_ACTION_ERROR"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}function q(e){return{type:"SET_DATA_FOR_RENDER",payload:e}}var Q=function(){var e=Object(T.c)((function(e){return e.pokemons.formOptions.sort})),a=Object(T.b)(),t=Object(T.c)((function(e){return e.pokemons.formOptions.type})),n=Object(T.c)((function(e){return e.pokemons.formOptions.url})),o=Object(T.c)((function(e){return e.pokemons.formOptions.name})),c=X();return r.a.createElement(D.a,{variant:"filled",className:c.formControl},r.a.createElement(U.a,{id:"sort-label"},"Sortuj"),r.a.createElement(H.a,{labelId:"sort-label",id:"sort-label-select",value:e,onChange:function(e){a(function(e,a,t,n){return"basic"===e?"all"===a?function(e){e(V())}:function(e){e($(t,n))}:function(a){a({type:"SORT",payload:e}),a(q(1))}}(e.target.value,t,n,o))}},r.a.createElement(M.a,{value:"basic"},"Domy\u015blnie"),r.a.createElement(M.a,{value:"a-z"},"nazwa a-z"),r.a.createElement(M.a,{value:"z-a"},"nazwa z-a")))},X=Object(O.a)((function(e){return{formControl:Object(W.a)({marginRight:e.spacing(1),marginTop:e.spacing(2),minWidth:128},e.breakpoints.up("lg"),{minWidth:228})}})),Z=function(){var e=Object(T.b)(),a=Object(T.c)((function(e){return e.pokemons.formOptions.pageLimit})),t=ee();return r.a.createElement(D.a,{variant:"filled",className:t.formControl},r.a.createElement(U.a,{id:"sort-label"},"pokazuj na stronie"),r.a.createElement(H.a,{labelId:"sort-label",id:"sort-label-select",value:a,onChange:function(a){e(function(e){return function(a){a({type:"SET_PAGE_LIMIT",payload:e}),a(q(1))}}(a.target.value))}},r.a.createElement(M.a,{value:10},"10"),r.a.createElement(M.a,{value:20},"20"),r.a.createElement(M.a,{value:30},"30"),r.a.createElement(M.a,{value:40},"40")))},ee=Object(O.a)((function(e){return{formControl:Object(W.a)({marginRight:e.spacing(1),marginTop:e.spacing(2),minWidth:134},e.breakpoints.up("lg"),{minWidth:228})}})),ae=Object(O.a)((function(e){return{drawer:{width:300,flexShrink:0},drawerPaper:{width:300}}})),te=function(){var e=ae(),a=Object(T.b)();return r.a.createElement("nav",{className:e.drawer,"aria-label":"pokemon section filter"},r.a.createElement(v.a,{variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement(u.a,null),r.a.createElement(f.a,null,r.a.createElement(b.a,{mt:6},r.a.createElement(b.a,{mb:6},r.a.createElement(Z,null),r.a.createElement(Q,null)),r.a.createElement(L,{onClickFn:function(e,t){a("all"===e?V():$(t,e))}})))))},ne=t(205),re=t(160),oe=function(){var e=ce(),a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],c=t[1],i=Object(T.b)(),m=function(){c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{variant:"contained",onClick:function(){c(!0)}},"Poka\u017c filtry"),r.a.createElement(ne.a,{fullScreen:!0,open:o,TransitionComponent:le,onClose:m},r.a.createElement(p.a,{position:"fixed",className:e.appBar},r.a.createElement(u.a,null,r.a.createElement(E.a,{color:"inherit","aria-label":"open mobile filter modal",edge:"start",onClick:m},r.a.createElement(w.a,null)),r.a.createElement(d.a,null,"Wybierz typ pokemona"))),r.a.createElement(u.a,null),r.a.createElement(f.a,null,r.a.createElement(b.a,{mt:2},r.a.createElement(L,{onClickFn:function(e,a){c(!1),i("all"===e?V():$(a,e))}})))))},ce=Object(O.a)((function(e){return{appBar:{backgroundColor:"#006c74"},btn:{borderColor:"#006c74"},dialog:{width:300}}})),le=r.a.forwardRef((function(e,a){return r.a.createElement(re.a,Object.assign({direction:"up",ref:a},e))})),ie=t(206),me=t(207),pe=t(208),ue=t(100),se=t.n(ue),Ee=t(101),fe=t.n(Ee),be=Object(O.a)((function(){return{img:function(e){return{width:e.size,height:e.size,display:"inline-block"}},icon:function(e){return{width:e.size,height:e.size}}}})),de=function(e){var a=e.pokemonID,t=e.name,n=e.size,o=be({size:n}),c="https://raw.githubusercontent.com/codenights/ultimate-pokedex/master/app/public/artwork/".concat(a,".png");return r.a.createElement(se.a,{className:o.img,src:c,alt:"".concat(t," image"),loader:r.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(P.a,{animation:"wave",variant:"rect",width:n,height:n})),unloader:r.a.createElement(fe.a,{className:o.icon})})},ge=Object(O.a)((function(e){return{card:{backgroundColor:"#F5F5F5",textAlign:"center",position:"relative",height:"100%"},typography:{fontWeight:400,fontSize:"1.15rem",marginTop:5}}})),ke=function(e){var a=e.name,t=e.url,n=ge(),o=t.substring(34,t.length-1);return r.a.createElement(A.a,{item:!0,xs:6,sm:4,md:3,lg:2},r.a.createElement(ie.a,{className:n.card},r.a.createElement(me.a,null,r.a.createElement(i.b,{to:{pathname:"/pokemon/".concat(a),state:{pokemonUrl:t}}},r.a.createElement(pe.a,null,r.a.createElement(de,{size:110,pokemonID:o,name:a}),r.a.createElement(d.a,{variant:"h6",component:"h3",className:n.typography},a))))))},Oe=function(e){var a=e.pokemonListForRender;return r.a.createElement(A.a,{container:!0,spacing:3},a.map((function(e){return r.a.createElement(ke,{key:e.hasOwnProperty("pokemon")?e.pokemon.name:e.name,name:e.hasOwnProperty("pokemon")?e.pokemon.name:e.name,url:e.hasOwnProperty("pokemon")?e.pokemon.url:e.url})})))},he=t(212),ye=function(){var e=Object(T.b)(),a=Object(T.c)((function(e){return e.pokemons.pokemonPagination.totalPages})),t=Object(T.c)((function(e){return e.pokemons.pokemonPagination.currentPage}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{onChange:function(a,t){e(q(t))},count:a,boundaryCount:1,shape:"rounded",siblingCount:1,page:t}))},ve=function(){var e=Object(T.b)(),a=Object(T.c)((function(e){return e.async.isLoading})),t=Object(T.c)((function(e){return e.async.isError})),o=Object(T.c)((function(e){return e.pokemons.pokemonListForRender})),c=Object(T.c)((function(e){return e.pokemons.pokemonPagination})),l=je();return Object(n.useEffect)((function(){e(V())}),[e]),r.a.createElement("div",{className:l.root},r.a.createElement(s.a,{mdDown:!0},r.a.createElement(te,null)),r.a.createElement("main",{className:l.content},r.a.createElement(f.a,null,t?r.a.createElement("p",null,"upp co\u015b posz\u0142o nie tak"):null,r.a.createElement(b.a,{display:"flex",alignItems:"center",mt:3},r.a.createElement(s.a,{lgUp:!0},r.a.createElement(oe,null)),r.a.createElement(b.a,{flexGrow:"1"}),r.a.createElement(d.a,null,"Strona ",c.currentPage," /",c.totalPages)),r.a.createElement(s.a,{lgUp:!0},r.a.createElement(Z,null),r.a.createElement(Q,null)),a?r.a.createElement(R,{number:12}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{mt:3,mb:3},r.a.createElement(Oe,{pokemonListForRender:o})),r.a.createElement(b.a,{display:"flex",justifyContent:"center",mt:6,mb:4},r.a.createElement(ye,null))))))},je=Object(O.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1}}})),Ce=Object(O.a)((function(e){return{property:{fontWeight:"300",color:"#797979",width:160},value:{fontWeight:500}}})),Se=function(e){var a=e.pokemon,t=e.value,n=Ce();return r.a.createElement(b.a,{mt:1,display:"flex"},r.a.createElement(d.a,{className:n.property},t,":"),r.a.createElement(d.a,{className:n.value},a[t]))},Ne=function(e){var a=e.name,t=we();return r.a.createElement(d.a,{variant:"h4",component:"h1",align:"center",className:t.name},a)},we=Object(O.a)((function(e){return{name:{textTransform:"capitalize"}}})),_e=t(209),xe=Object(O.a)((function(e){return{subtitle:{fontWeight:"400",marginTop:e.spacing(3)}}})),Te=function(e){var a=e.subtitle,t=xe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h5",className:t.subtitle},a),r.a.createElement(_e.a,null))},Pe=(Object(O.a)((function(e){return{statisticsBar:{backgroundColor:"#e6e6e6",height:27,width:"100%",borderRadius:4},statisticsBarValue:{backgroundColor:"#006c74",height:"100%",padding:"2px 10px",color:"#e6e6e6",boxSizing:"border-box",borderRadius:4}}})),Object(O.a)((function(e){var a;return{container:{marginBottom:e.spacing(5)},value:{fontWeight:500},statisticsName:(a={color:"#797979",fontWeight:"300"},Object(W.a)(a,e.breakpoints.up("sm"),{width:220}),Object(W.a)(a,"width",100),a)}}))),Re=function(e){var a=Object(T.b)(),t=Object(T.c)((function(e){return e.async.isLoading})),o=Object(T.c)((function(e){return e.async.isError})),c=Object(T.c)((function(e){return e.pokemons.singlePokemon})),l=Pe(),i=e.match.params.name;return Object(n.useEffect)((function(){var e="https://pokeapi.co/api/v2/pokemon/".concat(i);a(function(e){return function(){var a=Object(K.a)(B.a.mark((function a(t){var n;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"ASYNC_ACTION_START"}),a.prev=1,a.next=4,J.a.get(e);case 4:n=a.sent,t({type:"ASYNC_ACTION_FINISH"}),t({type:"SINGLE_POKEMON_FETCH_SUCCESS",payload:n.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),t({type:"ASYNC_ACTION_ERROR"});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(e))}),[i]),r.a.createElement(f.a,{maxWidth:"sm",className:l.container},o?r.a.createElement("p",null,"upp co\u015b posz\u0142o nie tak"):null,t?r.a.createElement(b.a,{mt:6},r.a.createElement(R,{number:10})):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{mt:4,mb:3,display:"flex",justifyContent:"center"},r.a.createElement(de,{pokemonID:c.id,name:c.name,size:200})),r.a.createElement(Ne,{name:c.name}),r.a.createElement(b.a,{mt:3,mb:3},r.a.createElement(Te,{subtitle:"About"}),r.a.createElement(Se,{pokemon:c,value:"weight"}),r.a.createElement(Se,{pokemon:c,value:"height"}),r.a.createElement(Se,{pokemon:c,value:"base_experience"}),r.a.createElement(Te,{subtitle:"Types"}),r.a.createElement(b.a,{mt:2,mb:2,display:"flex"},c.types?c.types.map((function(e){return r.a.createElement(b.a,{mr:5,key:e.type.name},r.a.createElement(d.a,{key:e.type.name,className:l.value},e.type.name))})):null),r.a.createElement(Te,{subtitle:"Abilities"}),r.a.createElement(b.a,{mt:2,mb:2,display:"flex"},c.abilities?c.abilities.map((function(e){return r.a.createElement(b.a,{mr:5,key:e.ability.name},r.a.createElement(d.a,{className:l.value},e.ability.name))})):null))))},Ae=function(){return r.a.createElement("p",null,"info")},Fe=t(216),Ie=t(213),ze=Object(O.a)((function(e){return{input:{backgroundColor:"#F5F5F5",width:"100%",padding:"8px 9px 9px",borderRadius:"4px",marginRight:15}}})),Le=function(){var e=Object(T.b)(),a=Object(T.c)((function(e){return e.pokemons.pokemonsFound})),t=Object(n.useState)(""),o=Object(l.a)(t,2),c=o[0],i=o[1],m=Object(n.useState)(!1),p=Object(l.a)(m,2),u=p[0],s=p[1],E=ze();Object(n.useEffect)((function(){e({type:"CLEAR_SEARCH_POKEMONS"})}),[]);return r.a.createElement(f.a,null,r.a.createElement(b.a,{mt:4,mb:4},r.a.createElement("form",{onSubmit:function(a){s(!0),a.preventDefault(),c.length>2&&e({type:"SEARCH_POKEMONS",payload:c})},className:E.form},r.a.createElement(b.a,{display:"flex"},r.a.createElement(Fe.a,{autoFocus:!0,className:E.input,placeholder:"wpisz przynajmniej trzy znaki",inputProps:{"aria-label":"wpisz nazwe szukanego pokemona"},value:c,onChange:function(e){s(!1),i(e.target.value)}}),r.a.createElement(F.a,{color:"primary",type:"submit",variant:"contained"},"search")),u&&c.length<3?r.a.createElement(b.a,{mt:4},r.a.createElement(Ie.a,{severity:"error"},"wpisz przynajmniej 3 znaki")):null)),a.length>0?r.a.createElement(Oe,{pokemonListForRender:a}):r.a.createElement(r.a.Fragment,null,u&&c.length>2&&r.a.createElement(b.a,{mt:4},r.a.createElement(Ie.a,{severity:"error"},"nic nie znaleziono"))))},We=function(){return r.a.createElement(f.a,null,r.a.createElement("p",null,"nie ma takiej strony"))};var De=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],c=function(){o(!t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(h,{handleDrawerToggle:c}),r.a.createElement(x,{mobileOpen:t,handleDrawerToggle:c}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ve}),r.a.createElement(m.a,{path:"/pokemon/:name",component:Re}),r.a.createElement(m.a,{path:"/info",component:Ae}),r.a.createElement(m.a,{path:"/search",component:Le}),r.a.createElement(m.a,{path:"*",component:We}))))},Ue=t(35),He=t(104),Me=t(14),Ye={allPokemons:[],pokemonList:[],pokemonListForRender:[],pokemonsFound:[],singlePokemon:{},pokemonPagination:{currentPage:1,pokemonsCount:0,totalPages:0},formOptions:{type:"all",sort:"basic",url:"",name:"",pageLimit:20}},Be=function(e){return function(a,t){var n=a.name?a.name.toUpperCase():a.pokemon.name.toUpperCase(),r=t.name?t.name.toUpperCase():t.pokemon.name.toUpperCase(),o=0;return n>r?o=1:n<r&&(o=-1),"a-z"===e?o:-1*o}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"POKEMONS_FETCH_SUCCESS":return Object(Me.a)({},e,{allPokemons:Object(He.a)(a.payload.results),pokemonList:a.payload.results,pokemonPagination:Object(Me.a)({},e.pokemonPagination,{pokemonsCount:a.payload.count}),formOptions:Object(Me.a)({},e.formOptions,{type:"all",sort:"basic"})});case"POKEMONS_TYPE_FETCH_SUCCESS":return Object(Me.a)({},e,{pokemonList:a.payload.pokemon,pokemonPagination:Object(Me.a)({},e.pokemonPagination,{pokemonsCount:a.payload.count}),formOptions:Object(Me.a)({},e.formOptions,{type:a.payload.name,sort:"basic",url:a.payload.url,name:a.payload.name})});case"SET_DATA_FOR_RENDER":var t=(a.payload-1)*e.formOptions.pageLimit,n=Math.ceil(e.pokemonPagination.pokemonsCount/e.formOptions.pageLimit);return Object(Me.a)({},e,{pokemonListForRender:e.pokemonList.slice(t,t+e.formOptions.pageLimit),pokemonPagination:Object(Me.a)({},e.pokemonPagination,{currentPage:a.payload,totalPages:n})});case"SINGLE_POKEMON_FETCH_SUCCESS":return Object(Me.a)({},e,{singlePokemon:a.payload});case"SORT":return Object(Me.a)({},e,{pokemonList:e.pokemonList.sort(Be(a.payload)),formOptions:Object(Me.a)({},e.formOptions,{sort:a.payload})});case"SET_PAGE_LIMIT":return Object(Me.a)({},e,{formOptions:Object(Me.a)({},e.formOptions,{pageLimit:a.payload})});case"SEARCH_POKEMONS":return Object(Me.a)({},e,{pokemonsFound:e.allPokemons.filter((function(e){return e.name.trim().toUpperCase().indexOf(a.payload.toUpperCase())>-1}))});case"CLEAR_SEARCH_POKEMONS":return Object(Me.a)({},e,{pokemonsFound:[]});default:return e}},Ge={isLoading:!1,isError:!1},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ASYNC_ACTION_START":return Object(Me.a)({},e,{isLoading:!0,isError:!1});case"ASYNC_ACTION_ERROR":return Object(Me.a)({},e,{isLoading:!1,isError:!0});case"ASYNC_ACTION_FINISH":return Object(Me.a)({},e,{isLoading:!1,isError:!1});default:return e}},Ve=Object(Ue.combineReducers)({pokemons:Ke,async:Je}),$e=t(102),qe=t(103);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=Object(Ue.createStore)(Ve,Object($e.composeWithDevTools)(Object(Ue.applyMiddleware)(qe.a)));c.a.render(r.a.createElement(T.a,{store:Qe},r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.c3bf5f14.chunk.js.map