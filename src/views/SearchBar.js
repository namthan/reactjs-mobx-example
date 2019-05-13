import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {

  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    this.props.searchDeals(e.target.value)
  }

  render() {
    return (
      <Input
        placeholder="Search All Deals"
        defaultValue={this.props.searchTerm}
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchBar
