import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import { getCharacters } from '../actions/characters';
import { BASE_URL } from '../utils/urls';
import axios from 'axios'


class Home extends Component {


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCharacters())
  }


  render() {
    { characters.map( character => {
    const {names} = characters
    return (
      <div >
 <Segment  style={{backgroundImage: `url(images/GoT.jpg)`}} basic>
<Segment basic textAlign='center'>
<Header as='h1' style={styles.header}>Chaos is a Ladder</Header>
</Segment>
<Grid>
<Grid.Column computer={8} tablet={8} mobile={16}>
 <Segment inverted>
   <Header
     as='h1'
     textAlign='center'
     style={styles.header}>
       {name}
   </Header>
   <Divider />
 </Segment>
</Grid.Column>
<Grid.Column computer={8} tablet={8} mobile={16}>
 <Segment inverted>
   <Header
     as='h1'
     textAlign='center'
     style={styles.header}>
       Breweries
   </Header>
   <Divider />
 </Segment>
</Grid.Column>
</Grid>
</Segment>

      </div>
      );
    }
  }
}}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Home;
