import React,{Component} from "react"

class I18n extends Component{
    change(option){
        localStorage.setItem("lang",option.target.value);
        window.location.reload();
    }
    render(){
        return(
    <div>
        <h1>
        I18n
            </h1>
            <nav className="container mb-4 mt-4">

<div className="row">
    <div className="col-10">
    </div>

    <div className="col-2">
       <select className="custom-select pull-right" onChange={this.onChange}>
           <option value="de">
deustch
           </option>
           <option value="ru">
               русский
               </option>
            
       </select>
    </div>
</div>
            </nav>
    </div>
        )
    }
}

export default I18n;