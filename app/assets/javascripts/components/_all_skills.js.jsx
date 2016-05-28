var AllSkills = React.createClass({
  getInitialState(){
    return { skills: [] }
  },
  componentDidMount(){
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },
  render(){
    return(
      <div>
        <h1>all skills</h1>
      </div>
    )
  }
});
