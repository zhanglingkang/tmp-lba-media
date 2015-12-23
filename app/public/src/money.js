var React = require('react')
var ReactDOM = require('react-dom')
var {Router,Route,Link} = require('react-router')
var $ = require('jquery')
var {AppContainer}=require('@alife/lba-common')
var Money = require('./components/Money')
//var createHistory = require('history/lib/createHashHistory')
//var history = createHistory({
//    queryKey: false
//})
var route = (
    <Router>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={Money}/>
        </Route>
    </Router>
)
ReactDOM.render(route, $('#react-root')[0])