import { shallowMount } from '@vue/test-utils'
import RotateSquare2 from '@/components/RotateSquare2'

describe('When I create the RotateSquare2 component', () => {
  const createRotateSquareWrapper = (propsData = {}, slot) => {
    const obj = { propsData }

    return shallowMount(RotateSquare2, { ...obj })
  }

  it(`should exists with the default classes`, () => {
    const wrapper = createRotateSquareWrapper()
    const rotate = wrapper.find('div')
    expect(wrapper.exists()).toBe(true)
    expect(rotate.exists()).toBe(true)
    expect(rotate.classes().length).toBe(2)
    expect(rotate.classes()).toContainEqual('spinner')
    expect(rotate.classes()).toContainEqual('spinner--rotate-square-2')
  })

  it(`should change the width and height if the size prop is added`, () => {
    const wrapper = createRotateSquareWrapper({ size: '88px' })
    const rotate = wrapper.find('.spinner.spinner--rotate-square-2')
    expect(wrapper.exists()).toBe(true)
    expect(rotate.exists()).toBe(true)
    expect(rotate.attributes().style).toBe('width: 88px; height: 88px; background: rgb(255, 255, 255);')
  })

  it(`should change the background if the background prop is added`, () => {
    const wrapper = createRotateSquareWrapper({ background: '#000' })
    const rotate = wrapper.find('.spinner.spinner--rotate-square-2')
    expect(wrapper.exists()).toBe(true)
    expect(rotate.exists()).toBe(true)
    expect(rotate.attributes().style).toBe('width: 60px; height: 60px; background: rgb(0, 0, 0);')
  })

  it('should match snapshot', () => {
    const wrapper = createRotateSquareWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
