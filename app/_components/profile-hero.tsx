import ButtonComponent from "./button";

export default function ProfileHero({
  type,
  className = "",
  name,
  pfp,
}: HeroProps) {
  return (
    <section
      className={`min-w-full max-w-[1536px] h-[288px] px-[2.5%] flex items-center justify-center gap-6 bg-cover bg-center ${className}`}
    >
      <div className="container flex items-center justify-between xl:px-[50px] 2xl:px-0">
        <div className="flex items-center gap-4">
          <img
            src={pfp}
            alt="User Picture"
            height={100}
            width={100}
            className="rounded-full w-[100px] h-[100px]"
          />

          <div className="flex flex-col gap-3">
            <div>
              <p
                className={`text-white font-bold ${
                  type ? "text-[40px] leading-[48px]" : "text-2xl"
                }`}
              >
                {type ? "Join Snooze Today" : name}
              </p>
              <p
                className={
                  type
                    ? "hidden"
                    : "w-fit text-white px-1 py-0.5 bg-[#D9D9D980] border border-[#0000001A] rounded-[2px] text-xs"
                }
              >
                Registered user
              </p>
            </div>
            <p className="text-white">
              {type
                ? "Create your profile to access all features"
                : "Welcome to Snooze! Start your journey to calmness and relaxation."}
            </p>
          </div>
        </div>

        <div className={type ? "hidden" : "flex flex-col gap-3"}>
          <ButtonComponent
            className="bg-transparent border border-[#F1F6F2] rounded-[8px] text-white"
            text={`Change Password`}
          />
          <ButtonComponent className="bg-accentMain" text={`Start Now`} />
        </div>
      </div>
    </section>
  );
}

interface HeroProps {
  type?: "login";
  className: string;
  name?: string;
  pfp: string;
}
