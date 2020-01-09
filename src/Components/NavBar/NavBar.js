import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NavBar.scss';

export default class NavBar extends Component {
    static propTypes = {
        navBar: PropTypes.array
    }

    shortenName = (name = "Untilted") => {
        if (name.length > 15) {
            return name.substring(0, 10) + '...';
        }
        return name;
    }

    render() {
        return (
            <div className="nav-bar">
                {
                    this.props.navBar.map((e) => {
                        return (
                            <div className="nav-bar_tab">
                                <p className="nav-bar_tab--name">{this.shortenName(e)}</p>
                                <p className="nav-bar_tab--date"></p>
                                <p className="nav-bar_tab--close">x</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
