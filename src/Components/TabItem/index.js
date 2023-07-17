import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTab, selectedTabDetails} = props
  const {tabId, displayText} = tabDetails
  const isActive = selectedTab === tabId
  const selectedTabClass = isActive ? 'selected-tab-button' : 'tab-button'
  const changeTab = () => {
    selectedTabDetails(tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={`${selectedTabClass}`}
        type="button"
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
