import{d as e,L as t,u as i,r as n,b as o,j as r}from"./index-oLqDUwOF.js";const s=e.button`
  font-family: "Kumbh Sans Regular", sans-serif;
  position: relative;

  box-sizing: border-box;
  pointer-events: all;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 24px;

  height: 6vh;
  width: 20vw;
  min-width: 150px;

  margin: 1.5rem;
`;function a(){return r.jsxs("p",{style:{fontStyle:"italic",margin:"3rem 0",textAlign:"center"},children:["Note: The Lighthouse scores shown in this website are always taken in Navigation mode, utilizing Mobile as the device.",r.jsx("br",{}),"Ensuring the harshest conditions are always met."]})}e(t)`
  color: ${e=>e.theme.text};
  user-select: all;
  pointer-events: all;
`,e(s)`
  font-family: "Kumbh Sans Regular", sans-serif;
  position: relative;
  box-sizing: border-box;
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
`;const l=e.div`
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  gap: 1.25em;
  width: 100%;
  height: 100vh;
  padding: 30vw 10vw;
  box-sizing: border-box;

  z-index: 1;
`,c=e(s)`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-text);
  color: var(--color-background);
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 24px;

  height: 6vh;
  width: 20vw;
  min-width: 200px;

  margin: 1.5rem;
`;e.div`
  position: relative;
  font-family: "Kumbh Sans Regular", sans-serif;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  gap: 1.25em;
  width: 100%;
  height: 35vh;
  min-height: 15vh;
  padding: 7.5vw 10vw;
  box-sizing: border-box;

  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    padding: 5vw 7.5vw 35vw 7.5vw;
  }
`;const d=()=>{const{t:e,locale:t}=i(),[s,a]=n.useState("");n.useEffect(()=>{const i=setTimeout(()=>{console.log("set to",t),a(l(e))},0);return()=>clearTimeout(i)},[t]);const l=e=>{const i=[e("welcome",t)+"!",e("greeting1"),e("helloWorld")];return i[o(0,i.length)]};return r.jsx("article",{className:"title-div justify-around pt-2!",children:r.jsxs("section",{children:[r.jsx("h2",{className:"",children:s}),r.jsxs("p",{children:[e("title.part1")," ",r.jsx("span",{className:"text-accent",children:e("webDeveloper")})," ",e("title.part2")]}),r.jsx("p",{children:e("title.part3")}),r.jsx("p",{children:e("title.porfolioWip")}),r.jsx("p",{children:e("title.enjoy")})]})})};export{a as A,l as B,d as T,c as a};