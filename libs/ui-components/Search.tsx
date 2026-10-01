import Image from "next/image";
import Button from "./Button";
import TextInput from "./Input";

type SearchProps = {
  button_name?: string;
  onClick?: () => void;
  placeholder?: string;
  buttonClass?: string;
  inputClass?: string;
};

export const Search = ({
  button_name,
  onClick,
  placeholder = "Search",
  buttonClass,
  inputClass,
}: SearchProps) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <div
          className={`flex items-center justify-center bg-white rounded-4xl overflow-hidden py-3 px-6 gap-2 ${inputClass ?? ""}`}
        >
          <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
          <div className="flex-1">
            <TextInput
              inputClass="border-none !p-0"
              placeholder={placeholder}
            />
          </div>
        </div>
        {button_name && (
          <Button onClick={onClick} otherClass={buttonClass}>
            {button_name}
          </Button>
        )}
      </div>
    </div>
  );
};
