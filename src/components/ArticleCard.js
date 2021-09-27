import React from "react";
import Article from "../containers/Article";

function ArticleCard({article}) {
    const newDate = new Date(article.publishedDate); // object type Date
    const dateString = newDate.toDateString();
    return (
        <div className="ArticleCardWrapper">
            <div className="ArticleCardImage">
                <img src={article.image.url} alt={article.image.alt} />
            </div>
            <div className="ArticleCardText">
                <h2 className="ArticleCardTitle">{article.title}</h2>
                <p className="ArticleCardDate">{dateString}</p>
                <p className="ArticleCardDate">{article.blurb}</p>
                <p className="ArticleCardLink">
                    <a href={`/article/${article.id}`}>Read More</a>
                </p>
            </div>
        </div>
    );
} 

export default ArticleCard;