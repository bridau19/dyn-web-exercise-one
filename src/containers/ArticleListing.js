import React from 'react'; 
import ArticleCard from './../components/ArticleCard';
import Data from "../components/data.json";

function ArticleListing() {
    //console.log(Data);

    const articlesTitle='Articles'
    return (
        <div className="PageWrapper">
            <h2 className="headerOneStyle ArticleListingHeader">{articlesTitle}</h2>
            {Data.map((article, i) => (
                <ArticleCard article={article} key={i}/>
            ))}
        </div>
    );
}

export default ArticleListing;


/*

for (let i = 0; i < Array.length; i++) {
    Array[i];
}

Array.map((itemAtpostion, key) => {
        return(

        )
    })
*/