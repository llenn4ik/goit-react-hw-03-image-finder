import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import imagesApi from "./services/imagesApi";

import Loader from "react-loader-spinner";
// import './App.css';
// import services from './services';
import s from "./styles.module.css";

export default class App extends Component {
  state = {
    arrayImages: [],
    page: 1,

    searchQuery: "",
    error: null,
    loading: false,
    isOpenModal: false,
    // BigImage: "",
  };

  // ====
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }
  fetchImages = () => {
    const API_KEY = "18747667-73f1ac82bfe1238b7580f61a7";
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(arrayImages =>
        this.setState((prevState) => ({
          arrayImages: [...prevState.arrayImages, ...arrayImages],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

  };
  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, arrayImages: [] });
  };

  render() {
    const { arrayImages, loading, error, isOpenModal, BigImage } = this.state;

    return (
      <div>
        <p>hello</p>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>Whoops, something went wrong: ${error.message}</p>}
       
        {arrayImages.length > 0 && (
          <ImageGallery
            arrayImages={arrayImages}
            // imageClick={this.onClickModal}
          />
        )}
         {loading && (
          <Loader
            type="Rings"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000} //3 secs
          />
        )}
          {arrayImages.length > 0 && (
          <button type="button" onClick={this.fetchImages}>Load more</button>
        )}
      </div>
    );
  }
}

// export default App;
