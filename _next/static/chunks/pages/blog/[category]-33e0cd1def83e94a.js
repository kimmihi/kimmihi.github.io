(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{21725:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[category]",function(){return r(23245)}])},37279:function(e,t,r){"use strict";var i=r(85893),n=r(78152);t.Z=e=>{let{checkedCategory:t,categoryList:r,onClick:l}=e;return(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(5rem, auto))",gap:"1rem"},children:r.map(e=>(0,i.jsx)(n.Z,{value:e,checked:e===t,onClick:l},e))})}},4946:function(e,t,r){"use strict";var i=r(85893);t.Z=e=>{let{children:t}=e;return(0,i.jsx)("div",{style:{position:"relative",display:"grid",gap:"clamp(1.375rem, 1.2rem + 0.89vw, 2rem)",marginTop:"32px",marginInline:"auto",paddingInline:"clamp(0, 1.2rem + 0.89vw, 2rem)",gridTemplateColumns:"repeat(auto-fit, minmax(18rem, 1fr))"},children:t})}},60331:function(e,t,r){"use strict";var i=r(85893),n=r(41664),l=r.n(n),o=r(65953),s=r(78152);t.Z=e=>{let{postMatter:t}=e;return(0,i.jsx)(l(),{href:"/blog/posts/".concat(t.id),style:{width:"100%",maxWidth:"37rem",textDecoration:"none"},children:(0,i.jsxs)("div",{style:{minHeight:"24rem",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",borderRadius:"16px",padding:"1.25rem",backgroundColor:"#fff",border:"1px solid #e6e6e6",cursor:"pointer"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{size:"small",value:t.category,checked:!0}),(0,i.jsx)("h1",{style:{fontSize:"1.5rem",fontWeight:500,marginTop:"8px"},children:t.title})]}),(0,i.jsx)("div",{style:{margin:"32px 0"},children:(0,i.jsx)("p",{style:{color:o.O.gray,display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",lineHeight:"clamp(1.25rem, 1rem + 1.5vw, 1.8rem)",fontSize:"clamp(0.92rem, 1.5vw, 1rem)",WebkitBoxOrient:"vertical",WebkitLineClamp:5},children:t.summary})}),(0,i.jsx)("p",{style:{color:o.O.darkGray},children:t.date})]})})}},78152:function(e,t,r){"use strict";var i=r(85893),n=r(65953);t.Z=e=>{let{size:t="mid",value:r,checked:l,onClick:o}=e;return(0,i.jsx)("div",{style:{minWidth:"3rem",display:"inline-flex",alignItems:"cneter",justifyContent:"center",fontSize:"mid"===t?"1rem":"0.8125rem",padding:"mid"===t?"12px 20px":"8px 16px",borderRadius:"24px",cursor:"pointer",color:l?"#fff":n.O.black,backgroundColor:l?n.O.yellow:"#fff"},onClick:()=>o?o(r):null,children:(0,i.jsx)("span",{children:r})})}},23245:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f}});var i=r(85893),n=r(67294),l=r(11163),o=r(27484),s=r.n(o),a=r(9675),c=r.n(a),d=r(65953),u=r(37279),m=r(4946),p=r(60331),f=!0;t.default=e=>{let{category:t,matterPostList:r,categoryList:o}=e,a=(0,l.useRouter)(),[f,x]=(0,n.useState)([]),[h,g]=(0,n.useState)(t);return(0,n.useEffect)(()=>{let e=r.map(e=>{let t=c()(e).data;return{...t,date:s()(t.date).format("YYYY-MM-DD")}});x(e)},[r]),console.log(f),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{fontSize:"18px",fontWeight:500,marginBottom:"8px",color:d.O.darkGray},children:"Search Post by Categories"}),(0,i.jsx)(u.Z,{checkedCategory:h,categoryList:o,onClick:e=>{if(h===e){g(null),a.push("/blog");return}g(e),a.push("/blog/".concat(e))}})]}),(0,i.jsx)(m.Z,{children:f.map(e=>(0,i.jsx)(p.Z,{postMatter:e},e.id))})]})}},33596:function(){}},function(e){e.O(0,[146,378,664,774,888,179],function(){return e(e.s=21725)}),_N_E=e.O()}]);