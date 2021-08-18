import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { API_URL } from '../../const';

export const Megavangelicals = () => {

    const [articles, setArticles] = useState([]);
    const [loadind, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(response => {
                return response.json();
            })
            .then((result) => setArticles(result.data))
            .catch((error) => console.log(error));
    }, []);

    if (!articles.length) {
        return (
            <div>
                <h3>No article</h3>
                <button>Try again</button>
            </div>
        )
    }

    return (
        <List className="articles">
            {articles.map((article) => (
                <ListItem divider key={article.id} style={{ backgroundColor: article.attributes.color }}>
                    <ListItemText
                        primary={`${article.attributes.season}. ${article.attributes.name}`}
                        secondary={article.attributes.description} />
                </ListItem>
            ))}
        </List >
    )
};