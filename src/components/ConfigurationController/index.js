// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContentCheckbox = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftCheckbox = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightCheckbox = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configure-controller-container">
          <div className="sub-configure-controller-container">
            <h1 className="layout-title">Layout</h1>
            <div className="checkbox-container">
              <input
                checked={showContent}
                type="checkbox"
                id="content"
                onChange={onChangeContentCheckbox}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="leftNavbar"
                onChange={onChangeLeftCheckbox}
              />
              <label htmlFor="leftNavbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="rightNavbar"
                onChange={onChangeRightCheckbox}
              />
              <label htmlFor="rightNavbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
