import { renderComponent, expect } from '../test_helper' ;
import CommentList from '../../src/components/CommentList.jsx' ;

describe('CommentList', () => {
    let component;
    beforeEach(() => {
        const props = { comments: ['new comment', 'other new comment'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an Li for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('new comment');
        expect(component).to.contain('other new comment');
    });
});