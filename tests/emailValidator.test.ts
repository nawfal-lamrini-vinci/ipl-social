import { validateEmail } from '../src/emailValidator';

describe('Email Validator - TDD Approach', () => {
  
  describe('Valid emails', () => {
    test('should accept a valid simple email', () => {
      expect(validateEmail('user@example.com')).toBe(true);
    });

    test('should accept email with multiple dots in domain', () => {
      expect(validateEmail('user@mail.example.com')).toBe(true);
    });

    test('should accept email with dots in local part', () => {
      expect(validateEmail('first.last@example.com')).toBe(true);
    });

    test('should accept email with numbers', () => {
      expect(validateEmail('user123@example123.com')).toBe(true);
    });

    test('should accept email with special characters in local part', () => {
      expect(validateEmail('user+tag@example.com')).toBe(true);
    });
  });

  describe('Invalid emails - Missing @', () => {
    test('should reject email without @', () => {
      expect(validateEmail('userexample.com')).toBe(false);
    });

    test('should reject email with multiple @', () => {
      expect(validateEmail('user@@example.com')).toBe(false);
    });

    test('should reject email with @ at the beginning', () => {
      expect(validateEmail('@example.com')).toBe(false);
    });

    test('should reject email with @ at the end', () => {
      expect(validateEmail('user@')).toBe(false);
    });
  });

  describe('Invalid emails - Missing or misplaced dot in domain', () => {
    test('should reject email without dot in domain', () => {
      expect(validateEmail('user@example')).toBe(false);
    });

    test('should reject email with dot as last character', () => {
      expect(validateEmail('user@example.')).toBe(false);
    });
  });

  describe('Invalid emails - Contains spaces', () => {
    test('should reject email with space in local part', () => {
      expect(validateEmail('user name@example.com')).toBe(false);
    });

    test('should reject email with space in domain', () => {
      expect(validateEmail('user@exam ple.com')).toBe(false);
    });

    test('should reject email with space at the beginning', () => {
      expect(validateEmail(' user@example.com')).toBe(false);
    });

    test('should reject email with space at the end', () => {
      expect(validateEmail('user@example.com ')).toBe(false);
    });
  });

  describe('Invalid emails - Missing text before or after @', () => {
    test('should reject email with nothing before @', () => {
      expect(validateEmail('@example.com')).toBe(false);
    });

    test('should reject email with nothing after @', () => {
      expect(validateEmail('user@')).toBe(false);
    });
  });

  describe('Edge cases', () => {
    test('should reject empty string', () => {
      expect(validateEmail('')).toBe(false);
    });

    test('should reject string with only @', () => {
      expect(validateEmail('@')).toBe(false);
    });

    test('should reject string with only a dot', () => {
      expect(validateEmail('.')).toBe(false);
    });

    test('should accept minimal valid email', () => {
      expect(validateEmail('a@b.c')).toBe(true);
    });
  });
});