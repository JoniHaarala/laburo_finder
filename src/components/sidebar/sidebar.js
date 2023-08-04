import SidebarRadioButtons from './radioImputs';
import Searchbar from '../searchBar';
import { SIDEBAR_SEARCH_STYLE } from '../../constants/constants';

export default function Sidebar({ query, setQuery }) {
  //console.log(query);
  
  return (
    <aside className="font-[Poppins,system-ui]">
      <div className="my-4">
        <p className="font-bold text-gray-400 mb-5">LOCATION</p>
        <Searchbar
          query={query}
          setQuery={setQuery}
          placeholder={'City, state, zip code or country'}
          setStyles={SIDEBAR_SEARCH_STYLE}
        />
        {/* <SidebarSearchBar placeholder="City, state, zip code or country" data={country} /> */}
      </div>
      <SidebarRadioButtons setCountry={setQuery}/>
    </aside>
  );
}