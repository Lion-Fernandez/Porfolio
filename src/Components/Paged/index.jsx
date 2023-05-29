import React from "react";
import PagedCss from "./Paged.module.css";


function Paged({ cardsPerPage, allCards, paged }) {
  const pageNumber = [];
  let i = 0;
  let rest = allCards;
  while (rest > 0) {
    rest -= cardsPerPage;
    i++;
    pageNumber.push(i);

  }
  return (
    <div className={PagedCss.nav}>
        {pageNumber?.map(num => {
          return (
            <button className={PagedCss.butt} key={num} onClick={() => paged(num)}>{num}</button>
          )
        })
        }

    </div>
  )
};

export default Paged;