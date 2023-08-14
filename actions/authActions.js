'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '@/models/userModel';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { generateToken, verifyToken } from '@/database/token';
import sendEmail from '@/database/sendEmail';

const BASE_URL = process.env.NEXTAUTH_URL;

export async function updateUser({ name, image, role }) {
  try {
    const session = await getServerSession(authOptions);
    //   console.log(session);
    if (!session) throw new Error('Unauthorization!');

    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
        role,
      },
      { new: true }
    ).select('-password');

    if (!user) throw new Error('Email does not exist!');

    return { msg: 'Update Profile Successfully!' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function signUpWithCredentials(data) {
  // console.log('signUp: ', { data });

  try {
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error('Email already exists!');

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }
    // console.log('signUpHash: ', { data });

    const token = generateToken({ user: data });
    // console.log('signUpToken: ', { token });

    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: 'VERIFY EMAIL',
    });

    return {
      msg: 'Sign Up Success! Check your email to complete the registration.',
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
//password: '$2b$12$x0vlwq1iD9M2f7Vv0dzRfu9OWpz0dbItQaLxMQHwyrrFx8WRZOUIm'
//password: '$2b$12$x0vlwq1iD9M2f7Vv0dzRfu9OWpz0dbItQaLxMQHwyrrFx8WRZOUIm'
//password: '$2b$12$yrwkZvCGltxtJawZXc9Huuf2ETp/1HQoEyy6vLK7QpVVbeIm.7wZC'

export async function verifyWithCredentials(token) {
  try {
    const { user } = verifyToken(token);
    // console.log({ user });
    const userExits = await User.findOne({ email: user.email });
    if (userExits) return { msg: 'Already Existing User!' };

    const newUser = new User(user);
    // console.log(newUser);
    await newUser.save();

    return {
      ...newUser._doc,
      id: newUser._doc._id.toString(),
      msg: 'Verify Success!',
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function ChangePasswordWithCredentials({ old_pass, new_pass }) {
  try {
    const session = await getServerSession(authOptions);
    // console.log({ session });
    if (!session) throw new Error('Unauthorization!');

    if (session?.user?.provider !== 'credentials') {
      throw new Error(
        `This account is signed in with ${session?.user?.provider}. You cannot use this function!`
      );
    }

    const user = await User.findById(session?.user?._id);
    if (!user) throw new Error('User does not exist!');

    const compare = await bcrypt.compare(old_pass, user.password);
    if (!compare) throw new Error('Old password does not match!');

    const newPass = await bcrypt.hash(new_pass, 12);

    await User.findByIdAndUpdate(user._id, { password: newPass });

    return { msg: 'Change Password Successfully!' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function forgotPasswordWithCredentials({ email }) {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Email does not exist!');

    if (user?.provider !== 'credentials') {
      throw new Error(
        `This account is signed in with ${user?.provider}. You cannot use this function!`
      );
    }

    const token = generateToken({ userId: user._id }); //its return userId
    // console.log({ token });

    await sendEmail({
      to: email,
      url: `${BASE_URL}/reset_password?token=${token}`,
      text: 'RESET PASSWORD',
    });

    return { msg: 'Success! Check your email to reset your password' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function resetPasswordWithCredentials({ token, password }) {
  try {
    // console.log({ token, password });
    const { userId } = verifyToken(token); //its return decoded userId like this 64cfe73ce6f6bb6465352d44
    // console.log(userId);
    const newPass = await bcrypt.hash(password, 12);
    await User.findByIdAndUpdate(userId, { password: newPass });

    return { msg: 'Success! Your password has been reset' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
//$2b$12$8AiKAUqYShuq4dc/d8mwR.D5MnjydSao9SHrSLOb2PJN8RI5s.TDe ===123456
//$2b$12$Wrwr8cbQSDzNod2cESrrr.1UME12lb0yBL6DUr3wAjchF61GNl1C. === 123
