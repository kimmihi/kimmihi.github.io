(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(2575)}])},2575:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return x},default:function(){return f}});var i=t(5893),n=t(7294),l=t(7484),o=t.n(l),a=t(9675),s=t.n(a),d=t(5953),c=e=>{let{size:r="mid",value:t,checked:n,onClick:l}=e;return(0,i.jsx)("div",{style:{maxWidth:"100%",display:"inline-flex",alignItems:"cneter",justifyContent:"center",fontSize:"mid"===r?"1rem":"0.8125rem",padding:"mid"===r?"12px 20px":"8px 16px",borderRadius:"24px",cursor:"pointer",color:n?"#fff":d.O.black,backgroundColor:n?d.O.yellow:"#fff"},onClick:()=>l?l(t):null,children:(0,i.jsx)("span",{children:t})})},m=e=>{let{checkedCategory:r,categoryList:t,onClick:n}=e;return(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(10%, auto))",gap:"10px"},children:t.map(e=>(0,i.jsx)(c,{value:e,checked:e===r,onClick:n},e))})},p=e=>{let{children:r}=e;return(0,i.jsx)("div",{style:{position:"relative",display:"grid",gap:"clamp(1.375rem, 1.2rem + 0.89vw, 2rem)",marginTop:"32px",marginInline:"auto",paddingInline:"clamp(0, 1.2rem + 0.89vw, 2rem)",gridTemplateColumns:"repeat(auto-fit, minmax(22rem, 1fr))"},children:r})},u=e=>{let{postMatter:r}=e;return(0,i.jsxs)("div",{style:{position:"relative",maxWidth:"37rem",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",borderRadius:"16px",padding:"1.25rem",backgroundColor:"#fff",border:"1px solid #e6e6e6",wordBreak:"break-word",textDecoration:"none",cursor:"pointer"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(c,{size:"small",value:r.category,checked:!0}),(0,i.jsx)("h1",{style:{fontSize:"1.5rem",fontWeight:500,marginTop:"8px"},children:r.title})]}),(0,i.jsx)("div",{style:{margin:"32px 0"},children:(0,i.jsx)("p",{style:{color:d.O.gray,display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",lineHeight:"clamp(1.25rem, 1rem + 1.5vw, 1.8rem)",fontSize:"clamp(0.92rem, 1.5vw, 1rem)",WebkitBoxOrient:"vertical",WebkitLineClamp:5},children:r.summary})}),(0,i.jsx)("p",{style:{color:d.O.darkGray},children:r.date})]})},x=!0,f=e=>{let{posts:r,categoryList:t}=e,[l,a]=(0,n.useState)(null),[d,c]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=r.map(e=>{let r=s()(e).data;return{...r,date:o()(r.date).format("YYYY-MM-DD")}});c(e)},[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{fontSize:"18px",fontWeight:500,marginBottom:"8px"},children:"Search Post by Categories"}),(0,i.jsx)(m,{checkedCategory:l,categoryList:t,onClick:e=>{if(console.log(e),l===e){a(null);return}a(e)}})]}),(0,i.jsx)(p,{children:d.map(e=>(0,i.jsx)(u,{postMatter:e},e.id))})]})}},3596:function(){}},function(e){e.O(0,[146,378,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);