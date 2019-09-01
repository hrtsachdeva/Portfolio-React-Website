import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        const resumeData = this.props.resumeData;
        return (
            <section id="contact">
            <div className="row section-head">
              <div className="twelve columns" align="center">
                <p className="lead">
                Feel free to contact me for any work or suggestions below
                </p>
              </div>
            </div>
            {/* <div className="row">
              <aside className="eigth columns footer-widgets">
                <div className="widget">
                  <h4>Linked in :
                    {resumeData.linkedinId}
                  </h4>
                </div>
              </aside>
            </div> */}
            <footer>
             <div className="row">
              <div className="twelve columns">
                <ul className="social-links">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                      return(
                        <li>
                          <a href={item.url}>
                          <i className={item.className} />
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
                
              </div>
              
              </div>
              </footer>
          </section>
        );
    }
}