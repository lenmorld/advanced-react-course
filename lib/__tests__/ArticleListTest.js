import React from 'react';
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

// import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    // mock function

    // articleActions -> store
    store: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  // it('renders correctly', () => {
  //   const tree = renderer.create(
  //     <ArticleList
  //       {...testProps}
  //     />
  //   ).toJSON();

  //   console.log(tree);

  //   expect(tree.children.length).toBe(2);

  //   // snapshot expetation, tree must match snapshot
  //   // __tests__/__snapshots__

  //   // the minute ArticleList is changed, snapshot fails
  //   expect(tree).toMatchSnapshot();
  // });

  Article.propTypes = {};

  // Enzyme shallow renderer
  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList 
        {...testProps}
      />
    );

    // console.log(wrapper);
    // console.log(wrapper.getElement().props.children.length);

    expect(wrapper.getElement().props.children.length).toBe(2);

    // jQuery like syntax
    expect(wrapper.find('Article').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });
});
