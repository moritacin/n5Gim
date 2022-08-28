/**
 * Button-filled
 */
const buttonFilled = document.getElementsByClassName('button-filled');
for(let i = 0; i < buttonFilled.length; i++){
    //Mouseover
    buttonFilled[i].addEventListener('mouseover', () => {
        buttonFilled[i].style.backgroundColor = "#FF9C40";
    })    
    //Mouseout
    buttonFilled[i].addEventListener('mouseout', () => {
        buttonFilled[i].style.backgroundColor = "#FFAD62";
    })
}

/**
 * Button-text
 */
 let buttonText = document.getElementsByClassName('button-text');
 for(let i = 0; i < buttonText.length; i++){
     //Mouseover
     buttonText[i].addEventListener('mouseover', () => {
        buttonText[i].style.backgroundColor = " rgba(255, 173, 98, 0.08)";
     })    
     //Mouseout
     buttonText[i].addEventListener('mouseout', () => {
        buttonText[i].style.backgroundColor = "transparent";

     })
 }

/**
 * Button-Outlined
 */
 let buttonOutlined = document.getElementsByClassName('button-outlined');
 for(let i = 0; i < buttonOutlined.length; i++){
     //Mouseover
     buttonOutlined[i].addEventListener('mouseover', () => {
        buttonOutlined[i].style.backgroundColor = " rgba(255, 173, 98, 0.08)";
        buttonOutlined[i].style.color= "#FFAD62";
        buttonOutlined[i].style.border="2px solid #FFAD62";
     })    
     //Mouseout
     buttonOutlined[i].addEventListener('mouseout', () => {
        buttonOutlined[i].style.backgroundColor = "transparent";
        buttonOutlined[i].style.color = "#FFAD62";
        buttonOutlined[i].style.border="2px solid #FFAD62";

     })
 }
