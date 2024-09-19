import { LinkButton } from '@/components/lib';
import { ListBulletIcon, PlusIcon, PersonIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <section className="via-30%">
      <div className="flex-col-container h-screen">
        <div>
          <PersonIcon className="w-16 h-16 box-content p-6 mx-auto border-2 rounded-full border-neutral-100 text-white" />
        </div>
        <h1 className="m-6 text-4xl font-extrabold tracking-tight md:text-5xl">Light.it patient manager</h1>
        <p className="mb-8 text-lg font-normal text-neutral-300 lg:text-xl sm:px-16 xl:px-48">
          Light.it patient manager is a modern and easy-to-use patient management system for healthcare professionals.
          It helps you to manage your patients and appointments in a simple and efficient way.
        </p>
        <div className="flex flex-col md:flex-row m-10 lg:mb-16 gap-6">
          <LinkButton href="/create" className="md:w-1/2">
            <PlusIcon className="mr-2" width={24} height={24} /> Add patient
          </LinkButton>
          <LinkButton href="/patients" className="md:w-1/2">
            <ListBulletIcon className="mr-2" width={24} height={24} /> View patients
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
