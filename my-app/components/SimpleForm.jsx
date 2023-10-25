import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SimpleForm() {
  const [userName, setUserName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      level: "",
      gpa: '',
      date: "",
    },
  });

  function submitForm(e) {
    e.preventDefault(); // prevent the browser from automatically submitting the form
    console.log(`form submitted - userName: ${userName}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <br />
      <br /> */}
        <label for="name">Name</label>
        <br />
        {/* <input id="name" placeholder="Your Name" type="text" maxLength={30}/> */}
        <input
          id="name"
          placeholder="Your Name"
          className={errors.name && "inputError"}
          {...register("name", { required: true, maxLength: 30, minLength: 1 })}
        />
        {errors.name?.type === "required" && (
          <span className="inputErrorText" style={{ color: "red" }}>
            Name is required
            <br />
          </span>
        )}
        <label for="email">
          <br />
          Email
        </label>
        <br />
        <input
          id="email"
          placeholder="Your email"
          type="email"
          className={errors.name && "inputError"}
          {...register("email", { type: "email" })}
        />
        <br />
        <br />
        <label for="bio">Biographical Statement</label>
        <br />
        <textarea
          id="bio"
          placeholder="A bit about you"
          className={errors.bio && "inputError"}
          {...register("bio", { required: true, maxLength: 500, minLength: 5 })}
        />
        {errors.name?.type === "required" && (
          <span className="inputErrorText" style={{ color: "red" }}>
            <br />
            bio does not reach requirements
          </span>
        )}
        <br />
        <br />
        <div>
          <label for="level">Level</label>
          <br />
          <select
            id="level"
            className={errors.level && "inputError"}
            {...register("level", { required: true })}
          >
            <option>Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Senior">Senior</option>
          </select>
          {errors.level?.type === "required" && (
            <span className="inputErrorText" style={{ color: "red" }}>
              <br />
              what is your level? (required)
              <br />
            </span>
          )}
          <label for="gpa"> GPA</label>
          <input
            id="gpa"
            type="number"
            className={errors.gpa && "inputError"}
            {...register("gpa", { required: true})}
          />
          {errors.gpa?.type === "required" && (
            <span className="inputErrorText" style={{ color: "red" }}>
              <br />
              gpa is required
              <br />
            </span>
          )}
          <label for="date"> Date</label>
          <input id="date" type="date" />
        </div>
        <br />
        <br />
        <div>
          <label>Hobbies</label>
          <input type="checkbox" inline />
          <label> Surfing </label>
          <input type="checkbox" inline />
          <label> Running </label>
          <input type="checkbox" inline />
          <label> Biking </label>
          <input type="checkbox" inline />
          <label> Paddling </label>
        </div>
        <br />
        <div>
          <label> Major </label>
          <input type="radio" inline />
          <label> Physics </label>
          <input type="radio" inline />
          <label> Chemistry </label>
          <input type="radio" inline />
          <label> Math </label>
          <input type="radio" inline />
          <label> Computer Science </label>
        </div>

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
