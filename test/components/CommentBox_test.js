import { renderComponent, expect } from '../test_helper' ;
import CommentBox from '../../src/components/CommentBox.jsx' ;

describe('CommentBox', () => {
    let component; // function scope ！！
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    it('button has the correct text', () => {
        expect(component.find('button')).to.contain('submit');
    });
    
    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });
        
        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
            // expect(component.find('textarea')).to.contain('new comment');
        });

        it('when submitted, clears the input/textarea', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});