import React from 'react'
import PropTypes from 'prop-types'
import {
  Button, Card, Grid, Label, Image, Container, Header
} from 'semantic-ui-react'
import { observer, inject } from "mobx-react";

import { priceDisplay } from '../util/util'

@inject("dealDetailStore") @observer
class DealDetail extends React.Component {

  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  async componentDidMount() {
    this.props.dealDetailStore.setInitialDeal(this.props.initialDealData)
    this.props.dealDetailStore.fetchDetail(this.props.initialDealData.key)
  }

  openDealUrl = () => {
    Linking.openURL(this.props.dealDetailStore.deal.url)
  }

  render() {
    const { deal} = this.props.dealDetailStore
    return (
      <React.Fragment>
        {deal && <Container text>
          <Header>{deal.title}</Header>
          <Label >{priceDisplay(deal.price)}</Label>
          <Label >{deal.cause.name}</Label>
          <Button onClick={this.props.onBack}>Back</Button>
          <Image src={deal.media[0]} />
          {deal.user && (<Grid.Row>
            <Image
              src={deal.user.avatar}
            />
            <Label>{deal.user.name}</Label>
          </Grid.Row>)}
          <p>
            {deal.description}
          </p>
          <Button title="Buy this deal!" onClick={this.openDealUrl} />
        </Container>}
      </React.Fragment>
    )
  }
}

export default DealDetail
