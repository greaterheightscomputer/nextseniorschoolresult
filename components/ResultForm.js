'use client';
import { createTestOneScore } from '@/actions/resultAction';
import React, { useRef } from 'react';
import ButtonSubmit from './ButtonSubmit';
import { useMyContext } from '@/context/Provider';

const ResultForm = () => {
  const formRef = useRef();
  const { editResult, setEditResult } = useMyContext(); //coming from Provider component

  async function handleAction(data) {
    // 'use server'; //print on the vscode terminat becos its use server
    console.log(editResult);
    const student_id = data.get('student_id');
    const student_name = data.get('student_name');
    const session = data.get('session');
    const sex = data.get('sex');
    const classes = data.get('classes');
    const term = data.get('term');
    const class_abc = data.get('class_abc');
    const teacher = data.get('teacher');
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

    await createTestOneScore({
      student_id,
      student_name,
      session,
      sex,
      classes,
      term,
      class_abc,
      teacher,
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
    });
    // setEditResult(); //clear the fields when updated existing record
    formRef.current.reset(); //clear the fields when insert new record
  }

  return (
    <div className="bg-slate-200 pt-32">
      <h1 className="sm:text-4xl text-2xl mb-5 text-center text-slate-800 font-bold">
        Senior Students Score Records
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
              type="number"
              name="maths"
              required
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Language</label>
            <br />
            <input
              type="number"
              name="eng"
              required
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Biology</label>
            <br />
            <input
              type="number"
              name="biology"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Chemistry</label>
            <br />
            <input
              type="number"
              name="chemistry"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Physic</label>
            <br />
            <input
              type="number"
              name="physic"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Further Maths</label>
            <br />
            <input
              type="number"
              name="f_maths"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Civic Education</label>
            <br />
            <input
              type="number"
              name="civic"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Economics</label>
            <br />
            <input
              type="number"
              name="eco"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Account</label>
            <br />
            <input
              type="number"
              name="account"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Book Keeping</label>
            <br />
            <input
              type="number"
              name="bk_keeping"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Fishries</label>
            <br />
            <input
              type="number"
              name="fishries"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Commerce</label>
            <br />
            <input
              type="number"
              name="commerce"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Government</label>
            <br />
            <input
              type="number"
              name="govt"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Yoruba Language</label>
            <br />
            <input
              type="number"
              name="yoruba"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">English Literature</label>
            <br />
            <input
              type="number"
              name="eng_lit"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">History</label>
            <br />
            <input
              type="number"
              name="history"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Geography</label>
            <br />
            <input
              type="number"
              name="geo"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Home Economics</label>
            <br />
            <input
              type="number"
              name="home_eco"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 items-center mb-6">
          <div>
            <label className="text-xl">Agricultural Science</label>
            <br />
            <input
              type="number"
              name="agric"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
          <div>
            <label className="text-xl">Data Processing</label>
            <br />
            <input
              type="number"
              name="data_pro"
              className="w-full sm:w-96 p-3 px-8 outline-none"
            />
          </div>
        </div>

        <div>
          <ButtonSubmit value="Create" />
        </div>
      </form>
    </div>
  );
};

export default ResultForm;
