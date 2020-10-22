import React, { Component } from 'react';

import Filter from '../Filter/Filter';
import LaunchPrograms from '../LaunchPrograms/LaunchPrograms';
import * as classes from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';

class Layout extends Component {
    render(){
        return(
            <React.Fragment>
                <header>
                    <div className={classes.nav}>
                        <Navbar />
                    </div>
                </header>
                <main>
                    <div className={classes.container}>
                        <div className={classes.filter_container}>
                            <Filter />
                        </div>
                        <div className={classes.launchPrograms_container}>
                            <LaunchPrograms />
                        </div>
                    </div>
                </main>
                <footer>
                    <div className={classes.developedBy}>
                        Developed by Rittick Datta
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Layout;