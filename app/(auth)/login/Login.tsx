import Link from "next/link";
import { AuthLayout } from "../common/AuthLayout";
import TextInput from "@/libs/ui-components/Input";
import Button from "@/libs/ui-components/Button";

export const Login = () => {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      {/* Login form */}
      <div className="h-full w-full flex flex-col justify-between bg-white rounded-3xl lg:gap-5 lg:p-10 xl:gap-6 xl:p-15">
        <div>
          <p className="text-primary-600">Sign In</p>
          <h3 className="font-semibold text-4xl xl:text-5xl">Welcome Back</h3>
        </div>

        <div className="space-y-5 xl:space-y-6">
          <TextInput label="Email" placeholder="Enter your email" />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <div className="flex justify-end">
            <Button otherClass="!py-2">Sign In</Button>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <div className="h-px flex-1 bg-neutral-200" />
          <span>or</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <img src="./icons/auth/Group.png" alt="" />
          <img src="./icons/auth/Group (1).png" alt="" />
        </div>

        <div className="text-neutral-500 text-center">
          <span>New user? </span>
          <Link href="/register" className="text-primary-600">
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
