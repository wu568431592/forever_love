import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/home",
        "exact": true,
        "component": require('../home/index.js').default
      },
      {
        "path": "/home/model",
        "exact": true,
        "component": require('../home/model.js').default
      },
      {
        "path": "/newMemorialDay/model",
        "exact": true,
        "component": require('../newMemorialDay/model.js').default
      },
      {
        "path": "/interaction",
        "exact": true,
        "component": require('../interaction/index.js').default
      },
      {
        "path": "/interaction/model",
        "exact": true,
        "component": require('../interaction/model.js').default
      },
      {
        "path": "/login/components/inputList",
        "exact": true,
        "component": require('../login/components/inputList.js').default
      },
      {
        "path": "/home/components/memorialDayItem",
        "exact": true,
        "component": require('../home/components/memorialDayItem.js').default
      },
      {
        "path": "/login/model",
        "exact": true,
        "component": require('../login/model.js').default
      },
      {
        "path": "/loveMoment",
        "exact": true,
        "component": require('../loveMoment/index.js').default
      },
      {
        "path": "/loveMoment/model",
        "exact": true,
        "component": require('../loveMoment/model.js').default
      },
      {
        "path": "/myInfo",
        "exact": true,
        "component": require('../myInfo/index.js').default
      },
      {
        "path": "/myInfo/model",
        "exact": true,
        "component": require('../myInfo/model.js').default
      },
      {
        "path": "/newMemorialDay/components/inputList",
        "exact": true,
        "component": require('../newMemorialDay/components/inputList.js').default
      },
      {
        "path": "/newMemorialDay",
        "exact": true,
        "component": require('../newMemorialDay/index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/index.js').default
      },
      {
        "component": () => React.createElement(require('/usr/local/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.js","routes":[{"path":"/404","exact":true,"component":"./src/pages/404.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/home","exact":true,"component":"./src/pages/home/index.js"},{"path":"/home/model","exact":true,"component":"./src/pages/home/model.js"},{"path":"/newMemorialDay/model","exact":true,"component":"./src/pages/newMemorialDay/model.js"},{"path":"/interaction","exact":true,"component":"./src/pages/interaction/index.js"},{"path":"/interaction/model","exact":true,"component":"./src/pages/interaction/model.js"},{"path":"/login/components/inputList","exact":true,"component":"./src/pages/login/components/inputList.js"},{"path":"/home/components/memorialDayItem","exact":true,"component":"./src/pages/home/components/memorialDayItem.js"},{"path":"/login/model","exact":true,"component":"./src/pages/login/model.js"},{"path":"/loveMoment","exact":true,"component":"./src/pages/loveMoment/index.js"},{"path":"/loveMoment/model","exact":true,"component":"./src/pages/loveMoment/model.js"},{"path":"/myInfo","exact":true,"component":"./src/pages/myInfo/index.js"},{"path":"/myInfo/model","exact":true,"component":"./src/pages/myInfo/model.js"},{"path":"/newMemorialDay/components/inputList","exact":true,"component":"./src/pages/newMemorialDay/components/inputList.js"},{"path":"/newMemorialDay","exact":true,"component":"./src/pages/newMemorialDay/index.js"},{"path":"/login","exact":true,"component":"./src/pages/login/index.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
