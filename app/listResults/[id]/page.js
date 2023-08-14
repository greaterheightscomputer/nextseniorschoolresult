'use client';
import { addPosition } from '@/actions/resultAction';
import ButtonSubmit from '@/components/ButtonSubmit';
import { useMyContext } from '@/context/Provider';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

const Position = () => {
  const formRef = useRef();
  const router = useRouter();
  const { editResult, setEditResult } = useMyContext();

  async function handleAction(data) {
    const maths = data.get('maths');
    const eng = data.get('eng');
    const biology = data.get('biology');
    const chemistry = data.get('chemistry');
    const physic = data.get('physic');
    const f_maths = data.get('f_maths');
    const civic = data.get('civic');
    const eco = data.get('eco');
    const account = data.get('account');
    const bk_keeping = data.get('bk_keeping');
    const fishries = data.get('fishries');
    const commerce = data.get('commerce');
    const govt = data.get('govt');
    const yoruba = data.get('yoruba');
    const eng_lit = data.get('eng_lit');
    const history = data.get('history');
    const geo = data.get('geo');
    const home_eco = data.get('home_eco');
    const agric = data.get('agric');
    const data_pro = data.get('data_pro');
    const no_in_class = data.get('no_in_class');
    const total_term_score = data.get('total_term_score');
    const position = data.get('position');
    const principal = data.get('principal');

    if (editResult) {
      // console.log('test2222');
      await addPosition({
        maths,
        eng,
        biology,
        chemistry,
        physic,
        f_maths,
        civic,
        eco,
        account,
        bk_keeping,
        fishries,
        commerce,
        govt,
        yoruba,
        eng_lit,
        history,
        geo,
        home_eco,
        agric,
        data_pro,
        id: editResult._id,
      });
    } else {
      await addScoreExam({
        maths,
        eng,
        biology,
        chemistry,
        physic,
        f_maths,
        civic,
        eco,
        account,
        bk_keeping,
        fishries,
        commerce,
        govt,
        yoruba,
        eng_lit,
        history,
        geo,
        home_eco,
        agric,
        data_pro,
        no_in_class,
        total_term_score,
        position,
        principal,
        id: editResult._id,
      });
    }

    // setEditResult();
    formRef.current.reset();
  }
  return (
    <div className="bg-slate-200 pt-32">
      <h1 className="sm:text-4xl text-2xl mb-5 text-center text-slate-800 font-bold">
        Senior Students Subject Position
      </h1>
      <form className="p-5" action={handleAction} ref={formRef}>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Student Id</label>
            <br />
            <input
              type="text"
              name="student_id"
              required
              defaultValue={editResult?.student_id}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Student Name</label>
            <br />
            <input
              type="text"
              name="student_name"
              required
              defaultValue={editResult?.student_name}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Session</label>
            <br />
            <input
              type="text"
              name="session"
              required
              defaultValue={editResult?.session}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Sex</label>
            <br />
            <input
              type="text"
              name="sex"
              required
              defaultValue={editResult?.sex}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Class</label>
            <br />
            <input
              type="text"
              name="classes"
              required
              defaultValue={editResult?.classes}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Term</label>
            <br />
            <input
              type="text"
              name="term"
              required
              defaultValue={editResult?.term}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Class ABC</label>
            <br />
            <input
              type="text"
              name="class_abc"
              required
              defaultValue={editResult?.class_abc}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Teacher Name</label>
            <br />
            <input
              type="text"
              name="teacher"
              required
              defaultValue={editResult?.teacher}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        {/*Subjects*/}
        <div className="border-b-2 border-slate-800 text-xl mb-5">Subjects</div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Mathematics</label>
            <br />
            <input
              type="text"
              name="maths"
              required
              defaultValue={editResult?.position?.maths}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Language</label>
            <br />
            <input
              type="text"
              name="eng"
              required
              defaultValue={editResult?.position?.eng}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Biology</label>
            <br />
            <input
              type="text"
              name="biology"
              defaultValue={editResult?.position?.biology}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Chemistry</label>
            <br />
            <input
              type="text"
              name="chemistry"
              defaultValue={editResult?.position?.chemistry}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Physic</label>
            <br />
            <input
              type="text"
              name="physic"
              defaultValue={editResult?.position?.physic}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Further Maths</label>
            <br />
            <input
              type="text"
              name="f_maths"
              defaultValue={editResult?.position?.f_maths}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Civic Education</label>
            <br />
            <input
              type="text"
              name="civic"
              defaultValue={editResult?.position?.civic}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Economics</label>
            <br />
            <input
              type="text"
              name="eco"
              defaultValue={editResult?.position?.eco}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Account</label>
            <br />
            <input
              type="text"
              name="account"
              defaultValue={editResult?.position?.account}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Book Keeping</label>
            <br />
            <input
              type="text"
              name="bk_keeping"
              defaultValue={editResult?.position?.bk_keeping}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Fishries</label>
            <br />
            <input
              type="text"
              name="fishries"
              defaultValue={editResult?.position?.fishries}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Commerce</label>
            <br />
            <input
              type="text"
              name="commerce"
              defaultValue={editResult?.position?.commerce}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Government</label>
            <br />
            <input
              type="text"
              name="govt"
              defaultValue={editResult?.position?.govt}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Yoruba Language</label>
            <br />
            <input
              type="text"
              name="yoruba"
              defaultValue={editResult?.position?.yoruba}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Literature</label>
            <br />
            <input
              type="text"
              name="eng_lit"
              defaultValue={editResult?.position?.eng_lit}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">History</label>
            <br />
            <input
              type="text"
              name="history"
              defaultValue={editResult?.position?.history}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Geography</label>
            <br />
            <input
              type="text"
              name="geo"
              defaultValue={editResult?.position?.geo}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>

          <div>
            <label className="text-xl">Home Economics</label>
            <br />
            <input
              type="text"
              name="home_eco"
              defaultValue={editResult?.position?.home_eco}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Agricultural Science</label>
            <br />
            <input
              type="text"
              name="agric"
              defaultValue={editResult?.position?.agric}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Data Processing</label>
            <br />
            <input
              type="text"
              name="data_pro"
              defaultValue={editResult?.position?.data_pro}
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        {editResult && (
          <div className="flex flex-wrap">
            <ButtonSubmit value="Add Position" />
            <button
              type="button"
              onClick={() => router.back()}
              //onClick={() => router.push('/')}
              className="bg-slate-800 text-white w-full sm:w-fit py-3 px-10 mt-2 text-xl 
               sm:text-left justify-center sm:mx-10 sm:mt-8"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Position;
