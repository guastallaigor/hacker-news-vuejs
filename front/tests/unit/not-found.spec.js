import { shallowMount } from '@vue/test-utils'
import NotFound from '@/components/NotFound'

describe('When I create the NotFound component', () => {
  const createNotFoundWrapper = () => (
    shallowMount(NotFound, {})
  )

  it(`should exists`, () => {
    const wrapper = createNotFoundWrapper()
    const notFound = wrapper.find('.not-found')
    expect(wrapper.exists()).toBe(true)
    expect(notFound.exists()).toBe(true)
  })

  it(`should have flex classes`, () => {
    const wrapper = createNotFoundWrapper()
    const div = wrapper.find('.not-found')
    expect(wrapper.exists()).toBe(true)
    expect(div.exists()).toBe(true)
    expect(div.classes().length).toBe(5)
    expect(div.classes()).toContainEqual('layout')
    expect(div.classes()).toContainEqual('align-center')
    expect(div.classes()).toContainEqual('wrap-column')
    expect(div.classes()).toContainEqual('justify-center')
  })

  it(`should have elements inside the main div`, () => {
    const wrapper = createNotFoundWrapper()
    const h2 = wrapper.find('.not-found>h2')
    const h1 = wrapper.find('.not-found>h1')
    const p1 = wrapper.find('.not-found>h1 + p')
    const p2 = wrapper.find('.not-found>p + p')
    expect(wrapper.exists()).toBe(true)
    expect(h2.exists()).toBe(true)
    expect(h1.exists()).toBe(true)
    expect(p1.exists()).toBe(true)
    expect(p2.exists()).toBe(true)
    expect(h2.html()).toBe('<h2>OOPS...</h2>')
    expect(h1.html()).toBe('<h1>404</h1>')
    expect(p1.html()).toBe('<p>Error</p>')
    expect(p2.html()).toBe('<p>Sorry, the page you are looking for could not be found</p>')
  })

  it('should match snapshot', () => {
    const wrapper = createNotFoundWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
