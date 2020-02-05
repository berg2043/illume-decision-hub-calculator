import React, {Component} from 'react';
import './AdminEditCalc.css';
import AdminEditPrice from '../AdminEditPrice/AdminEditPrice';
import AdminEditBreak from '../AdminEditBreak/AdminEditBreak';
import AdminEditLever from '../AdminEditLever/AdminEditLever';

class AdminEditCalc extends Component{

  state = {
    break: false,
    lever: false,
    price: false
  }

  handleBreakClick = () => this.state.break ? this.setState({break:false}) : this.setState({break:true});
  handleLeverClick = () => this.state.lever ? this.setState({lever:false}) : this.setState({lever:true});
  handlePriceClick = () => this.state.price ? this.setState({price:false}) : this.setState({price:true});

  render(){
    return(
      <center>
        <div className="main-container admin-padding">
          <div className="admin-button-flex-container">
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>this.handleBreakClick('break')}
              >
                Edit Break Even
              </button>
            </div>
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>this.handlePriceClick('price')}
              >
                Edit Price Setting
              </button>
            </div>
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>this.handleLeverClick('lever')}
              >
                Edit Profit Lever
              </button>
            </div>
          </div>
        </div>
          {this.state.price ?
            <div className="admin-edit-calc-render-container">
              <AdminEditPrice />
            </div>
            :
            ''
          }
          {this.state.break ?
            <div className="admin-edit-calc-render-container">
              <AdminEditBreak />
            </div>
            :
            ''
          }
          {this.state.lever ?
            <div className="admin-edit-calc-render-container">
              <AdminEditLever />
            </div>
            :
            ''
          }
      </center>
    );
  }
}

export default AdminEditCalc;