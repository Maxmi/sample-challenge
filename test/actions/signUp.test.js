import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';

const table = ['users']


describe('function signUp ', () => {

  it('should create a new row in the users table', () => {
    // TODO: FIXME and write a real test
    return signUp('test', 'test@test.com', '123')
      .then(() => {
        expect(table).to.have.length(1)
      })
      // .catch(console.error) - should not catch in tests!
  })
})
