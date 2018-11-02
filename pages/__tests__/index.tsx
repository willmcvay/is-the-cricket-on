import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HomePage from '../index'

describe('HomePage', () => {
  const renderComponent = () => {
    return shallow(<HomePage />)
  }

  it('should match a snapshot', () => {
    const Component = renderComponent()
    expect(toJson(Component)).toMatchSnapshot()
  })
})
