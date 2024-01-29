const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow']; 

function buildP(placeholder, num){
    
    let i = 0;

    do {
            // Order of DOM programming:

            // Create the new element
            let p = document.createElement('p');

            // Create any text nodes that need to be attached to the new element
            let text = document.createTextNode(`Have you tried turning it off and back on again?`);

            // Randomising colours:
            p.style.color = colours[parseInt(Math.random() * colours.length)]
            
            // Attach the text nodes to the new element
            p.appendChild(text);

            // Attach the new element to the appropriate existing DOM element
            placeholder.appendChild(p);

            // Condition to iterate through i:
            i++;
    
        } while (i < num);
    
};

buildP(document.querySelector('#placeholder'), 5);