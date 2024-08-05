"use client";

export default function page() {
  const handleSave = async () => {
    console.log("login");
  };

  return (
    <div>
      Login, Routing group
      <form onSubmit={handleSave}>
        <input type="text" name="firtname" placeholder="firtname" />
        <input type="text" name="lastname" placeholder="lastname" />
        <input type="text" name="username" placeholder="username" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="tel" name="phone" placeholder="phone" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
