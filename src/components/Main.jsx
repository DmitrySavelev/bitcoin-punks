import Article from "./Article";
import Cards from "./Cards";
import Confirmation from "./Confirmation";
import Panel from "./Panel";


function Main(props) {
  return (
    <div className="Main">
      < Article/>
      < Confirmation/>
      < Panel/>
      < Cards onInfo={props.onInfo}/>
    </div>
  );
}

export default Main;


