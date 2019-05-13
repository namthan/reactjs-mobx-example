import React from 'react'
import {
  Header, Container
} from 'semantic-ui-react'
import DealList from './DealList'
import DealDetail from './DealDetail'
import SearchBar from './SearchBar'
import { observer, inject } from 'mobx-react'

@inject("appStore") @observer
class App extends React.Component {

  searchDeals = (searchTerm) => {
    this.props.appStore.setSearchTerm(searchTerm)
  }

  setCurrentDeal = (dealId) => {
    this.props.appStore.setCurrentDeal(dealId)
  }

  unsetCurrentDeal = () => {
    this.props.appStore.unsetCurrentDeal()
  }

  render() {
    const appStore = this.props.appStore
    if (appStore && appStore.currentDealId) {
      return (
        <Container>
          <DealDetail
            initialDealData={appStore && appStore.currentDeal}
            onBack={this.unsetCurrentDeal}
          />
        </Container>
      )
    }
    const dealsToDisplay =
      appStore && appStore.deals.length > 0
        ? appStore.deals
        : []
    return (
      <Container style={{ marginTop: '7em' }}>
          <SearchBar searchDeals={this.searchDeals} searchTerm={appStore && appStore.searchTerm.get()} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
      </Container>
    )
  }
}

export default App
