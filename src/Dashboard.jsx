import React from "react";
import Card from "./Card";




function Dashboard (){
    const cards =[
        {
            title :"EARNINGS (MONTHLY)",
            price :"$40,000",
            theme :"primary"
        },
        {
            title :"EARNINGS (ANNUAL)",
            price :"$215,000",
            theme :"success"
        },
        {
            title :"TASKS",
            price :"50%",
            theme :"info"
        },
        {
            title :"PENDING REQUESTS",
            price :"18",
            theme :"warning"
        }
    ]
    return(
       
                <div className="container-fluid">
                 
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                       <i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report
                    </div>
               
                    <div className="row">
                        {
                            cards.map((card)=> {
                                return(
                                    <Card card={card}></Card>
                                )
                            }) 
                        }
                    </div>
                </div>
         
    )
}
export default Dashboard