{
    let inputHex = document.getElementById("clrhx");
    let doneOpertation = document.getElementsByTagName('button')[0];
    let Reset = document.getElementsByTagName('button')[1];
    let outputHex = document.getElementsByClassName("hexout")[0];
    let container = document.getElementById("cntr");
    let clrindt = document.getElementById("clrindt");
    let white = parseInt("ffffff",16);
    inputHex.addEventListener("input",()=>{
        if(inputHex.value === ""){
            clrindt.style.backgroundColor = "initial";
        }
        clrindt.style.backgroundColor = `#${inputHex.value}`;
    });
    doneOpertation.addEventListener('click',()=>{
      if(inputHex.value !== ""){
        let localInput = parseInt(inputHex.value,16);
            let localVar = (white-localInput).toString(16).padStart(6,'0');
        document.body.style.setProperty('--width-pseudo','30%');
        document.body.style.setProperty('--clr-pseudo',`#${localVar}`);
        outputHex.innerHTML= localVar;
      } else{
          alert("You must write the Hex value of the color that you want");
      }

    });
    Reset.addEventListener('click',()=>{
          location.reload();
    });
}