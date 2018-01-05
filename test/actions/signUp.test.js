import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';

const table = ['users'];


describe('function signUp ', () => {

  it('should create a new row in the users table', () => {
    // TODO: FIXME and write a real test
    return signUp('test', 'test@test.com', '123')
      .then((user) => {
        expect(table.length).to.equal(1);
        expect(user.name).to.equal('test');
        expect(user.email).to.equal('test@test.com');
        expect(user.password).to.equal('123');
      })
      .catch(console.error)
  })
})
