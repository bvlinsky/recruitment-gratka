export const price = (amount: string, currency: string): string => {
  const formatter = new Intl.NumberFormat("pl", {
    style: "currency",
    currency: currency,
  });

  return formatter.format(parseFloat(amount));
};

export const rooms = (count: number): string => {
  const plurarRules = new Intl.PluralRules("pl", { type: "cardinal" });

  const pluralForms: Record<Intl.LDMLPluralRule, string> = {
    zero: "pokoi",
    one: "pokój",
    two: "pokoje",
    few: "pokoje",
    many: "pokoi",
    other: "pokoi",
  } as const;

  return `${count} ${pluralForms[plurarRules.select(count)]} `;
};
