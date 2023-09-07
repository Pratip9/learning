"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[339],{67339:function(e,t,a){a.r(t);var n=a(93433),r=a(29439),o=a(72791),s=a(59434),c=a(56534),l=a(86549),i=a(19254),u=a(73401),d=a(14325),m=a(70272),p=a(38302),f=a(93188),h=a(66828),x=a(26513),g=a(97736),j=a(37487),v=a(64880),Z=a(28021),C=a(44279),y=a(63144),N=a(8755),S=a(52417),P=a(76082),F=a(62149),I=a(31334),b=a(54470),A=a(25878),k=a(55471),w=a(46627),z=a(94575),B=a(80184);t.default=function(){var e=(0,s.I0)(),t=(0,v.k6)(),a=(0,c.VY)(),D=(0,z.Z)(),U=(0,v.$B)().params.id,W=(0,s.v9)((function(e){return e.productDetails})),q=W.error,E=W.product,O=(0,s.v9)((function(e){return e.deleteUpdateProduct})),R=O.loading,T=O.error,L=O.isUpdated,M=(0,o.useState)(""),H=(0,r.Z)(M,2),K=H[0],V=H[1],Y=(0,o.useState)(0),$=(0,r.Z)(Y,2),_=$[0],G=$[1],J=(0,o.useState)(""),Q=(0,r.Z)(J,2),X=Q[0],ee=Q[1],te=(0,o.useState)(""),ae=(0,r.Z)(te,2),ne=ae[0],re=ae[1],oe=(0,o.useState)(!1),se=(0,r.Z)(oe,2),ce=se[0],le=se[1],ie=(0,o.useState)(0),ue=(0,r.Z)(ie,2),de=ue[0],me=ue[1],pe=(0,o.useState)([]),fe=(0,r.Z)(pe,2),he=fe[0],xe=fe[1],ge=(0,o.useState)(""),je=(0,r.Z)(ge,2),ve=je[0],Ze=je[1],Ce=(0,o.useState)([]),ye=(0,r.Z)(Ce,2),Ne=ye[0],Se=ye[1],Pe=(0,o.useState)([]),Fe=(0,r.Z)(Pe,2),Ie=Fe[0],be=Fe[1],Ae=(0,o.useRef)(),ke=(0,o.useState)(!1),we=(0,r.Z)(ke,2),ze=we[0],Be=we[1];return(0,o.useEffect)((function(){E&&E._id!==U?e((0,j.KL)(U)):(V(E.name),ee(E.description),G(E.price),re(""),Ze(E.info),me(E.Stock),be(E.images)),q&&(a.error(q),e((0,j.b9)())),T&&(a.error(T),e((0,j.b9)())),L&&(a.success("Product Updated Successfully"),t.push("/admin/products"),e({type:Z.Ab}))}),[e,a,q,t,L,U,E,T]),(0,B.jsx)(B.Fragment,{children:R?(0,B.jsx)(i.Z,{}):(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l.Z,{title:"Create Product"}),(0,B.jsxs)("div",{className:D.updateProduct,children:[(0,B.jsx)("div",{className:"".concat(ze?D.toggleBox1:D.firstBox1),children:(0,B.jsx)(g.Z,{})}),(0,B.jsxs)("div",{className:D.secondBox1,children:[(0,B.jsx)("div",{className:D.navBar1,children:(0,B.jsx)(w.Z,{toggleHandler:function(){console.log("toggle"),Be(!ze)}})}),(0,B.jsx)("div",{className:"".concat(D.formContainer," ").concat(D.formContainer2),children:(0,B.jsxs)("form",{className:"".concat(D.form," ").concat(D.form2),encType:"multipart/form-data",children:[(0,B.jsx)(m.Z,{className:D.avatar,children:(0,B.jsx)(F.Z,{})}),(0,B.jsx)(p.Z,{variant:"h5",component:"h1",className:D.heading,children:"Create Product"}),(0,B.jsx)(f.Z,{variant:"outlined",fullWidth:!0,className:"".concat(D.nameInput," ").concat(D.textField),label:"Product Name",required:!0,value:K,onChange:function(e){return V(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(C.Z,{position:"end",children:(0,B.jsx)(N.Z,{style:{fontSize:20,color:"#414141"}})})}}),(0,B.jsx)(f.Z,{variant:"outlined",label:"Price",value:_,required:!0,fullWidth:!0,className:"".concat(D.passwordInput," ").concat(D.textField),onChange:function(e){return G(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(C.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,B.jsx)(P.Z,{})})}}),(0,B.jsx)(f.Z,{variant:"outlined",label:"Stock",value:de,required:!0,className:"".concat(D.passwordInput," ").concat(D.textField),onChange:function(e){return me(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(C.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,B.jsx)(d.Z,{})})}}),(0,B.jsx)(f.Z,{variant:"outlined",label:"Prodcut Info",value:ve,required:!0,className:"".concat(D.passwordInput," ").concat(D.textField),onChange:function(e){return Ze(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(C.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,B.jsx)(A.Z,{})})}}),(0,B.jsxs)("div",{className:D.selectOption,children:[!ce&&(0,B.jsx)(p.Z,{variant:"body2",className:D.labelText,children:"Choose Category"}),(0,B.jsx)(h.Z,{className:D.formControl,children:(0,B.jsxs)(b.Z,{variant:"outlined",fullWidth:!0,value:ne,onChange:function(e){re(e.target.value),le(!0)},className:D.select,inputProps:{name:"category",id:"category-select"},MenuProps:{classes:{paper:D.menu},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},children:[!ne&&(0,B.jsx)(k.Z,{value:"",children:(0,B.jsx)("em",{children:"Choose Category"})}),["Category1","Category2","Category3","Category4","Category5","Category6","Category7","Category8","Category9","Category10","Category11"].map((function(e){return(0,B.jsx)(k.Z,{value:e,children:e},e)}))]})})]}),(0,B.jsx)(f.Z,{variant:"outlined",fullWidth:!0,className:D.descriptionInput,label:"Product Description",multiline:!0,rows:1,value:X,onChange:function(e){return ee(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(C.Z,{position:"end",children:(0,B.jsx)(u.Z,{className:D.descriptionIcon})})}}),(0,B.jsxs)("div",{className:D.root,children:[(0,B.jsx)("div",{className:D.imgIcon,children:(0,B.jsx)(I.Z,{fontSize:"large",style:{fontSize:40}})}),(0,B.jsx)("input",{type:"file",name:"avatar",className:D.input,accept:"image/*",onChange:function(e){var t=Array.from(e.target.files);xe([]),Se([]),be([]),t.forEach((function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&(Se((function(e){return[].concat((0,n.Z)(e),[t.result])})),xe((function(e){return[].concat((0,n.Z)(e),[t.result])})))},t.readAsDataURL(e)}))},multiple:!0,style:{display:"none"},ref:Ae}),(0,B.jsx)("label",{htmlFor:"avatar-input",children:(0,B.jsx)(x.Z,{variant:"contained",color:"default",className:D.uploadAvatarButton,startIcon:(0,B.jsx)(S.Z,{style:{color:"#FFFFFF"}}),onClick:function(){Ae.current.click()},children:(0,B.jsx)("p",{className:D.uploadAvatarText,children:"Upload Images"})})})]}),Ne.length>0?(0,B.jsx)(y.Z,{className:D.imageArea,children:Ne&&Ne.map((function(e,t){return(0,B.jsx)("img",{src:e,alt:"Product Preview",className:D.image},t)}))}):(0,B.jsx)(y.Z,{className:D.imageArea,children:Ie&&Ie.map((function(e,t){return(0,B.jsx)("img",{src:e.url,alt:"Old Product Preview",className:D.image},t)}))}),(0,B.jsx)(x.Z,{variant:"contained",className:D.loginButton,fullWidth:!0,onClick:function(t){t.preventDefault();var a=new FormData;a.set("name",K),a.set("price",_),a.set("description",X),a.set("category",ne),a.set("Stock",de),a.set("info",ve),he.forEach((function(e){a.append("images",e)})),e((0,j.nM)(U,a))},disabled:!!R,children:"Create"})]})})]})]})]})})})}}}]);
//# sourceMappingURL=339.3c7b6d15.chunk.js.map