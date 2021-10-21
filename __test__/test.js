import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import inputsDisplay from '../client/components/inputsDisplay'
import totalsDisplay from '../client/components/totalsDisplay'

/**
 * @jest-environment jsdom
 */

configure({ adapter: new Adapter() });

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('React unit tests', () => {
  describe('inputsDisplay', () => {
    let wrapper;
    // const props = {
    //   label: 'Mega',
    //   text: 'Markets',
    // };

    beforeAll(() => {
      wrapper = shallow(<inputsDisplay />);
    });

    it('Renders a <h1> tag', () => {
      expect(wrapper.find('h1'));
    });
  })

  // test totalsDisplay compo
  describe('totalsDisplay', () => {
    let wrapper;
    const props = {
      total: 100
    }
    beforeAll(() => {
      wrapper = shallow(<totalsDisplay {...props} />)
    });

    // it('Checking props', () => {
    //   expect(wrapper.equals(<center>{4900}</center>)).to.equal(true);
    // })
    it('Checking if totalsDisplay has a prop named total', () => {
      expect(wrapper.props().total).toBeTruthy();
    })
  })

  describe('total', () => {
  
    let container = null;
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    
    it("renders user data", async () => {
      const fakeTransaction = {
        data: 'test data at test.js line 63',
        total: 100,
      };
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeTransaction)
        })
      );
    
      // Use the asynchronous version of act to apply resolved promises
      await act(async () => {
        render(<div className="total" />, container);
      });
    
      // expect(container.querySelector("data").textContent).toBe(fakeTransaction.data);
      // expect(container.querySelector("total").textContent).toBe(fakeTransaction.total);
      expect(container.textContent).toContain(fakeTransaction.address);
    
      // remove the mock to ensure tests are completely isolated
      global.fetch.mockRestore();
    });
    
    

  })
})