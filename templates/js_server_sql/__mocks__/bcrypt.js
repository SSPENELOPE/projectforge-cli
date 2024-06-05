const bcrypt = jest.createMockFromModule('bcrypt');

// Mock the hash function with a resolved value
bcrypt.hash = jest.fn().mockResolvedValue('hashedPassword');

module.exports = bcrypt;