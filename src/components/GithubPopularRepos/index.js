import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem/index'
import RepositoryItem from '../RepositoryItem/index'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    repoItem: [],
    statusView: 'LOADING',
    languageId: languageFiltersData[0].id,
  }

  componentDidMount = () => {
    this.fetchDataRepositories()
  }

  fetchDataRepositories = async () => {
    try {
      const {languageId} = this.state
      const response = await fetch(
        `https://apis.ccbp.in/popular-repos?language=${languageId}`,
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({repoItem: data.popular_repos, statusView: 'SUCCESS'})
      } else {
        this.setState({statusView: 'FAILURE'})
      }
    } catch (error) {
      console.log(error.message)
      this.setState({statusView: 'FAILURE'})
    }
  }

  languageClicked = id => {
    this.setState({statusView: 'LOADING', languageId: id}, () => {
      this.fetchDataRepositories()
    })
  }

  render() {
    const {repoItem, statusView} = this.state
    console.log(repoItem)

    let renderRepoItems
    switch (statusView) {
      case 'SUCCESS':
        renderRepoItems = repoItem.map(eachRepo => (
          <RepositoryItem eachRepo={eachRepo} key={eachRepo.id} />
        ))
        break
      case 'FAILURE':
        renderRepoItems = (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure"
          />
        )
        break
      case 'LOADING':
        renderRepoItems = (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )
        break
      default:
        renderRepoItems = null
    }

    return (
      <div>
        <h1>Popular</h1>
        <ul className="ul">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguage={eachLanguage}
              languageClicked={this.languageClicked}
              key={eachLanguage.id}
            />
          ))}
        </ul>
        <ul>{renderRepoItems}</ul>
      </div>
    )
  }
}

export default GithubPopularRepos
