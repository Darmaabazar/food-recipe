"use strict";(self.webpackChunkfood_recipe=self.webpackChunkfood_recipe||[]).push([[524],{579:(n,r,e)=>{var A=e(72),i=e.n(A),t=e(825),o=e.n(t),a=e(659),l=e.n(a),s=e(56),B=e.n(s),m=e(540),c=e.n(m),d=e(113),E=e.n(d),g=e(16),p={};p.styleTagTransform=E(),p.setAttributes=B(),p.insert=l().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=c(),i()(g.A,p),g.A&&g.A.locals&&g.A.locals},16:(n,r,e)=>{e.d(r,{A:()=>a});var A=e(354),i=e.n(A),t=e(314),o=e.n(t)()(i());o.push([n.id,"* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; }\n  @media only screen and (max-width: 68.75em) {\n    html {\n      font-size: 50%; } }\n\nbody {\n  font-family: 'Nunito Sans', sans-serif;\n  font-weight: 400;\n  line-height: 1.6;\n  color: #655A56;\n  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: calc(100vh - 2 * 4vw); }\n\n.container {\n  max-width: 120rem;\n  margin: 4vw auto;\n  background-color: #fff;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);\n  display: grid;\n  grid-template-rows: 10rem minmax(100rem, auto);\n  grid-template-columns: 1.1fr 2fr 1.1fr;\n  grid-template-areas: \"head head head\" \"list recipe shopping\"; }\n  @media only screen and (max-width: 68.75em) {\n    .container {\n      width: 100%;\n      margin: 0;\n      border-radius: 0; } }\n\n.btn, .btn-small, .btn-small:link, .btn-small:visited {\n  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n  border-radius: 10rem;\n  border: none;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all .2s; }\n  .btn:hover, .btn-small:hover {\n    transform: scale(1.05); }\n  .btn:focus, .btn-small:focus {\n    outline: none; }\n  .btn > *:first-child, .btn-small > *:first-child {\n    margin-right: 1rem; }\n\n.btn {\n  padding: 1.3rem 3rem;\n  font-size: 1.4rem; }\n  .btn svg {\n    height: 2.25rem;\n    width: 2.25rem;\n    fill: currentColor; }\n\n.btn-small, .btn-small:link, .btn-small:visited {\n  font-size: 1.3rem;\n  padding: 1rem 1.75rem;\n  text-decoration: none; }\n  .btn-small svg, .btn-small:link svg, .btn-small:visited svg {\n    height: 1.5rem;\n    width: 1.5rem;\n    fill: currentColor; }\n\n.btn-inline {\n  color: #F59A83;\n  font-size: 1.2rem;\n  border: none;\n  background-color: #F9F5F3;\n  padding: .8rem 1.2rem;\n  border-radius: 10rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all .2s; }\n  .btn-inline svg {\n    height: 1.5rem;\n    width: 1.5rem;\n    fill: currentColor;\n    margin: 0 .2rem; }\n  .btn-inline span {\n    margin: 0 .4rem; }\n  .btn-inline:hover {\n    color: #F48982;\n    background-color: #F2EFEE; }\n  .btn-inline:focus {\n    outline: none; }\n\n.btn-tiny {\n  height: 1.75rem;\n  width: 1.75rem;\n  border: none;\n  background: none;\n  cursor: pointer; }\n  .btn-tiny svg {\n    height: 100%;\n    width: 100%;\n    fill: #F59A83;\n    transition: all .3s; }\n  .btn-tiny:focus {\n    outline: none; }\n  .btn-tiny:hover svg {\n    fill: #F48982;\n    transform: translateY(-1px); }\n  .btn-tiny:active svg {\n    fill: #F48982;\n    transform: translateY(0); }\n  .btn-tiny:not(:last-child) {\n    margin-right: .3rem; }\n\n.heading-2 {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: #F59A83;\n  text-transform: uppercase;\n  margin-bottom: 2.5rem;\n  text-align: center;\n  transform: skewY(-3deg); }\n\n.copyright {\n  color: #968B87;\n  font-size: 1.2rem;\n  margin-top: auto; }\n\n.link:link,\n.link:visited {\n  color: #968B87; }\n\n.loader {\n  margin: 5rem auto;\n  text-align: center; }\n  .loader svg {\n    height: 5.5rem;\n    width: 5.5rem;\n    fill: #F59A83;\n    transform-origin: 44% 50%;\n    animation: rotate 1.5s infinite linear; }\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n.header {\n  grid-area: head;\n  background-color: #F9F5F3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .header__logo {\n    margin-left: 4rem;\n    height: 4.5rem;\n    display: block; }\n\n.search {\n  background-color: #fff;\n  border-radius: 10rem;\n  display: flex;\n  align-items: center;\n  padding-left: 3rem;\n  transition: all .3s; }\n  .search:focus-within {\n    transform: translateY(-2px);\n    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); }\n  .search__field {\n    border: none;\n    background: none;\n    font-family: inherit;\n    color: inherit;\n    font-size: 1.7rem;\n    width: 30rem; }\n    .search__field:focus {\n      outline: none; }\n    .search__field::placeholder {\n      color: #DAD0CC; }\n\n.likes {\n  position: relative;\n  align-self: stretch;\n  padding: 0 !important; }\n  .likes__field {\n    cursor: pointer;\n    padding: 0 4rem;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    transition: all .3s; }\n    .likes__field:hover {\n      background-color: #F2EFEE; }\n  .likes__panel:hover,\n  .likes__field:hover + .likes__panel {\n    visibility: visible;\n    opacity: 1; }\n  .likes__icon {\n    fill: #F59A83;\n    height: 3.75rem;\n    width: 3.75rem; }\n  .likes__panel {\n    position: absolute;\n    right: 0;\n    top: 10rem;\n    z-index: 10;\n    padding: 2rem 0;\n    width: 34rem;\n    background-color: #fff;\n    box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);\n    visibility: hidden;\n    opacity: 0;\n    transition: all .5s .2s; }\n\n.results,\n.likes {\n  padding: 3rem 0; }\n  .results__list,\n  .likes__list {\n    list-style: none; }\n  .results__link:link, .results__link:visited,\n  .likes__link:link,\n  .likes__link:visited {\n    display: flex;\n    align-items: center;\n    padding: 1.5rem 3rem;\n    transition: all .3s;\n    border-right: 1px solid #fff;\n    text-decoration: none; }\n  .results__link:hover,\n  .likes__link:hover {\n    background-color: #F9F5F3;\n    transform: translateY(-2px); }\n  .results__link--active,\n  .likes__link--active {\n    background-color: #F9F5F3; }\n  .results__fig,\n  .likes__fig {\n    flex: 0 0 5.5rem;\n    border-radius: 50%;\n    overflow: hidden;\n    height: 5.5rem;\n    margin-right: 2rem;\n    position: relative;\n    backface-visibility: hidden; }\n    .results__fig::before,\n    .likes__fig::before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n      opacity: .4; }\n    .results__fig img,\n    .likes__fig img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      transition: all .3s; }\n  .results__name,\n  .likes__name {\n    font-size: 1.3rem;\n    color: #F59A83;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-bottom: .3rem; }\n  .results__author,\n  .likes__author {\n    font-size: 1.1rem;\n    color: #968B87;\n    text-transform: uppercase;\n    font-weight: 600; }\n  .results__pages,\n  .likes__pages {\n    margin-top: 3rem;\n    padding: 0 3rem; }\n    .results__pages::after,\n    .likes__pages::after {\n      content: \"\";\n      display: table;\n      clear: both; }\n  .results__btn--prev,\n  .likes__btn--prev {\n    float: left;\n    flex-direction: row-reverse; }\n  .results__btn--next,\n  .likes__btn--next {\n    float: right; }\n\n.recipe {\n  background-color: #F9F5F3;\n  border-top: 1px solid #fff; }\n  .recipe__fig {\n    height: 30rem;\n    position: relative;\n    transform: scale(1.04) translateY(-1px);\n    transform-origin: top; }\n    .recipe__fig::before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n      opacity: .6; }\n  .recipe__img {\n    width: 100%;\n    display: block;\n    height: 100%;\n    object-fit: cover; }\n  .recipe__title {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, 20%) skewY(-6deg);\n    color: #fff;\n    font-weight: 700;\n    font-size: 2.75rem;\n    text-transform: uppercase;\n    width: 70%;\n    line-height: 1.95;\n    text-align: center; }\n    .recipe__title span {\n      -webkit-box-decoration-break: clone;\n      box-decoration-break: clone;\n      padding: 1.3rem 2rem;\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }\n  .recipe__details {\n    display: flex;\n    align-items: center;\n    padding: 8rem 3rem 3rem 3rem; }\n  .recipe__info {\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center; }\n    .recipe__info:not(:last-child) {\n      margin-right: 4rem; }\n  .recipe__info-icon {\n    height: 2rem;\n    width: 2rem;\n    fill: #F59A83;\n    margin-right: 1rem; }\n  .recipe__info-data {\n    margin-right: .4rem;\n    font-weight: 600; }\n  .recipe__info-buttons {\n    display: flex;\n    margin-left: 1.5rem;\n    visibility: hidden;\n    opacity: 0;\n    transform: translateY(5px);\n    transition: all .4s; }\n  .recipe:hover .recipe__info-buttons {\n    visibility: visible;\n    opacity: 1;\n    transform: translateY(0); }\n  .recipe__love {\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n    height: 4.5rem;\n    width: 4.5rem;\n    margin-left: auto;\n    transition: all .2s;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .recipe__love:hover {\n      transform: scale(1.07); }\n    .recipe__love:focus {\n      outline: none; }\n    .recipe__love svg {\n      height: 2.75rem;\n      width: 2.75rem;\n      fill: #fff; }\n  .recipe__ingredients {\n    padding: 4rem 5rem;\n    font-size: 1.5rem;\n    line-height: 1.4;\n    background-color: #F2EFEE;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .recipe__ingredient-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 1.5rem;\n    grid-row-gap: 2.5rem;\n    list-style: none;\n    margin-bottom: 3rem; }\n  .recipe__item {\n    display: flex; }\n  .recipe__icon {\n    height: 1.8rem;\n    width: 1.8rem;\n    fill: #F59A83;\n    border: 1px solid #F59A83;\n    border-radius: 50%;\n    padding: 2px;\n    margin-right: 1rem;\n    flex: 0 0 auto;\n    margin-top: .1rem; }\n  .recipe__count {\n    margin-right: .5rem;\n    flex: 0 0 auto; }\n  .recipe__directions {\n    padding: 4rem;\n    padding-bottom: 5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .recipe__directions-text {\n    font-size: 1.5rem;\n    text-align: center;\n    width: 90%;\n    margin-bottom: 3rem;\n    color: #968B87; }\n  .recipe__by {\n    font-weight: 700; }\n\n.shopping {\n  padding: 3rem 4rem;\n  display: flex;\n  flex-direction: column; }\n  .shopping__list {\n    list-style: none;\n    max-height: 77rem;\n    overflow: scroll; }\n  .shopping__item {\n    display: flex;\n    align-items: flex-start;\n    padding: 1.3rem 0;\n    border-bottom: 1px solid #F2EFEE;\n    position: relative; }\n  .shopping__count {\n    flex: 0 0 7.5rem;\n    padding: .4rem .5rem;\n    border: 1px solid #F2EFEE;\n    border-radius: 3px;\n    margin-right: 2rem;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between; }\n    .shopping__count input {\n      color: inherit;\n      font-family: inherit;\n      font-size: 1.2rem;\n      text-align: center;\n      border: none;\n      width: 3.7rem;\n      border-radius: 3px; }\n      .shopping__count input:focus {\n        outline: none;\n        background-color: #F2EFEE; }\n    .shopping__count p {\n      font-size: 1.2rem; }\n  .shopping__description {\n    flex: 1;\n    font-size: 1.3rem;\n    margin-top: .4rem;\n    margin-right: 1.5rem; }\n  .shopping__delete {\n    margin-top: .5rem;\n    position: absolute;\n    right: 0;\n    background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);\n    width: 3.75rem;\n    padding-left: 2rem;\n    visibility: hidden;\n    opacity: 0;\n    transition: all .5s; }\n  .shopping__item:hover .shopping__delete {\n    opacity: 1;\n    visibility: visible; }\n","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU,EAAE;;AAEd;;;EAGE,mBAAmB,EAAE;;AAEvB;EACE,sBAAsB;EACtB,gBAAgB,EAAE;EAClB;IACE;MACE,cAAc,EAAE,EAAE;;AAExB;EACE,sCAAsC;EACtC,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,oEAAoE;EACpE,sBAAsB;EACtB,4BAA4B;EAC5B,iCAAiC,EAAE;;AAErC;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,qDAAqD;EACrD,aAAa;EACb,8CAA8C;EAC9C,sCAAsC;EACtC,4DAA4D,EAAE;EAC9D;IACE;MACE,WAAW;MACX,SAAS;MACT,gBAAgB,EAAE,EAAE;;AAE1B;EACE,oEAAoE;EACpE,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,mBAAmB,EAAE;EACrB;IACE,sBAAsB,EAAE;EAC1B;IACE,aAAa,EAAE;EACjB;IACE,kBAAkB,EAAE;;AAExB;EACE,oBAAoB;EACpB,iBAAiB,EAAE;EACnB;IACE,eAAe;IACf,cAAc;IACd,kBAAkB,EAAE;;AAExB;EACE,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB,EAAE;EACvB;IACE,cAAc;IACd,aAAa;IACb,kBAAkB,EAAE;;AAExB;EACE,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;EACrB,oBAAoB;EACpB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,mBAAmB,EAAE;EACrB;IACE,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,eAAe,EAAE;EACnB;IACE,eAAe,EAAE;EACnB;IACE,cAAc;IACd,yBAAyB,EAAE;EAC7B;IACE,aAAa,EAAE;;AAEnB;EACE,eAAe;EACf,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,eAAe,EAAE;EACjB;IACE,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB,EAAE;EACvB;IACE,aAAa,EAAE;EACjB;IACE,aAAa;IACb,2BAA2B,EAAE;EAC/B;IACE,aAAa;IACb,wBAAwB,EAAE;EAC5B;IACE,mBAAmB,EAAE;;AAEzB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,uBAAuB,EAAE;;AAE3B;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB,EAAE;;AAEpB;;EAEE,cAAc,EAAE;;AAElB;EACE,iBAAiB;EACjB,kBAAkB,EAAE;EACpB;IACE,cAAc;IACd,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,sCAAsC,EAAE;;AAE5C;EACE;IACE,oBAAoB,EAAE;EACxB;IACE,yBAAyB,EAAE,EAAE;;AAEjC;EACE,eAAe;EACf,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,8BAA8B,EAAE;EAChC;IACE,iBAAiB;IACjB,cAAc;IACd,cAAc,EAAE;;AAEpB;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB,EAAE;EACrB;IACE,2BAA2B;IAC3B,iDAAiD,EAAE;EACrD;IACE,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,YAAY,EAAE;IACd;MACE,aAAa,EAAE;IACjB;MACE,cAAc,EAAE;;AAEtB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB,EAAE;EACvB;IACE,eAAe;IACf,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,mBAAmB,EAAE;IACrB;MACE,yBAAyB,EAAE;EAC/B;;IAEE,mBAAmB;IACnB,UAAU,EAAE;EACd;IACE,aAAa;IACb,eAAe;IACf,cAAc,EAAE;EAClB;IACE,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,qDAAqD;IACrD,kBAAkB;IAClB,UAAU;IACV,uBAAuB,EAAE;;AAE7B;;EAEE,eAAe,EAAE;EACjB;;IAEE,gBAAgB,EAAE;EACpB;;;IAGE,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,4BAA4B;IAC5B,qBAAqB,EAAE;EACzB;;IAEE,yBAAyB;IACzB,2BAA2B,EAAE;EAC/B;;IAEE,yBAAyB,EAAE;EAC7B;;IAEE,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B,EAAE;IAC7B;;MAEE,WAAW;MACX,cAAc;MACd,YAAY;MACZ,WAAW;MACX,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,oEAAoE;MACpE,WAAW,EAAE;IACf;;MAEE,cAAc;MACd,WAAW;MACX,YAAY;MACZ,iBAAiB;MACjB,mBAAmB,EAAE;EACzB;;IAEE,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,oBAAoB,EAAE;EACxB;;IAEE,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,gBAAgB,EAAE;EACpB;;IAEE,gBAAgB;IAChB,eAAe,EAAE;IACjB;;MAEE,WAAW;MACX,cAAc;MACd,WAAW,EAAE;EACjB;;IAEE,WAAW;IACX,2BAA2B,EAAE;EAC/B;;IAEE,YAAY,EAAE;;AAElB;EACE,yBAAyB;EACzB,0BAA0B,EAAE;EAC5B;IACE,aAAa;IACb,kBAAkB;IAClB,uCAAuC;IACvC,qBAAqB,EAAE;IACvB;MACE,WAAW;MACX,cAAc;MACd,YAAY;MACZ,WAAW;MACX,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,oEAAoE;MACpE,WAAW,EAAE;EACjB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB,EAAE;EACrB;IACE,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,4CAA4C;IAC5C,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;IACV,iBAAiB;IACjB,kBAAkB,EAAE;IACpB;MACE,mCAAmC;MACnC,2BAA2B;MAC3B,oBAAoB;MACpB,oEAAoE,EAAE;EAC1E;IACE,aAAa;IACb,mBAAmB;IACnB,4BAA4B,EAAE;EAChC;IACE,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;IACb,mBAAmB,EAAE;IACrB;MACE,kBAAkB,EAAE;EACxB;IACE,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB,EAAE;EACtB;IACE,mBAAmB;IACnB,gBAAgB,EAAE;EACpB;IACE,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,0BAA0B;IAC1B,mBAAmB,EAAE;EACvB;IACE,mBAAmB;IACnB,UAAU;IACV,wBAAwB,EAAE;EAC5B;IACE,oEAAoE;IACpE,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB,EAAE;IACzB;MACE,sBAAsB,EAAE;IAC1B;MACE,aAAa,EAAE;IACjB;MACE,eAAe;MACf,cAAc;MACd,UAAU,EAAE;EAChB;IACE,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAE;EACvB;IACE,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB,EAAE;EACvB;IACE,aAAa,EAAE;EACjB;IACE,cAAc;IACd,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,iBAAiB,EAAE;EACrB;IACE,mBAAmB;IACnB,cAAc,EAAE;EAClB;IACE,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAE;EACvB;IACE,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,cAAc,EAAE;EAClB;IACE,gBAAgB,EAAE;;AAEtB;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB,EAAE;EACxB;IACE,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB,EAAE;EACpB;IACE,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,gCAAgC;IAChC,kBAAkB,EAAE;EACtB;IACE,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,8BAA8B,EAAE;IAChC;MACE,cAAc;MACd,oBAAoB;MACpB,iBAAiB;MACjB,kBAAkB;MAClB,YAAY;MACZ,aAAa;MACb,kBAAkB,EAAE;MACpB;QACE,aAAa;QACb,yBAAyB,EAAE;IAC/B;MACE,iBAAiB,EAAE;EACvB;IACE,OAAO;IACP,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB,EAAE;EACxB;IACE,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,gFAAgF;IAChF,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,mBAAmB,EAAE;EACvB;IACE,UAAU;IACV,mBAAmB,EAAE",sourcesContent:["* {\r\n  margin: 0;\r\n  padding: 0; }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit; }\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%; }\r\n  @media only screen and (max-width: 68.75em) {\r\n    html {\r\n      font-size: 50%; } }\r\n\r\nbody {\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.6;\r\n  color: #655A56;\r\n  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  min-height: calc(100vh - 2 * 4vw); }\r\n\r\n.container {\r\n  max-width: 120rem;\r\n  margin: 4vw auto;\r\n  background-color: #fff;\r\n  border-radius: 6px;\r\n  overflow: hidden;\r\n  box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);\r\n  display: grid;\r\n  grid-template-rows: 10rem minmax(100rem, auto);\r\n  grid-template-columns: 1.1fr 2fr 1.1fr;\r\n  grid-template-areas: \"head head head\" \"list recipe shopping\"; }\r\n  @media only screen and (max-width: 68.75em) {\r\n    .container {\r\n      width: 100%;\r\n      margin: 0;\r\n      border-radius: 0; } }\r\n\r\n.btn, .btn-small, .btn-small:link, .btn-small:visited {\r\n  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\r\n  border-radius: 10rem;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all .2s; }\r\n  .btn:hover, .btn-small:hover {\r\n    transform: scale(1.05); }\r\n  .btn:focus, .btn-small:focus {\r\n    outline: none; }\r\n  .btn > *:first-child, .btn-small > *:first-child {\r\n    margin-right: 1rem; }\r\n\r\n.btn {\r\n  padding: 1.3rem 3rem;\r\n  font-size: 1.4rem; }\r\n  .btn svg {\r\n    height: 2.25rem;\r\n    width: 2.25rem;\r\n    fill: currentColor; }\r\n\r\n.btn-small, .btn-small:link, .btn-small:visited {\r\n  font-size: 1.3rem;\r\n  padding: 1rem 1.75rem;\r\n  text-decoration: none; }\r\n  .btn-small svg, .btn-small:link svg, .btn-small:visited svg {\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    fill: currentColor; }\r\n\r\n.btn-inline {\r\n  color: #F59A83;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  background-color: #F9F5F3;\r\n  padding: .8rem 1.2rem;\r\n  border-radius: 10rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all .2s; }\r\n  .btn-inline svg {\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    fill: currentColor;\r\n    margin: 0 .2rem; }\r\n  .btn-inline span {\r\n    margin: 0 .4rem; }\r\n  .btn-inline:hover {\r\n    color: #F48982;\r\n    background-color: #F2EFEE; }\r\n  .btn-inline:focus {\r\n    outline: none; }\r\n\r\n.btn-tiny {\r\n  height: 1.75rem;\r\n  width: 1.75rem;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer; }\r\n  .btn-tiny svg {\r\n    height: 100%;\r\n    width: 100%;\r\n    fill: #F59A83;\r\n    transition: all .3s; }\r\n  .btn-tiny:focus {\r\n    outline: none; }\r\n  .btn-tiny:hover svg {\r\n    fill: #F48982;\r\n    transform: translateY(-1px); }\r\n  .btn-tiny:active svg {\r\n    fill: #F48982;\r\n    transform: translateY(0); }\r\n  .btn-tiny:not(:last-child) {\r\n    margin-right: .3rem; }\r\n\r\n.heading-2 {\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n  color: #F59A83;\r\n  text-transform: uppercase;\r\n  margin-bottom: 2.5rem;\r\n  text-align: center;\r\n  transform: skewY(-3deg); }\r\n\r\n.copyright {\r\n  color: #968B87;\r\n  font-size: 1.2rem;\r\n  margin-top: auto; }\r\n\r\n.link:link,\r\n.link:visited {\r\n  color: #968B87; }\r\n\r\n.loader {\r\n  margin: 5rem auto;\r\n  text-align: center; }\r\n  .loader svg {\r\n    height: 5.5rem;\r\n    width: 5.5rem;\r\n    fill: #F59A83;\r\n    transform-origin: 44% 50%;\r\n    animation: rotate 1.5s infinite linear; }\r\n\r\n@keyframes rotate {\r\n  0% {\r\n    transform: rotate(0); }\r\n  100% {\r\n    transform: rotate(360deg); } }\r\n\r\n.header {\r\n  grid-area: head;\r\n  background-color: #F9F5F3;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between; }\r\n  .header__logo {\r\n    margin-left: 4rem;\r\n    height: 4.5rem;\r\n    display: block; }\r\n\r\n.search {\r\n  background-color: #fff;\r\n  border-radius: 10rem;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 3rem;\r\n  transition: all .3s; }\r\n  .search:focus-within {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); }\r\n  .search__field {\r\n    border: none;\r\n    background: none;\r\n    font-family: inherit;\r\n    color: inherit;\r\n    font-size: 1.7rem;\r\n    width: 30rem; }\r\n    .search__field:focus {\r\n      outline: none; }\r\n    .search__field::placeholder {\r\n      color: #DAD0CC; }\r\n\r\n.likes {\r\n  position: relative;\r\n  align-self: stretch;\r\n  padding: 0 !important; }\r\n  .likes__field {\r\n    cursor: pointer;\r\n    padding: 0 4rem;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    transition: all .3s; }\r\n    .likes__field:hover {\r\n      background-color: #F2EFEE; }\r\n  .likes__panel:hover,\r\n  .likes__field:hover + .likes__panel {\r\n    visibility: visible;\r\n    opacity: 1; }\r\n  .likes__icon {\r\n    fill: #F59A83;\r\n    height: 3.75rem;\r\n    width: 3.75rem; }\r\n  .likes__panel {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 10rem;\r\n    z-index: 10;\r\n    padding: 2rem 0;\r\n    width: 34rem;\r\n    background-color: #fff;\r\n    box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all .5s .2s; }\r\n\r\n.results,\r\n.likes {\r\n  padding: 3rem 0; }\r\n  .results__list,\r\n  .likes__list {\r\n    list-style: none; }\r\n  .results__link:link, .results__link:visited,\r\n  .likes__link:link,\r\n  .likes__link:visited {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 1.5rem 3rem;\r\n    transition: all .3s;\r\n    border-right: 1px solid #fff;\r\n    text-decoration: none; }\r\n  .results__link:hover,\r\n  .likes__link:hover {\r\n    background-color: #F9F5F3;\r\n    transform: translateY(-2px); }\r\n  .results__link--active,\r\n  .likes__link--active {\r\n    background-color: #F9F5F3; }\r\n  .results__fig,\r\n  .likes__fig {\r\n    flex: 0 0 5.5rem;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    height: 5.5rem;\r\n    margin-right: 2rem;\r\n    position: relative;\r\n    backface-visibility: hidden; }\r\n    .results__fig::before,\r\n    .likes__fig::before {\r\n      content: '';\r\n      display: block;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\r\n      opacity: .4; }\r\n    .results__fig img,\r\n    .likes__fig img {\r\n      display: block;\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      transition: all .3s; }\r\n  .results__name,\r\n  .likes__name {\r\n    font-size: 1.3rem;\r\n    color: #F59A83;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    margin-bottom: .3rem; }\r\n  .results__author,\r\n  .likes__author {\r\n    font-size: 1.1rem;\r\n    color: #968B87;\r\n    text-transform: uppercase;\r\n    font-weight: 600; }\r\n  .results__pages,\r\n  .likes__pages {\r\n    margin-top: 3rem;\r\n    padding: 0 3rem; }\r\n    .results__pages::after,\r\n    .likes__pages::after {\r\n      content: \"\";\r\n      display: table;\r\n      clear: both; }\r\n  .results__btn--prev,\r\n  .likes__btn--prev {\r\n    float: left;\r\n    flex-direction: row-reverse; }\r\n  .results__btn--next,\r\n  .likes__btn--next {\r\n    float: right; }\r\n\r\n.recipe {\r\n  background-color: #F9F5F3;\r\n  border-top: 1px solid #fff; }\r\n  .recipe__fig {\r\n    height: 30rem;\r\n    position: relative;\r\n    transform: scale(1.04) translateY(-1px);\r\n    transform-origin: top; }\r\n    .recipe__fig::before {\r\n      content: '';\r\n      display: block;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\r\n      opacity: .6; }\r\n  .recipe__img {\r\n    width: 100%;\r\n    display: block;\r\n    height: 100%;\r\n    object-fit: cover; }\r\n  .recipe__title {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translate(-50%, 20%) skewY(-6deg);\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 2.75rem;\r\n    text-transform: uppercase;\r\n    width: 70%;\r\n    line-height: 1.95;\r\n    text-align: center; }\r\n    .recipe__title span {\r\n      -webkit-box-decoration-break: clone;\r\n      box-decoration-break: clone;\r\n      padding: 1.3rem 2rem;\r\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }\r\n  .recipe__details {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 8rem 3rem 3rem 3rem; }\r\n  .recipe__info {\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    align-items: center; }\r\n    .recipe__info:not(:last-child) {\r\n      margin-right: 4rem; }\r\n  .recipe__info-icon {\r\n    height: 2rem;\r\n    width: 2rem;\r\n    fill: #F59A83;\r\n    margin-right: 1rem; }\r\n  .recipe__info-data {\r\n    margin-right: .4rem;\r\n    font-weight: 600; }\r\n  .recipe__info-buttons {\r\n    display: flex;\r\n    margin-left: 1.5rem;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transform: translateY(5px);\r\n    transition: all .4s; }\r\n  .recipe:hover .recipe__info-buttons {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: translateY(0); }\r\n  .recipe__love {\r\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\r\n    border-radius: 50%;\r\n    border: none;\r\n    cursor: pointer;\r\n    height: 4.5rem;\r\n    width: 4.5rem;\r\n    margin-left: auto;\r\n    transition: all .2s;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; }\r\n    .recipe__love:hover {\r\n      transform: scale(1.07); }\r\n    .recipe__love:focus {\r\n      outline: none; }\r\n    .recipe__love svg {\r\n      height: 2.75rem;\r\n      width: 2.75rem;\r\n      fill: #fff; }\r\n  .recipe__ingredients {\r\n    padding: 4rem 5rem;\r\n    font-size: 1.5rem;\r\n    line-height: 1.4;\r\n    background-color: #F2EFEE;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center; }\r\n  .recipe__ingredient-list {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 1.5rem;\r\n    grid-row-gap: 2.5rem;\r\n    list-style: none;\r\n    margin-bottom: 3rem; }\r\n  .recipe__item {\r\n    display: flex; }\r\n  .recipe__icon {\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    fill: #F59A83;\r\n    border: 1px solid #F59A83;\r\n    border-radius: 50%;\r\n    padding: 2px;\r\n    margin-right: 1rem;\r\n    flex: 0 0 auto;\r\n    margin-top: .1rem; }\r\n  .recipe__count {\r\n    margin-right: .5rem;\r\n    flex: 0 0 auto; }\r\n  .recipe__directions {\r\n    padding: 4rem;\r\n    padding-bottom: 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center; }\r\n  .recipe__directions-text {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    width: 90%;\r\n    margin-bottom: 3rem;\r\n    color: #968B87; }\r\n  .recipe__by {\r\n    font-weight: 700; }\r\n\r\n.shopping {\r\n  padding: 3rem 4rem;\r\n  display: flex;\r\n  flex-direction: column; }\r\n  .shopping__list {\r\n    list-style: none;\r\n    max-height: 77rem;\r\n    overflow: scroll; }\r\n  .shopping__item {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    padding: 1.3rem 0;\r\n    border-bottom: 1px solid #F2EFEE;\r\n    position: relative; }\r\n  .shopping__count {\r\n    flex: 0 0 7.5rem;\r\n    padding: .4rem .5rem;\r\n    border: 1px solid #F2EFEE;\r\n    border-radius: 3px;\r\n    margin-right: 2rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-between; }\r\n    .shopping__count input {\r\n      color: inherit;\r\n      font-family: inherit;\r\n      font-size: 1.2rem;\r\n      text-align: center;\r\n      border: none;\r\n      width: 3.7rem;\r\n      border-radius: 3px; }\r\n      .shopping__count input:focus {\r\n        outline: none;\r\n        background-color: #F2EFEE; }\r\n    .shopping__count p {\r\n      font-size: 1.2rem; }\r\n  .shopping__description {\r\n    flex: 1;\r\n    font-size: 1.3rem;\r\n    margin-top: .4rem;\r\n    margin-right: 1.5rem; }\r\n  .shopping__delete {\r\n    margin-top: .5rem;\r\n    position: absolute;\r\n    right: 0;\r\n    background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);\r\n    width: 3.75rem;\r\n    padding-left: 2rem;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all .5s; }\r\n  .shopping__item:hover .shopping__delete {\r\n    opacity: 1;\r\n    visibility: visible; }\r\n"],sourceRoot:""}]);const a=o},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",A=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),A&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),A&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,A,i,t){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(A)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var s=0;s<n.length;s++){var B=[].concat(n[s]);A&&o[B[0]]||(void 0!==t&&(void 0===B[5]||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=t),e&&(B[2]?(B[1]="@media ".concat(B[2]," {").concat(B[1],"}"),B[2]=e):B[2]=e),i&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=i):B[4]="".concat(i)),r.push(B))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),t="/*# ".concat(i," */");return[r].concat([t]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,A=0;A<r.length;A++)if(r[A].identifier===n){e=A;break}return e}function A(n,A){for(var t={},o=[],a=0;a<n.length;a++){var l=n[a],s=A.base?l[0]+A.base:l[0],B=t[s]||0,m="".concat(s," ").concat(B);t[s]=B+1;var c=e(m),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==c)r[c].references++,r[c].updater(d);else{var E=i(d,A);A.byIndex=a,r.splice(a,0,{identifier:m,updater:E,references:1})}o.push(m)}return o}function i(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var t=A(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<t.length;o++){var a=e(t[o]);r[a].references--}for(var l=A(n,i),s=0;s<t.length;s++){var B=e(t[s]);0===r[B].references&&(r[B].updater(),r.splice(B,1))}t=l}}},659:n=>{var r={};n.exports=function(n,e){var A=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var A="";e.supports&&(A+="@supports (".concat(e.supports,") {")),e.media&&(A+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(A+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),A+=e.css,i&&(A+="}"),e.media&&(A+="}"),e.supports&&(A+="}");var t=e.sourceMap;t&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleTagTransform(A,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},n=>{n(n.s=579)}]);
//# sourceMappingURL=app.3e9cf1adb5d1d6b2836c.js.map