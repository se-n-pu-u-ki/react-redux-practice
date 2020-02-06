import React from 'react';
import PropTypes from 'prop-types';

const App = ()  => {
  const profiles = [
    {name:"Moeto",age:20},
    {name:"Suzuki",age:20}
  ];
  return(
    <div>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi!I am {props.name} and {props.age} years old</div>
}

User.PropTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}
export default App;
