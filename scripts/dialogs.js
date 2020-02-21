const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line
  document.querySelector("#gar-button").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#gar-details")
        theDialog.showModal()
    }
  )
  document.querySelector("#chub-button").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#chub-details")
        theDialog.showModal()
    }
  )
  document.querySelector("#sturgeon-button").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#sturgeon-details")
        theDialog.showModal()
    }
  )
  document.querySelector("#catfish-button").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#catfish-details")
        theDialog.showModal()
    }
  )

}

export default { initializeDetailButtonEvents };
