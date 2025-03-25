const pdf = document.querySelector('#cv > button')

pdf.addEventListener('click', () => {
    const lien = document.createElement('a')
    lien.href = "fichiers/CV_Informatique_Lucie_PHUNG_STAGE_BUT.pdf"
    lien.download = "CV_Informatique_Lucie_PHUNG_STAGE_BUT.pdf"
    document.body.appendChild(lien)
    lien.click()
    document.body.removeChild(lien)
})