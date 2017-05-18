import { renderComponent, expect } from '../test_helper' ;
import CommentBox from '../../src/components/CommentBox.jsx' ;

describe('CommentBox', () => {
    it('has the correct class', () => {
        const component = renderComponent(CommentBox);
        expect(component).to.have.class('comment-box');
    });
    it('has a text area', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist;
    });
});