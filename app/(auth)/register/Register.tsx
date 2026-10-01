import Button from "@/libs/ui-components/Button";
import TextInput from "@/libs/ui-components/Input";
import Link from "next/link";
import { AuthLayout } from "../common/AuthLayout";

export const Register = () => {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      {/* Login form */}
      <div className="h-full w-full flex flex-col justify-between bg-white rounded-3xl lg:gap-5 lg:p-10 xl:gap-6 xl:p-15">
        <div>
          <p className="text-primary-600">Create an Account</p>
          <h3 className="font-semibold text-4xl xl:text-5xl">
            Welcome to ByteSpace
          </h3>
        </div>

        <div className="space-y-5 xl:space-y-6">
          <TextInput label="First Name" placeholder="Abir Hasan" />
          <TextInput label="Email" placeholder="abc@example.com" />
          <TextInput
            label="Password"
            placeholder="***********"
            type="password"
          />
          <div className="flex justify-end">
            <Button otherClass="!py-2">Continue</Button>
          </div>
        </div>

        <div className="text-neutral-500 text-center">
          <span>Already have an account? </span>
          <Link href="/login" className="text-primary-600">
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
