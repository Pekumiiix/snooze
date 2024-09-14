import ProfileForm from "@/app/_components/account-form";

export default function JoinSection() {
  return (
    <section className="container grid grid-cols-2 gap-[60px] items-center py-10">
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
