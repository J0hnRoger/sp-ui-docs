import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    // handle route changes - on stock la fin de l'url dans le state ... 
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    // ... Handle routes - si ce paramètre correspond à une entrée dans le JSON composantData, alors on l'affiche  
    const {route} = this.state;
    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];

    return (
      <div>
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </div>
    )
  }
}