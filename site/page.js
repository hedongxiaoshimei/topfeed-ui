import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Alert from './pages/alert';

export default class App extends React.Component {
  renderMenu() {}
  renderComponents() {
    return <Alert />;
  }
  render() {
    return (
      <div className="app">
        <div className="header" />
        <div className="container">
          <div className="side-nav">{this.renderMenu()}</div>
          <div className="content">
            {this.renderComponents()}
            <ScrollToTop showUnder={200}>
              <div className="page-component-up">top</div>
            </ScrollToTop>
          </div>
        </div>
      </div>
    );
  }
}
