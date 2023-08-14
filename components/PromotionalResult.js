'use client';
import { getPromotionalResult } from '@/actions/resultAction';
import ButtonSubmit from '@/components/ButtonSubmit';
import { redirect } from 'next/navigation';
import ResultDetails from '@/app/result/[id]/page';
import { useMyContext } from '@/context/Provider';

const PromotionalResult = () => {
  const { editResult, setEditResult } = useMyContext();
  // console.log(editResult);

  async function handleResultFields(formData) {
    const studentId = formData.get('studentId');
    const session = formData.get('session');
    const classes = formData.get('classes');

    const promotionalResult = await getPromotionalResult(
      studentId,
      session,
      classes
    );
    // console.log(promotionalResult);
    setEditResult(promotionalResult);

    if (studentId) {
      redirect(`/result/${studentId}`);
    }
  }

  return (
    <form
      action={handleResultFields}
      className="py-32 sm:px-15 px-5  bg-slate-100 "
    >
      <div className="flex flex-wrap gap-x-8 gap-y-4 w-full">
        <input
          type="text"
          name="studentId"
          placeholder="Enter Student ID"
          className="px-3 py-2"
        />
        <input
          type="text"
          name="session"
          placeholder="Enter Session"
          className="px-3 py-2"
        />
        <input
          type="text"
          name="classes"
          placeholder="Enter Class"
          className="px-3 py-2"
        />
      </div>
      <ButtonSubmit value="submit"></ButtonSubmit>
    </form>
  );
};

export default PromotionalResult;
