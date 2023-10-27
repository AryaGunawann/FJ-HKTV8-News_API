/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setNews,
  setLoading,
  setArticleBookmarks,
} from "../redux/actions/actionCreators";
import NoNewsFound from "../Components/NoNewsFound";
import defaultImage from "../assets/news.svg";
import { motion } from "framer-motion";
import DefaultPageSkeleton from "../Components/Skeleton";

const ProgrammingPage = () => {
  document.title = "Programming | News";
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const loading = useSelector((state) => state.loading);
  const articleBookmarks = useSelector((state) => state.articleBookmarks);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=programming&from=2023-09-30&sortBy=publishedAt&apiKey=0712e4932719454dbed13cdeb16baa93"
        );
        dispatch(setNews(response.data.articles));
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

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
      <h2 className="text-3xl font-semibold mb-6">Programming</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <DefaultPageSkeleton itemCount={10} />
        ) : news.length > 0 ? (
          news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-4 relative group hover:border-black border flex flex-col"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full"
              >
                <div className="relative flex-grow">
                  <div className="mb-2 cursor-pointer rounded">
                    {article.urlToImage ? (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-36 object-cover"
                      />
                    ) : (
                      <img
                        src={defaultImage}
                        alt="Default Image"
                        className="mx-auto h-40"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {article.description}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {article.source.name}
                </p>
              </a>
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

export default ProgrammingPage;
