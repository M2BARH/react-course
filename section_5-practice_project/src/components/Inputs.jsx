export default ({ label, id, value, onChange }) => {
  return (
    <div id="label-input">
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} required value={value} onChange={onChange} />
    </div>
  );
};
