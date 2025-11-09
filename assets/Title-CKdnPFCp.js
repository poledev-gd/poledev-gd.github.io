import{d as e,L as i,u as t,r as n,j as o,b as r}from"./index-BuwwOo9j.js";const s=e.button`
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
`;function a(){return o.jsxs("p",{style:{fontStyle:"italic",margin:"3rem 0",textAlign:"center"},children:["Note: The Lighthouse scores shown in this website are always taken in Navigation mode, utilizing Mobile as the device.",o.jsx("br",{}),"Ensuring the harshest conditions are always met."]})}e(i)`
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
`,c=e.img`
  /* @media screen and (max-width: 968px) {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
  } */
`;e.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  min-width: 400px;

  box-sizing: border-box;

  p {
    padding: 0 4vw;
  }

  @media screen and (max-width: 968px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }
`,e.div`
  position: relative;

  display: flex;
  flex-flow: row;
  justify-content: space-around;

  gap: 1.25em;
  width: 100%;
  min-height: 100vh;
  padding: 20vh 10vw;
  box-sizing: border-box;

  z-index: 5;

  ${c} {
    position: relative;
    display: block;
    width: 100%;
    object-fit: contain;
    z-index: -1;
  }

  @media screen and (max-width: 968px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }

  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;const d=e(s)`
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
`,e.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;

  padding: 1.25em 0;
`,e.p`
  color: ${e=>e.theme.accent};
  font-weight: 600;
  letter-spacing: 1px;
`,e.div`
  display: flex;
  width: 100%;
  justify-content: center;

  &::before {
    content: " ";
    width: 80%;
    height: 1px;

    margin: 1.3rem 0;
    background: ${e=>e.theme.text};
  }
`;const h=()=>{const{t:e,locale:i}=t(),s=n.useRef(null);return n.useEffect(()=>{s.current&&(s.current.innerHTML=(()=>{const i=[e("welcome")+"!",e("greeting1"),e("helloWorld")];return i[r(0,i.length)]})())},[i]),o.jsx("article",{className:"title-div justify-around pt-2!",children:o.jsxs("section",{children:[o.jsx("h2",{className:"",ref:s}),o.jsxs("p",{children:[e("title.part1")," ",o.jsx("span",{className:"text-accent",children:e("webDeveloper")})," ",e("title.part2")]}),o.jsx("p",{children:"This is my corner of the web in which i showcase the projects, ideas and concepts I have been working on throughout my journey."}),o.jsx("p",{children:"This portfolio is still a work in progress."}),o.jsx("p",{children:"I hope you enjoy your stay :)"})]})})};export{a as A,l as B,h as T,d as a};