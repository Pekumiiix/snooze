import ProfileForm from "@/app/_components/account-form";

export default function JoinSection() {
  return (
    <section className="container flex items-center justify-between gap-[60px] py-10 border-y border-[#0000000d] xl:px-[50px] 2xl:px-0">
      <div className="flex flex-col justify-center">
        <p className="text-[40px] leading-[40px] font-bold text-main">
          Join Snooze Today
        </p>
        <p className="text-main">Create your profile to access all features</p>
      </div>

      <ProfileForm />
    </section>
  );
}
