var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
var shallow = enzyme.shallow;
var mount = enzyme.mount;
var Clock = require('app/components/Clock');

describe('<Clock />', () => {
    it('should exist', () => {
        var clock = shallow(<Clock />);
        expect(clock).to.exist;
        expect(clock.find('div')).to.have.length(1);
        expect(clock.instance()).to.be.instanceof(Clock);
    });
    describe('render', () => {
        it('should render 00:00 when passed no props', () => {
            var clock = shallow(<Clock />);
            expect(clock.find('.clock-text').text()).to.equal('00:00');
        });
        it('should render properly', () => {
            var clock = shallow(<Clock totalSeconds={62} />);
            expect(clock.find('.clock-text').text()).to.equal('01:02');
        })
    });
    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = shallow(<Clock />);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.instance().formatSeconds(seconds);
            expect(actual).to.equal(expected);
        });
        it('should format seconds when min/sec are less than 10', () => {
            var clock = shallow(<Clock />);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.instance().formatSeconds(seconds);
            expect(actual).to.equal(expected);
        })
    })
})