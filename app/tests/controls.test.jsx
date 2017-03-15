var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var Controls = require('../components/Controls');

describe('<Controls />', () => {
    it('should exist', () => {
        var controls = shallow(<Controls />);
        expect(controls).to.exist;
    });
    it('should render a clear button', () => {
        var controls = shallow(<Controls />);
        expect(controls.find('button.alert')).to.have.length(1);
    });
    it('should render a start button when paused', () => {
        var controls = shallow(<Controls countdownStatus="paused" />);
        expect(controls.find('button.primary')).to.have.length(1);
        expect(controls.find('button.secondary')).to.have.length(0)
    });
    it('should render a pause button when running', () => {
        var controls = shallow(<Controls countdownStatus="started" />);
        expect(controls.find('button.primary')).to.have.length(0);
        expect(controls.find('button.secondary')).to.have.length(1)
    });

})
