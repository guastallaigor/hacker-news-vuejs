import { shallowMount } from '@vue/test-utils'
import GithubCorner from '@/components/GithubCorner'

describe('When I create the GithubCorner component', () => {
  const createGithubWrapper = () => (
    shallowMount(GithubCorner, {})
  )

  it(`should exists`, () => {
    const wrapper = createGithubWrapper()
    const github = wrapper.find('#main-gh-icon')
    expect(wrapper.exists()).toBe(true)
    expect(github.exists()).toBe(true)
  })

  it(`should have a @guastallaigor link`, () => {
    const wrapper = createGithubWrapper()
    const link = wrapper.find('#main-gh-icon>.is-me>a')
    const html = `<a href="https://github.com/guastallaigor" target="_blank" aria-label="@guastallaigor Profile" rel="noopener" class="guastallaigor">
      @guastallaigor
    </a>`
    expect(wrapper.exists()).toBe(true)
    expect(link.exists()).toBe(true)
    expect(link.classes().length).toBe(1)
    expect(link.classes()).toContainEqual('guastallaigor')
    expect(link.attributes().href).toBe('https://github.com/guastallaigor')
    expect(link.attributes().target).toBe('_blank')
    expect(link.html()).toBe(html)
  })

  it(`should have a github icon link`, () => {
    const wrapper = createGithubWrapper()
    const link = wrapper.find('#main-gh-icon>a')
    expect(wrapper.exists()).toBe(true)
    expect(link.exists()).toBe(true)
    expect(link.classes().length).toBe(1)
    expect(link.classes()).toContainEqual('github-corner')
    expect(link.attributes().href).toBe('https://github.com/guastallaigor')
    expect(link.attributes().target).toBe('_blank')
  })

  it(`should have a svg inside the github link`, () => {
    const wrapper = createGithubWrapper()
    const svg = wrapper.find('#main-gh-icon>a>svg')
    expect(wrapper.exists()).toBe(true)
    expect(svg.exists()).toBe(true)
    expect(svg.attributes().width).toBe('80')
    expect(svg.attributes().height).toBe('80')
    expect(svg.attributes().viewBox).toBe('0 0 250 250')
    expect(svg.attributes().style).toBe('fill: #fff; color: rgb(255, 255, 255);')
  })

  it('should match snapshot', () => {
    const wrapper = createGithubWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
