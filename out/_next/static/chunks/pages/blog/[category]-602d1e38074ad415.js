(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1725:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[category]",function(){return r(3245)}])},7279:function(e,t,r){"use strict";var i=r(5893),n=r(8152);t.Z=e=>{let{checkedCategory:t,categoryList:r,onClick:l}=e;return(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(10%, auto))",gap:"10px"},children:r.map(e=>(0,i.jsx)(n.Z,{value:e,checked:e===t,onClick:l},e))})}},4946:function(e,t,r){"use strict";var i=r(5893);t.Z=e=>{let{children:t}=e;return(0,i.jsx)("div",{style:{position:"relative",display:"grid",gap:"clamp(1.375rem, 1.2rem + 0.89vw, 2rem)",marginTop:"32px",marginInline:"auto",paddingInline:"clamp(0, 1.2rem + 0.89vw, 2rem)",gridTemplateColumns:"repeat(auto-fit, minmax(22rem, 1fr))"},children:t})}},331:function(e,t,r){"use strict";var i=r(5893),n=r(5953),l=r(8152);t.Z=e=>{let{postMatter:t}=e;return(0,i.jsxs)("div",{style:{position:"relative",maxWidth:"37rem",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",borderRadius:"16px",padding:"1.25rem",backgroundColor:"#fff",border:"1px solid #e6e6e6",wordBreak:"break-word",textDecoration:"none",cursor:"pointer"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{size:"small",value:t.category,checked:!0}),(0,i.jsx)("h1",{style:{fontSize:"1.5rem",fontWeight:500,marginTop:"8px"},children:t.title})]}),(0,i.jsx)("div",{style:{margin:"32px 0"},children:(0,i.jsx)("p",{style:{color:n.O.gray,display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",lineHeight:"clamp(1.25rem, 1rem + 1.5vw, 1.8rem)",fontSize:"clamp(0.92rem, 1.5vw, 1rem)",WebkitBoxOrient:"vertical",WebkitLineClamp:5},children:t.summary})}),(0,i.jsx)("p",{style:{color:n.O.darkGray},children:t.date})]})}},8152:function(e,t,r){"use strict";var i=r(5893),n=r(5953);t.Z=e=>{let{size:t="mid",value:r,checked:l,onClick:o}=e;return(0,i.jsx)("div",{style:{maxWidth:"100%",display:"inline-flex",alignItems:"cneter",justifyContent:"center",fontSize:"mid"===t?"1rem":"0.8125rem",padding:"mid"===t?"12px 20px":"8px 16px",borderRadius:"24px",cursor:"pointer",color:l?"#fff":n.O.black,backgroundColor:l?n.O.yellow:"#fff"},onClick:()=>o?o(r):null,children:(0,i.jsx)("span",{children:r})})}},3245:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m}});var i=r(5893),n=r(7294),l=r(1163),o=r(7484),a=r.n(o),s=r(9675),c=r.n(s),d=r(7279),u=r(4946),p=r(331),m=!0;t.default=e=>{let{category:t,posts:r,categoryList:o}=e,s=(0,l.useRouter)(),[m,f]=(0,n.useState)([]),[x,g]=(0,n.useState)(t);return(0,n.useEffect)(()=>{let e=r.map(e=>{let t=c()(e).data;return{...t,date:a()(t.date).format("YYYY-MM-DD")}});f(e)},[r]),console.log(m),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{fontSize:"18px",fontWeight:500,marginBottom:"8px"},children:"Search Post by Categories"}),(0,i.jsx)(d.Z,{checkedCategory:x,categoryList:o,onClick:e=>{if(x===e){g(null),s.push("/blog");return}g(e),s.push("/blog/".concat(e))}})]}),(0,i.jsx)(u.Z,{children:m.map(e=>(0,i.jsx)(p.Z,{postMatter:e},e.id))})]})}},3596:function(){}},function(e){e.O(0,[146,378,774,888,179],function(){return e(e.s=1725)}),_N_E=e.O()}]);