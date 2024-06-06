// import bcrypt from 'bcrypt';

// __mocks__/bcrypt.ts

const bcrypt: any = jest.createMockFromModule('bcrypt');

// Mock the hash function with a resolved value
bcrypt.hash = jest.fn().mockResolvedValue('hashedPassword');

export default bcrypt;