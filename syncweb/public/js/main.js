/*
FilterableProjectTable
  FilterBar
  ProjectsTable
    ProjectTableHeading
    ProjectRow
*/
var ProjectTableHeading = React.createClass({
  render: function () {
    return (
      <tr>
        <th>ID</th>
        <th>Project Name</th>
        <th>Duration</th>
        <th>Status</th>
        <th>Date Submitted</th>
        <th>Date Completed</th>
        <th>Organization</th>
        <th>Sync Options</th>
      </tr>
    );
  }
});

var ProjectRow = React.createClass({
  render: function () { 
    var name = (this.props.project.project_name.length > 50) ? this.props.project.project_name.substring(0, 50) + '...' : this.props.project.project_name;
    
    return ( 
      <tr>
        <td>{this.props.project.id}</td>
        <td>{name}</td>
        <td>{this.props.project.duration}</td>
        <td>{this.props.project.phase}</td>
        <td>{this.props.project.date_submitted}</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
    );
  }
});

var ProjectsTable = React.createClass({
  render: function () { 
    var rows = [],
      headings = <ProjectTableHeading />;
    
    this.props.projects.forEach(function (project) {
      if (this.props.phase != '' && this.props.phase != project.phase) return;
      
      rows.push(<ProjectRow project={project} key={project.id} />);
    }.bind(this));
    
    return (
      <table>
        <thead>
          {headings}      
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

var FilterBar = React.createClass({
  handleChange: function () {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.startDateInput.value,      
      this.refs.endDateInput.value,
      this.refs.phaseSelect.value
    );
  },
  render: function () {
    return (

      <form>
        <input 
          type="text"
          name="search" 
          placeholder="Search Project IDs, Organization Names, Project Names" 
          ref="filterTextInput"
          value={this.props.filterText}
          onChange={this.handleChange}
        />
        <br />
        <input 
          type="text"
          name="startDate"
          placeholder="Start Date" 
          ref="startDateInput"
          value={this.props.startDate}
          onChange={this.handleChange}
        />
        <input 
          type="text" 
          name="endDate" 
          placeholder="End Date"
          ref="endDateInput"
          value={this.props.endDate}
          onChange={this.handleChange}
        />
        <br />
        <select name="phase" value={this.props.phase} onChange={this.handleChange} ref="phaseSelect">
          <option value="">Select Phase</option>
          <option value="0">Incomplete</option>
          <option value="1">Transcribing Media</option>
          <option value="2">Timing Transcript</option>
          <option value="3">Prosyncing</option>
          <option value="4">Completed</option>
          <option value="5">Awaiting QA</option>
        </select>
      </form>
    );
  }
});

var FilterableProjectTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      startDate: '', 
      endDate: '', 
      phase: ''
    };
  },
  handleUserInput: function (filterText, startDate, endDate, phase) {
    this.setState({
      filterText: filterText, 
      startDate: startDate, 
      endDate: endDate, 
      phase: phase
    });
  },
  render: function () { 
    return (
      <div>
        <FilterBar
          filterText={this.state.filterText}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          phase={this.state.phase}
          onUserInput={this.handleUserInput}
        />
        <ProjectsTable 
          projects={this.props.projects}
          filterText={this.state.filterText}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          phase={this.state.phase}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <FilterableProjectTable projects={SWPROJECTS} />,
  document.getElementById('react-tests')
);