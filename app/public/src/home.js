var React = require('react')
var ReactDOM = require('react-dom')
var {Router,Route,Link,IndexRoute} = require('react-router')
var $ = require('jquery')
var {AppContainer}=require('@alife/lba-common')
var Home = require('./components/Home')
//var createHistory = require('history/lib/createHashHistory')
//var history = createHistory({
//    queryKey: false
//})
var route = (
    <Router>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
ReactDOM.render(route, $('#react-root')[0])