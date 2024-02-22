export interface Pattern {
  name: string;
  regExp: string;
}

export const EMAIL_PATTERN: Pattern = {
  name: 'email',
  regExp: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
}
