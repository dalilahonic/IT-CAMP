export default function Option({ value, isSelected }) {
  return (
    <option selected={isSelected ? 'selected' : ''}>
      {value}
    </option>
  );
}
