import { renderComponent, expect } from '../test_helper' ;
import CommentBox from '../../src/components/CommentBox.jsx' ;

describe('CommentBox', () => {
    it('has the correct class', () => {
        const component = renderComponent(CommentBox);
        console.log(component);
        expect(component).to.have.class('comment-box');
    });
});