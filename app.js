// import data from './field.json' assert { type: 'json'}

// const JSON_DATA = JSON.stringify(data);



// const button = document.getElementById('buttonXyz');


// button.addEventListener('click', () => {
//     let newData;
//     for (let i = 0; i < JSON_DATA.length; i++) {
//         newData = JSON_DATA.split(',');
//         console.log(newData)
//     } 
//     const span = document.createElement('span');
//     span.innerText = newData;
//     button.appendChild(span);
// })









fetch("./field.json")
    .then(response => response.json())
    .then(data => {
        // const upperEl = document.querySelector('.color-selector');
        const el = document.querySelector("#dynamicList");
        for (let i = 0; i < data.items.length; i++) {
            let time = data.items[i].time;
            let title = data.items[i].title;
            let description = data.items[i].description;
            let time_background_color = data.items[i].time_background_color;
            let time_color = data.items[i].time_color;
            // let color_picker_title = data.items[i].color_picker_title;
            let id = data.items[i].id;
            // upperEl.innerHTML += `
            // <div>
            // <p>${color_picker_title}</p>
            // <input type="color" id=${id} value="${time_background_color}">
            // </div>
            // `;
            el.innerHTML += `
            <li>
            <div class="time" id=${'time' + id} style="background-color: ${time_background_color};"><p style="color: ${time_color};">${time}</p></div>
            <div class="title">${title}</div>
            <div class="desc"><ul>${description}</ul></div>
            </li>
            `;
        }
        // const colorInputs = document.querySelectorAll('input[type=color]');
        // console.log('colorInputs', colorInputs);
        // colorInputs.forEach(element => {
        //     element.addEventListener('change', (e) => {
        //         handleChangeColor(e.target.value, e.target.id);
        //     })
        // });
    });




// function handleChangeColor(currentColor, currentColorID) {
//     console.log("currentColor", currentColor);
//     console.log("id", currentColorID);
//     const changingTimeColor = document.getElementById(`time${currentColorID}`);
//     console.log("element", changingTimeColor);
//     changingTimeColor.style.backgroundColor = currentColor
// }







// async function printJSON() {
//     const response = await fetch("./field.json");
//     const json = await response.json();
//     console.log(json);
// }

// printJSON()