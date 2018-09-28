import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { HomePage } from '../index'
import { DataProps } from 'react-apollo'
import dataProps from '../../tests/stubs/data-props'

describe('HomePage', () => {
  const renderComponent = (updatedProps = {}) => {
    const props: DataProps<any, any> = {
      ...updatedProps,
      data: dataProps
    }

    return shallow(<HomePage {...props} />)
  }

  it('should match a snapshot', () => {
    const Component = renderComponent()
    expect(toJson(Component)).toMatchSnapshot()
  })
})
