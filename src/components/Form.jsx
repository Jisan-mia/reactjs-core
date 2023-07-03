import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    desc: '',
    library: '',
    isTermChecked: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleTermChecked = (e) => {
    this.setState({
      isTermChecked: e.target.checked
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }


  render() {
    const {title, desc, library, isTermChecked} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Title:
          <input type="text" name="title" id="title" placeholder="write your title" value={title} onChange={this.handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="desc">
          Description: 
          <textarea value={desc} onChange={this.handleChange} name="desc" id="desc"></textarea>
        </label>

      <br /><br />
       <label htmlFor="library">
          Library: 
         <select name="library" id="library" value={library} onChange={this.handleChange}>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
       </label>


       <br /><br />

        <label htmlFor="terms">Agree with terms and policy: 
        <input type="checkbox" name="terms" id="terms" checked={isTermChecked} onChange={this.handleTermChecked} /></label>

        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
