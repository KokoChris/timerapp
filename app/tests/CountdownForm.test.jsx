var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var sinon = require('sinon');
var shallow = enzyme.shallow;
var mount = enzyme.mount;

var CountdownForm = require('../components/CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        var countdownForm = shallow(<CountdownForm />);
        expect(countdownForm).to.exist;
    })
    it('should call onSetCountdown if valid seconds Entered', () => {
        var spy = sinon.spy();
        var countdownForm = mount(<CountdownForm onSetCountdown={spy} />);
        countdownForm.ref("seconds").get(0).value = 2;
        countdownForm.ref('seconds', '2');
        countdownForm.find('button').get(0).click();
        expect(spy.called).to.be.true;
    })
    it('should not call onSetCountdown if passed an empty string(default)', () => {
        var spy = sinon.spy();
        var countdownForm = mount(<CountdownForm onSetCountdown={spy} />);
        countdownForm.find('button').get(0).click();
        expect(spy.called).to.be.false;
    })
})