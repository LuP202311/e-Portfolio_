import {projets} from "./projets.js";

/**
 * Créer l'élément pour le texte
 * @param {string} elemType
 * @param {string} content
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
function creerTexte(elemType, content){
    const elem = document.createElement(elemType)
    elem.textContent = content
    return elem
}

/**
 * Ajouter l'objet Projet
 * @param {{image: string, titre: string, description: string}|{image: string, titre: string, description: string}} projet
 * @returns {HTMLDivElement | HTMLElement}
 */
function ajoutProjet(projet){
    const elemProj = document.createElement('div')
    const elemTitre = creerTexte('h3', projet.titre)
    const elemDescr = creerTexte('p', projet.description)
    elemProj.append(elemTitre, elemDescr)

    elemProj.style.border = "1px solid black"
    elemProj.style.padding = "1em"
    elemProj.style.margin = "1em"
    elemProj.style.borderRadius = "1em"

    return elemProj


}

const sectionProjets = document.querySelector(".sectionProjets")
for(const projet of projets){
    sectionProjets.append(ajoutProjet(projet));
}


