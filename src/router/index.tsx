import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import Header2 from "../components/Header2";

const Router = () => {
  return (
      <Suspense fallback="null">
      <Styles />
      <Switch>
      {routes.map((routeItem) => {
          if(routeItem.component==="Home")
            return (
              <>
                <Route path="/" component={Header}/>
                <Route
                  key={routeItem.component}
                  path={routeItem.path}
                  exact={routeItem.exact}
                  component={lazy(() => import(`../pages/Home`))}
                /><Footer />
              </>
            ); 
           else
           return(
              <><Route path="/about" component={Header2}/>
              <Route
               key={routeItem.component}
               path={routeItem.path}
               exact={routeItem.exact}
               component={lazy(() => import(`../pages/${routeItem.component}`))} /></>
           );
        })}
      </Switch>
  
      </Suspense>
  );
};

export default Router;
