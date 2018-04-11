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
      {/* <div className="col text-right d-none d-md-block">
        <a className="btn btn-primary text-white">Get Started</a>
      </div> */}
    </div>
  </div>
)

const Footer = () => (
  <div className="bg-dark py-2">

  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mile High QB Club"
      meta={[
        { name: 'description', content: 'At Mile High QB you will receive prime coaching from a former Division 1 QB. Paul has a background on all offensive positions and has worked and played with some of the best in the country.' },
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
