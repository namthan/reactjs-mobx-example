import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Icon, Card } from 'semantic-ui-react'
import { priceDisplay } from '../util/util'

class DealItem extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  handlePress = () => {
    this.props.onPress(this.props.deal.key)
  }

  render() {
    const { deal } = this.props
    return (
      <Grid.Column>
        <Card>
          <Image src={deal.media[0]}
            onClick={this.handlePress} />
          <Card.Content>
            <Card.Header>{deal.title}</Card.Header>
            <Card.Description>{deal.cause.name}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {priceDisplay(deal.price)}
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default DealItem
