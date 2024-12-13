/**
 * Window Commands
 */
console.log(window);
console.log(document);
console.dir(document); // We Get whole Code of our Html

// --------Basic Dom Operation------------->
document.getElementById("title"); {/* <h1 id=​"title" class=​"heading">​Rahul Choudhary​</h1>​ */}
document.getElementById("title").id  // 'title'
document.getElementById("title").className  // 'heading'
document.getElementById("title").getAttribute('id')  // 'title'
document.getElementById("title").getAttribute('class') // 'heading'
document.getElementById("title").setAttribute('class', 'title-heading') // set new class
document.getElementById("title").getAttribute('class'); // 'title-heading'

const title = document.getElementById("title");
title;  {/* <h1 id=​"title" class=​"title-heading">​Rahul Choudhary​</h1>​ */}
title.style.backgroundColor = 'gray' // set background Color 'gray'
title.style.padding = '8px' // set padding '8px'
title.style.borderRadius = '8px' //set borderRadius '8px'

document.getElementsByClassName('parm'); // HTMLCollection(3) [p.parm, p.parm, p.parm]0: p.parm1: p.parm2: p.parmlength: 3[[Prototype]]: HTMLCollectionitem: ƒ item()length: 1name: "item"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]length: (...)namedItem: ƒ namedItem()length: 1name: "namedItem"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]constructor: ƒ HTMLCollection()arguments: nullcaller: nulllength: 0name: "HTMLCollection"prototype: HTMLCollection {Symbol(Symbol.toStringTag): 'HTMLCollection', item: ƒ, namedItem: ƒ, constructor: ƒ, …}[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]Symbol(Symbol.iterator): ƒ values()length: 0name: "values"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()length: 0name: "get length"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0][[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const classParm = document.getElementsByClassName('parm');
   classParm[0].style.color = "red";

  //Convert in Array First then apply operation
const arrayClassParm = Array.from(classParm);
arrayClassParm; // (3) [p.parm, p.parm, p.parm]
arrayClassParm.forEach(item => item.style.color = "red");

// {==================== innerText || textContent || innerHTML =================}
title;  {/* <h1 id=​"title" class=​"heading">​Rahul Choudhary​</h1>​ */}
title.innerText;  // 'Rahul Choudhary' "ashwini "
title.innerHTML;  // 'Rahul Choudhary'
title.textContent;// 'Rahul Choudhary'

title.innerHTML // '<span>Hello! How Are You </span> Rahul Choudhary' {its Return Html Also}
title.innerText // 'Hello! How Are You Rahul Choudhary' {Its Return only display Content of Html}
title.textContent // 'Hello! How Are You  Rahul Choudhary' {its Return All Content Are Available }

// now we apply display none properties on Span {Find out the Differance between them}
{/* <h1 id="title" class="heading"><span style="display: none;">Hello! How Are You </span> Rahul Choudhary</h1> */}

title.innerText; // 'Rahul Choudhary' {its Return Only Display Content}
title.textContent; // 'Hello! How Are You  Rahul Choudhary' {its Return All content hidden or nonHidden}
title.innerHTML; // '<span style="display: none;">Hello! How Are You </span> Rahul Choudhary'
// InnerHTML html tag ko bhi support krta h but innerText or textContent vo Html Tag ko support nhi krte

/**
 * Query Selector return only first element 
 * querySelectorAll return all element array NodeList but not actual array
 * we can apply only forEach loop
 */
document.querySelector('.heading'); {/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
document.querySelector('#title'); {/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
document.querySelector('h1'); {/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
document.querySelector('p'); {/* <p>​…​</p>​"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sed incidunt rem iste pariatur id quod unde, earum optio."</p>​ */}
 
document.querySelectorAll('p'); // NodeList(3) [p, p, p]0: p1: p2: plength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const p = document.querySelectorAll('p');
p;  // NodeList(3) [p, p, p]0: p1: p2: plength: 3[[Prototype]]: NodeList
p[0].style.color = "green" // paragraph color change to 'green'

p.forEach((item)=>{_
    item.style.color = "red"
}); // Change all p color to red 




