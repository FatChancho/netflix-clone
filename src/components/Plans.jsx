import { Button } from "@mui/material";
import "./components.css";
import { useDispatch } from "react-redux";
import { setPrice } from "../features/PriceSlice";
import { Link } from "react-router-dom";

function Plans({ cost, children }) {
  const dispatch = useDispatch();
  
  function planClicked(precio){
    dispatch(setPrice(precio));
  }

  return (
    <div className="planclass">
      <p>
        {children} ({cost}€)
      </p>
      <Link to='/checkout'><Button onClick={planClicked(cost)}>Subscribe</Button></Link>
    </div>
  );
}

export default Plans;
