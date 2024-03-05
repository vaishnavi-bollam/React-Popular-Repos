// Write your code here
const RepositoryItem = props => {
  const {eachRepo} = props
  console.log(eachRepo)
  const newRepoItemList = {
    name: eachRepo.name,
    id: eachRepo.id,
    issuesCount: eachRepo.issues_count,
    forksCount: eachRepo.forks_count,
    starsCount: eachRepo.stars_count,
    avatarUrl: eachRepo.avatar_url,
  }

  const {
    name,
    id,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = newRepoItemList

  return (
    <li className="liRepoContent">
      <img src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <div className="contentBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="contentBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="contentBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
