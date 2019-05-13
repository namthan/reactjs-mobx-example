import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from 'semantic-ui-react'
import DealItem from './DealItem'

class DealList extends React.Component {

  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Grid container columns={3} doubling stackable>
        {this.props.deals.map(deal => (<DealItem deal={deal} key={deal.key} onPress={this.props.onItemPress} />))}
      </Grid>
    )
  }
}

export default DealList
