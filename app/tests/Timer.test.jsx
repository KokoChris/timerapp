var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var Timer = require('../components/Timer');

describe('<Timer />', () => {
    it('should exist', () => {
        var timer = shallow(<Timer />);
        expect(timer).to.exist;
    })
    describe('handleSetTimer', () => {
        it('should set state to started and count up to proper count', () => {
            var timer = shallow(<Timer />);
            var clock = sinon.useFakeTimers();
            timer.instance().handleStatusChange('started');
            clock.tick(1010);
            expect(timer.state('count')).to.equal(1);
            expect(timer.state('timerStatus')).to.equal('started');
        });
        it('should set state to paused and stop counting', () => {
            var timer = shallow(<Timer />);
            var clock = sinon.useFakeTimers();
            timer.instance().handleStatusChange('paused');
            clock.tick(1010);
            expect(timer.state('count')).to.equal(0);
            expect(timer.state('timerStatus')).to.equal('paused');
        })
    })
}); 