const pdf = document.querySelector('#cv > button')

pdf.addEventListener('click', () => {
    const lien = document.createElement('a')
    lien.href = "../fichiers/CV_DeveloppeuseWeb_Lucie_PHUNG_STAGE.pdf"
    lien.download = "CV_DeveloppeuseWeb_Lucie_PHUNG_STAGE.pdf"
    document.body.appendChild(lien)
    lien.click()
    document.body.removeChild(lien)
})