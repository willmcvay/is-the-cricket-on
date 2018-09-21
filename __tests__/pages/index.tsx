import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { HomePage } from '../../pages/index'
import { DataProps } from 'react-apollo'
import dataProps from '../stubs/data-props'

describe('HomePage', function() {
  const renderComponent = (updatedProps = {}) => {
    const props: DataProps<any, any> = {
      ...updatedProps,
      data: dataProps
    }

    this.HomePage = shallow(<HomePage {...props} />)
  }

  it('should match a snapshot', () => {
    renderComponent()
    expect(toJson(this.HomePage)).toMatchSnapshot()
  })
})
