export default function TextInput({
    label, onChange, value, inputProps
  }) {
    return (
      <div className="TextInput">
        <label> {label}
          <input {...inputProps}
            type="text"
            onChange={onChange}
            value={value}
          />
        </label>
      </div>
    )
  }