import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import "../styles/main.scss"

const Header = () => (
  <div className="container py-2">
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <h3 className="m-0 text-dark">Mile High QB Club</h3>
      </div>
      <div className="col text-right d-none d-md-block">
        <a className="btn btn-primary text-white">Get Started</a>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <div className="bg-dark py-4">

  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
