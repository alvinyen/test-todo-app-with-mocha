import { renderComponent, expect } from '../test_helper' ;
import App from '../../src/components/App.jsx' ;

//use 'descibe' to group together similar tests
describe('App', () => {
    let component ;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('app');
    });

    it('has CommentBox', () => {
        expect(component.find('.comment-box')).to.exist;
    });
});