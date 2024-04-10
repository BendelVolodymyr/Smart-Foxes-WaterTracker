import{G as r,u as o,y as a,z as i,D as n,J as c,K as l,N as d,O as t}from"./index-06356bb4.js";function p(e){return r({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}const g=o.div`
  display: flex;
  flex-direction: column;
  background-image: image-set(url(${a}) 1x, url(${i}) 2x);
  background-position: center bottom 3px;
  background-repeat: no-repeat;
  background-size: auto;
  @media (min-width: ${e=>e.theme.screens.tab}) {
    justify-content: space-between;
    background-image: image-set(url(${n}) 1x, url(${c}) 2x);
    background-position: bottom -2px right -61px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: ${e=>e.theme.screens.desk}) {
    background-image: image-set(url(${l}) 1x, url(${d}) 2x);
    background-position: left;
    background-size: auto;
    background-repeat: no-repeat;
    flex-direction: row-reverse;
  }
`,m=o.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  padding-bottom: 276px;

  @media (min-width: ${e=>e.theme.screens.tab}) {
    width: 336px;
    padding-bottom: 180px;
  }

  @media (min-width: ${e=>e.theme.screens.desk}) {
    width: 384px;
    margin-right: 198px;
    padding-bottom: 135px;
    padding-top: 122px;
  }
`,h=o.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: ${({error:e})=>e?`1px solid ${t.lightTheme.colors.secondary.color2}`:`1px solid ${t.lightTheme.colors.secondary.color5}`};
  color: ${({error:e})=>e?` ${t.lightTheme.colors.secondary.color2}`:`${t.lightTheme.colors.primary.accent}`};

  background: ${e=>e.theme.colors.primary.bg};
  padding: 12px 36px 12px 10px;
  outline: none;
  margin-bottom: 4px;
  &::placeholder {
    color: ${e=>e.theme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: ${e=>e.theme.colors.primary.accent};
  }
`;export{p as F,h as I,g as S,m as a};
