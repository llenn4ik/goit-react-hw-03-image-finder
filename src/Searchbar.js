  import React, { Component } from "react";
import s from './styles.module.css';

export default class Searchbar extends Component {
  state = { inputValue: "" };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = (e) => {
    const { inputValue } = this.state;
    e.preventDefault();
    this.props.onSubmit(inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}