import {Module, register} from "core-fe/src/index";
import Routes from "../../routes";
import {RootState} from "../../type/state";
class HomeModule extends Module<RootState, "home"> {
  *onEnter(){
    console.info('enter')
  }
}

const view = register(new HomeModule("home", {}));

export const Home = view.attachLifecycle(Routes);