// Passos
// 01 - Identificar area de click na DOM
// 02 - Identificar quais elementos que quando clicado vai mostrar o texto do accordion
// 03 - Capturar o click no elemento pelo o ID e mostrar em tela a div
// 04 - Remover a class Active para recolher o accordion
// 05 - remover a class active do toggle quando for clicado
// 06 - Garantir que o item anterior que foi aberto seja fechado
// 07 - Garantir que o accorsion não feche quando clicado no texto do mesmo

const accordion = document.querySelector('[data-js="accordion"]')

const closedAccordionItem = accordionHeaderToBeClosed => {
  const accordionHeaderId = accordionHeaderToBeClosed.dataset.accordionHeader
  const accordionBodyToBeClosed =
    document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)

  accordionHeaderToBeClosed.classList.remove('active')
  accordionBodyToBeClosed.classList.remove('active')
}

const handleAccordionClick = e => {
  const accordionHeaderId = e.target.dataset.accordionHeader

  const clickedAccordionHeader =
    document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`)

  const accordionItemToBeOpened =
    document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)

  const accordionHeaderToBeClosed = Array
    .from(document.querySelectorAll('[data-js="accordion-header"]'))
    .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
    .find(accordionHeader => accordionHeader.classList.contains('active'))

  if (!e.target.dataset.accordionHeader) {
    return
  }

  if (accordionHeaderToBeClosed) {
    closedAccordionItem(accordionHeaderToBeClosed)
  }

  clickedAccordionHeader.classList.toggle('active')
  accordionItemToBeOpened.classList.toggle('active')
}

accordion.addEventListener('click', handleAccordionClick)
