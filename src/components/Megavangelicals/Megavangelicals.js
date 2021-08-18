import React, { useCallback, useEffect, useState } from "react";
import { List, ListItem, ListItemText, CircularProgress } from "@material-ui/core";
import { API_URL } from '../../const';
import './Megavangelicals.css';

export const Megavangelicals = () => {

    const [articles, setArticles] = useState([]);
    const [loadind, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getApiData = () => {
        setError(false);
        setLoading(true);
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`)
                };
                return response.json();
            })
            .then((result) => {
                setArticles(result.data);

            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getApiData();
    }, []);

    const renderApiData = useCallback((article) => (
        <ListItem divider key={article.id} style={{ backgroundColor: article.attributes.color }}>
            <ListItemText
                primary={`${article.attributes.season}. ${article.attributes.name}`}
                secondary={article.attributes.description} />
        </ListItem>
    ), []);

    if (loadind) {
        return (
            <div className="main-wrapper">
                <div className="apiData__container">
                    <CircularProgress style={{ color: 'white' }} />
                </div>
            </div>
        )
    };

    if (error) {
        return (
            <div className="main-wrapper">
                <div className="apiData__container">
                    <div className="apiError">
                        <h3 className="apiError__title">No article</h3>
                        <button className="apiError__btn btn" onClick={getApiData}>Try again</button>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="main-wrapper">
            <div className="apiData__container">
                <h2 className="apiData__title">Megavangelicals</h2>
                <List className="articles">
                    {articles.map(renderApiData)}
                </List >
            </div>
        </div>
    )
};