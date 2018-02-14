import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
    const expense = {
        id: 123,
        description: 'Sample description',
        createdAt: moment(),
        amount: 123450
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toContain(expense);

})

test('should edit an expense', () => {
    const updates = {
        description: 'Sample description',
        createdAt: moment(),
        amount: 123450
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(updates.description);
    expect(state[1].createdAt).toBe(updates.createdAt);
    expect(state[1].amount).toBe(updates.amount);
})

test('should not edit an expense if expense not found', () => {
    const updates = {
        description: 'Sample description',
        createdAt: moment(),
        amount: 123450
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})


test('should set expense', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

