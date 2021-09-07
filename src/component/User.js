import React, {useState, useEffect} from 'react'

import axios from 'axios';

function User() {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
  
    useEffect(() => {
      axios('http://localhost:3000/api/v1/ecolabel_categories')
      .then(response => {
        console.log(response.data)
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
    }, []);
    
    const handleSearch = (event) =>{
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value)
        result = allData.filter((data) => {
            return data.ecolabel.name.search(value) != -1;
        });
        setFilteredData(result);
    }

    return (
        <div className="User">
            <div style={{ margin: '0 auto', marginTop: '10%'}}>
                <label>Search:</label>
                <input type="text" onChange={(event) => handleSearch(event)} />
            </div>

            <div style={{padding:10}}>
                {filteredData.map((value,index)=>{
                    return(
                        <div key={value.id}>
                        {/* <div style={styles}> */}
                        {value.ecolabel.name}
                        {/* </div> */}
                        </div>
                    )
                })}
            </div>
            <div>User Message</div>
        </div>
    )
}

export default User;