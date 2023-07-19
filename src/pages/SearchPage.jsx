import { useState } from "react";
import "../style/searchpage.css";
import { Search } from "react-feather";
import SearchResult from "../components/SearchResult";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="search-page">
      <form className="d-flex mt-5 mx-auto px-4 py-2" role="search">
        <input
          className="bg-transparent text-white border-0 flex-fill"
          type=""
          placeholder="Search Movies, Series, Actors..."
          aria-label="Search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          className="border-0 bg-transparent d-flex align-items-center"
          type="submit"
        >
          <Search color="gold" size={20} />
        </button>
      </form>

      <main className="search-results">
        <SearchResults type={"movie"} query={searchQuery} />
        <SearchResults type={"tv"} query={searchQuery} />
        <SearchResults type={"person"} query={searchQuery} />
      </main>
    </section>
  );
};

export default SearchPage;
