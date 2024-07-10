const moneyFormatter = new Intl.NumberFormat('pl', {
  style: 'currency',
  currency: 'PLN',
});

const pluralFormatter: Record<Intl.LDMLPluralRule, string> = {
  zero: 'pokoi',
  one: 'pokój',
  two: 'pokoje',
  few: 'pokoje',
  many: 'pokoi',
  other: 'pokoi',
} as const;

export const formatPrice = (amount: number): string => {
  return moneyFormatter.format(amount);
};

export const formatRoomsCount = (count: number): string => {
  const plurarRules = new Intl.PluralRules('pl', { type: 'cardinal' });

  return `${count} ${pluralFormatter[plurarRules.select(count)]} `;
};
