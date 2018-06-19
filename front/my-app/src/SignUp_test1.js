// import React, { Component } from 'react';
// import './App.css';

// class SignUp extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }

//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }

//       handleSubmit(event) {
//         alert('Your email: ' + this.state.value);
//         event.preventDefault();
//       }

//   render(){
//     return(
//             <form onSubmit={this.handleSubmit}>
//                 <h1>{this.state.value}</h1>
//                 <label>
//                 Email
//                 <input type="email" name="email" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <button type="submit" value="Submit">
//                     Submit
//                 </button>

//             </form>

//         );
// }
// }
// export default SignUp;
