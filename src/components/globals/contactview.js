import React, { Component } from 'react'
import { Link } from 'gatsby'

class weWrite extends Component {
    render() {
        return (

            <div id="contactView" className="quickview has-background-info has-text-white">
            <header className="quickview-header has-background-dark">
                <p className="title has-text-white has-text-weight-bold">
                    <span className="icon">
                        <i className="fa fa-comments-o"></i>
                    </span>
                    Speak with an Expert
            </p>
                <span className="delete" data-dismiss="quickview" onclick="this.parentElement.parentElement.classList.remove('is-active')"></span>
            </header>

            <div className="quickview-body">
                <div className="quickview-block">
                    <form action="/" method="post">
                        <input type="hidden" name="zlf" value="side-form" />
                      
                   


                      


                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-primary" type="submit" onclick="sendLandingPageEventToGoogles('form_submission')">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-text" onclick="document.querySelector('.quickview').classList.remove('is-active')">Cancel</button>
                            </div>
                        </div>
                    </form>
                   
                </div>

            </div>

            <footer className="quickview-footer has-background-dark has-text-light has-text-centered">
              
        </footer>
        </div>

        )
    }
}

export default weWrite


