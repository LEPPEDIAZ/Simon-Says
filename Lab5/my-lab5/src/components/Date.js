class App extends React.Component {

    currYear = () => {
         var year = new Date().getFullYear();
         return year;
       }
     render() {
       return (
         <div>
           <h1> {this.currYear()} </h1>
         </div>
       );
     }
   }
   
   ReactDOM.render(<App />, document.getElementById('root'));