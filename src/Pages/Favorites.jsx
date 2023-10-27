/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setArticleBookmarks } from "../redux/actions/actionCreators";
import NoNewsFound from "../Components/NoNewsFound";
import defaultImage from "../assets/news.svg";

const Favorites = () => {
  document.title = "Favorites News";
  const dispatch = useDispatch();
  const articleBookmarks = useSelector((state) => state.articleBookmarks);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleBookmarkClick = (article) => {
    const updatedBookmarks = articleBookmarks.filter(
      (savedArticle) => savedArticle.title !== article.title
    );
    dispatch(setArticleBookmarks(updatedBookmarks));
  };

  return (
    <div className="container mx-auto p-8 bg-gray-200">
      <h2 className="text-3xl font-semibold mb-6">Favorites</h2>
      {articleBookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articleBookmarks.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 relative group hover:border-black border transition duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="absolute top-2 right-2">
                  <button
                    className="text-red-500 bg-red-100 rounded-full p-1"
                    onClick={() => handleBookmarkClick(article)}
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              )}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.urlToImage ? (
                  <div>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="mb-2 cursor-pointer rounded"
                      />
                    </a>
                    {article.source && article.source.name && (
                      <p className="text-sm text-gray-500">
                        {article.source.name}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center">
                        <img
                          src={defaultImage}
                          alt="Default Image"
                          className="mb-2 cursor-pointer rounded h-52"
                        />
                      </div>
                    </a>
                  </div>
                )}
              </a>
              <Link to={article.url} className="hover:underline cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              </Link>
              <p className="text-gray-600">
                {article.content
                  ? article.content.substring(0, 150) + "..."
                  : ""}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <NoNewsFound />
        </>
      )}
    </div>
  );
};

export default Favorites;
