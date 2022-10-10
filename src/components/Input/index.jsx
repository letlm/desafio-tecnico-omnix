function Input({ label, register, name, error, span, ...rest }) {
  return (
    <section>
      <section>
        {label} {!!error && <span className="error">{error}</span>}
      </section>
      <div isError={!!error}>
        <input {...register(name)} {...rest} />
      </div>
      <span className="max">{span}</span>
    </section>
  );
}

export default Input;
