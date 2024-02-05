import { bible } from "../data";


const Navbar= (props) =>{
    return (
    <div style={{backgroundColor: "#888", height: "8%",
     width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", }} >
        <h2 style={{marginLeft: '20px'}}>Bible App</h2>
        <div style={{display: "flex", alignItems: 'center',justifyContent:'space-between', columnGap:'40px',paddingRight:'20px'  }}><input style={{height:'25px'}} type="searchbar"/>
        <select onChange={(e) => props.handleSwitch(e.target.value)} style={{height:'30px'}}  name="cars" id="cars">
            {Object.keys(bible).map((book) => {
                return <option value={book}>{book}</option>
            })}
</select>
        </div>
        
        </div>

    );
  }
  export default Navbar