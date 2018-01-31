import React from 'react';
import 'react-dates/initialize';
import {shallow} from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    // setTextFilter = jest.fn();
    // sortByDate = jest.fn();
    // sortByAmount = jest.fn();
    // setStartDate = jest.fn();
    // setEndDate = jest.fn();
    // wrapper = shallow(
    //     <ExpenseListFilters 
    //         filters={filters}
    //         setTextFilter={setTextFilter}
    //         sortByDate={sortByDate}
    //         sortByAmount={sortByAmount}
    //         setStartDate={setStartDate}
    //         setEndDate={setEndDate}
    //     />
    // );
});


test('should render expense list filters correctly', () => {
    // expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data correctly', () => {
    // wrapper.setProps({
    //     filters: altFilters
    // });
    // expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {

});

test('should sort by date', () => {

});

test('should sort by amount', () => {

});

test('should handle date changes', () => {

});

test('should handle date focus changes', () => {

});