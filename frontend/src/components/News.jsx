import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load API Key securely
  // const API_KEY = import.meta.env.NEWS_API_KEY;
  // const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ffc39899f1654db19f072f2683160845`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        Latest News
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading news...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl 
                 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={article.urlToImage || img1}
                alt="News"
                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:brightness-110"
              />
              <h2 className="text-xl font-bold mt-4">{article.title}</h2>
              <p className="text-gray-400 mt-2">
                {article.description || "No description available"}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-400 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
