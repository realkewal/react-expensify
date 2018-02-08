import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('it should return 0 if no expenses exist', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});

test('it should add up a single expense', () => {
    const res = getExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('it should correctly add up multiple expenses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(224745);
});