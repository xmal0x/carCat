import NextAuth, {Profile, Session} from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import {connectToDB} from "@/utils/database";
import User from "@/models/user";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],
    callbacks: {
        async session({session} : {session: Session}) {
            try {
                const sessionUser = await User.findOne({
                    email: session.user.email
                })

                session.user.id = sessionUser._id.toString()

                return session
            } catch (e) {
                console.error('Error in session callback:', e)
                throw e
            }
        },
        async signIn({profile}: {profile: Profile}) {
            try {
                await connectToDB()

                const userExist = await User.findOne({
                    email: profile.email
                })

                if (!userExist) {
                    await User.create({
                        email: profile.email,
                        image: profile.image
                    })
                }

                return true
            } catch (e) {
                console.error('Error in signIn callback:', e);
                throw e;
            }
        }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
