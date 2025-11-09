import{j as e,d as i}from"./index-BuwwOo9j.js";const t=i.img`
  position: relative;

  width: 60%;
  object-fit: cover;
  border-radius: 5px;
  z-index: 4;
  transition: transform 0.35s ease-out;

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,n=i.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;

  justify-content: inherit;
  align-items: inherit;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    gap: 1rem;
  }
`,a=i.p`
  font-size: 1.5rem;
  height: 100%;
  margin: auto !important;
  font-style: italic;
`,l=i=>e.jsxs(n,{children:[i.text&&"right"!==i.align?e.jsx(a,{children:i.text}):null,e.jsx(t,{className:"shadow-xl",src:i.imgSrc,alt:i.imgAlt,loading:"lazy"}),i.text&&"right"===i.align?e.jsx(a,{children:i.text}):null]}),r=i.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: ${e=>"right"===e.align?"flex-end":"left"===e.align?"flex-start":"center"};
  align-items: ${e=>"right"===e.align?"flex-end":"left"===e.align?"flex-start":"center"};
  text-align: ${e=>e.align||"center"};

  margin: 1rem 0;

  width: 80%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  p, h1, ${t} {
    text-align: ${e=>e.align||"center"};
    align-self: ${e=>"right"===e.align?"flex-end":"left"===e.align?"flex-start":"center"};
    margin: 2rem 0;
  }
`;export{r as A,l as a};