import { useState } from "react";
import Paged from "../../Components/Paged";
import InfoCard from "../../Components/InfoCard";
import { projectDescript, projectInfo } from "../../assets/projectInfo";
import HomeCss from "./Home.module.css";

const Home = () => {

    const [currentPage, setcurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(6);

    const viewLastCards = currentPage * cardsPerPage;
    const viewFirstCards = viewLastCards - cardsPerPage;
    const currentCards = projectInfo.slice(viewFirstCards, viewLastCards)

    const paged = (PageNumber) => {
        setcurrentPage(PageNumber)
    }
    const handleClick = (e) => {
        e.preventDefault();
    }

    return (

        <div className={HomeCss.cnt} >
            <p className={HomeCss.p1}>{"<Full Stack Developer/>"} </p>
            <p className={HomeCss.p}> {projectDescript} </p>
            <div className={HomeCss.cardcnt} >
                {
                    currentCards?.map(c => {
                        return (
                            <div key={c.id}>
                                <InfoCard
                                    name={c.name}
                                    pic={c.pic}
                                    link={c.link}
                                    video={c.video ? c.video : null}
                                    description={c.description}
                                />
                            </div>
                        )
                    })
                }
            </div>
            {projectInfo.length > 1 ? <Paged cardsPerPage={cardsPerPage} allCards={projectInfo.length} paged={paged} /> : null}
        </div>
    )
}

export default Home;