import React from "react";
import Article from "../containers/Article";

function ArticleCard({article}) {
    return (
        <div className="ArticleCardWrapper">
            <div className="ArticleCardImage">
                <img src={article.image.url} alt={article.image.alt} />
            </div>
            <div className="ArticleCardText">
                <h2 className="ArticleCardTitle">{article.title}</h2>
                <p className="ArticleCardDate">{article.publishedDate}</p>
                <p className="ArticleCardDate">{article.blurb}</p>
                <p className="ArticleCardLink"><a href="#">Read More</a></p>
            </div>
        </div>
    );
} 

export default ArticleCard;