import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <div className="border-2 bg-slate-300  text-center mt-10 mb-10">Books</div>

           <Tabs>
            
    
        <Link 
        // to=''
         onClick={() =>setTabIndex(0)} className={`${tabIndex === 0 ? 'border border-b-4' : 'border-b' }`}>
      <Tab>Read</Tab>
      </Link>
      <Link 
    //   to={`wishlist`}
       onClick={() =>setTabIndex(1)} className={`${tabIndex === 1 ? 'border border-b-4' : 'border-b' }`}>
      <Tab>Wishlist</Tab>
      </Link>
    

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    
  </Tabs>
        </div>

        
    );
};

export default ListedBooks;