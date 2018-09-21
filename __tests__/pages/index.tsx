import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { HomePage } from '../../pages/index'

describe('HomePage', function() {
  const renderComponent = (updatedProps = {}) => {
    const props = {
      ...updatedProps
    }

    this.HomePage = shallow(<HomePage {...props} />)
  }

  it('should match a snapshot', () => {
    renderComponent()
    expect(toJson(this.HomePage)).toMatchSnapshot()
  })
})
