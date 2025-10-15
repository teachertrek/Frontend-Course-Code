// Creating An Element/Node
// const paragraph=document.createElement('p')
// paragraph.textContent='Hello Everyone'
// console.log(paragraph);

// const textNode=document.createTextNode('How are you.')
// console.log(textNode);



// Insertion Method
    // node.append(...nodes or strings) – append nodes or strings at the end of node,
    // const mainDiv=document.getElementById('main')
    // mainDiv.append(paragraph)
    // const h3=document.createElement('h3')
    // h3.textContent='Please like share and subscribe'
    // mainDiv.after(h3)
    // node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
    // node.before(...nodes or strings) –- insert nodes or strings before node,
    // node.after(...nodes or strings) –- insert nodes or strings after node,
    // node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
// mainDiv.replaceWith(h3)
    // Note : these method can insert multi node and text
    // mainDiv.before('Hello World',document.createElement('hr'))

// insertAdjacentHTML/Text/Element
    // "beforebegin" – insert html immediately before elem,
    // "afterbegin" – insert html into elem, at the beginning,
    // "beforeend" – insert html into elem, at the end,
    // "afterend" – insert html immediately after elem.
        const mainDiv=document.getElementById('main')
                mainDiv.insertAdjacentHTML('afterend','<p>Hello</p>')

                // mainDiv.insertAdjacentHTML('afterbegin','<p>hi</p>')

                



// Node Removal
const heading=document.getElementById('heading')
heading.remove()