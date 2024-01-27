import React from "react";
import "../styles/HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../Requests";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      
    </div>
  );
}

export default HomeScreen;
