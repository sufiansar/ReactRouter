const InputPage = () => {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <br />
        <br />

        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <br />

        <label>Number:</label>
        <input type="tel" name="number" />
        <br />
        <br />

        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <br />

        <label>Message:</label>
        <textarea name="message"></textarea>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputPage;
