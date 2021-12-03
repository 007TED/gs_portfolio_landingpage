import React from 'react';
import './article.css';
const Article = ({imgUrl, date, title,blogUrl}) => {
    return(
        <div className="gsp__blog-container_article">
            <div className="gsp__blog-container_article-image">
                <img src={imgUrl} alt="Blog"/>
            </div>
            <div className="gsp__blog-container_article-content">
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
                <p><a href={blogUrl}>Read Full Article</a></p>
            </div>
        </div>
    )
}

export default Article;