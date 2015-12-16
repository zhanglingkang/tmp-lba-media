var App = require('./components/App')
var Key = require('./components/Key')
var KeyPrivilege = require('./components/KeyPrivilege')
var ChartDemo = require('./components/ChartDemo')
const routes = {
    path: '/',
    component: App,
    childRoutes: [
        {name: 'key备案信息', path: 'key', component: Key},
        {name: 'key封停信息', path: 'key-privilege', component: KeyPrivilege},
        {name: '', path: 'chart-demo', component: ChartDemo}
    ],
    onEnter: function (obj) {
        if (obj.location.pathname === '/') {
            window.location.hash = '#/key'
        }
    }
}
module.exports = routes