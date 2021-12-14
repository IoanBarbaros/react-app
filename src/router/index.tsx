import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const Router = () => {
  return (
      <Suspense fallback="Loading">
      <Styles />
      <Switch>
              <>
                <Route exact path="/" component={Header}/>
                <Route exact path="/" component={lazy(() => import(`../pages/Home`))}/>
                <Route path="/about" component={Header2}/>
                <Route path="/about" component={lazy(() => import(`../pages/About/about`))} />
                <Route exact path="/" component={Footer}/>
              </>
      </Switch>
  
      </Suspense>
  );
};

export default Router;
