import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets(props) {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("RAMADHAN 2021", "Top news - 9999 dibaca")}
      {newsArticle("GAMESTOCK = GAMESTONK", "Top news - 1000 dibaca")}
      {newsArticle("#sasha", "Top news - 8337 dibaca")}
      {newsArticle("Vaksin COVID19", "Top news - 2312 dibaca")}
      {newsArticle("#ThankYouMAPPA", "Top news - 10000 dibaca")}
    </div>
  );
}

export default Widgets;