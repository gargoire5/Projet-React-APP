import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import './navBar.css'

export default class Navbar extends Component {
    state = {activeItem: 'ListingPokemon'}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (<Menu fixed="top" inverted pointing secondary>
                <Menu.Item 
                    as={NavLink} to="/"
                    name='Pokemon disponible'
                    active={activeItem === 'ListingPokemon'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/Pokedex"
                    name='Mon Pokedex'
                    active={activeItem === 'Pokedex'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item position="right"
                    as={NavLink} to="/ManagePokemon"
                    name='Gérer les Pokemon'
                    active={activeItem === 'ManagePokemon'}
                    onClick={this.handleItemClick}
                />   
          </Menu>
        )
        }
}