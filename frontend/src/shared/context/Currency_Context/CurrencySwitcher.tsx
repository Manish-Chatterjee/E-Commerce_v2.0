// CurrencySwitcher.tsx

import { useCurrency } from "./useCurrency";

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as any)}
      style={{ padding: "6px", borderRadius: "6px" }}
    >
      <option value="USD">USD ($)</option>
      <option value="INR">INR (₹)</option>
      <option value="EUR">EUR (€)</option>
    </select>
  );
};

export default CurrencySwitcher;
