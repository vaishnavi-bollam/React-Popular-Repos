// Write your code here
const LanguageFilterItem = props => {
  const {eachLanguage, languageClicked} = props
  const {id, language} = eachLanguage
  //   console.log(eachLanguage)

  const onlanguageCLicked = () => {
    languageClicked(id)
  }

  return (
    <li>
      <button type="button" onClick={onlanguageCLicked}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
