import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsCon from './pc_newscontainer'

export default class PCIndex extends React.Component {
  render(){
    return (
      <div>
        <PCHeader />
        <PCNewsCon />
        <PCFooter />
      </div>
    )
  }
}
