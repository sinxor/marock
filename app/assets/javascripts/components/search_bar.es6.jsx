class SearchBar extends React.Component {
  constructor(props) {
    super(props)


  }

  render () {
    if ( this.props.lang === "en") {
      return (
        <form action={"/"+this.props.lang+"/search"} acceptCharset="UTF-8" method="get">
          <input name="utf8" type="hidden" value="√" />
          <button name="button" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            onFocus={() => this.props.showDropdown()}
            onBlur={() => this.props.hideDropdown()}
            value={this.props.term}
            onChange={(event) => {this.handleInputChange(event.target.value)}}
            placeholder="Search Stories"
            autoComplete="off"
            type="search"
            name="search[q]"
            id="search_q" />
        </form>
      );
    }
    if ( this.props.lang === "fr") {
      return (
        <form action={"/"+this.props.lang+"/search"} acceptCharset="UTF-8" method="get">
          <input name="utf8" type="hidden" value="√" />
          <button name="button" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            onFocus={() => this.props.showDropdown()}
            onBlur={() => this.props.hideDropdown()}
            value={this.props.term}
            onChange={(event) => {this.handleInputChange(event.target.value)}}
            placeholder="Recherche..."
            autoComplete="off"
            type="search"
            name="search[q]"
            id="search_q" />
        </form>
      );
    }
  }

  handleInputChange(term) {
    this.props.onSearchTermChange(term);
  }
}
