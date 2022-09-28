import React from 'react';
//import SidebarCheckbox from './checkbox';
import SidebarSearchBar from './countrySearch';
import SidebarRadioButtons from './radioImputs';
import { getJobs } from '../../services/jobs';

class Sidebar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      country: []
    }
  }

  async componentDidMount() {
    const jobs = await getJobs()
    this.setState({ country: jobs })
  }

  render() {

    const { country } = this.state
    
    return (
      <aside className="font-[Poppins,system-ui]">
        {/* <SidebarCheckbox /> */}
        <div className="my-4">
          <p className="font-bold text-gray-400">LOCATION</p>
          <SidebarSearchBar placeholder="City, state, zip code or country" data={country} />
        </div>
        <SidebarRadioButtons />
      </aside>
    );
  }
}

export default Sidebar;