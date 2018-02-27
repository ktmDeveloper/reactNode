import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {
    
    const testProps = {
        articles: {
            a: {id:'a'},
            b: {id:'b'}
        },
        articleActions: {
            lookupAuthor: jest.fn(() => ({})) //jest.fn returns a fake function and returns a object
        }
    };
    it('renders correctly', () => {
        const tree = renderer.create(
            <ArticleList 
            {...testProps}/>
        ).toJSON();
        
        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot(); //https://facebook.github.io/jest/docs/en/snapshot-testing.html
    });
});

