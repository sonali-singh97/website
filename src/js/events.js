




  let zindex = 10;

  document.querySelectorAll('.card-btn').forEach(cardBtn => {
   
    cardBtn.addEventListener('click', e => {
      e.preventDefault();
      let card = cardBtn.parentNode.parentNode;
    let isShowing = false;

    if (card.classList.contains("show")) {
      isShowing = true;
    }

    if (document.querySelector(".cards").classList.contains("showing")) {
      // a card is already in view
      document.querySelector(".event-card.show").classList.remove("show");

      if (isShowing) {
        // this card was showing - reset the grid
        document.querySelector(".cards").classList.remove("showing");
      } else {
        // this card isn't showing - get in with it
        card.style.zIndex=zindex;
        card.classList.add("show");
      }

      zindex++;
    } else {
      // no cards in view
      document.querySelector(".cards").classList.add("showing");
      card.style.zIndex=zindex;
        card.classList.add("show");

      zindex++;
    }
    });
  });


  const accordionItemQuestions = document.querySelectorAll(".accordion-item__ques");


  accordionItemQuestions.forEach(accordionItemQues => {
    accordionItemQues.addEventListener("click", event => {
      
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
      // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
      // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      //   currentlyActiveAccordionItemHeader.classList.toggle("active");
      //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      // }
  
      accordionItemQues.classList.toggle("active");
      const accordionItemBody = accordionItemQues.nextElementSibling;
      if(accordionItemQues.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });
 


