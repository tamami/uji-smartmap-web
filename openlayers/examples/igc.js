"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8178],{69899:function(e,t,n){var r=n(12739),a=n(70277),o=n(41376),i=n(79847),u=n(95783),s=n(54354),l=n(69039),c=n(720),d=n(77138),g=n(77975),w=n(75469),f=n(5265),v=n(41372),m=n(42010),p=n(31250),h={"Clement Latour":"rgba(0, 0, 255, 0.7)","Damien de Baesnt":"rgba(0, 215, 255, 0.7)","Sylvain Dhonneur":"rgba(0, 165, 255, 0.7)","Tom Payne":"rgba(0, 255, 255, 0.7)","Ulrich Prinz":"rgba(0, 215, 255, 0.7)"},y={},Z=new u.Z,C=["data/igc/Clement-Latour.igc","data/igc/Damien-de-Baenst.igc","data/igc/Sylvain-Dhonneur.igc","data/igc/Tom-Payne.igc","data/igc/Ulrich-Prinz.igc"];function b(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){t(n.responseText)},n.send()}for(var P=new a.Z,L=0;L<C.length;++L)b(C[L],(function(e){var t=P.readFeatures(e,{featureProjection:"EPSG:3857"});Z.addFeatures(t)}));var T={start:1/0,stop:-1/0,duration:0};Z.on("addfeature",(function(e){var t=e.feature.getGeometry();T.start=Math.min(T.start,t.getFirstCoordinate()[2]),T.stop=Math.max(T.stop,t.getLastCoordinate()[2]),T.duration=T.stop-T.start}));var k=new v.Z({source:Z,style:function(e){var t=h[e.get("PLT")],n=y[t];return n||(n=new l.ZP({stroke:new c.Z({color:t,width:3})}),y[t]=n),n}}),E=new o.Z({layers:[new m.Z({source:new i.Z({attributions:['All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',i.h],url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"})}),k],target:"map",view:new s.ZP({center:[703365.7089403362,5714629.865071137],zoom:9})}),G=null,M=null,F=function(e){var t=Z.getClosestFeatureToCoordinate(e),n=document.getElementById("info");if(null===t)G=null,M=null,n.innerHTML="&nbsp;";else{var r=t.getGeometry().getClosestPoint(e);null===G?G=new w.Z(r):G.setCoordinates(r);var a=new Date(1e3*r[2]);n.innerHTML=t.get("PLT")+" ("+a.toUTCString()+")";var o=[e,[r[0],r[1]]];null===M?M=new f.Z(o):M.setCoordinates(o)}E.render()};E.on("pointermove",(function(e){if(!e.dragging){var t=E.getEventCoordinate(e.originalEvent);F(t)}})),E.on("click",(function(e){F(e.coordinate)}));var S=new c.Z({color:"rgba(255,0,0,0.9)",width:1}),D=new l.ZP({stroke:S,image:new d.Z({radius:5,fill:null,stroke:S})});k.on("postrender",(function(e){var t=(0,p.u3)(e);t.setStyle(D),null!==G&&t.drawGeometry(G),null!==M&&t.drawGeometry(M)}));var z=new v.Z({source:new u.Z,map:E,style:new l.ZP({image:new d.Z({radius:5,fill:new g.Z({color:"rgba(255,0,0,0.9)"})})})}),B=document.getElementById("time"),x=function(){var e=parseInt(B.value,10)/100,t=T.start+T.duration*e;Z.forEachFeature((function(e){var n=e.getGeometry().getCoordinateAtM(t,!0),a=e.get("highlight");void 0===a?(a=new r.Z(new w.Z(n)),e.set("highlight",a),z.getSource().addFeature(a)):a.getGeometry().setCoordinates(n)})),E.render()};B.addEventListener("input",x),B.addEventListener("change",x)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(69899)}]);
//# sourceMappingURL=igc.js.map