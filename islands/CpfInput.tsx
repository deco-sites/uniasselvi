import { h } from "preact";
import { useState } from "preact/hooks";

interface CpfInputProps {
  initialValue: string;
}

const CpfInput = ({ initialValue }: CpfInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const formattedValue = formatCpf(target.value);
    setValue(formattedValue);
  };

  const formatCpf = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 11);
    const cpfMasked = numericValue.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      (_, p1, p2, p3, p4) => `${p1}.${p2}.${p3}-${p4}`,
    );
    return cpfMasked;
  };

  return (
    <input
      type="text"
      value={value}
      onInput={handleChange}
      class="border p-2 rounded"
      placeholder="000.000.000-00"
      maxLength={14}
    />
  );
};

export default CpfInput;
