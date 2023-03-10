import React from 'react'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function Home() {
    const [questions,setQuestions] = React.useState([])
    async function getQuestions()
    {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "jwt": localStorage.getItem('jwt')
           }
           
           let response = await fetch("https://localhost:7295/api/Questions", { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.text();
           data = JSON.parse(data);
           console.log(data)
           setQuestions(data)
           
    }
   
    React.useEffect(()=>{
        getQuestions();
    },[])
    var questions_ =questions.map(question=> {
        return ( <div className="row"><div className="col-md-10 col-xl-8 mx-auto p-4">
            <div className="d-md-flex d-lg-flex d-xl-flex d-xxl-flex ">
                                <p>UserName :- {question.username}</p> &nbsp; &nbsp;
                                <p>Last Updated :- {new Date(question.update_date).toLocaleTimeString() + "  " +new Date(question.update_date).toDateString()}</p>
                            </div>
        <div className="d-flex align-items-center align-items-md-start align-items-xl-center">
            <div>
            
                <h4>{question.title}</h4>
                <p>{question.description != null && parse(question.description)}</p>
                
                <div className="d-flex  justify-content-around " >
                <Link to={"../DetailedQuetion/"+question.id} >Read More&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                    </svg></Link>
               
                </div>
            </div>
        </div>
        <hr className="mt-1" />
      
    </div>
    </div>)
    })
  return (
    <div>
      <div className="container pb-5 pt-5">
        <div className="col-md-9 col-xl-8 ml-auto mr-auto">
            <form>
                <div className="align-items-center form-row">
                    <div className="d-flex col-sm form-group mb-3">
                        <input className="form-control" type="text" name="search" placeholder="Search..."/>
                        <div className="col-sm-auto text-end form-group mb-3">
                      <button className="btn btn-primary  rounded-pill" type="submit"><i className="fa fa-search"></i></button></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
       <div className="container py-4 py-xl-5">
            
               {questions_}
           
        </div>
    </div>
  )
}
