import React, { Component } from "react";


class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isCHidden: true,
      isPHidden: true,
      isJHidden: true,
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.getContent(this.props.lang, 'projects')}</h2><br/>

        <div id="this_site">
            <h3>{this.props.getContent(this.props.lang, 'this_site')}</h3>
            <p>
              {this.props.getContent(this.props.lang, 'this_site')}
            </p>
        </div>

        <div id="name_file_analyzer">
          <h3>name_file_analyzer</h3>
          <p>
            {this.props.getContent(this.props.lang, 'name_file_analyzer')}
          <a href="https://github.com/mikkomajamaa/name_file_analyzer" target="_blank" rel="noopener noreferrer"> gitHub</a>.
          </p>
        </div>

        <div id="compute_taxes_by_year_and_emission_classes">
            <h3>compute_taxes_by_year_and_emission_classes</h3>
            <p>
              {this.props.getContent(this.props.lang, 'compute_taxes_by_year_and_emission_classes')}
            <a href="https://github.com/mikkomajamaa/compute_taxes_by_year_and_emission_classes" target="_blank" rel="noopener noreferrer"> gitHub</a>.
            </p>
        </div>

        <div id="SmartPostApp">
            <h3>SmartPostApp</h3>
            <p>
              {this.props.getContent(this.props.lang, 'SmartPostApp')}
            <a href="https://github.com/mikkomajamaa/SmartPostApp" target="_blank" rel="noopener noreferrer"> gitHub</a>.
            </p>
        </div>
        <div id="testdatacreator">
            <h3>testdatacreator</h3>
            <p>
              {this.props.getContent(this.props.lang, 'testdatacreator')}
            <a href="https://github.com/mikkomajamaa/testdatacreator" target="_blank" rel="noopener noreferrer"> gitHub</a>.
            </p>
        </div>
  </div>
    );
  }
}

export default Projects;
