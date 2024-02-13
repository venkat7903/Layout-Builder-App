// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <div className="navbar-container">
          <h1 className="menu-title">Left Navbar Menu</h1>
          <ul className="items-container">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="navbar-container">
          <h1 className="menu-title">Content</h1>
          <p className="item">
            Lorem ipsum dolar sit amet, consector adipiscing elit lorem epsun
            dolar sit amet, consector adipiscing elit lorem epsun dolar sit
            amet, consector adipiscing elit
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="navbar-container">
          <h1 className="menu-title">Right Navbar</h1>
          <div className="items-list">
            <p className="list-item">Ad 1</p>
            <p className="list-item">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavbar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
