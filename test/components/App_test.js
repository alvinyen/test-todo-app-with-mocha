import { renderComponent, expect } from '../test_helper' ;
import App from '../../src/components/App.jsx' ;

//use 'descibe' to group together similar tests
describe('App', () => {

    //use 'it' to test a single attribute of a target
    it('shows the correct text', () => {
        const component = renderComponent(App);
        expect(component).to.contain('react simple starter');
    });

});