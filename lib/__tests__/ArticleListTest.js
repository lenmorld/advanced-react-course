import React from 'react';
import ArticleList from '../components/ArticleList';

import renderer from 'react-test-renderer';
// yarn add --dev react-test-renderer
// yarn add --dev jest

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    // mock function
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    console.log(tree);

    expect(tree.children.length).toBe(2);

    // snapshot expetation, tree must match snapshot
    // __tests__/__snapshots__

    // the minute ArticleList is changed, snapshot fails
    expect(tree).toMatchSnapshot();
  });
});
