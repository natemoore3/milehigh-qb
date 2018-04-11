import React from 'react'
import Link from 'gatsby-link'

import imgHeader from './assets/header.jpg';
import imgQuarterback from './assets/quarterback.jpg';
import imgWideReciever from './assets/wide-reciever.jpg';
import imgFootballPlayer from './assets/football-player.jpg';
import imgField from './assets/field.jpg';
import imgCoach from './assets/coach.jpeg';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      open: false,
    }
  }

  onSubmit = () => {
    this.setState({
      submitted: true,
      open: true,
    })
  }

  render() {
    const headerUrl = `url(${imgHeader})`;
    const imgFieldUrl = `url(${imgField})`;
    const { submitted, open } = this.state;

    return (
      <div
        style={{
          height: (submitted && open) ? 'calc(100vh - 104px)' : 'auto',
          overflow: (submitted && open) ? 'hidden' : 'auto',
        }}
      >
        <div className="background-cover bg-overlay" style={{ backgroundImage: headerUrl }}>
          <div className="container">
            <div className="row justify-content-end align-items-center py-4 py-lg-5">
              <div className="col-12 col-md-6 pb-4">
                <h1 className="h3">
                  "If you want to WIN, do the ordinary things BETTER than anyone else does them day in and day out."
                </h1>
                <h2 className="text-white h5 mb-3 mb-lg-0">Chuck Noll, Pittsburgh Steelers</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-dark rounded-md py-4 px-4 mb-5" style={{ marginTop: -65, zIndex: 10, position: 'relative' }}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-4">
                <h4 className="text-light mb-1">Pricing:</h4>
                <div className="pl-3">
                  <p className="text-light mb-0"><b>One on One:</b> 75$/HR</p>
                  <p className="text-light mb-0"><b>Group Rate:</b> 125$/HR</p>
                </div>
              </div>
              <div className="mb-4 mb-md-0">
                <h4 className="text-light mb-1">What to Expect</h4>
                <p className="text-light mb-0">
                  At Mile High QB you will receive prime coaching from a former Division 1 QB. Paul has a background on all offensive positions and has worked and played with some of the best in the country. Whatever stage you are at in your play, Paul can evaluate and provide the necessary development so you can achieve greatness.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="text-light mb-1">Get Started</h4>
              <form onSubmit={() => this.onSubmit()} action="https://formspree.io/xrqjzgym" method="POST">
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <input type="hidden" name="_next" value="/" />
                <div className="form-group">
                  <input type="text" className="form-control bg-light text-dark custom-input" name="firstName" id="firstName" placeholder="Athletes First Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control bg-light text-dark custom-input" name="lastName" id="lastName" placeholder="Athletes Last Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control bg-light text-dark custom-input" name="position" id="position" placeholder="Position" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control bg-light text-dark custom-input" name="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control bg-light text-dark custom-input" name="phone" id="phone" placeholder="Phone Number" />
                </div>
                <button type="submit" className="btn btn-primary text-white pull-right">Get Started</button>
              </form>
            </div>
          </div>
        </div>
        <div className="background-cover bg-overlay" style={{ backgroundImage: imgFieldUrl, backgroundPosition: 'center 80%' }}>
          <div className="container py-4 py-lg-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 pb-4">
                <h4 className="mb-1">Why MileHigh QB</h4>
                <p className="text-white">
                  Their are a lot of people out there looking to improve their skills and find ways to become elite. With Mile High QB, you will receive drills and instruction that apply to where you are at and where you want to go. You can't become a college QB without being a great high school QB. All instruction will apply to where you're at in your QB life and where you want to go. Paul has worked with all ages and can assess and improve skills to where you want to go.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-dark rounded-md py-4 px-4 mb-md-5" style={{ marginTop: -65, zIndex: 10, position: 'relative' }}>
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
              <img src={imgCoach} className="img-fluid" />
            </div>
            <div className="col-12 col-md-7">
              <h4 className="mb-1">Coach Millard</h4>
              <p className="text-white">
                has been coaching since 2015. He began his career at La Veta High School improving the team to their first undefeated regular season since the 1960's. In 2016 he coached Wide Receivers at Ponderosa High School in Parker, Colorado. The team that year led the state in points and broke multiple school records through the air. In 2017, Paul transitioned to the QB's coach at Ponderosa and the team went 9-2. He teaches social studies at Ponderosa as well.
              </p>
              <p className="text-white">
                Coach played high school ball at Flower Mound High School located near Dallas, Texas. The school's last winning season came in 2010 when Millard was the QB. Paul still holds the completions in a single game record for all Texas High Schools with 50.  Coach Millard earned a scholarship to continue playing at West Virginia University. He earned playing time throughout his career and started a number of games. Spending time with Offensive gurus such as Dana Holgersen, Jake Spavital, and Shannon Dawson while he was there. He received his Bachelors degree in History and Athletic Coaching and Master's degree in Sport Management while at WVU.
              </p>
            </div>
          </div>
        </div>
        {(open && submitted) &&
        <div className="message-background">
          <div className="message">
            <h3>Submitted!</h3>
            <p>Thank's for your interest in Mile High QB Club, we'll be in touch with you soon.</p>
            <button
              className="m-atuo btn btn-primary text-white"
              onClick={() => this.setState({ open: false })}
            >
              Close
            </button>
          </div>
        </div>}
      </div>
    )
  }
};

export default IndexPage;
