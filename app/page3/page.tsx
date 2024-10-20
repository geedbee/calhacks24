"use client";
import ScraperView from "@/app/page3/webscraper";
import { useEffect, useState } from "react";
export default function Page3() {
  let [scrapedPage, setScrapedPage] = useState("Loading...");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrapePage = (input) => {
    input.preventDefault(); // Prevent the default form submission
    alert(inputValue);
    ScraperView(inputValue)
      .then((response) => setScrapedPage(response))
      .catch((error) => setScrapedPage("Failed to load: " + error));
  };

  return (
    <div>
      <form onSubmit={scrapePage}>
        <label>
          Text Input:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {scrapedPage}
    </div>
  );
}
