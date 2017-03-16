var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var Countdown = require('../components/Countdown');

describe('<Countdown />', () => {
    it('should exist', () => {
        var countdown = shallow(<Countdown />);
        expect(countdown).to.exist;
    });
    describe('handleSetCountdown', () => {
        it('should set state to started and countdown to proper count', () => {
            var countdown = shallow(<Countdown />);
            var clock = sinon.useFakeTimers();
            countdown.instance().handleSetCountdown(10);
            expect(countdown.state('countdownStatus')).to.equal('started');
            expect(countdown.state('count')).to.equal(10);
            clock.tick(1010);
            expect(countdown.state('count')).to.equal(9);
            clock.restore();
        });
        it('should never set state below 0', () => {
            var countdown = shallow(<Countdown />);
            var clock = sinon.useFakeTimers();
            countdown.instance().handleSetCountdown(2);
            clock.tick(3030);
            expect(countdown.state('count')).to.equal(0);
            clock.restore();
        })
        it('should pause countdown on stopped status', () => {
            var countdown = shallow(<Countdown />);
            var clock = sinon.useFakeTimers();
            var inst = countdown.instance();
            inst.handleSetCountdown(3);
            inst.handleStatusChange('paused');
            clock.tick(3000);
            expect(countdown.state('count')).to.equal(3);
            expect(countdown.state('countdownStatus')).to.equal('paused');
        })
        it('should pause countdown on stopped status', () => {
            var countdown = shallow(<Countdown />);
            var clock = sinon.useFakeTimers();
            var inst = countdown.instance();
            inst.handleSetCountdown(3);
            inst.handleStatusChange('stopped');
            clock.tick(3000);
            expect(countdown.state('count')).to.equal(0);
            expect(countdown.state('countdownStatus')).to.equal('stopped');
        })
    })
})