import React from 'react';

function Article() {
    const articleTitle = `Article Title`;
    return (
        <main>
            <section className="ArticleHeader">
                <div className="ArticleHeaderText">
                    <h1 className="HeaderOneStyle">{articleTitle}</h1>
                    <p className="ArticleCardDate">Date</p>
                    <p className="ArticleHeaderBlurb">Text</p>
                </div>
            </section>
            <section className="ArticleText">
                <p>Text</p>
                <h2>Header Two</h2>
                <h3>Header Three</h3>
            </section>
        </main>
       
    );
}

export default Article;