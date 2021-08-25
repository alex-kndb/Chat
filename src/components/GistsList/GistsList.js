import React, { useCallback, useEffect } from "react";
import { List, ListItem, ListItemText, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, selectArticlesError, selectArticlesLoading } from "../../store/gistslist/selectors";
import { getArticlesWithThunk } from "../../store/gistslist/actions";
import './GistsList.css';

export const GistsList = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);
    const articles = useSelector(selectArticles);

    const getApiData = useCallback(() => {
        dispatch(getArticlesWithThunk());
    }, [dispatch]);

    useEffect(() => {
        getApiData();
    }, [getApiData]);

    const renderApiData = useCallback((article) => (
        <ListItem divider key={article.id} style={{ backgroundColor: article.attributes.color }}>
            <ListItemText
                primary={`${article.attributes.season}. ${article.attributes.name}`}
                secondary={article.attributes.description} />
        </ListItem>
    ), []);

    if (loading) {
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
                <div className="apiData__wrapper">
                    <h2 className="apiData__title">Megavangelicals</h2>
                    <List className="articles">
                        {articles.map(renderApiData)}
                    </List >
                </div>
            </div>
        </div>
    )
};