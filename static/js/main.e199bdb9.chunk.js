(this["webpackJsonpdata-viz-react"]=this["webpackJsonpdata-viz-react"]||[]).push([[0],{233:function(t,e,a){},234:function(t,e,a){},534:function(t,e,a){"use strict";a.r(e);var n=a(3),r=a.n(n),i=a(19),l=a.n(i),s=(a(233),a(73)),o=a(23),c=a(24),h=a(11),u=a(25),d=a(26),p=(a(234),a(2)),b=a.p+"static/media/red.421c438b.csv",f=a.p+"static/media/white.c24cf293.csv",y=a.p+"static/media/red-white.43fbeefc.csv",g=a(1),v=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).onClick=function(){var e=t.props,a=e.label;(0,e.onClick)(a)},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.onClick,e=this.props,a=e.activeTab,n=e.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),Object(g.jsx)("button",{className:r,onClick:t,children:n})}}]),a}(n.Component),m=(a(236),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onClickTabItem=function(t){n.setState({activeTab:t})},n.state={activeTab:n.props.children[0].props.label},n}return Object(c.a)(a,[{key:"render",value:function(){var t=this.onClickTabItem,e=this.props.children,a=this.state.activeTab;return Object(g.jsxs)("div",{className:"tabs",children:[Object(g.jsx)("div",{className:"tab-list",children:e.map((function(e){var n=e.props.label;return Object(g.jsx)(v,{activeTab:a,label:n,onClick:t},n)}))}),Object(g.jsx)("div",{className:"tab-content",children:e.map((function(t){if(t.props.label===a)return t.props.children}))})]})}}]),a}(n.Component)),j=a(35),x=(a(533),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).redAlc=n.redAlc.bind(Object(h.a)(n)),n.redDen=n.redDen.bind(Object(h.a)(n)),n.whiteAlc=n.whiteAlc.bind(Object(h.a)(n)),n.whiteDen=n.whiteDen.bind(Object(h.a)(n)),n.bothAlc=n.bothAlc.bind(Object(h.a)(n)),n.bothDen=n.bothDen.bind(Object(h.a)(n)),n.drawBoxPlot=n.drawBoxPlot.bind(Object(h.a)(n)),n.state={red_quality:[],red_alcohol:[],red_density:[],white_quality:[],white_alcohol:[],white_density:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"drawBoxPlot",value:function(t,e){var a=[],n=[],r=[],i=[],l=10,o=30,c=30,h=40,u=460-h-o,d=600-l-c;function g(t,e,a,n,r,i){var l=t.sort(p.a),s=p.e(l,.25),o=p.e(l,.5),c=p.e(l,.75),h=c-s,d=s-1.5*h,b=c+1.5*h,f=u/12+i*(u/12*2);e.append("line").attr("x1",f).attr("x2",f).attr("y1",a(d)).attr("y2",a(b)).attr("stroke","black"),e.append("rect").attr("x",f-25).attr("y",a(c)).attr("height",a(s)-a(c)).attr("width",50).attr("class",r).attr("stroke","black").style("fill",n),e.selectAll("toto").data([d,o,b]).enter().append("line").attr("x1",f-25).attr("x2",f+25).attr("y1",(function(t){return a(t)})).attr("y2",(function(t){return a(t)})).attr("stroke","black"),e.select("."+r).style("border","1em")}if("red"===e){var v={3:[],4:[],5:[],6:[],7:[],8:[]},m={3:[],4:[],5:[],6:[],7:[],8:[]};p.d(b).then((function(e){for(var b=0;b<e.length;b++){a.push(e[b].quality),n.push(e[b].alcohol);var f=parseFloat(e[b].alcohol),y=parseFloat(e[b].density);"3"===e[b].quality&&(v[3].push(f),m[3].push(y)),"4"===e[b].quality&&(v[4].push(f),m[4].push(y)),"5"===e[b].quality&&(v[5].push(f),m[5].push(y)),"6"===e[b].quality&&(v[6].push(f),m[6].push(y)),"7"===e[b].quality&&(v[7].push(f),m[7].push(y)),"8"===e[b].quality&&(v[8].push(f),m[8].push(y)),"9"===e[b].quality&&(v[9].push(f),m[9].push(y))}for(var j=0;j<a.length;j++)a[j]=parseFloat(a[j]),n[j]=parseFloat(n[j]);r=a.filter((function(t,e){return a.indexOf(t)===e})),i.push.apply(i,Object(s.a)(r)),i.sort((function(t,e){return t-e})),Object.keys(v).map((function(t,e){v[t].sort((function(t,e){return t-e}))})),Object.keys(m).map((function(t,e){m[t].sort((function(t,e){return t-e}))})),document.getElementsByClassName("graph")&&(p.h(".graph").remove(),console.log("graph removed"));var x=p.h("#redWine").append("svg").attr("width",u+h+o).attr("height",d+l+c).attr("class","graph").append("g").attr("transform","translate("+h+","+l+")");if(1===t){var O=p.f().range([0,u]).domain(i).paddingInner(1).paddingOuter(.5);x.append("g").attr("transform","translate(0,"+d+")").call(p.b(O)),x.append("text").attr("transform","translate("+u/2+" ,"+(d+l+20)+")").style("text-anchor","middle").text("Quality");var w=p.g().domain([7,16]).range([d,0]);x.append("g").call(p.c(w)),g(v[3],x,w,"green","first",0),g(v[4],x,w,"yellow","second",1),g(v[5],x,w,"blue","third",2),g(v[6],x,w,"orange","fourth",3),g(v[7],x,w,"black","fifth",4),g(v[8],x,w,"purple","sixth",5)}else if(2===t){O=p.f().range([0,u]).domain(i).paddingInner(1).paddingOuter(.5);x.append("g").attr("transform","translate(0,"+d+")").call(p.b(O)),x.append("text").attr("transform","translate("+u/2+" ,"+(d+l+20)+")").style("text-anchor","middle").text("Quality");w=p.g().domain([.985,1.005]).range([d,0]);x.append("g").call(p.c(w)),g(m[3],x,w,"green","first",0),g(m[4],x,w,"yellow","second",1),g(m[5],x,w,"blue","third",2),g(m[6],x,w,"orange","fourth",3),g(m[7],x,w,"black","fifth",4),g(m[8],x,w,"purple","sixth",5)}}))}else if("white"===e){var j={3:[],4:[],5:[],6:[],7:[],8:[],9:[]},x={3:[],4:[],5:[],6:[],7:[],8:[],9:[]};p.d(f).then((function(e){for(var n=0;n<e.length;n++){a.push(e[n].quality);var b=parseFloat(e[n].alcohol),f=parseFloat(e[n].density);"3"===e[n].quality&&(j[3].push(b),x[3].push(f)),"4"===e[n].quality&&(j[4].push(b),x[4].push(f)),"5"===e[n].quality&&(j[5].push(b),x[5].push(f)),"6"===e[n].quality&&(j[6].push(b),x[6].push(f)),"7"===e[n].quality&&(j[7].push(b),x[7].push(f)),"8"===e[n].quality&&(j[8].push(b),x[8].push(f)),"9"===e[n].quality&&(j[9].push(b),x[9].push(f))}for(var y=0;y<a.length;y++)a[y]=parseFloat(a[y]);r=a.filter((function(t,e){return a.indexOf(t)===e})),i.push.apply(i,Object(s.a)(r)),i.sort((function(t,e){return t-e})),Object.keys(j).map((function(t,e){j[t].sort((function(t,e){return t-e}))})),Object.keys(x).map((function(t,e){x[t].sort((function(t,e){return t-e}))})),document.getElementsByClassName("graph")&&(p.h(".graph").remove(),console.log("graph removed"));var v=p.h("#whiteWine").append("svg").attr("width",u+h+o).attr("height",d+l+c).attr("class","graph").append("g").attr("transform","translate("+h+","+l+")");if(1===t){var m=p.f().range([0,u]).domain(i).paddingInner(1).paddingOuter(.5);v.append("g").attr("transform","translate(0,"+d+")").call(p.b(m)),v.append("text").attr("transform","translate("+u/2+" ,"+(d+l+20)+")").style("text-anchor","middle").text("Quality");var O=p.g().domain([6,16]).range([d,0]);v.append("g").call(p.c(O)),g(j[3],v,O,"green","first",0),g(j[4],v,O,"yellow","second",1),g(j[5],v,O,"blue","third",2),g(j[6],v,O,"orange","fourth",3),g(j[7],v,O,"black","fifth",4),g(j[8],v,O,"purple","sixth",5)}else if(2===t){m=p.f().range([0,u]).domain(i).paddingInner(1).paddingOuter(.5);v.append("g").attr("transform","translate(0,"+d+")").call(p.b(m)),v.append("text").attr("transform","translate("+u/2+" ,"+(d+l+20)+")").style("text-anchor","middle").text("Quality");O=p.g().domain([.985,1.005]).range([d,0]);v.append("g").call(p.c(O)),g(x[3],v,O,"green","first",0),g(x[4],v,O,"yellow","second",1),g(x[5],v,O,"blue","third",2),g(x[6],v,O,"orange","fourth",3),g(x[7],v,O,"black","fifth",4),g(x[8],v,O,"purple","sixth",5)}}))}else if("combined"==e){var O={3:[],4:[],5:[],6:[],7:[],8:[],9:[]},w={3:[],4:[],5:[],6:[],7:[],8:[],9:[]};p.d(y).then((function(e){for(var n=0;n<e.length;n++){a.push(e[n].quality);var b=parseFloat(e[n].alcohol),f=parseFloat(e[n].density);"3"===e[n].quality&&(O[3].push(b),w[3].push(f)),"4"===e[n].quality&&(O[4].push(b),w[4].push(f)),"5"===e[n].quality&&(O[5].push(b),w[5].push(f)),"6"===e[n].quality&&(O[6].push(b),w[6].push(f)),"7"===e[n].quality&&(O[7].push(b),w[7].push(f)),"8"===e[n].quality&&(O[8].push(b),w[8].push(f)),"9"===e[n].quality&&(O[9].push(b),w[9].push(f))}for(var y=0;y<a.length;y++)a[y]=parseFloat(a[y]);r=a.filter((function(t,e){return a.indexOf(t)===e})),i.push.apply(i,Object(s.a)(r)),i.sort((function(t,e){return t-e})),Object.keys(O).map((function(t,e){O[t].sort((function(t,e){return t-e}))})),Object.keys(w).map((function(t,e){w[t].sort((function(t,e){return t-e}))})),document.getElementsByClassName("graph")&&(p.h(".graph").remove(),console.log("graph removed"));var v=p.h("#combined").append("svg").attr("width",u+h+o).attr("height",d+l+c).attr("class","graph").append("g").attr("transform","translate("+h+","+l+")");if(1===t){var m=p.f().range([0,u]).domain(i).paddingInner(1).paddingOuter(.5);v.append("g").attr("transform","translate(0,"+d+")").call(p.b(m)),v.append("text").attr("transform","translate("+u/2+" ,"+(d+l+20)+")").style("text-anchor","middle").text("Quality");var j=p.g().domain([6,16]).range([d,0]);v.append("g").call(p.c(j)),g(O[3],v,j,"green","first",0),g(O[4],v,j,"yellow","second",1),g(O[5],v,j,"blue","third",2),g(O[6],v,j,"orange","fourth",3),g(O[7],v,j,"black","fifth",4),g(O[8],v,j,"purple","sixth",5)}else if(2===t){m=p.f().range([0,u]).domain(i).paddingInner(1).paddingOuter(.5);v.append("g").attr("transform","translate(0,"+d+")").call(p.b(m)),v.append("text").attr("transform","translate("+u/2+" ,"+(d+l+20)+")").style("text-anchor","middle").text("Quality");j=p.g().domain([.982,1.005]).range([d,0]);v.append("g").call(p.c(j)),g(w[3],v,j,"green","first",0),g(w[4],v,j,"yellow","second",1),g(w[5],v,j,"blue","third",2),g(w[6],v,j,"orange","fourth",3),g(w[7],v,j,"black","fifth",4),g(w[8],v,j,"purple","sixth",5)}}))}}},{key:"redAlc",value:function(){this.setState({alcohol:!0,density:!1}),this.drawBoxPlot(1,"red")}},{key:"redDen",value:function(){this.setState({alcohol:!1,density:!0}),this.drawBoxPlot(2,"red")}},{key:"whiteAlc",value:function(){this.setState({alcohol:!0,density:!1}),this.drawBoxPlot(1,"white")}},{key:"whiteDen",value:function(){this.setState({alcohol:!1,density:!0}),this.drawBoxPlot(2,"white")}},{key:"bothAlc",value:function(){this.setState({alcohol:!0,density:!1}),this.drawBoxPlot(1,"combined")}},{key:"bothDen",value:function(){this.setState({alcohol:!1,density:!0}),this.drawBoxPlot(2,"combined")}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{id:"heading",children:"Wine Quality vs. Alcohol & Density"}),Object(g.jsxs)(m,{children:[Object(g.jsxs)("div",{label:"Home",children:["The ",Object(g.jsx)("em",{children:"Home"})," Page! ",Object(g.jsx)("br",{})]}),Object(g.jsxs)("div",{label:"Red",children:[Object(g.jsx)(j.a,{variant:"outline-primary",onClick:this.redAlc,children:"Draw Quality vs. Alcohol"})," ",Object(g.jsx)(j.a,{variant:"outline-secondary",onClick:this.redDen,children:"Draw Quality vs. Density"}),Object(g.jsx)("div",{id:"redWine"}),Object(g.jsx)("svg",{})]}),Object(g.jsxs)("div",{label:"White",children:[Object(g.jsx)(j.a,{variant:"outline-primary",onClick:this.whiteAlc,children:"Draw Quality vs. Alcohol"})," ",Object(g.jsx)(j.a,{variant:"outline-secondary",onClick:this.whiteDen,children:"Draw Quality vs. Density"}),Object(g.jsx)("div",{id:"whiteWine"}),Object(g.jsx)("svg",{})]}),Object(g.jsxs)("div",{label:"Red + White",children:[Object(g.jsx)(j.a,{variant:"outline-primary",onClick:this.bothAlc,children:"Draw Quality vs. Alcohol"})," ",Object(g.jsx)(j.a,{variant:"outline-secondary",onClick:this.bothDen,children:"Draw Quality vs. Density"}),Object(g.jsx)("div",{id:"combined"}),Object(g.jsx)("svg",{})]})]})]})}}]),a}(r.a.Component)),O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,535)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,l=e.getTTFB;a(t),n(t),r(t),i(t),l(t)}))};l.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),O()}},[[534,1,2]]]);
//# sourceMappingURL=main.e199bdb9.chunk.js.map