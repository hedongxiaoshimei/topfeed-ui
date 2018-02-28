import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { Route, Link } from 'react-router-dom';
import pages from './pages';

export default class App extends React.Component {
  constructor() {
    super();
    this.components =
      this.components ||
      Object.assign(
        Object.values(pages.components).reduce((a, b) => {
          return Object.assign(a, b);
        }, {}),
        pages.documents
      );
  }
  getComponent(page) {
    const result = this.components[page];
    return result;
  }
  renderMenu() {
    return (
      <nav className="side-nav">
        <ul>
          <li className="nav-item">
            <a>开发指南</a>
            <ul className="pure-menu-list sub-nav">
              {Object.keys(pages.documents).map(page => {
                return (
                  <li className="nav-item" key={page}>
                    <Link to={page}>page</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav-item">
            <a>组件</a>
            {Object.keys(pages.components).map(group => {
              return (
                <div className="nav-group" key={group}>
                  <div className="nav-group__title">{group}</div>
                  <ul className="pure-menu-list">
                    {Object.keys(pages.components[group]).map(page => {
                      return (
                        <li key={page} className="nav-item">
                          <Link to={page}>{page}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </li>
        </ul>
      </nav>
    );
  }
  renderComponents() {
    return (
      <div>
        {Object.entries(this.components).map(([path, Component]) => {
          return <Route path={`/${path}`} component={Component} key={path} />;
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="container">
            <h1>uiy</h1>
            <ul className="nav">
              <li className="nav-item">
                <a href="/guide" target="_blank" rel="noopener noreferrer">
                  guide
                </a>
              </li>
              <li className="nav-item">
                <a className="active">component</a>
              </li>
              <li className="nav-item">
                <a href="/resource" target="_blank" rel="noopener noreferrer">
                  resource
                </a>
              </li>
            </ul>
          </div>
        </div>
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
