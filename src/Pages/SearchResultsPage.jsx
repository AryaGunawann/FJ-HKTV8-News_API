/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setNews,
  setLoading,
  setArticleBookmarks,
} from "../redux/actions/actionCreators";
import NoNewsFound from "../Components/NoNewsFound";
import { useParams } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import CategoryFilter from "../Components/filter/CategoryFilter";
import { motion } from "framer-motion";
import CustomSkeleton from "../Components/Skeleton";
import defaultImage from "../assets/news.svg";

const SearchResultsPage = () => {
  document.title = "Search Results | News";
  const { searchTerms } = useParams();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const loading = useSelector((state) => state.loading);
  const articleBookmarks = useSelector((state) => state.articleBookmarks);

  const [category, setCategory] = useState("business");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = searchTerms
          ? `https://newsapi.org/v2/everything?q=${searchTerms}&apiKey=0712e4932719454dbed13cdeb16baa93`
          : `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=0712e4932719454dbed13cdeb16baa93`;

        const response = await axios.get(apiUrl);
        dispatch(setNews(response.data.articles));
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [searchTerms, category, dispatch]);

  const handleBookmarkClick = (article) => {
    const isArticleSaved = articleBookmarks.some(
      (savedArticle) => savedArticle.title === article.title
    );

    const updatedBookmarks = isArticleSaved
      ? articleBookmarks.filter(
          (savedArticle) => savedArticle.title !== article.title
        )
      : [...articleBookmarks, article];

    dispatch(setArticleBookmarks(updatedBookmarks));
  };

  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className="container mx-auto p-8 bg-gray-200"
    >
      <h2 className="text-3xl font-semibold mb-6">Search Results</h2>
      <div>
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.length > 0 ? (
          news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-4 relative group hover:border-black border"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div>
                  {loading ? (
                    <CustomSkeleton width={210} height={118} />
                  ) : article.urlToImage ? (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="mb-2 cursor-pointer rounded w-full h-36 object-cover"
                    />
                  ) : (
                    <div className="flex justify-center">
                      <img
                        src={defaultImage}
                        alt="Default Image"
                        className="mx-auto h-40"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h3>
                </div>
              </a>
              <p className="text-gray-600">{article.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                {article.source.name}
              </p>
              <div className="absolute bottom-2 right-2 hidden group-hover:block">
                <button
                  className={`${
                    articleBookmarks.some(
                      (savedArticle) => savedArticle.title === article.title
                    )
                      ? "text-black"
                      : "text-gray-500"
                  } hover:text-black`}
                  onClick={() => handleBookmarkClick(article)}
                >
                  <FaBookmark size={20} />
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <NoNewsFound />
        )}
      </div>
    </motion.div>
  );
};

export default SearchResultsPage;