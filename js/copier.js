const textes = document.querySelectorAll(".objets-contact > p")

/* Copier */

textes.forEach(texte => texte.addEventListener("click", (evt) => {
    evt.preventDefault()
    navigator.clipboard.writeText(texte.innerText).then(()=>{
        alert("Texte copié")
    })
}))

/* Changement de curseur */

textes.forEach(texte => texte.addEventListener("mouseover",()=>{
    texte.style.cursor="copy"
    texte.addEventListener("mouseout", () =>{
        texte.style.cursor="default"
    })
}))