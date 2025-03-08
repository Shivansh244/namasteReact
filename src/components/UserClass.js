import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            
        }
    }

    render() {

        const {name,location} = this.props;
        const {count} = this.state
        return(
            <div className="user-card">

                <h1>Name: {name}</h1>
                <button
                    onClick={()=>{
                        this.setState({
                            count: count +1
                        });
                        
                    }}
                >
                    Count: {count}
                </button>
                <h1>Location: {location} </h1>
                <h1>Contact: @st24</h1>
            </div>
        )
    }
}

export default UserClass;
