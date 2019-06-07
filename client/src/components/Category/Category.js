import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Category extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='https://semantic-ui.com/images/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
         Зарядное.бел
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
        Каталог
        </Menu.Item>

        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
     Доставка и оплата
        </Menu.Item>
        
        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
       Контакты
        </Menu.Item>
        
     
      </Menu>
    )
  }
}