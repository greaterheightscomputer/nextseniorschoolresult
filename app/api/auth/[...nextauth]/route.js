import NextAuth from 'next-auth';
import connectDB from '@/database/mongodb';
import User from '@/models/userModel';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

connectDB();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        const { email, password } = credentials;

        const user = await signInWithCredentials({ email, password });
        // console.log({ user });
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/signin', //app/signin
    error: '/errors', //app/errors
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({ account, profile });
      if (account.type === 'oauth') {
        return await signInWithOAuth({ account, profile });
      }
      return true;
    },
    async jwt({ token, trigger, session }) {
      // console.log({ token });
      // console.log({ trigger, session }); //when update() method is called its add update as the value of trigger

      if (trigger === 'update') {
        token.user.name = session.name;
        token.user.image = session.image;
        token.user.role = session.role;
      } else {
        const user = await getUserByEmail({ email: token.email });
        // console.log(user);
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      // console.log({ session, token });
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

//-------------------------------------------------------
async function signInWithOAuth({ account, profile }) {
  const user = await User.findOne({ email: profile.email });
  if (user) return true; //signin user

  //if !user does not exit signUp, then insert user onto the user collection of mongodb
  const newUser = new User({
    name: profile.name,
    email: profile.email,
    image: profile.picture,
    provider: account.provider,
  });
  // console.log({ newUser });
  await newUser.save();
  return true;
}

async function getUserByEmail({ email }) {
  const user = await User.findOne({ email }).select('-password'); //exclude password
  if (!user) throw new Error('Email does not exist!');

  return { ...user._doc, id: user._id.toString() };
}

async function signInWithCredentials({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Email does not exist!');

  const compare = await bcrypt.compare(password, user.password);
  if (!compare) throw new Error('Password does not match!');

  return { ...user._doc, id: user._id.toString() };
}
