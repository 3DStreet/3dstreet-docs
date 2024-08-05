"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[3632],{5600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=n(5893),r=n(1151);const i={sidebar_position:3},a="3DStreet Alpha Labs",d={id:"development/alpha-labs",title:"3DStreet Alpha Labs",description:"Check out some of our Alpha Labs features below -- these are features that are ready for testing and user feedback, but not ready for prime time. Try them out (with caution) and tell us how well they work and what we can do to make them better.",source:"@site/docs/development/alpha-labs.md",sourceDirName:"development",slug:"/development/alpha-labs",permalink:"/docs/development/alpha-labs",draft:!1,unlisted:!1,editUrl:"https://github.com/3dstreet/3dstreet-docs/tree/main/docs/development/alpha-labs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Git Repositories",permalink:"/docs/development/overview-developer-documentation"},next:{title:"About 3DStreet",permalink:"/docs/category/about-3dstreet"}},o={},h=[{value:"Resizing a street",id:"resizing-a-street",level:2},{value:"Adding and editing an intersection",id:"adding-and-editing-an-intersection",level:2},{value:"SVG Extrusion Component",id:"svg-extrusion-component",level:2},{value:"Add an image",id:"add-an-image",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"3dstreet-alpha-labs",children:"3DStreet Alpha Labs"}),"\n",(0,s.jsx)(t.p,{children:"Check out some of our Alpha Labs features below -- these are features that are ready for testing and user feedback, but not ready for prime time. Try them out (with caution) and tell us how well they work and what we can do to make them better."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:['Save a backup of your scene before trying these "Alpha Labs" experiments. 3DStreet is a ',(0,s.jsx)(t.a,{href:"https://www.3dstreet.org/docs/3dstreet-editor/saving-and-loading-scenes#beta-software",children:"Beta product"})," that may have bugs, and these Alpha Labs components are more likely to have bugs that could break your 3DStreet scene or prevent it from saving or loading."]})}),"\n",(0,s.jsx)(t.h2,{id:"resizing-a-street",children:"Resizing a street"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Add a new street from Streetmix using the Pro add entity panel"}),"\n",(0,s.jsx)(t.li,{children:"Select the parent layer of that new street"}),"\n",(0,s.jsxs)(t.li,{children:["In the right-hand properties panel, scroll down to find the ",(0,s.jsx)(t.code,{children:"Length"})," property. Change the value to your new street length (in meters)"]}),"\n",(0,s.jsx)(t.li,{children:'Click "synchronize" to see your settings change. (If synchronize is already true set to on, turn if off and on again)'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of editor changing street length.",src:n(6331).Z+"",width:"1024",height:"581"})}),"\n",(0,s.jsx)(t.h2,{id:"adding-and-editing-an-intersection",children:"Adding and editing an intersection"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Add a new Intersection using the Pro add entity bottom panel. The Intersection will instantiate with default settings"}),"\n",(0,s.jsx)(t.li,{children:'In the Layers left panel select the new "Intersection 90\xba" layer you created'}),"\n",(0,s.jsx)(t.li,{children:'Open the right-hand panel and scroll down to "Intersection" and click the down arrow'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of editor adding, selecting and editing intersection.",src:n(2089).Z+"",width:"2952",height:"1658"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Modify these following properties to adjust the intersection to match your scene conditions."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dimensions"}),(0,s.jsx)(t.td,{children:"Specifies the width and depth of the intersection. First value represents width, second value represents depth."}),(0,s.jsx)(t.td,{children:"'20 20'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sidewalk"}),(0,s.jsx)(t.td,{children:"Sets the width of the sidewalk at each side of the intersection. Values are set in the order of west, east, north, south."}),(0,s.jsx)(t.td,{children:"'0 0 0 0'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"northeastcurb"}),(0,s.jsx)(t.td,{children:"Sets the curb dimensions for the north east curb. Values are updated as width, then depth."}),(0,s.jsx)(t.td,{children:"'4 4'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"southwestcurb"}),(0,s.jsx)(t.td,{children:"Sets the curb dimensions for the south west curb. Values are updated as width, then depth."}),(0,s.jsx)(t.td,{children:"'4 4'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"southeastcurb"}),(0,s.jsx)(t.td,{children:"Sets the curb dimensions for the south east curb. Values are updated as width, then depth."}),(0,s.jsx)(t.td,{children:"'4 4'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"northwestcurb"}),(0,s.jsx)(t.td,{children:"Sets the curb dimensions for the north west curb. Values are updated as width, then depth."}),(0,s.jsx)(t.td,{children:"'4 4'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"stopsign"}),(0,s.jsx)(t.td,{children:"Sets if each side of the intersection has a stop sign. Values are set in the order of east, west, north, south. 0 is false, 1 is true."}),(0,s.jsx)(t.td,{children:"'0 0 0 0'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"trafficsignal"}),(0,s.jsx)(t.td,{children:"Sets if each side of the intersection has a traffic signal. Values are set in the order of east, west, north, south. 0 is false, 1 is true."}),(0,s.jsx)(t.td,{children:"'1 1 1 1'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"crosswalk"}),(0,s.jsx)(t.td,{children:"\u200b\u200bSets if each side of the intersection has a crosswalk. Values are set in the order of east, west, north, south. 0 is false, 1 is true."}),(0,s.jsx)(t.td,{children:"'1 1 1 1'"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"svg-extrusion-component",children:"SVG Extrusion Component"}),"\n",(0,s.jsxs)(t.p,{children:["3DStreet SVG import is designed to accept 1 closed path or geometry at a time in a simple SVG format. This component accepts a ",(0,s.jsx)(t.code,{children:"svgString"})," and creates a new entity with geometry extruded from the svg and applies the default mixin material grass. Extrusion can help to emulate the look of curbs and other surfaces. This method requires separates SVG imports for different parts of a scene."]}),"\n",(0,s.jsx)(t.h2,{id:"add-an-image",children:"Add an image"}),"\n",(0,s.jsx)(t.p,{children:"This code snippet creates a plane geometry with a user specified image path."}),"\n",(0,s.jsxs)(t.p,{children:["Replace the https://... part to a publicly accessible HTTPS URL pointing to your image. We recommend ",(0,s.jsx)(t.a,{href:"https://glitch.com/",children:"glitch.com"})," as a great web host for assets like this but any host that provides a public URL path is fine."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"newEl = document.createElement('a-entity')\nnewEl.setAttribute('geometry', 'primitive: plane; height: 10; width: 10;')\nnewEl.setAttribute('rotation', '-90 0 0')\nnewEl.setAttribute('data-layer-name', 'Image \u2022 User Specified Path')\nnewEl.setAttribute('material', 'src: url(https://cdn.glitch.global/a72f8f09-9d40-4560-8b00-a9481850c5e9/3D.St%20stacked%20icon.png?v=1717710211486);')\nparentEl = document.querySelector('#street-container')\nparentEl.appendChild(newEl)\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2089:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/add-edit-intersections-f7ea14c69d521bcc66388d5cb1c336c7.jpg"},6331:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/edit-street-length-607d17beb0fe8cb4b88c54d27be5e8f5.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);