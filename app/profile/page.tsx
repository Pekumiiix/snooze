import Image from "next/image";
import Card from "../_components/card";
import ProfileHero from "../_components/profile-hero";
import SectionDescription from "../_components/section-description";

export default function ProfilePage() {
  return (
    <main className="flex flex-col items-center">
      <ProfileHero
        className="h-[288px] bg-[url('/assets/images/profile.png')]"
        pfp={`/assets/images/profile/avatar.png`}
        name="John Doe"
      />

      <section className="container grid grid-cols-2 py-[60px] gap-[60px]">
        <div className="flex flex-col gap-[60px]">
          <SectionDescription
            type="no-image"
            title="Profile"
            subtitle="Manage your Snooze account"
            button="Edit Profile"
          />

          <Card
            type={`breathe`}
            image={`/assets/images/profile/acct.png`}
            title={`John Doe`}
            subtitle={`Email: johndoe@gmail.com.com`}
          />
        </div>

        <Image
          src={`/assets/images/profile/ctn1.png`}
          alt="Background"
          height={590}
          width={648}
        />
      </section>
    </main>
  );
}
