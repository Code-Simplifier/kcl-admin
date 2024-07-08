import HeroSettingsForm from "@/components/custom/dashboard/settings/hero/form";
import TitleCard from "@/components/custom/TitleCard";

const Settings = () => {
  return (
    <div className="flex flex-col space-y-5 m-3">
      <TitleCard
        title="Content Settings"
        desc="Customize your website's appearance and functionality with ease. Use this settings page to update the content and layout of your home page!"
        src="/img/process.png"
      />
      <div className="p-4 rounded-xl bg-input/50">
        <HeroSettingsForm />
      </div>
    </div>
  );
};

export default Settings;
