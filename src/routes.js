import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home/index'

import Register_BasicData from './pages/Register-basic-datas/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/basic-datas" exact component={Register_BasicData} />
            </Switch>
        </BrowserRouter>
    )
}
