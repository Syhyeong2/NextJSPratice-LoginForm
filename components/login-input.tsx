interface LoginInputProps {
  name: string;
  type: string;
  required: boolean;
  placeholder: string;
  errors?: string[];
  errorType?: string;
}

export default function LoginInput({
  name,
  type,
  required,
  placeholder,
  errors,
  errorType,
}: LoginInputProps) {
  return (
    <div className="flex flex-col relative ">
      {name === "email" && (
        <svg
          className="size-6 absolute top-3 left-3"
          data-slot="icon"
          fill="gray"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
        </svg>
      )}
      {name === "username" && (
        <svg
          className="size-6 absolute top-3 left-3"
          data-slot="icon"
          fill="gray"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path>
        </svg>
      )}
      {name === "password" && (
        <svg
          className="size-6 absolute top-3 left-3"
          data-slot="icon"
          fill="gray"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          ></path>
        </svg>
      )}

      <input
        className={` w-96 h-12 px-11 rounded-full  outline-none ring-2 focus:ring-2 ring-neutral-200  focus:outline-none transition mb-5  ${
          name === errorType ? "ring-red-400" : "ring-neutral-200 "
        } ${
          name === errorType
            ? "focus:ring-4"
            : "focus:ring-4 focus:ring-neutral-400"
        }`}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      ></input>
      {name === errorType &&
        errors?.map((error, index) => (
          <span className="text-red-400 -mt-2 mb-3 transition-all " key={index}>
            {error}
          </span>
        ))}
    </div>
  );
}
